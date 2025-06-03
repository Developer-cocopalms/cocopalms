import React from 'react';
import { Building2, Users,  CheckCircle, ExternalLink, Home } from 'lucide-react';

import RealEstateLogo from '../assets/Rentings Logo.jpeg';


const RealEstate = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20 mt-24">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white p-4 rounded-full shadow-lg">
              <img 
                src={RealEstateLogo} 
                alt="Real Estate Logo" 
                className="h-12 w-12 object-contain"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Real Estate Platform</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Comprehensive property management and real estate solutions connecting landlords and tenants seamlessly
          </p>
          <a
            href="https://rentings.io/en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Visit Rentings.io <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Project Overview</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600 text-lg leading-relaxed">
                Our Real Estate Platform is a comprehensive B2B & B2C solution that revolutionizes property management 
                and rental processes. The platform connects property owners, landlords, and tenants in a seamless digital 
                ecosystem, making property rentals more efficient and transparent for all parties involved.
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
              <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Property Listings</h3>
              <p className="text-gray-600">
                Advanced property listing system with detailed descriptions, photo galleries, and virtual tours.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tenant Screening</h3>
              <p className="text-gray-600">
                Comprehensive tenant verification system including background checks and credit assessments.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Rent Collection</h3>
              <p className="text-gray-600">
                Automated rent collection system with multiple payment options and late fee management.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Maintenance Requests</h3>
              <p className="text-gray-600">
                Streamlined maintenance request system with contractor management and tracking capabilities.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Document Management</h3>
              <p className="text-gray-600">
                Digital lease agreements, contract storage, and document signing capabilities.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
              <p className="text-gray-600">
                Comprehensive reporting and analytics for property performance and financial insights.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Target Audience */}
      <div className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Who We Serve</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Building2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Property Owners</h3>
              <p className="text-gray-600">
                Maximize rental income and streamline property management with our comprehensive tools.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Property Managers</h3>
              <p className="text-gray-600">
                Efficiently manage multiple properties with automated workflows and tenant communication.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Home className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Tenants</h3>
              <p className="text-gray-600">
                Find your perfect home and enjoy hassle-free rental experience with digital convenience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Results & Impact */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Platform Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-3xl font-bold text-green-600 mb-2">1000+</h3>
              <p className="text-gray-600">Properties Listed</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">500+</h3>
              <p className="text-gray-600">Active Landlords</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-3xl font-bold text-purple-600 mb-2">2000+</h3>
              <p className="text-gray-600">Registered Tenants</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-3xl font-bold text-orange-600 mb-2">98%</h3>
              <p className="text-gray-600">User Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Transform Your Property Management Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the growing community of property owners and tenants using our platform for seamless rental experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://rentings.io/en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-gray-900  px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Started Now <ExternalLink className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstate;