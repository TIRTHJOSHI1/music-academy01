import React from 'react';

export const Instruments = () => {
  const instrumentList = [
    {
      id: 'piano',
      name: 'Piano',
      image: '/assets/inst_piano.jpg',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="13" x2="22" y2="13" />
          <line x1="6" y1="5" x2="6" y2="13" />
          <line x1="10" y1="5" x2="10" y2="13" />
          <line x1="14" y1="5" x2="14" y2="13" />
          <line x1="18" y1="5" x2="18" y2="13" />
          <line x1="8" y1="13" x2="8" y2="19" />
          <line x1="16" y1="13" x2="16" y2="19" />
        </svg>
      )
    },
    {
      id: 'guitar',
      name: 'Guitar',
      image: '/assets/inst_guitar.jpg',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 3l2 2-2.5 2.5-2-2L19 3z" />
          <path d="M16.5 5.5l-6 6" />
          <path d="M10 11.5c-2.2-1-4.8 1.2-3.8 3.5-1.8.8-2.7 2.8-1.8 4.6s2.8 2.2 4.6.4c2.2 1 4.5-1.5 3.5-3.8-1-2.2-2.5-4.7-2.5-4.7z" />
          <circle cx="9.5" cy="15.5" r="1.2" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 'tabla',
      name: 'Tabla',
      image: '/assets/inst_tabla.jpg',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Dayan (Treble Drum) */}
          <ellipse cx="7.5" cy="8" rx="4.5" ry="2.2" />
          <circle cx="7.5" cy="8" r="1.3" fill="currentColor" />
          <path d="M3 8v6c0 1.5 2 2.8 4.5 2.8s4.5-1.3 4.5-2.8V8" />
          <line x1="4" y1="10" x2="6.5" y2="16" />
          <line x1="11" y1="10" x2="8.5" y2="16" />
          {/* Bayan (Bass Drum) */}
          <ellipse cx="16.5" cy="9" rx="5" ry="2.5" />
          <circle cx="16" cy="9" r="1.5" fill="currentColor" />
          <path d="M11.5 9v5.5c0 1.8 2.2 3.2 5 3.2s5-1.4 5-3.2V9" />
          <line x1="13" y1="11" x2="15" y2="17" />
          <line x1="20" y1="11" x2="18" y2="17" />
        </svg>
      )
    },
    {
      id: 'flute',
      name: 'Flute',
      image: '/assets/inst_flute.jpg',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <line x1="2" y1="20" x2="22" y2="4" />
          <circle cx="7" cy="16" r="0.8" fill="currentColor" />
          <circle cx="10" cy="13.5" r="0.8" fill="currentColor" />
          <circle cx="13" cy="11" r="0.8" fill="currentColor" />
          <circle cx="16" cy="8.5" r="0.8" fill="currentColor" />
          <circle cx="19" cy="6" r="0.8" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 'keyboard',
      name: 'Keyboard',
      image: '/assets/inst_keyboard.jpg',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <line x1="6" y1="6" x2="6" y2="12" />
          <line x1="10" y1="6" x2="10" y2="12" />
          <line x1="14" y1="6" x2="14" y2="12" />
          <line x1="18" y1="6" x2="18" y2="12" />
          <line x1="7" y1="12" x2="7" y2="18" />
          <line x1="12" y1="12" x2="12" y2="18" />
          <line x1="17" y1="12" x2="17" y2="18" />
        </svg>
      )
    },
    {
      id: 'octapad',
      name: 'Octapad',
      image: '/assets/inst_octapad.jpg',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <line x1="9" y1="4" x2="9" y2="18" />
          <line x1="15" y1="4" x2="15" y2="18" />
          <line x1="3" y1="11" x2="21" y2="11" />
          {/* Drumsticks */}
          <line x1="18" y1="2" x2="6" y2="22" strokeWidth="1.5" />
          <line x1="21" y1="5" x2="9" y2="22" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: 'dholak',
      name: 'Dholak',
      image: '/assets/inst_dholak.jpg',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="6" cy="12" rx="2.5" ry="6" />
          <ellipse cx="18" cy="12" rx="2" ry="5" />
          <path d="M6 6c3-1 9-1 12 1" />
          <path d="M6 18c3 1 9 1 12-1" />
          {/* Cross ropes */}
          <line x1="7" y1="7" x2="17" y2="16" strokeWidth="1.3" />
          <line x1="7" y1="17" x2="17" y2="8" strokeWidth="1.3" />
        </svg>
      )
    },
    {
      id: 'kalimba',
      name: 'Kalimba',
      image: '/assets/inst_kalimba.jpg',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="5 4 19 4 17 21 7 21" />
          <circle cx="12" cy="14" r="2.2" />
          {/* Metal Tines */}
          <line x1="8" y1="6" x2="8" y2="10" />
          <line x1="10" y1="6" x2="10" y2="11" />
          <line x1="12" y1="6" x2="12" y2="12" />
          <line x1="14" y1="6" x2="14" y2="11" />
          <line x1="16" y1="6" x2="16" y2="10" />
        </svg>
      )
    },
    {
      id: 'steeldrum',
      name: 'Steel Drum',
      image: '/assets/inst_steeldrum.jpg',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
          {/* Tongue cuts */}
          <circle cx="12" cy="6" r="1.2" />
          <circle cx="16.5" cy="8" r="1.2" />
          <circle cx="18" cy="12" r="1.2" />
          <circle cx="16.5" cy="16" r="1.2" />
          <circle cx="12" cy="18" r="1.2" />
          <circle cx="7.5" cy="16" r="1.2" />
          <circle cx="6" cy="12" r="1.2" />
          <circle cx="7.5" cy="8" r="1.2" />
        </svg>
      )
    },
    {
      id: 'cajon',
      name: 'Clip Box',
      image: '/assets/inst_cajon.jpg',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 21 7 21 17 12 22 3 17 3 7 12 2" />
          <line x1="12" y1="22" x2="12" y2="12" />
          <line x1="21" y1="7" x2="12" y2="12" />
          <line x1="3" y1="7" x2="12" y2="12" />
          <circle cx="7.5" cy="14.5" r="1.5" />
        </svg>
      )
    }
  ];

  return (
    <section className="instruments-section" id="instruments">
      <div className="instruments-container">

        {/* Section Header */}
        <div className="instruments-header-wrapper">

          {/* Left Decorative Script Elements (Desktop) */}
          <div className="instruments-side-decor instruments-side-decor-left" aria-hidden="true">
            <span className="inst-decor-script">Music</span>
            <span className="inst-decor-script">Instruments</span>
            <span className="inst-decor-script">For a</span>
            <span className="inst-decor-script">Brighter You</span>
          </div>

          {/* Center Heading Content */}
          <div className="instruments-center-header">
            
            {/* Waveform Ornament */}
            <img 
              src="/assets/approach_ornament.png" 
              alt="" 
              className="instruments-ornament" 
              aria-hidden="true" 
            />

            {/* Eyebrow Label */}
            <span className="instruments-eyebrow">OUR INSTRUMENTS</span>

            {/* Main Editorial Heading */}
            <h2 className="instruments-heading">
              <span className="instruments-heading-serif">Discover Your </span>
              <span className="instruments-heading-italic">Instrument.</span>
            </h2>

            {/* Supporting Subtitle */}
            <p className="instruments-supporting-text">
              Find the instrument that matches your passion.
            </p>

          </div>

          {/* Right Decorative Editorial Side Note (Desktop) */}
          <div className="instruments-side-decor instruments-side-decor-right" aria-hidden="true">
            <div className="inst-decor-right-divider" />
            <div className="inst-decor-right-text">
              <span>Different</span>
              <span>Sounds.</span>
              <span>Same Passion.</span>
            </div>
          </div>

        </div>

        {/* 10 Instruments Grid (5 columns x 2 rows on desktop) */}
        <div className="instruments-cards-grid">
          {instrumentList.map((inst) => (
            <div key={inst.id} className="instrument-card">
              
              {/* Instrument Photograph Area with Overlapping Badge */}
              <div className="instrument-card-image-wrapper">
                <img 
                  src={inst.image} 
                  alt={`${inst.name} lesson at Shree Music Academy`}
                  className="instrument-card-image"
                  loading="lazy"
                />
                
                {/* Overlapping Badge Icon at Bottom-Left of Photo */}
                <div className="instrument-card-badge" aria-hidden="true">
                  <div className="inst-badge-icon">
                    {inst.icon}
                  </div>
                </div>
              </div>

              {/* Card Footer Bar */}
              <div className="instrument-card-footer">
                <h3 className="instrument-card-name">{inst.name}</h3>
                
                <a 
                  href="#contact" 
                  className="instrument-arrow-btn"
                  aria-label={`Learn more about ${inst.name}`}
                >
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="3" y1="8" x2="13" y2="8" />
                    <polyline points="9 4 13 8 9 12" />
                  </svg>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="instruments-cta-wrapper">
          <a href="#contact" className="instruments-cta-btn">
            <span>Explore All Instruments</span>
            <span className="instruments-cta-arrow" aria-hidden="true">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};
