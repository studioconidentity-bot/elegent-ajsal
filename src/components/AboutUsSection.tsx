import React from 'react';

interface AboutUsSectionProps {
  storeImageUrl?: string;
  founderImageUrl?: string;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({
  storeImageUrl = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1789558223/bg_bk1sis.png',
  founderImageUrl = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1789558604/AJSAL_kjvbhi.png',
}) => {
  return (
    <section
      id="about-us"
      className="relative w-full bg-[#f8f6f0] text-[#1c1b18] overflow-hidden py-14 sm:py-20 lg:py-28 select-none border-t border-black/10"
    >
      {/* 
        SUBTLE ARCHITECTURAL DAPPLED SUNLIGHT / LEAF SHADOW EFFECT:
        Soft ambient organic lighting replicating the high-end magazine background in Laptop.png
      */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply"
        style={{
          background:
            'radial-gradient(ellipse 65% 50% at 10% 20%, rgba(210,200,185,0.45) 0%, transparent 70%), ' +
            'radial-gradient(ellipse 55% 45% at 90% 80%, rgba(205,195,180,0.4) 0%, transparent 65%)',
        }}
      />

      {/* Decorative architectural shadow silhouettes in corners */}
      <div 
        aria-hidden="true"
        className="absolute -top-12 -left-12 w-96 h-96 opacity-15 pointer-events-none blur-2xl"
        style={{
          background: 'radial-gradient(circle, rgba(140,130,115,0.6) 0%, transparent 70%)',
        }}
      />
      <div 
        aria-hidden="true"
        className="absolute top-1/3 -right-20 w-[420px] h-[420px] opacity-15 pointer-events-none blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(140,130,115,0.5) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-0 sm:px-8 lg:px-12">
        {/* ================================================================= */}
        {/* 1. VISUAL COMPOSITION: STORE LANDSCAPE + CENTERED FOUNDER PORTRAIT */}
        {/* ================================================================= */}
        <div className="relative w-full mb-44 sm:mb-52 md:mb-60 lg:mb-64 xl:mb-72">
          
          {/* 
            STORE LANDSCAPE & FLANKING EDITORIAL ACCENTS WRAPPER
            On mobile: full edge-to-edge width.
            On tablet: sm:max-w-[960px] mx-auto.
            On desktop: lg:max-w-[760px] xl:max-w-[840px] mx-auto, allowing generous negative space for the 4 flanking accents.
          */}
          <div className="relative w-full sm:max-w-[960px] lg:max-w-[760px] xl:max-w-[840px] mx-auto">

            {/* 1. TOP LEFT ACCENT (Desktop only: outside store image with dedicated breathing room) */}
            <div
              id="editorial-top-left"
              className="hidden lg:flex absolute top-1 right-[calc(100%+32px)] xl:right-[calc(100%+48px)] flex-col items-start text-left pointer-events-none z-10 whitespace-nowrap"
            >
              <div className="font-sans text-[9px] xl:text-[9.5px] font-semibold uppercase tracking-[0.24em] text-[#2c2a26] leading-[1.65]">
                <span>HARDWARE</span><br />
                <span>FOR A</span><br />
                <span>BETTER</span><br />
                <span>TOMORROW</span>
              </div>
              <div className="w-5 xl:w-6 h-[1.5px] bg-[#2c2a26]/70 mt-2.5" />
            </div>

            {/* 2. TOP RIGHT ACCENT (Desktop only: outside store image with dedicated breathing room) */}
            <div
              id="editorial-top-right"
              className="hidden lg:flex absolute top-1 left-[calc(100%+32px)] xl:left-[calc(100%+48px)] flex-col items-end text-right pointer-events-none z-10 whitespace-nowrap"
            >
              <div className="font-sans text-[9px] xl:text-[9.5px] font-semibold uppercase tracking-[0.24em] text-[#2c2a26] leading-[1.65]">
                <span>SPACES</span><br />
                <span>MADE</span><br />
                <span>STRONGER</span>
              </div>
              <div className="w-5 xl:w-6 h-[1.5px] bg-[#2c2a26]/70 mt-2.5" />
            </div>

            {/* 3. LOWER LEFT ACCENT (Desktop only: outside store image in clear ivory space) */}
            <div
              id="editorial-center-left"
              className="hidden lg:flex absolute bottom-8 xl:bottom-12 right-[calc(100%+32px)] xl:right-[calc(100%+48px)] flex-col items-start text-left pointer-events-none z-10 whitespace-nowrap"
            >
              <div className="font-sans text-[9px] xl:text-[9.5px] font-semibold uppercase tracking-[0.24em] text-[#2c2a26] leading-[1.65]">
                <span>FROM</span><br />
                <span>MALAPPURAM</span><br />
                <span>TO ERNAKULAM</span>
              </div>
              <div className="w-5 xl:w-6 h-[1.5px] bg-[#2c2a26]/70 mt-2.5" />
            </div>

            {/* 4. LOWER RIGHT ACCENT (Desktop only: outside store image in clear ivory space) */}
            <div
              id="editorial-center-right"
              className="hidden lg:flex absolute bottom-8 xl:bottom-12 left-[calc(100%+32px)] xl:left-[calc(100%+48px)] flex-col items-end text-right pointer-events-none z-10 whitespace-nowrap"
            >
              <div className="font-sans text-[9px] xl:text-[9.5px] font-semibold uppercase tracking-[0.24em] text-[#2c2a26] leading-[1.65]">
                <span>PEOPLE</span><br />
                <span>PRODUCTS</span><br />
                <span>PARTNERSHIPS</span>
              </div>
              <div className="w-5 xl:w-6 h-[1.5px] bg-[#2c2a26]/70 mt-2.5" />
            </div>

            {/* 
              MAIN STORE LANDSCAPE BACKGROUND IMAGE:
              Pure architectural showroom photograph without video overlays across mobile, tablet, and desktop.
            */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/8.8] overflow-hidden sm:shadow-[0_12px_36px_-8px_rgba(0,0,0,0.18)] sm:border sm:border-black/5 bg-neutral-900">
              <img
                src={storeImageUrl}
                alt="Architectural Glass Hardware Showroom"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center select-none"
              />

              {/* Subtle showroom illumination vignette */}
              <div 
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none"
              />
            </div>

            {/* 
              OVERLAPPING CENTER FOUNDER PORTRAIT:
              Positioned centrally, moved down on mobile (translate-y-[58%]) while preserving tablet & desktop layout.
            */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[58%] sm:translate-y-[45%] md:translate-y-[44%] z-20 w-[240px] sm:w-[280px] md:w-[330px] lg:w-[350px] xl:w-[365px] aspect-[4/4.9] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] ring-1 ring-black/10 bg-neutral-900 overflow-hidden">
              <img
                src={founderImageUrl}
                alt="Ajsal - Founder of ELEGANT"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top select-none"
              />
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* 2. EDITORIAL NARRATIVE & HEADLINE                                 */}
        {/* ================================================================= */}
        <div className="relative max-w-3xl mx-auto text-center px-6 sm:px-0 mt-14 sm:mt-16 md:mt-20 lg:mt-24 mb-14 sm:mb-20">
          {/* Centered Category Hairline Tag */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-6">
            <div className="w-8 sm:w-12 h-[1px] bg-neutral-400/80" />
            <span className="font-sans text-[10px] sm:text-[11px] md:text-xs font-semibold tracking-[0.28em] text-neutral-600 uppercase">
              ABOUT US
            </span>
            <div className="w-8 sm:w-12 h-[1px] bg-neutral-400/80" />
          </div>

          {/* Editorial Display Serif Headline (Matching Reference Typography) */}
          <h2 className="font-serif-playfair text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal tracking-tight text-[#141414] leading-[1.2] sm:leading-[1.14] mb-7 sm:mb-0">
            Built on Trust.
            <br />
            Driven by Quality.
          </h2>

          {/* Narrative Body Copy */}
          <p className="font-sans text-neutral-600 text-sm sm:text-base md:text-[16px] leading-[1.85] font-normal text-center max-w-2xl sm:max-w-2xl md:max-w-3xl mx-auto mt-7 sm:mt-7 px-2">
            I'm Ajsal, a hardware and architectural materials expert based in Ernakulam, with over four years of experience serving businesses across Kerala. Originally from Malappuram, I have built very strong relationships with 50+ companies across Ernakulam through reliable service, genuine products, and competitive pricing. With a strong understanding of glass hardware, architectural materials, and market needs, I make sourcing simple — helping businesses get the right products, at the right price, from someone they can trust.
          </p>
        </div>

        {/* ================================================================= */}
        {/* 3. METRICS & TRUST INDICATORS (3-COLUMN STATS BAR)                */}
        {/* ================================================================= */}
        <div
          id="trust-metrics-bar"
          className="relative max-w-3xl lg:max-w-4xl mx-5 sm:mx-auto border-y border-neutral-300/80 py-8 sm:py-10 my-10 sm:my-14"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-2 sm:gap-4 items-center">
            
            {/* 1. 50+ COMPANIES SERVED */}
            <div className="col-span-1 flex items-center justify-start sm:justify-center gap-2.5 sm:gap-4 pl-1 sm:px-2">
              <div className="w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0 text-neutral-800 flex items-center justify-center">
                {/* Architectural multistory building outline */}
                <svg className="w-7 h-7 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-sans text-xl sm:text-[28px] font-bold text-neutral-900 tracking-tight leading-tight">
                  50+
                </span>
                <span className="font-sans text-[8.5px] sm:text-[10px] font-semibold tracking-[0.18em] sm:tracking-[0.2em] text-neutral-500 uppercase mt-0.5 whitespace-nowrap">
                  COMPANIES SERVED
                </span>
              </div>
            </div>

            {/* 2. 4+ YEARS OF TRUST */}
            <div className="col-span-1 flex items-center justify-start sm:justify-center gap-2.5 sm:gap-4 pl-1 sm:px-2 sm:border-x sm:border-neutral-300/80">
              <div className="w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0 text-neutral-800 flex items-center justify-center">
                {/* Shield with checkmark outline */}
                <svg className="w-7 h-7 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-sans text-xl sm:text-[28px] font-bold text-neutral-900 tracking-tight leading-tight">
                  4+
                </span>
                <span className="font-sans text-[8.5px] sm:text-[10px] font-semibold tracking-[0.18em] sm:tracking-[0.2em] text-neutral-500 uppercase mt-0.5 whitespace-nowrap">
                  YEARS OF TRUST
                </span>
              </div>
            </div>

            {/* 3. MALAPPURAM TO ERNAKULAM */}
            <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-3 sm:gap-4 px-2 sm:px-2 pt-1 sm:pt-0">
              <div className="w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0 text-neutral-800 flex items-center justify-center">
                {/* Location pin outline */}
                <svg className="w-7 h-7 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-sans text-xs sm:text-[13px] font-bold text-neutral-900 tracking-wider uppercase leading-tight">
                  MALAPPURAM<br className="hidden sm:inline" /> TO ERNAKULAM
                </span>
                <span className="font-sans text-[8.5px] sm:text-[9.5px] font-semibold tracking-[0.16em] sm:tracking-[0.18em] text-neutral-500 uppercase mt-1">
                  ROOTED LOCALLY SERVING GLOBALLY
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* ================================================================= */}
        {/* 4. BOTTOM ACCENTS: SIGNATURE (DESKTOP) & EDITORIAL TAG (MOBILE)   */}
        {/* ================================================================= */}
        <div className="relative w-full max-w-5xl mx-auto flex items-center justify-between pt-4 px-5 sm:px-0">
          
          {/* DESKTOP BOTTOM LEFT ACCENT */}
          <div className="hidden lg:flex flex-col items-start text-left">
            <div className="font-sans text-[9px] font-medium uppercase tracking-[0.24em] text-neutral-500 leading-[1.6]">
              <span>MORE THAN</span><br />
              <span>HARDWARE</span><br />
              <span>A STRONGER</span><br />
              <span>TOMORROW</span>
            </div>
            <div className="w-5 h-[1px] bg-neutral-400 mt-2" />
          </div>

          {/* MOBILE & TABLET BOTTOM CENTER TAG (Matching mobile.png) */}
          <div className="flex lg:hidden flex-col items-center justify-center mx-auto text-center py-2">
            <div className="w-10 h-[1px] bg-neutral-400/80 mb-2.5" />
            <div className="font-sans text-[9.5px] font-medium uppercase tracking-[0.26em] text-neutral-600 leading-[1.7]">
              <span>MORE THAN HARDWARE</span><br />
              <span>A STRONGER TOMORROW</span>
            </div>
            <div className="w-10 h-[1px] bg-neutral-400/80 mt-2.5" />
          </div>

          {/* DESKTOP BOTTOM RIGHT SIGNATURE BLOCK (Matching Laptop.png) */}
          <div className="hidden lg:flex flex-col items-end text-right pr-2">
            {/* Elegant Handwritten Signature */}
            <div className="font-signature text-4xl lg:text-[46px] text-[#1a1a1a] tracking-normal -mb-2 select-none">
              Ajsal
            </div>
            <div className="font-sans text-[9.5px] font-semibold uppercase tracking-[0.24em] text-neutral-700 leading-tight">
              AJSAL
            </div>
            <div className="font-sans text-[8.5px] font-medium uppercase tracking-[0.28em] text-neutral-500 leading-tight mt-0.5">
              FOUNDER
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
