import React, { useState } from 'react';
import { 
  SlidersHorizontal, 
  ShieldCheck, 
  Layers, 
  Check, 
  ArrowUpRight, 
  X,
  FileText,
  Sparkles
} from 'lucide-react';

interface ProductItem {
  id: string;
  name: string;
  category: 'hinges' | 'clamps' | 'standoffs' | 'sliding' | 'glass';
  categoryLabel: string;
  material: string;
  finish: string[];
  glassCompatibility: string;
  loadCapacity: string;
  dimensions: string;
  price: string;
  badge?: string;
  description: string;
  specs: { label: string; value: string }[];
}

const PRODUCTS: ProductItem[] = [
  {
    id: 'hd-hinge-90',
    name: 'AURA 90° Glass-to-Glass Precision Hinge',
    category: 'hinges',
    categoryLabel: 'Glass Hinges & Pivots',
    material: 'AISI 316 Marine-Grade Stainless Steel',
    finish: ['Mirror Chrome', 'Brushed Satin', 'Matte Obsidian'],
    glassCompatibility: '8mm to 12mm Tempered Glass',
    loadCapacity: '55 kg per pair (110 lbs)',
    dimensions: '90mm × 55mm × 4mm',
    price: '$185',
    badge: 'Flagship Precision',
    description: 'Internal dual-action spring mechanism with precision self-centering from 25° in either direction. Machined from solid block forged 316 stainless steel.',
    specs: [
      { label: 'Gasket System', value: 'Non-slip UV resistant neoprene pads' },
      { label: 'Cycle Rating', value: 'Tested to 200,000 opening cycles' },
      { label: 'Adjustment', value: 'Zero-point micro-alignment cam' },
      { label: 'Standards', value: 'EN 1670 Grade 5 Corrosion Resistant' },
    ],
  },
  {
    id: 'standoff-pin-40',
    name: 'VECTA Heavy-Duty Standoff Base System',
    category: 'standoffs',
    categoryLabel: 'Clamps & Standoffs',
    material: 'Forged 316 Stainless Steel',
    finish: ['Mirror Polish', 'Satin Brushed'],
    glassCompatibility: '10mm to 19mm Laminated / Monolithic',
    loadCapacity: '120 kg shear rating',
    dimensions: 'Ø 50mm × 35mm projection',
    price: '$92',
    badge: 'High Load',
    description: 'Architectural structural standoff pin for frameless glass facades, balustrades, and interior partition installations.',
    specs: [
      { label: 'Thread Spec', value: 'M12 × 1.75 pitch hardened rod' },
      { label: 'Mounting', value: 'Direct concrete anchor or steel substrate' },
      { label: 'Thermal Break', value: 'High-density EPDM isolating bushings' },
      { label: 'Certification', value: 'IBC & ASTM E2358 architectural compliance' },
    ],
  },
  {
    id: 'patch-pivot-bottom',
    name: 'HYDRA-10 Soft-Close Hydraulic Pivot Fitting',
    category: 'hinges',
    categoryLabel: 'Glass Hinges & Pivots',
    material: 'Forged 316 Stainless Steel with Hardened Piston',
    finish: ['Mirror Chrome', 'Brushed Nickel', 'Architectural Bronze'],
    glassCompatibility: '10mm to 15mm Glass',
    loadCapacity: '100 kg door leaf capacity',
    dimensions: '162mm × 51mm × 32mm',
    price: '$340',
    badge: 'Hydraulic Dampened',
    description: 'Concealed bottom patch fitting with built-in adjustable hydraulic deceleration, hold-open at 90°, and smooth return sweep.',
    specs: [
      { label: 'Speed Control', value: 'Independent dual valve adjustment' },
      { label: 'Floor Prep', value: 'No floor cavity excavation required' },
      { label: 'Sweep Angle', value: '150° bidirectional rotation' },
      { label: 'Temperature Range', value: '-20°C to +50°C synthetic fluid' },
    ],
  },
  {
    id: 'clamp-square-glass',
    name: 'QUADRA Monolithic Edge Clamp',
    category: 'clamps',
    categoryLabel: 'Clamps & Standoffs',
    material: 'Duplex 2205 / 316 Stainless Steel',
    finish: ['Mirror Chrome', 'Matte Black', 'Satin Steel'],
    glassCompatibility: '8mm to 12.76mm Glass',
    loadCapacity: '75 kg per bracket',
    dimensions: '55mm × 55mm × 28mm',
    price: '$78',
    description: 'Flush-mount square clamp with concealed security pin and seamless beveled edges. Engineered for post-free glass railing systems.',
    specs: [
      { label: 'Fasteners', value: 'Recessed Torx security hex screws' },
      { label: 'Gaskets', value: 'Pre-molded EPDM cushioning gaskets included' },
      { label: 'Safety Pin', value: 'Optional shear pin hole engagement' },
      { label: 'Salt Spray Test', value: '1,000 hrs ASTM B117 salt fog passed' },
    ],
  },
  {
    id: 'sliding-tube-system',
    name: 'STRATA Concealed Roller Sliding Hardware',
    category: 'sliding',
    categoryLabel: 'Shower & Sliding Systems',
    material: 'Solid Stainless Steel & Polyacetal Wheels',
    finish: ['Mirror Chrome', 'Brushed Steel'],
    glassCompatibility: '10mm to 12mm Monolithic Tempered',
    loadCapacity: '90 kg per panel',
    dimensions: 'Ø 25mm solid tube track (up to 2400mm)',
    price: '$480',
    badge: 'Whisper Glide',
    description: 'Ultra-quiet overhead sliding glass door hardware with fluid dual-damper soft-close braking on both open and close strokes.',
    specs: [
      { label: 'Bearings', value: 'High-speed sealed precision ceramic bearings' },
      { label: 'Deceleration', value: 'Pneumatic air-dampened end stops' },
      { label: 'Floor Guide', value: 'Zero-clearance recessed bottom channel' },
      { label: 'Noise Index', value: '< 28 dB silent glide test' },
    ],
  },
  {
    id: 'magnetic-lock-box',
    name: 'MAGNA Magnetic Glass Latch & Lever Assembly',
    category: 'hinges',
    categoryLabel: 'Glass Hinges & Pivots',
    material: 'Solid Machined Brass & 316 Steel Casing',
    finish: ['Mirror Chrome', 'Brushed Brass', 'Matte Obsidian'],
    glassCompatibility: '10mm to 12mm Glass Doors',
    loadCapacity: 'Heavy commercial duty',
    dimensions: '140mm × 48mm × 36mm',
    price: '$260',
    description: 'Flush minimalist magnetic latch where the bolt only extends when door reaches contact, ensuring silent, frictionless closure.',
    specs: [
      { label: 'Mechanism', value: 'Neodymium rare-earth magnetic latch bolt' },
      { label: 'Keyway Option', value: 'Euro-profile cylinder or privacy turn' },
      { label: 'Door Thickness', value: 'No glass cut-out required (clamp mount)' },
      { label: 'Handing', value: 'Reversible field configuration' },
    ],
  },
];

