import React from 'react';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -50, duration: 1.25 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="Footer" aria-label="Footer">
      <div className="footer-inner">
        {/* Brand column */}
        <div className="footer-brand">
          <img src="logo.png" alt="Sree Vatchan A Portfolio Logo" className="footer-logo" />
          <p className="footer-tagline">
            Full-Stack Engineer building high-performance digital health platforms, scalable microservices, and native mobile applications.
          </p>
          <div className="social-links footer-socials">
            <Link href="https://github.com/vatchans" target="_blank" aria-label="GitHub Profile">
              <div><GitHubIcon /></div>
            </Link>
            <Link href="https://www.linkedin.com/in/sree-vatchan-6a0855246" target="_blank" aria-label="LinkedIn Profile">
              <div><LinkedInIcon /></div>
            </Link>
            <Link href="mailto:vatchans@gmail.com" aria-label="Email Contact">
              <div><MailIcon /></div>
            </Link>
          </div>
        </div>

        {/* Quick links */}
        <div className="footer-links-col">
          <h4 className="footer-col-heading">Quick Links</h4>
          <ul className="footer-nav-list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="footer-nav-link" onClick={(e) => handleNavClick(e, link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div className="footer-contact-col">
          <h4 className="footer-col-heading">Get in Touch</h4>
          <div className="footer-contact-items">
            <a href="mailto:vatchans@gmail.com" className="footer-contact-item">
              <MailIcon fontSize="small" />
              <span>vatchans@gmail.com</span>
            </a>
            <a href="tel:+919080555495" className="footer-contact-item">
              <span>📞</span>
              <span>+91 9080 555 495</span>
            </a>
            <a
              href="https://maps.google.com/?q=Chennai,+TN,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-item"
            >
              <span>📍</span>
              <span>Chennai, TN 600116, India</span>
            </a>
          </div>

          <a
            href="/resume.pdf"
            download="Sree_Vatchan_A_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-resume-btn"
          >
            Download Resume ↓
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>
          <CopyrightIcon fontSize="small" /> {new Date().getFullYear()} Sree Vatchan A. All rights reserved.
        </p>
        <p className="footer-made-with">
          Engineering scalable web, mobile, and cloud architectures
        </p>
      </div>
    </footer>
  );
};

export default Footer;
