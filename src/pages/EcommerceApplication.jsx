import React, {useState, useEffect } from 'react';
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
import { getPageKeywords } from '../pages/hooks/keywordsService';
import { useTranslation } from "react-i18next";
import ecom1Image from '../assets/ecom1.png';
import ecom2Image from '../assets/ecom2.png';
import ecom3Image from '../assets/ecom3.png';
import ecom4Image from '../assets/ecom4.png';

const EcommerceApplications = () => {
  const { t, i18n } = useTranslation();
  
  // Get current language direction
  const isRTL = i18n.language === 'ar';

  const canonicalUrl = "https://cocopalms.io/what-we-do/ecommerce-application";
  const [keywords, setKeywords] = useState('eCommerce apps, online store, digital commerce, shopping solutions');
  

  useEffect(() => {
    const fetchKeywords = async () => {
      const pageKeywords = await getPageKeywords('what-we-do/ecommerce-application');
      if (pageKeywords) {
        setKeywords(pageKeywords);
      }
    };
    fetchKeywords();
  }, []);  
  
  // Update meta description for e-commerce page
useEffect(() => {
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', 'Cocopalms offers custom e-commerce application development for F&B and retail businesses, enhancing online sales with seamless user experiences.');
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

  const ecomFeatures = [
    {
      icon: ShoppingCart,
      title: t('ecommerceApplication.features.items.0.title'),
      description: t('ecommerceApplication.features.items.0.description'),
      features: t('ecommerceApplication.features.items.0.features', { returnObjects: true }),
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: CreditCard,
      title: t('ecommerceApplication.features.items.1.title'),
      description: t('ecommerceApplication.features.items.1.description'),
      features: t('ecommerceApplication.features.items.1.features', { returnObjects: true }),
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Smartphone,
      title: t('ecommerceApplication.features.items.2.title'),
      description: t('ecommerceApplication.features.items.2.description'),
      features: t('ecommerceApplication.features.items.2.features', { returnObjects: true }),
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Package,
      title: t('ecommerceApplication.features.items.3.title'),
      description: t('ecommerceApplication.features.items.3.description'),
      features: t('ecommerceApplication.features.items.3.features', { returnObjects: true }),
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Users,
      title: t('ecommerceApplication.features.items.4.title'),
      description: t('ecommerceApplication.features.items.4.description'),
      features: t('ecommerceApplication.features.items.4.features', { returnObjects: true }),
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: TrendingUp,
      title: t('ecommerceApplication.features.items.5.title'),
      description: t('ecommerceApplication.features.items.5.description'),
      features: t('ecommerceApplication.features.items.5.features', { returnObjects: true }),
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: Truck,
      title: t('ecommerceApplication.features.items.6.title'),
      description: t('ecommerceApplication.features.items.6.description'),
      features: t('ecommerceApplication.features.items.6.features', { returnObjects: true }),
      color: "bg-teal-100 text-teal-600"
    },
    {
      icon: Globe,
      title: t('ecommerceApplication.features.items.7.title'),
      description: t('ecommerceApplication.features.items.7.description'),
      features: t('ecommerceApplication.features.items.7.features', { returnObjects: true }),
      color: "bg-red-100 text-red-600"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: t('ecommerceApplication.benefits.items.0.title'),
      description: t('ecommerceApplication.benefits.items.0.description')
    },
    {
      icon: Shield,
      title: t('ecommerceApplication.benefits.items.1.title'),
      description: t('ecommerceApplication.benefits.items.1.description')
    },
    {
      icon: Settings,
      title: t('ecommerceApplication.benefits.items.2.title'),
      description: t('ecommerceApplication.benefits.items.2.description')
    },
    {
      icon: Cloud,
      title: t('ecommerceApplication.benefits.items.3.title'),
      description: t('ecommerceApplication.benefits.items.3.description')
    },
    {
      icon: Database,
      title: t('ecommerceApplication.benefits.items.4.title'),
      description: t('ecommerceApplication.benefits.items.4.description')
    },
    {
      icon: Headphones,
      title: t('ecommerceApplication.benefits.items.5.title'),
      description: t('ecommerceApplication.benefits.items.5.description')
    }
  ];

  const industries = t('ecommerceApplication.industries.list', { returnObjects: true });

  const technologies = t('ecommerceApplication.technologies.items', { returnObjects: true });

  const statistics = t('ecommerceApplication.statistics.items', { returnObjects: true });

  const processSteps = t('ecommerceApplication.process.steps', { returnObjects: true });

  const timelinePhases = t('ecommerceApplication.process.timeline.phases', { returnObjects: true });

  return (
    <div className="min-h-screen" dir={isRTL ? 'rtl' : 'ltr'}>
      

<Helmet>
  <title>E-commerce Application Development for F&B & Retail | Cocopalms </title>
  <meta 
    name="description" 
    content="Cocopalms offers custom e-commerce application development for F&B and retail businesses, enhancing online sales with seamless user experiences." 
  />
  <meta name="keywords" content={keywords} />
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
            {t('ecommerceApplication.hero.title')}
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 mb-8">
            {t('ecommerceApplication.hero.subtitle')}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-10">
            {t('ecommerceApplication.hero.description')}
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
              {t('ecommerceApplication.features.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {t('ecommerceApplication.features.subtitle')}
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
                        <CheckCircle className={`w-4 h-4 text-green-500 flex-shrink-0 ${isRTL ? 'ml-2 mr-0' : 'mr-2 ml-0'}`} />
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
              {t('ecommerceApplication.benefits.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {t('ecommerceApplication.benefits.subtitle')}
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
              {t('ecommerceApplication.statistics.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('ecommerceApplication.statistics.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl">
                <div className="text-4xl font-bold text-teal-600 mb-2">{stat.value}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('ecommerceApplication.industries.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('ecommerceApplication.industries.subtitle')}
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
              {t('ecommerceApplication.technologies.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('ecommerceApplication.technologies.subtitle')}
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
                {t('ecommerceApplication.process.title')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {t('ecommerceApplication.process.description')}
              </p>
              <div className="space-y-4">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-teal-100 p-2 rounded-lg mt-1">
                      <CheckCircle className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('ecommerceApplication.process.timeline.title')}
              </h3>
              <div className="space-y-4">
                {timelinePhases.map((phase, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">{index + 1}</div>
                    <div>
                      <div className="font-semibold text-gray-900">{phase.period}</div>
                      <div className="text-gray-600 text-sm">{phase.task}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-custom-teal to-teal-600">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('ecommerceApplication.cta.title')}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            {t('ecommerceApplication.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition duration-300"
            >
              {t('ecommerceApplication.cta.primaryButton')}
            </Link>
            <Link 
              to="/what-we-do" 
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 rounded-lg font-medium transition duration-300"
            >
              {t('ecommerceApplication.cta.secondaryButton')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceApplications;