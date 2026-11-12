import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TiltCard from './TiltCard';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import VerifiedIcon from '@mui/icons-material/Verified';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CloudIcon from '@mui/icons-material/Cloud';
import CodeIcon from '@mui/icons-material/Code';

gsap.registerPlugin(ScrollTrigger);

const featuredAward = {
  title: 'First Prize – Project Day 2022',
  institution: 'SRM Institute of Science and Technology, Chennai',
  project: 'Smart Water Tank Monitoring System',
  date: 'Project Day 2022',
  category: 'IoT Hardware & Web Systems Innovation',
  image: 'award.jpeg',
  description:
    'Awarded 1st Prize for Smart Water Tank Monitoring System at SRM Institute Project Day 2022 among all final-year BCA submissions. Engineered an end-to-end IoT water level monitoring system using Node.js, ultrasonic sensors, and a full-stack dashboard featuring automated SMS and email alerts.',
  highlights: [
    '1st Prize among all final-year BCA submissions',
    'IoT Ultrasonic Sensor Integration & Calibration',
    'Real-time automated low-level SMS and email alerts',
    'Full-Stack Monitoring Portal (Node.js & Web App)',
  ],
  tags: ['IoT Hardware', 'Node.js', 'Full-Stack Web App', 'Sensors', '1st Place Award'],
};

const certifications = [
  {
    id: 'fullstack-guvi-iitm',
    title: 'Full Stack Development',
    issuer: 'Guvi & IIT Madras',
    category: 'Full Stack Engineering',
    icon: <CodeIcon />,
    color: '#38bdf8',
    status: 'Verified Credential',
    description:
      'Comprehensive specialization covering end-to-end software engineering: React.js frontends, scalable Node.js & Express.js RESTful APIs, MongoDB databases, state management, and modern web application development.',
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'JavaScript (ES6+)'],
  },
  {
    id: 'aws-cloud-essentials',
    title: 'AWS Cloud Technical Essentials',
    issuer: 'Coursera (Amazon Web Services)',
    category: 'Cloud Infrastructure',
    icon: <CloudIcon />,
    color: '#fb923c',
    status: 'Verified Credential',
    description:
      'Verified technical competency in AWS compute services (EC2, ECS, Lambda), storage solutions (S3, EBS), database management (DynamoDB, RDS), cloud networking, and security governance (IAM).',
    skills: ['AWS EC2 & ECS', 'AWS Lambda', 'Amazon S3', 'DynamoDB', 'IAM Security', 'Cloud Networking'],
  },
];

const AchievementsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // 1. Header reveal scrubbed to scroll
      gsap.fromTo(
        '.ach-header-anim',
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

      // 2. Featured award entrance scrubbed to scroll
      gsap.fromTo(
        '.featured-award-card',
        { y: 40, opacity: 0.45, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.featured-award-container',
            start: 'top 88%',
            end: 'top 60%',
            scrub: true,
          },
        }
      );

      // 3. Award photo subtle zoom on scrub
      gsap.to('.award-cert-photo', {
        scrollTrigger: {
          trigger: '.featured-award-container',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
        scale: 1.05,
        ease: 'none',
      });

      // 4. Certifications grid stagger scrubbed to scroll
      gsap.fromTo(
        '.cert-uniform-card',
        { y: 30, opacity: 0.4 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: '.certifications-uniform-grid',
            start: 'top 90%',
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
    <section id="achievements" className="abt achievements-section-wrapper" ref={sectionRef} aria-label="Achievements section">
      {/* Uniform Section Header */}
      <div className="uniform-section-header ach-header-anim">
        <h1 className="uniform-section-title">Achievements &amp; Certifications</h1>
        <div className="uniform-title-bar" />
        <p className="section-subtitle">
          Demonstrated engineering excellence, competitive honors, and verified technical proficiencies
        </p>
      </div>

      {/* Featured Award 3D Card */}
      <div className="featured-award-container">
        <TiltCard
          className="featured-award-card achieve-featured-card"
          maxTilt={6}
          glare={true}
          scale={1.01}
          perspective={1200}
        >
          <div className="award-card-grid">
            {/* Award Image Column with 3D Cyber Frame & Parallax zoom */}
            <div className="award-image-col">
              <div className="award-image-frame" style={{ overflow: 'hidden' }}>
                <img
                  src={featuredAward.image}
                  alt={`Certificate for ${featuredAward.title}`}
                  className="award-cert-photo"
                />
                <div className="award-frame-corner top-left" aria-hidden="true" />
                <div className="award-frame-corner top-right" aria-hidden="true" />
                <div className="award-frame-corner bottom-left" aria-hidden="true" />
                <div className="award-frame-corner bottom-right" aria-hidden="true" />
                <div className="award-image-overlay">
                  <span className="verified-stamp">
                    <VerifiedIcon fontSize="small" /> OFFICIAL UNIVERSITY AWARD
                  </span>
                </div>
              </div>
            </div>

            {/* Award Content Column */}
            <div className="award-info-col">
              <div className="award-header-pill">
                <EmojiEventsIcon className="award-trophy-icon" />
                <span>FIRST PLACE AWARD WINNER</span>
              </div>

              <h2 className="award-main-title">{featuredAward.title}</h2>
              <h3 className="award-sub-title">
                <SchoolIcon fontSize="inherit" style={{ verticalAlign: 'middle', marginRight: 6 }} />
                {featuredAward.institution}
              </h3>

              <p className="award-description">{featuredAward.description}</p>

              {/* Key Pillars of Project */}
              <div className="award-pillars-list">
                {featuredAward.highlights.map((item, i) => (
                  <div key={i} className="award-pillar-item">
                    <span className="award-bullet-check">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="award-tags-row">
                {featuredAward.tags.map((t) => (
                  <span key={t} className="award-chip-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </TiltCard>
      </div>

      {/* Section Sub-heading for Certifications */}
      <div className="certifications-subhead">
        <div className="cert-subhead-badge">
          <WorkspacePremiumIcon fontSize="inherit" style={{ marginRight: 6 }} />
          TECHNICAL CREDENTIALS MATRIX
        </div>
        <h2 className="cert-subhead-title">Verified Certifications &amp; Core Competencies</h2>
      </div>

      {/* Uniform 3D Certifications Grid with Staggered Entrance */}
      <div className="certifications-uniform-grid certs-grid">
        {certifications.map((cert) => (
          <div key={cert.id} className="cert-tilt-wrap">
            <TiltCard
              className="cert-uniform-card"
              maxTilt={8}
              glare={true}
              scale={1.02}
              perspective={900}
              style={{ '--cert-accent': cert.color }}
            >
              <div className="cert-card-inner">
                {/* Top Badge & Icon */}
                <div className="cert-top-bar">
                  <div className="cert-icon-box" style={{ color: cert.color }}>
                    {cert.icon}
                  </div>
                  <div className="cert-status-badge">
                    <VerifiedIcon fontSize="inherit" />
                    <span>{cert.status}</span>
                  </div>
                </div>

                {/* Title & Issuer */}
                <h3 className="cert-card-title">{cert.title}</h3>
                <p className="cert-card-issuer" style={{ color: cert.color }}>
                  {cert.issuer}
                </p>

                {/* Description */}
                <p className="cert-card-desc">{cert.description}</p>

                {/* Skill Pills */}
                <div className="cert-skills-cloud">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="cert-skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
