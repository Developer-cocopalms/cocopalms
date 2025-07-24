import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { 
  Building2, 
  Users, 
  TrendingUp, 
  ShoppingCart, 
  Package, 
  ChefHat, 
  BookOpen, 
  Truck, 
  Target, 
  BarChart3, 
  Shield, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Zap,
  Globe,
  Settings
} from 'lucide-react';



const ERPEcosystem = () => {
  const canonicalUrl = "https://cocopalms.io/what-we-do/erp-solution";

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

  
  const erpModules = [
    {
      icon: ChefHat,
      title: "Kitchen",
      description: "Meal planning, ingredient tracking, and recipe management.",
      features: ["Recipe Database", "Ingredient Tracking", "Meal Planning", "Kitchen Workflow"],
      color: "bg-orange-100 text-orange-600",
      image: "kitchen-module.png"
    },
    {
      icon: BookOpen,
      title: "Books",
      description: "Organize financial records and manage transactions efficiently.",
      features: ["Financial Records", "Transaction Management", "Accounting", "Reporting"],
      color: "bg-blue-100 text-blue-600",
      image: "books-module.png"
    },
    {
      icon: Users,
      title: "HRMS",
      description: "Simplify employee management, payroll, and attendance tracking.",
      features: ["Employee Management", "Payroll Processing", "Attendance Tracking", "HR Analytics"],
      color: "bg-green-100 text-green-600",
      image: "hrms-module.png"
    },
    {
      icon: Package,
      title: "Inventory",
      description: "Track stock levels, purchases, and supplier data in real-time.",
      features: ["Stock Management", "Purchase Orders", "Supplier Management", "Real-time Tracking"],
      color: "bg-purple-100 text-purple-600",
      image: "inventory-module.png"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Manage online sales, orders, and customer interactions.",
      features: ["Online Store", "Order Management", "Customer Portal", "Payment Integration"],
      color: "bg-teal-100 text-teal-600",
      image: "ecommerce-module.png"
    },
    {
      icon: TrendingUp,
      title: "Sales",
      description: "Monitor sales performance, trends, and customer insights.",
      features: ["Sales Analytics", "Performance Tracking", "Customer Insights", "Revenue Reports"],
      color: "bg-indigo-100 text-indigo-600",
      image: "sales-module.png"
    },
    {
      icon: Building2,
      title: "CRM",
      description: "Improve customer relationships and streamline communication.",
      features: ["Customer Database", "Lead Management", "Communication Tools", "Pipeline Tracking"],
      color: "bg-pink-100 text-pink-600",
      image: "crm-module.png"
    },
    {
      icon: Truck,
      title: "Delivery",
      description: "Optimize logistics, tracking, and order fulfillment.",
      features: ["Route Optimization", "Delivery Tracking", "Order Fulfillment", "Logistics Management"],
      color: "bg-yellow-100 text-yellow-600",
      image: "delivery-module.png"
    },
    {
      icon: Target,
      title: "Marka",
      description: "Enhance brand strategy with data-driven marketing tools.",
      features: ["Brand Management", "Marketing Analytics", "Campaign Tools", "Customer Segmentation"],
      color: "bg-red-100 text-red-600",
      image: "marka-module.png"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Increased Efficiency",
      description: "Streamline operations and reduce manual work with automated processes."
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Make informed decisions with comprehensive reporting and dashboards."
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade security to protect your business data and operations."
    },
    {
      icon: Globe,
      title: "Scalable Solution",
      description: "Grows with your business needs, from startup to enterprise level."
    },
    {
      icon: Settings,
      title: "Customizable",
      description: "Tailor the system to match your specific business requirements."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical support and system maintenance."
    }
  ];

  const industries = [
    "Restaurants & Food Service",
    "Retail & E-commerce",
    "Manufacturing",
    "Healthcare",
    "Education",
    "Professional Services",
    "Logistics & Transportation",
    "Real Estate"
  ];

  const screenshots = [
    {
      src:"kitchen.png",
      alt: "Kitchen Module Dashboard",
      title: "Kitchen Management",
      description: "Comprehensive meal planning and ingredient tracking interface"
    },
    {
      src: "finance.png", 
      alt: "Books Module Dashboard",
      title: "Financial Management",
      description: "Complete financial records and transaction management system"
    },
    {
      src: "hr.png",
      alt: "HRMS Module Dashboard", 
      title: "Human Resources",
      description: "Employee management with payroll and attendance tracking"
    },
    {
      src: "inventory.png",
      alt: "Inventory Module Dashboard",
      title: "Inventory Control",
      description: "Real-time stock management and supplier coordination"
    },
    {
      src: "ecom.png",
      alt: "E-commerce Module Dashboard",
      title: "Online Sales",
      description: "Complete e-commerce platform with order management"
    },
    {
      src: "sales.png", 
      alt: "Sales Module Dashboard",
      title: "Sales Analytics",
      description: "Advanced sales performance monitoring and insights"
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
  <title>ERP Solutions for F&B & Enterprise | Cocopalms</title>
  <meta 
    name="description" 
    content="Comprehensive ERP solution with 9 integrated modules: Kitchen, Books, HRMS, Inventory, E-commerce, Sales, CRM, Delivery & Marketing. Transform your business operations in Kuwait."
  />
  <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  {/* Canonical URL */}
  <link rel="canonical" href="https://cocopalms.io/what-we-do/erp-solution" />
  
  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="Complete ERP Ecosystem - Business Management Platform | Cocopalms" />
  <meta property="og:description" content="Comprehensive ERP solution with 9 integrated modules: Kitchen, Books, HRMS, Inventory, E-commerce, Sales, CRM, Delivery & Marketing. Transform your business operations in Kuwait." />
  <meta property="og:url" content="https://cocopalms.io/what-we-do/erp-solution" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Cocopalms" />
  
  {/* Twitter Card Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Complete ERP Ecosystem - Business Management Platform | Cocopalms" />
  <meta name="twitter:description" content="Comprehensive ERP solution with 9 integrated modules: Kitchen, Books, HRMS, Inventory, E-commerce, Sales, CRM, Delivery & Marketing. Transform your business operations in Kuwait." />
  
  {/* Additional SEO Meta Tags */}
  <meta name="author" content="Cocopalms" />
  <meta name="keywords" content="ERP system Kuwait, business management software, integrated ERP solution, kitchen management system, HRMS Kuwait, inventory management, e-commerce platform, CRM system, delivery management, Kuwait ERP software, BizOSuite" />
  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  
  {/* Structured Data */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Complete ERP Ecosystem",
      "applicationCategory": "BusinessApplication",
      "provider": {
        "@type": "Organization",
        "name": "Cocopalms",
        "url": "https://cocopalms.io",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "Kuwait"
        }
      },
      "description": "Comprehensive ERP solution with 9 integrated modules for complete business management including Kitchen, Books, HRMS, Inventory, E-commerce, Sales, CRM, Delivery and Marketing.",
      "url": "https://cocopalms.io/what-we-do/erp-solution",
      "operatingSystem": "Web-based",
      "applicationSubCategory": "Enterprise Resource Planning",
      "offers": {
        "@type": "Offer",
        "description": "Complete ERP Ecosystem with integrated business modules",
        "seller": {
          "@type": "Organization", 
          "name": "Cocopalms"
        }
      },
      "featureList": [
        "Kitchen Management - Meal planning and ingredient tracking",
        "Books - Financial records and transaction management", 
        "HRMS - Employee management and payroll processing",
        "Inventory - Stock management and supplier coordination",
        "E-commerce - Online sales and order management", 
        "Sales Analytics - Performance tracking and insights",
        "CRM - Customer relationship management",
        "Delivery - Logistics and order fulfillment",
        "Marka - Brand strategy and marketing tools"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "50"
      },
      "applicationSuite": [
        {
          "@type": "SoftwareApplication",
          "name": "Kitchen Module",
          "description": "Meal planning, ingredient tracking, and recipe management"
        },
        {
          "@type": "SoftwareApplication", 
          "name": "Books Module",
          "description": "Financial records and transaction management"
        },
        {
          "@type": "SoftwareApplication",
          "name": "HRMS Module", 
          "description": "Employee management, payroll, and attendance tracking"
        },
        {
          "@type": "SoftwareApplication",
          "name": "Inventory Module",
          "description": "Stock management and supplier coordination"
        },
        {
          "@type": "SoftwareApplication",
          "name": "E-commerce Module",
          "description": "Online sales and order management platform"
        },
        {
          "@type": "SoftwareApplication",
          "name": "Sales Module", 
          "description": "Sales analytics and performance tracking"
        },
        {
          "@type": "SoftwareApplication",
          "name": "CRM Module",
          "description": "Customer relationship and communication management"
        },
        {
          "@type": "SoftwareApplication",
          "name": "Delivery Module",
          "description": "Logistics optimization and order fulfillment"
        },
        {
          "@type": "SoftwareApplication",
          "name": "Marka Module",
          "description": "Brand strategy and marketing analytics tools"
        }
      ],
      "target": [
        "Restaurants & Food Service",
        "Retail & E-commerce", 
        "Manufacturing",
        "Healthcare",
        "Education",
        "Professional Services",
        "Logistics & Transportation",
        "Real Estate"
      ]
    })}
  </script>
  
  {/* Additional Service Schema */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "ERP Implementation Services",
      "provider": {
        "@type": "Organization",
        "name": "Cocopalms"
      },
      "description": "Complete ERP ecosystem implementation with custom configuration, data migration, training and ongoing support.",
      "serviceType": "ERP Implementation",
      "areaServed": {
        "@type": "Country",
        "name": "Kuwait"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "ERP Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Initial Consultation",
              "description": "Requirements analysis and system planning"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Configuration",
              "description": "System setup and data migration"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Team Training",
              "description": "Comprehensive user training and system deployment"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Ongoing Support", 
              "description": "24/7 technical support and system optimization"
            }
          }
        ]
      }
    })}
  </script>
