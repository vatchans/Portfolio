/**
 * ScrollAnimations — High-Performance 3D Parallax & Motion Engine
 * Powered by Framer Motion & Lenis
 *
 * Provides:
 * - useSectionParallax: hook for calculating smooth spring-based scroll progress per section
 * - useParallax: direct DOM differential scroll displacement for elements
 * - SectionDivider: Awwwards-style cinematic blurred transition connector between sections
 * - ParallaxBackgroundOrbs: Multi-depth ambient glowing 3D spheres
 */
import React, { useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * initParallaxLayers
 * Scans container for [data-speed] attributes and hooks up continuous GSAP ScrollTrigger parallax.
 * speed < 1 = background (resists scroll, moves slower)
 * speed === 1 = standard
 * speed > 1 = foreground (moves faster, rushes past scroll)
 */
export function initParallaxLayers(containerEl) {
  if (!containerEl) return () => {};

  const mm = gsap.matchMedia();
  mm.add('(min-width: 768px)', () => {
    const elements = containerEl.querySelectorAll('[data-speed]');
    elements.forEach((el) => {
      const speed = parseFloat(el.getAttribute('data-speed')) || 1.0;
      if (Math.abs(speed - 1.0) < 0.05) return;
      const yOffset = (1 - speed) * 140;

      gsap.to(el, {
        y: yOffset,
        ease: 'none',
        scrollTrigger: {
          trigger: containerEl,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });
    });
  });

  return () => mm.revert();
}

/**
 * useSectionParallax
 * Returns spring-smoothed scroll progress and standard 3D depth transforms for any section container.
 */
export function useSectionParallax(targetRef) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  // Common differential depth values
  const backgroundY = useTransform(smoothProgress, [0, 1], [-100, 100]);
  const foregroundY = useTransform(smoothProgress, [0, 1], [60, -60]);
  const floatingY = useTransform(smoothProgress, [0, 1], [120, -120]);
  const subtleRotate = useTransform(smoothProgress, [0, 1], [-4, 4]);
  const subtleScale = useTransform(smoothProgress, [0, 0.5, 1], [0.96, 1, 0.96]);

  return {
    scrollYProgress,
    smoothProgress,
    backgroundY,
    foregroundY,
    floatingY,
    subtleRotate,
    subtleScale,
  };
}

/**
 * useParallax
 * Applies differential scroll velocity to ref'd elements (e.g. Lottie illustration or background card).
 */
export function useParallax(ref, speed = 0.2, axis = 'y') {
  useEffect(() => {
    const el = ref?.current;
    if (!el) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    el.style.willChange = 'transform';
    let raf = null;

    const update = () => {
      raf = null;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = (vh - rect.top) / (vh + rect.height);
      const offset = (progress - 0.5) * speed * 220;
      if (axis === 'y') {
        el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
      } else {
        el.style.transform = `translate3d(${offset.toFixed(2)}px, 0, 0)`;
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    requestAnimationFrame(update);

    const lenis = window.__lenis;
    if (lenis) {
      lenis.on('scroll', onScroll);
      return () => {
        lenis.off('scroll', onScroll);
        if (raf) cancelAnimationFrame(raf);
        el.style.willChange = '';
        el.style.transform = '';
      };
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
      el.style.willChange = '';
      el.style.transform = '';
    };
  }, [ref, speed, axis]);
}

/**
 * SectionDivider
 * Seamless cinematic visual bridge between sections with gradient lighting,
 * subtle animated cyber node, and multi-depth blur.
 */
export function SectionDivider({ accent = '#38bdf8' }) {
  return (
    <div className="section-divider-container" aria-hidden="true">
      <div
        className="section-divider-glow"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${accent}22 0%, transparent 70%)`,
        }}
      />
      <div className="section-divider-line">
        <span
          className="section-divider-node"
          style={{
            boxShadow: `0 0 12px ${accent}`,
            borderColor: accent,
          }}
        />
      </div>
    </div>
  );
}

/**
 * ParallaxBackgroundOrbs
 * Multi-layer ambient glowing 3D spheres with differential parallax movement.
 */
export function ParallaxBackgroundOrbs({ targetRef, primaryColor = '#38bdf8', secondaryColor = '#818cf8' }) {
  const { smoothProgress } = useSectionParallax(targetRef);

  const orb1Y = useTransform(smoothProgress, [0, 1], [-90, 90]);
  const orb2Y = useTransform(smoothProgress, [0, 1], [80, -80]);
  const orbScale = useTransform(smoothProgress, [0, 0.5, 1], [0.85, 1.15, 0.85]);

  return (
    <div className="parallax-orbs-wrap" aria-hidden="true">
      <motion.div
        className="parallax-ambient-orb orb-primary"
        style={{
          y: orb1Y,
          scale: orbScale,
          background: `radial-gradient(circle, ${primaryColor} 0%, transparent 70%)`,
        }}
      />
      <motion.div
        className="parallax-ambient-orb orb-secondary"
        style={{
          y: orb2Y,
          scale: orbScale,
          background: `radial-gradient(circle, ${secondaryColor} 0%, transparent 70%)`,
        }}
      />
    </div>
  );
}

export default useSectionParallax;
