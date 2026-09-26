/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { CinematicHero } from './components/CinematicHero';
import { AboutUsSection } from './components/AboutUsSection';
import { PrimaryDepartmentSelector } from './components/PrimaryDepartmentSelector';
import { CatalogueSection } from './components/CatalogueSection';
import { ProductDetailPage } from './components/ProductDetailPage';
import { CategoryCollectionPage } from './components/CategoryCollectionPage';
import { BrandTrustSection } from './components/BrandTrustSection';
import { EnquiryCTA } from './components/EnquiryCTA';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { DepartmentType, Product } from './types';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'home' | 'products' | 'about' | 'contact'>('home');
  const [selectedDepartment, setSelectedDepartment] = useState<DepartmentType>('hardware');
  const [selectedCategoryName, setSelectedCategoryName] = useState<string | null>(null);
  const [activeProductDetail, setActiveProductDetail] = useState<Product | null>(null);
  const [activeCategoryNotice, setActiveCategoryNotice] = useState<string | null>(null);

  // Initialize Lenis smooth scroll for a fluid, water-like momentum scrolling experience
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.1,
    });

    (window as any).lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      delete (window as any).lenis;
      lenis.destroy();
    };
  }, []);

  // Update active navigation indicator based on viewport scroll position
  useEffect(() => {
    if (activeProductDetail) {
      setActiveSection('products');
      return;
    }

    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      const catEl = document.getElementById('product-catalogue-section');
      const aboutEl = document.getElementById('about-us');
      const contactEl = document.getElementById('contact-enquiry');

      if (contactEl && scrollPos >= contactEl.offsetTop) {
        setActiveSection('contact');
      } else if (catEl && scrollPos >= catEl.offsetTop) {
        setActiveSection('products');
      } else if (aboutEl && scrollPos >= aboutEl.offsetTop) {
        setActiveSection('about');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeProductDetail]);

  // Guarantee that switching pages/views (opening category or product detail)
  // snaps the user directly to the top of the newly opened page instead of bottom/footer
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
  }, [selectedCategoryName, activeProductDetail]);

  const handleSelectDepartment = (dept: DepartmentType) => {
    setActiveProductDetail(null);
    setSelectedDepartment(dept);
    setSelectedCategoryName(null);
    setActiveCategoryNotice(`Selected Division: ${dept.toUpperCase()}`);
    setTimeout(() => setActiveCategoryNotice(null), 3000);

    setTimeout(() => {
      const catEl = document.getElementById('product-catalogue-section');
      if (catEl) {
        if ((window as any).lenis) {
          (window as any).lenis.scrollTo(catEl);
        } else {
          catEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);
  };

  const handleSelectCategory = (categoryName: string | null) => {
    setActiveProductDetail(null);
    setSelectedCategoryName(categoryName);

    // Instant top scroll
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if ((window as any).lenis) {
      (window as any).lenis.resize();
      (window as any).lenis.scrollTo(0, { immediate: true, force: true });
    }

    if (categoryName) {
      setActiveCategoryNotice(`Opening ${categoryName} Collection`);
    } else {
      setActiveCategoryNotice('Viewing all architectural categories');
      setTimeout(() => {
        const catEl = document.getElementById('primary-department-selector');
        if (catEl) {
          if ((window as any).lenis) {
            (window as any).lenis.scrollTo(catEl);
          } else {
            catEl.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    }
    setTimeout(() => setActiveCategoryNotice(null), 3000);
  };

  const handleBackToAllCategories = () => {
    setActiveProductDetail(null);
    setSelectedCategoryName(null);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if ((window as any).lenis) {
      (window as any).lenis.resize();
      (window as any).lenis.scrollTo(0, { immediate: true, force: true });
    }
  };

  const handleOpenProductDetail = (product: Product) => {
    setActiveProductDetail(product);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if ((window as any).lenis) {
      (window as any).lenis.resize();
      (window as any).lenis.scrollTo(0, { immediate: true, force: true });
    }
  };

  const handleBackToCatalogue = () => {
    setActiveProductDetail(null);
    if (!selectedCategoryName) {
      setTimeout(() => {
        const catEl = document.getElementById('product-catalogue-section');
        if (catEl) {
          if ((window as any).lenis) {
            (window as any).lenis.scrollTo(catEl);
          } else {
            catEl.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      if ((window as any).lenis) {
        (window as any).lenis.resize();
        (window as any).lenis.scrollTo(0, { immediate: true, force: true });
      }
    }
  };

  return (
    <CartProvider>
      <div id="app-root" className="w-full min-h-screen bg-[#FAF9F6] text-[#141414] flex flex-col font-sans">
        {/* Sticky Minimal Responsive Header */}
        <Header
          onOpenSearch={() => setIsSearchOpen(true)}
          activeSection={activeSection}
          onNavigate={(sec) => {
            setActiveSection(sec as any);
            if (sec === 'home') {
              setActiveProductDetail(null);
              setSelectedCategoryName(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (sec === 'products') {
              setActiveProductDetail(null);
              setSelectedCategoryName(null);
              setTimeout(() => {
                const catEl = document.getElementById('product-catalogue-section');
                if (catEl) catEl.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            } else {
              setActiveProductDetail(null);
              setSelectedCategoryName(null);
            }
          }}
        />

        {/* Global Floating Toast for User Actions */}
        {activeCategoryNotice && (
          <div
            id="category-selection-toast"
            className="fixed bottom-6 right-6 z-50 bg-[#141414] text-[#FAF9F6] px-4 py-3 rounded-xs border border-[#333333] shadow-xl text-xs font-mono flex items-center gap-3 animate-fade-in"
          >
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
            <span>{activeCategoryNotice}</span>
          </div>
        )}

        <main className="flex-1 w-full">
          {activeProductDetail ? (
            /* 
              STAGE 03: DEDICATED PRODUCT DETAIL EXPERIENCE
              Layout: Large product gallery on left, specs, variants (Finish), quantity,
              ADD TO CART with subtle feedback, and WhatsApp trade enquiry on right.
            */
            <ProductDetailPage
              product={activeProductDetail}
              onBackToCatalogue={handleBackToCatalogue}
              onBackToHome={handleBackToAllCategories}
              onSelectCategory={handleSelectCategory}
              onSelectProduct={handleOpenProductDetail}
            />
          ) : selectedCategoryName ? (
            /* 
              DEDICATED CATEGORY COLLECTION PAGE:
              Opens a separate page for the active category (e.g. Patch Fittings with 4 products,
              Glass Connectors, Shower Hinges, etc.) with responsive product grid (2 cols mobile, 4 cols desktop),
              refined filter/sort dropdowns, breadcrumbs, and sibling category switcher.
            */
            <CategoryCollectionPage
              categoryName={selectedCategoryName}
              onBackToCatalogue={handleBackToAllCategories}
              onSelectCategory={handleSelectCategory}
              onSelectProduct={handleOpenProductDetail}
              onSelectDepartment={(dept) => {
                setSelectedDepartment(dept);
                setSelectedCategoryName(null);
              }}
            />
          ) : (
            /* 
              CONTINUOUS HOMEPAGE EXPERIENCE:
              HERO -> ABOUT US -> PRIMARY DIVISIONS -> CATALOGUE -> TRUST PILLARS -> ENQUIRY CTA
            */
            <>
              {/* 
                CINEMATIC SCROLL-DRIVEN HERO EXPERIENCE (PRESERVED)
              */}
              <CinematicHero
                videoUrl="https://res.cloudinary.com/cbi5mcab/video/upload/v1790230139/ELEGENT_HERO_e9xkz6.mp4"
                mobileCoverImageUrl="/mobile_hero_cover.jpg"
                desktopCoverImageUrl="/desktop_hero_cover.jpg"
                logoUrl="/elegant_wordmark.png"
              />

              {/* 
                ABOUT US (FOUNDER & BRAND EDITORIAL) (PRESERVED)
              */}
              <AboutUsSection
                storeImageUrl="https://res.cloudinary.com/cbi5mcab/image/upload/f_auto,q_auto/v1789558223/bg_bk1sis.png"
                founderImageUrl="https://res.cloudinary.com/cbi5mcab/image/upload/f_auto,q_auto/v1789558604/AJSAL_kjvbhi.png"
              />

              {/* 
                PRIMARY DIVISION SELECTOR: GLASSWARE vs HARDWARE
              */}
              <PrimaryDepartmentSelector
                onSelectDepartment={handleSelectDepartment}
              />

              {/* 
                STAGE 02 & 03: COMPLETE PRODUCT DISCOVERY & CATALOGUE SYSTEM
                Includes Category Navigation Overview, Search, Filters, Sorting, Responsive Grid (4/3/2),
                Direct Add to Cart, Wishlist, Details, and Load More system.
              */}
              <CatalogueSection
                selectedDepartment={selectedDepartment}
                onSelectDepartment={setSelectedDepartment}
                selectedCategoryName={selectedCategoryName}
                onSelectCategory={handleSelectCategory}
                onOpenProductDetail={handleOpenProductDetail}
              />

              {/* 
                BRAND & TRUST PILLARS
              */}
              <BrandTrustSection />

              {/* 
                CONTACT & WHATSAPP ENQUIRY CTA
              */}
              <EnquiryCTA />
            </>
          )}
        </main>

        {/* ARCHITECTURAL FOOTER */}
        <Footer
          onSelectCategory={handleSelectCategory}
          onNavigate={(sec) => {
            setActiveSection(sec as any);
            if (sec === 'home' || sec === 'products') {
              setActiveProductDetail(null);
            }
          }}
        />

        {/* GLOBAL CART SLIDE-OVER DRAWER (FULL SCREEN ON MOBILE) */}
        <CartDrawer />

        {/* QUICK SEARCH & SPECIFICATION MODAL WITH CODE SEARCH (e.g. GPF-50) */}
        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onSelectCategory={handleSelectCategory}
          onSelectProduct={handleOpenProductDetail}
        />
      </div>
    </CartProvider>
  );
}