</Helmet>
      
      {/* Hero Section */}
      <section className="bg-custom-teal py-20 md:py-32 px-4 mt-24 md:mt-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-xl flex items-center justify-center mb-8 mx-auto">
            <Building2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Complete ERP Ecosystem
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 mb-8">
            Unified Business Management Platform
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-10">
            Transform your business operations with our comprehensive ERP solution that integrates all your business processes into one powerful, unified platform designed for modern enterprises.
          </p>
          
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              ERP System in Action
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              See how our comprehensive ERP modules work together to streamline your business operations with real-time data and intuitive interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {screenshots.map((screenshot, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-200">
                <div className="relative overflow-hidden">
                <img 
                    src={`/images/${screenshot.src}`} 
                    alt={screenshot.alt}
                    className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-48 bg-gradient-to-br from-teal-400 to-teal-600 items-center justify-center">
                    <div className="text-center text-white">
                      <Building2 className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p className="text-sm opacity-75">{screenshot.title}</p>
                    </div>
                  </div>
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

      {/* ERP Modules Grid */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Business Modules
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our ERP ecosystem covers every aspect of your business operations with seamlessly integrated modules designed to work together perfectly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {erpModules.map((module, index) => {
              const IconComponent = module.icon;
              return (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-200">
                  <div className={`${module.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{module.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{module.description}</p>
                  <div className="space-y-3">
                    {module.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <a 
                      href="https://bizosuite.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:text-teal-700 font-medium flex items-center group"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
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
              Why Choose Our ERP Solution?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the power of integrated business management with features designed to drive growth and efficiency.
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
              Proven Results
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our ERP ecosystem has helped businesses across industries achieve remarkable growth and operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl">
              <div className="text-4xl font-bold text-teal-600 mb-2">50+</div>
              <div className="text-gray-700 font-medium">Active Businesses</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl">
              <div className="text-4xl font-bold text-green-600 mb-2">40%</div>
              <div className="text-gray-700 font-medium">Efficiency Increase</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-gray-700 font-medium">System Uptime</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-700 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Trusted Across Industries
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our ERP solution is designed to meet the unique needs of various industries and business types.
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

      {/* Integration Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Seamless Integration & Workflow
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our ERP ecosystem is built on the principle of unified data and seamless workflow. Every module communicates with others to provide a comprehensive view of your business operations, eliminating data silos and improving decision-making.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-teal-100 p-2 rounded-lg mt-1">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Real-time Data Synchronization</h4>
                    <p className="text-gray-600">All modules share data instantly, ensuring consistency across your entire business.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-teal-100 p-2 rounded-lg mt-1">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Automated Workflows</h4>
                    <p className="text-gray-600">Streamline processes with intelligent automation between different business functions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-teal-100 p-2 rounded-lg mt-1">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Unified Dashboard</h4>
                    <p className="text-gray-600">Get a complete overview of your business with customizable dashboards and reports.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Implementation Support</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <span className="text-gray-700">Initial consultation and requirements analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <span className="text-gray-700">Custom configuration and data migration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <span className="text-gray-700">Team training and system deployment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <span className="text-gray-700">Ongoing support and system optimization</span>
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Join hundreds of businesses already using our ERP ecosystem to streamline operations, increase efficiency, and drive growth.
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

export default ERPEcosystem;