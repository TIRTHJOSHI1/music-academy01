import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { CtaSection } from '../components/CtaSection';

// Detail Row Vector Icons
const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#ad7835" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="detail-svg-icon" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const DocumentIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#ad7835" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="detail-svg-icon" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#ad7835" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="detail-svg-icon" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const MusicNoteIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#ad7835" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="detail-svg-icon" aria-hidden="true">
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#ad7835" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="detail-svg-icon" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const CoursesPage = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Courses & Programs | Shree Music Academy';
  }, []);

  const handleEnquireClick = (courseName) => {
    if (onNavigate) {
      onNavigate('contact');
    } else {
      window.location.href = '/contact';
    }
  };

  // Section 03: What You'll Learn Topics with exact SVG icons matching reference
  const learningTopics = [
    {
      id: 1,
      title: 'Music Theory',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Single Eighth Note */}
          <circle cx="8" cy="18" r="3" />
          <path d="M11 18V5l9-2v4l-9 2" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Practical Learning',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Ascending Bar Chart */}
          <line x1="18" y1="20" x2="18" y2="9" />
          <line x1="12" y1="20" x2="12" y2="13" />
          <line x1="6" y1="20" x2="6" y2="17" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Melody and Rhythm',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Beamed Eighth Notes */}
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
          <path d="M9 18V5l12-2v13" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Fingering Practice',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          {/* Hand Palm with Fingers */}
          <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
          <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
          <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
          <path d="M6 14v-2a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v6a7 7 0 0 0 7 7h3a7 7 0 0 0 7-7v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2" />
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Learn Songs Independently',
      displayTitle: (
        <>
          Learn Songs<br />Independently
        </>
      ),
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          {/* Open Book */}
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
    },
  ];

  // Section 04: Confirmed 9 Instruments
  const instruments = [
    { name: 'Piano', image: '/assets/inst_piano.jpg' },
    { name: 'Keyboard', image: '/assets/inst_keyboard.jpg' },
    { name: 'Guitar', image: '/assets/inst_guitar.jpg' },
    { name: 'Tabla', image: '/assets/inst_tabla.jpg' },
    { name: 'Flute', image: '/assets/inst_flute.jpg' },
    { name: 'Octapad', image: '/assets/inst_octapad.jpg' },
    { name: 'Dholak', image: '/assets/inst_dholak.jpg' },
    { name: 'Kalimba', image: '/assets/inst_kalimba.jpg' },
    { name: 'Steel Drum', image: '/assets/inst_steeldrum.jpg' },
  ];

  return (
    <div className="courses-page-wrapper">
      {/* SHARED NAVBAR */}
      <Navbar currentPage="courses" onNavigate={onNavigate} />

      <main className="courses-page-main">
        {/* =================================================================
            SECTION 01 — COURSES HERO
            ================================================================= */}
        <section className="courses-hero-section">
          {/* Subtle Musical Background Notes/Staves */}
          <div className="courses-hero-decor left" aria-hidden="true">
            <img src="/assets/gallery_page/gallery_header_notes_left.png" alt="" />
          </div>
          <div className="courses-hero-decor right" aria-hidden="true">
            <img src="/assets/gallery_page/gallery_header_notes_right.png" alt="" />
          </div>

          <div className="courses-hero-container">
            {/* Left Hero Text Block */}
            <div className="courses-hero-content">
              <div className="courses-page-eyebrow-wrapper">
                <span className="courses-page-eyebrow-line" aria-hidden="true"></span>
                <span className="courses-page-eyebrow-text">OUR COURSES</span>
                <span className="courses-page-eyebrow-line" aria-hidden="true"></span>
              </div>

              <h1 className="courses-hero-heading">
                Find Your Rhythm.<br />
                <span className="courses-heading-gold-italic">Discover Your Music.</span>
              </h1>

              <p className="courses-hero-desc">
                Explore music courses designed for different skill levels, interests, and learning goals.
              </p>
            </div>

            {/* Right Hero Image Card */}
            <div className="courses-hero-image-card">
              <img 
                src="/assets/courses_page/course_hero_studio.jpg" 
                alt="Sunlit Shree Music Academy studio with acoustic guitar, classical tabla, and stage piano"
                className="courses-hero-img"
              />
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 02 — COURSE CATEGORIES (3 TIER CARDS)
            ================================================================= */}
        <section className="courses-programs-section">
          <div className="courses-programs-container">
            <div className="courses-section-header-centered">
              <div className="courses-page-eyebrow-wrapper">
                <span className="courses-page-eyebrow-line" aria-hidden="true"></span>
                <span className="courses-page-eyebrow-text">CHOOSE YOUR LEARNING PATH</span>
                <span className="courses-page-eyebrow-line" aria-hidden="true"></span>
              </div>
              <h2 className="courses-section-heading">Our Course Programs</h2>
            </div>

            <div className="courses-tiers-grid">
              {/* CARD 1: Basic Course */}
              <div className="course-tier-card">
                <div className="course-tier-header">
                  <div className="course-tier-badge bronze-cap" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                  <div className="course-tier-title-wrap">
                    <h3 className="course-tier-title">Basic Course</h3>
                    <p className="course-tier-tagline">
                      Perfect for beginners who want to build a strong foundation in music.
                    </p>
                  </div>
                </div>

                <div className="course-tier-details-box">
                  <div className="tier-detail-row">
                    <CalendarIcon />
                    <span className="tier-text">Duration: <strong>4 Months</strong></span>
                  </div>
                  <div className="tier-detail-row">
                    <DocumentIcon />
                    <span className="tier-text">Total Classes: <strong>48</strong></span>
                  </div>
                  <div className="tier-detail-row">
                    <ClockIcon />
                    <span className="tier-text">Class Duration: <strong>1 Hour</strong></span>
                  </div>
                  <div className="tier-detail-row">
                    <CalendarIcon />
                    <span className="tier-text">Schedule: <strong>3 Days per Week</strong></span>
                  </div>
                  <div className="tier-detail-row">
                    <MusicNoteIcon />
                    <span className="tier-text">Theory &amp; Practical Learning</span>
                  </div>
                </div>

                <button 
                  type="button" 
                  className="course-tier-cta-btn"
                  onClick={() => handleEnquireClick('Basic Course')}
                >
                  <span>Enquire About Basic Course</span>
                  <span className="btn-arrow" aria-hidden="true">→</span>
                </button>
              </div>

              {/* CARD 2: Advanced Course */}
              <div className="course-tier-card">
                <div className="course-tier-header">
                  <div className="course-tier-badge bronze-bars" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="20" x2="18" y2="10" />
                      <line x1="12" y1="20" x2="12" y2="4" />
                      <line x1="6" y1="20" x2="6" y2="14" />
                    </svg>
                  </div>
                  <div className="course-tier-title-wrap">
                    <h3 className="course-tier-title">Advanced Course</h3>
                    <p className="course-tier-tagline">
                      For students who want to take their skills to the next level.
                    </p>
                  </div>
                </div>

                <div className="course-tier-details-box">
                  <div className="tier-detail-row">
                    <ClockIcon />
                    <span className="tier-text">Duration: <span className="muted-italic">To be confirmed</span></span>
                  </div>
                  <div className="tier-detail-row">
                    <DocumentIcon />
                    <span className="tier-text">Total Classes: <span className="muted-italic">To be confirmed</span></span>
                  </div>
                  <div className="tier-detail-row">
                    <ClockIcon />
                    <span className="tier-text">Class Duration: <span className="muted-italic">To be confirmed</span></span>
                  </div>
                  <div className="tier-detail-row">
                    <CalendarIcon />
                    <span className="tier-text">Schedule: <span className="muted-italic">To be confirmed</span></span>
                  </div>
                  <div className="tier-detail-row">
                    <MusicNoteIcon />
                    <span className="tier-text">Syllabus: <span className="muted-italic">To be confirmed</span></span>
                  </div>
                </div>

                <button 
                  type="button" 
                  className="course-tier-cta-btn"
                  onClick={() => handleEnquireClick('Advanced Course')}
                >
                  <span>Enquire About Advanced Course</span>
                  <span className="btn-arrow" aria-hidden="true">→</span>
                </button>
              </div>

              {/* CARD 3: International Program */}
              <div className="course-tier-card">
                <div className="course-tier-header">
                  <div className="course-tier-badge bronze-globe" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <div className="course-tier-title-wrap">
                    <h3 className="course-tier-title">International Program</h3>
                    <p className="course-tier-tagline">
                      Guidance for internationally recognized music programs (e.g., Trinity).
                    </p>
                  </div>
                </div>

                <div className="course-tier-details-box">
                  <div className="tier-detail-row multiline">
                    <DocumentIcon />
                    <div className="tier-text">
                      <div>Trinity program details</div>
                      <div className="muted-italic">to be confirmed</div>
                    </div>
                  </div>
                  <div className="tier-detail-row multiline">
                    <DocumentIcon />
                    <div className="tier-text">
                      <div>Syllabus &amp; exam pathway</div>
                      <div className="muted-italic">to be confirmed</div>
                    </div>
                  </div>
                  <div className="tier-detail-row">
                    <UsersIcon />
                    <span className="tier-text">Eligibility: <span className="muted-italic">To be confirmed</span></span>
                  </div>
                  <div className="tier-detail-row">
                    <CalendarIcon />
                    <span className="tier-text">Schedule: <span className="muted-italic">To be confirmed</span></span>
                  </div>
                  <div className="tier-detail-row">
                    <MusicNoteIcon />
                    <span className="tier-text">For students interested in international music certifications</span>
                  </div>
                </div>

                <button 
                  type="button" 
                  className="course-tier-cta-btn"
                  onClick={() => handleEnquireClick('International Program')}
                >
                  <span>Enquire About International Program</span>
                  <span className="btn-arrow" aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 03 — WHAT YOU'LL LEARN
            ================================================================= */}
        <section className="courses-learn-section">
          <div className="courses-learn-container">
            <div className="courses-section-header-centered">
              <div className="courses-page-eyebrow-wrapper">
                <span className="courses-page-eyebrow-line" aria-hidden="true"></span>
                <span className="courses-page-eyebrow-text">WHAT YOU'LL LEARN</span>
                <span className="courses-page-eyebrow-line" aria-hidden="true"></span>
              </div>
              <h2 className="courses-section-heading">Build Real Musical Skills</h2>
            </div>

            <div className="courses-skills-row">
              {learningTopics.map((topic) => (
                <div key={topic.id} className="course-skill-item">
                  <div className="course-skill-circle" aria-hidden="true">
                    {topic.icon}
                  </div>
                  <span className="course-skill-title">{topic.displayTitle || topic.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 04 — INSTRUMENTS YOU CAN LEARN
            ================================================================= */}
        <section className="courses-instruments-section">
          <div className="courses-instruments-container">
            <div className="courses-section-header-centered">
              <div className="courses-page-eyebrow-wrapper">
                <span className="courses-page-eyebrow-line" aria-hidden="true"></span>
                <span className="courses-page-eyebrow-text">INSTRUMENTS YOU CAN LEARN</span>
                <span className="courses-page-eyebrow-line" aria-hidden="true"></span>
              </div>
              <h2 className="courses-section-heading">Explore a Wide Range of Instruments</h2>
            </div>

            <div className="courses-inst-row">
              {instruments.map((inst) => (
                <div key={inst.name} className="course-inst-card">
                  <div className="course-inst-thumb-wrap">
                    <img src={inst.image} alt={inst.name} loading="lazy" className="course-inst-thumb" />
                  </div>
                  <span className="course-inst-name">{inst.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 06 — FINAL CTA (REUSING EXACT EXISTING HOME CTA COMPONENT)
            ================================================================= */}
        <CtaSection onNavigate={onNavigate} />
      </main>
    </div>
  );
};
