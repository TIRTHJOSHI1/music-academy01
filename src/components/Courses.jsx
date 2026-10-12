import React from 'react';

export const Courses = () => {
  return (
    <section className="courses-section" id="courses">
      <div className="courses-container">
        
        {/* Section Header */}
        <div className="courses-header-wrapper">
          
          {/* Left Decorative Script Elements (Desktop) */}
          <div className="courses-side-decor courses-side-decor-left" aria-hidden="true">
            <span className="decor-script-word">Learn</span>
            <span className="decor-script-word">Practice</span>
            <span className="decor-script-word">Grow</span>
            <span className="decor-script-word">Perform</span>
          </div>

          {/* Center Heading Content */}
          <div className="courses-center-header">
            
            {/* Eyebrow Label (Aligned below background ornament) */}
            <span className="courses-eyebrow">OUR COURSES</span>

            {/* Main Editorial Heading */}
            <h2 className="courses-heading">
              <span className="courses-heading-line1">Find Your Rhythm.</span>
              <span className="courses-heading-line2">Discover Your Music.</span>
            </h2>

            {/* Supporting Subtitle */}
            <p className="courses-supporting-text">
              Explore music courses designed for different skill levels, interests, and learning goals.
            </p>

          </div>

          {/* Right Decorative Editorial Side Note (Desktop) */}
          <div className="courses-side-decor courses-side-decor-right" aria-hidden="true">
            <div className="decor-right-divider" />
            <div className="decor-right-text">
              <span>Music</span>
              <span>for Every</span>
              <span>Stage of</span>
              <span>Your Journey.</span>
            </div>
          </div>

        </div>

        {/* Three Courses Grid */}
        <div className="courses-cards-grid">
          
          {/* =================================================================
              CARD 1: Basic Course
              ================================================================= */}
          <div className="course-card">
            
            {/* Card Image Area with Overlapping Badge */}
            <div className="course-card-image-wrapper">
              <img 
                src="/assets/course_basic_piano.jpg" 
                alt="Basic Course - Grand piano with sunlit conservatory windows"
                className="course-card-image"
                loading="lazy"
              />
              <div className="course-card-badge" aria-hidden="true">
                {/* Piano Keyboard Icon */}
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="badge-icon">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <line x1="2" y1="13" x2="22" y2="13" />
                  <line x1="6" y1="5" x2="6" y2="13" />
                  <line x1="10" y1="5" x2="10" y2="13" />
                  <line x1="14" y1="5" x2="14" y2="13" />
                  <line x1="18" y1="5" x2="18" y2="13" />
                  <line x1="8" y1="13" x2="8" y2="19" />
                  <line x1="16" y1="13" x2="16" y2="19" />
                </svg>
              </div>
            </div>

            {/* Card Content Body */}
            <div className="course-card-body">
              <h3 className="course-card-title">Basic Course</h3>
              <p className="course-card-subtitle">BUILD YOUR MUSICAL FOUNDATIONS</p>
              
              <p className="course-card-desc">
                A perfect start for beginners to learn music step-by-step with a strong focus on theory and practical training.
              </p>

              <div className="course-card-divider" aria-hidden="true" />

              {/* 2x2 Information Grid */}
              <div className="course-info-grid">
                
                {/* Duration */}
                <div className="info-grid-item">
                  <div className="info-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <div className="info-text">
                    <span className="info-label">Duration</span>
                    <strong className="info-value">4 Months</strong>
                  </div>
                </div>

                {/* Total Classes */}
                <div className="info-grid-item">
                  <div className="info-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                  </div>
                  <div className="info-text">
                    <span className="info-label">Total Classes</span>
                    <strong className="info-value">48 Classes</strong>
                  </div>
                </div>

                {/* Class Duration */}
                <div className="info-grid-item">
                  <div className="info-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div className="info-text">
                    <span className="info-label">Class Duration</span>
                    <strong className="info-value">1 Hour</strong>
                  </div>
                </div>

                {/* Frequency */}
                <div className="info-grid-item">
                  <div className="info-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
                    </svg>
                  </div>
                  <div className="info-text">
                    <span className="info-label">Frequency</span>
                    <strong className="info-value">3 Days per Week</strong>
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="course-card-action">
                <a href="#contact" className="course-btn">
                  <span>Learn More</span>
                  <span className="course-btn-arrow" aria-hidden="true">→</span>
                </a>
              </div>

            </div>

          </div>

          {/* =================================================================
              CARD 2: Advanced Course
              ================================================================= */}
          <div className="course-card">
            
            {/* Card Image Area with Overlapping Badge */}
            <div className="course-card-image-wrapper">
              <img 
                src="/assets/course_advanced_guitar.jpg" 
                alt="Advanced Course - Close-up of hands playing acoustic guitar"
                className="course-card-image"
                loading="lazy"
              />
              <div className="course-card-badge" aria-hidden="true">
                {/* Acoustic Guitar Icon */}
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="badge-icon">
                  <path d="M19 3l2 2-3 3-2-2 3-3z" />
                  <path d="M16 6l-6 6" />
                  <path d="M10 12c-2.5-1-5 1.5-4 4-2 1-3 3-2 5s4 0 5-2c2.5 1 5-1.5 4-4-1-2-3-3-3-3z" />
                  <circle cx="10" cy="16" r="1.5" />
                </svg>
              </div>
            </div>

            {/* Card Content Body */}
            <div className="course-card-body">
              <h3 className="course-card-title">Advanced Course</h3>
              <p className="course-card-subtitle">TAKE YOUR SKILLS FURTHER</p>
              
              <p className="course-card-desc">
                Designed for learners who want to refine their technique, build advanced skills, and explore deeper aspects of music.
              </p>

              <div className="course-card-divider" aria-hidden="true" />

              {/* Vertical Feature List */}
              <ul className="course-feature-list">
                
                <li className="feature-list-item">
                  <div className="info-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="20" x2="18" y2="10" />
                      <line x1="12" y1="20" x2="12" y2="4" />
                      <line x1="6" y1="20" x2="6" y2="14" />
                    </svg>
                  </div>
                  <span className="feature-item-text">Advanced techniques and practice</span>
                </li>

                <li className="feature-list-item">
                  <div className="info-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18V5l12-2v13" />
                      <circle cx="6" cy="18" r="3" />
                      <circle cx="18" cy="16" r="3" />
                    </svg>
                  </div>
                  <span className="feature-item-text">Skill development and performance</span>
                </li>

                <li className="feature-list-item">
                  <div className="info-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <span className="feature-item-text">Personalized guidance</span>
                </li>

                <li className="feature-list-item">
                  <div className="info-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </div>
                  <span className="feature-item-text">Detailed course structure to be confirmed</span>
                </li>

              </ul>

              {/* Action Button */}
              <div className="course-card-action">
                <a href="#contact" className="course-btn">
                  <span>Learn More</span>
                  <span className="course-btn-arrow" aria-hidden="true">→</span>
                </a>
              </div>

            </div>

          </div>

          {/* =================================================================
              CARD 3: International Program
              ================================================================= */}
          <div className="course-card">
            
            {/* Card Image Area with Overlapping Badge */}
            <div className="course-card-image-wrapper">
              <img 
                src="/assets/course_intl_sheetmusic.jpg" 
                alt="International Program - Classical sheet music book on stand in academy studio"
                className="course-card-image"
                loading="lazy"
              />
              <div className="course-card-badge" aria-hidden="true">
                {/* Globe / International Icon */}
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="badge-icon">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
            </div>

            {/* Card Content Body */}
            <div className="course-card-body">
              <h3 className="course-card-title">International Program</h3>
              <p className="course-card-subtitle">EXPLORE GLOBAL OPPORTUNITIES</p>
              
              <p className="course-card-desc">
                A structured learning path for students interested in internationally recognized music programs.
              </p>

              <div className="course-card-divider" aria-hidden="true" />

              {/* Vertical Feature List */}
              <ul className="course-feature-list">
                
                <li className="feature-list-item">
                  <div className="info-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                  <span className="feature-item-text">Trinity-related learning (details to be confirmed)</span>
                </li>

                <li className="feature-list-item">
                  <div className="info-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  </div>
                  <span className="feature-item-text">International music curriculum (to be confirmed)</span>
                </li>

                <li className="feature-list-item">
                  <div className="info-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <span className="feature-item-text">Suitable for dedicated learners</span>
                </li>

                <li className="feature-list-item">
                  <div className="info-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <span className="feature-item-text">Program details, duration, and eligibility to be confirmed</span>
                </li>

              </ul>

              {/* Action Button */}
              <div className="course-card-action">
                <a href="#contact" className="course-btn">
                  <span>Learn More</span>
                  <span className="course-btn-arrow" aria-hidden="true">→</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
