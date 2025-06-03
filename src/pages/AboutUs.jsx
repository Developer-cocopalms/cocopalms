import React from 'react';
import { Link } from 'react-router-dom';
const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 py-20 pt-48 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Cocopalms: Architecting the Future of Software Innovation Since 2007
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
          Founded in 2007, Cocopalms is a distinguished Software Technology Development Company 
          dedicated to crafting innovative and bespoke products and services that address the 
          specialized needs of discerning businesses.
        </p>
        <Link 
  to="/contact" 
  className="bg-[#164772] hover:bg-[#0f3a5f] text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300 inline-block text-center"
  onClick={() => window.scrollTo(0, 0)}
>
  Contact Us
</Link>
      </div>

      {/* Mission Section */}
      <div className="bg-green-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-[#008196] font-medium mb-4 uppercase tracking-wide">
            Our mission
          </p>
          <h2 className="text-xl md:text-3xl font-meduim text-gray-900 leading-tight max-w-3xl mx-auto">
          To empower our clients with robust web solutions that translate complex data into  
          actionable knowledge, directly addressing their challenges and streamlining their 
          operational workflows for measurable improvements.
          </h2>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Who we are?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
          We engineer a suite of mission-critical applications designed for scalable operations, 
          complemented by comprehensive communication, unwavering support, proactive maintenance, 
          and tailored solutions.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
          As a committed leader in the technological landscape, Cocopalms exports premium software 
              solutions to a global clientele, with a portfolio extending across the MENA region, 
              Europe, and Asia, and a clear vision for worldwide impact.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our expert team develops both meticulously crafted off-the-shelf products and highly 
            customized bespoke solutions that seamlessly integrate innovation and automation, 
            serving clients across the MENA region, Europe, and Asia.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our mission to architect the future of software innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Pioneering sophisticated technologies for multi-user environments with cutting-edge solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Delivering robust, scalable digital experiences with unwavering commitment to excellence.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                Empowering businesses worldwide with seamless, efficient, and cost-effective transformations.
              </p>
            </div>
          </div>
        </div>
      </div>
  {/* Vision Section */}
  <div className="bg-green-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-[#008196] font-medium mb-4 uppercase tracking-wide">
            Our Vission
          </p>
          <h2 className="text-xl md:text-3xl font-meduim text-gray-900 leading-tight max-w-3xl mx-auto">
          To be a globally recognized IT solutions provider, empowering businesses with seamless, efficient, and cost-effective digital transformations 
          that directly contribute to their growth and success through our unwavering commitment to quality and high-value services.
          </h2>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how Cocopalms can architect the future of your software innovation 
            and drive your business growth.
          </p>
          <Link 
  to="/contact" 
  className="bg-custom-teal hover:bg-custom-teal/90 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300 inline-block text-center"
  onClick={() => window.scrollTo(0, 0)}
>
  Get Started Today
</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;