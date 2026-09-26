import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem } from '../types';

interface AddToCartPayload {
  id: string;
  name: string;
  department: 'glassware' | 'hardware';
  category: string;
  finish: string;
  price: number;
  quantity?: number;
  imageUrl: string;
  sku: string;
  leadTime?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void;
  addToCart: (item: AddToCartPayload) => void;
  removeItem: (id: string, finish?: string) => void;
  updateQuantity: (id: string, quantity: number, finish?: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  lastAddedItem: CartItem | null;
  totalCount: number;
  totalAmount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = 'elegant_cart_items_v2';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to load cart from storage', e);
      }
    }
    // Default initial demonstration specification item
    return [
      {
        id: 'gpf-40-silver',
        name: 'GPF-40 Over Panel Side Panel Connecting Patch with Pivot',
        department: 'hardware',
        category: 'Patch Fittings',
        finish: 'Silver',
        price: 340,
        quantity: 2,
        imageUrl: 'https://res.cloudinary.com/cbi5mcab/image/upload/v1789997542/GPF-40_S_f8mxdl.webp',
        sku: 'GPF-40-SLV',
        leadTime: 'In Stock (Immediate Dispatch)',
      },
    ];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [lastAddedItem, setLastAddedItem] = useState<CartItem | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save cart to storage', e);
    }
  }, [items]);

  const addToCart = (payload: AddToCartPayload) => {
    const qty = payload.quantity && payload.quantity > 0 ? payload.quantity : 1;
    const itemToAdd: CartItem = {
      id: payload.id,
      name: payload.name,
      department: payload.department,
      category: payload.category,
      finish: payload.finish,
      price: payload.price,
      quantity: qty,
      imageUrl: payload.imageUrl,
      sku: payload.sku,
      leadTime: payload.leadTime || 'Standard Trade Supply',
    };

    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (i) => i.id === itemToAdd.id && i.finish === itemToAdd.finish
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + qty,
        };
        return next;
      }
      return [...prev, itemToAdd];
    });

    setLastAddedItem(itemToAdd);
    // Auto-clear notification after 2.5 seconds
    setTimeout(() => {
      setLastAddedItem(null);
    }, 2500);
  };

  const addItem = (item: Omit<CartItem, 'quantity'>, quantity: number = 1) => {
    addToCart({ ...item, quantity });
  };

  const removeItem = (id: string, finish?: string) => {
    setItems((prev) =>
      prev.filter((i) => !(i.id === id && (!finish || i.finish === finish)))
    );
  };

  const updateQuantity = (id: string, quantity: number, finish?: string) => {
    if (quantity <= 0) {
      removeItem(id, finish);
      return;
    }
    setItems((prev) =>
      prev.map((i) => {
        if (i.id === id && (!finish || i.finish === finish)) {
          return { ...i, quantity };
        }
        return i;
      })
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        addToCart,
        removeItem,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        lastAddedItem,
        totalCount,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
