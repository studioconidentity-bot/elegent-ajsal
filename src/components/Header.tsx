import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, ArrowUpRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onOpenSearch: () => void;
  activeSection?: string;
  onNavigate?: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch, activeSection = 'home', onNavigate }) => {
  const { totalCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (targetId: string, name: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(name.toLowerCase());
    }

    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-site-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md border-[#E5E3DD] shadow-xs'
          : 'bg-[#FAF9F6] border-[#EAE8E3]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Left: Brand Logo & Wordmark */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home', 'home')}
            className="flex items-center gap-2.5 text-left group"
          >
            <img
              src="/elegant_wordmark.png"
              alt="ELEGANT Architectural Hardware"
              className="h-6 sm:h-8 w-auto object-contain filter invert opacity-95 group-hover:opacity-100 transition-opacity"
            />
            <div className="hidden lg:block pl-3 border-l border-[#DCDAD2]">
              <span className="block text-[9px] uppercase tracking-[0.25em] font-medium text-[#73726B]">
                Architectural
              </span>
              <span className="block text-[9px] uppercase tracking-[0.25em] font-medium text-[#73726B]">
                Hardware & Materials
              </span>
            </div>
          </button>
        </div>

        {/* Center: Primary Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main Navigation">
          <button
            id="nav-home-btn"
            onClick={() => handleNavClick('home', 'home')}
            className={`text-xs uppercase tracking-[0.18em] font-medium transition-colors relative py-1 ${
              activeSection === 'home'
                ? 'text-[#141414] font-semibold'
                : 'text-[#5A5953] hover:text-[#141414]'
            }`}
          >
            Home
            {activeSection === 'home' && (
              <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#141414]" />
            )}
          </button>

          <button
            id="nav-products-btn"
            onClick={() => handleNavClick('primary-department-selector', 'products')}
            className={`text-xs uppercase tracking-[0.18em] font-medium transition-colors relative py-1 ${
              activeSection === 'products'
                ? 'text-[#141414] font-semibold'
                : 'text-[#5A5953] hover:text-[#141414]'
            }`}
          >
            Products
            {activeSection === 'products' && (
              <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#141414]" />
            )}
          </button>

          <button
            id="nav-about-btn"
            onClick={() => handleNavClick('about-us', 'about')}
            className={`text-xs uppercase tracking-[0.18em] font-medium transition-colors relative py-1 ${
              activeSection === 'about'
                ? 'text-[#141414] font-semibold'
                : 'text-[#5A5953] hover:text-[#141414]'
            }`}
          >
            About
            {activeSection === 'about' && (
              <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#141414]" />
            )}
          </button>

          <button
            id="nav-contact-btn"
            onClick={() => handleNavClick('contact-enquiry', 'contact')}
            className={`text-xs uppercase tracking-[0.18em] font-medium transition-colors relative py-1 ${
              activeSection === 'contact'
                ? 'text-[#141414] font-semibold'
                : 'text-[#5A5953] hover:text-[#141414]'
            }`}
          >
            Contact
            {activeSection === 'contact' && (
              <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#141414]" />
            )}
          </button>
        </nav>

        {/* Right: Search & Cart & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            id="header-search-btn"
            onClick={onOpenSearch}
            aria-label="Search Catalogue"
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-[#3D3C37] hover:text-[#141414] hover:bg-[#EFECE5] rounded-xs transition-colors"
          >
            <Search className="w-4 h-4 text-[#5A5953]" />
            <span className="hidden sm:inline">Search</span>
          </button>

          <button
            id="header-cart-btn"
            onClick={() => setIsCartOpen(true)}
            aria-label={`Open specification cart with ${totalCount} items`}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium uppercase tracking-wider bg-[#1E1E1E] hover:bg-black text-[#FAF9F6] rounded-xs transition-colors"
          >
            <ShoppingBag className="w-4 h-4 text-[#E5E3DD]" />
            <span>Cart</span>
            <span className="ml-0.5 px-1.5 py-0.2 bg-[#FAF9F6] text-[#1E1E1E] text-[11px] font-mono font-bold rounded-full min-w-[20px] text-center">
              {totalCount}
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="md:hidden p-2 text-[#2E2E2A] hover:bg-[#EFECE5] rounded-xs transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-[#FAF9F6] border-b border-[#E5E3DD] px-6 py-5 space-y-4 shadow-lg"
        >
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => handleNavClick('home', 'home')}
              className="text-left text-xs uppercase tracking-[0.2em] font-medium text-[#2E2E2A] py-2 border-b border-[#EAE8E3]"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('primary-department-selector', 'products')}
              className="text-left text-xs uppercase tracking-[0.2em] font-medium text-[#2E2E2A] py-2 border-b border-[#EAE8E3]"
            >
              Products / Catalogue
            </button>
            <button
              onClick={() => handleNavClick('about-us', 'about')}
              className="text-left text-xs uppercase tracking-[0.2em] font-medium text-[#2E2E2A] py-2 border-b border-[#EAE8E3]"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('contact-enquiry', 'contact')}
              className="text-left text-xs uppercase tracking-[0.2em] font-medium text-[#2E2E2A] py-2 border-b border-[#EAE8E3]"
            >
              Contact & WhatsApp
            </button>
          </div>

          <div className="pt-2 flex items-center justify-between text-[11px] text-[#73726B]">
            <span>Architectural Spec Support</span>
            <span className="font-mono text-[#141414]">AISI 316 Certified</span>
          </div>
        </div>
      )}
    </header>
  );
};
