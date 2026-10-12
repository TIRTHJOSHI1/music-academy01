import React from 'react';

export const Introduction = () => {
  return (
    <section className="intro-section" id="about">
      <div className="intro-container">
        
        {/* Upper Hero Grid: Content & Studio Photograph */}
        <div className="intro-main-grid">
          
          {/* Left Column: Academy Narrative */}
          <div className="intro-content-col">
            
            {/* Welcome Eyebrow Label */}
            <div className="intro-eyebrow-wrapper">
              <span className="intro-eyebrow">WELCOME TO SHREE MUSIC ACADEMY</span>
              <div className="intro-eyebrow-ornament" aria-hidden="true">
                <span className="ornament-line" />
                <span className="ornament-bars">
                  <span className="ornament-bar" />
                  <span className="ornament-bar" />
                  <span className="ornament-bar" />
                  <span className="ornament-bar" />
                  <span className="ornament-bar" />
                </span>
                <span className="ornament-line" />
              </div>
            </div>

            {/* Main Heading with Pure HTML/CSS Typography */}
            <h2 className="intro-heading">
              <span className="intro-heading-row1">A Place Where</span>
              <span className="intro-heading-row2">
                <span className="intro-heading-script">Music</span>
                <span className="intro-heading-serif">Comes Alive.</span>
              </span>
            </h2>

            {/* Description Paragraph */}
            <p className="intro-description">
              Discover the joy of learning music at Shree Music Academy. 
              Explore different instruments, build your musical skills, and 
              develop your understanding of melody, rhythm, and music 
              theory through practical learning.
            </p>

            {/* Dual Action Buttons */}
            <div className="intro-cta-row">
              <a href="#courses" className="intro-btn-primary">
                <span>Explore Our Courses</span>
                <span className="intro-btn-arrow" aria-hidden="true">→</span>
              </a>

              <a href="#about" className="intro-btn-video" role="button">
                <span className="video-play-circle" aria-hidden="true">
                  <svg viewBox="0 0 16 16" fill="currentColor" className="video-play-icon">
                    <path d="M5 3.5L12 8L5 12.5V3.5Z" />
                  </svg>
                </span>
                <span className="video-btn-text">Watch Our Space</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean Photographic Showcase */}
          <div className="intro-visual-col">
            <div className="intro-photo-card">
              <img 
                src="/assets/intro_studio_main.jpg" 
                alt="Shree Music Academy conservatory with grand piano, guitar, and warm sunlit windows" 
                className="intro-studio-photo"
                loading="eager"
              />
            </div>
          </div>

        </div>

        {/* Bottom Feature Highlights Row */}
        <div className="intro-features-section">
          <div className="features-divider" aria-hidden="true" />
          
          <div className="intro-cards-row">
            
            {/* Feature 1: Learn Instruments */}
            <div className="intro-card">
              <div className="card-media-wrapper">
                <div className="card-badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M7 4v8M11 4v8M15 4v8M19 4v8M3 12h18" />
                  </svg>
                </div>
                <div className="card-arch-frame">
                  <img 
                    src="/assets/feature_piano.jpg" 
                    alt="Piano keys close-up training" 
                    className="card-img" 
                    loading="lazy"
                  />
                </div>
              </div>
              <h3 className="card-title">Learn Instruments</h3>
              <p className="card-desc">Piano, Guitar, Tabla, Flute and more with step-by-step learning.</p>
            </div>

            {/* Separator 1 */}
            <div className="card-divider" aria-hidden="true">
              <span className="divider-line-vert" />
              <span className="divider-diamond">♦</span>
              <span className="divider-line-vert" />
            </div>

            {/* Feature 2: Music Theory */}
            <div className="intro-card">
              <div className="card-media-wrapper">
                <div className="card-badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    <path d="M8 7h8M8 11h6" />
                  </svg>
                </div>
                <div className="card-arch-frame">
                  <img 
                    src="/assets/feature_theory.jpg" 
                    alt="Classical music theory and notation score book" 
                    className="card-img" 
                    loading="lazy"
                  />
                </div>
              </div>
              <h3 className="card-title">Music Theory</h3>
              <p className="card-desc">Understand the fundamentals of melody, rhythm, and musical notation.</p>
            </div>

            {/* Separator 2 */}
            <div className="card-divider" aria-hidden="true">
              <span className="divider-line-vert" />
              <span className="divider-diamond">♦</span>
              <span className="divider-line-vert" />
            </div>

            {/* Feature 3: Practice & Performance */}
            <div className="intro-card">
              <div className="card-media-wrapper">
                <div className="card-badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12h2M6 8v8M10 4v16M14 6v12M18 9v6M22 12h-2" />
                  </svg>
                </div>
                <div className="card-arch-frame">
                  <img 
                    src="/assets/feature_practice.jpg" 
                    alt="Musician hands playing acoustic guitar chords" 
                    className="card-img" 
                    loading="lazy"
                  />
                </div>
              </div>
              <h3 className="card-title">Practice & Performance</h3>
              <p className="card-desc">Build your skills through regular practice and practical learning.</p>
            </div>

            {/* Separator 3 */}
            <div className="card-divider" aria-hidden="true">
              <span className="divider-line-vert" />
              <span className="divider-diamond">♦</span>
              <span className="divider-line-vert" />
            </div>

            {/* Feature 4: Supportive Environment */}
            <div className="intro-card">
              <div className="card-media-wrapper">
                <div className="card-badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="card-arch-frame">
                  <img 
                    src="/assets/feature_environment.jpg" 
                    alt="Cozy, welcoming lesson studio with instruments" 
                    className="card-img" 
                    loading="lazy"
                  />
                </div>
              </div>
              <h3 className="card-title">Supportive Environment</h3>
              <p className="card-desc">Learn in a welcoming space designed to support musical growth.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
