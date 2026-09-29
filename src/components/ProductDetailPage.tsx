import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Check,
  ShoppingBag,
  MessageCircle,
  ShieldCheck,
  Share2,
  Bookmark,
  ChevronRight,
  Maximize2,
  Layers,
  Truck,
  RotateCcw,
} from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import {
  getProductGallery,
  getEstimatedDimensions,
  ARCHITECTURAL_FINISHES,
  getFinishImages,
} from '../utils/productUtils';
import { PRODUCTS_CATALOGUE } from '../data/catalogueData';

interface ProductDetailPageProps {
  product: Product;
  onBackToCatalogue: () => void;
  onBackToHome?: () => void;
  onSelectCategory: (categoryName: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  onBackToCatalogue,
  onBackToHome,
  onSelectCategory,
  onSelectProduct,
}) => {
  const { addToCart } = useCart();
  const [selectedFinish, setSelectedFinish] = useState<string>('Silver');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showShareNotification, setShowShareNotification] = useState(false);

  const baseGallery = getProductGallery(product, selectedFinish);
  const finishImages = getFinishImages(product);
  const dimensions = getEstimatedDimensions(product);

  // Dynamic gallery where Studio view displays the image for the selected color finish
  const activeFinishImgUrl = finishImages[selectedFinish] || product.imageUrl;
  const isDedicatedPatch =
    product.code === 'GPF-40' || product.id === 'gpf-40' ||
    product.code === 'GPF-50' || product.id === 'gpf-50' ||
    product.code === 'GPF-610' || product.id === 'gpf-610' ||
    product.code === 'GPF-650' || product.id === 'gpf-650' ||
    product.code === 'GPF-620' || product.id === 'gpf-620' ||
    product.code === 'GFS-MFH' || product.id === 'gfs-mfh' ||
    product.code === 'GGC-01A' || product.id === 'ggc-01a' ||
    product.code === 'GGC-01' || product.id === 'ggc-01' ||
    product.code === 'GGC-02' || product.id === 'ggc-02' ||
    product.code === 'GGC-03' || product.id === 'ggc-03' ||
    product.code === 'GGC-04' || product.id === 'ggc-04' ||
    product.code === 'GGC-05' || product.id === 'ggc-05' ||
    product.code === 'GGC-06' || product.id === 'ggc-06' ||
    product.code === 'GSH-11 H/P' || product.id === 'gsh-11-hp' ||
    product.code === 'GSH-11' || product.id === 'gsh-11' ||
    product.code === 'GSH-22' || product.id === 'gsh-22' ||
    product.code === 'GSH-33' || product.id === 'gsh-33' ||
    product.code === 'GSH-55' || product.id === 'gsh-55' ||
    product.code === 'GSH-44' || product.id === 'gsh-44' ||
    product.code === 'GSH-66' || product.id === 'gsh-66' ||
    product.code === 'GGP-04' || product.id === 'ggp-04' ||
    product.code === 'GGP-M1' || product.id === 'ggp-m1' ||
    product.code === 'GGP-06' || product.id === 'ggp-06' ||
    product.code === 'GDH-TB-1' || product.id === 'gdh-tb-1' ||
    product.code === 'GDK-01' || product.id === 'gdk-01' ||
    product.code === 'GDK-02' || product.id === 'gdk-02' ||
    product.code === 'GKH-01' || product.id === 'gkh-01' ||
    product.code === 'GKH-02' || product.id === 'gkh-02' ||
    product.code === 'GKH-03' || product.id === 'gkh-03' ||
    product.code === 'GKH-11' || product.id === 'gkh-11' ||
    product.code === 'GKH-13' || product.id === 'gkh-13' ||
    product.code === 'GKH-06' || product.id === 'gkh-06' ||
    product.code === 'GKH-04' || product.id === 'gkh-04' ||
    product.code === 'GKH-12' || product.id === 'gkh-12' ||
    product.code === 'GKH-16' || product.id === 'gkh-16' ||
    product.code === 'GKH-14' || product.id === 'gkh-14' ||
    product.code === 'GLS-11 A1 FS' || product.id === 'gls-11-a1-fs' ||
    product.code === 'GSL-22A' || product.id === 'gsl-22a' ||
    product.code === 'GSL-44-A1' || product.id === 'gsl-44-a1' ||
    product.code === 'GSL-44-A2' || product.id === 'gsl-44-a2' ||
    product.code === 'GLK-1' || product.id === 'glk-1' ||
    product.code === 'GLK-2' || product.id === 'glk-2' ||
    product.code === 'GLK-3' || product.id === 'glk-3' ||
    product.code === 'GLK-4' || product.id === 'glk-4' ||
    product.code === 'GLK-9' || product.id === 'glk-9';

  const gallery = isDedicatedPatch
    ? baseGallery
    : baseGallery.map((item, idx) => {
        if (idx === 0) {
          return {
            ...item,
            url: activeFinishImgUrl,
            caption: `${selectedFinish} Finish Specification`,
          };
        }
        return item;
      });

  // Synchronize initial state when product changes
  useEffect(() => {
    setActiveImageIndex(0);
    setSelectedFinish('Silver');
    setQuantity(1);
    setIsAdded(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if ((window as any).lenis) {
      (window as any).lenis.resize();
      (window as any).lenis.scrollTo(0, { immediate: true, force: true });
    }
  }, [product.id]);

  const handleSelectFinish = (finishName: string) => {
    setSelectedFinish(finishName);
    // Immediately display the photo corresponding to this finish
    setActiveImageIndex(0);
  };

  const handleAddToCart = () => {
    addToCart({
      id: `${product.id}-${selectedFinish.toLowerCase().replace(/\s+/g, '-')}`,
      name: product.name,
      department: product.department,
      category: product.category,
      finish: selectedFinish,
      price: product.price,
      quantity,
      imageUrl: gallery[activeImageIndex]?.url || activeFinishImgUrl,
      sku: `${product.code}-${selectedFinish.substring(0, 2).toUpperCase()}`,
      leadTime: 'In Stock (Direct Supply)',
    });

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2400);
  };

  const handleWhatsAppEnquiry = () => {
    const text = `*ELEGANT ARCHITECTURAL HARDWARE & GLASSWARE*\n` +
      `Product Specification Enquiry:\n\n` +
      `• *Product:* ${product.name}\n` +
      `• *Product Code:* ${product.code}\n` +
      `• *Selected Finish / Variant:* ${selectedFinish}\n` +
      `• *Specified Quantity:* ${quantity} units\n` +
      `• *Unit Spec Price:* $${product.price} USD\n` +
      `• *Estimated Total:* $${(product.price * quantity).toLocaleString()} USD\n` +
      `• *Application:* ${product.application}\n\n` +
      `Please provide contractor trade discount rates, CAD submittals (.dwg), and dispatch lead time.`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/971501234567?text=${encoded}`, '_blank');
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setShowShareNotification(true);
      setTimeout(() => setShowShareNotification(false), 2500);
    }
  };

  // Related products from the same category or department (excluding this product)
  const relatedProducts = PRODUCTS_CATALOGUE.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div
      id="product-detail-page-container"
      className="w-full bg-[#FAF9F6] text-[#141414] py-8 sm:py-12 border-t border-[#EAE8E3]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#EAE7DF]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#73726B] overflow-x-auto py-1">
            <button
              onClick={onBackToHome || onBackToCatalogue}
              className="hover:text-[#141414] transition-colors flex items-center gap-1 shrink-0"
            >
              <span>Home</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#A3A199] shrink-0" />
            <span className="uppercase shrink-0">{product.department}</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#A3A199] shrink-0" />
            <button
              onClick={() => onSelectCategory(product.category)}
              className="hover:text-[#141414] transition-colors shrink-0 underline underline-offset-2 font-medium text-[#2E2E2A]"
            >
              {product.category}
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#A3A199] shrink-0" />
            <span className="text-[#141414] font-semibold shrink-0 font-mono">
              {product.code}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              id="back-to-catalogue-btn"
              onClick={onBackToCatalogue}
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-[#5A5953] hover:text-[#141414] py-1.5 px-3 border border-[#D5D2C8] rounded-xs transition-colors bg-white shadow-2xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to {product.category}</span>
            </button>

            <button
              onClick={handleShare}
              title="Share specification link"
              className="p-2 border border-[#D5D2C8] rounded-xs bg-white text-[#5A5953] hover:text-[#141414] transition-colors"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Share toast */}
        {showShareNotification && (
          <div className="fixed top-20 right-6 z-50 bg-[#141414] text-[#FAF9F6] px-4 py-2 rounded-xs text-xs font-mono flex items-center gap-2 shadow-lg animate-fade-in">
            <Check className="w-3.5 h-3.5 text-[#22C55E]" />
            <span>Product link copied to clipboard</span>
          </div>
        )}

        {/* Main Product Layout: Gallery on Left, Specs on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT COLUMN: Large Product Image Gallery (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Primary Stage Image */}
            <div
              className={`relative ${
                product.code === 'GLS-11 A1 FS' || product.id === 'gls-11-a1-fs'
                  ? 'aspect-16/9'
                  : 'aspect-square sm:aspect-square lg:aspect-16/11'
              } w-full bg-white border border-[#E2E0D8] rounded-xs overflow-hidden group shadow-2xs`}
            >
              <img
                src={gallery[activeImageIndex]?.url || product.imageUrl}
                alt={`${product.name} - ${gallery[activeImageIndex]?.caption}`}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.02]"
              />

              {/* Badges Overlay */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.badge && (
                  <span className="px-3 py-1 text-[11px] uppercase font-mono tracking-wider bg-[#141414]/90 text-[#FAF9F6] backdrop-blur-xs rounded-xs">
                    {product.badge}
                  </span>
                )}
                <span className="px-2.5 py-0.5 text-[10px] uppercase font-mono tracking-wider bg-white/95 border border-[#DDDCD4] text-[#141414] rounded-xs w-fit">
                  {product.availability}
                </span>
              </div>

              {/* View Tag Label */}
              <div className="absolute bottom-4 left-4">
                <span className="px-2.5 py-1 text-[10px] uppercase font-mono tracking-wider bg-black/60 text-white backdrop-blur-xs rounded-xs">
                  {gallery[activeImageIndex]?.caption || 'Studio Specification'}
                </span>
              </div>
            </div>

            {/* Gallery Thumbnail Strip (Multiple Views: Studio, In-Situ, Detail) */}
            <div className={`grid gap-3 ${gallery.length === 3 ? 'grid-cols-3' : gallery.length === 2 ? 'grid-cols-2' : 'grid-cols-4'}`}>
              {gallery.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative ${
                    product.code === 'GLS-11 A1 FS' || product.id === 'gls-11-a1-fs'
                      ? 'aspect-16/9'
                      : 'aspect-[16/9] sm:aspect-[16/9] lg:aspect-square'
                  } bg-white rounded-xs overflow-hidden border transition-all ${
                    activeImageIndex === idx
                      ? 'border-[#141414] ring-1 ring-[#141414] shadow-xs'
                      : 'border-[#E2E0D8] opacity-75 hover:opacity-100 hover:border-[#8E8D86]'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-1 right-1 px-1 py-0.2 bg-black/70 text-[9px] text-white font-mono uppercase rounded-xs">
                    {img.tag}
                  </div>
                </button>
              ))}
            </div>

            {/* Architectural Specification & Quality Standard Badge */}
            <div className="pt-3 border-t border-[#EAE7DF] flex items-center justify-between gap-3 text-xs text-[#5A5953]">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#73726B]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>EN 1670 Tested</span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#8A8982]">
                Architectural Spec
              </span>
            </div>

            {/* FINISH (SELECT VARIANT): Four color variants in one line with names underneath */}
            <div className="mt-6 pt-5 pb-1 border-t border-[#EAE7DF]">
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#141414] rounded-full" />
                  <label className="text-[11px] uppercase font-mono tracking-[0.16em] text-[#5A5953] font-medium">
                    FINISH (SELECT VARIANT)
                  </label>
                </div>
                <span className="text-xs font-mono font-medium text-[#141414] bg-[#EFECE5] px-2.5 py-0.5 rounded-xs border border-[#DDDCD4]">
                  Active: {selectedFinish}
                </span>
              </div>

              {/* 4 Color Variants in One Horizontal Line with Swatch & Color Name Underneath */}
              <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-2 scrollbar-none">
                {ARCHITECTURAL_FINISHES.map((variant) => {
                  const isSelected = selectedFinish.toLowerCase() === variant.name.toLowerCase();
                  return (
                    <button
                      key={variant.id}
                      type="button"
                      onClick={() => handleSelectFinish(variant.name)}
                      className="group flex flex-col items-center gap-2 focus:outline-none shrink-0"
                      title={`Select ${variant.colorName} finish`}
                    >
                      {/* Swatch Square Box */}
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xs border transition-all duration-200 relative flex items-center justify-center shadow-xs cursor-pointer ${
                          isSelected
                            ? 'ring-2 ring-[#141414] ring-offset-2 ring-offset-[#FAF9F6] border-[#141414] scale-102'
                            : 'border-[#D1CEBF] hover:border-[#73726B] hover:scale-101'
                        }`}
                        style={{ background: variant.swatchGradient }}
                      >
                        {isSelected && (
                          <span
                            className={`w-4 h-4 rounded-full flex items-center justify-center shadow-xs ${
                              variant.id === 'black'
                                ? 'bg-white text-[#141414]'
                                : 'bg-[#141414] text-white'
                            }`}
                          >
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </span>
                        )}
                      </div>

                      {/* Color Name Underneath */}
                      <span
                        className={`text-[11px] sm:text-xs font-mono tracking-wider transition-colors text-center ${
                          isSelected
                            ? 'text-[#141414] font-bold underline underline-offset-4 decoration-1'
                            : 'text-[#5A5953] group-hover:text-[#141414]'
                        }`}
                      >
                        {variant.colorName}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Product Information, Variants & Actions (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Header / Identifiers */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#73726B] bg-[#EFECE5] px-2.5 py-0.5 rounded-xs border border-[#DDDCD4]">
                    REF: {product.code}
                  </span>
                  {(product.code === 'GPF-40' || product.id === 'gpf-40') && (
                    <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#141414] bg-[#E5E2D9] px-2.5 py-0.5 rounded-xs font-semibold border border-[#D5D2C8]">
                      GLS ON PRODUCT
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="flex items-center gap-1.5 text-xs text-[#73726B] hover:text-[#141414] transition-colors py-1 px-2 rounded-xs"
                >
                  <Bookmark
                    className={`w-4 h-4 ${isWishlisted ? 'fill-[#141414] text-[#141414]' : ''}`}
                  />
                  <span className="text-[11px] uppercase tracking-wider font-mono">
                    {isWishlisted ? 'Saved Spec' : 'Save Spec'}
                  </span>
                </button>
              </div>

              <h1 className="text-2xl sm:text-3xl font-normal tracking-tight text-[#141414] leading-[1.2]">
                {product.name}
              </h1>

              {(product.code === 'GPF-40' || product.id === 'gpf-40') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  OVER PANEL SIDE PANEL CONNECTING PATCH WITH PIVOT
                </div>
              )}
              {(product.code === 'GPF-50' || product.id === 'gpf-50') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  WALL MOUNTED OVER PANEL PATCH WITH PIVOT
                </div>
              )}
              {(product.code === 'GPF-610' || product.id === 'gpf-610') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  OVER PANEL SIDE PANEL PATCH CONNECTOR — SMALL L
                </div>
              )}
              {(product.code === 'GPF-650' || product.id === 'gpf-650') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  GLASS TO GLASS CONNECTING PATCH WITH WALL/CEILING
                </div>
              )}
              {(product.code === 'GPF-620' || product.id === 'gpf-620') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  QUADRUPLE PATCH
                </div>
              )}
              {(product.code === 'GFS-MFH' || product.id === 'gfs-mfh') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  MINI FLOOR HINGE
                </div>
              )}
              {(product.code === 'GGC-01A' || product.id === 'ggc-01a') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  U CONNECTOR (SINGLE HOLE)
                </div>
              )}
              {(product.code === 'GGC-01' || product.id === 'ggc-01') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  U CONNECTOR
                </div>
              )}
              {(product.code === 'GGC-02' || product.id === 'ggc-02') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  GLASS TO GLASS 135° CONNECTOR
                </div>
              )}
              {(product.code === 'GGC-03' || product.id === 'ggc-03') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  GLASS TO GLASS 90° CONNECTOR
                </div>
              )}
              {(product.code === 'GGC-04' || product.id === 'ggc-04') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  L CONNECTOR
                </div>
              )}
              {(product.code === 'GGC-05' || product.id === 'ggc-05') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  GLASS TO GLASS 180° CONNECTOR
                </div>
              )}
              {(product.code === 'GGC-06' || product.id === 'ggc-06') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  T-CONNECTOR GLASS TO GLASS 90°
                </div>
              )}
              {(product.code === 'GSH-11 H/P' || product.id === 'gsh-11-hp') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  WALL-TO-GLASS 90° OFFSET HINGE
                </div>
              )}
              {(product.code === 'GSH-11' || product.id === 'gsh-11') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  WALL-TO-GLASS 90° HINGE
                </div>
              )}
              {(product.code === 'GSH-22' || product.id === 'gsh-22') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  GLASS-TO-GLASS 180° HINGE
                </div>
              )}
              {(product.code === 'GSH-33' || product.id === 'gsh-33') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  GLASS-TO-GLASS 135° HINGE
                </div>
              )}
              {(product.code === 'GSH-55' || product.id === 'gsh-55') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  WALL-TO-GLASS 90° FIX BRACKET
                </div>
              )}
              {(product.code === 'GSH-44' || product.id === 'gsh-44') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  GLASS TO GLASS 90° HINGE
                </div>
              )}
              {(product.code === 'GSH-66' || product.id === 'gsh-66') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  DOUBLE GLASS HINGE JOINT (T HINGE)
                </div>
              )}
              {(product.code === 'GGP-04' || product.id === 'ggp-04') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  D SEAL PVC PROFILE
                </div>
              )}
              {(product.code === 'GGP-M1' || product.id === 'ggp-m1') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  MAGNETIC SEAL 180°
                </div>
              )}
              {(product.code === 'GGP-06' || product.id === 'ggp-06') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  F SEAL (BLACK REF: GGP-60 BM)
                </div>
              )}
              {(product.code === 'GDH-TB-1' || product.id === 'gdh-tb-1') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  SHOWER DOOR HANDLE (BLACK VARIANT: GDH-TB-1 BM)
                </div>
              )}
              {(product.code === 'GDK-01' || product.id === 'gdk-01') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  DOOR KNOB (BLACK VARIANT: GDK-01 BM)
                </div>
              )}
              {(product.code === 'GDK-02' || product.id === 'gdk-02') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  DOOR KNOB (BLACK VARIANT: GDK-02 BM)
                </div>
              )}
              {(product.code === 'GKH-01' || product.id === 'gkh-01') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  WALL-TO-PIPE FITTING
                </div>
              )}
              {(product.code === 'GKH-02' || product.id === 'gkh-02') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  ROUND SERIES PIPE-TO-GLASS FITTING
                </div>
              )}
              {(product.code === 'GKH-03' || product.id === 'gkh-03') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  ROUND PIPE-TO-PIPE JOINT FITTING
                </div>
              )}
              {(product.code === 'GKH-11' || product.id === 'gkh-11') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  SQUARE SERIES WALL-TO-PIPE FITTING
                </div>
              )}
              {(product.code === 'GKH-13' || product.id === 'gkh-13') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  SQUARE PIPE-TO-PIPE JOINT FITTING
                </div>
              )}
              {(product.code === 'GKH-06' || product.id === 'gkh-06') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  REINFORCING ROD
                </div>
              )}
              {(product.code === 'GKH-04' || product.id === 'gkh-04') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  PIPE-TO-PIPE T-CONNECTOR
                </div>
              )}
              {(product.code === 'GKH-12' || product.id === 'gkh-12') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  PIPE-TO-GLASS CONNECTOR
                </div>
              )}
              {(product.code === 'GKH-16' || product.id === 'gkh-16') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  REINFORCING ROD — 25MM
                </div>
              )}
              {(product.code === 'GKH-14' || product.id === 'gkh-14') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  PIPE-TO-PIPE T-CONNECTOR
                </div>
              )}
              {(product.code === 'GLS-11 A1 FS' || product.id === 'gls-11-a1-fs') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  GLS-11 A1 FS — 2 MTR. (BLACK VARIANT: GLS-11 A1 BM FS — 2 MTR.)
                </div>
              )}
              {(product.code === 'GSL-22A' || product.id === 'gsl-22a') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  OFFICE SLIDING DOOR SYSTEM FULL SET
                </div>
              )}
              {(product.code === 'GSL-44-A1' || product.id === 'gsl-44-a1') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  SLIDING ROLLER SET (2 ROLLERS, 2 STOPPERS, 1 FLOOR GUIDE)
                </div>
              )}
              {(product.code === 'GSL-44-A2' || product.id === 'gsl-44-a2') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  SLIDING ROLLER SET (BLACK MATT VARIANT: GSL-44-A2 BM)
                </div>
              )}
              {(product.code === 'GLK-1' || product.id === 'glk-1') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  GLASS-TO-GLASS LOCK — ROD LOCK (ONLY KNOB)
                </div>
              )}
              {(product.code === 'GLK-2' || product.id === 'glk-2') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  WALL-TO-GLASS LOCK — ROD LOCK (ONLY KNOB)
                </div>
              )}
              {(product.code === 'GLK-3' || product.id === 'glk-3') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  KEY & KNOB GLASS-TO-GLASS LOCK (VARIANT: GLK-3 BM)
                </div>
              )}
              {(product.code === 'GLK-4' || product.id === 'glk-4') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  KEY & KNOB WALL-TO-GLASS LOCK
                </div>
              )}
              {(product.code === 'GLK-9' || product.id === 'glk-9') && (
                <div className="text-xs font-mono uppercase tracking-wider text-[#73726B] mt-1 font-medium">
                  GLASS-TO-GLASS LOCK — KEY & KNOB
                </div>
              )}

              {/* Price & Commercial Note */}
              <div className="mt-3 flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-medium font-mono text-[#141414]">
                  ${product.price}
                </span>
                <span className="text-xs text-[#73726B] font-light">
                  USD Trade Spec Price / Unit
                </span>
              </div>
              <p className="text-[11px] text-[#15803D] font-mono mt-0.5">
                • Tiered contractor discounts available on Bill of Quantities
              </p>
            </div>

            {/* SHORT DESCRIPTION */}
            <div className="space-y-1.5 pt-1">
              <div className="text-[10px] uppercase font-mono tracking-widest text-[#73726B] font-semibold">
                SHORT DESCRIPTION
              </div>
              <p className="text-xs sm:text-sm text-[#44433E] leading-relaxed font-light">
                {product.shortDescription}
              </p>
            </div>

            {/* PRODUCT HIGHLIGHTS */}
            {product.features && product.features.length > 0 && (
              <div className="border border-[#E2E0D8] bg-white rounded-xs p-4 space-y-2.5 shadow-2xs">
                <div className="text-[10px] uppercase font-mono tracking-widest text-[#73726B] pb-1.5 border-b border-[#EAE7DF] flex items-center justify-between">
                  <span className="font-semibold text-[#141414]">PRODUCT HIGHLIGHTS</span>
                  <span className="font-mono text-[10px] text-[#73726B]">{product.code}</span>
                </div>
                <ul className="space-y-2 pt-0.5">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#2A2A26]">
                      <Check className="w-3.5 h-3.5 text-[#141414] mt-0.5 shrink-0 stroke-[2.5]" />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Specified Finish Confirmation Box in Right Column */}
            <div className="flex items-center justify-between py-2.5 px-3 bg-[#F4F2EC] rounded-xs border border-[#E2E0D8] text-xs font-mono">
              <span className="text-[#73726B] uppercase tracking-wider">Specified Finish:</span>
              <span className="font-medium text-[#141414] flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full border border-black/20"
                  style={{
                    background:
                      ARCHITECTURAL_FINISHES.find(
                        (f) => f.name.toLowerCase() === selectedFinish.toLowerCase()
                      )?.swatchGradient || '#CBD5E1',
                  }}
                />
                {selectedFinish} • Commercial Spec
              </span>
            </div>

            {/* SPECIFICATIONS TABLE */}
            <div className="border border-[#E2E0D8] bg-[#F4F2EB] rounded-xs p-4 space-y-2.5 text-xs">
              <div className="text-[10px] uppercase font-mono tracking-widest text-[#73726B] pb-1.5 border-b border-[#E4E2DA] flex justify-between items-center">
                <span className="font-semibold text-[#141414]">SPECIFICATIONS</span>
                <span className="font-mono text-[9px] text-[#73726B]">SPECIFICATION • DETAILS</span>
              </div>

              {product.specifications && product.specifications.length > 0 ? (
                <div className="divide-y divide-[#E6E4DD]">
                  <div className="grid grid-cols-12 py-1.5 text-[10px] font-mono uppercase tracking-wider text-[#73726B]">
                    <span className="col-span-5 font-semibold">Specification</span>
                    <span className="col-span-7 font-semibold text-right">Details</span>
                  </div>
                  {product.specifications.map((spec, idx) => (
                    <div key={idx} className="grid grid-cols-12 py-1.5 gap-2 items-center">
                      <span className="col-span-5 text-[#5A5953] font-medium">{spec.label}</span>
                      <span className="col-span-7 font-mono text-[#141414] font-medium text-right text-[11px] sm:text-xs">
                        {spec.label.toLowerCase() === 'colour / variant'
                          ? `${spec.value} (Selected: ${selectedFinish})`
                          : spec.label.toLowerCase() === 'finish' && selectedFinish !== 'Silver'
                          ? `${selectedFinish} finish`
                          : spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-1 border-b border-[#E8E6DF]">
                    <span className="text-[#666660]">Material Metallurgy</span>
                    <span className="font-mono text-[#141414] font-medium text-right">
                      {product.material}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-1 border-b border-[#E8E6DF]">
                    <span className="text-[#666660]">Selected Variant</span>
                    <span className="font-mono text-[#141414] font-medium text-right">
                      {selectedFinish}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-1 border-b border-[#E8E6DF]">
                    <span className="text-[#666660]">Application</span>
                    <span className="text-[#141414] font-medium text-right">
                      {product.application}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-1 border-b border-[#E8E6DF]">
                    <span className="text-[#666660]">Overall Dimensions</span>
                    <span className="font-mono text-[#141414] text-right">
                      {dimensions}
                    </span>
                  </div>

                  {product.glassThickness && (
                    <div className="flex justify-between items-center py-1 border-b border-[#E8E6DF]">
                      <span className="text-[#666660]">Glass Compatibility</span>
                      <span className="font-mono text-[#141414] text-right">
                        {product.glassThickness}
                      </span>
                    </div>
                  )}

                  {product.loadCapacity && (
                    <div className="flex justify-between items-center py-1">
                      <span className="text-[#666660]">Max Working Capacity</span>
                      <span className="font-mono text-[#141414] text-right">
                        {product.loadCapacity}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* QUANTITY & ACTIONS */}
            <div className="pt-2 space-y-3">
              <div className="flex items-center gap-3">
                {/* Quantity Stepper */}
                <div className="flex items-center border border-[#D5D3CB] bg-white rounded-xs h-11">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    aria-label="Decrease quantity"
                    className="px-3.5 h-full text-xs font-mono text-[#5A5953] hover:text-black hover:bg-[#F2EFE9] transition-colors"
                  >
                    -
                  </button>
                  <span className="px-3.5 text-xs font-mono font-medium text-[#141414]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    aria-label="Increase quantity"
                    className="px-3.5 h-full text-xs font-mono text-[#5A5953] hover:text-black hover:bg-[#F2EFE9] transition-colors"
                  >
                    +
                  </button>
                </div>

                {/* ADD TO CART BUTTON (With subtle confirmation) */}
                <button
                  id="product-page-add-to-cart-btn"
                  onClick={handleAddToCart}
                  className={`flex-1 h-11 inline-flex items-center justify-center gap-2 px-6 text-xs font-medium uppercase tracking-[0.16em] rounded-xs transition-all shadow-xs ${
                    isAdded
                      ? 'bg-[#15803D] text-white'
                      : 'bg-[#141414] hover:bg-black text-[#FAF9F6]'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>Added to Spec Cart</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add To Cart (${(product.price * quantity).toLocaleString()})</span>
                    </>
                  )}
                </button>
              </div>

              {/* WHATSAPP / ENQUIRY OPTION */}
              <button
                id="product-page-whatsapp-btn"
                onClick={handleWhatsAppEnquiry}
                className="w-full h-11 inline-flex items-center justify-center gap-2.5 px-6 border border-[#22C55E]/40 hover:border-[#22C55E] bg-[#F4FAF5] hover:bg-[#EBF7EE] text-[#14532D] text-xs font-medium uppercase tracking-[0.14em] rounded-xs transition-colors shadow-2xs"
              >
                <MessageCircle className="w-4 h-4 text-[#22C55E]" />
                <span>Enquire on WhatsApp With This Spec</span>
              </button>
            </div>

            {/* Commercial Pillars Guarantee */}
            <div className="pt-3 border-t border-[#EAE7DF] grid grid-cols-3 gap-2 text-center">
              <div className="p-2 bg-[#F3F1EB] rounded-xs">
                <Truck className="w-3.5 h-3.5 text-[#5A5953] mx-auto mb-1" />
                <div className="text-[10px] font-mono text-[#4A4944]">Dispatch 24h</div>
              </div>
              <div className="p-2 bg-[#F3F1EB] rounded-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#5A5953] mx-auto mb-1" />
                <div className="text-[10px] font-mono text-[#4A4944]">AISI 316 Test</div>
              </div>
              <div className="p-2 bg-[#F3F1EB] rounded-xs">
                <RotateCcw className="w-3.5 h-3.5 text-[#5A5953] mx-auto mb-1" />
                <div className="text-[10px] font-mono text-[#4A4944]">Trade Spec</div>
              </div>
            </div>
          </div>
        </div>

        {/* RELATED PRODUCTS SECTION */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[#EAE7DF]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#73726B]">
                  Coordinated Assemblies
                </span>
                <h3 className="text-xl sm:text-2xl font-normal tracking-tight text-[#141414] mt-1">
                  Frequently Specified With {product.code}
                </h3>
              </div>
              <button
                onClick={() => onSelectCategory(product.category)}
                className="text-xs font-medium uppercase tracking-wider text-[#141414] hover:underline underline-offset-4 font-mono"
              >
                View All {product.category} →
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectProduct(rel)}
                  className="group bg-white border border-[#E2E0D8] hover:border-[#141414] transition-all rounded-xs overflow-hidden cursor-pointer flex flex-col justify-between"
                >
                  <div className="aspect-square w-full bg-[#FAF9F6] overflow-hidden border-b border-[#EAE7DF]">
                    <img
                      src={rel.imageUrl}
                      alt={rel.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#73726B]">
                      {rel.code}
                    </span>
                    <h4 className="text-xs font-medium text-[#141414] line-clamp-1 group-hover:underline">
                      {rel.name}
                    </h4>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs font-mono font-medium text-[#141414]">
                        ${rel.price}
                      </span>
                      <span className="text-[10px] uppercase font-mono text-[#73726B]">
                        View Spec →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
