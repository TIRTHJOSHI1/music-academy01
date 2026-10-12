import React from 'react';

export const ScrollIndicator = () => {
  const handleScrollClick = () => {
    const nextSection = document.getElementById('about') || document.body;
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div 
      className="scroll-indicator-container" 
      onClick={handleScrollClick}
      role="button"
      tabIndex={0}
      aria-label="Scroll down to explore"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleScrollClick();
        }
      }}
    >
      {/* Animated Center Soundwave Divider Line */}
      <div className="soundwave-divider" aria-hidden="true">
        <span className="divider-line divider-line-left" />
        <div className="soundwave-bars">
          <span className="wave-bar bar-1" />
          <span className="wave-bar bar-2" />
          <span className="wave-bar bar-3" />
          <span className="wave-bar bar-4" />
          <span className="wave-bar bar-5" />
          <span className="wave-bar bar-6" />
          <span className="wave-bar bar-7" />
        </div>
        <span className="divider-line divider-line-right" />
      </div>

      {/* High-Visibility Scroll To Explore Text */}
      <span className="scroll-text">SCROLL TO EXPLORE</span>

      {/* Animated Mouse Pill & Bouncing Chevron */}
      <div className="mouse-scroll-indicator" aria-hidden="true">
        <div className="mouse-pill">
          <span className="mouse-wheel" />
        </div>
        <svg 
          className="scroll-chevron" 
          viewBox="0 0 16 10" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M2 2L8 8L14 2" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};
