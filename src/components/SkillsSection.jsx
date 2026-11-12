import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const allSkills = [
  // Core Languages & Frontend
  { name: 'React.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', level: 'Expert', color: '#38bdf8' },
  { name: 'JavaScript (ES6+)', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', level: 'Expert', color: '#f7df1e' },
  { name: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', level: 'Advanced', color: '#3178c6' },
  { name: 'HTML5', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', level: 'Expert', color: '#e34f26' },
  { name: 'CSS3', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', level: 'Expert', color: '#1572b6' },
  { name: 'Tailwind CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', level: 'Advanced', color: '#38bdf8' },
  { name: 'Bootstrap', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg', level: 'Advanced', color: '#7952b3' },
  { name: 'Webpack', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg', level: 'Intermediate', color: '#8dd6f9' },

  // Backend & APIs
  { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', level: 'Expert', color: '#5fa04e' },
  { name: 'Express.js', img: 'https://cdn.simpleicons.org/express/ffffff', level: 'Expert', color: '#e2e8f0' },
  { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', level: 'Advanced', color: '#3776ab' },
  { name: 'FastAPI', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg', level: 'Advanced', color: '#009688' },
  { name: 'RESTful APIs', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg', level: 'Expert', color: '#ff6c37' },
  { name: 'WebSocket / Socket.io', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg', level: 'Advanced', color: '#ffffff' },

  // Mobile
  { name: 'Kotlin', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg', level: 'Expert', color: '#7f52ff' },
  { name: 'Android SDK', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg', level: 'Expert', color: '#3ddc84' },
  { name: 'Android Studio', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg', level: 'Expert', color: '#3ddc84' },
  { name: 'Flutter', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg', level: 'Advanced', color: '#02569b' },
  { name: 'Dart', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg', level: 'Advanced', color: '#0175c2' },

  // Cloud & DevOps
  { name: 'AWS Cloud', img: 'https://cdn.simpleicons.org/amazonaws/FF9900', level: 'Expert', color: '#ff9900' },
  { name: 'Docker', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', level: 'Advanced', color: '#2496ed' },
  { name: 'GitHub Actions', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg', level: 'Advanced', color: '#2088ff' },
  { name: 'Git & GitHub', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', level: 'Expert', color: '#f05032' },

  // Databases & Storage
  { name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', level: 'Expert', color: '#47a248' },
  { name: 'PostgreSQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', level: 'Advanced', color: '#4169e1' },
  { name: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', level: 'Advanced', color: '#4479a1' },
  { name: 'Redis', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg', level: 'Advanced', color: '#dc382d' },
  { name: 'Firebase', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg', level: 'Advanced', color: '#ffca28' },
];

const levelColors = {
  Expert: '#34d399',
  Advanced: '#38bdf8',
  Intermediate: '#818cf8',
};

function SkillCard({ skill, index }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div
      className="skill-card modern-skill-card"
      style={{ '--cat-color': skill.color, '--delay': `${index * 0.02}s` }}
    >
      <div className="skill-card-inner">
        <div className="skill-icon-container">
          {!imgFailed && skill.img ? (
            <img
              src={skill.img}
              alt={`${skill.name} logo`}
              className="skills-img vector-tech-icon"
              loading="lazy"
              onError={() => setImgFailed(true)}
            />
          ) : (
            <div className="skill-fallback-icon" style={{ borderColor: skill.color, color: skill.color }}>
              {skill.name.substring(0, 2).toUpperCase()}
            </div>
          )}
        </div>
        <span className="skill-name">{skill.name}</span>
        <span
          className="skill-level-badge"
          style={{
            background: `${levelColors[skill.level]}18`,
            color: levelColors[skill.level],
            border: `1px solid ${levelColors[skill.level]}33`,
          }}
        >
          {skill.level}
        </span>
      </div>
      <div
        className="skill-card-glow"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${skill.color}22 0%, transparent 70%)`,
        }}
        aria-hidden="true"
      />
    </div>
  );
}

const SkillsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // 1. Header reveal scrubbed to scroll
      gsap.fromTo(
        '.skills-header-anim',
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

      // 2. Skill Cards entrance scrubbed to scroll
      gsap.fromTo(
        '.skill-card',
        { y: 30, scale: 0.96, opacity: 0.45 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          stagger: 0.02,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.skills-grid-all',
            start: 'top 88%',
            end: 'top 60%',
            scrub: true,
          },
        }
      );

      // 3. Horizontal strip drift on scroll scrub
      gsap.to('.skills-all-strip', {
        scrollTrigger: {
          trigger: '.skills-all-strip-wrapper',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
        x: -70,
        ease: 'none',
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="skills" className="abt" ref={sectionRef} aria-label="Skills section">
      {/* Header */}
      <div className="uniform-section-header skills-header-anim">
        <h1 className="uniform-section-title">Technical Skills</h1>
        <div className="uniform-title-bar" />
        <p className="section-subtitle">
          Complete toolset spanning languages, cloud platforms, microservices, frameworks, and databases
        </p>
      </div>

      {/* Unified All-Skills Grid (No tabs required - all visible at once) */}
      <div className="skills-grid skills-grid-all" role="region" aria-label="Technical skills grid">
        {allSkills.map((skill, i) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={i}
          />
        ))}
      </div>

      {/* Overview marquee strip */}
      <div className="skills-all-strip-wrapper" style={{ overflow: 'hidden', width: '100%', marginTop: '3rem' }}>
        <div className="skills-all-strip">
          {allSkills.map((s) => (
            <span key={s.name} className="strip-pill" style={{ '--pill-color': s.color }}>
              {s.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;