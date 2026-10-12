import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from '../components/Navbar';
import { initMotion } from '../utils/motion';

export const GalleryPage = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Gallery | Shree Music Academy';
  }, []);

  // Ensure animations/visibility re-initialize when filters change
  useEffect(() => {
    const timer = setTimeout(() => {
      initMotion();
    }, 30);
    return () => clearTimeout(timer);
  }, [activeCategory, showMore]);

  const categories = ['All', 'Classes', 'Instruments', 'Students', 'Events'];

  // All 11 authentic academy photos categorized
  const allGalleryItems = [
    {
      id: 1,
      src: '/assets/gallery_page/photo_6.jpg',
      title: 'Group Music Class & Vocal Session',
      category: 'Classes',
      description: 'Students and mentors gathered on carpet for harmonium, vocal, and acoustic guitar practice.',
      col: 1,
      pos: 'top',
    },
    {
      id: 2,
      src: '/assets/gallery_page/photo_4.jpg',
      title: 'Classroom Practice & Guided Learning',
      category: 'Classes',
      description: 'Engaging group session featuring live teacher guidance, guitar chords, and keyboard lessons.',
      col: 1,
      pos: 'bottom',
    },
    {
      id: 3,
      src: '/assets/gallery_page/photo_10.jpg',
      title: 'Young Guitarists in Training',
      category: 'Instruments',
      description: 'Two dedicated students practicing classical acoustic guitar together in the studio.',
      col: 2,
      pos: 'top',
    },
    {
      id: 4,
      src: '/assets/gallery_page/photo_2.jpg',
      title: 'Traditional Tabla & Rhythm Class',
      category: 'Classes',
      description: 'Classical Indian rhythm training on tabla with teacher accompaniment on dholak.',
      col: 2,
      pos: 'middle',
    },
    {
      id: 5,
      src: '/assets/gallery_page/photo_11.jpg',
      title: 'Keyboard Foundation & Sheet Music',
      category: 'Students',
      description: 'Young learners practicing melody lines on keyboards with headphones and music sheets.',
      col: 2,
      pos: 'bottom',
    },
    {
      id: 6,
      src: '/assets/gallery_page/octapad_girl_ref.jpg',
      title: 'Percussion & Electronic Octapad Practice',
      category: 'Instruments',
      description: 'Energetic young student mastering rhythm precision on multi-pad electronic percussion.',
      col: 3,
      pos: 'top',
    },
    {
      id: 7,
      src: '/assets/gallery_page/photo_5.jpg',
      title: 'Acoustic Guitar Duo',
      category: 'Classes',
      description: 'Joyful duet rehearsal focusing on rhythm balance and chord synchronization.',
      col: 3,
      pos: 'sub-left-top',
    },
    {
      id: 8,
      src: '/assets/gallery_page/photo_7.jpg',
      title: 'Western Keyboard & Synthesizer Practice',
      category: 'Instruments',
      description: 'Intermediate students mastering harmony voicing and digital piano techniques.',
      col: 3,
      pos: 'sub-left-bottom',
    },
    {
      id: 9,
      src: '/assets/gallery_page/photo_9.jpg',
      title: 'Solo Guitar Performance & Confidence',
      category: 'Students',
      description: 'Passionate student performing acoustic guitar in front of the academy instrument wall.',
      col: 3,
      pos: 'sub-right',
    },
    // Extra authentic photos for View More / Events category
    {
      id: 10,
      src: '/assets/gallery_page/photo_8.jpg',
      title: 'Full Academy Ensemble Rehearsal',
      category: 'Events',
      description: 'Combined studio rehearsal session featuring young guitarists, keyboard players, and vocalists.',
      isExtra: true,
    },
    {
      id: 11,
      src: '/assets/gallery_page/photo_1.jpg',
      title: 'Memories & Moments of Shree Academy',
      category: 'Events',
      description: 'Annual milestone celebrations capturing student achievements and performance recitals.',
      isExtra: true,
    },
  ];

  // Filtering Logic
  const filteredItems = allGalleryItems.filter((item) => {
    if (activeCategory === 'All') {
      return showMore ? true : !item.isExtra;
    }
    if (activeCategory === 'Classes') {
      return item.category === 'Classes';
    }
    if (activeCategory === 'Instruments') {
      return item.category === 'Instruments';
    }
    if (activeCategory === 'Students') {
      return item.category === 'Students';
    }
    if (activeCategory === 'Events') {
      return item.category === 'Events' || item.id === 10 || item.id === 11 || item.id === 1;
    }
    return true;
  });

  // Lightbox handlers
  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
  }, []);

  const prevPhoto = useCallback((e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  }, [filteredItems.length]);

  const nextPhoto = useCallback((e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  }, [filteredItems.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'ArrowRight') nextPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, prevPhoto, nextPhoto]);

  // CTA navigation handler
  const handleCoursesClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('courses', '#courses');
    } else {
      window.location.href = '/#courses';
    }
  };

  return (
    <div className="gallery-page-wrapper">
      {/* SECTION A — EXISTING NAVBAR */}
      <Navbar currentPage="gallery" onNavigate={onNavigate} />

      <main className="gallery-main-content">
        {/* SECTION B — GALLERY INTRODUCTION */}
        <section className="gallery-intro-section">
          {/* Subtle Golden Musical Staves/Lines (Left & Right) */}
          <div className="gallery-staves-decor left" aria-hidden="true">
            <img src="/assets/gallery_page/gallery_header_notes_left.png" alt="" />
          </div>
          <div className="gallery-staves-decor right" aria-hidden="true">
            <img src="/assets/gallery_page/gallery_header_notes_right.png" alt="" />
          </div>

          <div className="gallery-intro-container">
            {/* Small Label */}
            <div className="gallery-eyebrow-wrapper">
              <span className="gallery-eyebrow-line left" aria-hidden="true"></span>
              <span className="gallery-eyebrow-text">OUR MUSICAL MOMENTS</span>
              <span className="gallery-eyebrow-line right" aria-hidden="true"></span>
            </div>

            {/* Main Editorial Heading */}
            <h1 className="gallery-main-heading">
              Every Note <span className="gallery-heading-italic">Tells a Story</span>
            </h1>

            {/* Supporting Description */}
            <p className="gallery-description">
              A glimpse into our classes, practice sessions, performances, and musical journey.
            </p>

            {/* SECTION C — GALLERY CATEGORY FILTERS */}
            <div className="gallery-filters-row" role="tablist" aria-label="Gallery Categories">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={isActive}
                    className={`gallery-filter-pill ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION D — MAIN PHOTO GALLERY (ASYMMETRIC EDITORIAL MASONRY) */}
        <section className="gallery-grid-section">
          <div className="gallery-grid-container">
            {activeCategory === 'All' && !showMore ? (
              /* The Exact 8-Photo Editorial Masonry Matching the Reference Image */
              <div className="gallery-editorial-grid">
                
                {/* Column 1 (Left Block) */}
                <div className="gallery-col col-1">
                  {/* Photo 1: Group Music Class */}
                  <div 
                    className="gallery-photo-card col-1-top" 
                    onClick={() => openLightbox(0)}
                    role="button"
                    tabIndex={0}
                    aria-label="View Group Music Class photo"
                  >
                    <img src="/assets/gallery_page/photo_6.jpg" alt="Group Music Class at Shree Music Academy" loading="eager" />
                    <div className="gallery-card-overlay">
                      <span className="gallery-zoom-badge">🔍</span>
                      <span className="gallery-card-caption">Group Music Class</span>
                    </div>
                  </div>

                  {/* Photo 2: Classroom View */}
                  <div 
                    className="gallery-photo-card col-1-bottom" 
                    onClick={() => openLightbox(1)}
                    role="button"
                    tabIndex={0}
                    aria-label="View Classroom Practice photo"
                  >
                    <img src="/assets/gallery_page/photo_4.jpg" alt="Classroom Practice at Shree Music Academy" loading="eager" />
                    <div className="gallery-card-overlay">
                      <span className="gallery-zoom-badge">🔍</span>
                      <span className="gallery-card-caption">Classroom Practice</span>
                    </div>
                  </div>
                </div>

                {/* Column 2 (Middle-Left Block) */}
                <div className="gallery-col col-2">
                  {/* Photo 3: Guitar Boys */}
                  <div 
                    className="gallery-photo-card col-2-top" 
                    onClick={() => openLightbox(2)}
                    role="button"
                    tabIndex={0}
                    aria-label="View Guitar Practice photo"
                  >
                    <img src="/assets/gallery_page/photo_10.jpg" alt="Guitar Practice Session" loading="eager" />
                    <div className="gallery-card-overlay">
                      <span className="gallery-zoom-badge">🔍</span>
                      <span className="gallery-card-caption">Guitar Practice</span>
                    </div>
                  </div>

                  {/* Photo 4: Tabla Class */}
                  <div 
                    className="gallery-photo-card col-2-middle" 
                    onClick={() => openLightbox(3)}
                    role="button"
                    tabIndex={0}
                    aria-label="View Tabla Class photo"
                  >
                    <img src="/assets/gallery_page/photo_2.jpg" alt="Traditional Tabla Class" loading="eager" />
                    <div className="gallery-card-overlay">
                      <span className="gallery-zoom-badge">🔍</span>
                      <span className="gallery-card-caption">Tabla Class</span>
                    </div>
                  </div>

                  {/* Photo 5: Keyboard Girls */}
                  <div 
                    className="gallery-photo-card col-2-bottom" 
                    onClick={() => openLightbox(4)}
                    role="button"
                    tabIndex={0}
                    aria-label="View Keyboard Practice photo"
                  >
                    <img src="/assets/gallery_page/photo_11.jpg" alt="Keyboard Practice with Headsets" loading="eager" />
                    <div className="gallery-card-overlay">
                      <span className="gallery-zoom-badge">🔍</span>
                      <span className="gallery-card-caption">Keyboard Practice</span>
                    </div>
                  </div>
                </div>

                {/* Column 3 (Middle-Right & Right Block Combined) */}
                <div className="gallery-col col-3">
                  {/* Photo 6: Octapad Girl (Spans full width of column 3 at top) */}
                  <div 
                    className="gallery-photo-card col-3-top" 
                    onClick={() => openLightbox(5)}
                    role="button"
                    tabIndex={0}
                    aria-label="View Octapad Training photo"
                  >
                    <img src="/assets/gallery_page/octapad_girl_ref.jpg" alt="Percussion & Octapad Training" loading="eager" />
                    <div className="gallery-card-overlay">
                      <span className="gallery-zoom-badge">🔍</span>
                      <span className="gallery-card-caption">Octapad Practice</span>
                    </div>
                  </div>

                  {/* Lower Sub-Grid of Column 3 */}
                  <div className="gallery-col-3-subrow">
                    {/* Left Sub-Column */}
                    <div className="gallery-subcol-left">
                      {/* Photo 7: Guitar Duo */}
                      <div 
                        className="gallery-photo-card sub-left-top" 
                        onClick={() => openLightbox(6)}
                        role="button"
                        tabIndex={0}
                        aria-label="View Guitar Duo photo"
                      >
                        <img src="/assets/gallery_page/photo_5.jpg" alt="Acoustic Guitar Duo" loading="eager" />
                        <div className="gallery-card-overlay">
                          <span className="gallery-zoom-badge">🔍</span>
                          <span className="gallery-card-caption">Guitar Duo</span>
                        </div>
                      </div>

                      {/* Photo 8: Synthesizer Duo */}
                      <div 
                        className="gallery-photo-card sub-left-bottom" 
                        onClick={() => openLightbox(7)}
                        role="button"
                        tabIndex={0}
                        aria-label="View Synthesizer Duo photo"
                      >
                        <img src="/assets/gallery_page/photo_7.jpg" alt="Synthesizer & Western Keyboard Practice" loading="eager" />
                        <div className="gallery-card-overlay">
                          <span className="gallery-zoom-badge">🔍</span>
                          <span className="gallery-card-caption">Synthesizer Duo</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Sub-Column (Tall Vertical Photo 9) */}
                    <div className="gallery-subcol-right">
                      {/* Photo 9: Tall Solo Guitarist */}
                      <div 
                        className="gallery-photo-card sub-right-tall" 
                        onClick={() => openLightbox(8)}
                        role="button"
                        tabIndex={0}
                        aria-label="View Solo Guitar Performance photo"
                      >
                        <img src="/assets/gallery_page/photo_9.jpg" alt="Solo Guitar Student Performance" loading="eager" />
                        <div className="gallery-card-overlay">
                          <span className="gallery-zoom-badge">🔍</span>
                          <span className="gallery-card-caption">Solo Guitar</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ) : (
              /* Dynamic Filtered / Expanded Grid */
              <div className="gallery-filtered-grid">
                {filteredItems.map((item, idx) => (
                  <div
                    key={item.id}
                    className="gallery-photo-card filtered-card"
                    onClick={() => openLightbox(idx)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${item.title}`}
                  >
                    <img src={item.src} alt={item.title} loading="eager" />
                    <div className="gallery-card-overlay">
                      <span className="gallery-zoom-badge">🔍</span>
                      <span className="gallery-card-caption">{item.title}</span>
                      <span className="gallery-card-tag">{item.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* SECTION 4 — VIEW MORE PHOTOS */}
          <div className="gallery-more-wrapper">
            <div className="gallery-more-ribbon-decor" aria-hidden="true">
              <img src="/assets/gallery_page/gallery_more_notes_ribbon.png" alt="" />
            </div>
            <button
              type="button"
              className="gallery-more-btn"
              onClick={() => setShowMore(!showMore)}
            >
              <span>{showMore ? 'Show Fewer Photos ↑' : 'View More Photos →'}</span>
            </button>
          </div>
        </section>

        {/* SECTION 5 — FINAL CALL-TO-ACTION SECTION */}
        <section className="gallery-cta-section">
          <div className="gallery-cta-inner">
            <div className="gallery-cta-content">
              {/* Small Label */}
              <div className="gallery-cta-eyebrow-wrapper">
                <span className="gallery-cta-eyebrow-line left" aria-hidden="true"></span>
                <span className="gallery-cta-eyebrow-text">STILL HAVE QUESTIONS?</span>
                <span className="gallery-cta-eyebrow-line right" aria-hidden="true"></span>
              </div>

              {/* Main Heading */}
              <h2 className="gallery-cta-heading">
                Be Part of Our <span className="gallery-cta-heading-gold">Musical Story</span>
              </h2>

              {/* Supporting Text */}
              <p className="gallery-cta-desc">
                Start your learning journey with us.
              </p>

              {/* Button */}
              <a 
                href="/#courses" 
                className="gallery-cta-btn" 
                onClick={handleCoursesClick}
              >
                <span>Explore Our Courses</span>
                <span className="cta-btn-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div 
          className="gallery-lightbox-overlay" 
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image Preview"
        >
          <div className="gallery-lightbox-container" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button 
              type="button" 
              className="gallery-lightbox-close" 
              onClick={closeLightbox}
              aria-label="Close Lightbox"
            >
              ✕
            </button>

            {/* Previous Button */}
            <button 
              type="button" 
              className="gallery-lightbox-nav prev" 
              onClick={prevPhoto}
              aria-label="Previous image"
            >
              ‹
            </button>

            {/* Next Button */}
            <button 
              type="button" 
              className="gallery-lightbox-nav next" 
              onClick={nextPhoto}
              aria-label="Next image"
            >
              ›
            </button>

            {/* Main Lightbox Image View */}
            <div className="gallery-lightbox-view">
              <img 
                src={filteredItems[lightboxIndex].src} 
                alt={filteredItems[lightboxIndex].title} 
                className="gallery-lightbox-img"
              />
              <div className="gallery-lightbox-caption-bar">
                <div className="gallery-lightbox-meta">
                  <span className="gallery-lightbox-badge">{filteredItems[lightboxIndex].category}</span>
                  <span className="gallery-lightbox-counter">
                    {lightboxIndex + 1} / {filteredItems.length}
                  </span>
                </div>
                <h3 className="gallery-lightbox-title">{filteredItems[lightboxIndex].title}</h3>
                <p className="gallery-lightbox-desc">{filteredItems[lightboxIndex].description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
