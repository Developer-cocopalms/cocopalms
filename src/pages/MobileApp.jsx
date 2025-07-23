import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Code, Shield, Globe, Monitor, ExternalLink, Layers } from 'lucide-react';

import dietbuxImage from '../assets/dietbuxm.png';
import dietvalueImage from '../assets/dietvaluem.png';
import basicImage from '../assets/basicm.png';
import balancedBiteImage from '../assets/balancedbitem.png';
import dieterImage from '../assets/dieterm.png';
import planetZeroImage from '../assets/planetzerom.png';
import calImage from '../assets/calm.png';
import onethirdImage from '../assets/onethirdm.png';
import purehealthImage from '../assets/purehealthm.png';
import approvedlifeImage from '../assets/approvedlifem.png';
import trymacroImage from '../assets/macrom.png';
import calculateImage from '../assets/calculatem.png';
import { Helmet } from 'react-helmet';

const MobileApp = () => {
  const apps = [
    {
      name: 'Dietbux',
      url: 'https://dietbux.com/',
      image: dietbuxImage,
      description: 'Comprehensive diet and nutrition mobile app offering personalized meal plans, calorie tracking, and subscription-based services.',
      features: ['Personalized meal planning', 'Calorie tracking system', 'Subscription management', 'Multi-language support'],
      category: 'Health & Nutrition',
      platforms: ['iOS', 'Android']
    },
    {
      name: 'Dietvalue',
      url: 'https://dietvaluekw.com/',
      image: dietvalueImage,
      description: 'Premium diet delivery service mobile app focused on healthy meal subscriptions in Kuwait with elegant Arabic interface.',
      features: ['Meal delivery scheduling', 'Arabic RTL interface', 'Payment integration', 'Order tracking'],
      category: 'Food Delivery',
      platforms: ['iOS', 'Android']
    },
    {
      name: 'Basic',
      url: 'https://basickw.com/',
      image: basicImage,
      description: 'Clean and minimalist business mobile app providing essential services with focus on simplicity and user experience.',
      features: ['Intuitive navigation', 'Fast performance', 'Business services', 'Professional design'],
      category: 'Business',
      platforms: ['iOS', 'Android']
    },
    {
      name: 'Balanced Bite',
      url: 'https://dietprokuwait.com/',
      image: balancedBiteImage,
      description: 'Advanced nutrition and diet management app offering professional dietary guidance and meal planning solutions.',
      features: ['Professional guidance', 'Advanced meal planning', 'Nutritional analysis', 'Progress tracking'],
      category: 'Health & Wellness',
      platforms: ['iOS', 'Android']
    },
    {
      name: 'Dieter',
      url: 'https://dieterkwt.com/',
      image: dieterImage,
      description: 'Professional diet and nutrition platform providing expert dietary guidance and personalized meal planning for optimal health.',
      features: ['Expert dietary guidance', 'Personalized nutrition plans', 'Health tracking', 'Professional consultation'],
      category: 'Health & Nutrition',
      platforms: ['iOS', 'Android']
    },
    {
      name: 'Planet Zero',
      url: 'https://play.google.com/store/apps/details?id=io.cocopalms.planetzero&hl=en',
      image: planetZeroImage,
      description: 'Planet Zero Meals takes the confusion and guesswork out of healthy eating by providing clean, nourishing natural ingredients. Now you can have healthy, clean, fresh, pre-made delicious meals conveniently delivered to your door each day.',
      features: ['Clean natural ingredients', 'Fresh pre-made meals', 'Free nationwide delivery', 'Ready-to-eat convenience'],
      category: 'Food Delivery',
      platforms: ['iOS', 'Android']
    },
    {
      name: 'Cal',
      url: 'https://apps.apple.com/kw/app/cal-%D9%83%D8%A7%D9%84/id1667845619',
      image: calImage,
      description: 'Customizable healthy and fresh food delivery application offering personalized meal options and convenient delivery services.',
      features: ['Customizable meal options', 'Fresh food delivery', 'Personalized nutrition', 'User-friendly interface'],
      category: 'Food Delivery',
      platforms: ['iOS', 'Android']
    },
    {
      name: 'OneThird',
      url: 'https://play.google.com/store/apps/details?id=io.cocopalms.onethird&hl=en',
      image: onethirdImage,
      description: 'Customizable healthy and fresh food delivery application offering personalized meal options and convenient delivery services.',
      features: ['Customizable meal options', 'Fresh food delivery', 'Personalized nutrition', 'User-friendly interface'],
      category: 'Food Delivery',
      platforms: ['Android']
    },
    {
      name: 'PureHealth',
      url: 'https://apps.apple.com/qa/app/purehealth-kuwait/id6475193454?platform=iphone',
      image: purehealthImage,
      description: 'Customizable healthy and fresh food delivery application offering personalized meal options and convenient delivery services.',
      features: ['Customizable meal options', 'Fresh food delivery', 'Personalized nutrition', 'User-friendly interface'],
      category: 'Food Delivery',
      platforms: ['iOS', 'Android']
    },
    {
      name: 'Approved Life',
      url: 'https://play.google.com/store/apps/details?id=io.cocopalms.approvedlife&hl=en',
      image: approvedlifeImage,
      description: 'Customizable healthy and fresh food delivery application offering personalized meal options and convenient delivery services.',
      features: ['Customizable meal options', 'Fresh food delivery', 'Personalized nutrition', 'User-friendly interface'],
      category: 'Food Delivery',
      platforms: ['Android']
    },
    {
      name: 'Try Macro',
      url: 'https://apps.apple.com/kw/app/try-macro/id1671781444',
      image: trymacroImage,
      description: 'Customizable healthy and fresh food delivery application offering personalized meal options and convenient delivery services.',
      features: ['Customizable meal options', 'Fresh food delivery', 'Personalized nutrition', 'User-friendly interface'],
      category: 'Food Delivery',
      platforms: ['iOS']
    },
    {
      name: 'Calculate',
      url: 'https://apps.apple.com/in/app/calculate-for-life/id1671781468',
      image: calculateImage,
      description: 'Customizable healthy and fresh food delivery application offering personalized meal options and convenient delivery services.',
      features: ['Customizable meal options', 'Fresh food delivery', 'Personalized nutrition', 'User-friendly interface'],
      category: 'Food Delivery',
      platforms: ['iOS', 'Android']
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        
      <link rel="canonical" href="https://cocopalms.io/what-we-do/mobile-app"/>
        </Helmet>
      {/* Hero Section */}
      <section className="bg-custom-teal py-20 md:py-32 px-4 mt-24">
        <div className="container mx-auto text-center max-w-5xl">
          <div className="bg-white/15 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mb-8 mx-auto">
            <Smartphone className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Mobile App Development
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Crafting innovative mobile experiences that engage users and drive business growth
          </p>
          <p className="text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
            From concept to deployment, we create high-performance mobile applications that deliver exceptional user experiences across iOS and Android platforms.
          </p>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mobile Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Showcasing mobile applications that have transformed businesses and enhanced user experiences
            </p>
          </div>

          <div className="space-y-24">
            {apps.map((app, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-20`}>
                {/* Mobile Frame Image */}
                <div className="flex-1 flex justify-center">
                  <div className="relative group">
                    {/* Glow effect behind the phone */}
                    <div className="absolute -inset-8 bg-gradient-to-r from-custom-teal/20 to-teal-600/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    {/* Phone frame container */}
                    <div className="relative transform group-hover:scale-105 transition-all duration-500">
                      <img 
                        src={app.image} 
                        alt={`${app.name} Mobile App Interface`}
                        className="w-[700px] md:w-[900px] lg:w-[1100px] xl:w-[1300px] 2xl:w-[1500px] h-auto object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>
                </div>

                {/* App Details */}
                <div className="flex-1 space-y-6 max-w-xl">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="bg-custom-teal/10 text-custom-teal px-4 py-2 rounded-full text-sm font-medium">
                        {app.category}
                      </span>
                      <div className="flex gap-2">
                        {app.platforms.map((platform, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{app.name}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {app.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900">Key Features</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {app.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-2 h-2 bg-custom-teal rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <a 
                      href={app.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-custom-teal to-teal-600 text-white px-8 py-4 rounded-xl font-medium hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      View Live App
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-custom-teal">12+</div>
              <div className="text-gray-600">Apps Delivered</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-teal-600">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-teal-700">2</div>
              <div className="text-gray-600">Platforms</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-custom-teal">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mobile Development Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive mobile solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-custom-teal/5 to-teal-50 hover:from-custom-teal/10 hover:to-teal-100 transition-all duration-300">
              <div className="bg-custom-teal w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Native App Development</h3>
              <p className="text-gray-600 leading-relaxed">
                High-performance native apps for iOS and Android with platform-specific optimizations.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 transition-all duration-300">
              <div className="bg-teal-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cross-Platform Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Cost-effective solutions using React Native and Flutter for multiple platforms.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 transition-all duration-300">
              <div className="bg-emerald-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Layers className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">UI/UX Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Intuitive and engaging user interfaces designed for optimal user experience.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-cyan-50 to-teal-50 hover:from-cyan-100 hover:to-teal-100 transition-all duration-300">
              <div className="bg-cyan-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">API Integration</h3>
              <p className="text-gray-600 leading-relaxed">
                Seamless integration with backend services and third-party APIs.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-blue-50 hover:from-teal-100 hover:to-blue-100 transition-all duration-300">
              <div className="bg-teal-700 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">App Security</h3>
              <p className="text-gray-600 leading-relaxed">
                Robust security implementation to protect user data and app integrity.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-teal-50 hover:from-slate-100 hover:to-teal-100 transition-all duration-300">
              <div className="bg-slate-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Monitor className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">App Store Optimization</h3>
              <p className="text-gray-600 leading-relaxed">
                Strategic optimization for better visibility and downloads on app stores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Master
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cutting-edge technologies and frameworks for superior mobile app development
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Node.js'].map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-105 border border-custom-teal/10 hover:border-custom-teal/20">
                  <h4 className="font-semibold text-gray-900 text-sm">{tech}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-custom-teal to-teal-600">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Transform your ideas into powerful mobile applications that engage users and drive business success.
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

export default MobileApp;