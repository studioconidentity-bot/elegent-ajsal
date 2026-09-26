import React, { useState, useMemo } from 'react';
import {
  Search,
  SlidersHorizontal,
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  ShoppingBag,
  Check,
  X,
  ChevronDown,
  Layers,
  Sparkles,
  RotateCcw
} from 'lucide-react';
import { Product, CategoryInfo, DepartmentType } from '../types';
import { HARDWARE_CATEGORIES, GLASSWARE_CATEGORIES, ALL_CATEGORIES, PRODUCTS_CATALOGUE } from '../data/catalogueData';
import { useCart } from '../context/CartContext';

interface CatalogueSectionProps {
  selectedDepartment: DepartmentType;
  onSelectDepartment: (dept: DepartmentType) => void;
  selectedCategoryName: string | null;
  onSelectCategory: (name: string | null) => void;
  onOpenProductDetail: (product: Product) => void;
}

export const CatalogueSection: React.FC<CatalogueSectionProps> = ({
  selectedDepartment,
  onSelectDepartment,
  selectedCategoryName,
  onSelectCategory,
  onOpenProductDetail,
}) => {
  const { addToCart } = useCart();

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFinish, setSelectedFinish] = useState<string>('all');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');
  const [selectedApplication, setSelectedApplication] = useState<string>('all');
  const [selectedAvailability, setSelectedAvailability] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'code-asc' | 'name-asc'>('featured');
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  // Pagination / Load More state
  const [displayCount, setDisplayCount] = useState(12);

  // Wishlist local state tracking
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [addedItemNotice, setAddedItemNotice] = useState<string | null>(null);

  // Categories list for currently active department
  const activeDepartmentCategories = useMemo(() => {
    if (selectedDepartment === 'hardware') return HARDWARE_CATEGORIES;
    if (selectedDepartment === 'glassware') return GLASSWARE_CATEGORIES;
    return ALL_CATEGORIES;
  }, [selectedDepartment]);

  // Current active category info (if selected)
  const currentCategoryInfo = useMemo(() => {
    if (!selectedCategoryName) return null;
    return ALL_CATEGORIES.find((c) => c.name.toLowerCase() === selectedCategoryName.toLowerCase()) || null;
  }, [selectedCategoryName]);

  // Extract available filter option values dynamically
  const availableFinishes = useMemo(() => {
    const finishes = new Set<string>();
    PRODUCTS_CATALOGUE.forEach((p) => p.finish.forEach((f) => finishes.add(f)));
    return Array.from(finishes);
  }, []);

  const availableMaterials = useMemo(() => {
    const materials = new Set<string>();
    PRODUCTS_CATALOGUE.forEach((p) => materials.add(p.material));
    return Array.from(materials);
  }, []);

  const availableApplications = useMemo(() => {
    const apps = new Set<string>();
    PRODUCTS_CATALOGUE.forEach((p) => apps.add(p.application));
    return Array.from(apps);
  }, []);

  // Filtered and Sorted Products
  const filteredProducts = useMemo(() => {
    let result = PRODUCTS_CATALOGUE;

    // 1. Department Filter
    if (selectedDepartment !== 'all') {
      result = result.filter((p) => p.department === selectedDepartment);
    }

    // 2. Category Filter
    if (selectedCategoryName) {
      result = result.filter((p) => p.category.toLowerCase() === selectedCategoryName.toLowerCase());
    }

    // 3. Search Query (matches name, code, category, or short description)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.code.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q)
      );
    }

    // 4. Finish Filter
    if (selectedFinish !== 'all') {
      result = result.filter((p) => p.finish.includes(selectedFinish));
    }

    // 5. Material Filter
    if (selectedMaterial !== 'all') {
      result = result.filter((p) => p.material === selectedMaterial);
    }

    // 6. Application Filter
    if (selectedApplication !== 'all') {
      result = result.filter((p) => p.application === selectedApplication);
    }

    // 7. Availability Filter
    if (selectedAvailability !== 'all') {
      result = result.filter((p) => p.availability === selectedAvailability);
    }

    // 8. Sorting
    return [...result].sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'code-asc') return a.code.localeCompare(b.code);
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      return 0; // featured default
    });
  }, [
    selectedDepartment,
    selectedCategoryName,
    searchQuery,
    selectedFinish,
    selectedMaterial,
    selectedApplication,
    selectedAvailability,
    sortBy,
  ]);

  const visibleProducts = filteredProducts.slice(0, displayCount);
  const hasMore = displayCount < filteredProducts.length;

  const handleAddToCartQuick = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    addToCart({
      id: `${product.id}-${product.finish[0]?.toLowerCase().replace(/\s+/g, '-') || 'std'}`,
      name: product.name,
      department: product.department,
      category: product.category,
      finish: product.finish[0] || 'Standard',
      price: product.price,
      imageUrl: product.imageUrl,
      sku: product.code,
      quantity: 1,
    });
    setAddedItemNotice(`Added ${product.code} to Cart`);
    setTimeout(() => setAddedItemNotice(null), 2500);
  };

  const toggleWishlist = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setWishlistIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedFinish('all');
    setSelectedMaterial('all');
    setSelectedApplication('all');
    setSelectedAvailability('all');
    setSortBy('featured');
    onSelectCategory(null);
  };

  const activeFiltersCount = [
    selectedFinish !== 'all',
    selectedMaterial !== 'all',
    selectedApplication !== 'all',
    selectedAvailability !== 'all',
    Boolean(searchQuery.trim()),
    Boolean(selectedCategoryName),
  ].filter(Boolean).length;

  return (
    <section
      id="product-catalogue-section"
      className="relative w-full bg-[#FAF9F6] text-[#141414] py-16 sm:py-24 border-t border-[#EAE8E3]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating Quick Add Toast */}
        {addedItemNotice && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#141414] text-[#FAF9F6] px-4 py-3 rounded-xs border border-[#333333] shadow-xl text-xs font-mono flex items-center gap-2 animate-fade-in">
            <Check className="w-4 h-4 text-[#22C55E]" />
            <span>{addedItemNotice}</span>
          </div>
        )}

        {/* 1. DIVISION SELECTOR & NAVIGATION TABS */}
        <div className="border-b border-[#E2E0D8] pb-8 mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#73726B] block mb-1">
                Catalogue Specification Index
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#141414]">
                Architectural Catalogue
              </h2>
            </div>

            {/* Division Switcher */}
            <div className="inline-flex p-1 bg-[#EFECE5] border border-[#DDDCD4] rounded-xs self-start sm:self-auto">
              <button
                id="tab-all-departments"
                onClick={() => {
                  onSelectDepartment('all');
                  onSelectCategory(null);
                }}
                className={`px-4 py-1.5 text-xs font-medium uppercase tracking-wider rounded-2xs transition-all ${
                  selectedDepartment === 'all'
                    ? 'bg-[#141414] text-[#FAF9F6] shadow-2xs'
                    : 'text-[#5A5953] hover:text-[#141414]'
                }`}
              >
                All Divisions
              </button>
              <button
                id="tab-hardware-department"
                onClick={() => {
                  onSelectDepartment('hardware');
                  onSelectCategory(null);
                }}
                className={`px-4 py-1.5 text-xs font-medium uppercase tracking-wider rounded-2xs transition-all ${
                  selectedDepartment === 'hardware'
                    ? 'bg-[#141414] text-[#FAF9F6] shadow-2xs'
                    : 'text-[#5A5953] hover:text-[#141414]'
                }`}
              >
                Hardware (14)
              </button>
              <button
                id="tab-glassware-department"
                onClick={() => {
                  onSelectDepartment('glassware');
                  onSelectCategory(null);
                }}
                className={`px-4 py-1.5 text-xs font-medium uppercase tracking-wider rounded-2xs transition-all ${
                  selectedDepartment === 'glassware'
                    ? 'bg-[#141414] text-[#FAF9F6] shadow-2xs'
                    : 'text-[#5A5953] hover:text-[#141414]'
                }`}
              >
                Glassware (4)
              </button>
            </div>
          </div>

          {/* 2. CATEGORY OVERVIEW (SHOWN PROMINENTLY FOR HARDWARE & GLASSWARE) */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] uppercase font-mono tracking-wider text-[#73726B]">
                {selectedDepartment === 'hardware'
                  ? 'Hardware Categories Overview (Select to filter)'
                  : selectedDepartment === 'glassware'
                  ? 'Glassware Structural Lines'
                  : 'Architectural Categories'}
              </span>
              {selectedCategoryName && (
                <button
                  onClick={() => onSelectCategory(null)}
                  className="text-xs text-[#141414] hover:underline font-mono flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>View All In {selectedDepartment.toUpperCase()}</span>
                </button>
              )}
            </div>

            {/* Scrollable / Grid Category Navigation Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
              {activeDepartmentCategories.map((cat) => {
                const isActive = selectedCategoryName?.toLowerCase() === cat.name.toLowerCase();
                return (
                  <button
                    key={cat.id}
                    id={`cat-card-${cat.id}`}
                    onClick={() => {
                      if (isActive) {
                        onSelectCategory(null);
                      } else {
                        onSelectCategory(cat.name);
                      }
                    }}
                    className={`text-left p-2.5 sm:p-3 rounded-xs border transition-all flex flex-col justify-between group overflow-hidden ${
                      isActive
                        ? 'bg-[#141414] text-[#FAF9F6] border-[#141414] ring-1 ring-[#141414]'
                        : 'bg-[#F4F2EC] text-[#2E2E2A] border-[#E2E0D8] hover:border-[#141414] hover:bg-[#EDEAE2]'
                    }`}
                  >
                    <div className="aspect-4/3 w-full bg-white rounded-2xs overflow-hidden mb-2 border border-[#E0DED5]">
                      <img
                        src={cat.imageUrl}
                        alt={cat.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-[9px] font-mono tracking-wider mb-1">
                        <span className={isActive ? 'text-[#AAA9A2]' : 'text-[#73726B]'}>
                          {cat.itemCount} items
                        </span>
                      </div>
                      <h4
                        className={`text-xs font-medium line-clamp-1 ${
                          isActive ? 'text-white' : 'text-[#141414]'
                        }`}
                      >
                        {cat.name}
                      </h4>
                      <p
                        className={`text-[10px] mt-1 line-clamp-2 leading-tight ${
                          isActive ? 'text-[#C5C3BC]' : 'text-[#666660]'
                        }`}
                      >
                        {cat.shortDescription}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3. CATEGORY HEADER & CONTROLS BANNER */}
        <div className="mb-8 space-y-6">
          <div className="border-b border-[#EAE8E3] pb-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#73726B] block mb-1">
                  Active Collection
                </span>
                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#141414]">
                  {selectedCategoryName ||
                    (selectedDepartment === 'hardware'
                      ? 'All Hardware Products'
                      : selectedDepartment === 'glassware'
                      ? 'All Glassware Materials'
                      : 'Complete Architectural Range')}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#666660] font-light max-w-2xl">
                  {currentCategoryInfo
                    ? currentCategoryInfo.shortDescription
                    : 'Engineered components forged from solid AISI 316 stainless steel and precision processed architectural glass.'}
                </p>
              </div>

              <div className="text-xs text-[#73726B] font-mono">
                Showing{' '}
                <span className="text-[#141414] font-semibold">
                  {Math.min(displayCount, filteredProducts.length)}
                </span>{' '}
                of <span className="text-[#141414] font-semibold">{filteredProducts.length}</span>{' '}
                specifications
              </div>
            </div>
          </div>

          {/* 4. SEARCH, FILTER, AND SORT CONTROLS BAR */}
          <div className="bg-[#F4F2EC] border border-[#E2E0D8] p-3 sm:p-4 rounded-xs flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#787770] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="catalogue-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products by name, code (e.g. GPF-40, SH-102), or category..."
                className="w-full pl-9.5 pr-8 py-2.5 bg-white border border-[#DDDCD4] focus:border-[#141414] rounded-xs text-xs text-[#141414] placeholder-[#8F8E88] outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#787770] hover:text-[#141414]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Filter Triggers & Sort Controls */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {/* Finish Filter */}
              <div className="flex items-center gap-1.5 bg-white border border-[#DDDCD4] px-2.5 py-2 rounded-xs text-xs">
                <span className="text-[#787770] font-mono text-[10px] uppercase">Finish:</span>
                <select
                  value={selectedFinish}
                  onChange={(e) => setSelectedFinish(e.target.value)}
                  className="bg-transparent text-[#141414] outline-none text-xs cursor-pointer font-medium"
                >
                  <option value="all">All Finishes</option>
                  {availableFinishes.map((f) => (
                    <option key={f} value={f}>
                      {f}
                    </option>
                  ))}
                </select>
              </div>

              {/* Material Filter */}
              <div className="flex items-center gap-1.5 bg-white border border-[#DDDCD4] px-2.5 py-2 rounded-xs text-xs">
                <span className="text-[#787770] font-mono text-[10px] uppercase">Material:</span>
                <select
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                  className="bg-transparent text-[#141414] outline-none text-xs cursor-pointer font-medium max-w-[130px] truncate"
                >
                  <option value="all">All Materials</option>
                  {availableMaterials.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>

              {/* Application Filter */}
              <div className="flex items-center gap-1.5 bg-white border border-[#DDDCD4] px-2.5 py-2 rounded-xs text-xs">
                <span className="text-[#787770] font-mono text-[10px] uppercase">App:</span>
                <select
                  value={selectedApplication}
                  onChange={(e) => setSelectedApplication(e.target.value)}
                  className="bg-transparent text-[#141414] outline-none text-xs cursor-pointer font-medium"
                >
                  <option value="all">All Applications</option>
                  {availableApplications.map((app) => (
                    <option key={app} value={app}>
                      {app}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-1.5 bg-white border border-[#DDDCD4] px-2.5 py-2 rounded-xs text-xs">
                <span className="text-[#787770] font-mono text-[10px] uppercase">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent text-[#141414] outline-none text-xs cursor-pointer font-medium"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="code-asc">Code: A to Z</option>
                  <option value="name-asc">Name: A to Z</option>
                </select>
              </div>

              {/* Reset Filters button if any active */}
              {activeFiltersCount > 0 && (
                <button
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1 px-3 py-2 text-xs font-mono text-[#787770] hover:text-[#141414] hover:bg-[#EAE8E0] rounded-xs transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Reset ({activeFiltersCount})</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 5. REFINED PRODUCT GRID */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center bg-[#F4F2EC] border border-[#E2E0D8] rounded-xs p-8">
            <h4 className="text-base font-medium text-[#141414] mb-2">No Matching Products Found</h4>
            <p className="text-xs text-[#666660] max-w-md mx-auto mb-6">
              We could not find any specifications matching your active criteria. Try broadening your
              search term or resetting filters.
            </p>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#141414] text-[#FAF9F6] text-xs uppercase tracking-wider rounded-xs hover:bg-black transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>
        ) : (
          <div
            id="catalogue-product-grid"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-6"
          >
            {visibleProducts.map((product) => {
              const isWishlisted = wishlistIds.includes(product.id);
              return (
                <div
                  key={product.id}
                  id={`product-card-${product.id}`}
                  onClick={() => onOpenProductDetail(product)}
                  className="group bg-[#F4F2EC] border border-[#E2E0D8] hover:border-[#141414] transition-all duration-300 rounded-xs flex flex-col justify-between overflow-hidden cursor-pointer"
                >
                  {/* Top Image Container */}
                  <div className="relative aspect-square w-full bg-white overflow-hidden border-b border-[#E4E2DA]">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
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
                      id={`wishlist-btn-${product.id}`}
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

                    {/* Product Code overlay tag on bottom image edge */}
                    <div className="absolute bottom-2 left-2.5 bg-black/65 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded-2xs">
                      {product.code}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-3.5 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      {/* Department & Category */}
                      <div className="flex items-center justify-between text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-[#73726B] mb-1">
                        <span>{product.category}</span>
                        <span className="hidden sm:inline">{product.application}</span>
                      </div>

                      {/* Product Name */}
                      <h4 className="text-xs sm:text-sm font-medium tracking-tight text-[#141414] group-hover:text-black line-clamp-2 transition-colors">
                        {product.name}
                      </h4>

                      {/* Short Description */}
                      <p className="text-[11px] sm:text-xs text-[#666660] font-light leading-relaxed mt-1 line-clamp-2">
                        {product.shortDescription}
                      </p>
                    </div>

                    {/* Price and Technical Metadata */}
                    <div className="pt-2.5 border-t border-[#EAE7DF] space-y-2">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <span className="text-[10px] uppercase font-mono text-[#787770] block">
                            Spec Unit
                          </span>
                          <span className="text-xs sm:text-sm font-mono font-semibold text-[#141414]">
                            ${product.price}
                          </span>
                        </div>

                        {/* Details arrow action */}
                        <div className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] uppercase font-medium text-[#73726B] group-hover:text-[#141414] transition-colors">
                          <span className="hidden sm:inline">Details</span>
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>

                      {/* ADD TO CART Primary Button */}
                      <button
                        id={`add-to-cart-btn-${product.id}`}
                        onClick={(e) => handleAddToCartQuick(e, product)}
                        className="w-full inline-flex items-center justify-center gap-2 py-2 sm:py-2.5 px-3 bg-[#141414] hover:bg-black text-[#FAF9F6] text-[10px] sm:text-xs font-medium uppercase tracking-wider rounded-xs transition-colors shadow-2xs"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 text-[#DDDCD4]" />
                        <span>Add To Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 6. CLEAN LOAD MORE / PAGINATION SYSTEM */}
        {hasMore && (
          <div className="mt-12 sm:mt-16 text-center space-y-3">
            <div className="text-xs text-[#73726B] font-mono">
              Showing {visibleProducts.length} of {filteredProducts.length} items
            </div>
            <div className="w-48 h-1 bg-[#E2E0D8] mx-auto rounded-full overflow-hidden">
              <div
                className="h-full bg-[#141414] transition-all duration-300"
                style={{ width: `${(visibleProducts.length / filteredProducts.length) * 100}%` }}
              />
            </div>
            <button
              id="catalogue-load-more-btn"
              onClick={() => setDisplayCount((prev) => prev + 8)}
              className="inline-flex items-center gap-2 px-8 py-3 bg-white hover:bg-[#141414] hover:text-white border border-[#DDDCD4] hover:border-[#141414] text-xs font-medium uppercase tracking-wider text-[#141414] rounded-xs transition-all shadow-2xs"
            >
              <span>Load More Specifications</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
