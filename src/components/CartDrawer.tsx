import React, { useState } from 'react';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  MessageCircle,
  FileSpreadsheet,
  Check,
  ShieldCheck,
  Building,
  Send,
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    isCartOpen,
    setIsCartOpen,
    totalCount,
    totalAmount,
  } = useCart();

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [projectReference, setProjectReference] = useState('');
  const [contractorEmail, setContractorEmail] = useState('');
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  if (!isCartOpen) return null;

  const handleWhatsAppEnquiry = () => {
    if (items.length === 0) return;

    const itemList = items
      .map(
        (i, index) =>
          `${index + 1}. *${i.name}*\n   • Code: ${i.sku}\n   • Finish / Variant: ${i.finish}\n   • Quantity: ${i.quantity} units\n   • Est. Rate: $${i.price} ea ($${(i.price * i.quantity).toLocaleString()})`
      )
      .join('\n\n');

    const message = `*ELEGANT ARCHITECTURAL HARDWARE — SPECIFICATION ENQUIRY*\n\nHello ELEGANT Trade Desk, please find our Bill of Quantities submittal below:\n\n${itemList}\n\n*ESTIMATED TOTAL:* $${totalAmount.toLocaleString()} USD\n${projectReference ? `*Project Reference:* ${projectReference}\n` : ''}\nPlease provide:\n1. Official Proforma with Trade/Contractor Discount\n2. Product Specification Sheets & CAD (.dwg) Submittals\n3. Current Factory Dispatch & Delivery Lead Times`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/971501234567?text=${encoded}`, '_blank');
  };

  const handleFormalEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contractorEmail) return;
    setOrderSubmitted(true);
    setTimeout(() => {
      setOrderSubmitted(false);
      setIsCheckingOut(false);
      setIsCartOpen(false);
    }, 3500);
  };

  return (
    <div
      id="cart-drawer-overlay"
      className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs transition-opacity duration-300"
      onClick={() => {
        setIsCartOpen(false);
        setIsCheckingOut(false);
      }}
    >
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        {/* Full screen on mobile, max-w-md or lg on desktop */}
        <div
          id="cart-drawer-panel"
          className="w-screen max-w-full sm:max-w-md md:max-w-lg bg-[#FAF9F6] text-[#141414] shadow-2xl flex flex-col border-l border-[#E6E4DD] h-full"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="px-5 sm:px-6 py-4 sm:py-5 border-b border-[#E6E4DD] flex items-center justify-between bg-[#F4F2EB]">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#73726B]">
                  Architectural Bill of Quantities
                </span>
                <span className="px-2 py-0.5 text-[10px] font-mono bg-[#141414] text-[#FAF9F6] rounded-xs">
                  {totalCount} {totalCount === 1 ? 'Spec' : 'Specs'}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-medium tracking-tight text-[#141414] mt-0.5">
                Specification Cart
              </h2>
            </div>
            <button
              id="close-cart-btn"
              onClick={() => {
                setIsCartOpen(false);
                setIsCheckingOut(false);
              }}
              aria-label="Close cart"
              className="p-2 -mr-2 text-[#73726B] hover:text-[#141414] hover:bg-[#EAE7DF] rounded-xs transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-4 divide-y divide-[#EAE7DF]">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 px-4">
                <div className="w-16 h-16 rounded-full border border-[#DCDAD2] flex items-center justify-center text-[#888880] mb-4 bg-[#F2EFE9]">
                  <ShoppingBag className="w-7 h-7 stroke-[1.25]" />
                </div>
                <h3 className="text-base sm:text-lg font-medium text-[#141414]">
                  Your Specification Cart is Empty
                </h3>
                <p className="text-xs text-[#666660] max-w-[280px] mt-1.5 leading-relaxed font-light">
                  Browse through Glassware and Precision Hardware categories to add specified components and finishes.
                </p>
                <button
                  id="empty-cart-browse-btn"
                  onClick={() => {
                    setIsCartOpen(false);
                    const el = document.getElementById('product-catalogue-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 text-xs font-medium uppercase tracking-[0.16em] bg-[#141414] text-[#FAF9F6] hover:bg-black transition-colors rounded-xs shadow-xs"
                >
                  Explore Catalogue <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : isCheckingOut ? (
              /* Formal Trade Checkout / Spec Submittal Form */
              <div className="py-4 space-y-5 animate-fade-in">
                {orderSubmitted ? (
                  <div className="p-8 text-center space-y-3 bg-[#EBF6EE] border border-[#BDE0C7] rounded-xs my-6">
                    <div className="w-12 h-12 mx-auto rounded-full bg-[#22C55E] text-white flex items-center justify-center">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-medium text-[#14532D]">
                      Specification Request Transmitted
                    </h4>
                    <p className="text-xs text-[#166534] font-light max-w-xs mx-auto leading-relaxed">
                      Our commercial engineering desk has received your Bill of Quantities. A formal proforma and CAD submittal will be issued within 4 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormalEnquirySubmit} className="space-y-4">
                    <div className="bg-[#EFECE5] p-3.5 rounded-xs border border-[#E0DED5] text-xs">
                      <div className="font-medium text-[#141414] mb-1 flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-[#141414]" />
                        <span>Commercial Project Submittal</span>
                      </div>
                      <p className="text-[#666660] text-[11px] font-light">
                        Submit this list of {totalCount} items directly to our estimation team for discounted contract pricing.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] uppercase font-mono tracking-wider text-[#5A5953]">
                        Project or Property Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Al Wasl Tower - Level 14 Executive Suites"
                        value={projectReference}
                        onChange={(e) => setProjectReference(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#D5D3CB] rounded-xs text-xs text-[#141414] focus:outline-none focus:border-[#141414]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] uppercase font-mono tracking-wider text-[#5A5953]">
                        Contractor / Architect Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="specification@architects.com"
                        value={contractorEmail}
                        onChange={(e) => setContractorEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#D5D3CB] rounded-xs text-xs text-[#141414] focus:outline-none focus:border-[#141414]"
                      />
                    </div>

                    <div className="p-3 bg-white border border-[#E2E0D8] rounded-xs space-y-1.5 text-xs">
                      <div className="flex justify-between text-[#73726B]">
                        <span>Bill of Quantities Total ({totalCount} items):</span>
                        <span className="font-mono text-[#141414] font-medium">
                          ${totalAmount.toLocaleString()} USD
                        </span>
                      </div>
                      <div className="text-[10px] text-[#22C55E] flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Eligible for 15% - 28% Tiered Trade Discount</span>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col gap-2">
                      <button
                        type="submit"
                        className="w-full py-3 bg-[#141414] text-white hover:bg-black text-xs font-medium uppercase tracking-[0.16em] transition-colors rounded-xs flex items-center justify-center gap-2"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit For Commercial Quote</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setIsCheckingOut(false)}
                        className="w-full py-2.5 text-xs text-[#73726B] hover:text-[#141414] transition-colors"
                      >
                        ← Back to Cart Items
                      </button>
                    </div>
                  </form>
                )}
              </div>
            ) : (
              /* Regular Item List */
              items.map((item) => (
                <div key={`${item.id}-${item.finish}`} className="py-4 flex gap-3.5 sm:gap-4">
                  <div className="w-20 h-20 sm:w-22 sm:h-22 bg-white border border-[#E2E0D8] rounded-xs overflow-hidden shrink-0 flex items-center justify-center p-1">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs sm:text-sm font-medium text-[#141414] leading-snug line-clamp-2">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeItem(item.id, item.finish)}
                          aria-label={`Remove ${item.name}`}
                          className="text-[#999990] hover:text-[#B91C1C] p-1 transition-colors shrink-0"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Selected Variants & SKU */}
                      <div className="flex flex-wrap items-center gap-2 mt-1.5">
                        <span className="text-[10px] uppercase font-mono tracking-wider text-[#73726B] bg-[#EFECE5] px-1.5 py-0.5 rounded-xs">
                          {item.sku}
                        </span>
                        <span className="text-[10px] text-[#B8B6AE]">•</span>
                        <span className="text-[10px] font-medium text-[#2B2B28] px-2 py-0.5 bg-[#E4E1D8] rounded-xs">
                          Finish: {item.finish}
                        </span>
                      </div>
                    </div>

                    {/* Quantity Selector & Price */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#D5D3CB] bg-white rounded-xs">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1, item.finish)}
                          aria-label="Decrease quantity"
                          className="p-1 sm:p-1.5 hover:bg-[#F2EFE9] text-[#666660] transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs font-mono font-medium text-[#141414]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1, item.finish)}
                          aria-label="Increase quantity"
                          className="p-1 sm:p-1.5 hover:bg-[#F2EFE9] text-[#666660] transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-xs sm:text-sm font-semibold text-[#141414] font-mono">
                          ${(item.price * item.quantity).toLocaleString()}
                        </span>
                        {item.quantity > 1 && (
                          <div className="text-[10px] text-[#73726B] font-mono">
                            ${item.price} ea
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Actions */}
          {items.length > 0 && !isCheckingOut && (
            <div className="p-5 sm:p-6 border-t border-[#E6E4DD] bg-[#F4F2EB] space-y-4">
              {/* Financial Summary */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs text-[#73726B]">
                  <span>Specification Subtotal</span>
                  <span className="font-mono text-[#141414]">${totalAmount.toLocaleString()} USD</span>
                </div>
                <div className="flex justify-between items-center text-xs text-[#73726B]">
                  <span>Commercial Trade Terms</span>
                  <span className="text-[11px] font-mono text-[#15803D]">Tiered Project Discount</span>
                </div>
                <div className="pt-2 border-t border-[#DFDCD4] flex justify-between items-baseline">
                  <span className="text-sm font-medium text-[#141414]">Estimated Spec Total</span>
                  <span className="text-base sm:text-lg font-semibold text-[#141414] font-mono">
                    ${totalAmount.toLocaleString()} <span className="text-[10px] font-normal text-[#73726B]">USD</span>
                  </span>
                </div>
              </div>

              {/* Action Buttons: WhatsApp Enquiry, Checkout, and Continue Shopping */}
              <div className="space-y-2.5 pt-1">
                {/* 1. WhatsApp Instant Enquiry with complete item details */}
                <button
                  id="cart-whatsapp-quote-btn"
                  onClick={handleWhatsAppEnquiry}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#141414] text-[#FAF9F6] hover:bg-black text-xs font-medium uppercase tracking-[0.16em] transition-colors rounded-xs shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#22C55E]" />
                  <span>Enquire on WhatsApp (BOQ Spec)</span>
                </button>

                {/* 2. Formal Trade Submittal */}
                <button
                  id="cart-proceed-checkout-btn"
                  onClick={() => setIsCheckingOut(true)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#E8E5DD] hover:bg-[#DDD9CE] text-[#141414] border border-[#D5D2C7] text-xs font-medium uppercase tracking-[0.14em] transition-colors rounded-xs"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5 text-[#5A5953]" />
                  <span>Proceed to Project Enquiry</span>
                </button>

                {/* 3. Continue Shopping */}
                <div className="flex items-center justify-between text-[11px] text-[#73726B] pt-1">
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="hover:text-[#141414] transition-colors underline underline-offset-4"
                  >
                    Continue Shopping
                  </button>
                  <button
                    onClick={clearCart}
                    className="hover:text-[#B91C1C] transition-colors"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
