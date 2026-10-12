import React from 'react';
import { BackgroundVideo } from './BackgroundVideo';
import { Navbar } from './Navbar';
import { ScrollIndicator } from './ScrollIndicator';

export const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      {/* Background Video & Dark Overlay */}
      <BackgroundVideo />

      {/* Centered Hero Branding Artwork */}
      <main className="hero-content">
        <div className="logo-artwork-wrapper">
          <img
            src="/assets/hero-logo-main.png"
            alt="Shree Music Academy - Where Every Note Finds Its Soul"
            className="hero-logo-img"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </main>

      {/* Animated Bottom Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
};
