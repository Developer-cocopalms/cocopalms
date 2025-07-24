import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
// Import images
import firstImage from '../assets/1sth.jpeg';
import secondImage from '../assets/2nd.jpeg';
import thirdImage from '../assets/3rd.jpeg';
import fourthImage from '../assets/4th.png';

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState(0);
  const scrollContainerRef = useRef(null);
  const sectionRefs = useRef([]);
  const isScrollingRef = useRef(false);

  // Use imported images
  const images = [
    firstImage,
    secondImage,
    thirdImage,
    fourthImage
  ];

  const whoWeAreContent = [
    {
      title: "The initial thought",
      subtitle: "Our Journey to Revolutionize Business Technology Solutions",
      content: "Cocopalms is a next-generation IT solutions company delivering innovative and end-to-end technology services for modern businesses. We specialize in developing web platforms, mobile applications, e-commerce solutions, and enterprise software that drive digital transformation.From designing intuitive websites to building powerful backend systems and cloud based business applications, we provide scalable and secure solutions tailored to each client's goals. Our expertise spans across industries, helping businesses streamline operations, enhance customer experiences, and grow through smart technology.Whether you're launching a mobile app, automating your workflow, or building a custom ERP system , Cocopalms is your trusted technology partner.",
      image: images[0]
    },
    {
      title: "Meet the Team of Cocopalms",
      subtitle: "Our Expert Team",
      content: "Our developers don't just write code, they create digital experiences that solve real business problems. By combining cutting-edge tools, secure architecture, and human centered design, we ensure every solution is not just functional, but future ready.With a strong culture of collaboration and continuous learning, our development team is the heart of Cocopalms' innovation turning ideas into impactful solutions for businesses across industries.",
      image: images[1]
    },
    {
      title: "Built on Experience, Driven by Excellence",
      subtitle: "Our Foundation",
      content: "A glimpse into the mobile app creation process showcasing diverse design interfaces across Android and iOS platforms. These visuals represent the seamless blend of functionality and user experience that defines every Cocopalms mobile solution.Each application is thoughtfully designed to ensure smooth navigation, intuitive layouts, and responsive performance. From customer ordering apps to delivery tracking and business management tools, our mobile platforms are built to meet the evolving needs of modern businesses.Whether it's enhancing customer engagement or streamlining operations, our mobile apps are crafted to deliver high impact across devices and industries.",
      image: images[2]
    },
    {
      title: "Custom Websites & Real-Time Business Intelligence Dashboards",
      subtitle: "Our Impact",
      content: "Creation of dynamic websites and intelligent dashboards — core elements of Cocopalms' digital solutions. Our platforms are designed to be visually engaging, user-friendly, and fully responsive across devices.From clean, modern website layouts to powerful backend dashboards, each interface is built to offer clarity, control, and real-time insights. Whether managing sales, operations, inventory, or customer data, our dashboards bring actionable information to your fingertips.With seamless navigation, smart analytics, and customizable components, Cocopalms' web solutions help businesses stay connected, efficient, and ahead of the curve.",
      image: images[3]
    }
  ];

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
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Us - IT Company in Kuwait | Cocopalms Technology Partner</title>
        <meta 
          name="description" 
          content="Founded in 2007, Cocopalms Tech Company is a next-generation IT solutions provider in Kuwait, delivering scalable digital solutions, ERP systems, mobile apps, and web development services across diverse industries." 
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://cocopalms.io/about" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="About Us - IT Company in Kuwait | Cocopalms Technology Partner" />
        <meta property="og:description" content="Founded in 2007, Cocopalms Tech Company is a next-generation IT solutions provider in Kuwait, delivering scalable digital solutions, ERP systems, mobile apps, and web development services across diverse industries." />
        <meta property="og:url" content="https://cocopalms.io/about" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - IT Company in Kuwait | Cocopalms Technology Partner" />
        <meta name="twitter:description" content="Founded in 2007, Cocopalms Tech Company is a next-generation IT solutions provider in Kuwait, delivering scalable digital solutions, ERP systems, mobile apps, and web development services across diverse industries." />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Cocopalms" />
        <meta name="keywords" content="IT company Kuwait, software development, ERP systems, mobile apps, web development, digital transformation, technology solutions" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Cocopalms",
            "url": "https://cocopalms.io",
            "description": "Founded in 2007, Cocopalms Tech Company is a next-generation IT solutions provider in Kuwait, delivering scalable digital solutions, ERP systems, mobile apps, and web development services across diverse industries.",
            "foundingDate": "2007",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Kuwait"
            },
            "sameAs": [
              "https://cocopalms.io/about"
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 py-20 pt-48 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Cocopalms: Architecting the Future of Software Innovation Since 2007
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
          Founded in 2007, Cocopalms Tech Company, headquartered in Kuwait, is a next-generation Information Technology Services
          company with a global presence. We specialize in delivering scalable and innovative digital solutions tailored to business needs across 
          diverse industries. Our offerings include automation systems, ERP solutions, mobile and web application development, 
          cloud services, IT consulting, systems integration.
        </p>
        <Link 
          to="/contact"
          className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300 inline-block text-center"
        >
          Contact Us
        </Link>
      </div>

      {/* Mission Section */}
      <div className="bg-green-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-teal-600 font-medium mb-4 uppercase tracking-wide">
            Our mission
          </p>
          <h2 className="text-xl md:text-3xl font-medium text-gray-900 leading-tight max-w-3xl mx-auto">
            To empower our clients with robust solutions that translate complex data into  
            actionable knowledge, directly addressing their challenges and streamlining their 
            operational workflows for measurable improvements.
          </h2>
        </div>
      </div>

      {/* Dynamic Who We Are Section */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who we are?
            </h2>
            <p className="text-lg text-gray-600">
              At Cocopalms, our story began with a simple yet ambitious goal:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Side - Navigation (Smaller) */}
            <div className="lg:col-span-4 space-y-4">
              {whoWeAreContent.map((item, index) => (
                <div
                  key={index}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeSection === index 
                      ? 'border-l-4 border-teal-600 pl-4 bg-teal-50 py-3 rounded-r-lg' 
                      : 'border-l-4 border-transparent pl-4 py-3 hover:border-gray-300 hover:bg-gray-50'
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
            <div className="lg:col-span-8 bg-white rounded-lg shadow-lg overflow-hidden">
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
                      <div className="absolute bottom-4 left-6 text-white">
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
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our mission to architect the future of software innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Pioneering sophisticated technologies for multi-user environments with cutting-edge solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Delivering robust, scalable digital experiences with unwavering commitment to excellence.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                Empowering businesses worldwide with seamless, efficient, and cost-effective transformations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-green-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-teal-600 font-medium mb-4 uppercase tracking-wide">
            Our Vision
          </p>
          <h2 className="text-xl md:text-3xl font-medium text-gray-900 leading-tight max-w-3xl mx-auto">
            To be a globally recognized IT solutions provider, empowering businesses with seamless, efficient, and cost-effective digital transformations 
            that directly contribute to their growth and success through our unwavering commitment to quality and high-value services.
          </h2>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how Cocopalms can architect the future of your software innovation 
            and drive your business growth.
          </p>
          <Link 
            to="/contact" 
            className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300 inline-block text-center"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;