import React, { useState } from 'react';
import { X, Check, ShoppingBag, ShieldCheck, Download, Bookmark, MessageCircle, Layers, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { getFinishImages } from '../utils/productUtils';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onSelectCategory?: (categoryName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onSelectCategory,
}) => {
  const { addToCart } = useCart();
  const [selectedFinish, setSelectedFinish] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  React.useEffect(() => {
    if (product) {
      setSelectedFinish(product.finish[0] || 'Standard');
      setQuantity(1);
      setIsAdded(false);
    }
  }, [product]);

  if (!product) return null;

  const finishImages = getFinishImages(product);
  const currentImg = (selectedFinish && finishImages[selectedFinish]) || product.imageUrl;

  const handleAddToCart = () => {
    addToCart({
      id: `${product.id}-${selectedFinish.toLowerCase().replace(/\s+/g, '-')}`,
      name: product.name,
      department: product.department,
      category: product.category,
      finish: selectedFinish,
      price: product.price,
      imageUrl: currentImg,
      sku: `${product.code}-${selectedFinish.substring(0, 2).toUpperCase()}`,
      quantity,
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2200);
  };

  const handleWhatsAppConsultation = () => {
    const text = encodeURIComponent(
      `Hello ELEGANT team, I would like to inquire about specifications and commercial pricing for Product: ${product.name} (Code: ${product.code}), Finish: ${selectedFinish}.`
    );
    window.open(`https://wa.me/971501234567?text=${text}`, '_blank');
  };

  return (
    <div
      id="product-detail-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="product-detail-modal-card"
        className="relative w-full max-w-3xl bg-[#FAF9F6] border border-[#DDDCD4] shadow-2xl rounded-xs overflow-hidden my-auto flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-5 sm:px-8 py-3.5 border-b border-[#E8E6DE] bg-[#F4F2EC] flex items-center justify-between">
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-[#6B6A64]">
            <span>{product.department.toUpperCase()}</span>
            <span>/</span>
            <button
              onClick={() => {
                if (onSelectCategory) onSelectCategory(product.category);
                onClose();
              }}
              className="text-[#141414] hover:underline"
            >
              {product.category}
            </button>
            <span>/</span>
            <span className="text-[#141414] font-semibold">{product.code}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1 text-[#787770] hover:text-[#141414] hover:bg-[#EAE8E0] rounded-xs transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left Column: Large Product Imagery */}
            <div className="space-y-3">
              <div className="relative aspect-square w-full bg-white border border-[#E2E0D8] rounded-xs overflow-hidden group">
                <img
                  src={currentImg}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-[10px] uppercase font-mono tracking-wider bg-[#141414]/90 text-[#FAF9F6] backdrop-blur-xs rounded-xs">
                      {product.badge}
                    </span>
                  </div>
                )}
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 text-[10px] uppercase font-mono tracking-wider bg-white/90 border border-[#DDDCD4] text-[#141414] rounded-xs">
                    {product.availability}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#73726B] font-mono px-1">
                <span>Direct Architectural Dispatch</span>
                <span>AISI 316 Certified</span>
              </div>
            </div>

            {/* Right Column: Specifications & Actions */}
            <div className="space-y-5">
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[11px] font-mono tracking-widest text-[#73726B] uppercase">
                    Ref: {product.code}
                  </span>
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="flex items-center gap-1.5 text-xs text-[#73726B] hover:text-[#141414] transition-colors"
                  >
                    <Bookmark
                      className={`w-4 h-4 ${isWishlisted ? 'fill-[#141414] text-[#141414]' : ''}`}
                    />
                    <span className="text-[10px] uppercase tracking-wider">
                      {isWishlisted ? 'Saved' : 'Save Spec'}
                    </span>
                  </button>
                </div>

                <h3 className="text-2xl font-normal tracking-tight text-[#141414] leading-snug">
                  {product.name}
                </h3>

                <div className="mt-2 text-xl font-mono text-[#141414]">
                  ${product.price}{' '}
                  <span className="text-xs text-[#73726B] font-sans font-normal">
                    (Architectural Trade Spec Price)
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#61605A] leading-relaxed font-light">
                {product.description || product.shortDescription}
              </p>

              {/* Finish Selection */}
              <div>
                <label className="block text-[11px] uppercase font-mono tracking-wider text-[#5A5953] mb-2">
                  Select Architectural Finish:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.finish.map((f) => (
                    <button
                      key={f}
                      onClick={() => setSelectedFinish(f)}
                      className={`px-3 py-1.5 text-xs border rounded-xs transition-colors ${
                        selectedFinish === f
                          ? 'border-[#141414] bg-[#141414] text-white font-medium'
                          : 'border-[#D5D3CB] bg-white text-[#2E2E2A] hover:border-[#141414]'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Technical Spec Table */}
              <div className="border border-[#E2E0D8] bg-[#F5F3ED] rounded-xs p-3.5 space-y-2 text-xs">
                <div className="flex justify-between pb-1.5 border-b border-[#E4E2DA]">
                  <span className="text-[#73726B]">Base Metallurgy</span>
                  <span className="text-[#141414] font-medium font-mono">{product.material}</span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-[#E4E2DA]">
                  <span className="text-[#73726B]">Application</span>
                  <span className="text-[#141414] font-medium">{product.application}</span>
                </div>
                {product.glassThickness && (
                  <div className="flex justify-between pb-1.5 border-b border-[#E4E2DA]">
                    <span className="text-[#73726B]">Glass Thickness</span>
                    <span className="text-[#141414] font-medium font-mono">
                      {product.glassThickness}
                    </span>
                  </div>
                )}
                {product.loadCapacity && (
                  <div className="flex justify-between">
                    <span className="text-[#73726B]">Working Load</span>
                    <span className="text-[#141414] font-medium font-mono">
                      {product.loadCapacity}
                    </span>
                  </div>
                )}
              </div>

              {/* Quantity & Add to Cart Controls */}
              <div className="pt-2 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-[#D5D3CB] bg-white rounded-xs">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-xs font-mono text-[#5A5953] hover:text-black"
                    >
                      -
                    </button>
                    <span className="px-3 py-2 text-xs font-mono font-medium text-[#141414]">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-xs font-mono text-[#5A5953] hover:text-black"
                    >
                      +
                    </button>
                  </div>

                  <button
                    id="modal-add-to-cart-btn"
                    onClick={handleAddToCart}
                    className={`flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-medium uppercase tracking-wider rounded-xs transition-colors shadow-xs ${
                      isAdded
                        ? 'bg-[#15803D] text-white'
                        : 'bg-[#141414] hover:bg-black text-[#FAF9F6]'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Cart</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add To Cart</span>
                      </>
                    )}
                  </button>
                </div>

                <button
                  onClick={handleWhatsAppConsultation}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 border border-[#CCC9C0] hover:border-[#141414] bg-white text-[#2E2E2A] text-xs font-medium uppercase tracking-wider rounded-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#22C55E]" />
                  <span>Request WhatsApp Trade Quote</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="px-5 sm:px-8 py-2.5 bg-[#EFECE5] border-t border-[#E5E3DB] flex items-center justify-between text-[11px] text-[#73726B]">
          <span>Full CAD & Submittal Sheets ready for download in Stage 03</span>
          <span className="font-mono">EN 1670 Standard</span>
        </div>
      </div>
    </div>
  );
};
