import React, { useEffect, createContext, useContext, useState, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const LenisContext = createContext(null);
export const useLenis = () => useContext(LenisContext);

/**
 * ParallaxWrapper — The Unified Smooth Scrolling & GSAP Foundation
 * - Single source-of-truth RAF driven by GSAP Ticker
 * - Lenis momentum scrolling hooked into ScrollTrigger.update
 * - Direct DOM manipulation on progress bar (Zero React re-renders during scroll)
 * - Restored standard lagSmoothing to prevent frame-drop teleportation jumps
 */
export const ParallaxWrapper = ({ children }) => {
  const [lenisInstance, setLenisInstance] = useState(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    // 1. Initialize Lenis smooth scroll
    const lenis = new Lenis({
      autoRaf: false, // CRITICAL: disables internal RAF so GSAP ticker drives it exclusively (prevents double-tick jitter)
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
      infinite: false,
    });

    setLenisInstance(lenis);
    window.__lenis = lenis;

    // 2. Synchronize Lenis scroll position with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // 3. Single unified animation loop driven by GSAP Ticker
    const tickerUpdate = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerUpdate);
    gsap.ticker.lagSmoothing(500, 33); // Keep natural smoothing so dropped frames don't jump

    // 4. Update top progress bar directly via DOM reference (0 React re-renders)
    const handleScroll = (e) => {
      if (progressBarRef.current) {
        const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
        if (totalScroll > 0) {
          const progress = Math.min(Math.max((e.scroll / totalScroll) * 100, 0), 100);
          progressBarRef.current.style.width = `${progress}%`;
        }
      }
    };

    lenis.on('scroll', handleScroll);

    // 5. Global smooth anchor click handler
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const href = target.getAttribute('href');
      if (!href || href === '#' || href.length < 2) return;
      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        lenis.scrollTo(targetEl, { offset: -40, duration: 1.1 });
      }
    };
    document.addEventListener('click', handleAnchorClick);

    // 6. Refresh ScrollTrigger once DOM settles
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(refreshTimer);
      document.removeEventListener('click', handleAnchorClick);
      gsap.ticker.remove(tickerUpdate);
      lenis.off('scroll', ScrollTrigger.update);
      lenis.off('scroll', handleScroll);
      lenis.destroy();
      delete window.__lenis;
      setLenisInstance(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisInstance}>
      {/* Top glowing scroll progress indicator — updated directly via ref */}
      <div
        ref={progressBarRef}
        className="parallax-scroll-progressbar"
        style={{ width: '0%' }}
        aria-hidden="true"
      />
      {children}
    </LenisContext.Provider>
  );
};

export default ParallaxWrapper;