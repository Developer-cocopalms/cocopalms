import React, { useState, useEffect } from 'react';
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
import { getPageKeywords } from '../pages/hooks/keywordsService';
import { useTranslation } from "react-i18next";

const ERPEcosystem = () => {
  const canonicalUrl = "https://cocopalms.io/what-we-do/erp-solution";
  const [keywords, setKeywords] = useState('ERP solutions, enterprise software, business automation, resource planning');
  const { t, i18n } = useTranslation();
  
  // Get current language direction
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    const fetchKeywords = async () => {
      const pageKeywords = await getPageKeywords('what-we-do/erp-solution');
      if (pageKeywords) {
        setKeywords(pageKeywords);
      }
    };
    fetchKeywords();
  }, []);

  // Update meta description for ERP page
  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Cocopalms provides tailored ERP solutions for F&B and enterprise businesses, streamlining operations and enhancing efficiency for sustainable growth.');
    }
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

  const erpModules = [
    {
      icon: ChefHat,
      title: t('erpSolution.modules.items.0.title'),
      description: t('erpSolution.modules.items.0.description'),
      features: t('erpSolution.modules.items.0.features', { returnObjects: true }),
      color: "bg-orange-100 text-orange-600",
      image: "kitchen-module.png"
    },
    {
      icon: BookOpen,
      title: t('erpSolution.modules.items.1.title'),
      description: t('erpSolution.modules.items.1.description'),
      features: t('erpSolution.modules.items.1.features', { returnObjects: true }),
      color: "bg-blue-100 text-blue-600",
      image: "books-module.png"
    },
    {
      icon: Users,
      title: t('erpSolution.modules.items.2.title'),
      description: t('erpSolution.modules.items.2.description'),
      features: t('erpSolution.modules.items.2.features', { returnObjects: true }),
      color: "bg-green-100 text-green-600",
      image: "hrms-module.png"
    },
    {
      icon: Package,
      title: t('erpSolution.modules.items.3.title'),
      description: t('erpSolution.modules.items.3.description'),
      features: t('erpSolution.modules.items.3.features', { returnObjects: true }),
      color: "bg-purple-100 text-purple-600",
      image: "inventory-module.png"
    },
    {
      icon: ShoppingCart,
      title: t('erpSolution.modules.items.4.title'),
      description: t('erpSolution.modules.items.4.description'),
      features: t('erpSolution.modules.items.4.features', { returnObjects: true }),
      color: "bg-teal-100 text-teal-600",
      image: "ecommerce-module.png"
    },
    {
      icon: TrendingUp,
      title: t('erpSolution.modules.items.5.title'),
      description: t('erpSolution.modules.items.5.description'),
      features: t('erpSolution.modules.items.5.features', { returnObjects: true }),
      color: "bg-indigo-100 text-indigo-600",
      image: "sales-module.png"
    },
    {
      icon: Building2,
      title: t('erpSolution.modules.items.6.title'),
      description: t('erpSolution.modules.items.6.description'),
      features: t('erpSolution.modules.items.6.features', { returnObjects: true }),
      color: "bg-pink-100 text-pink-600",
      image: "crm-module.png"
    },
    {
      icon: Truck,
      title: t('erpSolution.modules.items.7.title'),
      description: t('erpSolution.modules.items.7.description'),
      features: t('erpSolution.modules.items.7.features', { returnObjects: true }),
      color: "bg-yellow-100 text-yellow-600",
      image: "delivery-module.png"
    },
    {
      icon: Target,
      title: t('erpSolution.modules.items.8.title'),
      description: t('erpSolution.modules.items.8.description'),
      features: t('erpSolution.modules.items.8.features', { returnObjects: true }),
      color: "bg-red-100 text-red-600",
      image: "marka-module.png"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: t('erpSolution.benefits.items.0.title'),
      description: t('erpSolution.benefits.items.0.description')
    },
    {
      icon: BarChart3,
      title: t('erpSolution.benefits.items.1.title'),
      description: t('erpSolution.benefits.items.1.description')
    },
    {
      icon: Shield,
      title: t('erpSolution.benefits.items.2.title'),
      description: t('erpSolution.benefits.items.2.description')
    },
    {
      icon: Globe,
      title: t('erpSolution.benefits.items.3.title'),
      description: t('erpSolution.benefits.items.3.description')
    },
    {
      icon: Settings,
      title: t('erpSolution.benefits.items.4.title'),
      description: t('erpSolution.benefits.items.4.description')
    },
    {
      icon: Clock,
      title: t('erpSolution.benefits.items.5.title'),
      description: t('erpSolution.benefits.items.5.description')
    }
  ];

  const industries = t('erpSolution.industries.list', { returnObjects: true });

  const screenshots = [
    {
      src:"kitchen.png",
      alt: "Kitchen Module Dashboard",
      title: t('erpSolution.screenshots.items.0.title'),
      description: t('erpSolution.screenshots.items.0.description')
    },
    {
      src: "finance.png", 
      alt: "Books Module Dashboard",
      title: t('erpSolution.screenshots.items.1.title'),
      description: t('erpSolution.screenshots.items.1.description')
    },
    {
      src: "hr.png",
      alt: "HRMS Module Dashboard", 
      title: t('erpSolution.screenshots.items.2.title'),
      description: t('erpSolution.screenshots.items.2.description')
    },
    {
      src: "inventory.png",
      alt: "Inventory Module Dashboard",
      title: t('erpSolution.screenshots.items.3.title'),
      description: t('erpSolution.screenshots.items.3.description')
    },
    {
      src: "ecom.png",
      alt: "E-commerce Module Dashboard",
      title: t('erpSolution.screenshots.items.4.title'),
      description: t('erpSolution.screenshots.items.4.description')
    },
    {
      src: "sales.png", 
      alt: "Sales Module Dashboard",
      title: t('erpSolution.screenshots.items.5.title'),
      description: t('erpSolution.screenshots.items.5.description')
    }
  ];

  const statisticsData = t('erpSolution.statistics.items', { returnObjects: true });
  const integrationFeatures = [
    {
      title: t('erpSolution.integration.features.0.title'),
      description: t('erpSolution.integration.features.0.description')
    },
    {
      title: t('erpSolution.integration.features.1.title'),
      description: t('erpSolution.integration.features.1.description')
    },
    {
      title: t('erpSolution.integration.features.2.title'),
      description: t('erpSolution.integration.features.2.description')
    }
  ];

  const implementationSteps = t('erpSolution.integration.implementation.steps', { returnObjects: true });

  return (
    <div className="min-h-screen" dir={isRTL ? 'rtl' : 'ltr'}>
      <Helmet>
        <title>ERP Solutions for F&B & Enterprise | Cocopalms</title>
        <meta 
          name="description" 
          content="Cocopalms provides tailored ERP solutions for F&B and enterprise businesses, streamlining operations and enhancing efficiency for sustainable growth."
        />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://cocopalms.io/what-we-do/erp-solution" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Complete ERP Ecosystem - Business Management Platform | Cocopalms" />
        <meta property="og:description" content="Cocopalms provides tailored ERP solutions for F&B and enterprise businesses, streamlining operations and enhancing efficiency for sustainable growth." />
        <meta property="og:url" content="https://cocopalms.io/what-we-do/erp-solution" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Cocopalms" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Cocopalms" />
        
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
            {t('erpSolution.hero.title')}
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 mb-8">
            {t('erpSolution.hero.subtitle')}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-10">
            {t('erpSolution.hero.description')}
          </p>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('erpSolution.screenshots.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {t('erpSolution.screenshots.subtitle')}
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
              {t('erpSolution.modules.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {t('erpSolution.modules.subtitle')}
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
                      <div key={featureIndex} className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-3`}>
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
                      {t('erpSolution.common.learnMore')}
                      <ArrowRight className={`${isRTL ? 'mr-2 group-hover:-translate-x-1' : 'ml-2 group-hover:translate-x-1'} w-4 h-4 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
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
              {t('erpSolution.benefits.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {t('erpSolution.benefits.subtitle')}
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
              {t('erpSolution.statistics.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('erpSolution.statistics.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statisticsData.map((stat, index) => {
              const gradientClasses = [
                'bg-gradient-to-br from-teal-50 to-teal-100',
                'bg-gradient-to-br from-green-50 to-emerald-100',
                'bg-gradient-to-br from-purple-50 to-violet-100',
                'bg-gradient-to-br from-orange-50 to-amber-100'
              ];
              const valueClasses = [
                'text-teal-600',
                'text-green-600',
                'text-purple-600',
                'text-orange-600'
              ];
              
              return (
                <div key={index} className={`text-center p-6 ${gradientClasses[index]} rounded-2xl`}>
                  <div className={`text-4xl font-bold ${valueClasses[index]} mb-2`}>{stat.value}</div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('erpSolution.industries.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('erpSolution.industries.subtitle')}
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
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:grid-cols-2' : ''}`}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('erpSolution.integration.title')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {t('erpSolution.integration.description')}
              </p>
              <div className="space-y-4">
                {integrationFeatures.map((feature, index) => (
                  <div key={index} className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-3`}>
                    <div className="bg-teal-100 p-2 rounded-lg mt-1">
                      <CheckCircle className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('erpSolution.integration.implementation.title')}</h3>
              <div className="space-y-4">
              {t('erpSolution.integration.implementation.steps', { returnObjects: true }).map(
      (step, index) => (
        <div key={index} className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
            {index + 1}
          </div>
          <span className="text-gray-700">{step}</span>
        </div>
      )
    )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-custom-teal to-teal-600">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          {t('erpSolution.cta.title')}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
          {t('erpSolution.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition duration-300 flex items-center justify-center"
            >
              {t('erpSolution.cta.primaryButton')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/what-we-do" 
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-semibold transition duration-300"
            >
              {t('erpSolution.cta.secondaryButton')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ERPEcosystem;