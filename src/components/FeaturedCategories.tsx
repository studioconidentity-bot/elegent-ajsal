import React from 'react';
import { ArrowRight, ArrowUpRight, Grid, SlidersHorizontal } from 'lucide-react';
import { DepartmentType } from '../types';

interface FeaturedCategoriesProps {
  onSelectCategory?: (categoryName: string) => void;
  onViewAllProducts?: () => void;
}

interface CategoryCardItem {
  id: string;
  name: string;
  department: 'Hardware';
  badge: string;
  shortDescription: string;
  imageUrl: string;
  technicalHighlights: string;
}

const FEATURED_CATEGORIES: CategoryCardItem[] = [
  {
    id: 'patch-fittings',
    name: 'Patch Fittings',
    department: 'Hardware',
    badge: 'Hydraulic Soft-Close',
    shortDescription: 'Concealed floor spring pivot fittings with dual-speed valve deceleration for frameless tempered glass doors.',
    imageUrl: 'https://res.cloudinary.com/cbi5mcab/image/upload/v1789997542/GPF-40_S_f8mxdl.webp',
    technicalHighlights: '10mm–15mm Glass • 120kg Capacity',
  },
  {
    id: 'glass-connectors',
    name: 'Glass Connectors',
    department: 'Hardware',
    badge: 'Solid Block 316',
    shortDescription: 'Structural 90° and 180° monolithic edge clamps and balustrade pins engineered for maximum shear resistance.',
    imageUrl: 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790010808/GGC-01A_S_qll6ek.webp',
    technicalHighlights: 'Heavy-Duty Shear • EPDM Isolators',
  },
  {
    id: 'shower-hinges',
    name: 'Shower Hinges',
    department: 'Hardware',
    badge: '200k Cycles Tested',
    shortDescription: 'Precision self-centering glass-to-wall and glass-to-glass dual action spring hinges in brushed satin and mirror finishes.',
    imageUrl: 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790157960/GSH_11_irrmax.webp',
    technicalHighlights: 'Zero-Point Cam • 8mm–12mm Tempered',
  },
  {
    id: 'glass-door-handles',
    name: 'Glass Door Handles',
    department: 'Hardware',
    badge: 'Ergonomic Grip',
    shortDescription: 'Architectural tubular ladder handles, offset pull bars, and recessed back-to-back stainless grips with secure nylon bushings.',
    imageUrl: 'https://res.cloudinary.com/cbi5mcab/image/upload/v1791016423/GDH11_wpt7sg.webp',
    technicalHighlights: '450mm–1800mm Lengths • Anti-Rattle',
  },
  {
    id: 'sliding-systems',
    name: 'Sliding Systems',
    department: 'Hardware',
    badge: 'Acoustic Damped',
    shortDescription: 'Top-hung suspended roller assemblies with integrated soft-stop hydraulic dampers and concealed flush floor guides.',
    imageUrl: 'https://res.cloudinary.com/cbi5mcab/image/upload/v1790690879/GLS-11_A1_S_k3zmh4.webp',
    technicalHighlights: 'Whisper-Quiet Rollers • 150kg Leaf',
  },
  {
    id: 'spider-fitting',
    name: 'Spider Fitting',
    department: 'Hardware',
    badge: '5 Categories',
    shortDescription: 'Precision 316 cast spider brackets with & without fins, structural fin plates, splice plates, and articulated ball routels.',
    imageUrl: 'https://res.cloudinary.com/cbi5mcab/image/upload/v1791033372/GSF-A4_uunwmd.webp',
    technicalHighlights: '5 Categories • Cast 316',
  },
];

export const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({
  onSelectCategory,
  onViewAllProducts,
}) => {
  return (
    <section
      id="featured-categories-section"
      className="relative w-full bg-[#FAF9F6] text-[#141414] py-16 sm:py-24 border-t border-[#EAE8E3]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#EFECE5] border border-[#E0DED5] rounded-full text-[10px] uppercase font-mono tracking-[0.2em] text-[#5A5953] mb-3">
              <Grid className="w-3 h-3 text-[#141414]" />
              <span>Engineered Assemblies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#141414]">
              Featured Categories
            </h2>
            <p className="mt-2 text-sm text-[#666660] font-light leading-relaxed">
              Selected architectural hardware categories engineered for frameless glass installations and commercial facades.
            </p>
          </div>

          <div className="shrink-0">
            <button
              id="view-all-products-top-btn"
              onClick={onViewAllProducts}
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-[#141414] hover:text-black py-2 border-b border-[#141414] group"
            >
              <span>View All Products</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURED_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              id={`featured-cat-${cat.id}`}
              onClick={() => onSelectCategory && onSelectCategory(cat.name)}
              className="group bg-[#F4F2EC] border border-[#E2E0D8] hover:border-[#141414] transition-all duration-300 rounded-xs flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              {/* Image with subtle hover zoom */}
              <div className="relative h-56 sm:h-64 w-full bg-white overflow-hidden border-b border-[#E4E2DA]">
                <img
                  src={cat.imageUrl}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />

                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[10px] uppercase font-mono tracking-wider bg-[#1A1A1A]/85 text-[#FAF9F6] backdrop-blur-xs rounded-xs">
                    {cat.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-[10px] uppercase font-mono tracking-wider text-[#73726B] mb-1">
                    <span>Division 08 Hardware</span>
                    <span>{cat.technicalHighlights}</span>
                  </div>

                  <h3 className="text-xl font-medium tracking-tight text-[#141414] group-hover:text-black transition-colors">
                    {cat.name}
                  </h3>

                  <p className="text-xs text-[#666660] font-light leading-relaxed mt-2 line-clamp-2">
                    {cat.shortDescription}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-3 border-t border-[#EAE7DF] flex items-center justify-between text-xs font-medium text-[#1A1A1A]">
                  <span className="text-[11px] uppercase tracking-wider group-hover:underline underline-offset-4">
                    Explore Specifications
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#888880] group-hover:text-[#141414] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Box: VIEW ALL PRODUCTS */}
        <div className="mt-14 sm:mt-18 pt-10 border-t border-[#EAE8E3] flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#F3F0E9] p-8 rounded-xs border">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-medium text-[#141414]">
              Looking for full project specifications and CAD files?
            </h4>
            <p className="text-xs text-[#666660] font-light max-w-xl">
              Access the complete catalogue including patch pivots, heavy-duty clamps, acoustic sliding gear, and architectural glass finishes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              id="view-all-products-bottom-btn"
              onClick={onViewAllProducts}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-medium uppercase tracking-[0.18em] bg-[#141414] text-[#FAF9F6] hover:bg-black transition-colors rounded-xs shadow-xs"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
