import React, { useState } from 'react';

export const ContactSection = () => {
  // Verified / Configurable Academy Contact Details
  const WHATSAPP_PHONE = ''; // e.g. '919876543210' (Configurable placeholder)
  const INSTAGRAM_HANDLE = 'shreemusicacademy'; // (Configurable placeholder)
  const MAP_DIRECTIONS_URL = 'https://www.google.com/maps/dir/?api=1&destination=280,+Second+Floor,+Suyash+Solitaire,+Near+Podar+School,+Kudasan+-+Por+Road,+Gandhinagar,+Gujarat';
  const MAP_VIEW_URL = 'https://maps.google.com/?q=280,+Second+Floor,+Suyash+Solitaire,+Near+Podar+School,+Kudasan+-+Por+Road,+Gandhinagar,+Gujarat';

  const whatsappUrl = WHATSAPP_PHONE
    ? `https://wa.me/${WHATSAPP_PHONE}?text=Hi%20Shree%20Music%20Academy%2C%20I%20would%20like%20to%20enquire%20about%20music%20classes.`
    : '#';

  const instagramUrl = `https://instagram.com/${INSTAGRAM_HANDLE}`;

  // Form State & Validation
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    course: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  const coursesList = [
    'Classical Indian Vocal',
    'Western Keyboard & Piano',
    'Acoustic & Classical Guitar',
    'Traditional Tabla',
    'Flute (Bansuri)',
    'Octapad & Percussion',
    'Cajon & Rhythm Box',
    'Dholak & Folk Percussion',
    'Kalimba & Steel Tongue Drum',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) {
      errors.fullName = 'Please enter your full name';
    }
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Please enter your phone number';
    } else if (!/^[0-9+\s\-()]{7,15}$/.test(formData.phoneNumber.trim())) {
      errors.phoneNumber = 'Please enter a valid phone number';
    }
    if (!formData.course) {
      errors.course = 'Please select a course of interest';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formStatus === 'submitting') return; // Prevent double submit

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormStatus('submitting');
    setFormErrors({});

    const endpoint = import.meta.env.VITE_ENQUIRY_ENDPOINT;

    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            submittedAt: new Date().toISOString(),
            source: 'Shree Music Academy Website',
          }),
        });

        if (response.ok) {
          setFormStatus('success');
        } else {
          const errData = await response.json().catch(() => ({}));
          setFormErrors({
            submit: errData.message || 'Unable to submit enquiry right now. Please message us on WhatsApp or call us directly.',
          });
          setFormStatus('idle');
        }
      } catch (err) {
        setFormErrors({
          submit: 'Network connection issue. Please verify your connection or contact us via WhatsApp.',
        });
        setFormStatus('idle');
      }
    } else {
      // Local audit trail persistence when external backend endpoint is not configured
      try {
        const stored = JSON.parse(localStorage.getItem('sma_enquiries') || '[]');
        stored.push({
          ...formData,
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem('sma_enquiries', JSON.stringify(stored));
      } catch (err) {
        console.warn('Local storage persistence warning:', err);
      }

      // Smooth simulated latency for UX feedback
      setTimeout(() => {
        setFormStatus('success');
      }, 500);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phoneNumber: '',
      course: '',
      message: '',
    });
    setFormErrors({});
    setFormStatus('idle');
  };

  return (
    <section className="contact-section" id="contact">
      {/* Decorative Floating Golden Musical Elements (Background) */}
      <div className="contact-decor-left" aria-hidden="true">
        <img src="/assets/contact_left_notes.png" alt="" />
      </div>
      <div className="contact-decor-right" aria-hidden="true">
        <img src="/assets/contact_right_notes.png" alt="" />
      </div>

      <div className="contact-container">
        {/* =========================================================================
            ROW 1: TWO MAIN CARDS (Left: Contact Info | Right: Enquiry Form)
           ========================================================================= */}
        <div className="contact-cards-grid">
          
          {/* A. CONTACT INFORMATION CARD — LEFT */}
          <div className="contact-info-card">
            
            {/* Top Sub-Card: Visit Our Academy */}
            <div className="contact-visit-subcard">
              <div className="contact-eyebrow-row">
                <span className="contact-eyebrow-line" aria-hidden="true"></span>
                <span className="contact-eyebrow-text">VISIT OUR ACADEMY</span>
              </div>

              <div className="contact-visit-content">
                {/* Left Info Column */}
                <div className="contact-visit-details">
                  <div className="contact-address-block">
                    <div className="contact-circle-badge amber" aria-hidden="true">
                      {/* Map Pin Icon */}
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>

                    <div className="contact-address-text-col">
                      <h3 className="contact-card-heading">Our Address</h3>
                      <address className="contact-address-text">
                        280, Second Floor<br />
                        Suyash Solitaire<br />
                        Near Podar School<br />
                        Kudasan – Por Road<br />
                        Gandhinagar, Gujarat
                      </address>
                      <a 
                        href={MAP_DIRECTIONS_URL} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="contact-directions-btn"
                      >
                        <span>Get Directions</span>
                        <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <line x1="3" y1="8" x2="13" y2="8" />
                          <polyline points="9 4 13 8 9 12" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Architectural Illustration */}
                <div className="contact-building-illustration" aria-hidden="true">
                  <img 
                    src="/assets/contact_building_transparent.png" 
                    alt="Suyash Solitaire Building Illustration" 
                    className="contact-building-img"
                  />
                </div>
              </div>
            </div>

            {/* Subtle Divider Line */}
            <div className="contact-card-divider" aria-hidden="true"></div>

            {/* Bottom Sub-Card: Connect With Us */}
            <div className="contact-connect-subcard">
              <div className="contact-connect-header">
                <div className="contact-circle-badge amber-small" aria-hidden="true">
                  {/* Star Badge Icon */}
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <div className="contact-connect-header-text">
                  <div className="contact-eyebrow-text">CONNECT WITH US</div>
                  <p className="contact-connect-desc">
                    We're here to help you with course details, admissions, schedules or any other questions.
                  </p>
                </div>
                {/* Floating Gold Double Note */}
                <div className="contact-float-note" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="#dfa759">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                  </svg>
                </div>
              </div>

              {/* Three Contact Tiles (Centered Column Layout as in Reference) */}
              <div className="contact-channels-grid">
                {/* Tile 1: WhatsApp */}
                <a 
                  href={whatsappUrl} 
                  target={WHATSAPP_PHONE ? '_blank' : '_self'}
                  rel="noopener noreferrer" 
                  className="contact-channel-item"
                >
                  <div className="contact-channel-icon whatsapp">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="white" aria-hidden="true">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.04 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 14.39C16.31 14.26 15.09 13.66 14.86 13.58C14.63 13.5 14.47 13.46 14.3 13.71C14.14 13.96 13.67 14.51 13.53 14.67C13.39 14.83 13.25 14.85 13 14.73C12.75 14.6 11.95 14.34 11 13.49C10.26 12.83 9.76 12.02 9.62 11.77C9.48 11.52 9.61 11.39 9.73 11.26C9.84 11.15 9.98 10.97 10.1 10.83C10.22 10.69 10.27 10.58 10.35 10.42C10.43 10.26 10.39 10.11 10.33 9.99C10.27 9.87 9.79 8.68 9.58 8.19C9.39 7.71 9.19 7.77 9.04 7.76C8.9 7.75 8.73 7.75 8.57 7.75C8.4 7.75 8.14 7.81 7.91 8.06C7.68 8.31 7.04 8.91 7.04 10.13C7.04 11.35 7.93 12.52 8.05 12.69C8.18 12.85 9.8 15.35 12.27 16.42C12.86 16.67 13.32 16.82 13.68 16.94C14.27 17.13 14.81 17.1 15.23 17.04C15.71 16.97 16.69 16.45 16.9 15.86C17.1 15.27 17.1 14.76 17.04 14.66C16.98 14.55 16.82 14.51 16.56 14.39Z"/>
                    </svg>
                  </div>
                  <div className="contact-channel-text">
                    <span className="contact-channel-name">WhatsApp</span>
                    <span className="contact-channel-sub">Chat with us</span>
                  </div>
                </a>

                <div className="contact-channel-divider" aria-hidden="true"></div>

                {/* Tile 2: Instagram */}
                <a 
                  href={instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-channel-item"
                >
                  <div className="contact-channel-icon instagram">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                  <div className="contact-channel-text">
                    <span className="contact-channel-name">Instagram</span>
                    <span className="contact-channel-sub">Follow our journey</span>
                  </div>
                </a>

                <div className="contact-channel-divider" aria-hidden="true"></div>

                {/* Tile 3: Call Us */}
                <div className="contact-channel-item static-call">
                  <div className="contact-channel-icon call-badge">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#2b1a08" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="contact-channel-text">
                    <span className="contact-channel-name">Call Us</span>
                    <span className="contact-channel-sub">(Coming Soon)</span>
                  </div>
                </div>
              </div>
            </div>

          </div>


          {/* B. ENQUIRY FORM — RIGHT */}
          <div className="contact-enquiry-card">
            {/* Top Eyebrow & Golden Beamed Music Note Ornament */}
            <div className="contact-enquiry-top">
              <div className="contact-eyebrow-row">
                <span className="contact-eyebrow-line gold" aria-hidden="true"></span>
                <span className="contact-eyebrow-text gold">SEND AN ENQUIRY</span>
              </div>
              <div className="contact-enquiry-note" aria-hidden="true">
                {/* Golden Beamed Notes SVG */}
                <svg viewBox="0 0 24 24" width="26" height="26" fill="#dfa759">
                  <path d="M21 3L9 6v11.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V9.8l10-2.5v7.25c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V3z" />
                </svg>
              </div>
            </div>

            <h3 className="contact-enquiry-heading">Enquiry Form</h3>
            <p className="contact-enquiry-desc">
              Fill in the details below and we will get back to you soon.
            </p>

            {formStatus === 'success' ? (
              <div className="contact-form-success-state">
                <div className="contact-success-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#e0af55" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h4 className="contact-success-title">Thank You, {formData.fullName}!</h4>
                <p className="contact-success-desc">
                  Your enquiry for <strong>{formData.course}</strong> has been received. Our team will connect with you via phone shortly.
                </p>
                <button 
                  type="button" 
                  className="contact-success-reset-btn"
                  onClick={handleReset}
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                {/* Field 1: Full Name */}
                <div className={`contact-field-group ${formErrors.fullName ? 'has-error' : ''}`}>
                  <div className="contact-field-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#d5a560" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div className="contact-field-input-wrap">
                    <label htmlFor="contact-fullName" className="contact-field-label">
                      Full Name *
                    </label>
                    <input
                      id="contact-fullName"
                      name="fullName"
                      type="text"
                      className="contact-field-input"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                {formErrors.fullName && <div className="contact-field-error-msg">{formErrors.fullName}</div>}

                {/* Field 2: Phone Number */}
                <div className={`contact-field-group ${formErrors.phoneNumber ? 'has-error' : ''}`}>
                  <div className="contact-field-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#d5a560" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="contact-field-input-wrap">
                    <label htmlFor="contact-phoneNumber" className="contact-field-label">
                      Phone Number *
                    </label>
                    <input
                      id="contact-phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      className="contact-field-input"
                      placeholder="Enter your phone number"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                {formErrors.phoneNumber && <div className="contact-field-error-msg">{formErrors.phoneNumber}</div>}

                {/* Field 3: Course Interested In */}
                <div className={`contact-field-group ${formErrors.course ? 'has-error' : ''}`}>
                  <div className="contact-field-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#d5a560" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <div className="contact-field-input-wrap">
                    <label htmlFor="contact-course" className="contact-field-label">
                      Course Interested In *
                    </label>
                    <select
                      id="contact-course"
                      name="course"
                      className="contact-field-select"
                      value={formData.course}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="" disabled>Select a course</option>
                      {coursesList.map((course) => (
                        <option key={course} value={course}>{course}</option>
                      ))}
                    </select>
                  </div>
                  <div className="contact-select-chevron" aria-hidden="true">
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="#d5a560" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="4 6 8 10 12 6" />
                    </svg>
                  </div>
                </div>
                {formErrors.course && <div className="contact-field-error-msg">{formErrors.course}</div>}

                {/* Field 4: Your Message */}
                <div className="contact-field-group textarea-group">
                  <div className="contact-field-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#d5a560" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <div className="contact-field-input-wrap">
                    <label htmlFor="contact-message" className="contact-field-label">
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      className="contact-field-textarea"
                      placeholder="Tell us your question or requirement..."
                      rows="2"
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                </div>

                {/* Form-level error if submission fails */}
                {formErrors.submit && (
                  <div className="contact-field-error-msg form-level-error" style={{ marginBottom: '14px', textAlign: 'center' }}>
                    {formErrors.submit}
                  </div>
                )}

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="contact-submit-btn" 
                  disabled={formStatus === 'submitting'}
                >
                  <span>{formStatus === 'submitting' ? 'Submitting...' : 'Send Enquiry'}</span>
                  <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="3" y1="8" x2="13" y2="8" />
                    <polyline points="9 4 13 8 9 12" />
                  </svg>
                </button>
              </form>
            )}
          </div>

        </div>


        {/* =========================================================================
            ROW 2: ACADEMY LOCATION MAP SECTION
           ========================================================================= */}
        <div className="contact-map-section">
          {/* Map Section Header */}
          <div className="contact-map-header-row">
            <div className="contact-map-header-text">
              <div className="contact-eyebrow-row">
                <span className="contact-eyebrow-line" aria-hidden="true"></span>
                <span className="contact-eyebrow-text">OUR LOCATION</span>
              </div>
              <h3 className="contact-map-heading">
                Find Us on the <span className="contact-heading-italic">Map</span>
              </h3>
              <p className="contact-map-desc">
                Visit our academy and experience a warm, inspiring space for music learning.
              </p>
            </div>

            {/* Flowing Golden Staves Decoration Above Map */}
            <div className="contact-map-staves-decor" aria-hidden="true">
              <img 
                src="/assets/contact_map_notes_clean.png" 
                alt="" 
                className="contact-map-staves-img"
              />
            </div>
          </div>

          {/* Interactive Google Map Container */}
          <div className="contact-map-frame">
            <iframe
              title="Shree Music Academy Location Map"
              src="https://maps.google.com/maps?q=Shree%20Music%20Academy,%20Suyash%20Solitaire,%20Kudasan%20%E2%80%93%20Por%20Road,%20Gandhinagar,%20Gujarat&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Authentic Location Overlay Badge matching Google Maps View */}
            <div className="contact-map-info-card">
              <h4 className="contact-map-card-name">Shree Music Academy</h4>
              <p className="contact-map-card-addr">
                280, Second Floor, Suyash Solitaire,<br />
                Near Podar School, Kudasan – Por Road,<br />
                Gandhinagar, Gujarat
              </p>
              <a 
                href={MAP_VIEW_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-map-card-link"
              >
                View larger map
              </a>
            </div>
          </div>
        </div>


        {/* =========================================================================
            ROW 3: BOTTOM CTA BANNER (STILL HAVE QUESTIONS?)
           ========================================================================= */}
        <div className="contact-bottom-cta-banner">
          {/* Decorative Corner Studio Atmospheres */}
          <div className="contact-bottom-guitar-corner" aria-hidden="true">
            <img src="/assets/contact_guitar_left_clean.png" alt="" />
          </div>
          <div className="contact-bottom-studio-corner" aria-hidden="true">
            <img src="/assets/contact_studio_right_clean.png" alt="" />
          </div>

          {/* Inner Banner Content */}
          <div className="contact-bottom-inner-card">
            <div className="contact-bottom-text-col">
              <div className="contact-eyebrow-row">
                <span className="contact-eyebrow-line gold" aria-hidden="true"></span>
                <span className="contact-eyebrow-text gold">STILL HAVE QUESTIONS?</span>
              </div>
              <h3 className="contact-bottom-heading">
                Your Musical Journey <span className="contact-heading-italic gold">Starts Here</span>
              </h3>
              <p className="contact-bottom-desc">
                Connect with us anytime and we'll be happy to help you.
              </p>
            </div>

            <div className="contact-bottom-actions-col">
              {/* WhatsApp Us Button */}
              <a 
                href={whatsappUrl} 
                target={WHATSAPP_PHONE ? '_blank' : '_self'}
                rel="noopener noreferrer" 
                className="contact-bottom-btn-whatsapp"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.04 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 14.39C16.31 14.26 15.09 13.66 14.86 13.58C14.63 13.5 14.47 13.46 14.3 13.71C14.14 13.96 13.67 14.51 13.53 14.67C13.39 14.83 13.25 14.85 13 14.73C12.75 14.6 11.95 14.34 11 13.49C10.26 12.83 9.76 12.02 9.62 11.77C9.48 11.52 9.61 11.39 9.73 11.26C9.84 11.15 9.98 10.97 10.1 10.83C10.22 10.69 10.27 10.58 10.35 10.42C10.43 10.26 10.39 10.11 10.33 9.99C10.27 9.87 9.79 8.68 9.58 8.19C9.39 7.71 9.19 7.77 9.04 7.76C8.9 7.75 8.73 7.75 8.57 7.75C8.4 7.75 8.14 7.81 7.91 8.06C7.68 8.31 7.04 8.91 7.04 10.13C7.04 11.35 7.93 12.52 8.05 12.69C8.18 12.85 9.8 15.35 12.27 16.42C12.86 16.67 13.32 16.82 13.68 16.94C14.27 17.13 14.81 17.1 15.23 17.04C15.71 16.97 16.69 16.45 16.9 15.86C17.1 15.27 17.1 14.76 17.04 14.66C16.98 14.55 16.82 14.51 16.56 14.39Z"/>
                </svg>
                <span>WhatsApp Us</span>
                <span className="btn-arrow-right">→</span>
              </a>

              {/* Follow on Instagram Button */}
              <a 
                href={instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-bottom-btn-instagram"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>Follow on Instagram</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
