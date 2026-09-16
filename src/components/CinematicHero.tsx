import React, { useEffect, useRef, useState } from 'react';

interface CinematicHeroProps {
  videoUrl?: string;
  mobileCoverImageUrl?: string;
  desktopCoverImageUrl?: string;
  logoUrl?: string;
  runwayVh?: number;
  lerpDamping?: number;
}

export const CinematicHero: React.FC<CinematicHeroProps> = ({
  videoUrl = '/scrub_video.mp4',
  mobileCoverImageUrl = '/mobile_hero_cover.jpg',
  desktopCoverImageUrl = '/desktop_hero_cover.jpg',
  logoUrl = '/elegant_wordmark.png',
  runwayVh = 380,
  lerpDamping = 0.09,
}) => {
  // Determine if device is mobile (< 768px) to exclusively enable video scrub on mobile
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToCatalog = () => {
    const catalog = document.getElementById('hardware-catalog');
    if (catalog) {
      const win = typeof window !== 'undefined' ? (window as any) : null;
      if (win?.lenis && typeof win.lenis.scrollTo === 'function') {
        win.lenis.scrollTo(catalog, {
          duration: 1.4,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        catalog.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (isMobile) {
    return (
      <MobileHeroScrubber
        videoUrl={videoUrl}
        coverImageUrl={mobileCoverImageUrl}
        logoUrl={logoUrl}
        runwayVh={runwayVh}
        lerpDamping={lerpDamping}
        onScrollClick={scrollToCatalog}
      />
    );
  }

  return (
    <DesktopTabletHero
      coverImageUrl={desktopCoverImageUrl}
      logoUrl={logoUrl}
      onScrollClick={scrollToCatalog}
    />
  );
};

/* -------------------------------------------------------------------------- */
/* DESKTOP & TABLET HERO (NO VIDEO, STRETCHED & FIT TO FULL SCREEN)           */
/* -------------------------------------------------------------------------- */
interface DesktopTabletHeroProps {
  coverImageUrl: string;
  logoUrl: string;
  onScrollClick: () => void;
}

const DesktopTabletHero: React.FC<DesktopTabletHeroProps> = ({
  coverImageUrl,
  logoUrl,
  onScrollClick,
}) => {
  return (
    <section
      id="desktop-tablet-hero"
      className="relative w-full h-screen h-[100dvh] bg-black overflow-hidden flex items-center justify-center select-none"
    >
      {/* 
        Full-Screen Stretched & Fit Background Image:
        Stretches seamlessly edge-to-edge across desktop and tablet screens 
        with object-cover, zero letterboxing, and zero black void gaps.
      */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          src={coverImageUrl}
          alt="Architectural Glass Hardware Campaign"
          referrerPolicy="no-referrer"
          decoding="async"
          loading="eager"
          className="w-full h-full object-cover object-center select-none pointer-events-none scale-[1.01]"
        />
        {/* Subtle vignette border to seamlessly blend into deep charcoal theme */}
        <div 
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-radial-vignette opacity-40" 
          style={{
            background: 'radial-gradient(circle at center, transparent 65%, rgba(0,0,0,0.6) 100%)',
          }}
        />
      </div>

      {/* 
        EXACT CENTER BRAND LOGO:
        Enlarged significantly for desktop and tablet screens with prominent visibility,
        crisp drop shadows, and soft radial contrast backing.
      */}
      <div
        id="desktop-center-logo"
        className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none flex flex-col items-center justify-center w-[58%] max-w-[540px] md:max-w-[640px] lg:max-w-[760px] xl:max-w-[880px]"
      >
        {/* Soft radial contrast backing for pristine legibility */}
        <div
          className="absolute -inset-14 -z-10 rounded-full opacity-70 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 75% 65% at 50% 50%, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 100%)',
          }}
        />
        <img
          src={logoUrl}
          alt="ELEGANT"
          referrerPolicy="no-referrer"
          className="w-full h-auto object-contain select-none filter drop-shadow-[0_4px_28px_rgba(0,0,0,0.95)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]"
        />
        <div
          id="desktop-logo-subtitle"
          className="mt-3.5 md:mt-4 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-semibold tracking-[0.26em] text-white uppercase text-center whitespace-nowrap drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] drop-shadow-[0_1px_3px_rgba(0,0,0,1)]"
        >
          ARCHITECTURAL HARDWARE AND MATERIALS
        </div>
      </div>

      {/* 
        EDITORIAL TYPOGRAPHY OVERLAY (DESKTOP & TABLET):
        Enlarged sizes with bold 100% white opacity, crisp tracking,
        and high-contrast backing for maximum visibility and impact.
      */}
      <div
        id="desktop-editorial-overlay"
        className="absolute inset-0 w-full h-full z-20 pointer-events-none"
      >
        {/* TOP LEFT */}
        <div
          id="desktop-text-top-left"
          className="absolute top-[7%] md:top-[7.5%] left-[6.5%] md:left-[7.5%] flex flex-col items-start"
        >
          <div className="font-sans text-[13px] md:text-[15px] lg:text-[17px] xl:text-[19px] font-semibold uppercase tracking-[0.24em] text-white leading-[1.7] drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] drop-shadow-[0_1px_3px_rgba(0,0,0,1)]">
            <span>GLASS</span><br />
            <span>HARDWARE</span><br />
            <span>ARCHITECTURE</span>
          </div>
          <div className="w-10 md:w-14 lg:w-16 h-[2px] bg-white mt-3.5 opacity-100 shadow-[0_1px_4px_rgba(0,0,0,0.8)]" />
        </div>

        {/* TOP RIGHT */}
        <div
          id="desktop-text-top-right"
          className="absolute top-[7%] md:top-[7.5%] right-[6.5%] md:right-[7.5%] flex flex-col items-end text-right"
        >
          <div className="font-sans text-[13px] md:text-[15px] lg:text-[17px] xl:text-[19px] font-semibold uppercase tracking-[0.24em] text-white leading-[1.7] drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] drop-shadow-[0_1px_3px_rgba(0,0,0,1)]">
            <span>SPACES</span><br />
            <span>MADE</span><br />
            <span>STRONGER</span>
          </div>
          <div className="w-10 md:w-14 lg:w-16 h-[2px] bg-white mt-3.5 opacity-100 shadow-[0_1px_4px_rgba(0,0,0,0.8)]" />
        </div>

        {/* BOTTOM LEFT */}
        <div
          id="desktop-text-bottom-left"
          className="absolute bottom-[7.5%] md:bottom-[8%] left-[6.5%] md:left-[7.5%] flex flex-col items-start"
        >
          <div className="font-sans text-[13px] md:text-[15px] lg:text-[17px] xl:text-[19px] font-semibold uppercase tracking-[0.24em] text-white leading-[1.7] drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] drop-shadow-[0_1px_3px_rgba(0,0,0,1)]">
            <span>PRECISION</span><br />
            <span>MATERIALS</span>
          </div>
          <div className="w-10 md:w-14 lg:w-16 h-[2px] bg-white mt-3.5 opacity-100 shadow-[0_1px_4px_rgba(0,0,0,0.8)]" />
        </div>

        {/* BOTTOM RIGHT */}
        <div
          id="desktop-text-bottom-right"
          className="absolute bottom-[7.5%] md:bottom-[8%] right-[6.5%] md:right-[7.5%] flex flex-col items-end text-right"
        >
          <div className="font-sans text-[13px] md:text-[15px] lg:text-[17px] xl:text-[19px] font-semibold uppercase tracking-[0.24em] text-white leading-[1.7] drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] drop-shadow-[0_1px_3px_rgba(0,0,0,1)]">
            <span>ENGINEERED</span><br />
            <span>FOR A BETTER</span><br />
            <span>TOMORROW</span>
          </div>
          <div className="w-10 md:w-14 lg:w-16 h-[2px] bg-white mt-3.5 opacity-100 shadow-[0_1px_4px_rgba(0,0,0,0.8)]" />
        </div>

        {/* BOTTOM CENTER (SCROLL TO EXPLORE WITH CLICK INTERACTION) */}
        <div
          id="desktop-text-bottom-center"
          className="absolute bottom-[4.5%] left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-auto cursor-pointer group"
          onClick={onScrollClick}
          role="button"
          tabIndex={0}
          aria-label="Scroll to explore products"
        >
          {/* Solid vertical line above text */}
          <div className="w-[2px] h-7 md:h-9 bg-white mb-2 group-hover:h-11 transition-all duration-300 shadow-[0_1px_4px_rgba(0,0,0,0.8)]" />
          <div className="font-sans text-[11px] md:text-[13px] lg:text-[14px] font-semibold uppercase tracking-[0.34em] text-white group-hover:scale-105 transition-all duration-300 whitespace-nowrap drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            SCROLL TO EXPLORE
          </div>
          {/* Solid vertical line below text */}
          <div className="w-[2px] h-7 md:h-9 bg-white mt-2 group-hover:h-11 transition-all duration-300 shadow-[0_1px_4px_rgba(0,0,0,0.8)]" />
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/* MOBILE HERO SCRUBBER (INTERACTIVE VIDEO SCRUBBING ONLY ON MOBILE)          */
/* -------------------------------------------------------------------------- */
interface MobileHeroScrubberProps {
  videoUrl: string;
  coverImageUrl: string;
  logoUrl: string;
  runwayVh: number;
  lerpDamping: number;
  onScrollClick: () => void;
}

const MobileHeroScrubber: React.FC<MobileHeroScrubberProps> = ({
  videoUrl,
  coverImageUrl,
  logoUrl,
  runwayVh,
  lerpDamping,
  onScrollClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const coverLayerRef = useRef<HTMLDivElement>(null);
  const typographyLayerRef = useRef<HTMLDivElement>(null);

  const currentProgressRef = useRef<number>(0);
  const targetProgressRef = useRef<number>(0);
  const durationRef = useRef<number>(14.23);
  const animFrameIdRef = useRef<number>(0);
  const isSeekingRef = useRef<boolean>(false);
  const pendingSeekTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    const coverLayer = coverLayerRef.current;
    const typographyLayer = typographyLayerRef.current;
    if (!container || !video) return;

    video.muted = true;
    video.playsInline = true;
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.setAttribute('muted', '');
    video.preload = 'auto';

    const updateDuration = () => {
      if (video.duration && !isNaN(video.duration) && video.duration > 0) {
        durationRef.current = video.duration;
      }
      video.pause();
    };

    if (video.readyState >= 1) {
      updateDuration();
    }
    video.addEventListener('loadedmetadata', updateDuration, { passive: true });
    video.addEventListener('loadeddata', updateDuration, { passive: true });
    video.addEventListener('canplay', updateDuration, { passive: true });

    // Non-blocking seek pipeline: executes seek when GPU finishes previous frame
    const executeSeek = (time: number) => {
      if (video.readyState < 1) return;
      isSeekingRef.current = true;
      try {
        if ('fastSeek' in video && typeof (video as any).fastSeek === 'function') {
          (video as any).fastSeek(time);
        } else {
          video.currentTime = time;
        }
      } catch {
        isSeekingRef.current = false;
      }
    };

    const handleSeeked = () => {
      isSeekingRef.current = false;
      if (pendingSeekTimeRef.current !== null) {
        const nextTime = pendingSeekTimeRef.current;
        pendingSeekTimeRef.current = null;
        if (Math.abs(video.currentTime - nextTime) > 0.008) {
          executeSeek(nextTime);
        }
      }
    };

    video.addEventListener('seeked', handleSeeked, { passive: true });
    video.load();

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;
      if (scrollableDistance <= 0) return;

      const scrolled = -rect.top;
      const rawProgress = scrolled / scrollableDistance;
      targetProgressRef.current = Math.min(Math.max(rawProgress, 0), 1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const renderLoop = () => {
      const diff = targetProgressRef.current - currentProgressRef.current;
      if (Math.abs(diff) < 0.00003) {
        currentProgressRef.current = targetProgressRef.current;
      } else {
        currentProgressRef.current += diff * lerpDamping;
      }

      const progress = currentProgressRef.current;
      const totalDuration = durationRef.current || 14.23;
      const safeDuration = Math.max(0.1, totalDuration - 0.05);

      // Cover Layer Crossfade
      let coverOpacity = 0;
      let coverScale = 1.0;
      if (progress <= 0.12) {
        const t = Math.max(0, Math.min(1, (progress - 0.02) / 0.10));
        coverOpacity = 1 - t;
        coverScale = 1.0 + t * 0.03;
      } else if (progress >= 0.86) {
        const t = Math.max(0, Math.min(1, (progress - 0.86) / 0.08));
        coverOpacity = t;
        coverScale = 1.03 - t * 0.03;
      } else {
        coverOpacity = 0;
      }

      // Typography Fade
      let typoOpacity = 0;
      if (progress <= 0.06) {
        typoOpacity = Math.max(0, Math.min(1, 1 - progress / 0.06));
      } else if (progress >= 0.92) {
        typoOpacity = Math.max(0, Math.min(1, (progress - 0.92) / 0.06));
      } else {
        typoOpacity = 0;
      }

      if (coverLayer) {
        coverLayer.style.opacity = coverOpacity.toFixed(4);
        coverLayer.style.transform = `scale(${coverScale.toFixed(4)}) translate3d(0, 0, 0)`;
        coverLayer.style.pointerEvents = coverOpacity > 0.5 ? 'auto' : 'none';
      }

      if (typographyLayer) {
        typographyLayer.style.opacity = typoOpacity.toFixed(4);
      }

      // High-frequency, liquid video scrubbing without seek deadlocks
      const scrubT = Math.min(Math.max((progress - 0.04) / 0.84, 0), 1);
      const targetVideoTime = scrubT * safeDuration;

      if (video.readyState >= 1) {
        const timeDiff = Math.abs(video.currentTime - targetVideoTime);
        if (timeDiff > 0.008) {
          if (!isSeekingRef.current && !video.seeking) {
            executeSeek(targetVideoTime);
          } else {
            pendingSeekTimeRef.current = targetVideoTime;
          }
        }
      }

      animFrameIdRef.current = requestAnimationFrame(renderLoop);
    };

    animFrameIdRef.current = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      document.removeEventListener('scroll', handleScroll);
      video.removeEventListener('loadedmetadata', updateDuration);
      video.removeEventListener('loadeddata', updateDuration);
      video.removeEventListener('canplay', updateDuration);
      video.removeEventListener('seeked', handleSeeked);
      cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [runwayVh, lerpDamping]);

  return (
    <div
      id="cinematic-hero-runway"
      ref={containerRef}
      className="relative w-full bg-black"
      style={{ height: `${runwayVh}vh` }}
    >
      <div
        id="cinematic-stage"
        className="sticky top-0 h-screen h-[100dvh] w-full overflow-hidden bg-black flex items-center justify-center select-none"
      >
        <div
          id="mobile-canvas-stage"
          className="relative w-full h-full overflow-hidden bg-black flex items-center justify-center"
        >
          {/* Base Video Layer */}
          <video
            ref={videoRef}
            src={videoUrl}
            preload="auto"
            muted
            playsInline
            autoPlay={false}
            disablePictureInPicture
            controls={false}
            className="absolute inset-0 w-full h-full object-cover select-none will-change-transform transform-gpu z-0"
          />

          {/* Cover Image Layer */}
          <div
            id="cover-image-layer"
            ref={coverLayerRef}
            className="absolute inset-0 w-full h-full z-10 will-change-opacity will-change-transform"
            style={{ opacity: 1, transform: 'scale(1)' }}
          >
            <img
              src={coverImageUrl}
              alt="Architectural Glass Hardware Campaign"
              referrerPolicy="no-referrer"
              decoding="async"
              loading="eager"
              className="w-full h-full object-cover select-none pointer-events-none"
            />

            {/* Central Brand Logo: position at 45%, reduced size by 1.5% from previous scale, subtitle at 8.5px */}
            <div
              id="center-brand-logo"
              className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none flex flex-col items-center justify-center w-[65%] max-w-[290px] scale-[1.015]"
            >
              <div
                className="absolute -inset-7 -z-10 rounded-full opacity-65 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 75% 65% at 50% 50%, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%)',
                }}
              />
              <img
                src={logoUrl}
                alt="ELEGANT"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain select-none filter drop-shadow-[0_3px_18px_rgba(0,0,0,0.85)] drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)]"
              />
              <div
                id="mobile-logo-subtitle"
                className="mt-1.5 text-[8.5px] tracking-[0.25em] font-medium text-white uppercase text-center whitespace-nowrap drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] drop-shadow-[0_1px_3px_rgba(0,0,0,1)]"
              >
                ARCHITECTURAL HARDWARE AND MATERIALS
              </div>
            </div>
          </div>

          {/* Typography Layer */}
          <div
            id="editorial-typography-overlay"
            ref={typographyLayerRef}
            className="absolute inset-0 w-full h-full z-20 pointer-events-none will-change-opacity transition-opacity duration-75 drop-shadow-[0_1px_4px_rgba(0,0,0,0.75)]"
            style={{ opacity: 1 }}
          >
            {/* TOP LEFT */}
            <div
              id="text-top-left"
              className="absolute top-[7.5%] left-[8%] flex flex-col items-start"
            >
              <div className="font-sans text-[10.5px] font-semibold uppercase tracking-[0.24em] text-white leading-[1.65] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                <span>GLASS</span><br />
                <span>HARDWARE</span><br />
                <span>ARCHITECTURE</span>
              </div>
              <div className="w-8 h-[1.5px] bg-white mt-2.5 opacity-100 shadow-[0_1px_3px_rgba(0,0,0,0.8)]" />
            </div>

            {/* TOP RIGHT */}
            <div
              id="text-top-right"
              className="absolute top-[7.5%] right-[8%] flex flex-col items-end text-right"
            >
              <div className="font-sans text-[10.5px] font-semibold uppercase tracking-[0.24em] text-white leading-[1.65] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                <span>SPACES</span><br />
                <span>MADE</span><br />
                <span>STRONGER</span>
              </div>
              <div className="w-8 h-[1.5px] bg-white mt-2.5 opacity-100 shadow-[0_1px_3px_rgba(0,0,0,0.8)]" />
            </div>

            {/* BOTTOM LEFT */}
            <div
              id="text-bottom-left"
              className="absolute bottom-[10.5%] left-[8%] flex flex-col items-start"
            >
              <div className="font-sans text-[10.5px] font-semibold uppercase tracking-[0.24em] text-white leading-[1.65] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                <span>PRECISION</span><br />
                <span>MATERIALS</span>
              </div>
              <div className="w-8 h-[1.5px] bg-white mt-2.5 opacity-100 shadow-[0_1px_3px_rgba(0,0,0,0.8)]" />
            </div>

            {/* BOTTOM RIGHT */}
            <div
              id="text-bottom-right"
              className="absolute bottom-[10.5%] right-[8%] flex flex-col items-end text-right"
            >
              <div className="font-sans text-[10.5px] font-semibold uppercase tracking-[0.24em] text-white leading-[1.65] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                <span>ENGINEERED</span><br />
                <span>FOR A BETTER</span><br />
                <span>TOMORROW</span>
              </div>
              <div className="w-8 h-[1.5px] bg-white mt-2.5 opacity-100 shadow-[0_1px_3px_rgba(0,0,0,0.8)]" />
            </div>

            {/* BOTTOM CENTER */}
            <div
              id="text-bottom-center"
              className="absolute bottom-[5.5%] left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-auto cursor-pointer"
              onClick={onScrollClick}
            >
              <div className="w-[1.5px] h-5 bg-white mb-1.5 opacity-100 shadow-[0_1px_3px_rgba(0,0,0,0.8)]" />
              <div className="font-sans text-[9.5px] font-semibold uppercase tracking-[0.32em] text-white whitespace-nowrap drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                SCROLL TO EXPLORE
              </div>
              <div className="w-[1.5px] h-5 bg-white mt-1.5 opacity-100 shadow-[0_1px_3px_rgba(0,0,0,0.8)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
