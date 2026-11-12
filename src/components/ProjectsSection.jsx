import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TiltCard from './TiltCard';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { initParallaxLayers } from './useScrollAnimations';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 'ayurai',
    title: 'Ayur AI',
    subtitle: 'AI-Powered Healthcare Platform',
    description:
      'A comprehensive digital-health platform integrating AI for personalised Ayurvedic treatments, doctor consultations, medicine ordering, and health analytics. Built and maintained production-grade backend infrastructure serving real users.',
    tech: ['Node.js', 'React.js', 'AWS', 'DynamoDB', 'Kotlin', 'Docker', 'Express.js'],
    video: 'Milky Way Taste the goodness of dairy Power - Google Chrome 2023-05-16 18-12-00.mp4',
    github: 'https://github.com/vatchans',
    live: 'https://ayurai.in',
    color: '#38bdf8',
    icon: '🏥',
    type: 'Professional',
    highlights: ['Production App', 'AWS Cloud', 'Mobile + Web'],
  },
  {
    id: 'textrovert',
    title: 'Textrovert',
    subtitle: 'Real-time Chat Application',
    description:
      'A feature-rich chat app with real-time messaging, voice messages, stickers, GIFs, multimedia sharing, YouTube previews inline, online/offline status, and message search — all powered by WebSockets.',
    tech: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'Express.js'],
    video: 'New Tab - Google Chrome 2023-05-16 18-56-42 .mp4',
    github: 'https://github.com/vatchans/Textrovert--Chat-App-',
    live: 'https://exquisite-selkie-1bc399.netlify.app/',
    color: '#818cf8',
    icon: '💬',
    type: 'MERN Stack',
    highlights: ['Real-time', 'Socket.io', 'Media Sharing'],
  },
  {
    id: 'milkyway',
    title: 'Milky Way CRM',
    subtitle: 'Customer Relationship Management System',
    description:
      'A full-featured CRM for a dairy business with three role-based user types: Admin dashboard for inventory/orders, Customer portal with payments, and Customer Executive workflow for complaint resolution with email notifications.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    video: 'Milky Way Taste the goodness of dairy Power - Google Chrome 2023-05-16 18-12-00.mp4',
    github: 'https://github.com/vatchans/Capstone-Project',
    live: 'https://643ea8b337e85d037ff07afe--venerable-marigold-437243.netlify.app/',
    color: '#34d399',
    icon: '🥛',
    type: 'Full Stack',
    highlights: ['Role-Based Auth', 'Dashboard', 'Payment Gateway'],
  },
  {
    id: 'pizza',
    title: 'Pizza Crave',
    subtitle: 'Online Pizza Ordering & Inventory System',
    description:
      'A complete pizza delivery web platform featuring customizable orders, real-time order tracking, payment processing, inventory decrementing, and admin stock management.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    img: 'Screenshot (50).png',
    github: 'https://github.com/vatchans/Pizza-app-Font-end',
    live: 'https://sprightly-chebakia-3974c5.netlify.app/',
    color: '#f59e0b',
    icon: '🍕',
    type: 'MERN Stack',
    highlights: ['Order Tracking', 'Inventory Sync', 'Custom Orders'],
  },
  {
    id: 'hallbooking',
    title: 'Hall Booking API',
    subtitle: 'High-Concurrency Reservation Backend',
    description:
      'A robust RESTful API for conference hall reservations handling simultaneous booking requests, slot collision avoidance, room availability calendars, and customer billing calculations.',
    tech: ['Node.js', 'Express.js', 'REST APIs', 'Postman'],
    img: 'Screenshot (52).png',
    github: 'https://github.com/vatchans/Hall-Booking',
    live: null,
    color: '#ec4899',
    icon: '🏛️',
    type: 'Backend',
    highlights: ['Conflict Prevention', 'RESTful Design', 'Optimized Queries'],
  },
  {
    id: 'watertank',
    title: 'Smart Water Tank System',
    subtitle: 'IoT Level Monitoring & Alert System',
    description:
      'An IoT-based water tank monitoring system with real-time level tracking, predictive supply-day calculations, email alerts when levels drop, remote motor control, and monthly usage & billing dashboards.',
    tech: ['React.js', 'Node.js', 'IoT Sensors', 'AWS', 'Email Alerts'],
    img: 'Screenshot (53).png',
    github: null,
    live: null,
    color: '#a78bfa',
    icon: '💧',
    type: 'IoT + Web',
    highlights: ['IoT Integration', 'Real-time Alerts', 'Award Winner 🏆'],
  },
];

