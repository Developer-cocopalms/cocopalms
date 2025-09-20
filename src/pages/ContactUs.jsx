import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient'; // Import the Supabase client
import { Helmet } from 'react-helmet'; 
import { getPageKeywords } from '../pages/hooks/keywordsService';
import { useTranslation } from "react-i18next";

const ContactForm = () => {
    const [keywords, setKeywords] = useState('contact us, get in touch, reach out, support, inquiry');
    const { t, i18n } = useTranslation();
    
    // Get current language direction
    const isRTL = i18n.language === 'ar';
    
    const canonicalUrl = "https://cocopalms.io/contact";

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
    
    useEffect(() => {
        const fetchKeywords = async () => {
          const pageKeywords = await getPageKeywords('contact');
          if (pageKeywords) {
            setKeywords(pageKeywords);
          }
        };
        fetchKeywords();
      }, []);
    
    
       // Update meta description for contact page
useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact Cocopalms for support and inquiries. Our team is ready to assist with your IT solutions and business needs.');
    }
  }, []);
        // Add useEffect for canonical URL in document head (same as WhatWeDo page)
        useEffect(() => {
          // Remove any existing canonical links
          const existingCanonical = document.querySelector("link[rel='canonical']");
          if (existingCanonical) {
            existingCanonical.remove();
          }
  
          // Create and add new canonical link
          const canonicalLink = document.createElement('link');
          canonicalLink.rel = 'canonical';
          canonicalLink.href = canonicalUrl;
          document.head.appendChild(canonicalLink);
  
          // Add robots meta tag if missing
          if (!document.querySelector("meta[name='robots']")) {
            const robotsMeta = document.createElement('meta');
            robotsMeta.name = 'robots';
            robotsMeta.content = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
            document.head.appendChild(robotsMeta);
          }
  
          // Cleanup function
          return () => {
            const canonical = document.querySelector("link[rel='canonical']");
            if (canonical && canonical.href === canonicalUrl) {
              canonical.remove();
            }
          };
        }, [canonicalUrl]);
  
    // Leaflet Map integration
    useEffect(() => {
        const initMap = () => {
            if (mapRef.current && !mapInstanceRef.current) {
                try {
                    const kuwaitLat = 29.3375;
                    const kuwaitLng = 48.0758;
                    
                    const L = window.L;
                    const map = L.map(mapRef.current).setView([kuwaitLat, kuwaitLng], 15);
                    
                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: '© OpenStreetMap contributors',
                        maxZoom: 19,
                    }).addTo(map);
                    
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
                    
                    const marker = L.marker([kuwaitLat, kuwaitLng], { icon: customIcon }).addTo(map);
                    
                    marker.bindPopup(`
                        <div style="font-family: 'Lato', sans-serif; min-width: 200px;">
                            <h3 style="margin: 0 0 8px 0; color: #164772; font-size: 16px; font-weight: bold;">${t('contactUs.map.popupTitle')}</h3>
                            <p style="margin: 0; font-size: 14px; color: #666; line-height: 1.4;">
                                ${t('contactUs.map.popupAddress').split(' ').join('<br>')}
                            </p>
                            <p style="margin: 8px 0 0 0; font-size: 14px; color: #164772; font-weight: 500;">
                                📞 ${t('contactUs.map.popupPhone')}
                            </p>
                        </div>
                    `).openPopup();
                    
                    mapInstanceRef.current = map;
                    
                } catch (error) {
                    console.error('Error initializing map:', error);
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
                                <div style="font-weight: bold; margin-bottom: 4px;">${t('contactUs.map.fallbackTitle')}</div>
                                <div style="text-align: center; font-size: 14px; line-height: 1.4;">
                                    ${t('contactUs.map.fallbackAddress')}
                                </div>
                            </div>
                        `;
                    }
                }
            }
        };

        const loadLeaflet = () => {
            if (window.L) {
                initMap();
                return;
            }

            const cssLink = document.createElement('link');
            cssLink.rel = 'stylesheet';
            cssLink.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
            cssLink.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
            cssLink.crossOrigin = '';
            document.head.appendChild(cssLink);

            const script = document.createElement('script');
            script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
            script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
            script.crossOrigin = '';
            script.onload = initMap;
            document.head.appendChild(script);
        };

        loadLeaflet();

        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, [t]);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleCountryCodeChange = (e) => {
        setSelectedCountryCode(e.target.value);
    };

    // Google Apps Script URL for email notifications
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxyH4dvsglA7VKcdJtA99YGCgXArI6l1qq1gMKvKSNVDQMWNNqL8g2e3IGn-0pLfspy/exec';

    // Updated submit handler for both Supabase and Google Apps Script
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');
        
        const submissionData = {
            name: formData.name,
            mobile: formData.mobile,
            email: formData.email,
            company: formData.company,
            employees: formData.employees,
            subject: formData.subject,
            message: formData.message,
            full_mobile: selectedCountryCode + ' ' + formData.mobile,
            country_code: selectedCountryCode,
            submitted_at: new Date().toISOString(),
            status: 'new'
        };
        
        try {
            // Step 1: Insert data into Supabase
            const { data, error } = await supabase
                .from('contact_submissions')
                .insert([submissionData])
                .select();

            if (error) {
                throw error;
            }

            console.log('Form submitted to database successfully:', data);
            
            // Step 2: Send email notification via Google Apps Script
            try {
                await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors', // Important for Google Apps Script
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(submissionData)
                });
                console.log('Email notification sent successfully');
            } catch (emailError) {
                console.warn('Email notification failed, but data was saved:', emailError);
                // Don't throw error here - data is already saved to database
            }

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
        <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
            <Helmet>
            <title>Contact Us | Cocopalms Support & Inquiries</title>
            <meta 
              name="description" 
              content="Contact Cocopalms for support and inquiries. Our team is ready to assist with your IT solutions and business needs." 
            />
              <meta name="keywords" content={keywords} />
            <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            
            {/* Canonical URL - Multiple approaches for better compatibility */}
            <link rel="canonical" href={canonicalUrl} />
            
            {/* Open Graph Meta Tags */}
            <meta property="og:title" content="Contact Us | Cocopalms - Get in Touch for IT Solutions in Kuwait" />
            <meta property="og:description" content="Contact Cocopalms for expert IT solutions in Kuwait. Get in touch for web development, mobile apps, ERP systems, and digital transformation services. Located in Alsalmiya, Kuwait." />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Cocopalms" />
            
            {/* Additional SEO Meta Tags */}
            <meta name="author" content="Cocopalms" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          </Helmet>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    
                    {/* Left Column - Content */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                {t('contactUs.hero.title').split(' ').map((word, index) => (
                                    <span key={index}>
                                        {word}
                                        {index === 1 ? <br /> : index < t('contactUs.hero.title').split(' ').length - 1 ? ' ' : ''}
                                    </span>
                                ))}
                            </h1>
                            <p className="text-xl text-gray-600 mt-6">
                                {t('contactUs.hero.subtitle')}
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-8 pt-8">
                            <h2 className="text-2xl font-bold text-gray-900">{t('contactUs.contactDetails.title')}</h2>
                            
                            <div className="space-y-4">
                            <div className="space-y-6">
    {/* Kuwait Address */}
    <div className="flex items-start space-x-3">
        <div className={`flex-shrink-0 w-5 h-5 mt-1 ${isRTL ? 'ml-3' : 'mr-3'}`}>
            <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
        </div>
        <div>
            <p className="text-gray-900 font-medium mb-2">{t('contactUs.contactDetails.kuwaitOffice.title')}</p>
            <p className="text-gray-900 font-medium mb-2">
                {t('contactUs.contactDetails.kuwaitOffice.address')}
            </p>
            <p className="text-gray-900 font-medium mb-2">
                {t('contactUs.contactDetails.kuwaitOffice.mobile')}
            </p>
            <p className="text-gray-900 font-medium">
                {t('contactUs.contactDetails.kuwaitOffice.hours')}
            </p>
        </div>
    </div>

    {/* Abu Dhabi Address */}
    <div className="flex items-start space-x-3">
        <div className={`flex-shrink-0 w-5 h-5 mt-1 ${isRTL ? 'ml-3' : 'mr-3'}`}>
            <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
        </div>
        <div>
            <p className="text-gray-900 font-medium mb-2">{t('contactUs.contactDetails.abuDhabiOffice.title')}</p>
            <p className="text-gray-900 font-medium mb-2">
                {t('contactUs.contactDetails.abuDhabiOffice.address')}
            </p>
            <p className="text-gray-900 font-medium">
                {t('contactUs.contactDetails.abuDhabiOffice.hours')}
            </p>
        </div>
    </div>
</div>
                               
                                 <div className="flex items-center space-x-3">
                                    <div className={`flex-shrink-0 w-5 h-5 ${isRTL ? 'ml-3' : 'mr-3'}`}>
                                        <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-900 font-medium">{t('contactUs.contactDetails.email')}</p>
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
                                    {t('contactUs.map.attribution')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="bg-white">
                        <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('contactUs.form.title')}</h2>
                            </div>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                                    <p className="text-green-800 text-sm">✅ {t('contactUs.messages.success')}</p>
                                </div>
                            )}
                            
                            {submitStatus === 'error' && (
                                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                                    <p className="text-red-800 text-sm">❌ {t('contactUs.messages.error')}</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="group">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        {t('contactUs.form.fields.name')} <span className="text-red-500">{t('contactUs.form.required')}</span>
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
                                        {t('contactUs.form.fields.mobile')} <span className="text-red-500">{t('contactUs.form.required')}</span>
                                    </label>
                                    <div className="flex">
                                        <select 
                                            value={selectedCountryCode}
                                            onChange={handleCountryCodeChange}
                                            className={`px-3 py-3 border border-gray-300 ${isRTL ? 'rounded-r-lg' : 'rounded-l-lg'} bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 min-w-0`}
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
                                            className={`flex-1 px-4 py-3 border ${isRTL ? 'border-r-0 rounded-l-lg' : 'border-l-0 rounded-r-lg'} border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200`}
                                            placeholder={t('contactUs.form.placeholders.mobile')}
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>

                                <div className="group">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        {t('contactUs.form.fields.email')} <span className="text-red-500">{t('contactUs.form.required')}</span>
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
                                        {t('contactUs.form.fields.company')} <span className="text-red-500">{t('contactUs.form.required')}</span>
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
                                        {t('contactUs.form.fields.employees')}
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
                                        <option value="">{t('contactUs.form.placeholders.employeesDefault')}</option>
                                        <option value="1-10">{t('contactUs.form.employeeOptions.1-10')}</option>
                                        <option value="11-50">{t('contactUs.form.employeeOptions.11-50')}</option>
                                        <option value="51-200">{t('contactUs.form.employeeOptions.51-200')}</option>
                                        <option value="201-500">{t('contactUs.form.employeeOptions.201-500')}</option>
                                        <option value="501+">{t('contactUs.form.employeeOptions.501+')}</option>
                                    </select>
                                </div>

                                <div className="group">
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        {t('contactUs.form.fields.subject')} <span className="text-red-500">{t('contactUs.form.required')}</span>
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
                                        {t('contactUs.form.fields.message')}
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
                                    {t('contactUs.form.privacyText')}{' '}
                                    <Link to="/privacy-policy" className="text-blue-600 hover:underline">
                                        {t('contactUs.form.privacyLink')}
                                    </Link>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    style={{
                                        backgroundColor: isSubmitting ? '#9CA3AF' : '#164772',
                                        borderColor: isSubmitting ? '#9CA3AF' : '#164772'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isSubmitting) {
                                            e.target.style.backgroundColor = '#0f3556';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isSubmitting) {
                                            e.target.style.backgroundColor = '#164772';
                                        }
                                    }}
                                >
                                    {isSubmitting ? t('contactUs.form.submittingButton') : t('contactUs.form.submitButton')}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;