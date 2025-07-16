import { useState, useEffect } from 'react';
import { ChevronRight, ShoppingCart, Monitor, Smartphone, ShoppingBag, Globe, BarChart3, 
  UtensilsCrossed, Home } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import webdevelopImg from '../../assets/webdevelop.jpg';
import mobiledevelopImg from '../../assets/mobileapp.jpg';
import ecomdevelopImg from '../../assets/ecom.jpg';
// Import dynamic data hooks
import { useTeamMembers } from '../hooks/useTeamMembers';
import { useFeatures } from '../hooks/useFeatures';
import { useTestimonials } from '../hooks/useTestimonials';
import DynamicIcon from '../../components/DynamicIcon';
import HeroVideoSlideshow from '../../components/HeroVideoSlideshow';
import InstagramSlider from '../../components/InstagramSlider';

// Import static assets

import teamMember0 from '../../assets/team/fazil.png';
import teamMember1 from '../../assets/team/john-removebg-preview.png';
import teamMember2 from '../../assets/team/Salma-removebg-preview.png';
import teamMember3 from '../../assets/team/cropped-Hasna-removebg-preview.png';
import teamMember4 from '../../assets/team/latheef.png';
import logos from '../../assets/logos.png';
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.jpeg';
import logo4 from '../../assets/logo4.png';


