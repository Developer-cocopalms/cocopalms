import React from 'react';
import { TrendingUp, Clock, Users, CheckCircle, ExternalLink, ChefHat, BarChart3 } from 'lucide-react';
import KitchenlyLogo from '../assets/Kitchenly Logo.png';

const Kitchenly = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20 mt-24">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white p-4 rounded-full shadow-lg">
              <img 
                src={KitchenlyLogo} 
                alt="Kitchenly Logo" 
                className="h-16 w-16 object-contain"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kitchenly</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Smart kitchen management and restaurant operations platform that revolutionizes food service efficiency
          </p>
          <a
            href="https://kitchenly.cloud/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Try Kitchenly Cloud <ExternalLink className="ml-2 h-5 w-5" />
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
                Kitchenly is an innovative cloud-based platform designed to optimize restaurant operations and kitchen 
                management. Our comprehensive solution integrates inventory management, order processing, staff scheduling, 
                and performance analytics to help food service businesses operate more efficiently and profitably.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Core Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Inventory Management</h3>
              <p className="text-gray-600">
                Real-time inventory tracking with automated reorder alerts and supplier management integration.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Order Processing</h3>
              <p className="text-gray-600">
                Streamlined order management system with kitchen display integration and delivery tracking.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Staff Management</h3>
              <p className="text-gray-600">
                Employee scheduling, time tracking, and performance monitoring with payroll integration.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Menu Optimization</h3>
              <p className="text-gray-600">
                Data-driven menu analysis with cost calculation and profitability insights for each dish.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
              <p className="text-gray-600">
                Comprehensive reporting with sales analytics, cost analysis, and operational insights.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Multi-Location Support</h3>
              <p className="text-gray-600">
                Centralized management system for restaurant chains and multi-location food businesses.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Kitchenly?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Save Time</h3>
              <p className="text-gray-600">
                Automate routine tasks and reduce manual work by up to 60% with intelligent workflows.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <BarChart3 className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Increase Profits</h3>
              <p className="text-gray-600">
                Optimize costs and reduce waste with smart inventory management and menu analysis.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Better Service</h3>
              <p className="text-gray-600">
                Improve customer satisfaction with faster service and consistent food quality.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Platform Results</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-3xl font-bold text-orange-600 mb-2">150+</h3>
              <p className="text-gray-600">Restaurants Using Platform</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-3xl font-bold text-green-600 mb-2">35%</h3>
              <p className="text-gray-600">Average Cost Reduction</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">60%</h3>
              <p className="text-gray-600">Time Saved on Operations</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-3xl font-bold text-purple-600 mb-2">25%</h3>
              <p className="text-gray-600">Increase in Profit Margins</p>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Focus */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Perfect For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <ChefHat className="h-10 w-10 text-orange-600 mx-auto mb-3" />
              <h4 className="font-semibold">Restaurants</h4>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <Users className="h-10 w-10 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold">Cafes</h4>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <TrendingUp className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold">Food Chains</h4>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <Clock className="h-10 w-10 text-purple-600 mx-auto mb-3" />
              <h4 className="font-semibold">Cloud Kitchens</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Revolutionize Your Kitchen Operations?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join successful restaurants already using Kitchenly to optimize their operations and boost profitability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://kitchenly.cloud/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Start Free Trial <ExternalLink className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Request Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kitchenly;