import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        company: '',
        employees: '',
        subject: '',
        message: ''
      });
    
      const [focusedField, setFocusedField] = useState('');
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [submitStatus, setSubmitStatus] = useState('');
      const mapRef = useRef(null);
      const mapInstanceRef = useRef(null);
    
      // Replace this with your Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbweOzABKdtX9nwWqNe_pYcBeOGcy9RTesmkhEqj38ofm1VqKzSA7DDfl1qPW139MTc-/exec'
      // Leaflet Map integration (Free OpenStreetMap)
      useEffect(() => {
        const initMap = () => {
          // Only initialize if we haven't already and the container exists
          if (mapRef.current && !mapInstanceRef.current) {
            try {
              // Kuwait coordinates - Block 68, Salem Al Mubarak Street, Alsalmiya
              const kuwaitLat = 29.3375;
              const kuwaitLng = 48.0758;
              
              // Create map instance
              const L = window.L;
              const map = L.map(mapRef.current).setView([kuwaitLat, kuwaitLng], 15);
              
              // Add OpenStreetMap tiles (completely free)
              L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors',
                maxZoom: 19,
              }).addTo(map);
              
              // Create custom icon
              const customIcon = L.divIcon({
                html: `
                  <div style="
                    width: 30px; 
                    height: 30px; 
                    background-color: #164772; 
                    border: 3px solid white; 
                    border-radius: 50%; 
                    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  ">
                    <div style="
                      width: 12px; 
                      height: 12px; 
                      background-color: white; 
                      border-radius: 50%;
                    "></div>
                  </div>
                `,
                className: 'custom-map-marker',
                iconSize: [30, 30],
                iconAnchor: [15, 15],
                popupAnchor: [0, -15]
              });
              
              // Add marker
              const marker = L.marker([kuwaitLat, kuwaitLng], { icon: customIcon }).addTo(map);
              
              // Add popup
              marker.bindPopup(`
                <div style="font-family: 'Lato', sans-serif; min-width: 200px;">
                  <h3 style="margin: 0 0 8px 0; color: #164772; font-size: 16px; font-weight: bold;">Cocopalms</h3>
                  <p style="margin: 0; font-size: 14px; color: #666; line-height: 1.4;">
                    Block 2, Salem Al Mubarak Street<br>
                    Dolphin Hotel Commercial Tower<br>
                    Alsalmiya, Kuwait
                  </p>
                  <p style="margin: 8px 0 0 0; font-size: 14px; color: #164772; font-weight: 500;">
                    📞 +965 9918 5891
                  </p>
                </div>
              `).openPopup();
              
              mapInstanceRef.current = map;
              
            } catch (error) {
              console.error('Error initializing map:', error);
              // Fallback to static map placeholder
              if (mapRef.current) {
                mapRef.current.innerHTML = `
                  <div style="
                    width: 100%; 
                    height: 100%; 
                    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
                    display: flex; 
                    flex-direction: column;
                    align-items: center; 
                    justify-content: center;
                    color: #666;
                    border-radius: 8px;
                  ">
                    <div style="font-size: 48px; margin-bottom: 12px;">📍</div>
                    <div style="font-weight: bold; margin-bottom: 4px;">Coco Palms Office</div>
                    <div style="text-align: center; font-size: 14px; line-height: 1.4;">
                      Block 2, Salem Al Mubarak Street<br>
                      Alsalmiya, Kuwait
                    </div>
                  </div>
                `;
              }
            }
          }
        };

        // Load Leaflet CSS and JS dynamically
        const loadLeaflet = () => {
          // Check if Leaflet is already loaded
          if (window.L) {
            initMap();
            return;
          }

          // Load Leaflet CSS
          const cssLink = document.createElement('link');
          cssLink.rel = 'stylesheet';
          cssLink.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
          cssLink.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
          cssLink.crossOrigin = '';
          document.head.appendChild(cssLink);

          // Load Leaflet JS
          const script = document.createElement('script');
          script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
          script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
          script.crossOrigin = '';
          script.onload = initMap;
          document.head.appendChild(script);
        };

        loadLeaflet();

        // Cleanup function
        return () => {
          if (mapInstanceRef.current) {
            mapInstanceRef.current.remove();
            mapInstanceRef.current = null;
          }
        };
      }, []);

      // Country codes array with Kuwait as default
      const countryCodes = [
        { code: '+965', country: 'Kuwait' },
        { code: '+61', country: 'Australia' },
        { code: '+973', country: 'Bahrain' },
        { code: '+32', country: 'Belgium' },
        { code: '+55', country: 'Brazil' },
        { code: '+1', country: 'Canada' },
        { code: '+86', country: 'China' },
        { code: '+45', country: 'Denmark' },
        { code: '+20', country: 'Egypt' },
        { code: '+33', country: 'France' },
        { code: '+49', country: 'Germany' },
        { code: '+91', country: 'India' },
        { code: '+62', country: 'Indonesia' },
        { code: '+353', country: 'Ireland' },
        { code: '+39', country: 'Italy' },
        { code: '+81', country: 'Japan' },
        { code: '+60', country: 'Malaysia' },
        { code: '+52', country: 'Mexico' },
        { code: '+31', country: 'Netherlands' },
        { code: '+64', country: 'New Zealand' },
        { code: '+47', country: 'Norway' },
        { code: '+968', country: 'Oman' },
        { code: '+63', country: 'Philippines' },
        { code: '+48', country: 'Poland' },
        { code: '+974', country: 'Qatar' },
        { code: '+7', country: 'Russia' },
        { code: '+966', country: 'Saudi Arabia' },
        { code: '+65', country: 'Singapore' },
        { code: '+82', country: 'South Korea' },
        { code: '+34', country: 'Spain' },
        { code: '+46', country: 'Sweden' },
        { code: '+41', country: 'Switzerland' },
        { code: '+66', country: 'Thailand' },
        { code: '+90', country: 'Turkey' },
        { code: '+971', country: 'UAE' },
        { code: '+44', country: 'UK' },
        { code: '+1', country: 'US' },
        { code: '+84', country: 'Vietnam' }
      ];

      const [selectedCountryCode, setSelectedCountryCode] = useState('+965');
    
      const handleInputChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

      const handleCountryCodeChange = (e) => {
        setSelectedCountryCode(e.target.value);
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');
        
        const submissionData = {
          ...formData,
          fullMobile: selectedCountryCode + ' ' + formData.mobile
        };
        
        try {
          // Send data to Google Sheets
          const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // Important for Google Apps Script
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(submissionData)
          });
          
          // Note: Due to no-cors mode, we can't read the response
          // But if no error is thrown, we can assume it worked
          setSubmitStatus('success');
          
          // Reset form
          setFormData({
            name: '',
            mobile: '',
            email: '',
            company: '',
            employees: '',
            subject: '',
            message: ''
          });
          setSelectedCountryCode('+965');
          
        } catch (error) {
          console.error('Error submitting form:', error);
          setSubmitStatus('error');
        } finally {
          setIsSubmitting(false);
        }
      };
    
      return (
        <div className="min-h-screen bg-white">
          
          <Helmet>
          <link rel="canonical" href="https://cocopalms.io/contact"/>
      </Helmet>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* Left Column - Content */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Looking for<br />
                    something?
                  </h1>
                  <p className="text-xl text-gray-600 mt-6">
                    We are happy to help
                  </p>
                </div>
    
                {/* Contact Details */}
                <div className="space-y-8 pt-8">
                  <h2 className="text-2xl font-bold text-gray-900">Contact Directly</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 mt-1">
                        <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-900 font-medium">
                          Block 2, Salem Al Mubarak Street, Dolphin<br />
                          Hotel commercial tower, Alsalmiya, Kuwait
                        </p>
                      </div>
                    </div>
    
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-5 h-5">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <p className="text-gray-900 font-medium">+965 9918 5891</p>
                    </div>
    
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-5 h-5">
                        <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <p className="text-gray-900 font-medium">info@cocopalms.io</p>
                    </div>
                  </div>
    
                  {/* Free Leaflet Map */}
                  <div className="mt-8">
                    <div 
                      ref={mapRef} 
                      className="w-full h-64 bg-gray-200 rounded-lg shadow-lg"
                      style={{ minHeight: '256px', borderRadius: '8px' }}
                    />
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      Powered by OpenStreetMap - Completely Free
                    </p>
                  </div>
                </div>
              </div>
    
              {/* Right Column - Form */}
              <div className="bg-white">
                <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Get in touch</h2>
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 text-sm">✅ Form submitted successfully! We will get back to you soon.</p>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800 text-sm">❌ There was an error submitting the form. Please try again.</p>
                    </div>
                  )}
    
                  <div className="space-y-6">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField('')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        placeholder=""
                        disabled={isSubmitting}
                      />
                    </div>
    
                    <div className="group">
                      <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                        Mobile <span className="text-red-500">*</span>
                      </label>
                      <div className="flex">
                        <select 
                          value={selectedCountryCode}
                          onChange={handleCountryCodeChange}
                          className="px-3 py-3 border border-gray-300 rounded-l-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 min-w-0"
                          style={{ minWidth: '140px', maxWidth: '140px' }}
                          disabled={isSubmitting}
                        >
                          {countryCodes.map((country) => (
                            <option key={`${country.code}-${country.country}`} value={country.code}>
                              {country.country} ({country.code})
                            </option>
                          ))}
                        </select>
                        <input
                          id="mobile"
                          name="mobile"
                          type="tel"
                          required
                          value={formData.mobile}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('mobile')}
                          onBlur={() => setFocusedField('')}
                          className="flex-1 px-4 py-3 border border-l-0 border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter mobile number"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
    
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField('')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        placeholder=""
                        disabled={isSubmitting}
                      />
                    </div>
    
                    <div className="group">
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField('')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        placeholder=""
                        disabled={isSubmitting}
                      />
                    </div>
    
                    <div className="group">
                      <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Employees
                      </label>
                      <select
                        id="employees"
                        name="employees"
                        value={formData.employees}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('employees')}
                        onBlur={() => setFocusedField('')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-white"
                        disabled={isSubmitting}
                      >
                        <option value="">Select...</option>
                        <option value="1-10">1-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51-200">51-200</option>
                        <option value="201-500">201-500</option>
                        <option value="501+">501+</option>
                      </select>
                    </div>
    
                    <div className="group">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField('')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        placeholder=""
                        disabled={isSubmitting}
                      />
                    </div>
    
                    <div className="group">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField('')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder=""
                        disabled={isSubmitting}
                      />
                    </div>
    
                    <div className="text-sm text-gray-600">
                      By submitting this form, you agree to our{' '}
                      <Link to="/privacy-policy" className="text-blue-600 hover:underline">
  Privacy Policy
</Link>
                    </div>
    
                    <button
  type="button"
  onClick={handleSubmit}
  disabled={isSubmitting}
  className="w-full text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
  style={{
    backgroundColor: isSubmitting ? '#9CA3AF' : '#0d9488',
    borderColor: isSubmitting ? '#9CA3AF' : '#0d9488'
  }}
  onMouseEnter={(e) => {
    if (!isSubmitting) {
      e.target.style.backgroundColor = '#0d9488';
    }
  }}
  onMouseLeave={(e) => {
    if (!isSubmitting) {
      e.target.style.backgroundColor = '#0f766e';
    }
  }}
>
  {isSubmitting ? 'Submitting...' : 'Submit'}
</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    
};

export default ContactForm;