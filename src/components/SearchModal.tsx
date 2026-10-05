import React, { useState, useEffect, useMemo } from 'react';
import { Search, X, ArrowRight, ArrowUpRight, Check, ShoppingBag, Layers } from 'lucide-react';
import { PRODUCTS_CATALOGUE, ALL_CATEGORIES } from '../data/catalogueData';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory?: (categoryName: string) => void;
  onSelectProduct?: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectCategory,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      // Default recommended / popular items
      return {
        products: PRODUCTS_CATALOGUE.slice(0, 5),
        categories: ALL_CATEGORIES.slice(0, 4),
      };
    }

    const matchedProducts = PRODUCTS_CATALOGUE.filter(
      (p) =>
        p.code.toLowerCase().includes(q) ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.subcategory?.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q)
    );

    const matchedCategories = ALL_CATEGORIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.shortDescription.toLowerCase().includes(q) ||
        c.department.toLowerCase().includes(q)
    );

    return {
      products: matchedProducts,
      categories: matchedCategories,
    };
  }, [query]);

  if (!isOpen) return null;

  return (
    <div
      id="search-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 px-3 sm:px-4"
      onClick={onClose}
    >
      <div
        id="search-modal-container"
        className="w-full max-w-3xl bg-[#FAF9F6] border border-[#DDDCD4] shadow-2xl rounded-xs overflow-hidden flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative border-b border-[#E6E4DC] flex items-center px-4 sm:px-6 bg-white">
          <Search className="w-5 h-5 text-[#888880] shrink-0 mr-3" />
          <input
            id="site-search-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by code (e.g. GPF-40, SH-102), product name, or category..."
            autoFocus
            className="w-full py-4 text-sm sm:text-base font-normal text-[#1A1A1A] placeholder-[#999990] bg-transparent outline-none"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#888880] hover:text-[#1A1A1A] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] uppercase font-mono tracking-wider text-[#888880] border border-[#DDDCD4] rounded-xs">
              ESC
            </span>
          )}
        </div>

        {/* Quick Category Chips */}
        <div className="px-4 sm:px-6 py-2.5 bg-[#F4F2EC] border-b border-[#E8E6DE] flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-[10px] uppercase tracking-wider text-[#73726B] font-mono shrink-0">
            Quick Jump:
          </span>
          {['Patch Fittings', 'Shower Hinges', 'Glass Connectors', 'Locks Without Cutout', 'Spider Fitting'].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => {
                  if (onSelectCategory) onSelectCategory(cat);
                  onClose();
                }}
                className="px-2.5 py-1 bg-white hover:bg-[#141414] hover:text-white border border-[#DDDCD4] rounded-2xs text-[11px] text-[#2E2E2A] transition-colors shrink-0"
              >
                {cat}
              </button>
            )
          )}
        </div>

        {/* Results Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
          {searchResults.products.length === 0 && searchResults.categories.length === 0 ? (
            <div className="py-12 text-center text-[#73726B] text-xs font-light">
              No architectural specifications found matching &ldquo;{query}&rdquo;.
              <br />
              <span className="text-[11px] text-[#999990] mt-1 block">
                Try searching product codes like &ldquo;GPF-40&rdquo;, &ldquo;SH-102&rdquo;, or &ldquo;Glass Connectors&rdquo;.
              </span>
            </div>
          ) : (
            <>
              {/* Matched Categories */}
              {searchResults.categories.length > 0 && (
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#73726B] block">
                    Matching Categories ({searchResults.categories.length})
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {searchResults.categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          if (onSelectCategory) onSelectCategory(cat.name);
                          onClose();
                        }}
                        className="p-3 bg-white hover:bg-[#F2EFE8] border border-[#E2E0D8] rounded-xs text-left flex items-center justify-between group transition-colors"
                      >
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-medium text-[#141414] group-hover:text-black">
                              {cat.name}
                            </span>
                            <span className="text-[9px] uppercase font-mono px-1.5 py-0.5 bg-[#EAE8E0] text-[#5A5953] rounded-2xs">
                              {cat.department}
                            </span>
                          </div>
                          <p className="text-[10px] text-[#73726B] line-clamp-1 mt-0.5">
                            {cat.shortDescription}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#AAA9A0] group-hover:text-[#141414] group-hover:translate-x-0.5 transition-transform shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched Products */}
              {searchResults.products.length > 0 && (
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#73726B] block">
                    Matching Products ({searchResults.products.length})
                  </span>
                  <div className="divide-y divide-[#EAE7DF] border border-[#E2E0D8] bg-white rounded-xs overflow-hidden">
                    {searchResults.products.map((product) => (
                      <div
                        key={product.id}
                        onClick={() => {
                          if (onSelectProduct) {
                            onSelectProduct(product);
                          } else if (onSelectCategory) {
                            onSelectCategory(product.category);
                          }
                          onClose();
                        }}
                        className="p-3 sm:p-3.5 hover:bg-[#F9F8F5] flex items-center justify-between gap-3 cursor-pointer transition-colors group"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-12 h-12 rounded-2xs object-cover border border-[#E2E0D8] shrink-0"
                          />
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-mono font-semibold bg-[#141414] text-white px-1.5 py-0.2 rounded-2xs">
                                {product.code}
                              </span>
                              <span className="text-xs font-medium text-[#141414] truncate group-hover:text-black">
                                {product.name}
                              </span>
                            </div>
                            <p className="text-[11px] text-[#666660] truncate mt-0.5">
                              {product.category} &bull; {product.material} &bull; {product.finish.join(', ')}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                          <span className="text-xs font-mono font-semibold text-[#141414]">
                            ${product.price}
                          </span>
                          <ArrowUpRight className="w-4 h-4 text-[#AAA9A0] group-hover:text-[#141414] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 sm:px-6 py-2.5 bg-[#EFECE5] border-t border-[#E5E3DB] flex items-center justify-between text-[11px] text-[#73726B]">
          <span>Search by product code, name, or hardware category</span>
          <span className="font-mono">ELEGANT Architectural Index</span>
        </div>
      </div>
    </div>
  );
};
