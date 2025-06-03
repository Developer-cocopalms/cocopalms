import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Monitor, Smartphone, Users, ShoppingCart, Building2, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import images
import webdevImage from '../assets/webdev.jpg';
import mobileappImage from '../assets/mobileapp.jpg';
import erpImage from '../assets/erp.jpg';
import ecomImage from '../assets/ecom.jpg';
import rentingsImage from '../assets/rentings.jpg';
import fbImage from '../assets/fb1.png';

const WhatWeDo = () => {
  const location = useLocation();

  // Handle anchor navigation when component mounts or hash changes
  useEffect(() => {
    if (location.hash) {
      // Remove the # from the hash
      const elementId = location.hash.substring(1);
      const element = document.getElementById(elementId);
      
      if (element) {
        // Add a small delay to ensure the page has rendered
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    } else {
      // If no hash, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);

  const services = [
    {
      id: "web-development",
      icon: Monitor,
      title: "Web Development",
      subtitle: "Building Your Digital Presence, From Startup to Enterprise",
      description: "We craft impactful company websites for businesses of all sizes, develop targeted promotional landing pages, and engineer fully functional web services that drive results. Our web development expertise spans from responsive design to complex web applications, ensuring your digital presence stands out in today's competitive landscape.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-100",
      image: webdevImage
    },
    {
      id: "mobile-apps",
      icon: Smartphone,
      title: "Mobile Application Development",
      subtitle: "Delivering Exceptional Experiences Across Platforms",
      description: "As a renowned technology provider, we specialize in developing versatile native and cross-platform mobile applications that consistently earn the admiration of both our clients and their users. From iOS to Android, we create mobile solutions that drive engagement and business growth.",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      iconBg: "bg-green-100",
      image: mobileappImage
    },
    {
      id: "erp-solutions",
      icon: Users,
      title: "Complete ERP Ecosystem",
      subtitle: "Provide a Complete ERP Ecosystem for Streamlined Operations",
      description: "A comprehensive ERP solution, providing a unified suite of business modules that addresses every facet of your operational needs. Our ERP systems integrate seamlessly with your existing processes, enhancing efficiency and providing real-time insights into your business operations.",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      iconBg: "bg-purple-100",
      image: erpImage
    },
    {
      id: "ecommerce",
      icon: ShoppingCart,
      title: "World Class Ecommerce",
      subtitle: "Develop a World Class Ecommerce Landscape",
      description: "Billions of people worldwide are embracing online purchasing. Our expertise in ecommerce development empowers your business to effectively reach and serve this vast and growing market. We create scalable, secure, and user-friendly online stores that convert visitors into customers.",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      iconBg: "bg-orange-100",
      image: ecomImage
    },
    {
      id: "real-estate",
      icon: Building2,
      title: "Real Estate Solutions",
      subtitle: "Connecting Landlords and Tenants for Ideal Rentals",
      description: "As an innovative IT company, we offer Rentings, a comprehensive B2B & B2C platform designed to seamlessly connect landlords and tenants, simplifying the process of finding the perfect living or business space. Our real estate solutions streamline property management and enhance the rental experience.",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
      iconBg: "bg-teal-100",
      image: rentingsImage
    },
    {
      id: "fnb-solutions",
      icon: Utensils,
      title: "F&B Software Solutions",
      subtitle: "Empowering the F&B Industry with Bespoke Software Solutions",
      description: "At Cocoplams, we understand the unique demands of the Food and Beverage sector. We develop a wide array of software solutions, crafting each application to the specific needs and scale of your business. From restaurant management to delivery platforms, we've got you covered.",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      iconBg: "bg-red-100",
      image: fbImage
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Custom Teal Background */}
      <section className="bg-custom-teal py-20 md:py-32 px-4 mt-24 md:mt-24">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            What We Do?
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 mb-6 md:mb-8">
            Empowering Your Business with Technology
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto px-4">
            As a leading IT company in Kuwait, Cocoplams partners with you to drive software innovation and deliver market-leading solutions. Our expert IT services tackle your complex business problems head-on with tailored technological solutions.
          </p>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => {
        const IconComponent = service.icon;
        const isEven = index % 2 === 0;
        
        return (
          <section
            key={index}
            id={service.id}
            className={`py-12 md:py-16 lg:py-20 px-4 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} scroll-mt-20`}
          >
            <div className="container mx-auto max-w-7xl">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content Side */}
                <div className={`${!isEven ? 'lg:col-start-2' : ''} px-2 md:px-0`}>
                  <div className={`${service.iconBg} w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center mb-6 md:mb-8 inline-flex`}>
                    <IconComponent className={`w-8 h-8 md:w-10 md:h-10 ${service.iconColor}`} />
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                    {service.title}
                  </h2>
                  
                  <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-4 md:mb-6">
                    {service.subtitle}
                  </h3>
                  
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Visual Side with Image */}
                <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''} px-2 md:px-0`}>
                  <div className="relative rounded-2xl overflow-hidden h-80 md:h-96 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                      <div className={`${service.iconBg} w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-3 md:mb-4 opacity-90`}>
                        <IconComponent className={`w-6 h-6 md:w-8 md:h-8 ${service.iconColor}`} />
                      </div>
                      <h4 className="text-lg md:text-xl font-bold mb-1">{service.title}</h4>
                      <p className="text-sm md:text-base text-white/80">Professional Solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Call to Action Section */}
      <section className="py-16 md:py-20 px-4 bg-custom-teal">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 px-2">
            Transforming Your Ideas into Reality: Your Trusted Technology Partner.
          </h2>
          <p className="text-base md:text-lg text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Let's discuss how our comprehensive IT solutions can help you achieve your business goals and drive digital transformation. Cocopalms is a leading IT company in Kuwait,
            dedicated to delivering trustworthy and guaranteed services. Contact us today to turn your vision into tangible success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link 
              to="/contact" 
              className="bg-white text-teal-600 hover:bg-gray-100 px-6 md:px-8 py-3 rounded-lg font-medium transition duration-300 inline-block text-center"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;