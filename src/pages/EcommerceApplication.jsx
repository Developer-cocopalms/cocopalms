import React, { useEffect } from 'react';
import { 
  ShoppingCart, 
  CreditCard, 
  Smartphone, 
  Globe, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  Settings, 
  Package, 
  Truck, 
  CheckCircle,
  Database,
  Cloud,
  Headphones
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import ecom1Image from '../assets/ecom1.png';
import ecom2Image from '../assets/ecom2.png';
import ecom3Image from '../assets/ecom3.png';
import ecom4Image from '../assets/ecom4.png';

const EcommerceApplications = () => {

  const canonicalUrl = "https://cocopalms.io/what-we-do/ecommerce-application";

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

  const ecomFeatures = [
    {
      icon: ShoppingCart,
      title: "Complete Online Store",
      description: "Build beautiful, responsive online stores with advanced product catalogs and shopping cart functionality.",
      features: ["Product Catalog", "Shopping Cart", "Wishlist", "Product Search & Filters"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: CreditCard,
      title: "Payment Integration",
      description: "Secure payment processing with multiple payment gateways and cryptocurrency support.",
      features: ["Multiple Payment Methods", "Secure Transactions", "Cryptocurrency Support", "Subscription Billing"],
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Smartphone,
      title: "Mobile Commerce",
      description: "Native mobile apps and responsive design for seamless shopping on any device.",
      features: ["Mobile Apps", "Responsive Design", "Push Notifications", "Mobile Payments"],
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Real-time inventory tracking with automated stock alerts and supplier management.",
      features: ["Stock Tracking", "Automated Alerts", "Supplier Management", "Multi-warehouse"],
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Users,
      title: "Customer Management",
      description: "Comprehensive customer profiles with purchase history and personalized experiences.",
      features: ["Customer Profiles", "Purchase History", "Personalization", "Loyalty Programs"],
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: TrendingUp,
      title: "Analytics & Reporting",
      description: "Advanced analytics and reporting tools to track performance and optimize sales.",
      features: ["Sales Analytics", "Customer Insights", "Performance Reports", "Revenue Tracking"],
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: Truck,
      title: "Order Management",
      description: "Streamlined order processing with automated workflows and shipping integration.",
      features: ["Order Processing", "Shipping Integration", "Tracking", "Returns Management"],
      color: "bg-teal-100 text-teal-600"
    },
    {
      icon: Globe,
      title: "Multi-channel Selling",
      description: "Sell across multiple platforms and marketplaces with centralized management.",
      features: ["Multi-platform", "Marketplace Integration", "Social Commerce", "Cross-channel Sync"],
      color: "bg-red-100 text-red-600"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with advanced caching and CDN integration for instant page loads."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SSL encryption, fraud detection, and PCI compliance."
    },
    {
      icon: Settings,
      title: "Highly Customizable",
      description: "Tailor every aspect of your store to match your brand and business requirements."
    },
    {
      icon: Cloud,
      title: "Cloud-Based",
      description: "Scalable cloud infrastructure that grows with your business needs."
    },
    {
      icon: Database,
      title: "Advanced SEO",
      description: "Built-in SEO tools and optimization features to improve search rankings."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance for your e-commerce platform."
    }
  ];

  const industries = [
    "Food & Beverages",
    "Health & Wellness",
    "Electronics & Gadgets",
    "Home & Garden",
    "Sports & Fitness",
    "Books & Media",
  ];

  const technologies = [
    { name: "React/Next.js", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Stripe/PayPal", icon: "💳" },
    { name: "AWS/Azure", icon: "☁️" }
  
  ];

  return (
    <div className="min-h-screen">
      

<Helmet>
  <title>E-commerce Application Development for F&B & Retail | Cocopalms </title>
  <meta 
    name="description" 
    content="Professional e-commerce development services in Kuwait. Custom online stores, shopping cart solutions, payment integration, and scalable e-commerce platforms. Transform your business with our proven solutions." 
  />
  <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  {/* Canonical URL */}
  <link rel="canonical" href={canonicalUrl} />
  
  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="E-commerce Development Services | Cocopalms - Online Store Solutions" />
  <meta property="og:description" content="Professional e-commerce development services in Kuwait. Custom online stores, shopping cart solutions, payment integration, and scalable e-commerce platforms. Transform your business with our proven solutions." />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Cocopalms" />
  
  {/* Twitter Card Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="E-commerce Development Services | Cocopalms - Online Store Solutions" />
  <meta name="twitter:description" content="Professional e-commerce development services in Kuwait. Custom online stores, shopping cart solutions, payment integration, and scalable e-commerce platforms." />
  
  {/* Keywords */}
  <meta name="keywords" content="e-commerce development Kuwait, online store development, shopping cart solutions, payment gateway integration, custom e-commerce platforms, multi-vendor marketplace, mobile commerce, Kuwait e-commerce developers, online business solutions, digital commerce" />
  
  {/* Geographic targeting */}
  <meta name="geo.region" content="KW" />
  <meta name="geo.placename" content="Kuwait" />
  <meta name="author" content="Cocopalms" />
  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
</Helmet>
      {/* Hero Section */}
      <section className="bg-custom-teal py-20 md:py-32 px-4 mt-24 md:mt-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-xl flex items-center justify-center mb-8 mx-auto">
            <ShoppingCart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            E-commerce Applications
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 mb-8">
            Professional Online Store Solutions
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-10">
            Build powerful, scalable e-commerce platforms that drive sales and deliver exceptional customer experiences. From simple online stores to complex multi-vendor marketplaces, we create solutions that grow with your business.
          </p>
        </div>
      </section>

      {/* Images Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-200">
              <div className="relative overflow-hidden">
                <img 
                  src={ecom1Image} 
                  alt="E-commerce Application Screenshot 1"
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-64 bg-gradient-to-br from-teal-400 to-teal-600 items-center justify-center">
                  <div className="text-center text-white">
                    <ShoppingCart className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm opacity-75">E-commerce Solution</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
            </div>
            
            <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-200">
              <div className="relative overflow-hidden">
                <img 
                  src={ecom2Image} 
                  alt="E-commerce Application Screenshot 2"
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-64 bg-gradient-to-br from-teal-400 to-teal-600 items-center justify-center">
                  <div className="text-center text-white">
                    <ShoppingCart className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm opacity-75">E-commerce Solution</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
            </div>
            
            <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-200">
              <div className="relative overflow-hidden">
                <img 
                  src={ecom3Image} 
                  alt="E-commerce Application Screenshot 3"
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-64 bg-gradient-to-br from-teal-400 to-teal-600 items-center justify-center">
                  <div className="text-center text-white">
                    <ShoppingCart className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm opacity-75">E-commerce Solution</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
            </div>
            
            <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-200">
              <div className="relative overflow-hidden">
                <img 
                  src={ecom4Image} 
                  alt="E-commerce Application Screenshot 4"
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-64 bg-gradient-to-br from-teal-400 to-teal-600 items-center justify-center">
                  <div className="text-center text-white">
                    <ShoppingCart className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm opacity-75">E-commerce Solution</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete E-commerce Features
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build and manage a successful online business, from storefront to backend management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ecomFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-200">
                  <div className={`${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our E-commerce Solutions?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Built for performance, security, and scalability with cutting-edge technology and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="bg-teal-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Proven E-commerce Success
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our e-commerce solutions have helped businesses achieve exceptional growth and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl">
              <div className="text-4xl font-bold text-teal-600 mb-2">20+</div>
              <div className="text-gray-700 font-medium">Online Stores Built</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl">
              <div className="text-4xl font-bold text-green-600 mb-2">250%</div>
              <div className="text-gray-700 font-medium">Average Sales Increase</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">0.2s</div>
              <div className="text-gray-700 font-medium">Average Load Time</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl">
              <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-gray-700 font-medium">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our e-commerce solutions are tailored to meet the unique needs of various industries and business models.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center border border-gray-100">
                <div className="text-gray-900 font-semibold">{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Cutting-Edge Technology Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We use the latest technologies and frameworks to build fast, secure, and scalable e-commerce platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center border border-gray-100">
                <div className="text-3xl mb-3">{tech.icon}</div>
                <div className="text-gray-900 font-semibold text-sm">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our E-commerce Development Process
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                From concept to launch, we follow a proven development methodology that ensures your e-commerce platform is built to the highest standards and delivers exceptional results.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-teal-100 p-2 rounded-lg mt-1">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Discovery & Planning</h4>
                    <p className="text-gray-600">Understanding your business needs and target audience to create the perfect strategy.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg mt-1">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Design & Development</h4>
                    <p className="text-gray-600">Creating beautiful, user-friendly interfaces with robust backend functionality.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg mt-1">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Testing & Optimization</h4>
                    <p className="text-gray-600">Rigorous testing and performance optimization for the best user experience.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg mt-1">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Launch & Support</h4>
                    <p className="text-gray-600">Smooth deployment with ongoing maintenance and support services.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <div className="font-semibold text-gray-900">Week 1-2</div>
                    <div className="text-gray-600 text-sm">Requirements gathering and design mockups</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <div className="font-semibold text-gray-900">Week 3-8</div>
                    <div className="text-gray-600 text-sm">Development and feature implementation</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <div className="font-semibold text-gray-900">Week 9-10</div>
                    <div className="text-gray-600 text-sm">Testing, optimization, and content migration</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <div className="font-semibold text-gray-900">Week 11-12</div>
                    <div className="text-gray-600 text-sm">Launch preparation and go-live</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-custom-teal to-teal-600">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Launch Your Online Store?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Let's build an e-commerce platform that drives sales, engages customers, and scales with your business growth.
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

export default EcommerceApplications;