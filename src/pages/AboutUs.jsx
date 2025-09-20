import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { getPageKeywords } from '../pages/hooks/keywordsService';
// Import images
import firstImage from '../assets/1sth.jpeg';
import secondImage from '../assets/2nd.jpeg';
import thirdImage from '../assets/3rd.jpeg';
import fourthImage from '../assets/4th.png';

const AboutUs = () => {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState(0);
  const scrollContainerRef = useRef(null);
  const sectionRefs = useRef([]);
  const isScrollingRef = useRef(false);

  // Canonical URL
  const canonicalUrl = "https://cocopalms.io/about";
  const [keywords, setKeywords] = useState('about us, company profile, team, mission, vision, values');

  // Get current language direction
  const isRTL = i18n.language === 'ar';

  // Use imported images
  const images = [
    firstImage,
    secondImage,
    thirdImage,
    fourthImage
  ];

  // Get translated content
  const whoWeAreContent = [
    {
      title: t('aboutUs.whoWeAre.sections.0.title'),
      subtitle: t('aboutUs.whoWeAre.sections.0.subtitle'),
      content: t('aboutUs.whoWeAre.sections.0.content'),
      image: images[0]
    },
    {
      title: t('aboutUs.whoWeAre.sections.1.title'),
      subtitle: t('aboutUs.whoWeAre.sections.1.subtitle'),
      content: t('aboutUs.whoWeAre.sections.1.content'),
      image: images[1]
    },
    {
      title: t('aboutUs.whoWeAre.sections.2.title'),
      subtitle: t('aboutUs.whoWeAre.sections.2.subtitle'),
      content: t('aboutUs.whoWeAre.sections.2.content'),
      image: images[2]
    },
    {
      title: t('aboutUs.whoWeAre.sections.3.title'),
      subtitle: t('aboutUs.whoWeAre.sections.3.subtitle'),
      content: t('aboutUs.whoWeAre.sections.3.content'),
      image: images[3]
    }
  ];

  const coreValues = [
    {
      title: t('aboutUs.coreValues.values.0.title'),
      description: t('aboutUs.coreValues.values.0.description'),
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      bgColor: 'bg-teal-100'
    },
    {
      title: t('aboutUs.coreValues.values.1.title'),
      description: t('aboutUs.coreValues.values.1.description'),
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bgColor: 'bg-green-100'
    },
    {
      title: t('aboutUs.coreValues.values.2.title'),
      description: t('aboutUs.coreValues.values.2.description'),
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
        </svg>
      ),
      bgColor: 'bg-blue-100'
    }
  ];

  useEffect(() => {
    const fetchKeywords = async () => {
      const pageKeywords = await getPageKeywords('about');
      if (pageKeywords) {
        setKeywords(pageKeywords);
      }
    };
    fetchKeywords();
  }, []);

  // Update meta description for about page
  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover Cocopalms: providing innovative software solutions for F&B and enterprise businesses, enhancing efficiency with ERP, POS, and more.');
    }
  }, []);

  // Add useEffect for canonical URL in document head (similar to your index.jsx)
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

  // Handle scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return; // Don't update active section while programmatically scrolling
      
      if (!scrollContainerRef.current) return;

      const container = scrollContainerRef.current;
      const containerTop = container.scrollTop;
      const containerHeight = container.clientHeight;

      let currentSection = 0;
      
      // Find which section is most visible
      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          // Check if section is in viewport
          const sectionBottom = sectionTop + sectionHeight;
          const viewportTop = containerTop;
          const viewportBottom = containerTop + containerHeight;
          
          // Calculate visible portion of section
          const visibleTop = Math.max(sectionTop, viewportTop);
          const visibleBottom = Math.min(sectionBottom, viewportBottom);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          
          // If more than 50% of section is visible, or if we're at the top of the section
          if (visibleHeight > sectionHeight * 0.5 || (containerTop >= sectionTop - 50 && containerTop < sectionTop + 50)) {
            currentSection = index;
          }
        }
      });

      setActiveSection(currentSection);
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      // Initial check
      setTimeout(handleScroll, 100);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Handle navigation click - Fixed scroll behavior
  const scrollToSection = (index) => {
    if (sectionRefs.current[index] && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const section = sectionRefs.current[index];
      
      // Set flag to prevent scroll spy from updating during programmatic scroll
      isScrollingRef.current = true;
      
      // Update active section immediately
      setActiveSection(index);
      
      // Use scrollIntoView for more reliable positioning
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
      });
      
      // Reset the flag after scroll completes
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <Helmet>
        <title>About Cocopalms | Software Solutions for F&B & Enterprise</title>
        
        <meta 
          name="description" 
          content="Discover Cocopalms: providing innovative software solutions for F&B and enterprise businesses, enhancing efficiency with ERP, POS, and more." 
        />
         <meta name="keywords" content={keywords} />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       
        {/* Canonical URL - Multiple approaches for better compatibility */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="About Cocopalms | Software Solutions for F&B & Enterprise" />
        <meta property="og:description" content="Founded in 2007, Cocopalms Tech Company is a next-generation IT solutions provider in Kuwait, delivering scalable digital solutions, ERP systems, mobile apps, and web development services across diverse industries." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Cocopalms" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Cocopalms | Software Solutions for F&B & Enterprise" />
        <meta name="twitter:description" content="Founded in 2007, Cocopalms Tech Company is a next-generation IT solutions provider in Kuwait, delivering scalable digital solutions, ERP systems, mobile apps, and web development services across diverse industries." />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Cocopalms" />
        
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Cocopalms",
            "url": "https://cocopalms.io/about",
            "description": "Founded in 2007, Cocopalms Tech Company is a next-generation IT solutions provider in Kuwait, delivering scalable digital solutions, ERP systems, mobile apps, and web development services across diverse industries.",
            "foundingDate": "2007",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Kuwait"
            },
            "sameAs": [
              canonicalUrl
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 py-20 pt-48 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {t('aboutUs.hero.title')}
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
          {t('aboutUs.hero.description')}
        </p>
        <Link 
          to="/contact"
          className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300 inline-block text-center"
        >
          {t('aboutUs.hero.cta')}
        </Link>
      </div>

      {/* Mission Section */}
      <div className="bg-green-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-teal-600 font-medium mb-4 uppercase tracking-wide">
            {t('aboutUs.mission.label')}
          </p>
          <h2 className="text-xl md:text-3xl font-medium text-gray-900 leading-tight max-w-3xl mx-auto">
            {t('aboutUs.mission.description')}
          </h2>
        </div>
      </div>

      {/* Dynamic Who We Are Section */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('aboutUs.whoWeAre.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('aboutUs.whoWeAre.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Side - Navigation (Smaller) */}
            <div className={`lg:col-span-4 space-y-4 ${isRTL ? 'lg:order-2' : 'lg:order-1'}`}>
              {whoWeAreContent.map((item, index) => (
                <div
                  key={index}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeSection === index 
                      ? `${isRTL ? 'border-r-4 border-teal-600 pr-4' : 'border-l-4 border-teal-600 pl-4'} bg-teal-50 py-3 ${isRTL ? 'rounded-l-lg' : 'rounded-r-lg'}` 
                      : `${isRTL ? 'border-r-4 border-transparent pr-4' : 'border-l-4 border-transparent pl-4'} py-3 hover:border-gray-300 hover:bg-gray-50`
                  }`}
                  onClick={() => scrollToSection(index)}
                >
                  <h3 className={`text-lg font-bold mb-1 transition-colors ${
                    activeSection === index ? 'text-teal-600' : 'text-gray-900'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-xs transition-colors ${
                    activeSection === index ? 'text-teal-700' : 'text-gray-600'
                  }`}>
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Side - Scrollable Content Display (Larger) */}
            <div className={`lg:col-span-8 bg-white rounded-lg shadow-lg overflow-hidden ${isRTL ? 'lg:order-1' : 'lg:order-2'}`}>
              <div 
                ref={scrollContainerRef}
                className="h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
                style={{ scrollBehavior: 'smooth' }}
              >
                {whoWeAreContent.map((item, index) => (
                  <div
                    key={index}
                    ref={el => sectionRefs.current[index] = el}
                    className="min-h-[600px] border-b border-gray-100 last:border-b-0 flex flex-col"
                  >
                    <div className="relative h-72 overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center"
                        style={{ objectPosition: 'center 30%' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className={`absolute bottom-4 ${isRTL ? 'right-6' : 'left-6'} text-white`}>
                        <h3 className="text-2xl font-bold mb-2">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-8 flex-grow">
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('aboutUs.coreValues.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('aboutUs.coreValues.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${value.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-green-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-teal-600 font-medium mb-4 uppercase tracking-wide">
            {t('aboutUs.vision.label')}
          </p>
          <h2 className="text-xl md:text-3xl font-medium text-gray-900 leading-tight max-w-3xl mx-auto">
            {t('aboutUs.vision.description')}
          </h2>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t('aboutUs.cta.title')}
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {t('aboutUs.cta.description')}
          </p>
          <Link 
            to="/contact" 
            className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300 inline-block text-center"
          >
            {t('aboutUs.cta.ctaButton')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;