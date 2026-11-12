import React, { useState, useEffect } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import Link from '@mui/material/Link';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -50, duration: 1.25 });
      } else {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <nav className={`Navbar ${scrolled ? 'Navbar--scrolled' : ''}`} aria-label="Main navigation">
      <div className="navbar-inner">
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="nav-logo" aria-label="Home">
          <img src="logo.png" alt="Sree Vatchan" />
        </a>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="nav-link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
                <span className="nav-link-underline" />
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-socials">
          <Link href="https://github.com/vatchans" target="_blank" aria-label="GitHub">
            <div className="nav-social-icon"><GitHubIcon fontSize="small" /></div>
          </Link>
          <Link href="https://www.linkedin.com/in/sree-vatchan-6a0855246" target="_blank" aria-label="LinkedIn">
            <div className="nav-social-icon"><LinkedInIcon fontSize="small" /></div>
          </Link>
          <Link href="mailto:vatchans@gmail.com" aria-label="Email">
            <div className="nav-social-icon"><MailIcon fontSize="small" /></div>
          </Link>
        </div>

        <button
          className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="mobile-nav-link" onClick={(e) => handleNavClick(e, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-socials">
          <Link href="https://github.com/vatchans" target="_blank"><GitHubIcon /></Link>
          <Link href="https://www.linkedin.com/in/sree-vatchan-6a0855246" target="_blank"><LinkedInIcon /></Link>
          <Link href="mailto:vatchans@gmail.com"><MailIcon /></Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
