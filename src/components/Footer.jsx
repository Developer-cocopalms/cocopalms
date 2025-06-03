import React from 'react';
import { Link } from 'react-router-dom';
import iPhoneSvg from '../assets/iPhone3.svg';

const Footer = () => {
  return (
    <footer className="bg-white py-6 sm:py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          
          {/* Company Column */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 md:mb-4">
              Company
            </h3>
            <ul className="space-y-1 sm:space-y-2 md:space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-blue-600 hover:text-blue-700 transition-colors duration-200 text-sm sm:text-base"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-600 hover:text-gray-700 transition-colors duration-200 text-sm sm:text-base"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  About
                </Link>
              </li>
             {/* <li>
                <a 
                  href="#" 
                  className="text-blue-600 hover:text-blue-700 transition-colors duration-200 text-sm sm:text-base"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Blog
                </a>
              </li>  
             */}
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-600 hover:text-gray-700 transition-colors duration-200 text-sm sm:text-base"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 md:mb-4">
              Products
            </h3>
            <ul className="space-y-1 sm:space-y-2 md:space-y-3">
              <li>
                <a 
                  href="https://bizosuite.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-700 transition-colors duration-200 text-sm sm:text-base"
                >
                  BizoSuite 
                </a>
              </li>
              <li>
                <a 
                  href="https://rentings.io/en" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-700 transition-colors duration-200 text-sm sm:text-base"
                >
                  Real Estate
                </a>
              </li>
              <li>
                <a 
                  href="https://kitchenly.cloud/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-700 transition-colors duration-200 text-sm sm:text-base"
                >
                  Kitchenly
                </a>
              </li>
              <li>
                <a 
                  href="https://www.cocodine.me/en" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-700 transition-colors duration-200 text-sm sm:text-base"
                >
                  Cocodine
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 md:mb-4">
              Contact Us
            </h3>
            <div>
              <p className="text-gray-900 font-medium mb-2 text-sm sm:text-base">Email</p>
              <a 
                href="mailto:info@cocopalms.io" 
                className="text-gray-600 hover:text-gray-700 transition-colors duration-200 break-all text-sm sm:text-base"
              >
                info@cocopalms.io
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-3 sm:space-x-4 mt-4 sm:mt-6 mb-3 sm:mb-4">
          {/* Facebook */}
          <a 
            href="https://www.facebook.com/people/Cocopalms/100069850093798/" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
            aria-label="Facebook"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a 
            href="https://www.instagram.com/cocopalms.io/" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
            aria-label="Instagram"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/company/cocopalmstech" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>

        {/* Bottom Footer Links */}
        <div className="border-t border-gray-200 mt-4 sm:mt-6 pt-3 sm:pt-4">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6 md:space-x-8">
            <Link 
              to="/" 
              className="text-gray-500 hover:text-gray-600 transition-colors duration-200 text-sm sm:text-base"
              onClick={() => window.scrollTo(0, 0)}
            >
              Home
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-500 hover:text-gray-600 transition-colors duration-200 text-sm sm:text-base"
              onClick={() => window.scrollTo(0, 0)}
            >
              Contact
            </Link>
            <a 
              href="#" 
              className="text-gray-500 hover:text-gray-600 transition-colors duration-200 text-sm sm:text-base"
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              className="text-gray-500 hover:text-gray-600 transition-colors duration-200 text-sm sm:text-base"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Copyright Section - Extends to bottom */}
        <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-200 -mb-6 sm:-mb-8 md:-mb-12 lg:-mb-16">
          <div className="bg-gray-900 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-6 -mb-6 sm:-mb-8 md:-mb-12 lg:-mb-16">
            <div className="flex flex-col items-center justify-center text-center">
              {/* iPhone SVG above Cocopalms */}
              <div className="mb-3 sm:mb-4">
                <img 
                  src={iPhoneSvg} 
                  alt="iPhone" 
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto"
                />
              </div>
              
              {/* Cocopalms Logo */}
              <div className="flex items-center mb-3">
                <div className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                  Cocopalms
                </div>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">
                © 2025, Cocopalms Suite W.L.L. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;