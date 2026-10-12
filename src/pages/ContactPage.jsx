import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { ContactSection } from '../components/ContactSection';

export const ContactPage = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Contact Us | Shree Music Academy';
  }, []);

  return (
    <div className="contact-page-wrapper">
      <Navbar currentPage="contact" onNavigate={onNavigate} />
      <main>
        <ContactSection />
      </main>
    </div>
  );
};

export default ContactPage;