type CategoryFilter = 'all' | 'hinges' | 'clamps' | 'standoffs' | 'sliding';

export const HardwareCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [selectedFinish, setSelectedFinish] = useState<string>('All');
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);
  const [quoteItems, setQuoteItems] = useState<string[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredProducts = PRODUCTS.filter((item) => {
    const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchFinish = selectedFinish === 'All' || item.finish.some(f => f.toLowerCase().includes(selectedFinish.toLowerCase()));
    return matchCategory && matchFinish;
  });

  const toggleQuote = (id: string) => {
    setQuoteItems((prev) => 
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleCopyCode = (id: string) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section 
      id="hardware-catalog" 
      className="relative w-full bg-[#08080a] text-white border-t border-white/10 px-6 sm:px-10 lg:px-16 py-24 z-20"
    >
      {/* Background ambient glow matching the crimson marble */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-red-950/20 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest text-zinc-300 uppercase">
              <Sparkles className="w-3.5 h-3.5 text-red-400" />
              <span>Architectural Specifications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white font-cinzel">
              ENGINEERED GLASS & HARDWARE
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Forged AISI 316 stainless steel, mirror-finished chrome, and precision damping assemblies 
              engineered for frameless glass installations and modern structural interiors.
            </p>
          </div>

          {/* Quick quote indicator */}
          <div className="flex items-center gap-4">
            <div className="bg-white/5 border border-white/10 px-4 py-2.5 rounded-lg flex items-center gap-3">
              <Layers className="w-4 h-4 text-zinc-400" />
              <span className="text-xs text-zinc-300">Spec Items Selected:</span>
              <span className="text-sm font-semibold text-white bg-red-600/80 px-2 py-0.5 rounded">
                {quoteItems.length}
              </span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Hardware' },
              { id: 'hinges', label: 'Hinges & Pivots' },
              { id: 'clamps', label: 'Clamps & Brackets' },
              { id: 'standoffs', label: 'Standoff Pins' },
              { id: 'sliding', label: 'Sliding Systems' },
            ].map((tab) => (
              <button
                key={tab.id}
                id={`filter-tab-${tab.id}`}
                onClick={() => setSelectedCategory(tab.id as CategoryFilter)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-white text-black font-semibold shadow-lg'
                    : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Finish Filter Dropdown */}
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs text-zinc-400">
            <SlidersHorizontal className="w-3.5 h-3.5 text-zinc-400" />
            <span>Finish:</span>
            {['All', 'Chrome', 'Satin', 'Obsidian'].map((finish) => (
              <button
                key={finish}
                onClick={() => setSelectedFinish(finish)}
                className={`px-2 py-0.5 rounded transition-colors ${
                  selectedFinish === finish ? 'bg-white/20 text-white font-medium' : 'hover:text-white'
                }`}
              >
                {finish}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product) => {
            const inQuote = quoteItems.includes(product.id);
            return (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className="group relative bg-[#0e0e12] border border-white/10 hover:border-white/25 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Top tags */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono tracking-wider uppercase text-zinc-400 bg-white/5 px-2.5 py-1 rounded">
                      {product.categoryLabel}
                    </span>
                    {product.badge && (
                      <span className="text-[11px] font-medium tracking-wide text-red-300 bg-red-950/60 border border-red-800/40 px-2 py-0.5 rounded">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Product Title */}
                  <h3 className="text-lg font-medium text-white group-hover:text-zinc-100 transition-colors mb-2 font-cinzel">
                    {product.name}
                  </h3>

                  <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Key specs */}
                  <div className="space-y-2 mb-6 border-t border-white/5 pt-4">
                    <div className="flex justify-between text-xs">
                      <span className="text-zinc-500">Material</span>
                      <span className="text-zinc-300 font-medium">{product.material}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-zinc-500">Glass Spec</span>
                      <span className="text-zinc-300 font-medium">{product.glassCompatibility}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-zinc-500">Capacity</span>
                      <span className="text-zinc-300 font-medium">{product.loadCapacity}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-zinc-500">Available Finishes</span>
                      <span className="text-zinc-400 text-[11px]">{product.finish.join(' • ')}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-zinc-500 block uppercase tracking-wider">Unit Spec</span>
                    <span className="text-base font-semibold text-white">{product.price}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      id={`view-specs-${product.id}`}
                      onClick={() => setActiveModalProduct(product)}
                      className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-zinc-300 hover:text-white border border-white/10 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>CAD / Specs</span>
                    </button>

                    <button
                      id={`add-quote-${product.id}`}
                      onClick={() => toggleQuote(product.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                        inQuote
                          ? 'bg-red-600 text-white shadow-lg'
                          : 'bg-white text-black hover:bg-zinc-200'
                      }`}
                    >
                      {inQuote ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Included</span>
                        </>
                      ) : (
                        <>
                          <span>Add Spec</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality assurance banner */}
        <div className="mt-16 bg-[#0c0c10] border border-white/10 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-red-950/40 border border-red-800/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <h4 className="text-white text-base font-medium font-cinzel">Structural Integrity & Warranty</h4>
              <p className="text-zinc-400 text-xs sm:text-sm">
                All components are manufactured under ISO 9001 standards and backed by a 10-year architectural warranty.
              </p>
            </div>
          </div>
          <button 
            onClick={() => handleCopyCode('catalog-download')}
            className="whitespace-nowrap px-6 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-medium border border-white/20 transition-all cursor-pointer"
          >
            {copiedId === 'catalog-download' ? 'Specification Link Ready' : 'Download Complete CAD Catalog (PDF)'}
          </button>
        </div>
      </div>

      {/* Modal Specification View */}
      {activeModalProduct && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveModalProduct(null)}
        >
          <div 
            className="bg-[#121216] border border-white/20 rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono uppercase text-red-400">
                  {activeModalProduct.categoryLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-light text-white font-cinzel mt-1">
                  {activeModalProduct.name}
                </h3>
              </div>
              <button 
                onClick={() => setActiveModalProduct(null)}
                className="text-zinc-400 hover:text-white p-1 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-zinc-300 text-sm leading-relaxed">
              {activeModalProduct.description}
            </p>

            <div className="bg-black/40 border border-white/5 rounded-xl p-4 space-y-3">
              <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider">
                Engineering Details
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-zinc-500 block">Base Alloy</span>
                  <span className="text-white font-medium">{activeModalProduct.material}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">Working Load</span>
                  <span className="text-white font-medium">{activeModalProduct.loadCapacity}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">Glass Compatibility</span>
                  <span className="text-white font-medium">{activeModalProduct.glassCompatibility}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">Dimensions</span>
                  <span className="text-white font-medium">{activeModalProduct.dimensions}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider">
                Performance Metrics
              </h4>
              {activeModalProduct.specs.map((s, idx) => (
                <div key={idx} className="flex justify-between text-xs py-1 border-b border-white/5">
                  <span className="text-zinc-400">{s.label}</span>
                  <span className="text-zinc-200 font-medium">{s.value}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div>
                <span className="text-xs text-zinc-500 block">Trade Unit Price</span>
                <span className="text-xl font-bold text-white">{activeModalProduct.price}</span>
              </div>
              <button
                onClick={() => {
                  toggleQuote(activeModalProduct.id);
                  setActiveModalProduct(null);
                }}
                className={`px-5 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                  quoteItems.includes(activeModalProduct.id)
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-black hover:bg-zinc-200'
                }`}
              >
                {quoteItems.includes(activeModalProduct.id) ? 'Remove From Spec Pack' : 'Include In Project Spec Pack'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
