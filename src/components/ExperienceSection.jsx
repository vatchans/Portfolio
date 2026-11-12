import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TiltCard from './TiltCard';
import WorkIcon from '@mui/icons-material/Work';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

gsap.registerPlugin(ScrollTrigger);

const experienceData = {
  company: 'Ayur AI',
  role: 'Full-Stack Engineer',
  period: 'Jun 2023 – Oct 2026',
  duration: 'Chennai, India',
  location: 'Chennai, Tamil Nadu',
  type: 'Full-Time',
  domain: 'Digital Health · AI Healthcare · Microservices & AWS Cloud',
  summary:
    'Full-Stack Engineer with 3+ years experience building AI-powered digital health products. Architected monolith-to-microservices migrations cutting AWS costs by 75% with 99.9% uptime. Shipped the Aiwell Ayurveda app and an on-device AI Kiosk Android app with integrated health hardware sensors (BCA, PPG, ECG) and facial analysis.',
  stats: [
    { label: 'AWS Cost Reduction', value: '75%', note: 'Microservices migration' },
    { label: 'Uptime & SLA', value: '99.9%', note: 'AWS EC2, ECS & Lambda' },
    { label: 'Production Apps', value: 'Aiwell + Kiosk', note: 'Kotlin & Jetpack Compose' },
    { label: 'Health Sensors', value: 'BCA · PPG · ECG', note: 'Hardware integration & AI' },
  ],
  pillars: [
    {
      id: 'backend',
      label: 'Cloud & Microservices',
      icon: <CloudDoneIcon fontSize="small" />,
      color: '#38bdf8',
      bullets: [
        'Architected and executed end-to-end monolith-to-microservices migration (Node.js, Express.js, Docker, AWS), reducing AWS infrastructure costs by 75% while sustaining 99.9% uptime.',
        'Designed and deployed scalable RESTful APIs and microservices integrated across AWS services: EC2, ECS, Lambda, S3, CloudFront, Route53, Cognito, DynamoDB, SES, SNS, and Amplify.',
        'Implemented proactive system monitoring and distributed alerting using AWS CloudWatch and structured log aggregation.',
      ],
    },
    {
      id: 'frontend',
      label: 'Mobile & Web Apps',
      icon: <PhoneAndroidIcon fontSize="small" />,
      color: '#818cf8',
      bullets: [
        'Shipped Aiwell Ayurveda mobile app (Kotlin, Jetpack Compose) featuring dosha assessment, teleconsultation booking, and personalized wellness plans.',
        'Built on-device AI Kiosk Android application integrating health hardware (BCA, PPG, and ECG sensors) and real-time facial analysis algorithms for automated vitals screening.',
        'Developed responsive, intuitive web frontends with React.js, Tailwind CSS, modern state management, and seamless REST/WebSocket integrations.',
      ],
    },
    {
      id: 'devops',
      label: 'DevOps & Architecture',
      icon: <StorageIcon fontSize="small" />,
      color: '#34d399',
      bullets: [
        'Containerized multi-tier microservices with Docker, establishing reproducible local, staging, and production environments.',
        'Orchestrated automated CI/CD deployment pipelines using GitHub Actions for frictionless builds, automated testing, and zero-downtime releases.',
        'Implemented robust authentication and security workflows using JWT, OAuth 2.0, Firebase Auth, and AWS Cognito.',
      ],
    },
  ],
  techStack: [
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'React.js', category: 'Frontend' },
    { name: 'Kotlin', category: 'Mobile' },
    { name: 'Jetpack Compose', category: 'Mobile' },
    { name: 'AWS (EC2/ECS/Lambda)', category: 'Cloud' },
    { name: 'S3 & CloudFront', category: 'Cloud' },
    { name: 'Cognito & Route53', category: 'Cloud' },
    { name: 'DynamoDB', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'GitHub Actions', category: 'DevOps' },
    { name: 'BCA / PPG / ECG', category: 'IoT Sensors' },
  ],
};

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const [activePillar, setActivePillar] = useState('backend');

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // 1. Header reveal scrubbed to scroll
      gsap.fromTo(
        '.exp-header-anim',
        { y: 35, opacity: 0.4 },
        {
          y: 0,
          opacity: 1,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'top 55%',
            scrub: true,
          },
        }
      );

      // 2. Main 3D Hero Card entrance scrubbed to scroll
      gsap.fromTo(
        '.exp-hero-card',
        { y: 40, opacity: 0.45, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.exp-hero-card',
            start: 'top 88%',
            end: 'top 60%',
            scrub: true,
          },
        }
      );

      // 3. Metric boxes pop-in scrubbed to scroll
      gsap.fromTo(
        '.exp-metric-box',
        { scale: 0.9, opacity: 0.4, y: 15 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          stagger: 0.06,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: '.exp-metrics-grid',
            start: 'top 90%',
            end: 'top 70%',
            scrub: true,
          },
        }
      );

      // 4. Interactive Timeline Laser Beam scrubbed to scroll
      gsap.fromTo(
        '.timeline-laser-progress',
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.timeline-milestones-row',
            start: 'top 85%',
            end: 'bottom 75%',
            scrub: true,
          },
        }
      );

      // 5. Milestones entrance scrubbed to scroll
      gsap.fromTo(
        '.milestone-card',
        { y: 30, opacity: 0.4 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: '.timeline-milestones-row',
            start: 'top 88%',
            end: 'top 65%',
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="experience" className="abt experience-section-wrapper" ref={sectionRef} aria-label="Experience section">
      {/* Background ambient lighting */}
      <div
        className="section-ambient-glow"
        style={{
          position: 'absolute',
          top: '25%',
          left: '-10%',
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

      {/* Uniform Section Header */}
      <div className="uniform-section-header exp-header-anim">
        <h1 className="uniform-section-title">Professional Experience</h1>
        <div className="uniform-title-bar" />
        <p className="section-subtitle">
          Engineering scalable cloud infrastructure, responsive web applications, and native mobile apps
        </p>
      </div>

      {/* Main Experience Layout */}
      <div className="experience-container">
        {/* Main 3D Interactive Card */}
        <TiltCard
          className="exp-hero-card"
          maxTilt={6}
          glare={true}
          scale={1.01}
          perspective={1200}
        >
          {/* Top Bar with Live Badge & Role */}
          <div className="exp-card-header">
            <div className="exp-badge-group">
              <div className="exp-company-logo">
                <WorkIcon />
              </div>
              <div>
                <div className="exp-company-title-row">
                  <h2 className="exp-company-name">{experienceData.company}</h2>
                  <span className="exp-live-indicator">
                    <span className="live-dot" /> Current Role
                  </span>
                </div>
                <p className="exp-role-title">
                  <CodeIcon fontSize="inherit" style={{ verticalAlign: 'middle', marginRight: 4 }} />
                  {experienceData.role}
                </p>
              </div>
            </div>

            <div className="exp-meta-badges">
              <span className="exp-chip">
                <CalendarMonthIcon fontSize="inherit" />
                {experienceData.period}
              </span>
              <span className="exp-chip">
                <LocationOnIcon fontSize="inherit" />
                {experienceData.location}
              </span>
              <span className="exp-type-pill">{experienceData.type}</span>
            </div>
          </div>

          {/* Role Summary */}
          <p className="exp-summary-text">{experienceData.summary}</p>

          {/* Impact Metric Grid with 3D scale pop */}
          <div className="exp-metrics-grid">
            {experienceData.stats.map((stat, i) => (
              <div key={i} className="exp-metric-box">
                <div className="exp-metric-val">{stat.value}</div>
                <div className="exp-metric-label">{stat.label}</div>
                <div className="exp-metric-note">{stat.note}</div>
              </div>
            ))}
          </div>

          {/* Technical Pillars Interactive Tabs */}
          <div className="exp-pillars-block">
            <div className="exp-pillars-nav" role="tablist">
              {experienceData.pillars.map((pillar) => (
                <button
                  key={pillar.id}
                  role="tab"
                  aria-selected={activePillar === pillar.id}
                  className={`exp-pillar-btn ${activePillar === pillar.id ? 'exp-pillar-btn--active' : ''}`}
                  style={{ '--pillar-color': pillar.color }}
                  onClick={() => setActivePillar(pillar.id)}
                >
                  <span className="pillar-btn-icon">{pillar.icon}</span>
                  <span>{pillar.label}</span>
                </button>
              ))}
            </div>

            {/* Active Pillar Content */}
            <div className="exp-pillar-content">
              {experienceData.pillars
                .filter((p) => p.id === activePillar)
                .map((p) => (
                  <ul key={p.id} className="exp-bullet-list">
                    {p.bullets.map((bullet, idx) => (
                      <li key={idx} className="exp-bullet-item">
                        <span className="exp-bullet-icon" style={{ color: p.color }}>
                          <VerifiedIcon fontSize="inherit" />
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ))}
            </div>
          </div>

          {/* Tech Stack Cloud */}
          <div className="exp-tech-footer">
            <span className="exp-tech-label">CORE TECHNOLOGIES:</span>
            <div className="exp-pills-row">
              {experienceData.techStack.map((tech) => (
                <span key={tech.name} className="exp-tech-tag">
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </TiltCard>

        {/* ── Scroll-Linked Interactive Timeline Milestones ── */}
        <div className="timeline-milestones-row">
          <div className="milestone-card active-milestone">
            <div className="milestone-badge">Jun 2023 – Oct 2026</div>
            <div className="milestone-body">
              <h4>Ayur AI · Full-Stack Engineer</h4>
              <p>Architected microservices, cut AWS costs by 75%, shipped Aiwell &amp; on-device AI Kiosk.</p>
            </div>
          </div>

          <div className="milestone-connector" aria-hidden="true" style={{ position: 'relative' }}>
            <span
              className="connector-line timeline-laser-progress"
              style={{
                transformOrigin: 'left center',
                display: 'block',
                height: '3px',
                background: 'linear-gradient(to right, #38bdf8, #818cf8)',
                boxShadow: '0 0 12px rgba(56, 189, 248, 0.7)',
              }}
            />
            <span className="connector-node" />
          </div>

          <div className="milestone-card past-milestone">
            <div className="milestone-badge">2019 – 2022</div>
            <div className="milestone-body">
              <h4>SRM Institute of Science &amp; Technology, Chennai</h4>
              <p>Bachelor of Computer Applications (BCA) · Project Day 2022 1st Prize Winner.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
