import React, { useEffect } from 'react';
import { Users, TrendingUp, CheckCircle, ExternalLink } from 'lucide-react';
import BizoSuiteLogo from '../assets/bizo_logo.png';
import { Helmet } from 'react-helmet';
const BizoBooks = () => {
  const canonicalUrl = "https://cocopalms.io/success-stories/bizo-books"; 

  
// Update meta description for Bizo page
useEffect(() => {
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', 'Explore the Bizo Books case study showcasing Cocopalms ERP and automation solutions, driving efficiency and business transformation.');
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

  return (
    <div className="min-h-screen bg-gray-50">

<Helmet>
  <title>Bizo Books Case Study | Cocopalms ERP & Automation Impact</title>
  <meta name="description" content="Explore the Bizo Books case study showcasing Cocopalms ERP and automation solutions, driving efficiency and business transformation." />
  <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  {/* Canonical URL - Multiple approaches for better compatibility */}
  <link rel="canonical" href={canonicalUrl} />
  
  
</Helmet>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20 mt-24">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
          <div className="bg-white p-4 rounded-full shadow-lg">
              <img 
                src={BizoSuiteLogo} 
                alt="Coco Dine Logo" 
                className="h-12 w-12 object-contain"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">BizoSuite ERP</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Smart ERP solution designed to help growing businesses manage operations efficiently.
          </p>
          <a
            href="https://bizosuite.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Try BizoSuite Now <ExternalLink className="ml-2 h-5 w-5" />
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
              Streamline your processes, improve productivity, and stay in control with ease. BizoSuite brings all your 
              essential business functions into one powerful, integrated platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Inventory Management</h3>
              <p className="text-gray-600">
              Track stock levels, manage warehouses, and automate reordering to maintain optimal inventory at all times.

              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sales & CRM</h3>
              <p className="text-gray-600">
              Manage leads, opportunities, quotations, and customer relationships to close deals faster and build long-term loyalty.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">World-Class E-commerce</h3>
              <p className="text-gray-600">
              Seamlessly integrate your online store with your ERP to manage products, orders, payments, and customer data in real time.

              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Purchasing</h3>
              <p className="text-gray-600">
              Automate your procurement process with smart supplier management, approval workflows, and purchase tracking.

              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Finance & Accounting</h3>
              <p className="text-gray-600">
              Simplify financial operations with automated billing, expense tracking, real-time reporting, and multi-currency support.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2"> HR & Payroll</h3>
              <p className="text-gray-600">
              Oversee employee records, attendance, payroll processing, and compliance — all in one secure module.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2"> Production Management</h3>
              <p className="text-gray-600">
              Plan and monitor your production workflow with tools for bill of materials (BOM), work orders, and resource scheduling.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2"> Reports & Analytics</h3>
              <p className="text-gray-600">
              Unlock valuable insights with Dynamics dashboards, KPIs, and real-time business intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Results & Impact */}
      <div className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Results & Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Active Business Users</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">95%</h3>
              <p className="text-gray-600">Time Saved on Bookkeeping</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <CheckCircle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">99.9%</h3>
              <p className="text-gray-600">Accuracy in Financial Reports</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Financial Management?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses already using BizoSuite to streamline their accounting processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://bizosuite.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Start Free Trial <ExternalLink className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BizoBooks;