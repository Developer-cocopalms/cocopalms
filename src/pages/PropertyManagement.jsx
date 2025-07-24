import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { 
  Building2, 
  Users, 
  Home, 
  BarChart3, 
  ExternalLink,
  ArrowRight,
  CreditCard,
  UserCheck,
  FileText,
  Wrench,
  
} from 'lucide-react';

// Import images
import rent1w from '../assets/rentw1.png';
import rentw2 from '../assets/rentw2.png';
import rentw3 from '../assets/rentw3.png';
import rent1 from '../assets/rent1.png';
import rent2 from '../assets/rent2.png';
import rent3 from '../assets/rent3.png';
import rent4 from '../assets/rent4.png';

const PropertyManagementSystem = () => {

  const canonicalUrl = "https://cocopalms.io/what-we-do/property-management"; 

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



  const platformFeatures = [
    {
      icon: Home,
      title: "Property Listings",
      description: "Advanced property listing system with detailed descriptions, photo galleries, and virtual tours.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: UserCheck,
      title: "Tenant Screening",
      description: "Comprehensive tenant verification system including background checks and credit assessments.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: CreditCard,
      title: "Rent Collection",
      description: "Automated rent collection system with multiple payment options and late fee management.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Wrench,
      title: "Maintenance Requests",
      description: "Streamlined maintenance request system with contractor management and tracking capabilities.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: FileText,
      title: "Document Management",
      description: "Digital lease agreements, contract storage, and document signing capabilities.",
      color: "bg-teal-100 text-teal-600"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive reporting and analytics for property performance and financial insights.",
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  const whoWeServe = [
    {
      icon: Building2,
      title: "Property Owners",
      description: "Maximize rental income and streamline property management with our comprehensive tools.",
      color: "bg-blue-500"
    },
    {
      icon: Users,
      title: "Property Managers",
      description: "Efficiently manage multiple properties with automated workflows and tenant communication.",
      color: "bg-green-500"
    },
    {
      icon: Home,
      title: "Tenants",
      description: "Find your perfect home and enjoy hassle-free rental experience with digital convenience.",
      color: "bg-purple-500"
    }
  ];

  const websiteScreenshots = [
    {
      src: rent1w,
      alt: "Rentings Homepage",
      title: "Modern Property Portal",
      description: "Clean and intuitive interface for property search and management"
    },
    {
      src: rentw2, 
      alt: "Property Features",
      title: "Feature-Rich Platform",
      description: "Comprehensive property management tools and tenant services"
    },
    {
      src: rentw3,
      alt: "Maintenance Management",
      title: "Maintenance System",
      description: "Streamlined maintenance request handling and tracking system"
    }
  ];

  const adminDashboardScreenshots = [
    {
      src: rent1,
      alt: "Admin Dashboard Overview",
      title: "Comprehensive Analytics Dashboard",
      description: "Real-time insights into payment status, occupancy rates, and property performance metrics"
    },
    {
      src: rent2,
      alt: "Maintenance Management",
      title: "Maintenance Request Tracking",
      description: "Efficient maintenance request handling with status tracking and completion analytics"
    },
    {
      src: rent3,
      alt: "Property Management",
      title: "Property & Payment Management",
      description: "Detailed property analytics with payment tracking and occupancy monitoring"
    },
    {
      src: rent4,
      alt: "Revenue Analytics",
      title: "Revenue & Financial Insights",
      description: "Monthly revenue tracking and year-to-date financial performance analysis"
    }
  ];

  return (
    <div className="min-h-screen">

<Helmet>
  <title>Property Management Software & Rental Solution | Cocopalms</title>
  <meta name="description" content="Comprehensive property management system in Kuwait. Connect landlords and tenants with our digital platform featuring rent collection, maintenance tracking, and property analytics." />
  <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  {/* Canonical URL - Multiple approaches for better compatibility */}
  <link rel="canonical" href={canonicalUrl} />
  
  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="Property Management System | Cocopalms - Landlord & Tenant Solutions" />
  <meta property="og:description" content="Comprehensive property management system in Kuwait. Connect landlords and tenants with our digital platform featuring rent collection, maintenance tracking, and property analytics." />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Cocopalms" />
  <meta property="og:locale" content="en_US" />
  
  {/* Twitter Card Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Property Management System | Cocopalms - Landlord & Tenant Solutions" />
  <meta name="twitter:description" content="Comprehensive property management system in Kuwait. Connect landlords and tenants with our digital platform featuring rent collection, maintenance tracking, and property analytics." />
  
  {/* Additional SEO Meta Tags */}
  <meta name="author" content="Cocopalms" />
  <meta name="keywords" content="property management Kuwait, rental management system, landlord tenant platform, rent collection software, property maintenance tracking, Kuwait real estate, digital lease management, tenant screening Kuwait, property analytics dashboard" />
  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  
  {/* Geographic and Business Meta Tags */}
  <meta name="geo.region" content="KW" />
  <meta name="geo.placename" content="Kuwait" />
  <meta name="language" content="en" />
  <meta name="distribution" content="global" />
  <meta name="rating" content="general" />
  
  
</Helmet>
      {/* Hero Section */}
      <section className="bg-custom-teal py-20 md:py-32 px-4 mt-24 md:mt-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-xl flex items-center justify-center mb-8 mx-auto">
            <Building2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Property Management System
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 mb-8">
          Connecting Landlords and Tenants for Ideal Rentals
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto px-4">
            Comprehensive property management and real estate solutions connecting landlords and tenants seamlessly
          </p>
         
          
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Project Overview
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our Real Estate Platform is a comprehensive B2B & B2C solution that revolutionizes property management and rental processes. The platform connects property owners, landlords, and tenants in a seamless digital ecosystem, making property rentals more efficient and transparent for all parties involved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websiteScreenshots.map((screenshot, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-200">
                <div className="relative overflow-hidden">
                  <img 
                    src={screenshot.src} 
                    alt={screenshot.alt}
                    className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{screenshot.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{screenshot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admin Dashboard Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Admin Dashboard
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Powerful administrative interface providing landlords and property managers with comprehensive control over their rental operations, analytics, and tenant management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {adminDashboardScreenshots.map((screenshot, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-200">
                <div className="relative overflow-hidden">
                  <img 
                    src={screenshot.src} 
                    alt={screenshot.alt}
                    className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{screenshot.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{screenshot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Platform Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-200">
                  <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Who We Serve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whoWeServe.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center">
                  <div className={`${service.color} w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform Impact Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Platform Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl">
              <div className="text-5xl font-bold text-teal-600 mb-4">1000+</div>
              <div className="text-gray-700 font-semibold text-lg">Properties Listed</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl">
              <div className="text-5xl font-bold text-green-600 mb-4">500+</div>
              <div className="text-gray-700 font-semibold text-lg">Active Landlords</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl">
              <div className="text-5xl font-bold text-purple-600 mb-4">2000+</div>
              <div className="text-gray-700 font-semibold text-lg">Registered Tenants</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl">
              <div className="text-5xl font-bold text-orange-600 mb-4">98%</div>
              <div className="text-gray-700 font-semibold text-lg">User Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-custom-teal to-teal-600">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Property Management?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Join thousands of landlords and tenants already using our platform to streamline their property rental operations.
          </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/what-we-do" 
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-semibold transition duration-300"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyManagementSystem;