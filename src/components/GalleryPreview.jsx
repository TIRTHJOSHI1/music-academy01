import React from 'react';

export const GalleryPreview = () => {
  return (
    <section className="gallery-section" id="gallery">
      {/* Decorative Left Script with Flourish */}
      <div className="gallery-left-script" aria-hidden="true">
        <span className="gallery-script-line">Students</span>
        <span className="gallery-script-line">Instruments</span>
        <span className="gallery-script-line">Teachers</span>
        <span className="gallery-script-line">Our Journey</span>
        <svg className="gallery-script-swoosh" viewBox="0 0 200 80" fill="none" preserveAspectRatio="none">
          <path d="M 10 15 C 30 50, 90 75, 195 40" stroke="#b88a53" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Decorative Right Editorial Quote */}
      <div className="gallery-right-quote" aria-hidden="true">
        <div className="gallery-quote-divider"></div>
        <div className="gallery-quote-text">
          <p>Real People.</p>
          <p>Real Learning.</p>
          <p>Real Music.</p>
        </div>
      </div>

      <div className="gallery-container">
        {/* Section Header */}
        <div className="gallery-header">
          <img 
            src="/assets/approach_ornament.png" 
            alt="" 
            className="gallery-ornament" 
            aria-hidden="true" 
          />
          <span className="gallery-eyebrow">OUR GALLERY</span>

          <h2 className="gallery-heading">
            <span className="gallery-heading-serif">Moments Filled </span>
            <span className="gallery-heading-italic">With Music.</span>
          </h2>

          <p className="gallery-description">
            A glimpse into our instruments, learning space,<br />
            practice sessions and performances.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {/* Left Column: Tall Card (Our Academy Space) */}
          <div className="gallery-col-left">
            <div className="gallery-card gallery-card-tall">
              <div className="gallery-img-wrapper">
                <img 
                  src="/assets/gallery_academy_space.jpg" 
                  alt="Students and teacher practicing musical instruments in Shree Music Academy space" 
                  className="gallery-img gallery-img-space"
                  loading="lazy"
                />
              </div>

              {/* Floating Pill Caption */}
              <div className="gallery-pill-caption gallery-pill-tall">
                <div className="gallery-badge-wrapper">
                  <img 
                    src="/assets/gallery_badge_space.png" 
                    alt="" 
                    className="gallery-badge-img" 
                    aria-hidden="true" 
                  />
                </div>
                <div className="gallery-pill-info">
                  <h3 className="gallery-pill-title">Our Academy Space</h3>
                  <p className="gallery-pill-desc">A comfortable and inspiring environment to learn and grow.</p>
                </div>
                <button className="gallery-pill-btn" aria-label="Explore Our Academy Space">
                  <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="8" x2="13" y2="8" />
                    <polyline points="9 4 13 8 9 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Stacked Cards */}
          <div className="gallery-col-right">
            {/* Top Row: Two Cards Side-by-Side */}
            <div className="gallery-row-top">
              {/* Card 2: Learning in Action */}
              <div className="gallery-card gallery-card-mid">
                <div className="gallery-img-wrapper">
                  <img 
                    src="/assets/gallery_learning_action.jpg" 
                    alt="Students practicing tabla and percussion with instructor" 
                    className="gallery-img gallery-img-learning"
                    loading="lazy"
                  />
                </div>

                <div className="gallery-pill-caption">
                  <div className="gallery-badge-wrapper">
                    <img 
                      src="/assets/gallery_badge_learning.png" 
                      alt="" 
                      className="gallery-badge-img" 
                      aria-hidden="true" 
                    />
                  </div>
                  <div className="gallery-pill-info">
                    <h3 className="gallery-pill-title">Learning in Action</h3>
                    <p className="gallery-pill-desc">Hands-on practice with dedicated guidance from our teachers.</p>
                  </div>
                  <button className="gallery-pill-btn" aria-label="Explore Learning in Action">
                    <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="3" y1="8" x2="13" y2="8" />
                      <polyline points="9 4 13 8 9 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Card 3: Our Instruments */}
              <div className="gallery-card gallery-card-mid">
                <div className="gallery-img-wrapper">
                  <img 
                    src="/assets/gallery_instruments.png" 
                    alt="Young music students playing acoustic guitars at the academy" 
                    className="gallery-img gallery-img-instruments"
                    loading="lazy"
                  />
                </div>

                <div className="gallery-pill-caption">
                  <div className="gallery-badge-wrapper">
                    <img 
                      src="/assets/gallery_badge_instruments.png" 
                      alt="" 
                      className="gallery-badge-img" 
                      aria-hidden="true" 
                    />
                  </div>
                  <div className="gallery-pill-info">
                    <h3 className="gallery-pill-title">Our Instruments</h3>
                    <p className="gallery-pill-desc">Explore a wide range of instruments with expert guidance.</p>
                  </div>
                  <button className="gallery-pill-btn" aria-label="Explore Our Instruments">
                    <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="3" y1="8" x2="13" y2="8" />
                      <polyline points="9 4 13 8 9 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Row: Wide Card (Performances & Events) */}
            <div className="gallery-card gallery-card-wide">
              <div className="gallery-img-wrapper">
                <img 
                  src="/assets/gallery_performances.jpg" 
                  alt="Academy students and teachers gathered for harmonium and vocal practice" 
                  className="gallery-img gallery-img-performances"
                  loading="lazy"
                />
              </div>

              <div className="gallery-pill-caption gallery-pill-wide">
                <div className="gallery-badge-wrapper">
                  <img 
                    src="/assets/gallery_badge_performances.png" 
                    alt="" 
                    className="gallery-badge-img" 
                    aria-hidden="true" 
                  />
                </div>
                <div className="gallery-pill-info">
                  <h3 className="gallery-pill-title">Performances & Events</h3>
                  <p className="gallery-pill-desc">Recitals, group sessions and memorable musical moments.</p>
                </div>
                <button className="gallery-pill-btn" aria-label="Explore Performances and Events">
                  <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="8" x2="13" y2="8" />
                    <polyline points="9 4 13 8 9 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Action Button */}
        <div className="gallery-cta-wrapper">
          <a href="#gallery" className="gallery-cta-btn">
            <span>Explore Our Gallery</span>
            <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="3" y1="8" x2="13" y2="8" />
              <polyline points="9 4 13 8 9 12" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