const TeamMemberCard = ({ image, name, position }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300 h-full flex flex-col">
      {/* Fixed image container - better positioning to prevent head cutoff */}
      <div className="h-52 sm:h-48 w-full overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
          style={{ 
            objectPosition: name === 'James Almeda' ? 'center 20%' : 'center top' 
          }}
        />
      </div>
      <div className="bg-white p-4 flex-grow">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-600 text-sm">{position}</p>
      </div>
    </div>
  );
};
const SolutionsSection = () => {
  const [activeService, setActiveService] = useState('website');

  const servicesData = {
    website: {
      title: 'Website Development',
      content: 'We build powerful, professional websites for businesses of all sizes — from startups to large enterprises. Our team creates high-converting landing pages and scalable web services that align with your goals, strengthen your brand, and boost results. Whether you\'re launching a campaign or improving operations, our web solutions are designed to deliver impact.',
      image: webdevelopImg,
      icon: Monitor
    },
    mobile: {
      title: 'Mobile Application Development',
      content: 'We develop high-performance mobile apps tailored for both native and cross-platform use, ensuring smooth functionality across all devices. Focused on intuitive design and user experience, our apps are built to engage users and meet business goals. From idea to launch, we turn your vision into impactful, user-friendly mobile solutions.',
      image: mobiledevelopImg,
      icon: Smartphone
    },
    ecommerce: {
      title: 'E-commerce Development',
      content: 'We build scalable, secure eCommerce platforms that help businesses grow their online presence and boost revenue. Our solutions ensure a seamless shopping experience across devices, featuring intuitive design, personalized recommendations, real-time inventory, and secure payments. Whether starting fresh or upgrading your store, we tailor each solution to meet your goals and delight customers.',
      image: ecomdevelopImg,
      icon: ShoppingBag
    }
  };

  const currentService = servicesData[activeService];

  const handleServiceClick = (serviceKey) => {
    setActiveService(serviceKey);
  };

  return (
    <section className="py-20 md:py-32 lg:py-40 bg-green-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20 md:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Solutions for all<br />
            the ways that we work.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 xl:gap-20 items-start">
          {/* Left Side - Services Navigation & Image */}
          <div className="order-2 lg:order-1">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-4 xl:gap-8">
              {/* Services Navigation */}
              <div className="flex-1 min-w-0 lg:mr-4 xl:mr-0 lg:max-w-xs xl:max-w-none">
                <div className="space-y-4">
                  {Object.entries(servicesData).map(([key, service]) => {
                    const IconComponent = service.icon;
                    return (
                      <button
                        key={key}
                        onClick={() => handleServiceClick(key)}
                        className={`w-full flex items-center justify-between p-5 rounded-lg transition-all duration-200 cursor-pointer transform hover:scale-105 ${
                          activeService === key 
                            ? 'bg-white shadow-lg' 
                            : 'bg-green-50 hover:bg-green-100'
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                            activeService === key ? 'bg-teal-50' : 'bg-white'
                          }`}>
                            <IconComponent size={28} className="text-teal-500" />
                          </div>
                          <span className="text-lg font-medium text-gray-900 text-left">
                            {service.title}
                          </span>
                        </div>
                        <ChevronRight className="text-gray-400 flex-shrink-0" size={20} />
                      </button>
                    );
                  })}
                </div>
                
                {/* Explore All Tools Link */}
                <div className="mt-8">
                  <a 
                    href="/contact" 
                    className="text-teal-500 font-medium text-sm hover:text-teal-600 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span>Explore All Tools</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Image - Beside services on lg+ devices */}
              <div className="flex-1 lg:flex-none lg:w-72 xl:w-80 2xl:w-96">
                <div className="rounded-xl shadow-2xl overflow-hidden">
                  <img
                    src={currentService.image}
                    alt={`${currentService.title} Preview`}
                    className="w-full h-80 lg:h-80 xl:h-96 object-cover transition-opacity duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="space-y-8 md:space-y-10 order-1 lg:order-2">
            <div className="text-left">
              <span className="text-teal-500 font-semibold text-sm uppercase tracking-wider">
                {currentService.title}
              </span>
            </div>
            
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
                Empowering Your Business with Technology.
              </h3>
              
              <div className="space-y-6 mb-8 md:mb-10">
                <div className="flex items-start space-x-3">
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                    {currentService.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
// Main Landing Page Component
export default function LandingPage() {
  // Dynamic data hooks
  const { teamMembers, ceo, otherMembers, loading: teamLoading } = useTeamMembers();
  const { features, loading: featuresLoading } = useFeatures();
  const { testimonials, loading: testimonialsLoading } = useTestimonials();
  
  // Testimonial slider state
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [testimonials.length]);



   
  // Fallback data for features if dynamic data isn't available
  const fallbackFeatures = [
    {
      icon: <Globe size={48} />,
      title: "Web Development",
      description: "We specialize in crafting impactful company websites tailored for businesses of all sizes — from agile startups to established enterprises — ensuring a strong and professional online presence. Our team develops targeted promotional landing pages designed to capture attention, engage users, and drive meaningful conversions. In addition, we engineer fully functional and scalable web services that align with your business goals, delivering measurable results and enhancing your overall digital strategy. Whether you're looking to build your brand, launch a campaign, or streamline operations, our web development solutions are built to perform."
    },
    {
      icon: <Smartphone size={48} />,
      title: "Mobile Application Development",
      description: "We specialize in developing versatile mobile applications that are fully optimized for specific platforms, ensuring smooth performance and native functionality. Our team also creates cross-platform mobile solutions that work seamlessly across various devices, offering flexibility and cost efficiency for businesses aiming to reach a wider audience. With a strong focus on intuitive design and functionality, we deliver exceptional user experiences that not only meet client expectations but also earn lasting admiration from end users."
    },
    {
      icon: <ShoppingCart size={48} />,
      title: "E-Commerce Development",
      description: "We develop robust eCommerce platforms designed to effectively reach and serve vast customer bases, enabling businesses to expand their digital footprint and increase revenue. Our solutions are built with scalability, security, and performance in mind, ensuring a seamless shopping experience across all devices. By optimizing customer journeys through intuitive interfaces and integrating personalized product recommendations, real-time stock updates, and secure payment gateways, we help boost engagement and drive sales.Our eCommerce development services are tailored to meet your business goals and customer expectations."
    },
    {
      icon: <Home size={48} />,
      title: "Property Management System",
      description: "We connect landlords and tenants through a comprehensive B2B and B2C platform designed to simplify every aspect of property leasing. Whether you're seeking a new home or commercial space, our platform makes it easy to find the perfect fit by offering intuitive search tools and detailed listings. For landlords and property managers, we provide seamless rental management tools that streamline property transactions, from listings and tenant communication to rent collection and maintenance tracking. Our goal is to make property management and leasing efficient, transparent, and hassle-free for all parties involved."
    },
    {
      icon: <BarChart3 size={48} />,
      title: "Bizosuite ERP Solutions",
      description: "We provide a comprehensive ERP ecosystem designed to streamline all aspects of your business operations, from finance and inventory to human resources and customer relationship management. Our unified suite of business modules addresses every facet of your operational needs, offering scalable solutions tailored to your organization's growth. By enabling complete integration across departments, our ERP platform promotes maximum efficiency, improved decision-making, and enhanced productivity. With real-time data access and seamless workflows, we empower businesses to operate smarter, faster, and more effectively in today's competitive landscape."
    },
    {
      icon: <UtensilsCrossed size={48} />,
      title: "Food & Beverage Industry Software",
      description: "We develop bespoke software solutions specifically tailored to meet the unique demands of the food and beverage (F&B) sector, ensuring every aspect of your business is supported with precision and efficiency. Our applications are crafted to align with your specific needs, whether you're a small café, a cloud kitchen, or a large-scale restaurant chain, offering the flexibility to scale as your operations grow. We provide a wide array of specialized tools designed for F&B management, including inventory tracking, order management, staff scheduling, kitchen display systems, and customer engagement features. With our F&B-focused solutions, you can streamline operations, enhance service quality, and drive sustained growth."
    }
  ];

  // Fallback data for team members if dynamic data isn't available
  const fallbackTeamMembers = [
    
    {
      image: teamMember0,
      name: "Fazil Parvez",
      position: "General Manager"
    },
    {
      image: teamMember1,
      name: "James Almeda",
      position: "IT Operations & Manager"
    },
    {
      image: teamMember2,
      name: "Salma Abdul Rahman",
      position: "Project Manager"
    },
    {
      image: teamMember3,
      name: "Hasna Kalady",
      position: "Program Developer"
    }
  ];

 // Update your logo mapping in the component
const logoMapping = {
  'logo1': logo1,
  'logo2': logo2,
  'logo3': logo3,
  'logo4': logo4,
  // Add more mappings as needed
};
  
  // 3. Update fallback testimonials data to include logo_name:
 
  // Use dynamic data if available, otherwise use fallback data
  const displayFeatures = !featuresLoading && features.length > 0 ? features : fallbackFeatures;

  const fallbackTestimonials = [
    {
      id: 1,
      quote: "Partnering with Cocopalms transformed our operations. Their ERP solution streamlined processes across departments, helping us make faster, smarter decisions. Their team's commitment to quality and support was outstanding.",
      author_name: "BizoSuite",
      logo_image: "logo1", // Make sure this matches your logoMapping key
      display_order: 1,
      is_active: true
    },
    {
      id: 2,
      quote: "Cocopalms brought our vision to life, developing a beautifully designed mobile application for our subscription-based diet plans. The intuitive user interface makes it easy for our customers, and the robust backend tools help us effortlessly manage subscriptions and orders. We highly recommend them!",
      author_name: "Dietbux",
      logo_image: "logo2", // Make sure this matches your logoMapping key
      display_order: 2,
      is_active: true
    },
    {
      id: 3,
      quote: "Cocopalms brought our concept for a smart property management platform to life. Their team was proactive, detail-oriented, and incredibly responsive. The result is a powerful tool our tenants and landlords love using.",
      author_name: "Rentings",
      logo_image: "logo3", // Make sure this matches your logoMapping key
      display_order: 3,
      is_active: true
    },
    {
      id: 4,
      quote: "The web development expertise at Cocopalms resulted in a stunning and highly functional website that serves as a powerful representation of our brand. Its robust performance, especially its speed and mobile optimization, has been instrumental in building trust and credibility with our international clientele.",
      author_name: "Dieter",
      logo_image: "logo4", // Make sure this matches your logoMapping key
      display_order: 4,
      is_active: true
    }
  ];

  const displayTestimonials = !testimonialsLoading && testimonials.length > 0 ? testimonials : fallbackTestimonials;

  return (
    <div className="font-sans">
      {/* Hero Section */}
      {/* Hero Section with Video Slideshow */}
<HeroVideoSlideshow />

     {/* Stats Section */}
     <section className="mt-8 pt-0 pb-2 sm:mt-0 sm:pt-6 sm:pb-8 md:pt-8 md:pb-10 lg:pt-10 lg:pb-12 xl:pt-12 xl:pb-16 bg-white">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-stretch">
            
            {/* Left Side - Statistics */}
            <div className="flex items-center order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full px-2 sm:px-4 md:px-6 lg:pl-8 xl:pl-12">
                
                {/* Stat 1 */}
                <div className="text-left">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-1 sm:mb-2">
                    50+
                  </div>
                  <div className="text-sm sm:text-base md:text-lg text-gray-600 leading-tight">
                    Companies
                  </div>
                </div>
                
                {/* Stat 2 */}
                <div className="text-left">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-1 sm:mb-2">
                    10+
                  </div>
                  <div className="text-sm sm:text-base md:text-lg text-gray-600 leading-tight">
                    Products
                  </div>
                </div>
                
                {/* Stat 3 */}
                <div className="text-left">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-1 sm:mb-2">
                    5M+
                  </div>
                  <div className="text-sm sm:text-base md:text-lg text-gray-600 leading-tight">
                    Revenue Made
                  </div>
                </div>
                
                {/* Stat 4 */}
                <div className="text-left">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-1 sm:mb-2">
                    20+
                  </div>
                  <div className="text-sm sm:text-base md:text-lg text-gray-600 leading-tight">
                    <span className="block sm:hidden">Mobile Apps</span>
                    <span className="hidden sm:block">Mobile Applications</span>
                  </div>
                </div>
                
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex items-start lg:items-center order-1 lg:order-2">
              <div className="text-left px-2 sm:px-4 md:px-0 lg:pl-4 xl:pl-8 w-full">
                
                {/* Heading - Responsive sizing and line breaks */}
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 mb-4 sm:mb-5 md:mb-6 leading-tight">
                  <span className="block sm:hidden">
                    {/* Mobile: Single line with compact text */}
                    Power Your Business with Smart Tech
                  </span>
                  <span className="hidden sm:block md:hidden">
                    {/* Small screens: Two lines */}
                    Power Your Business with <br />
                    Smart Tech by Cocopalms
                  </span>
                  <span className="hidden md:block">
                    {/* Medium and larger: Original format */}
                    Power Your Business with <br />
                    <span className="text-gray-900">All-in-One Smart Tech by Cocopalms</span>
                  </span>
                </h2>
                
                {/* Description - Responsive text sizing */}
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-7 md:mb-8 leading-relaxed">
                  <span className="block sm:hidden">
                    {/* Mobile: Shorter, concise version */}
                    We empower businesses with smart IT solutions including ERP, mobile apps, e-commerce, and POS systems to keep you ahead of the curve.
                  </span>
                  <span className="hidden sm:block">
                    {/* Larger screens: Full description */}
                    We empower businesses with smart IT solutions for today's digital world. Our integrated systems include ERP, finance tools, mobile apps, web development, e-commerce, and rental management software. From online sales to restaurant management, our intelligent solutions with feature-rich POS systems keep you ahead of the curve.
                  </span>
                </p>
                
                {/* CTA Button - Responsive sizing */}
                <Link
                  to="/contact"
                  className="bg-custom-teal hover:bg-custom-teal/90 text-white px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-md sm:rounded-lg font-medium sm:font-semibold text-sm sm:text-base transition duration-300 transform hover:scale-105 inline-block text-center w-full sm:w-auto"
                >
                  <span className="block sm:hidden">Book Demo</span>
                  <span className="hidden sm:block">Book a Demo</span>
                </Link>
                
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Trusted Companies Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 mb-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-4">
            Trusted by Leading Companies
          </h3>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Join thousands of businesses that trust our solutions to power their growth
          </p>
        </div>
        
        <div className="relative">
          {/* Moving logos container */}
          <div className="flex animate-scroll-left">
            {/* First set of logos */}
            <div className="flex items-center flex-shrink-0">
              <img 
                src={logos} 
                alt="Trusted Company Logos" 
                className="h-20 md:h-22 object-contain"
              />
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center flex-shrink-0">
              <img 
                src={logos} 
                alt="Trusted Company Logos" 
                className="h-20 md:h-22 object-contain"
              />
            </div>
            
            {/* Third set for extra seamless coverage */}
            <div className="flex items-center flex-shrink-0">
              <img 
                src={logos} 
                alt="Trusted Company Logos" 
                className="h-20 md:h-22 object-contain"
              />
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }
          
          .animate-scroll-left {
            animation: scroll-left 30s linear infinite;
          }
          
          .animate-scroll-left:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* Solutions Section */}
     
      {/* Interactive Solutions Section - REPLACED */}
      <SolutionsSection />

      {/* Features Section - Updated with dynamic data */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-4">
             Our Services
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cocopalms
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Run your entire business with Cocopalms unified cloud software
            </p>
          </div>

          {/* Features Grid - Updated to use dynamic data */}
          {!featuresLoading && features.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {features.map((feature, index) => (
                <div key={feature.id} className="text-center">
                  {/* Icon */}
                  <div className="flex justify-center mb-8">
                    <div className="w-20 h-20 bg-teal-50 rounded-2xl flex items-center justify-center">
                      <div className="text-teal-600">
                        <DynamicIcon iconName={feature.icon_name} size={48} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 leading-tight">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <div className="text-justify">
                    <p className="text-gray-600 leading-relaxed text-paragraph">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Fallback to static features */
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {fallbackFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  {/* Icon */}
                  <div className="flex justify-center mb-8">
                    <div className="w-20 h-20 bg-teal-50 rounded-2xl flex items-center justify-center">
                      <div className="text-teal-600">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 leading-tight">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <div className="text-justify">
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {featuresLoading && (
            <div className="text-center py-8">
              <p className="text-gray-500">Loading features...</p>
            </div>
          )}
        </div>
      </section>

      {/* Meet Our Team Section - Updated with dynamic data */}
      <section className="pt-6 pb-12 sm:pt-8 sm:pb-16 md:pt-10 md:pb-20 bg-white">
  {/* Header Section - Responsive */}
  <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">
      Meet our Team
    </h2>
    <p className="text-base sm:text-lg text-gray-600 max-w-sm sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
      Run your entire business with Cocopalms unified cloud software
    </p>
  </div>
  
  <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
    {!teamLoading && teamMembers.length > 0 ? (
      <>
        {/* CEO/Founder - Centered and responsive */}
        {ceo && (
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-full max-w-xs sm:max-w-sm md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 px-2 sm:px-4">
              <div className="w-full">
                <TeamMemberCard
                  image={ceo.image_url}
                  name={ceo.name}
                  position={ceo.position}
                />
              </div>
            </div>
          </div>
        )}
        
        {/* Grid for other team members - Fully responsive and centered */}
        {otherMembers.length > 0 && (
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 justify-items-center mx-auto max-w-fit">
            {otherMembers.map((member) => (
              <div key={member.id} className="w-full max-w-xs">
                <TeamMemberCard
                  image={member.image_url}
                  name={member.name}
                  position={member.position}
                />
              </div>
            ))}
          </div>
        )}
      </>
    ) : (
      <div className="text-center py-8 sm:py-12">
        <div className="flex flex-col items-center justify-center space-y-3">
          {teamLoading ? (
            <>
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <p className="text-gray-500 text-sm sm:text-base">Loading team members...</p>
            </>
          ) : (
            <>
              <div className="text-gray-400 mb-2">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-gray-500 text-sm sm:text-base">No team members available</p>
            </>
          )}
        </div>
      </div>
    )}
  </div>
</section>

<section className="py-12 md:py-16 lg:py-20 bg-gray-50">
  <div className="container mx-auto px-4 md:px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
      {/* Left Side - Static Content */}
      <div className="space-y-6 md:space-y-8 transform translate-x-4 -translate-y-4 md:translate-x-8 md:-translate-y-8">
        <div className="text-4xl md:text-5xl lg:text-6xl text-gray-300 mb-2 md:mb-4"></div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
          You're in good <br />
          company
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          Join 8,530 business using Cocopalms to grow.
        </p>
      </div>

      {/* Right Side - Dynamic Testimonials */}
      {!testimonialsLoading && (testimonials.length > 0 || fallbackTestimonials.length > 0) ? (
        <div className="relative h-80 md:h-96 overflow-hidden">
          <div 
            className="absolute inset-0 transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <div className="flex">
              {(testimonials.length > 0 ? testimonials : fallbackTestimonials).map((testimonial, index) => {
                // FIXED: Better logo resolution logic
                let logoSrc;
                
                if (testimonial.logo_url) {
                  // If logo_url exists, use it directly
                  logoSrc = testimonial.logo_url;
                } else if (testimonial.logo_image && logoMapping[testimonial.logo_image]) {
                  // If logo_image exists and is in mapping, use it
                  logoSrc = logoMapping[testimonial.logo_image];
                } else if (testimonial.logo_name && logoMapping[testimonial.logo_name]) {
                  // If logo_name exists and is in mapping, use it
                  logoSrc = logoMapping[testimonial.logo_name];
                } else {
                  // Default fallback - you can customize this per testimonial if needed
                  logoSrc = logo1; // or you could use a different default per testimonial
                }

                console.log('Testimonial:', testimonial.author_name, 'Logo:', logoSrc); // Debug log
                
                return (
                  <div 
                    key={testimonial.id || index}
                    className="bg-white p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col justify-between flex-shrink-0 w-full"
                  >
                    <div>
                      <div className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-2 md:mb-4">"</div>
                      <p className="text-gray-700 leading-relaxed mb-4 md:mb-6 text-sm md:text-base lg:text-lg">
                        {testimonial.quote}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900 text-base md:text-lg">
                          {testimonial.author_name || testimonial.author}
                        </h4>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <img 
                          src={logoSrc} 
                          alt={`${testimonial.author_name || testimonial.author} Company Logo`}
                          className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 object-contain"
                          onError={(e) => {
                            console.error('Logo failed to load:', logoSrc, 'for', testimonial.author_name);
                            // Remove the generic fallback - let it show broken image or handle differently
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Navigation Dots */}
          {(testimonials.length > 1 || fallbackTestimonials.length > 1) && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {(testimonials.length > 0 ? testimonials : fallbackTestimonials).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-teal-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="relative h-80 md:h-96 flex items-center justify-center">
          <div className="text-center">
            {testimonialsLoading ? (
              <div className="flex flex-col items-center space-y-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
                <p className="text-gray-500 text-sm md:text-base">Loading testimonials...</p>
              </div>
            ) : (
              <div className="flex flex-col items-center space-y-4">
                <div className="text-gray-400">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <p className="text-gray-500 text-sm md:text-base">No testimonials available</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  </div>
</section>



 {/* Customer Support Section */}
      <section className="pt-8 pb-16 md:pt-10 md:pb-20 lg:pt-12 lg:pb-24 bg-teal-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
              Customer support is always here to help you
            </h2>
            <p className="text-lg md:text-xl lg:text-xl font-light text-black mb-12 md:mb-16 lg:mb-20 leading-relaxed max-w-3xl mx-auto">
              We work around the clock to assist you. Drop us a message any time,
              and one of us will be happy to get back to you quickly!
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
              {/* 24/7 Available */}
              <div className="text-center">
                <div className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 mb-2 md:mb-3">
                  24/7
                </div>
                <p className="text-base md:text-lg lg:text-xl text-gray-600 font-medium">
                  available
                </p>
              </div>
              
              {/* 98% Satisfaction Rate */}
              <div className="text-center">
                <div className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 mb-2 md:mb-3">
                  98%
                </div>
                <p className="text-base md:text-lg lg:text-xl text-gray-600 font-medium">
                  satisfaction rate
                </p>
              </div>
              
              {/* 5min Response Time */}
              <div className="text-center">
                <div className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 mb-2 md:mb-3">
                  5min
                </div>
                <p className="text-base md:text-lg lg:text-xl text-gray-600 font-medium">
                  avg. response time
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
     
     {/* Instagram Slider Section - NEW */}
     <InstagramSlider />
   
    </div>
    
  );
}

