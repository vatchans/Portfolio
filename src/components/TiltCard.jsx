import React, { useRef, useState, useCallback } from 'react';

/**
 * Premium 3D Tilt Card with dynamic specular glare
 * GPU-accelerated via CSS transform perspective & 3D matrices
 */
const TiltCard = ({
  children,
  className = '',
  style = {},
  maxTilt = 10,
  glare = true,
  scale = 1.02,
  perspective = 1000,
}) => {
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
  });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = useCallback((e) => {
    // If hovering over interactive elements, do not tilt to guarantee flawless click registration
    if (e.target.closest('button, a, input, textarea, select, [role="tab"], [role="radio"], label, .channel-action-btn, .inquiry-pill')) {
      return;
    }

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;

    const rotateX = (-yPct * maxTilt).toFixed(2);
    const rotateY = (xPct * maxTilt).toFixed(2);

    setTiltStyle({
      transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: 'transform 0.1s ease-out',
    });

    if (glare) {
      setGlarePos({
        x: Math.round((mouseX / width) * 100),
        y: Math.round((mouseY / height) * 100),
        opacity: 0.25,
      });
    }
  }, [maxTilt, perspective, scale, glare]);

  const handleMouseLeave = useCallback(() => {
    setTiltStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
    });
    if (glare) {
      setGlarePos((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [perspective, glare]);

  return (
    <div
      ref={cardRef}
      className={`tilt-card-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        transformStyle: 'preserve-3d',
        ...tiltStyle,
        ...style,
      }}
    >
      {children}
      {glare && (
        <div
          className="tilt-card-glare"
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            pointerEvents: 'none',
            background: `radial-gradient(circle 300px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, ${glarePos.opacity}), transparent 70%)`,
            transition: 'background 0.15s ease',
            zIndex: 10,
          }}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default TiltCard;

