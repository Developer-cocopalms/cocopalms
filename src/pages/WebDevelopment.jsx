import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Code, Smartphone, Globe, Zap, Shield, ExternalLink } from 'lucide-react';
import dietbuxImage from '../assets/dietbuxw.png';
import dietvalueImage from '../assets/dietvaluew.png';
import dieterImage from '../assets/dieterw.png';
import basicImage from '../assets/basicw.png';
import alnassemImage from '../assets/alnassemw.png';
import techbizImage from '../assets/techbizw.png';
import { Helmet } from 'react-helmet';
import { getPageKeywords } from '../pages/hooks/keywordsService';
import { useTranslation } from "react-i18next";

const WebDevelopment = () => {
  const { t, i18n } = useTranslation();
  
  // Get current language direction
  const isRTL = i18n.language === 'ar';
  
  // Canonical URL
  const canonicalUrl = "https://cocopalms.io/what-we-do/web-development";
  const [keywords, setKeywords] = useState('web development, websites, front-end, back-end, responsive design, custom sites');

  // Portfolio projects data with translation keys
  const portfolioProjects = [
    {
      id: 'dietbux',
      image: dietbuxImage,
      url: 'https://dietbux.com/',
      tags: ['react', 'responsivedesign', 'ecommerce', 'arabicenglish']
    },
    {
      id: 'dietvalue',
      image: dietvalueImage,
      url: 'https://dietvaluekw.com/',
      tags: ['modernui', 'fooddelivery', 'arabicdesign', 'kuwaitmarket']
    },
    {
      id: 'dieter',
      image: dieterImage,
      url: 'https://dieterkwt.com/',
      tags: ['kuwaitfocus', 'nutritionplans', 'healthservices', 'arabicinterface']
    },
    {
      id: 'basic',
      image: basicImage,
      url: 'https://basickw.com/',
      tags: ['minimalistdesign', 'fastloading', 'cleanui', 'businessfocus']
    },
    {
      id: 'alnassem',
      image: alnassemImage,
      url: 'https://nsmglass.com/',
      tags: ['manufacturing', 'productgallery', 'b2bservices', 'professional']
    },
    {
      id: 'techbiz',
      image: techbizImage,
      url: 'https://www.techbizsolutions.io/',
      tags: ['techsolutions', 'itconsulting', 'modernstack', 'enterprise']
    }
  ];

  // Tag color mapping
  const getTagColor = (index) => {
    const colors = [
      'bg-blue-100 text-blue-800',
      'bg-green-100 text-green-800',
      'bg-purple-100 text-purple-800',
      'bg-orange-100 text-orange-800'
    ];
    return colors[index % 4];
  };

  // Feature bullet color mapping
  const getFeatureColor = (index) => {
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500'];
    return colors[index % 3];
  };
  
  // Update meta description for web development page
  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Cocopalms offers expert web development services for F&B and enterprise businesses, delivering custom solutions to enhance performance and growth.');
    }
  }, []);

  useEffect(() => {
    const fetchKeywords = async () => {
      const pageKeywords = await getPageKeywords('what-we-do/web-development');
      if (pageKeywords) {
        setKeywords(pageKeywords);
      }
    };
    fetchKeywords();
  }, []);

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
    <div className="min-h-screen" dir={isRTL ? 'rtl' : 'ltr'}>
       <Helmet>
        <title>Web Development Services for F&B & Enterprise | Cocopalms</title>
        <meta 
          name="description" 
          content="Cocopalms offers expert web development services for F&B and enterprise businesses, delivering custom solutions to enhance performance and growth." 
        />
        <meta name="keywords" content={keywords} />
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
            {t('webDevelopment.hero.title')}
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 mb-6 md:mb-8">
            {t('webDevelopment.hero.subtitle')}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto px-4">
            {t('webDevelopment.hero.description')}
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('webDevelopment.portfolio.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('webDevelopment.portfolio.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {portfolioProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={t(`webDevelopment.portfolio.projects.${project.id}.title`)}
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'}`}>
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t(`webDevelopment.portfolio.projects.${project.id}.title`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {t(`webDevelopment.portfolio.projects.${project.id}.description`)}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getTagColor(index)}`}
                      >
                        {t(`webDevelopment.portfolio.projects.${project.id}.tags.${tag}`)}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {t(`webDevelopment.portfolio.projects.${project.id}.features`, { returnObjects: true }).map((feature, index) => (
                      <div key={index} className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                        <div className={`w-2 h-2 rounded-full ${getFeatureColor(index)}`}></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Main Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('webDevelopment.mainContent.title')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {t('webDevelopment.mainContent.description')}
              </p>
              <div className="space-y-4">
                <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                  <div className="bg-blue-100 p-2 rounded-lg mt-1">
                    <Code className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t('webDevelopment.mainContent.customDevelopment.title')}</h4>
                    <p className="text-gray-600">{t('webDevelopment.mainContent.customDevelopment.description')}</p>
                  </div>
                </div>
                <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                  <div className="bg-blue-100 p-2 rounded-lg mt-1">
                    <Smartphone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t('webDevelopment.mainContent.responsiveDesign.title')}</h4>
                    <p className="text-gray-600">{t('webDevelopment.mainContent.responsiveDesign.description')}</p>
                  </div>
                </div>
                <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                  <div className="bg-blue-100 p-2 rounded-lg mt-1">
                    <Globe className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t('webDevelopment.mainContent.seoOptimized.title')}</h4>
                    <p className="text-gray-600">{t('webDevelopment.mainContent.seoOptimized.description')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('webDevelopment.projectSuccess.title')}</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">{t('webDevelopment.projectSuccess.liveProjects')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-gray-600">{t('webDevelopment.projectSuccess.clientSatisfaction')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">3+</div>
                  <div className="text-gray-600">{t('webDevelopment.projectSuccess.countriesServed')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-gray-600">{t('webDevelopment.projectSuccess.support')}</div>
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
              {t('webDevelopment.services.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('webDevelopment.services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('webDevelopment.services.corporateWebsites.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('webDevelopment.services.corporateWebsites.description')}
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('webDevelopment.services.webApplications.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('webDevelopment.services.webApplications.description')}
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('webDevelopment.services.performanceOptimization.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('webDevelopment.services.performanceOptimization.description')}
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('webDevelopment.services.securityMaintenance.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('webDevelopment.services.securityMaintenance.description')}
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-red-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Monitor className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('webDevelopment.services.cmsSolutions.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('webDevelopment.services.cmsSolutions.description')}
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-teal-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('webDevelopment.services.apiIntegration.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('webDevelopment.services.apiIntegration.description')}
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
              {t('webDevelopment.technologies.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('webDevelopment.technologies.subtitle')}
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
            {t('webDevelopment.cta.title')}
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            {t('webDevelopment.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition duration-300"
            >
              {t('webDevelopment.cta.startProject')}
            </Link>
            <Link 
              to="/what-we-do" 
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 rounded-lg font-medium transition duration-300"
            >
              {t('webDevelopment.cta.exploreServices')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;