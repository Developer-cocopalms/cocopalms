import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  UtensilsCrossed, 
  ShoppingCart, 
  Users, 
  TrendingUp, 
  Clock, 
  CreditCard, 
  Smartphone, 
  Truck, 
  Star, 
  ChefHat, 
  Package, 
  BarChart3, 
  ArrowRight,
  Zap,
  Store,
  Receipt,
  Bell,
  QrCode,
  Shield
  } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { getPageKeywords } from '../pages/hooks/keywordsService';
import { useTranslation } from "react-i18next";
// Import images
import coco1 from '../assets/coco1.png';
import coco2 from '../assets/coco2.png';
import coco3 from '../assets/coco3.png';
import coco4 from '../assets/coco4.png';

const FandbSolution = () => {
  const [keywords, setKeywords] = useState('F&B solutions, restaurant software, food tech, dine-in management, POS system');
  const canonicalUrl = "https://cocopalms.io/what-we-do/fandb-solution";
  const { t, i18n } = useTranslation();
  
  // Get current language direction
  const isRTL = i18n.language === 'ar';
  
  useEffect(() => {
    const fetchKeywords = async () => {
      const pageKeywords = await getPageKeywords('what-we-do/fandb-solution');
      if (pageKeywords) {
        setKeywords(pageKeywords);
      }
    };
    fetchKeywords();
  }, []);


  // Update meta description for F&B solution page
useEffect(() => {
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', 'Cocopalms F&B platform offers tailored solutions for food and beverage businesses, enhancing operations, management, and customer experiences efficiently.');
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

  const platformFeatures = [
    {
      icon: UtensilsCrossed,
      title: t('fandbSolution.platformFeatures.digitalMenuManagement.title'),
      description: t('fandbSolution.platformFeatures.digitalMenuManagement.description'),
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: ShoppingCart,
      title: t('fandbSolution.platformFeatures.onlineOrderingSystem.title'),
      description: t('fandbSolution.platformFeatures.onlineOrderingSystem.description'),
      color: "bg-green-100 text-green-600"
    },
    {
      icon: CreditCard,
      title: t('fandbSolution.platformFeatures.integratedPaymentGateway.title'),
      description: t('fandbSolution.platformFeatures.integratedPaymentGateway.description'),
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Truck,
      title: t('fandbSolution.platformFeatures.deliveryManagement.title'),
      description: t('fandbSolution.platformFeatures.deliveryManagement.description'),
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Users,
      title: t('fandbSolution.platformFeatures.customerManagement.title'),
      description: t('fandbSolution.platformFeatures.customerManagement.description'),
      color: "bg-teal-100 text-teal-600"
    },
    {
      icon: BarChart3,
      title: t('fandbSolution.platformFeatures.analyticsReporting.title'),
      description: t('fandbSolution.platformFeatures.analyticsReporting.description'),
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: QrCode,
      title: t('fandbSolution.platformFeatures.qrCodeIntegration.title'),
      description: t('fandbSolution.platformFeatures.qrCodeIntegration.description'),
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: Bell,
      title: t('fandbSolution.platformFeatures.realTimeNotifications.title'),
      description: t('fandbSolution.platformFeatures.realTimeNotifications.description'),
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: Receipt,
      title: t('fandbSolution.platformFeatures.inventoryManagement.title'),
      description: t('fandbSolution.platformFeatures.inventoryManagement.description'),
      color: "bg-red-100 text-red-600"
    }
  ];

  const serviceTypes = [
    {
      icon: Store,
      title: t('fandbSolution.whoWeServe.restaurantOwners.title'),
      description: t('fandbSolution.whoWeServe.restaurantOwners.description'),
      color: "bg-blue-500"
    },
    {
      icon: ChefHat,
      title: t('fandbSolution.whoWeServe.foodBeverageChains.title'),
      description: t('fandbSolution.whoWeServe.foodBeverageChains.description'),
      color: "bg-green-500"
    },
    {
      icon: Smartphone,
      title: t('fandbSolution.whoWeServe.customers.title'),
      description: t('fandbSolution.whoWeServe.customers.description'),
      color: "bg-purple-500"
    }
  ];

  const platformScreenshots = [
    {
      src: coco1,
      alt: "Restaurant Management Dashboard",
      title: t('fandbSolution.platformScreenshots.adminDashboard.title'),
      description: t('fandbSolution.platformScreenshots.adminDashboard.description')
    },
    {
      src: coco2,
      alt: "Online Ordering System",
      title: t('fandbSolution.platformScreenshots.onlineOrdering.title'),
      description: t('fandbSolution.platformScreenshots.onlineOrdering.description')
    },
    {
      src: coco3,
      alt: "Menu Management System",
      title: t('fandbSolution.platformScreenshots.menuManagement.title'),
      description: t('fandbSolution.platformScreenshots.menuManagement.description')
    },
    {
      src: coco4,
      alt: "Customer Experience Portal",
      title: t('fandbSolution.platformScreenshots.customerExperience.title'),
      description: t('fandbSolution.platformScreenshots.customerExperience.description')
    }
  ];

  const deliveryOptions = [
    {
      icon: Truck,
      title: t('fandbSolution.serviceOptions.homeDelivery.title'),
      description: t('fandbSolution.serviceOptions.homeDelivery.description')
    },
    {
      icon: Package,
      title: t('fandbSolution.serviceOptions.pickupService.title'),
      description: t('fandbSolution.serviceOptions.pickupService.description')
    },
    {
      icon: UtensilsCrossed,
      title: t('fandbSolution.serviceOptions.dineInExperience.title'),
      description: t('fandbSolution.serviceOptions.dineInExperience.description')
    }
  ];

  return (
    <div className="min-h-screen" dir={isRTL ? 'rtl' : 'ltr'}>
<Helmet>
  <title>Cocopalms F&B Platform for Food & Beverage Businesses</title>
  <meta name="description" content="Cocopalms F&B platform offers tailored solutions for food and beverage businesses, enhancing operations, management, and customer experiences efficiently." />
  <meta name="keywords" content={keywords} />
  <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  {/* Canonical URL - Multiple approaches for better compatibility */}
  <link rel="canonical" href={canonicalUrl} />
  
  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="F&B Restaurant Management Platform | Cocopalms - Complete Food & Beverage Solution" />
  <meta property="og:description" content="Cocopalms F&B platform offers tailored solutions for food and beverage businesses, enhancing operations, management, and customer experiences efficiently." />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Cocopalms" />
  <meta property="og:locale" content="en_US" />
  
  
  {/* Additional SEO Meta Tags */}
  <meta name="author" content="Cocopalms" />
  
  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  
  {/* Geographic and Business Meta Tags */}
  <meta name="geo.region" content="KW" />
  <meta name="geo.placename" content="Kuwait" />
  <meta name="language" content="en" />
  <meta name="distribution" content="global" />
  <meta name="rating" content="general" />
  
  {/* Additional F&B Specific Meta Tags */}
  <meta name="industry" content="Food & Beverage, Restaurant Technology" />
  <meta name="category" content="Restaurant Management Software" />
  
</Helmet>
  
      {/* Hero Section */}
      <section className="bg-custom-teal py-20 md:py-32 px-4 mt-24 md:mt-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-xl flex items-center justify-center mb-8 mx-auto">
            <UtensilsCrossed className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('fandbSolution.hero.title')}
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 mb-8">
            {t('fandbSolution.hero.subtitle')}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto px-4">
            {t('fandbSolution.hero.description')}
          </p>
          
        </div>
      </section>

      {/* Platform Overview Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('fandbSolution.platformOverview.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('fandbSolution.platformOverview.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platformScreenshots.map((screenshot, index) => (
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

      {/* Service Options Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('fandbSolution.serviceOptions.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('fandbSolution.serviceOptions.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliveryOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200 text-center">
                  <div className="bg-teal-100 text-teal-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{option.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{option.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('fandbSolution.platformFeatures.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('fandbSolution.platformFeatures.subtitle')}
            </p>
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
              {t('fandbSolution.whoWeServe.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('fandbSolution.whoWeServe.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceTypes.map((service, index) => {
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

      {/* Key Benefits Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('fandbSolution.keyBenefits.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 text-teal-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('fandbSolution.keyBenefits.increasedRevenue.title')}</h3>
                  <p className="text-gray-600">{t('fandbSolution.keyBenefits.increasedRevenue.description')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 text-green-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('fandbSolution.keyBenefits.operationalEfficiency.title')}</h3>
                  <p className="text-gray-600">{t('fandbSolution.keyBenefits.operationalEfficiency.description')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('fandbSolution.keyBenefits.enhancedCustomerExperience.title')}</h3>
                  <p className="text-gray-600">{t('fandbSolution.keyBenefits.enhancedCustomerExperience.description')}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 text-orange-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('fandbSolution.keyBenefits.dataDrivenInsights.title')}</h3>
                  <p className="text-gray-600">{t('fandbSolution.keyBenefits.dataDrivenInsights.description')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 text-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('fandbSolution.keyBenefits.secureTransactions.title')}</h3>
                  <p className="text-gray-600">{t('fandbSolution.keyBenefits.secureTransactions.description')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-pink-100 text-pink-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('fandbSolution.keyBenefits.scalableSolution.title')}</h3>
                  <p className="text-gray-600">{t('fandbSolution.keyBenefits.scalableSolution.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Impact Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('fandbSolution.platformImpact.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl">
              <div className="text-5xl font-bold text-teal-600 mb-4">200+</div>
              <div className="text-gray-700 font-semibold text-lg">{t('fandbSolution.platformImpact.restaurants')}</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl">
              <div className="text-5xl font-bold text-green-600 mb-4">50K+</div>
              <div className="text-gray-700 font-semibold text-lg">{t('fandbSolution.platformImpact.orders')}</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl">
              <div className="text-5xl font-bold text-purple-600 mb-4">15K+</div>
              <div className="text-gray-700 font-semibold text-lg">{t('fandbSolution.platformImpact.customers')}</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl">
              <div className="text-5xl font-bold text-orange-600 mb-4">99%</div>
              <div className="text-gray-700 font-semibold text-lg">{t('fandbSolution.platformImpact.uptime')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-custom-teal to-teal-600">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('fandbSolution.cta.title')}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            {t('fandbSolution.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition duration-300 flex items-center justify-center"
            >
              {t('fandbSolution.cta.getStarted')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/what-we-do" 
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-semibold transition duration-300"
            >
              {t('fandbSolution.cta.exploreServices')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FandbSolution;