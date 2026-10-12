import React, { useState, useEffect } from 'react';

export const Navbar = ({ currentPage = 'home', onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#hero', page: 'home' },
    { label: 'About Us', href: '/about', page: 'about' },
    { label: 'Courses', href: '/courses', page: 'courses' },
    { label: 'Gallery', href: '/gallery', page: 'gallery' },
    { label: 'Contact Us', href: '/contact', page: 'contact' },
  ];

  // Determine theme: Home is dark (hero video); About, Courses, Gallery, Contact are light
  const isDarkTheme = currentPage === 'home';

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (e, item) => {
    setMobileOpen(false);
    if (onNavigate) {
      e.preventDefault();
      onNavigate(item.page, item.href);
    }
  };

  const handleBrandClick = (e) => {
    setMobileOpen(false);
    if (onNavigate) {
      e.preventDefault();
      onNavigate('home', '#hero');
    }
  };

  const handleCtaClick = (e) => {
    setMobileOpen(false);
    if (onNavigate) {
      e.preventDefault();
      onNavigate('contact');
    }
  };

  const isItemActive = (item) => {
    if (currentPage === 'about') return item.page === 'about';
    if (currentPage === 'courses') return item.page === 'courses';
    if (currentPage === 'gallery') return item.page === 'gallery';
    if (currentPage === 'contact') return item.page === 'contact';
    return item.page === 'home' && item.label === 'Home';
  };

  return (
    <header className="sma-navbar-wrapper">
      <nav 
        className={`sma-navbar-bar ${isDarkTheme ? 'theme-dark' : 'theme-light'}`} 
        aria-label="Main Navigation"
      >
        
        {/* Brand Logo & Diagonal Divider (Left) */}
        <div className="sma-brand-container">
          <a 
            href="/" 
            className="sma-nav-brand" 
            aria-label="Shree Music Academy Home"
            onClick={handleBrandClick}
          >
            {/* Elegant Classical Treble Clef in Gold Metallic Gradient */}
            <svg 
              className="sma-treble-clef" 
              viewBox="0 0 28 36" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="clef-gold-gradient" x1="2" y1="2" x2="26" y2="34" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#f8d997" />
                  <stop offset="50%" stopColor="#dfa74b" />
                  <stop offset="100%" stopColor="#b67a26" />
                </linearGradient>
              </defs>
              {/* Upper loop */}
              <path 
                d="M14.5 2.5 C14.5 2.5 18 6.5 18 10 C18 12.5 16 14.5 13.5 14.5 C11 14.5 9.5 12.5 9.5 10 C9.5 6.5 14.5 2.5 14.5 2.5 Z" 
                stroke="url(#clef-gold-gradient)" 
                strokeWidth="1.8" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
              {/* Vertical stem down to lower loop and hook */}
              <path 
                d="M14.5 2.5 V27 C14.5 29.5 12.5 31.5 10 31.5 C7.5 31.5 5.5 29.5 5.5 27 C5.5 24.5 7.5 22.5 10 22.5 C11.8 22.5 13.2 23.6 14 25 C14.5 26 14.8 27.5 14.8 29" 
                stroke="url(#clef-gold-gradient)" 
                strokeWidth="2.2" 
                strokeLinecap="round" 
              />
              {/* Body swirl */}
              <path 
                d="M10 14 C15 13 21 16 21 21 C21 26 16 29 11 28 C7 27.2 4 23.5 4 19 C4 13.5 9 8 14.5 2.5" 
                stroke="url(#clef-gold-gradient)" 
                strokeWidth="1.8" 
                strokeLinecap="round" 
              />
              {/* Terminal weight circle */}
              <circle cx="10" cy="27" r="2.2" fill="url(#clef-gold-gradient)" />
            </svg>

            {/* Brand Typography */}
            <div className="sma-brand-text">
              <span className="sma-brand-title">Shree</span>
              <span className="sma-brand-subtitle">MUSIC ACADEMY</span>
            </div>
          </a>

          {/* Slanted Forward Diagonal Divider Line (Exact Reference Geometry: /) */}
          <div className="sma-brand-divider" aria-hidden="true" />
        </div>

        {/* Center Navigation Links (Desktop) */}
        <ul className="sma-nav-menu">
          {navItems.map((item) => {
            const active = isItemActive(item);

            return (
              <li key={item.label} className="sma-nav-item">
                <a
                  href={item.href}
                  className={`sma-nav-link ${active ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, item)}
                >
                  <span className="sma-nav-label">{item.label}</span>
                  {active && (
                    <span className="sma-active-indicator" aria-hidden="true">
                      <span className="sma-active-line" />
                      <span className="sma-active-diamond" />
                    </span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Actions: Decorative Music Flourish + Slanted CTA + Mobile Hamburger */}
        <div className="sma-nav-actions">
          
          {/* Delicate Curved Musical Staff with Notes Flourish */}
          <div className="sma-nav-flourish" aria-hidden="true">
            <svg 
              viewBox="0 0 76 28" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="sma-flourish-svg"
            >
              <defs>
                <linearGradient id="flourish-gold-grad" x1="0" y1="0" x2="76" y2="28" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#f8d997" stopOpacity="0.85" />
                  <stop offset="50%" stopColor="#dfa74b" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#b67a26" stopOpacity="0.75" />
                </linearGradient>
              </defs>
              {/* 5 Waving Staff Lines */}
              <path d="M2 10 C 20 4, 48 16, 74 8" stroke="url(#flourish-gold-grad)" strokeWidth="0.8" strokeOpacity="0.5" />
              <path d="M2 13 C 20 7, 48 19, 74 11" stroke="url(#flourish-gold-grad)" strokeWidth="0.8" strokeOpacity="0.6" />
              <path d="M2 16 C 20 10, 48 22, 74 14" stroke="url(#flourish-gold-grad)" strokeWidth="0.8" strokeOpacity="0.7" />
              <path d="M2 19 C 20 13, 48 25, 74 17" stroke="url(#flourish-gold-grad)" strokeWidth="0.8" strokeOpacity="0.6" />
              <path d="M2 22 C 20 16, 48 28, 74 20" stroke="url(#flourish-gold-grad)" strokeWidth="0.8" strokeOpacity="0.5" />
              {/* Floating Note 1 (Eighth Note) */}
              <circle cx="28" cy="12" r="2.2" fill="url(#flourish-gold-grad)" />
              <path d="M30 12 V 4 C 33 5, 36 7, 34 9" stroke="url(#flourish-gold-grad)" strokeWidth="1" strokeLinecap="round" />
              {/* Floating Beamed Notes */}
              <circle cx="48" cy="18" r="2" fill="url(#flourish-gold-grad)" />
              <circle cx="58" cy="14" r="2" fill="url(#flourish-gold-grad)" />
              <path d="M50 18 V 8 M60 14 V 4 M50 8 L60 4" stroke="url(#flourish-gold-grad)" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>

          {/* Slanted Parallelogram CTA Button (Exact Reference Geometry: / slanted edges) */}
          <a 
            href="/contact" 
            className="sma-nav-cta-btn"
            onClick={handleCtaClick}
            aria-label="Enquire Now"
          >
            <span className="sma-cta-inner">
              <span className="sma-cta-text">Enquire Now</span>
              <span className="sma-cta-arrow">→</span>
            </span>
          </a>

          {/* Mobile / Tablet Hamburger Toggle */}
          <button
            className={`sma-hamburger-toggle ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileOpen}
          >
            <span className="sma-hamburger-bar" />
            <span className="sma-hamburger-bar" />
            <span className="sma-hamburger-bar" />
          </button>

        </div>

      </nav>

      {/* Mobile Backdrop Overlay */}
      {mobileOpen && (
        <div 
          className="sma-mobile-backdrop" 
          onClick={() => setMobileOpen(false)}
          aria-hidden="true" 
        />
      )}

      {/* Mobile Navigation Drawer (Exact Reference Geometry: Clipped Bottom-Left Corner) */}
      <div 
        className={`sma-mobile-drawer ${mobileOpen ? 'open' : ''}`} 
        aria-hidden={!mobileOpen}
        role="dialog"
        aria-modal="true"
      >
        {/* Drawer Header: Brand + Close Icon */}
        <div className="sma-drawer-header">
          <div className="sma-drawer-brand">
            <svg 
              className="sma-treble-clef-drawer" 
              viewBox="0 0 28 36" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="clef-gold-drawer" x1="2" y1="2" x2="26" y2="34" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#f8d997" />
                  <stop offset="50%" stopColor="#dfa74b" />
                  <stop offset="100%" stopColor="#b67a26" />
                </linearGradient>
              </defs>
              <path 
                d="M14.5 2.5 C14.5 2.5 18 6.5 18 10 C18 12.5 16 14.5 13.5 14.5 C11 14.5 9.5 12.5 9.5 10 C9.5 6.5 14.5 2.5 14.5 2.5 Z" 
                stroke="url(#clef-gold-drawer)" 
                strokeWidth="1.8" 
                strokeLinecap="round" 
              />
              <path 
                d="M14.5 2.5 V27 C14.5 29.5 12.5 31.5 10 31.5 C7.5 31.5 5.5 29.5 5.5 27 C5.5 24.5 7.5 22.5 10 22.5 C11.8 22.5 13.2 23.6 14 25 C14.5 26 14.8 27.5 14.8 29" 
                stroke="url(#clef-gold-drawer)" 
                strokeWidth="2.2" 
                strokeLinecap="round" 
              />
              <path 
                d="M10 14 C15 13 21 16 21 21 C21 26 16 29 11 28 C7 27.2 4 23.5 4 19 C4 13.5 9 8 14.5 2.5" 
                stroke="url(#clef-gold-drawer)" 
                strokeWidth="1.8" 
                strokeLinecap="round" 
              />
              <circle cx="10" cy="27" r="2.2" fill="url(#clef-gold-drawer)" />
            </svg>
            <div className="sma-brand-text">
              <span className="sma-brand-title">Shree</span>
              <span className="sma-brand-subtitle">MUSIC ACADEMY</span>
            </div>
          </div>

          <button 
            className="sma-drawer-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Links List with Dividers & Active Highlight Pill */}
        <ul className="sma-drawer-menu">
          {navItems.map((item, index) => {
            const active = isItemActive(item);

            return (
              <React.Fragment key={item.label}>
                <li className="sma-drawer-item">
                  <a
                    href={item.href}
                    className={`sma-drawer-link ${active ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, item)}
                  >
                    {active && <span className="sma-drawer-bullet" aria-hidden="true">•</span>}
                    <span className="sma-drawer-label">{item.label}</span>
                  </a>
                </li>
                {index < navItems.length - 1 && (
                  <li className="sma-drawer-divider" aria-hidden="true" />
                )}
              </React.Fragment>
            );
          })}
        </ul>

        {/* Drawer Footer with Slanted CTA and Flowing Staff Wave */}
        <div className="sma-drawer-footer">
          <a 
            href="/contact" 
            className="sma-nav-cta-btn sma-drawer-cta-btn" 
            onClick={handleCtaClick}
          >
            <span className="sma-cta-inner">
              <span className="sma-cta-text">Enquire Now</span>
              <span className="sma-cta-arrow">→</span>
            </span>
          </a>

          {/* Flowing Musical Staff Waves across Bottom */}
          <div className="sma-drawer-music-wave" aria-hidden="true">
            <svg viewBox="0 0 280 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 24 C 60 10, 140 35, 280 18" stroke="url(#clef-gold-drawer)" strokeWidth="0.8" strokeOpacity="0.45" />
              <path d="M0 27 C 60 13, 140 38, 280 21" stroke="url(#clef-gold-drawer)" strokeWidth="0.8" strokeOpacity="0.55" />
              <path d="M0 30 C 60 16, 140 41, 280 24" stroke="url(#clef-gold-drawer)" strokeWidth="0.8" strokeOpacity="0.65" />
              <circle cx="180" cy="22" r="2.2" fill="url(#clef-gold-drawer)" />
              <path d="M182 22 V 12 C 187 13, 191 16, 189 18" stroke="url(#clef-gold-drawer)" strokeWidth="1" strokeLinecap="round" />
              <circle cx="230" cy="26" r="2" fill="url(#clef-gold-drawer)" />
              <circle cx="244" cy="21" r="2" fill="url(#clef-gold-drawer)" />
              <path d="M232 26 V 16 M246 21 V 11 M232 16 L246 11" stroke="url(#clef-gold-drawer)" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </div>
        </div>

      </div>
    </header>
  );
};
