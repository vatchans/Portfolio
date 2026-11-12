import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import BoltIcon from '@mui/icons-material/Bolt';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

gsap.registerPlugin(ScrollTrigger);

const inquiryTypes = [
  { id: 'fulltime', label: '💼 Full-Time Role', subject: 'Opportunity Discussion: Full Stack Developer Role' },
  { id: 'freelance', label: '🚀 Project / Freelance', subject: 'Project Inquiry: Web / Mobile Application' },
  { id: 'cloud', label: '☁️ Cloud & Architecture', subject: 'Consultation: AWS & Microservices Architecture' },
  { id: 'general', label: '👋 General Connect', subject: 'Hello Sree Vatchan!' },
];

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [selectedTopic, setSelectedTopic] = useState('fulltime');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [sending, setSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [alertInfo, setAlertInfo] = useState(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // 1. Header reveal scrubbed to scroll
      gsap.fromTo(
        '.contact-header-anim',
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

      // 2. Command center slides in from left scrubbed to scroll
      gsap.fromTo(
        '.contact-command-card',
        { x: -35, opacity: 0.45 },
        {
          x: 0,
          opacity: 1,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: '.contact-unified-grid',
            start: 'top 88%',
            end: 'top 60%',
            scrub: true,
          },
        }
      );

      // 3. Dispatch Terminal slides in from right scrubbed to scroll
      gsap.fromTo(
        '.contact-terminal-card',
        { x: 35, opacity: 0.45 },
        {
          x: 0,
          opacity: 1,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: '.contact-unified-grid',
            start: 'top 88%',
            end: 'top 60%',
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const handleCopyEmail = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    navigator.clipboard.writeText('vatchans@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setSending(true);
    const topicObj = inquiryTypes.find((t) => t.id === selectedTopic);
    const subjectLine = topicObj ? topicObj.subject : `Portfolio Message from ${name}`;
    const bodyContent = `Hi Sree Vatchan,\n\nName: ${name}\nEmail: ${email || 'Not provided'}\nTopic: ${topicObj?.label || 'General'}\n\nMessage:\n${message}\n\nSent from Portfolio Contact Form`;

    const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=vatchans@gmail.com&su=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyContent)}`;
    const mailtoUrl = `mailto:vatchans@gmail.com?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyContent)}`;

    // 1. Copy message text to clipboard automatically
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(bodyContent).catch(() => {});
    }

    // 2. Open Gmail compose in new tab
    try {
      window.open(gmailWebUrl, '_blank', 'noopener,noreferrer');
    } catch (err) {
      // Fallback handled below
    }

    // 3. Trigger mailto client
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 300);

    setSending(false);
    setSentSuccess(true);
    setAlertInfo({
      subject: subjectLine,
      body: bodyContent,
      gmailUrl: gmailWebUrl,
      mailtoUrl: mailtoUrl,
    });
  };

  return (
    <section id="contact" className="abt contact-section-wrapper" ref={sectionRef} aria-label="Contact section">
      {/* Background ambient lighting */}
      <div
        className="section-ambient-glow"
        style={{
          position: 'absolute',
          top: '30%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(10, 207, 254, 0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Uniform Section Header */}
      <div className="uniform-section-header contact-header-anim">
        <h1 className="uniform-section-title">Let's Build Together</h1>
        <div className="uniform-title-bar" />
        <p className="section-subtitle">
          Open to innovative full-stack engineering roles, high-impact freelance projects, and tech collaborations
        </p>
      </div>

      {/* Contact Layout Grid */}
      <div className="contact-unified-grid">
        {/* Left Column: Command Center (Solid & fully clickable - zero tilt interference) */}
        <div className="contact-command-card contact-command-center">
          <div className="contact-command-inner">
            {/* Availability Banner */}
            <div className="contact-status-ribbon">
              <div className="status-indicator-ping">
                <span className="ping-beacon" />
                <span className="ping-dot" />
              </div>
              <div className="status-text-wrap">
                <span className="status-title">STATUS: AVAILABLE IMMEDIATELY</span>
                <span className="status-sub">Ready for Full-Time Roles &amp; Engineering Teams</span>
              </div>
            </div>

            <h2 className="command-heading">Direct Channels</h2>
            <p className="command-lead">
              I prioritize prompt and thoughtful technical discussions. Connect with me directly through any channel below:
            </p>

            {/* Channel 1: Email with direct compose & copy */}
            <div className="direct-channel-box">
              <div className="channel-icon-wrap email-icon">
                <MailOutlineIcon />
              </div>
              <div className="channel-details">
                <span className="channel-tag">PRIMARY INBOX</span>
                <a href="mailto:vatchans@gmail.com" className="channel-link">
                  vatchans@gmail.com
                </a>
              </div>
              <div className="channel-action-group">
                <button
                  type="button"
                  className="channel-action-btn"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <CheckCircleIcon fontSize="small" style={{ color: '#34d399' }} /> : <ContentCopyIcon fontSize="small" />}
                </button>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=vatchans@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-action-btn"
                  title="Compose in Gmail Web"
                  aria-label="Compose in Gmail Web"
                >
                  <OpenInNewIcon fontSize="small" />
                </a>
              </div>
            </div>

            {/* Channel 2: Phone & WhatsApp */}
            <div className="direct-channel-box">
              <div className="channel-icon-wrap phone-icon">
                <PhoneInTalkIcon />
              </div>
              <div className="channel-details">
                <span className="channel-tag">PHONE &amp; WHATSAPP</span>
                <a href="tel:+919080555495" className="channel-link">
                  +91 9080 555 495
                </a>
              </div>
              <div className="channel-action-group">
                <a
                  href="https://wa.me/919080555495?text=Hi%20Sree%20Vatchan,%20I%20came%20across%20your%20portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-action-btn whatsapp-action-btn"
                  title="Chat on WhatsApp"
                  aria-label="Chat on WhatsApp"
                >
                  <span>WhatsApp ↗</span>
                </a>
              </div>
            </div>

            {/* Channel 3: Location & Timezone (Clickable Google Maps) */}
            <a
              href="https://maps.google.com/?q=Chennai,+TN,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="direct-channel-box direct-channel-link-box"
              title="Open Location on Google Maps"
            >
              <div className="channel-icon-wrap location-icon">
                <LocationCityIcon />
              </div>
              <div className="channel-details">
                <span className="channel-tag">LOCATION &amp; TIMEZONE</span>
                <span className="channel-text">Chennai, TN 600116, India · IST (UTC +5:30) ↗</span>
              </div>
            </a>

            {/* Quick response badge */}
            <div className="response-time-pill">
              <BoltIcon fontSize="small" style={{ color: '#f59e0b' }} />
              <span>Typical response time within 12 hours</span>
            </div>

            {/* Social and Resume Row */}
            <div className="command-footer-actions">
              <div className="contact-social-icons">
                <a
                  href="https://github.com/vatchans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cmd-social-btn"
                  aria-label="GitHub Profile"
                >
                  <GitHubIcon fontSize="small" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sree-vatchan-6a0855246"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cmd-social-btn"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon fontSize="small" />
                </a>
                <a
                  href="mailto:vatchans@gmail.com"
                  className="cmd-social-btn"
                  aria-label="Send Email"
                >
                  <MailOutlineIcon fontSize="small" />
                </a>
              </div>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Sree_Vatchan_A_Resume.pdf"
                className="cmd-resume-btn"
              >
                <DownloadIcon fontSize="small" />
                <span>Resume PDF</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Dispatch Terminal (Solid & fully clickable - zero tilt interference) */}
        <div className="contact-terminal-card">
          <div className="terminal-header-bar">
            <div className="terminal-dot red" />
            <div className="terminal-dot yellow" />
            <div className="terminal-dot green" />
            <span className="terminal-file-name">send_message_dispatch.sh</span>
          </div>

          <form className="terminal-form" onSubmit={handleSend}>
            {/* Topic Selector */}
            <div className="terminal-field-block contact-topic-row">
              <label className="terminal-label">WHAT CAN WE WORK ON?</label>
              <div className="inquiry-pills-grid" role="radiogroup">
                {inquiryTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    role="radio"
                    aria-checked={selectedTopic === type.id}
                    className={`inquiry-pill contact-topic-pill ${selectedTopic === type.id ? 'inquiry-pill--active' : ''}`}
                    onClick={() => setSelectedTopic(type.id)}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sender Name */}
            <div className="terminal-field-block">
              <label htmlFor="user-name" className="terminal-label">
                YOUR NAME <span className="req">*</span>
              </label>
              <input
                id="user-name"
                type="text"
                className="terminal-input"
                placeholder="e.g. Alex Morgan"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Sender Email */}
            <div className="terminal-field-block">
              <label htmlFor="user-email" className="terminal-label">
                YOUR EMAIL ADDRESS
              </label>
              <input
                id="user-email"
                type="email"
                className="terminal-input"
                placeholder="e.g. alex@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Message */}
            <div className="terminal-field-block">
              <label htmlFor="user-msg" className="terminal-label">
                TRANSMISSION PAYLOAD (MESSAGE) <span className="req">*</span>
              </label>
              <textarea
                id="user-msg"
                className="terminal-textarea"
                placeholder="Share project requirements, team details, or open technical roles..."
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            {/* Send Button */}
            <Button
              type="submit"
              variant="contained"
              className="terminal-submit-btn"
              disabled={sending}
              endIcon={sentSuccess ? <CheckCircleIcon /> : <SendIcon />}
              style={{
                textTransform: 'none',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                borderRadius: '8px',
                padding: '0.85rem 1.5rem',
                fontSize: '0.95rem',
              }}
            >
              {sending ? 'Dispatching...' : sentSuccess ? 'Transmission Ready ✓' : 'Dispatch Message'}
            </Button>

            {/* Success Notification Banner */}
            {sentSuccess && alertInfo && (
              <div className="terminal-dispatch-success-banner" style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(52, 211, 153, 0.1)', border: '1px solid rgba(52, 211, 153, 0.35)', borderRadius: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#34d399', fontWeight: 600, fontSize: '13px' }}>
                  <CheckCircleIcon fontSize="small" />
                  <span>Message text copied to clipboard!</span>
                </div>
                <p style={{ margin: '0.4rem 0 0.8rem', fontSize: '12px', color: '#cbd5e1' }}>
                  Opening Gmail Web and your default mail client to deliver your message to <strong>vatchans@gmail.com</strong>.
                </p>
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  <a
                    href={alertInfo.gmailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-btn-primary"
                    style={{ fontSize: '12px', padding: '0.5rem 0.9rem' }}
                  >
                    Open in Gmail Web ↗
                  </a>
                  <a
                    href={alertInfo.mailtoUrl}
                    className="hero-btn-secondary"
                    style={{ fontSize: '12px', padding: '0.5rem 0.9rem' }}
                  >
                    Open Mail App ↗
                  </a>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;