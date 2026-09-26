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
  videoUrl = 'https://res.cloudinary.com/cbi5mcab/video/upload/v1790230139/ELEGENT_HERO_e9xkz6.mp4',
  mobileCoverImageUrl = '/mobile_hero_cover.jpg',
  desktopCoverImageUrl = '/desktop_hero_cover.jpg',
  logoUrl = '/elegant_wordmark.png',
}) => {
  // Determine if device is mobile or tablet viewport (< 1024px)
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 1024;
    }
    return true;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
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
      <MobileTabletVideoHero
        videoUrl={videoUrl}
        coverImageUrl={mobileCoverImageUrl}
        logoUrl={logoUrl}
      />
    );
  }

  return (
    <DesktopTabletHero
      coverImageUrl={desktopCoverImageUrl}
      logoUrl={logoUrl}
    />
  );
};

/* -------------------------------------------------------------------------- */
/* DESKTOP HERO (NO VIDEO, STRETCHED & FIT TO FULL SCREEN - UNTOUCHED)        */
/* -------------------------------------------------------------------------- */
interface DesktopTabletHeroProps {
  coverImageUrl: string;
  logoUrl: string;
}

const DesktopTabletHero: React.FC<DesktopTabletHeroProps> = ({
  coverImageUrl,
  logoUrl,
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
        EDITORIAL TYPOGRAPHY OVERLAY (DESKTOP):
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
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/* MOBILE & TABLET VIDEO HERO (AUTOPLAYS ONCE, STOPS AT END UNTIL REFRESHED)  */
/* -------------------------------------------------------------------------- */
// Session tracker: resets automatically when the user refreshes the browser
let hasHeroVideoPlayedInSession = false;

interface MobileTabletVideoHeroProps {
  videoUrl: string;
  coverImageUrl: string;
  logoUrl: string;
}

const MobileTabletVideoHero: React.FC<MobileTabletVideoHeroProps> = ({
  videoUrl,
  coverImageUrl,
  logoUrl,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    // If the video already played in this page visit, hold on the final frame
    if (hasHeroVideoPlayedInSession) {
      const holdAtEnd = () => {
        if (video.duration && !isNaN(video.duration) && video.duration > 0) {
          video.currentTime = Math.max(0, video.duration - 0.05);
          video.pause();
        }
      };

      if (video.readyState >= 1) {
        holdAtEnd();
      } else {
        video.addEventListener('loadedmetadata', holdAtEnd, { once: true });
      }
      return;
    }

    // Play once from start
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay fallback
      });
    }

    const handleEnded = () => {
      hasHeroVideoPlayedInSession = true;
      if (video.duration && !isNaN(video.duration) && video.duration > 0) {
        video.currentTime = Math.max(0, video.duration - 0.05);
      }
      video.pause();
    };

    video.addEventListener('ended', handleEnded);
    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, [videoUrl]);

  return (
    <section
      id="mobile-tablet-video-hero"
      className="relative w-full h-screen h-[100dvh] bg-black overflow-hidden flex items-center justify-center select-none"
    >
      {/* Background Video Player */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          ref={videoRef}
          src={videoUrl}
          poster={coverImageUrl}
          autoPlay={!hasHeroVideoPlayedInSession}
          loop={false}
          muted
          playsInline
          webkit-playsinline=""
          disablePictureInPicture
          disableRemotePlayback
          controls={false}
          tabIndex={-1}
          aria-hidden="true"
          className="w-full h-full object-cover object-center select-none pointer-events-none scale-[1.01]"
        />

        {/* Subtle radial vignette overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background: 'radial-gradient(circle at center, transparent 65%, rgba(0,0,0,0.6) 100%)',
          }}
        />
      </div>

      {/* Central Brand Logo */}
      <div
        id="mobile-center-logo"
        className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none flex flex-col items-center justify-center w-[65%] max-w-[290px] sm:max-w-[400px] md:max-w-[500px]"
      >
        {/* Soft radial contrast backing */}
        <div
          className="absolute -inset-7 sm:-inset-10 -z-10 rounded-full opacity-65 pointer-events-none"
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
          className="mt-1.5 sm:mt-2.5 text-[8.5px] sm:text-[11px] md:text-[13px] tracking-[0.25em] font-medium text-white uppercase text-center whitespace-nowrap drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] drop-shadow-[0_1px_3px_rgba(0,0,0,1)]"
        >
          ARCHITECTURAL HARDWARE AND MATERIALS
        </div>
      </div>

      {/* Editorial Typography Overlay */}
      <div
        id="mobile-editorial-overlay"
        className="absolute inset-0 w-full h-full z-20 pointer-events-none drop-shadow-[0_1px_4px_rgba(0,0,0,0.75)]"
      >
        {/* TOP LEFT */}
        <div
          id="mobile-text-top-left"
          className="absolute top-[7.5%] left-[8%] flex flex-col items-start"
        >
          <div className="font-sans text-[10.5px] sm:text-[13px] md:text-[15px] font-semibold uppercase tracking-[0.24em] text-white leading-[1.65] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            <span>GLASS</span><br />
            <span>HARDWARE</span><br />
            <span>ARCHITECTURE</span>
          </div>
          <div className="w-8 sm:w-11 md:w-14 h-[1.5px] sm:h-[2px] bg-white mt-2.5 opacity-100 shadow-[0_1px_3px_rgba(0,0,0,0.8)]" />
        </div>

        {/* TOP RIGHT */}
        <div
          id="mobile-text-top-right"
          className="absolute top-[7.5%] right-[8%] flex flex-col items-end text-right"
        >
          <div className="font-sans text-[10.5px] sm:text-[13px] md:text-[15px] font-semibold uppercase tracking-[0.24em] text-white leading-[1.65] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            <span>SPACES</span><br />
            <span>MADE</span><br />
            <span>STRONGER</span>
          </div>
          <div className="w-8 sm:w-11 md:w-14 h-[1.5px] sm:h-[2px] bg-white mt-2.5 opacity-100 shadow-[0_1px_3px_rgba(0,0,0,0.8)]" />
        </div>

        {/* BOTTOM LEFT */}
        <div
          id="mobile-text-bottom-left"
          className="absolute bottom-[10.5%] left-[8%] flex flex-col items-start"
        >
          <div className="font-sans text-[10.5px] sm:text-[13px] md:text-[15px] font-semibold uppercase tracking-[0.24em] text-white leading-[1.65] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            <span>PRECISION</span><br />
            <span>MATERIALS</span>
          </div>
          <div className="w-8 sm:w-11 md:w-14 h-[1.5px] sm:h-[2px] bg-white mt-2.5 opacity-100 shadow-[0_1px_3px_rgba(0,0,0,0.8)]" />
        </div>

        {/* BOTTOM RIGHT */}
        <div
          id="mobile-text-bottom-right"
          className="absolute bottom-[10.5%] right-[8%] flex flex-col items-end text-right"
        >
          <div className="font-sans text-[10.5px] sm:text-[13px] md:text-[15px] font-semibold uppercase tracking-[0.24em] text-white leading-[1.65] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            <span>ENGINEERED</span><br />
            <span>FOR A BETTER</span><br />
            <span>TOMORROW</span>
          </div>
          <div className="w-8 sm:w-11 md:w-14 h-[1.5px] sm:h-[2px] bg-white mt-2.5 opacity-100 shadow-[0_1px_3px_rgba(0,0,0,0.8)]" />
        </div>
      </div>
    </section>
  );
};
