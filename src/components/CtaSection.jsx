import React from 'react';

export const CtaSection = ({ 
  onNavigate,
  eyebrow = 'SHREE MUSIC ACADEMY',
  headingWhite = 'Ready to Begin Your',
  headingGold = 'Musical Journey?',
  description,
  primaryBtnText = 'Enquire About Classes',
  primaryBtnTarget = 'contact',
  primaryBtnHref = '/contact',
  showWhatsApp = true,
  showFeatures = true,
}) => {
  // Configured verified academy WhatsApp number (leave empty if not configured to default to #contact)
  const WHATSAPP_NUMBER = ''; // e.g. '919876543210'
  const whatsappUrl = WHATSAPP_NUMBER 
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Shree%20Music%20Academy%2C%20I%20would%20like%20to%20enquire%20about%20music%20classes.` 
    : '/contact';

  return (
    <section className="cta-section" id="enquiry-cta">
      {/* Full Section Background Video */}
      <div className="cta-video-container" aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/cta_poster.jpg"
          className="cta-bg-video"
        >
          <source src="/assets/cta_background.mp4" type="video/mp4" />
        </video>
        {/* Subtle Readability Vignette Overlay */}
        <div className="cta-video-overlay"></div>
      </div>

      <div className="cta-container">
        {/* Centered Academy Label with Fine Decorative Lines */}
        <div className="cta-eyebrow-wrapper">
          <span className="cta-eyebrow-line left" aria-hidden="true"></span>
          <span className="cta-eyebrow">{eyebrow}</span>
          <span className="cta-eyebrow-line right" aria-hidden="true"></span>
        </div>

        {/* Large Two-Line Heading */}
        <h2 className="cta-heading">
          <span className="cta-heading-white">{headingWhite} </span>
          <span className="cta-heading-gold">{headingGold}</span>
        </h2>

        {/* Centered Description */}
        <p className="cta-description">
          {description ? (
            description
          ) : (
            <>
              Discover the joy of music at Shree Music Academy.<br />
              Explore different instruments, develop your skills,<br />
              and learn at your own pace.
            </>
          )}
        </p>

        {/* CTA Buttons Row: Primary Gold Button + Circular WhatsApp Button */}
        <div className="cta-actions-row">
          <a 
            href={primaryBtnHref} 
            className="cta-primary-btn"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate(primaryBtnTarget);
              }
            }}
          >
            <span>{primaryBtnText}</span>
            <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="3" y1="8" x2="13" y2="8" />
              <polyline points="9 4 13 8 9 12" />
            </svg>
          </a>

          {showWhatsApp && (
            <a 
              href={whatsappUrl} 
              className="cta-whatsapp-btn" 
              target={WHATSAPP_NUMBER ? '_blank' : '_self'} 
              rel="noopener noreferrer"
              aria-label="Contact Shree Music Academy on WhatsApp"
              title="Chat on WhatsApp"
            >
              <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.04 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 14.39C16.31 14.26 15.09 13.66 14.86 13.58C14.63 13.5 14.47 13.46 14.3 13.71C14.14 13.96 13.67 14.51 13.53 14.67C13.39 14.83 13.25 14.85 13 14.73C12.75 14.6 11.95 14.34 11 13.49C10.26 12.83 9.76 12.02 9.62 11.77C9.48 11.52 9.61 11.39 9.73 11.26C9.84 11.15 9.98 10.97 10.1 10.83C10.22 10.69 10.27 10.58 10.35 10.42C10.43 10.26 10.39 10.11 10.33 9.99C10.27 9.87 9.79 8.68 9.58 8.19C9.39 7.71 9.19 7.77 9.04 7.76C8.9 7.75 8.73 7.75 8.57 7.75C8.4 7.75 8.14 7.81 7.91 8.06C7.68 8.31 7.04 8.91 7.04 10.13C7.04 11.35 7.93 12.52 8.05 12.69C8.18 12.85 9.8 15.35 12.27 16.42C12.86 16.67 13.32 16.82 13.68 16.94C14.27 17.13 14.81 17.1 15.23 17.04C15.71 16.97 16.69 16.45 16.9 15.86C17.1 15.27 17.1 14.76 17.04 14.66C16.98 14.55 16.82 14.51 16.56 14.39Z"/>
              </svg>
            </a>
          )}
        </div>

        {/* Bottom Feature Row */}
        <div className="cta-features-row">
          <div className="cta-feature-item">
            <div className="cta-feature-icon-wrapper">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="cta-feature-text">
              <h3 className="cta-feature-title">All Age Groups</h3>
              <p className="cta-feature-desc">Kids to Adults</p>
            </div>
          </div>

          <div className="cta-feature-divider" aria-hidden="true"></div>

          <div className="cta-feature-item">
            <div className="cta-feature-icon-wrapper">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <div className="cta-feature-text">
              <h3 className="cta-feature-title">Expert Guidance</h3>
              <p className="cta-feature-desc">Learn from Experienced Teachers</p>
            </div>
          </div>

          <div className="cta-feature-divider" aria-hidden="true"></div>

          <div className="cta-feature-item">
            <div className="cta-feature-icon-wrapper">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
            </div>
            <div className="cta-feature-text">
              <h3 className="cta-feature-title multi-line">Wide Range</h3>
              <p className="cta-feature-desc bold-sub">of Instruments</p>
            </div>
          </div>

          <div className="cta-feature-divider" aria-hidden="true"></div>

          <div className="cta-feature-item">
            <div className="cta-feature-icon-wrapper">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <div className="cta-feature-text">
              <h3 className="cta-feature-title multi-line">Supportive</h3>
              <p className="cta-feature-desc bold-sub">Learning Environment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
