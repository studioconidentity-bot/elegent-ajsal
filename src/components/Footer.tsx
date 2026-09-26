import React from 'react';
import { ArrowUpRight, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  onSelectCategory?: (category: string) => void;
  onNavigate?: (section: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onNavigate }) => {
  const handleScrollTo = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="w-full bg-[#141414] text-[#E8E6E1] pt-16 sm:pt-20 pb-12 border-t border-black select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid: Brand Statement & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#2A2A2A]">
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/elegant_wordmark.png"
                alt="ELEGANT Architectural Hardware"
                className="h-7 w-auto object-contain brightness-0 invert opacity-95"
              />
            </div>
            <p className="text-xs text-[#9E9D97] leading-relaxed max-w-sm font-light">
              ELEGANT designs and manufactures high-performance architectural hardware and engineered glass assemblies. Built from solid forged AISI 316 stainless steel for uncompromising durability.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#222222] hover:bg-[#2C2C2C] border border-[#383838] text-xs text-[#FAF9F6] rounded-xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>WhatsApp Trade Line</span>
              </a>
            </div>
          </div>

          {/* Sitemaps: Divisions & Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] uppercase font-mono tracking-[0.2em] text-[#888880]">
              Product Divisions
            </h4>
            <ul className="space-y-2 text-xs text-[#C5C3BC] font-light">
              <li>
                <button
                  onClick={() => handleScrollTo('primary-department-selector')}
                  className="hover:text-white transition-colors"
                >
                  Glassware & Architectural Glazing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('primary-department-selector')}
                  className="hover:text-white transition-colors"
                >
                  Hardware & Precision Fittings
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory && onSelectCategory('Patch Fittings')}
                  className="hover:text-white transition-colors"
                >
                  Patch Fittings
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory && onSelectCategory('Shower Hinges')}
                  className="hover:text-white transition-colors"
                >
                  Shower Hinges
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory && onSelectCategory('Shower Sliding System')}
                  className="hover:text-white transition-colors"
                >
                  Shower Sliding System
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory && onSelectCategory('Spider Fitting')}
                  className="hover:text-white transition-colors"
                >
                  Spider Fitting
                </button>
              </li>
            </ul>
          </div>

          {/* Technical Resources (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] uppercase font-mono tracking-[0.2em] text-[#888880]">
              Technical Spec
            </h4>
            <ul className="space-y-2 text-xs text-[#C5C3BC] font-light">
              <li className="hover:text-white cursor-pointer transition-colors">
                CAD Library (.dwg)
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                BIM Revit Families
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                EN 1670 Salt Spray Certs
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Glass Thickness Calculator
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Finish Care Manual
              </li>
            </ul>
          </div>

          {/* Showroom & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] uppercase font-mono tracking-[0.2em] text-[#888880]">
              Showroom & Trade Desk
            </h4>
            <div className="space-y-2.5 text-xs text-[#9E9D97] font-light">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5C3BC] shrink-0 mt-0.5" />
                <span>Showroom: Warehouse 14, Al Quoz 1, Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5C3BC] shrink-0" />
                <span>specs@elegant-hardware.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5C3BC] shrink-0" />
                <span>+971 4 345 8890</span>
              </div>
              <div className="pt-2">
                <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 bg-[#252525] text-[#A6A49D] rounded-xs">
                  Trade Counter: Mon – Sat (8AM – 6PM)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#73726B] font-mono">
          <div>
            © {new Date().getFullYear()} ELEGANT Architectural Hardware and Materials. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-[#A6A49D] cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-[#A6A49D] cursor-pointer">Terms of Specification</span>
            <span>•</span>
            <span className="text-[#A6A49D]">Stage 02 Catalogue Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
