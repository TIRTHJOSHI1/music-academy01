import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Courses } from './components/Courses';
import { Instruments } from './components/Instruments';
import { TeachingApproach } from './components/TeachingApproach';
import { GalleryPreview } from './components/GalleryPreview';
import { CtaSection } from './components/CtaSection';
import { Navbar } from './components/Navbar';
import { ContactSection } from './components/ContactSection';
import { ContactPage } from './pages/ContactPage';
import { GalleryPage } from './pages/GalleryPage';
import { CoursesPage } from './pages/CoursesPage';
import { AboutPage } from './pages/AboutPage';
import { initMotion } from './utils/motion';

function getInitialPage() {
  if (typeof window === 'undefined') return 'home';
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();
  const search = window.location.search.toLowerCase();

  if (
    path.startsWith('/about') ||
    hash === '#/about' ||
    hash === '#about-us' ||
    search.includes('page=about') ||
    search.includes('only=about')
  ) {
    return 'about';
  }

  if (
    path.startsWith('/courses') ||
    hash === '#/courses' ||
    search.includes('page=courses') ||
    search.includes('only=courses_page')
  ) {
    return 'courses';
  }

  if (
    path.startsWith('/gallery') ||
    hash === '#/gallery' ||
    hash === '#gallery' ||
    search.includes('page=gallery') ||
    search.includes('only=gallery_page')
  ) {
    return 'gallery';
  }

  if (
    path.startsWith('/contact') ||
    hash === '#/contact' ||
    hash === '#contact' ||
    search.includes('page=contact') ||
    search.includes('only=contact')
  ) {
    return 'contact';
  }
  return 'home';
}

export function App() {
  const [currentPage, setCurrentPage] = useState(getInitialPage);

  // Sync with browser back/forward and hash changes
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPage(getInitialPage());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  // Initialize smooth scroll & entrance animations on route change
  useEffect(() => {
    let cleanup = null;
    const timer = setTimeout(() => {
      cleanup = initMotion();
    }, 40);

    return () => {
      clearTimeout(timer);
      if (typeof cleanup === 'function') cleanup();
    };
  }, [currentPage]);

  const navigateTo = (page, targetHref = '') => {
    if (page === 'gallery') {
      window.history.pushState(null, '', '/gallery');
      setCurrentPage('gallery');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'contact') {
      window.history.pushState(null, '', '/contact');
      setCurrentPage('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'courses') {
      window.history.pushState(null, '', '/courses');
      setCurrentPage('courses');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'about') {
      window.history.pushState(null, '', '/about');
      setCurrentPage('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to Home
      window.history.pushState(null, '', '/' + (targetHref.startsWith('#') ? targetHref : ''));
      setCurrentPage('home');
      if (targetHref && targetHref.startsWith('#')) {
        setTimeout(() => {
          const el = document.querySelector(targetHref);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 50);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  // Isolation / component inspection helpers
  const search = typeof window !== 'undefined' ? window.location.search : '';
  const isContactOnly = search.includes('only=contact');
  const isCtaOnly = search.includes('only=cta');
  const isGalleryOnly = search.includes('only=gallery');
  const isApproachOnly = search.includes('only=approach');
  const isInstrumentsOnly = search.includes('only=instruments');
  const isCoursesOnly = search.includes('only=courses');
  const isIntroOnly = search.includes('only=intro');

  if (isContactOnly) {
    return (
      <div className="app-container" style={{ background: '#f8f2e7' }}>
        <ContactSection />
      </div>
    );
  }

  if (isCtaOnly) {
    return (
      <div className="app-container" style={{ background: '#0e0804' }}>
        <CtaSection onNavigate={navigateTo} />
      </div>
    );
  }

  if (isGalleryOnly) {
    return (
      <div className="app-container" style={{ background: '#ede0ce' }}>
        <GalleryPreview />
      </div>
    );
  }

  if (isApproachOnly) {
    return (
      <div className="app-container" style={{ background: '#ede0ce' }}>
        <TeachingApproach />
      </div>
    );
  }

  if (isInstrumentsOnly) {
    return (
      <div className="app-container" style={{ background: '#ede0ce' }}>
        <Instruments />
      </div>
    );
  }

  if (isCoursesOnly) {
    return (
      <div className="app-container" style={{ background: '#ede0ce' }}>
        <Courses />
      </div>
    );
  }

  if (isIntroOnly) {
    return (
      <div className="app-container" style={{ background: '#ede0ce' }}>
        <Introduction />
      </div>
    );
  }

  // Dedicated Separate Page: About Us
  if (currentPage === 'about') {
    return (
      <div key="about" className="page-transition-wrap">
        <AboutPage onNavigate={navigateTo} />
      </div>
    );
  }

  // Dedicated Separate Page: Courses
  if (currentPage === 'courses') {
    return (
      <div key="courses" className="page-transition-wrap">
        <CoursesPage onNavigate={navigateTo} />
      </div>
    );
  }

  // Dedicated Separate Page: Gallery
  if (currentPage === 'gallery') {
    return (
      <div key="gallery" className="page-transition-wrap">
        <GalleryPage onNavigate={navigateTo} />
      </div>
    );
  }

  // Dedicated Separate Page: Contact Us
  if (currentPage === 'contact') {
    return (
      <div key="contact" className="page-transition-wrap">
        <ContactPage onNavigate={navigateTo} />
      </div>
    );
  }

  // Default Page: Home Page (Notice: Contact Us is NOT on Home page!)
  return (
    <div key="home" className="app-container page-transition-wrap">
      <Navbar currentPage="home" onNavigate={navigateTo} />
      <Hero />
      <Introduction />
      <Courses />
      <Instruments />
      <TeachingApproach />
      <GalleryPreview />
      <CtaSection onNavigate={navigateTo} />
    </div>
  );
}

export default App;
