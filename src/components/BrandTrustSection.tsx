import React from 'react';
import { ShieldCheck, RotateCcw, Compass, FileText, CheckCircle2 } from 'lucide-react';

export const BrandTrustSection: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'AISI 316 Marine Grade',
      badge: 'Metallurgical Standard',
      description: 'Solid forged stainless steel with molybdenum enhancement, providing EN 1670 Grade 5 corrosion resistance in humid and coastal environments.',
    },
    {
      icon: RotateCcw,
      title: '200,000+ Cycle Reliability',
      badge: 'Certified Performance',
      description: 'Internal dual-action springs and hydraulic decelerators endurance-tested under commercial load limits for reliable lifetime performance.',
    },
    {
      icon: Compass,
      title: '±0.02mm CNC Precision',
      badge: 'Engineered Fit',
      description: 'Zero-tolerance machine milling eliminates glass chatter, preserves gasket compression, and ensures seamless alignment across panels.',
    },
    {
      icon: FileText,
      title: 'Architectural Submittals',
      badge: 'BIM & CAD Ready',
      description: 'Immediate access to 2D/3D CAD models, structural wind-load test certificates, and custom BOQ schedule support for project tenders.',
    },
  ];

  return (
    <section
      id="brand-trust-section"
      className="relative w-full bg-[#F5F3ED] text-[#141414] py-16 sm:py-20 border-t border-[#EAE8E3]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#73726B] block mb-2">
            Engineering Standards & Integrity
          </span>
          <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-[#141414]">
            Engineered For Structural Demands
          </h2>
          <div className="w-10 h-[1.5px] bg-[#141414] mx-auto mt-4" />
        </div>

        {/* 4 Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF9F6] border border-[#E2E0D8] p-6 sm:p-7 rounded-xs flex flex-col justify-between space-y-4 shadow-2xs hover:border-[#8C8A82] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xs bg-[#EAE8DF] flex items-center justify-center text-[#141414]">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <span className="text-[9px] uppercase font-mono tracking-wider px-2 py-0.5 bg-[#E6E3DB] text-[#4A4A45] rounded-xs">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-medium text-[#141414] leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#666660] font-light leading-relaxed mt-2.5">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EAE7DF] flex items-center gap-1.5 text-[11px] text-[#42413C] font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#15803D]" />
                  <span>ISO 9001 Compliant</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
