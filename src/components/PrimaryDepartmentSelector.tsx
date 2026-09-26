import React from 'react';
import { ArrowRight, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { DepartmentType } from '../types';

interface PrimaryDepartmentSelectorProps {
  onSelectDepartment: (dept: DepartmentType) => void;
}

export const PrimaryDepartmentSelector: React.FC<PrimaryDepartmentSelectorProps> = ({
  onSelectDepartment,
}) => {
  return (
    <section
      id="primary-department-selector"
      className="relative w-full bg-[#FAF9F6] text-[#141414] pt-12 pb-8 sm:pt-16 sm:pb-10 lg:py-28 border-t border-[#EAE8E3]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-0 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#EFECE5] border border-[#E0DED5] rounded-full text-[10px] uppercase font-mono tracking-[0.2em] text-[#5A5953] mb-4">
            <Layers className="w-3 h-3 text-[#141414]" />
            <span>Primary Architectural Divisions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#141414] leading-[1.15]">
            WHAT ARE YOU LOOKING FOR?
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#61605A] leading-relaxed max-w-2xl font-light">
            Select a core division to access engineered specifications, technical CAD submittals, and commercial grade supply lines.
          </p>
        </div>

        {/* The Two Primary Product Cards: GLASSWARE & HARDWARE (Hidden on tablet & mobile, displayed on desktop) */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: GLASSWARE */}
          <div
            id="department-card-glassware"
            onClick={() => onSelectDepartment('glassware')}
            className="group relative bg-[#F4F2EC] border border-[#E2E0D8] hover:border-[#141414] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer rounded-xs"
          >
            {/* Top Info Bar */}
            <div className="p-6 sm:p-8 pb-4">
              <div className="flex items-center justify-between gap-4 mb-3">
                <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#73726B]">
                  Division 08 • Structural Materials
                </span>
                <span className="px-2.5 py-0.5 text-[10px] uppercase font-medium bg-[#E6E3DB] text-[#2B2B28] rounded-full">
                  Architectural Glazing
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#141414] group-hover:text-black transition-colors">
                GLASSWARE
              </h3>
              <p className="text-xs sm:text-sm text-[#61605A] mt-1 font-light">
                Glass-related products and materials
              </p>
            </div>

            {/* Visual Image Presentation */}
            <div className="relative px-6 sm:px-8 py-2">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden border border-[#DDDCD4] bg-white rounded-xs">
                <img
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
                  alt="Architectural Glassware & Partitions"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-mono tracking-wider">
                  <span className="px-2 py-0.5 bg-black/60 backdrop-blur-xs rounded-xs">
                    Tempered • Fluted • Laminated
                  </span>
                  <span className="px-2 py-0.5 bg-black/60 backdrop-blur-xs rounded-xs">
                    8mm – 19mm
                  </span>
                </div>
              </div>
            </div>

            {/* Spec Highlights & CTA Button */}
            <div className="p-6 sm:p-8 pt-4 border-t border-[#EAE7DF] mt-4 bg-[#EDEAE2]/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-[11px] text-[#4A4944] font-medium">
                  Includes: Frameless Partitions, Low-Iron Panels, Acoustic Glass
                </div>
                <div className="text-[10px] text-[#787770]">
                  Custom CNC cutting, edge polishing & hole cutouts available
                </div>
              </div>

              <button
                id="explore-glassware-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-medium uppercase tracking-wider bg-[#141414] text-[#FAF9F6] group-hover:bg-black transition-colors rounded-xs shrink-0"
              >
                <span>Explore Glassware</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 2: HARDWARE */}
          <div
            id="department-card-hardware"
            onClick={() => onSelectDepartment('hardware')}
            className="group relative bg-[#F4F2EC] border border-[#E2E0D8] hover:border-[#141414] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer rounded-xs"
          >
            {/* Top Info Bar */}
            <div className="p-6 sm:p-8 pb-4">
              <div className="flex items-center justify-between gap-4 mb-3">
                <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#73726B]">
                  Division 08 • Precision Fittings
                </span>
                <span className="px-2.5 py-0.5 text-[10px] uppercase font-medium bg-[#E6E3DB] text-[#2B2B28] rounded-full">
                  AISI 316 Marine Grade
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#141414] group-hover:text-black transition-colors">
                HARDWARE
              </h3>
              <p className="text-xs sm:text-sm text-[#61605A] mt-1 font-light">
                Architectural hardware, fittings and accessories
              </p>
            </div>

            {/* Visual Image Presentation */}
            <div className="relative px-6 sm:px-8 py-2">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden border border-[#DDDCD4] bg-white rounded-xs">
                <img
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
                  alt="Architectural Precision Hardware"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-mono tracking-wider">
                  <span className="px-2 py-0.5 bg-black/60 backdrop-blur-xs rounded-xs">
                    Forged Stainless • Hydraulic Soft-Close
                  </span>
                  <span className="px-2 py-0.5 bg-black/60 backdrop-blur-xs rounded-xs">
                    EN 1670 Tested
                  </span>
                </div>
              </div>
            </div>

            {/* Spec Highlights & CTA Button */}
            <div className="p-6 sm:p-8 pt-4 border-t border-[#EAE7DF] mt-4 bg-[#EDEAE2]/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-[11px] text-[#4A4944] font-medium">
                  Includes: Patch Fittings, Glass Clamps, Shower Hinges & Pivots
                </div>
                <div className="text-[10px] text-[#787770]">
                  Mirror Chrome, Brushed Satin, and Matte Obsidian finishes
                </div>
              </div>

              <button
                id="explore-hardware-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-medium uppercase tracking-wider bg-[#141414] text-[#FAF9F6] group-hover:bg-black transition-colors rounded-xs shrink-0"
              >
                <span>Explore Hardware</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
