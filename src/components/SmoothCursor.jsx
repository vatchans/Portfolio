import React, { useEffect, useRef, useState } from 'react';

/**
 * SmoothCursor:
 * Luxury Awwwards-style ambient cursor follower that glides with momentum
 * and reacts magnetically to interactive elements.
 */
export const SmoothCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with a precise mouse pointer
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer || prefersReducedMotion) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    // Smooth spring chase for the outer ring
    const render = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animId = requestAnimationFrame(render);
    };

    // Check hover states on interactive targets
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('.tilt-card-wrapper') ||
        target.closest('.prj-card') ||
        target.closest('.skill-card') ||
        target.closest('.inquiry-pill')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) {
    return null;
  }

  return (
    <>
      {/* Precision center dot */}
      <div
        ref={dotRef}
        className={`smooth-cursor-dot ${isVisible ? 'smooth-cursor--visible' : ''}`}
        aria-hidden="true"
      />
      {/* Ambient glowing outer ring */}
      <div
        ref={ringRef}
        className={`smooth-cursor-ring ${isVisible ? 'smooth-cursor--visible' : ''} ${
          isHovered ? 'smooth-cursor-ring--hover' : ''
        }`}
        aria-hidden="true"
      />
    </>
  );
};

export default SmoothCursor;

