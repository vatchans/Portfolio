import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lottie from 'lottie-react';
import coding from '../93699-coding.json';

gsap.registerPlugin(ScrollTrigger);

function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
    }, options);
    const curr = ref.current;
    if (curr) obs.observe(curr);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [ref, inView];
}

function CountUp({ target, suffix = '', duration = 1500 }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.5 });
  useEffect(() => {
    if (!inView) return;
    const end = parseInt(target, 10);
    const startTime = performance.now();
    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(end * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, target, duration, suffix]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const cards = [
  {
    icon: '💻',
    title: 'Full-Stack & Microservices',
    body: 'Architecting decoupled, independently deployable microservices and REST APIs with <strong>Node.js, Express.js, Python, FastAPI</strong>, and responsive <strong>React.js</strong> web applications.',
  },
  {
    icon: '☁️',
    title: 'AWS Cloud & DevOps',
    body: 'End-to-end AWS architecture (<strong>EC2, ECS, Lambda, S3, CloudFront, Route53, Cognito, DynamoDB</strong>) monitored via CloudWatch, with <strong>Docker</strong> and <strong>GitHub Actions</strong> CI/CD.',
  },
  {
    icon: '📱',
    title: 'Android & Mobile Engineering',
    body: 'Shipped production mobile applications with <strong>Kotlin & Jetpack Compose</strong>, including the AI-powered Aiwell Ayurveda wellness app and on-device Android kiosks.',
  },
  {
    icon: '🔬',
    title: 'Health-Tech & IoT Hardware',
    body: 'Integrating medical & fitness hardware (<strong>Body Composition Analysis - BCA, PPG, and ECG sensors</strong>) with facial analysis algorithms and automated alerts.',
  },
];

const stats = [
  { number: '3', suffix: '+', label: 'Years Experience' },
  { number: '75', suffix: '%', label: 'AWS Cost Cut' },
  { number: '99.9', suffix: '%', label: 'Production Uptime' },
  { number: '2', suffix: '', label: 'Production Mobile Apps' },
];

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // 1. Header reveal scrubbed to scroll
      gsap.fromTo(
        '.about-header-anim',
        { y: 40, opacity: 0.35 },
        {
          y: 0,
          opacity: 1,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'top 50%',
            scrub: true,
          },
        }
      );

      // 2. Capability cards progressive reveal scrubbed to scroll
      gsap.fromTo(
        '.abt-left .about-card',
        { y: 45, opacity: 0.35, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.06,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: '.abt-left',
            start: 'top 85%',
            end: 'top 45%',
            scrub: true,
          },
        }
      );

      // 3. Continuous Lottie float parallax scrubbed to scroll
      gsap.to('.coding-wrapper', {
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
        y: -40,
        ease: 'none',
      });

      // 4. Stats pop in — fully scrubbed to scroll position
      gsap.fromTo(
        '.stat-item',
        { scale: 0.9, opacity: 0.35, y: 25 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          stagger: 0.06,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: '.about-stats',
            start: 'top 90%',
            end: 'top 70%',
            scrub: true,
          },
        }
      );

      // 5. Education card slide in — fully scrubbed to scroll position
      gsap.fromTo(
        '.about-education',
        { x: 35, opacity: 0.35, scale: 0.98 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: '.about-education',
            start: 'top 92%',
            end: 'top 70%',
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
    <section id="about" className="abt" ref={sectionRef} aria-label="About section">
      {/* Background ambient lighting */}
      <div
        className="section-ambient-glow"
        style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(73, 90, 255, 0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Uniform section header */}
      <div className="uniform-section-header about-header-anim">
        <h1 className="uniform-section-title">About Me</h1>
        <div className="uniform-title-bar" />
        <p className="section-subtitle">
          Engineering scalable web apps, cloud infrastructure, and intuitive mobile solutions
        </p>
      </div>

      <div className="abt-content">
        {/* Left Column */}
        <div className="abt-left">
          <div className="about-intro">
            <h3 className="greeting">
              👋 Hello, I'm{' '}
              <span className="highlight">Sree Vatchan A</span>
            </h3>
            <p className="tagline">Full-Stack Engineer · Digital Health · AWS Cloud · Android · Microservices</p>
          </div>

          {/* Cards with staggered reveals */}
          {cards.map((card, i) => (
            <div
              key={i}
              className="about-card"
              style={{ '--card-delay': `${i * 0.08}s` }}
            >
              <div className="card-icon">{card.icon}</div>
              <div className="card-content">
                <h4>{card.title}</h4>
                <p dangerouslySetInnerHTML={{ __html: card.body }} />
              </div>
            </div>
          ))}

          <div className="about-footer">
            <p>
              <strong>Let's build something remarkable together!</strong> I'm actively seeking
              opportunities where I can contribute to innovative products, grow in a world-class team,
              and make a real engineering impact.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="abt-right">
          <div className="coding-wrapper">
            <Lottie className="coding" animationData={coding} loop />
          </div>

          {/* Stats */}
          <div className="about-stats">
            {stats.map((s, i) => (
              <div className="stat-item" key={i}>
                <div className="stat-number">
                  <CountUp target={s.number} suffix={s.suffix} />
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Education Card */}
          <div className="about-education">
            <div className="edu-icon">🎓</div>
            <div className="edu-content">
              <h5>Bachelor of Computer Applications (BCA)</h5>
              <p>SRM Institute of Science and Technology, Chennai</p>
              <span>2019 – 2022</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
