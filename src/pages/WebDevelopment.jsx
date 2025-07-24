import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Monitor, Code, Smartphone, Globe, Zap, Shield, ExternalLink } from 'lucide-react';
import dietbuxImage from '../assets/dietbuxw.png';
import dietvalueImage from '../assets/dietvaluew.png';
import dieterImage from '../assets/dieterw.png';
import basicImage from '../assets/basicw.png';
import alnassemImage from '../assets/alnassemw.png';
import techbizImage from '../assets/techbizw.png';
import { Helmet } from 'react-helmet';
const WebDevelopment = () => {
  // Canonical URL
  const canonicalUrl = "https://cocopalms.io/what-we-do/web-development";

  // Add useEffect for canonical URL in document head (same pattern as AboutUs and WhatWeDo)
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

  return (
    <div className="min-h-screen">
       <Helmet>
        <title>Web Development Services for F&B & Enterprise | Cocopalms</title>
        <meta 
          name="description" 
          content="Professional web development services in Kuwait. Custom websites, web applications, responsive design, and modern web solutions. View our portfolio of successful projects." 
        />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Canonical URL - Multiple approaches for better compatibility */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Web Development Services | Cocopalms - Custom Websites & Web Apps" />
        <meta property="og:description" content="Professional web development services in Kuwait. Custom websites, web applications, responsive design, and modern web solutions. View our portfolio of successful projects." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Cocopalms" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Development Services | Cocopalms - Custom Websites & Web Apps" />
        <meta name="twitter:description" content="Professional web development services in Kuwait. Custom websites, web applications, responsive design, and modern web solutions. View our portfolio of successful projects." />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Cocopalms" />
        <meta name="keywords" content="web development Kuwait, custom websites, web applications, responsive design, React development, modern web solutions, Kuwait web developers" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Web Development Services",
            "provider": {
              "@type": "Organization",
              "name": "Cocopalms"
            },
            "description": "Professional web development services in Kuwait. Custom websites, web applications, responsive design, and modern web solutions.",
            "url": canonicalUrl,
            "serviceType": "Web Development",
            "areaServed": "Kuwait"
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-custom-teal py-20 md:py-32 px-4 mt-24 md:mt-24">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="bg-white/15 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mb-8 mx-auto">
            <Monitor className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Web Development
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 mb-6 md:mb-8">
            Professional websites and web applications for businesses from startup to enterprise level
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto px-4">
            Transform your digital presence with our cutting-edge web development solutions. We create responsive, scalable, and user-friendly websites that drive business growth.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Showcasing successful web projects we've delivered for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Dietbux Project */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={dietbuxImage} 
                  alt="Dietbux Website"
                  className="w-full h-64 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <a 
                    href="https://dietbux.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dietbux</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  A comprehensive diet and nutrition platform offering personalized meal plans, calorie tracking, and subscription-based diet services. The website features a modern design with interactive elements and seamless user experience.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">React</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Responsive Design</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">E-commerce</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Arabic/English</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Multi-language support (Arabic & English)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Subscription management system</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Calorie calculator integration</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dietvalue Project */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={dietvalueImage} 
                  alt="Dietvalue Website"
                  className="w-full h-64 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <a 
                    href="https://dietvaluekw.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dietvalue</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  A premium diet delivery service platform focused on healthy meal subscriptions in Kuwait. Features elegant Arabic typography, smooth animations, and an intuitive ordering system for customers seeking nutritious meal plans.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Modern UI</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Food Delivery</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Arabic Design</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Kuwait Market</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">RTL (Right-to-Left) Arabic layout</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Online ordering</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Elegant food presentation design</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dieter Project */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={dieterImage} 
                  alt="Dieter Website"
                  className="w-full h-64 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <a 
                    href="https://dieterkwt.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dieter</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  A specialized diet and nutrition service platform for the Kuwait market. Offering customized meal plans, nutrition consultations, and health-focused food delivery services with a user-friendly interface designed for Arabic-speaking customers.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Kuwait Focus</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Nutrition Plans</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Health Services</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Arabic Interface</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Customized meal planning system</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Nutrition consultation booking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Health-focused service delivery</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Basic Project */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={basicImage} 
                  alt="Basic Website"
                  className="w-full h-64 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <a 
                    href="https://basickw.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  A clean and minimalist business website showcasing essential services and information. Built with a focus on simplicity, fast loading times, and clear navigation to provide visitors with a straightforward user experience.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Minimalist Design</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Fast Loading</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Clean UI</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Business Focus</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Simple and intuitive navigation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Optimized performance and speed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Professional business presentation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Alnassem Glass Project */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={alnassemImage} 
                  alt="Alnassem Glass Website"
                  className="w-full h-64 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <a 
                    href="https://nsmglass.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Alnassem Glass</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  A professional glass manufacturing and installation company website showcasing premium glass products and services. Features elegant product galleries, service portfolios, and streamlined contact systems for custom glass solutions.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Manufacturing</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Product Gallery</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">B2B Services</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Professional</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Comprehensive product showcase</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Custom glass solutions portal</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Industry-focused design approach</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Techbiz Project */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={techbizImage} 
                  alt="Techbiz Website"
                  className="w-full h-64 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <a 
                    href="https://www.techbizsolutions.io/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Techbiz</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  A comprehensive technology solutions platform offering software development, IT consulting, and digital transformation services. Built with modern frameworks and featuring interactive elements to showcase technical expertise and service capabilities.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Tech Solutions</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">IT Consulting</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Modern Stack</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Enterprise</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Advanced technology showcase</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Service portfolio management</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Interactive client engagement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Building Digital Excellence
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our web development team combines technical expertise with creative design to deliver exceptional web solutions. From simple business websites to complex web applications, we ensure your online presence reflects your brand's professionalism and values.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg mt-1">
                    <Code className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Custom Development</h4>
                    <p className="text-gray-600">Tailored solutions built specifically for your business needs and requirements.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg mt-1">
                    <Smartphone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Responsive Design</h4>
                    <p className="text-gray-600">Websites that look and function perfectly on all devices and screen sizes.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg mt-1">
                    <Globe className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">SEO Optimized</h4>
                    <p className="text-gray-600">Built with search engine optimization best practices for better visibility.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Success</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Live Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">3+</div>
                  <div className="text-gray-600">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Web Development Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive web solutions to meet all your digital needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Corporate Websites</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional business websites that establish credibility and showcase your services effectively.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Web Applications</h3>
              <p className="text-gray-600 leading-relaxed">
                Complex web applications with advanced functionality and user management systems.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Optimization</h3>
              <p className="text-gray-600 leading-relaxed">
                Fast-loading websites optimized for speed, performance, and user experience.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Security & Maintenance</h3>
              <p className="text-gray-600 leading-relaxed">
                Secure websites with regular updates, backups, and ongoing maintenance support.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-red-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Monitor className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">CMS Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Content management systems that allow you to easily update and manage your website.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-teal-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">API Integration</h3>
              <p className="text-gray-600 leading-relaxed">
                Seamless integration with third-party services and APIs to extend functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We leverage the latest technologies to build robust and scalable web solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['React', 'Vue.js', 'Angular', 'Node.js', 'PHP', 'Python', 'MongoDB', 'MySQL', 'AWS', 'Docker', 'Laravel', 'Express'].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 rounded-xl p-6 hover:bg-gray-200 transition-colors duration-300">
                  <h4 className="font-semibold text-gray-900">{tech}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-custom-teal to-teal-600">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Web Presence?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your web development needs and create a solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition duration-300"
            >
              Start Your Project
            </Link>
            <Link 
              to="/what-we-do" 
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 rounded-lg font-medium transition duration-300"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;