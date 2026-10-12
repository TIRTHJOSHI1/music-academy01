import React from 'react';

export const TeachingApproach = () => {
  const principles = [
    {
      number: '01',
      title: 'Music Theory',
      description: 'Understand musical notes and fundamentals.',
      image: '/assets/approach_theory.jpg',
      alt: 'Open music book with musical notation on piano'
    },
    {
      number: '02',
      title: 'Practical Learning',
      description: 'Develop skills through instrument practice.',
      image: '/assets/approach_practice.jpg',
      alt: 'Hands playing acoustic guitar in music studio'
    },
    {
      number: '03',
      title: 'Rhythm & Melody',
      description: 'Explore timing, rhythm, and musical expression.',
      image: '/assets/approach_rhythm.jpg',
      alt: 'Pair of tabla drums with detailed drum heads'
    },
    {
      number: '04',
      title: 'Learn to Play Independently',
      description: 'Work toward learning songs independently.',
      image: '/assets/approach_independent.jpg',
      alt: 'Music stand with sheet music in sunlit studio'
    }
  ];

  return (
    <section className="approach-section" id="teaching-approach">
      <div className="approach-container">

        {/* Left Column: Large Organic Photographic Area */}
        <div className="approach-visual-col">
          <div className="approach-visual-wrapper">
            <img 
              src="/assets/approach_main_clean.jpg" 
              alt="Music teacher guiding young student at grand piano" 
              className="approach-main-img"
              loading="lazy"
            />

            {/* Upper Left Curved Badge with Editorial Script */}
            <div className="approach-badge-cartouche" aria-hidden="true">
              <span className="approach-badge-script">Guided</span>
              <span className="approach-badge-script">Practice</span>
              <span className="approach-badge-script">Lifelong</span>
              <span className="approach-badge-script">Music</span>
            </div>
          </div>
        </div>

        {/* Right Column: Heading & 4 Learning Principle Cards */}
        <div className="approach-content-col">

          {/* Section Heading Area */}
          <div className="approach-header">
            <img 
              src="/assets/approach_ornament.png" 
              alt="" 
              className="approach-ornament" 
              aria-hidden="true" 
            />
            <span className="approach-eyebrow">OUR TEACHING APPROACH</span>

            <h2 className="approach-heading">
              <span className="approach-heading-serif">Learn Music</span>
              <span className="approach-heading-italic">Through Practice.</span>
            </h2>

            <p className="approach-supporting-text">
              Build your musical understanding through guided practice, music theory, and hands-on learning.
            </p>
          </div>

          {/* Four Learning-Principle Cards (2 Columns x 2 Rows) */}
          <div className="approach-cards-grid">
            {principles.map((item) => (
              <div key={item.number} className="approach-card">
                
                {/* Left: Vertically Cropped Photograph */}
                <div className="approach-card-img-wrapper">
                  <img 
                    src={item.image} 
                    alt={item.alt} 
                    className="approach-card-img"
                    loading="lazy"
                  />
                </div>

                {/* Right: Card Body with Number, Title, Description, and Arrow */}
                <div className="approach-card-body">
                  <span className="approach-card-number">{item.number}</span>
                  <h3 className="approach-card-title">{item.title}</h3>
                  <p className="approach-card-desc">{item.description}</p>
                  
                  <div className="approach-card-arrow-wrapper">
                    <span className="approach-card-arrow" aria-label={`Learn more about ${item.title}`}>
                      <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="3" y1="8" x2="13" y2="8" />
                        <polyline points="9 4 13 8 9 12" />
                      </svg>
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
