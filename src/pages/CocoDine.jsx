import React from 'react';
import {   Smartphone, CheckCircle, ExternalLink, Star, CreditCard } from 'lucide-react';
import CocoDineLogo from '../assets/Cocodine logo.png';
import { Helmet } from 'react-helmet';
const CocoDine = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
      <link rel="canonical" href="https://cocopalms.io/success-stories/coco-dine"/>
      </Helmet>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20 mt-24">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white p-4 rounded-full shadow-lg">
              <img 
                src={CocoDineLogo} 
                alt="Coco Dine Logo" 
                className="h-12 w-12 object-contain"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cocodine</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Complete dining experience and restaurant management system that transforms how customers interact with restaurants
          </p>
          <a
            href="https://www.cocodine.me/en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Experience Cocodine <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Platform Overview</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600 text-lg leading-relaxed">
                Cocodine is a revolutionary dining platform that bridges the gap between traditional restaurant service 
                and modern digital convenience. Our comprehensive solution provides customers with seamless ordering, 
                payment, and dining experiences while giving restaurants powerful tools to manage operations and enhance 
                customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Platform Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Digital Menu & Ordering</h3>
              <p className="text-gray-600">
                Interactive digital menus with QR code access, customization options, and seamless ordering experience.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Contactless Payment</h3>
              <p className="text-gray-600">
                Multiple payment options including mobile payments, digital wallets, and split bill functionality.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Table Management</h3>
              <p className="text-gray-600">
                Smart table reservation system with real-time availability and automated seating optimization.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Kitchen Integration</h3>
              <p className="text-gray-600">
                Direct kitchen display system with order tracking and preparation time estimation.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customer Loyalty</h3>
              <p className="text-gray-600">
                Integrated loyalty program with points, rewards, and personalized offers for repeat customers.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Analytics & Insights</h3>
              <p className="text-gray-600">
                Comprehensive analytics dashboard with customer behavior insights and sales performance metrics.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Experience */}
      <div className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Enhanced Customer Experience</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Smartphone className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Mobile-First Design</h3>
              <p className="text-gray-600">
                Intuitive mobile interface that works seamlessly across all devices for easy ordering and payment.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Personalized Service</h3>
              <p className="text-gray-600">
                AI-powered recommendations based on dining history and preferences for a customized experience.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <CreditCard className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Flexible Payments</h3>
              <p className="text-gray-600">
                Multiple payment options with secure processing and instant receipt delivery.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant Benefits */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Restaurant Benefits</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Streamlined Operations</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Reduce staff workload with automated ordering and payment processing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Minimize order errors with direct kitchen communication</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Optimize table turnover with efficient reservation management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Access real-time analytics for data-driven decision making</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Revenue Growth</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Increase average order value with smart upselling features</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Build customer loyalty with integrated rewards program</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Reduce operational costs through automation and efficiency</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Expand reach with online ordering and delivery integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Platform Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-3xl font-bold text-purple-600 mb-2">200+</h3>
              <p className="text-gray-600">Partner Restaurants</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-3xl font-bold text-green-600 mb-2">40%</h3>
              <p className="text-gray-600">Increase in Order Value</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">50K+</h3>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-3xl font-bold text-orange-600 mb-2">95%</h3>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Transform Your Restaurant's Digital Experience</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join innovative restaurants already using Cocodine to enhance customer satisfaction and boost revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.cocodine.me/en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Started Today <ExternalLink className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CocoDine;