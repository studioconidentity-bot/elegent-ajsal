import React, { useState, useMemo, useEffect } from 'react';
import {
  ArrowLeft,
  ChevronRight,
  Filter,
  X,
  RotateCcw,
  ShoppingBag,
  Bookmark,
  Share2,
  Check,
  Search,
  MessageCircle,
  Download,
  SlidersHorizontal,
  ArrowUpRight,
} from 'lucide-react';
import { Product, CategoryInfo, DepartmentType } from '../types';
import { ALL_CATEGORIES, PRODUCTS_CATALOGUE } from '../data/catalogueData';
import { useCart } from '../context/CartContext';

interface CategoryCollectionPageProps {
  categoryName: string;
  onBackToCatalogue: () => void;
  onSelectCategory: (categoryName: string) => void;
  onSelectProduct: (product: Product) => void;
  onSelectDepartment?: (dept: DepartmentType) => void;
}

export const CategoryCollectionPage: React.FC<CategoryCollectionPageProps> = ({
  categoryName,
  onBackToCatalogue,
  onSelectCategory,
  onSelectProduct,
  onSelectDepartment,
}) => {
  const { addItem } = useCart();

  // Find the active category metadata
  const categoryMeta = useMemo(() => {
    return (
      ALL_CATEGORIES.find(
        (c) => c.name.toLowerCase() === categoryName.toLowerCase()
      ) || {
        id: categoryName.toLowerCase().replace(/\s+/g, '-'),
        name: categoryName,
        department: 'hardware' as DepartmentType,
        shortDescription: 'Precision engineered architectural fittings and commercial hardware systems.',
        itemCount: 0,
        imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
        specsSummary: 'Commercial Grade • AISI 316',
        badge: 'Architectural Spec',
      }
    );
  }, [categoryName]);

  // Categories in the same division for quick switching (top-level only)
  const siblingCategories = useMemo(() => {
    return ALL_CATEGORIES.filter(
      (c) => c.department === categoryMeta.department && !c.parentCategory
    );
  }, [categoryMeta.department]);

  // Check if current view is Spider Fitting or one of its 5 subcategories
  const isSpiderContext = useMemo(() => {
    const lower = categoryName.toLowerCase();
    return (
      lower === 'spider fitting' ||
      lower === 'spider without fin' ||
      lower === 'spider with fin' ||
      lower === 'fin plates' ||
      lower === 'splice plates' ||
      lower === 'routels' ||
      categoryMeta.parentCategory === 'Spider Fitting'
    );
  }, [categoryName, categoryMeta]);

  // All products strictly belonging to this category or subcategory
  const categoryProducts = useMemo(() => {
    const target = categoryName.toLowerCase();
    return PRODUCTS_CATALOGUE.filter((p) => {
      if (target === 'spider fitting') {
        return (
          p.category.toLowerCase() === 'spider fitting' ||
          p.subcategory?.toLowerCase().includes('spider') ||
          p.subcategory?.toLowerCase().includes('fin') ||
          p.subcategory?.toLowerCase().includes('splice') ||
          p.subcategory?.toLowerCase().includes('routel')
        );
      }
      return (
        p.category.toLowerCase() === target ||
        p.subcategory?.toLowerCase() === target
      );
    });
  }, [categoryName]);

  // Dynamic filter state
  const [selectedFinish, setSelectedFinish] = useState<string>('all');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');
  const [selectedApplication, setSelectedApplication] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name-asc' | 'code'>('featured');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  // Guarantee that whenever this category collection page mounts or switches category,
  // the viewport immediately snaps directly to the top of the page (not the footer)
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    if ((window as any).lenis) {
      (window as any).lenis.resize();
      (window as any).lenis.scrollTo(0, { immediate: true, force: true });
    }

    const t1 = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      if ((window as any).lenis) {
        (window as any).lenis.resize();
        (window as any).lenis.scrollTo(0, { immediate: true, force: true });
      }
    }, 40);

    const t2 = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      if ((window as any).lenis) {
        (window as any).lenis.resize();
        (window as any).lenis.scrollTo(0, { immediate: true, force: true });
      }
    }, 120);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [categoryName]);

  // Available finishes, materials, and applications within this collection
  const availableFinishes = useMemo(() => {
    const set = new Set<string>();
    categoryProducts.forEach((p) => p.finish.forEach((f) => set.add(f)));
    return Array.from(set);
  }, [categoryProducts]);

  const availableMaterials = useMemo(() => {
    const set = new Set<string>();
    categoryProducts.forEach((p) => {
      if (p.material) set.add(p.material);
    });
    return Array.from(set);
  }, [categoryProducts]);

  const availableApplications = useMemo(() => {
    const set = new Set<string>();
    categoryProducts.forEach((p) => {
      if (p.application) set.add(p.application);
    });
    return Array.from(set);
  }, [categoryProducts]);

  // Filtered & sorted products
  const filteredProducts = useMemo(() => {
    let list = [...categoryProducts];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.code.toLowerCase().includes(q) ||
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.material.toLowerCase().includes(q)
      );
    }

    if (selectedFinish !== 'all') {
      list = list.filter((p) => p.finish.includes(selectedFinish));
    }

    if (selectedMaterial !== 'all') {
      list = list.filter((p) => p.material === selectedMaterial);
    }

    if (selectedApplication !== 'all') {
      list = list.filter((p) => p.application === selectedApplication);
    }

    // Sorting
    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name-asc') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'code') {
      list.sort((a, b) => a.code.localeCompare(b.code));
    }

    return list;
  }, [
    categoryProducts,
    searchQuery,
    selectedFinish,
    selectedMaterial,
    selectedApplication,
    sortBy,
  ]);

  const activeFiltersCount = [
    selectedFinish !== 'all',
    selectedMaterial !== 'all',
    selectedApplication !== 'all',
    Boolean(searchQuery.trim()),
  ].filter(Boolean).length;

  const handleResetFilters = () => {
    setSelectedFinish('all');
    setSelectedMaterial('all');
    setSelectedApplication('all');
    setSearchQuery('');
    setSortBy('featured');
  };

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    const defaultFinish = product.finish[0] || 'Standard';
    addItem(product, 1, defaultFinish);
    setAddedNotice(`Added ${product.code} to specification cart`);
    setTimeout(() => setAddedNotice(null), 3200);
  };

  const toggleWishlist = (e: React.MouseEvent, productId: string) => {
    e.stopPropagation();
    setWishlistIds((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const handleWhatsAppCategoryInquiry = () => {
    const text = encodeURIComponent(
      `Hello ELEGANT Architectural Hardware, I am specifying items for a project and would like to request the trade price schedule and submittal data sheet for the ${categoryMeta.name} collection (${categoryProducts.length} specifications available).`
    );
    window.open(`https://wa.me/919999999999?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="category-collection-page" className="w-full min-h-screen bg-[#FAF9F6] text-[#141414] py-8 sm:py-12">
      {/* Floating Add to Cart Confirmation Toast */}
      {addedNotice && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#141414] text-[#FAF9F6] px-4 py-3 rounded-xs border border-[#333333] shadow-xl text-xs font-mono flex items-center gap-2.5 animate-fade-in">
          <Check className="w-4 h-4 text-[#22C55E]" />
          <span>{addedNotice}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. BREADCRUMB & BACK NAVIGATION */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8E6DE] mb-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-[#73726B] overflow-x-auto">
            <button
              onClick={onBackToCatalogue}
              className="hover:text-[#141414] transition-colors shrink-0"
            >
              HOME
            </button>
            <ChevronRight className="w-3 h-3 text-[#AAA9A0] shrink-0" />
            <button
              onClick={() => {
                if (onSelectDepartment) onSelectDepartment(categoryMeta.department);
                onBackToCatalogue();
              }}
              className="hover:text-[#141414] uppercase transition-colors shrink-0"
            >
              {categoryMeta.department}
            </button>
            {categoryMeta.parentCategory && (
              <>
                <ChevronRight className="w-3 h-3 text-[#AAA9A0] shrink-0" />
                <button
                  onClick={() => onSelectCategory(categoryMeta.parentCategory!)}
                  className="hover:text-[#141414] uppercase transition-colors shrink-0"
                >
                  {categoryMeta.parentCategory}
                </button>
              </>
            )}
            <ChevronRight className="w-3 h-3 text-[#AAA9A0] shrink-0" />
            <span className="text-[#141414] font-medium uppercase shrink-0">
              {categoryMeta.name}
            </span>
          </nav>

          <button
            onClick={onBackToCatalogue}
            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-[#444440] hover:text-[#141414] hover:bg-[#EFECE5] rounded-xs border border-[#DDDCD4] transition-colors self-start sm:self-auto"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Categories</span>
          </button>
        </div>

        {/* 2. CATEGORY HERO HEADER */}
        <div className="relative bg-[#F4F2EC] border border-[#E2E0D8] rounded-xs p-6 sm:p-10 mb-8 overflow-hidden">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 text-[10px] uppercase font-mono tracking-widest bg-[#141414] text-[#FAF9F6] rounded-2xs">
                {categoryMeta.department} division
              </span>
              {categoryMeta.badge && (
                <span className="px-2.5 py-0.5 text-[10px] uppercase font-mono tracking-wider bg-white border border-[#DDDCD4] text-[#444440] rounded-2xs">
                  {categoryMeta.badge}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#141414] mb-3">
              {categoryMeta.name}
            </h1>

            <p className="text-sm sm:text-base text-[#5A5953] leading-relaxed mb-6">
              {categoryMeta.shortDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#666660]">
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xs border border-[#DDDCD4]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                {categoryProducts.length} Specifications Available
              </span>
              {categoryMeta.specsSummary && (
                <span className="bg-white px-3 py-1.5 rounded-xs border border-[#DDDCD4]">
                  {categoryMeta.specsSummary}
                </span>
              )}
              <button
                onClick={handleWhatsAppCategoryInquiry}
                className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-3.5 py-1.5 rounded-xs font-sans text-xs font-medium transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>Trade Submittal Enquiry</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3. SIBLING CATEGORY SWITCHER BAR */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#73726B]">
              Switch {categoryMeta.department} Category:
            </span>
            <span className="text-[11px] font-mono text-[#73726B]">
              {siblingCategories.length} Collections
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {siblingCategories.map((cat) => {
              const isActive = cat.name.toLowerCase() === categoryName.toLowerCase();
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    onSelectCategory(cat.name);
                    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
                    document.documentElement.scrollTop = 0;
                    document.body.scrollTop = 0;
                    if ((window as any).lenis) {
                      (window as any).lenis.resize();
                      (window as any).lenis.scrollTo(0, { immediate: true, force: true });
                    }
                  }}
                  className={`px-3.5 py-2 text-xs font-medium uppercase tracking-wider rounded-xs whitespace-nowrap transition-all border ${
                    isActive
                      ? 'bg-[#141414] text-[#FAF9F6] border-[#141414] shadow-xs'
                      : 'bg-[#F4F2EC] text-[#5A5953] border-[#DDDCD4] hover:bg-white hover:text-[#141414]'
                  }`}
                >
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3.5 DEDICATED SPIDER FITTING 5-CATEGORY SELECTOR */}
        {isSpiderContext && (
          <div className="bg-[#EDEAE2] border border-[#DDDCD4] rounded-xs p-5 sm:p-6 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <div className="inline-flex items-center gap-2 text-[10px] uppercase font-mono tracking-widest text-[#73726B] mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#141414]" />
                  <span>Spider Fitting System Categories</span>
                </div>
                <h3 className="text-base sm:text-lg font-medium text-[#141414]">
                  Facade Glazing Product Categories
                </h3>
              </div>
              <span className="text-xs font-mono text-[#73726B]">
                5 Specialized Sub-Categories
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              <button
                onClick={() => onSelectCategory('Spider Fitting')}
                className={`p-3 text-left rounded-xs border transition-all ${
                  categoryName.toLowerCase() === 'spider fitting'
                    ? 'bg-[#141414] text-[#FAF9F6] border-[#141414] shadow-xs'
                    : 'bg-white text-[#2E2E2A] border-[#DDDCD4] hover:border-[#141414]'
                }`}
              >
                <div className="text-[10px] font-mono tracking-wider opacity-70 mb-1">
                  OVERVIEW
                </div>
                <div className="text-xs font-medium">All Spider Fittings</div>
                <div className="mt-1.5 text-[10px] font-mono text-[#888880]">
                  Full System
                </div>
              </button>

              {[
                { id: 'spider-without-fin', name: 'Spider without fin', num: '1', badge: 'Direct Mount' },
                { id: 'spider-with-fin', name: 'Spider with fin', num: '2', badge: 'Fin Support' },
                { id: 'fin-plates', name: 'Fin plates', num: '3', badge: 'Base Anchor' },
                { id: 'splice-plates', name: 'Splice plates', num: '4', badge: 'Fin Splice' },
                { id: 'routels', name: 'Routels', num: '5', badge: 'Ball-Joint' },
              ].map((sub) => {
                const isSubActive = categoryName.toLowerCase() === sub.name.toLowerCase();
                return (
                  <button
                    key={sub.id}
                    onClick={() => onSelectCategory(sub.name)}
                    className={`p-3 text-left rounded-xs border transition-all ${
                      isSubActive
                        ? 'bg-[#141414] text-[#FAF9F6] border-[#141414] shadow-xs'
                        : 'bg-white text-[#2E2E2A] border-[#DDDCD4] hover:border-[#141414] hover:bg-[#FAF9F6]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono tracking-wider opacity-70 mb-1">
                      <span>{sub.num}. CATEGORY</span>
                    </div>
                    <div className="text-xs font-medium line-clamp-1">{sub.name}</div>
                    <div className="mt-1.5">
                      <span
                        className={`inline-block px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-wider rounded-2xs border ${
                          isSubActive
                            ? 'bg-white/20 text-[#FAF9F6] border-white/30'
                            : 'bg-[#F4F2EC] text-[#5A5953] border-[#E0DED5]'
                        }`}
                      >
                        {sub.badge}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 4. FILTER & SORT BAR (MATCHING USER SCREENSHOTS) */}
        <div className="bg-[#F4F2EC] border border-[#E2E0D8] rounded-xs p-4 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Search Input inside this collection */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#888880]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search within ${categoryMeta.name} (e.g. code, finish)...`}
                className="w-full pl-9 pr-8 py-2 bg-white border border-[#D5D3CB] rounded-xs text-xs text-[#141414] placeholder-[#888880] outline-none focus:border-[#141414] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#888880] hover:text-[#141414]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Select Dropdowns */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {/* FINISH */}
              <div className="flex flex-col">
                <label className="text-[9px] uppercase font-mono tracking-wider text-[#73726B] mb-1">
                  Finish:
                </label>
                <select
                  value={selectedFinish}
                  onChange={(e) => setSelectedFinish(e.target.value)}
                  className="w-full bg-white border border-[#D5D3CB] px-2.5 py-1.5 text-xs text-[#141414] rounded-xs outline-none focus:border-[#141414] cursor-pointer"
                >
                  <option value="all">All Finishes</option>
                  {availableFinishes.map((f) => (
                    <option key={f} value={f}>
                      {f}
                    </option>
                  ))}
                </select>
              </div>

              {/* MATERIAL */}
              <div className="flex flex-col">
                <label className="text-[9px] uppercase font-mono tracking-wider text-[#73726B] mb-1">
                  Material:
                </label>
                <select
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                  className="w-full bg-white border border-[#D5D3CB] px-2.5 py-1.5 text-xs text-[#141414] rounded-xs outline-none focus:border-[#141414] cursor-pointer"
                >
                  <option value="all">All Materials</option>
                  {availableMaterials.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>

              {/* APPLICATION */}
              <div className="flex flex-col">
                <label className="text-[9px] uppercase font-mono tracking-wider text-[#73726B] mb-1">
                  App:
                </label>
                <select
                  value={selectedApplication}
                  onChange={(e) => setSelectedApplication(e.target.value)}
                  className="w-full bg-white border border-[#D5D3CB] px-2.5 py-1.5 text-xs text-[#141414] rounded-xs outline-none focus:border-[#141414] cursor-pointer"
                >
                  <option value="all">All Applications</option>
                  {availableApplications.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
              </div>

              {/* SORT */}
              <div className="flex flex-col">
                <label className="text-[9px] uppercase font-mono tracking-wider text-[#73726B] mb-1">
                  Sort:
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full bg-white border border-[#D5D3CB] px-2.5 py-1.5 text-xs text-[#141414] rounded-xs outline-none focus:border-[#141414] cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name-asc">Name A-Z</option>
                  <option value="code">Product Code</option>
                </select>
              </div>
            </div>

            {/* Reset Button */}
            {activeFiltersCount > 0 && (
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#73726B] hover:text-[#141414] hover:bg-[#EAE8E0] rounded-xs transition-colors self-end lg:self-center"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset ({activeFiltersCount})</span>
              </button>
            )}
          </div>
        </div>

        {/* 5. PRODUCT GRID (MATCHING USER SCREENSHOTS) */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center bg-[#F4F2EC] border border-[#E2E0D8] rounded-xs p-8">
            <h4 className="text-base font-medium text-[#141414] mb-2">No Matching Specifications</h4>
            <p className="text-xs text-[#666660] max-w-md mx-auto mb-6">
              No products within {categoryMeta.name} matched your filter criteria. Try resetting the filters.
            </p>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#141414] text-[#FAF9F6] text-xs uppercase tracking-wider rounded-xs hover:bg-black transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        ) : (
          <div
            id="category-product-grid"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {filteredProducts.map((product) => {
              const isWishlisted = wishlistIds.includes(product.id);
              return (
                <div
                  key={product.id}
                  id={`collection-card-${product.id}`}
                  onClick={() => onSelectProduct(product)}
                  className="group bg-[#F4F2EC] border border-[#E2E0D8] hover:border-[#141414] transition-all duration-300 rounded-xs flex flex-col justify-between overflow-hidden cursor-pointer"
                >
                  {/* Top Image Container */}
                  <div className="relative aspect-square w-full bg-white overflow-hidden border-b border-[#E4E2DA] flex items-center justify-center">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className={`w-full h-full ${
                        product.category?.toLowerCase().includes('glass door handle') ||
                        product.category?.toLowerCase().includes('spider') ||
                        product.subcategory?.toLowerCase().includes('spider') ||
                        product.code === 'GSF-B1'
                          ? 'object-contain p-3.5 sm:p-4'
                          : 'object-cover'
                      } group-hover:scale-[1.04] transition-transform duration-500 ease-out`}
                    />

                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3">
                        <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[10px] uppercase font-mono tracking-wider bg-[#141414]/90 text-[#FAF9F6] backdrop-blur-xs rounded-xs">
                          {product.badge}
                        </span>
                      </div>
                    )}

                    {/* Wishlist Bookmark Button */}
                    <button
                      onClick={(e) => toggleWishlist(e, product.id)}
                      aria-label="Save to wishlist"
                      className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 p-1.5 bg-white/90 hover:bg-white text-[#5A5953] hover:text-[#141414] rounded-xs shadow-2xs transition-colors"
                    >
                      <Bookmark
                        className={`w-3.5 h-3.5 ${
                          isWishlisted ? 'fill-[#141414] text-[#141414]' : ''
                        }`}
                      />
                    </button>

                    {/* Bottom Code Indicator Badge over image */}
                    <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3">
                      <span className="px-2 py-0.5 text-[10px] font-mono tracking-wider bg-[#141414] text-[#FAF9F6] rounded-2xs">
                        {product.code}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-3.5 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] uppercase font-mono tracking-[0.18em] text-[#73726B] block mb-1">
                        {product.category}
                      </span>
                      <h3 className="text-xs sm:text-sm font-medium text-[#141414] group-hover:text-black line-clamp-2 leading-snug mb-1.5">
                        {product.name}
                      </h3>
                      <p className="text-[11px] text-[#666660] line-clamp-2 leading-relaxed mb-3">
                        {product.shortDescription}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#E8E6DE]">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <span className="text-[9px] uppercase font-mono tracking-wider text-[#73726B] block">
                            SPEC UNIT
                          </span>
                          <span className="text-sm sm:text-base font-mono font-medium text-[#141414]">
                            ${product.price}
                          </span>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-[#AAA9A0] group-hover:text-[#141414] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>

                      {/* ADD TO CART Button */}
                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className="w-full py-2 px-3 bg-[#141414] hover:bg-black text-[#FAF9F6] text-[11px] uppercase tracking-wider rounded-xs flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 6. TECHNICAL SUBMITTAL SUPPORT BANNER */}
        <div className="mt-16 bg-[#EFECE5] border border-[#DDDCD4] rounded-xs p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#73726B] block mb-1">
              Architectural Technical Assistance
            </span>
            <h4 className="text-lg font-medium text-[#141414] mb-1">
              Need CAD / BIM drawings for {categoryMeta.name}?
            </h4>
            <p className="text-xs text-[#5A5953] max-w-xl">
              Our engineering studio provides 2D/3D DWG profiles, Revit family files, and physical sample submittal packs for project estimation and specification.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleWhatsAppCategoryInquiry}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#141414] hover:bg-black text-[#FAF9F6] text-xs font-medium uppercase tracking-wider rounded-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contact Engineering</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