function ProjectCard({ project }) {
  return (
    <div className="project-grid-card">
      <TiltCard
        className="prj-card-tilt-wrap"
        maxTilt={7}
        glare={true}
        scale={1.015}
        perspective={1000}
      >
        <div className="prj-card enhanced-prj-card" style={{ '--prj-color': project.color }}>
          {/* Media preview with Tom de Koning window parallax */}
          <div className="prj-img">
            {project.video ? (
              <video
                className="prj-media-window"
                muted
                playsInline
                autoPlay
                loop
                preload="metadata"
                aria-label={`${project.title} demo video`}
              >
                <source src={project.video} />
              </video>
            ) : project.img ? (
              <img
                className="prj-media-window"
                src={project.img}
                alt={`${project.title} screenshot`}
                style={{ objectFit: 'contain' }}
              />
            ) : null}

            <div className="prj-img-overlay" aria-hidden="true" />

            <div
              className="prj-type-badge"
              style={{
                background: `${project.color}22`,
                borderColor: `${project.color}66`,
              }}
            >
              {project.icon} {project.type}
            </div>
          </div>

          {/* Body Content */}
          <div className="prj-body">
            <div className="prj-title">
              <div>
                <p>{project.title}</p>
                <span>{project.subtitle}</span>
              </div>
            </div>

            <div className="prj-highlights">
              {project.highlights.map((h) => (
                <span key={h} className="prj-highlight-pill" style={{ '--hl-color': project.color }}>
                  {h}
                </span>
              ))}
            </div>

            <div className="prj-discription">{project.description}</div>

            <div className="prj-tech-stack">
              {project.tech.map((t) => (
                <span key={t} className="prj-tech-pill">
                  {t}
                </span>
              ))}
            </div>

            <div className="prj-actions-row">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="prj-action-btn prj-action-secondary"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <GitHubIcon fontSize="small" />
                  <span>Source</span>
                </a>
              )}
              {project.live && project.live !== '#' && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="prj-action-btn prj-action-primary"
                  aria-label={`Open live demo of ${project.title}`}
                >
                  <span>Live Demo</span>
                  <OpenInNewIcon fontSize="small" />
                </a>
              )}
            </div>
          </div>
        </div>
      </TiltCard>
    </div>
  );
}

const ProjectsSection = () => {
  const containerRef = useRef(null);
  const [filter, setFilter] = useState('All');
  const types = ['All', 'Professional', 'Full Stack', 'MERN Stack', 'IoT + Web'];
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.type === filter);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cleanupParallax = () => { };

    const ctx = gsap.context(() => {
      // 1. Header reveal scrubbed to scroll
      gsap.fromTo(
        '.projects-header-anim',
        { y: 40, opacity: 0.35 },
        {
          y: 0,
          opacity: 1,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            end: 'top 55%',
            scrub: 1.0,
          },
        }
      );

      // 2. Tom de Koning window parallax on each project media preview
      const mediaElements = container.querySelectorAll('.prj-media-window');
      mediaElements.forEach((media) => {
        const card = media.closest('.project-grid-card');
        if (!card) return;
        gsap.fromTo(
          media,
          { yPercent: -10 },
          {
            yPercent: 10,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      });

      // 3. Project cards smooth entrance — NEVER blank, always visible
      const cards = container.querySelectorAll('.project-grid-card');
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 40, opacity: 0.45, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 92%',
              end: 'top 65%',
              scrub: 1.0,
            },
          }
        );
      });

      // 4. Parallax layers
      cleanupParallax = initParallaxLayers(container);
    }, containerRef);

    return () => {
      cleanupParallax();
      ctx.revert();
    };
  }, [filtered]);

  return (
    <section id="projects" className="abt projects-section-wrapper" ref={containerRef} aria-label="Projects section">
      {/* Background ambient lighting */}
      <div
        className="section-ambient-glow"
        data-speed="0.4"
        style={{
          position: 'absolute',
          top: '25%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Header */}
      <div className="uniform-section-header projects-header-anim" data-speed="1.15">
        <h1 className="uniform-section-title">Featured Projects</h1>
        <div className="uniform-title-bar" />
        <p className="section-subtitle">
          Interactive showcase of production platforms, real-time architectures, and award-winning systems
        </p>
      </div>

      {/* Filter tabs */}
      <div className="projects-filter proj-filter-tabs" role="group" aria-label="Filter projects">
        {types.map((type) => (
          <button
            key={type}
            className={`filter-btn ${filter === type ? 'filter-btn--active' : ''}`}
            onClick={() => setFilter(type)}
            aria-pressed={filter === type}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Responsive Grid */}
      <div className="projects-grid">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
