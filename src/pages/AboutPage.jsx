import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { CtaSection } from '../components/CtaSection';

export const AboutPage = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'About Us | Shree Music Academy';
  }, []);

  return (
    <div className="about-page-wrapper">
      {/* SHARED NAVBAR (Active link: About Us) */}
      <Navbar currentPage="about" onNavigate={onNavigate} />

      <main className="about-page-main">
        {/* =================================================================
            SECTION 01 — ABOUT HERO
            ================================================================= */}
        <section className="about-hero-section">
          {/* Subtle Musical Background Notes / Staves */}
          <div className="about-hero-decor left" aria-hidden="true">
            <img src="/assets/gallery_page/gallery_header_notes_left.png" alt="" />
          </div>
          <div className="about-hero-decor right" aria-hidden="true">
            <img src="/assets/gallery_page/gallery_header_notes_right.png" alt="" />
          </div>

          <div className="about-hero-container">
            {/* Left Hero Narrative Block */}
            <div className="about-hero-content">
              <div className="about-eyebrow-wrapper">
                <span className="about-eyebrow-line" aria-hidden="true"></span>
                <span className="about-eyebrow-text">ABOUT US</span>
                <span className="about-eyebrow-line" aria-hidden="true"></span>
              </div>

              <h1 className="about-hero-heading">
                Every Musical Journey<br />
                <span className="about-heading-gold-italic">Begins with a Note.</span>
              </h1>

              <p className="about-hero-desc">
                Discover the people, passion, and purpose behind Shree Music Academy.
              </p>
            </div>

            {/* Right Hero Image Card */}
            <div className="about-hero-image-card">
              <img 
                src="/assets/about_page/about_hero_studio.jpg" 
                alt="Sunlit Shree Music Academy studio conservatory corner with acoustic guitar, classical Indian tabla, keyboard, and 'Music Learn Play Grow' artwork"
                className="about-hero-img"
              />
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 02 — OUR STORY
            ================================================================= */}
        <section className="about-story-section">
          <div className="about-story-container">
            {/* Left: Open Sheet Music Desk Photo */}
            <div className="about-story-image-card">
              <img 
                src="/assets/about_page/story_sheet_music.jpg" 
                alt="Open classical sheet music notebook with vintage fountain pen on rich dark wood studio desk"
                className="about-story-img"
                loading="lazy"
              />
            </div>

            {/* Right: Narrative Block */}
            <div className="about-story-content">
              <div className="about-eyebrow-wrapper">
                <span className="about-eyebrow-line" aria-hidden="true"></span>
                <span className="about-eyebrow-text">OUR STORY</span>
                <span className="about-eyebrow-line" aria-hidden="true"></span>
              </div>

              <h2 className="about-section-heading">How It All Began</h2>

              <p className="about-story-desc">
                Shree Music Academy grew from a music teacher's experience of teaching at another academy, where the idea of creating a dedicated music-learning space began to take shape. The aim is to offer learners a welcoming place to explore music through different instruments and learning approaches.
              </p>
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 03 — OUR PURPOSE
            ================================================================= */}
        <section className="about-purpose-section">
          <div className="about-purpose-container">
            {/* Left: Purpose Statement */}
            <div className="about-purpose-left">
              <div className="about-eyebrow-wrapper">
                <span className="about-eyebrow-line" aria-hidden="true"></span>
                <span className="about-eyebrow-text">OUR PURPOSE</span>
                <span className="about-eyebrow-line" aria-hidden="true"></span>
              </div>

              <h2 className="about-purpose-heading">
                Making Music Part<br />
                <span className="about-heading-gold-italic">of Everyday Life</span>
              </h2>

              <p className="about-purpose-desc">
                We aim to help learners of all ages explore music, practise instruments, and develop their musical understanding in a supportive and inspiring environment.
              </p>
            </div>

            {/* Right: Mission & Values Cards */}
            <div className="about-purpose-cards-wrap">
              {/* Card 1: Our Mission */}
              <div className="about-purpose-card">
                <div className="about-purpose-badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="8" cy="18" r="3" />
                    <path d="M11 18V5l9-2v4l-9 2" />
                  </svg>
                </div>
                <h3 className="about-purpose-card-title">Our Mission</h3>
                <div className="about-purpose-card-divider" aria-hidden="true"></div>
                <p className="about-purpose-card-desc">
                  Provide a welcoming environment for learning music.
                </p>
              </div>

              {/* Card 2: Our Values */}
              <div className="about-purpose-card">
                <div className="about-purpose-badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <h3 className="about-purpose-card-title">Our Values</h3>
                <div className="about-purpose-card-divider" aria-hidden="true"></div>
                <p className="about-purpose-card-desc">
                  Encourage practice, curiosity, and musical expression.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 04 — OUR TEACHING PHILOSOPHY
            ================================================================= */}
        <section className="about-philosophy-section">
          <div className="about-philosophy-container">
            {/* Split Header */}
            <div className="about-philosophy-header">
              <div className="about-philosophy-header-left">
                <div className="about-eyebrow-wrapper">
                  <span className="about-eyebrow-line" aria-hidden="true"></span>
                  <span className="about-eyebrow-text">OUR TEACHING PHILOSOPHY</span>
                  <span className="about-eyebrow-line" aria-hidden="true"></span>
                </div>
                <h2 className="about-philosophy-heading">
                  Learn Music<br />
                  Through Practice
                </h2>
              </div>
              <div className="about-philosophy-header-right">
                <p className="about-philosophy-intro">
                  Our approach focuses on a balanced mix of theory, practical learning, and guided practice, helping students build confidence and develop their own musical style over time.
                </p>
              </div>
            </div>

            {/* 4 Principle Cards (Single Horizontal Row) */}
            <div className="about-philosophy-grid">
              {/* Card 1: Music Theory */}
              <div className="about-principle-card">
                <div className="about-principle-badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3 className="about-principle-title">Music Theory</h3>
                <p className="about-principle-desc">
                  Understand musical notes and fundamentals.
                </p>
              </div>

              {/* Card 2: Practical Learning */}
              <div className="about-principle-card">
                <div className="about-principle-badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="9" />
                    <line x1="12" y1="20" x2="12" y2="13" />
                    <line x1="6" y1="20" x2="6" y2="17" />
                  </svg>
                </div>
                <h3 className="about-principle-title">Practical Learning</h3>
                <p className="about-principle-desc">
                  Build skills through instrument practice.
                </p>
              </div>

              {/* Card 3: Rhythm & Melody */}
              <div className="about-principle-card">
                <div className="about-principle-badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="8" cy="18" r="3" />
                    <path d="M11 18V5l9-2v4l-9 2" />
                  </svg>
                </div>
                <h3 className="about-principle-title">Rhythm &amp; Melody</h3>
                <p className="about-principle-desc">
                  Explore timing and musical expression.
                </p>
              </div>

              {/* Card 4: Independent Learning */}
              <div className="about-principle-card">
                <div className="about-principle-badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <h3 className="about-principle-title">Independent Learning</h3>
                <p className="about-principle-desc">
                  Work toward learning songs independently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 05 — OUR LEARNING ENVIRONMENT
            ================================================================= */}
        <section className="about-environment-section">
          <div className="about-environment-container">
            {/* Left: Narrative Column */}
            <div className="about-environment-left">
              <div className="about-eyebrow-wrapper">
                <span className="about-eyebrow-line" aria-hidden="true"></span>
                <span className="about-eyebrow-text">OUR LEARNING ENVIRONMENT</span>
                <span className="about-eyebrow-line" aria-hidden="true"></span>
              </div>

              <h2 className="about-environment-heading">
                A Space to Learn,<br />
                Play &amp; Grow
              </h2>

              <p className="about-environment-desc">
                Our academy offers a comfortable and inspiring space where learners can explore different instruments, practise at their own pace, and develop their musical skills.
              </p>
            </div>

            {/* Right: Multi-Photo Collage */}
            <div className="about-environment-collage">
              {/* Primary Large Studio Photo */}
              <div className="about-env-large-tile">
                <img 
                  src="/assets/about_page/env_studio_hall.jpg" 
                  alt="Spacious Shree Music Academy practice hall with upright piano, digital keyboards, and guitars hung on wall"
                  className="about-env-img"
                  loading="lazy"
                />
              </div>

              {/* Stacked Secondary Photos */}
              <div className="about-env-stacked-tiles">
                <div className="about-env-small-tile">
                  <img 
                    src="/assets/about_page/env_tabla_corner.jpg" 
                    alt="Indian rhythm instruments corner with authentic classical tabla and dholak"
                    className="about-env-img"
                    loading="lazy"
                  />
                </div>
                <div className="about-env-small-tile">
                  <img 
                    src="/assets/about_page/env_piano_keys.jpg" 
                    alt="Close-up macro of polished grand piano keys with warm ambient studio reflection"
                    className="about-env-img"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 06 — FINAL CTA (REUSING EXISTING HOME CTA ARCHITECTURE)
            ================================================================= */}
        <CtaSection 
          onNavigate={onNavigate}
          eyebrow="READY TO BEGIN?"
          headingWhite="Begin Your"
          headingGold="Musical Journey"
          description="Explore our courses and find an opportunity to begin learning music."
          primaryBtnText="Explore Our Courses"
          primaryBtnTarget="courses"
          primaryBtnHref="/courses"
        />
      </main>
    </div>
  );
};

export default AboutPage;
