/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { CinematicHero } from './components/CinematicHero';
import { AboutUsSection } from './components/AboutUsSection';
import { HardwareCatalog } from './components/HardwareCatalog';

export default function App() {
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

  return (
    <main id="app-root" className="w-full min-h-screen bg-black text-white">
      {/* 
        CINEMATIC SCROLL-DRIVEN HERO EXPERIENCE (BUTTERY SMOOTH)
        - Pure video hero with zero-lag seeking and high-speed hardware decode
        - Sticky 100vh / 100dvh pinned display stage
        - Hardware accelerated compositor layers (transform-gpu, will-change)
        - Synchronized continuous rAF loop flowing like liquid water
      */}
      <CinematicHero
        videoUrl="https://res.cloudinary.com/cbi5mcab/video/upload/v1789540943/ajsal_elk7ic.mp4"
        mobileCoverImageUrl="/mobile_hero_cover.jpg"
        desktopCoverImageUrl="/desktop_hero_cover.jpg"
        logoUrl="/elegant_wordmark.png"
        runwayVh={380}
        lerpDamping={0.16}
      />

      {/* 
        SECOND SECTION: ABOUT US (FOUNDER & BRAND EDITORIAL)
        Optimized high-speed CDN assets with auto-format (WebP/AVIF) and quality compression.
      */}
      <AboutUsSection
        storeImageUrl="https://res.cloudinary.com/cbi5mcab/image/upload/f_auto,q_auto/v1789558223/bg_bk1sis.png"
        founderImageUrl="https://res.cloudinary.com/cbi5mcab/image/upload/f_auto,q_auto/v1789558604/AJSAL_kjvbhi.png"
      />

      {/* 
        THIRD SECTION: GLASSWARE & ARCHITECTURAL HARDWARE E-COMMERCE CATALOG
        Seamlessly revealed as the user finishes scrolling through About Us.
      */}
      <HardwareCatalog />
    </main>
  );
}
