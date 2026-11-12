import React, { useRef, useCallback, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import Link from '@mui/material/Link';
import Typewriter from 'typewriter-effect';

gsap.registerPlugin(ScrollTrigger);

/* ── Interactive 3D Particle Canvas with dynamic mouse attraction/repulsion ── */
function ParticleCanvas() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const COUNT = Math.min(80, Math.floor((w * h) / 13000));
    const particles = [];

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.6 + 0.5,
        dx: (Math.random() - 0.5) * 0.45,
        dy: (Math.random() - 0.5) * 0.45,
        alpha: Math.random() * 0.45 + 0.2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      particles.forEach((p) => {
        // Cursor proximity physics
        const dmx = p.x - mx;
        const dmy = p.y - my;
        const distM = Math.sqrt(dmx * dmx + dmy * dmy);
        if (distM < 90) {
          p.x += (dmx / distM) * 1.5;
          p.y += (dmy / distM) * 1.5;
        }

        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
        ctx.fill();
      });

      // Connecting energy filaments
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 115) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(73, 90, 255, ${0.14 * (1 - dist / 115)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
}

/* ── Interactive 3D Tech Badge ── */
function TechBadge({ label }) {
  return (
    <span className="tech-badge">
      {label}
    </span>
  );
}

const HeroSection = () => {
  const heroRef = useRef(null);
  const imageCardRef = useRef(null);
  const mousePosRef = useRef({ x: 0, y: 0 });

  // ── GSAP Scroll-Driven Cinematic Scene Transition into About ──
  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    const ctx = gsap.context(() => {
      // 1. Initial entrance timeline on load
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.hero-eyebrow', { y: -20, opacity: 0, duration: 0.6, delay: 0.1 })
        .from('.hero-greeting', { y: 20, opacity: 0, duration: 0.5 }, '-=0.3')
        .from('.hero-name', { y: 30, opacity: 0, duration: 0.8 }, '-=0.3')
        .from('.hero-typewriter', { opacity: 0, duration: 0.5 }, '-=0.4')
        .from('.hero-description', { y: 20, opacity: 0, duration: 0.6 }, '-=0.3')
        .from('.hero-tech-stack .tech-badge', { y: 15, opacity: 0, stagger: 0.05, duration: 0.4 }, '-=0.3')
        .from('.hero-cta', { y: 20, opacity: 0, duration: 0.6 }, '-=0.3')
        .from('.hero-socials', { opacity: 0, duration: 0.5 }, '-=0.4')
        .from('.hero-image-wrapper', { scale: 0.9, opacity: 0, x: 40, duration: 1 }, '-=0.9');

      // 2. Continuous Scroll Parallax Exit (Locked 1:1 to smooth scroll - zero jitter or rubberband)
      const scrubTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroEl,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      // Foreground Text: gently shifts up, scales down, and dims
      scrubTl.to(
        '.hero-content',
        {
          y: -90,
          scale: 0.94,
          opacity: 0.25,
          ease: 'none',
        },
        0
      );

      // Midground Profile Card: shifts up, tilts backward in 3D, and dims
      scrubTl.to(
        '.hero-image-wrapper',
        {
          y: -60,
          scale: 0.88,
          rotateX: 12,
          opacity: 0.25,
          ease: 'none',
        },
        0
      );

      // Background Orbs: differential depth drift
      scrubTl.to(
        '.hero-orb-1',
        {
          y: 120,
          scale: 1.25,
          opacity: 0.1,
          ease: 'none',
        },
        0
      );
      scrubTl.to(
        '.hero-orb-2',
        {
          y: -80,
          scale: 1.15,
          opacity: 0.1,
          ease: 'none',
        },
        0
      );
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, []);

  // ── 3D Mouse Perspective on Profile Card ──
  const handleMouseMove = useCallback((e) => {
    if (!heroRef.current || !imageCardRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;

    mousePosRef.current = { x: xPct * 20, y: -yPct * 20 };

    gsap.to(imageCardRef.current, {
      rotateY: mousePosRef.current.x,
      rotateX: mousePosRef.current.y,
      duration: 0.4,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!imageCardRef.current) return;
    gsap.to(imageCardRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.7,
      ease: 'power2.out',
    });
  }, []);

  const techStack = [
    'React.js',
    'Node.js',
    'AWS (EC2/ECS/Lambda)',
    'Kotlin & Compose',
    'Docker',
    'FastAPI & Python',
    'Microservices',
    'MongoDB & DynamoDB',
  ];

  return (
    <section
      id="home"
      className="Container hero-section"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label="Hero section"
    >
      {/* ── Background: Particle Canvas ── */}
      <ParticleCanvas />

      {/* ── Background: Deep Atmospheric Glow Orbs ── */}
      <div
        className="hero-orb-1"
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(73,90,255,0.2) 0%, transparent 70%)',
          filter: 'blur(75px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
        aria-hidden="true"
      />
      <div
        className="hero-orb-2"
        style={{
          position: 'absolute',
          bottom: '-5%',
          right: '-5%',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(10,207,254,0.18) 0%, transparent 70%)',
          filter: 'blur(75px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Grid overlay */}
      <div className="hero-grid" aria-hidden="true" />

      {/* ── Foreground: Hero Content ── */}
      <div className="content hero-content" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot" />
          Available immediately · Chennai, TN
        </div>

        <p className="hero-greeting" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
          Hi there, I'm
        </p>

        <h1 className="hero-name">
          Sree Vatchan A
        </h1>

        <div className="typewriter-text hero-typewriter">
          <Typewriter
            options={{
              strings: [
                'Full-Stack Engineer',
                'AI-Powered Digital Health',
                'Node.js & React Specialist',
                'AWS Cloud & Microservices',
                'Android · Kotlin · Jetpack Compose',
                'Health-Tech & IoT Integration',
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </div>

        <p className="hero-description">
          Full-Stack Engineer with 3+ years of experience building AI-powered digital health products.
          Led a monolith-to-microservices migration cutting AWS infrastructure costs by 75% while sustaining
          99.9% uptime for thousands of users. Shipped the Aiwell Ayurveda wellness app and on-device
          AI Kiosk Android applications to production.
        </p>

        <div className="hero-tech-stack">
          {techStack.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>

        <div className="hero-cta">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-primary"
            download="Sree_Vatchan_A_Resume.pdf"
          >
            <span>Download Resume</span>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
          <a
            href="#experience"
            className="hero-btn-secondary"
          >
            <span>Explore Experience</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>

        <div className="social-links hero-socials">
          <Link href="https://github.com/vatchans" target="_blank" aria-label="GitHub Profile">
            <div title="GitHub"><GitHubIcon /></div>
          </Link>
          <Link href="https://www.linkedin.com/in/sree-vatchan-6a0855246" target="_blank" aria-label="LinkedIn Profile">
            <div title="LinkedIn"><LinkedInIcon /></div>
          </Link>
          <Link href="mailto:vatchans@gmail.com" aria-label="Email">
            <div title="Email"><MailIcon /></div>
          </Link>
        </div>

        {/* Scroll indicator with bounce */}
        <div className="scroll-indicator" aria-hidden="true">
          <div className="scroll-indicator-dot" />
        </div>
      </div>

      {/* ── Midground: Profile 3D Card with True Spatial Depth ── */}
      <div
        ref={imageCardRef}
        className="Image hero-image-wrapper"
        style={{
          position: 'relative',
          zIndex: 3,
          perspective: 1100,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="hero-image-ring ring-1" aria-hidden="true" />
        <div className="hero-image-ring ring-2" aria-hidden="true" />
        <div className="hero-image-ring ring-3" aria-hidden="true" />

        <img
          src="Image.jpeg"
          alt="Sree Vatchan – Full Stack Developer"
          className="hero-profile-img"
        />

        {/* Floating 3D info badges popping out in Z space */}
        <div
          className="hero-floating-card card-top-right"
          aria-hidden="true"
          style={{ transform: 'translateZ(40px)' }}
        >
          <span className="floating-card-icon">⚡</span>
          <span>3+ Years</span>
        </div>

        <div
          className="hero-floating-card card-bottom-left"
          aria-hidden="true"
          style={{ transform: 'translateZ(50px)' }}
        >
          <span className="floating-card-icon">🏆</span>
          <span>Award Winner</span>
        </div>

        <div
          className="hero-floating-card card-right"
          aria-hidden="true"
          style={{ transform: 'translateZ(35px)' }}
        >
          <span className="floating-card-icon">☁️</span>
          <span>AWS Certified</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
