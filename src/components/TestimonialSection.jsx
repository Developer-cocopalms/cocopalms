import React, { useState, useEffect } from 'react';
import { useTestimonials } from '../pages/hooks/useTestimonials';
import { supabase } from '../supabaseClient'; // Make sure you have this import

// Import static logo assets (keep as fallback)
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.jpeg';
import logo4 from '../assets/logo4.png';

const TestimonialSection = () => {
  const { testimonials, loading: testimonialsLoading } = useTestimonials();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Logo mapping (keep as fallback)
  const logoMapping = {
    'logo1': logo1,
    'logo2': logo2,
    'logo3': logo3,
    'logo4': logo4,
  };

  // Helper function to get logo URL from Supabase storage
  const getLogoUrl = (logoStoragePath) => {
    if (!logoStoragePath) return null;
    
    const { data } = supabase.storage
      .from('logo-testimonials')
      .getPublicUrl(logoStoragePath);
    
    return data?.publicUrl || null;
  };

  // Fallback testimonials data
  const fallbackTestimonials = [
    {
      id: 1,
      quote: "Partnering with Cocopalms transformed our operations. Their ERP solution streamlined processes across departments, helping us make faster, smarter decisions. Their team's commitment to quality and support was outstanding.",
      author_name: "BizoSuite",
      author_position: "CEO",
      logo_image: "logo1",
      display_order: 1,
      is_active: true
    },
    {
      id: 2,
      quote: "Cocopalms brought our vision to life, developing a beautifully designed mobile application for our subscription-based diet plans. The intuitive user interface makes it easy for our customers, and the robust backend tools help us effortlessly manage subscriptions and orders. We highly recommend them!",
      author_name: "Dietbux",
      author_position: "Founder",
      logo_image: "logo2",
      display_order: 2,
      is_active: true
    },
    {
      id: 3,
      quote: "Cocopalms brought our concept for a smart property management platform to life. Their team was proactive, detail-oriented, and incredibly responsive. The result is a powerful tool our tenants and landlords love using.",
      author_name: "Rentings",
      author_position: "Product Manager",
      logo_image: "logo3",
      display_order: 3,
      is_active: true
    },
    {
      id: 4,
      quote: "The web development expertise at Cocopalms resulted in a stunning and highly functional website that serves as a powerful representation of our brand. Its robust performance, especially its speed and mobile optimization, has been instrumental in building trust and credibility with our international clientele.",
      author_name: "Dieter",
      author_position: "Marketing Director",
      logo_image: "logo4",
      display_order: 4,
      is_active: true
    }
  ];

  // Use dynamic data if available, otherwise use fallback data
  const displayTestimonials = !testimonialsLoading && testimonials.length > 0 ? testimonials : fallbackTestimonials;

  // Auto-slide effect
  useEffect(() => {
    if (displayTestimonials.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === displayTestimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [displayTestimonials.length]);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Side - Static Content */}
          <div className="space-y-6 md:space-y-8 transform translate-x-4 -translate-y-4 md:translate-x-8 md:-translate-y-8">
            <div className="text-4xl md:text-5xl lg:text-6xl text-gray-300 mb-2 md:mb-4"></div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              You're in good <br />
              company
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Join 8,530 business using Cocopalms to grow.
            </p>
          </div>

          {/* Right Side - Dynamic Testimonials */}
          {!testimonialsLoading && displayTestimonials.length > 0 ? (
            <div className="relative h-80 md:h-96 overflow-hidden">
              <div 
                className="absolute inset-0 transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <div className="flex">
                  {displayTestimonials.map((testimonial, index) => {
                    // Enhanced logo resolution logic
                    let logoSrc;
                    
                    // Priority 1: Check for uploaded logo (logo_storage_path)
                    if (testimonial.logo_storage_path) {
                      logoSrc = getLogoUrl(testimonial.logo_storage_path);
                    } 
                    // Priority 2: Check for direct logo_url
                    else if (testimonial.logo_url) {
                      logoSrc = testimonial.logo_url;
                    } 
                    // Priority 3: Check for logo_image mapping
                    else if (testimonial.logo_image && logoMapping[testimonial.logo_image]) {
                      logoSrc = logoMapping[testimonial.logo_image];
                    } 
                    // Priority 4: Check for logo_name mapping
                    else if (testimonial.logo_name && logoMapping[testimonial.logo_name]) {
                      logoSrc = logoMapping[testimonial.logo_name];
                    } 
                    // Priority 5: Default fallback
                    else {
                      logoSrc = logo1;
                    }

                    return (
                      <div 
                        key={testimonial.id || index}
                        className="bg-white p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col justify-between flex-shrink-0 w-full"
                      >
                        <div>
                          <div className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-2 md:mb-4">"</div>
                          <p className="text-gray-700 leading-relaxed mb-4 md:mb-6 text-sm md:text-base lg:text-lg">
                            {testimonial.quote}
                          </p>
                        </div>
                        
                        <div className="flex items-center">
                          {/* Logo on the left side */}
                          <div className="flex-shrink-0 mr-3 md:mr-4">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-200">
                              {logoSrc ? (
                                <img 
                                  src={logoSrc} 
                                  alt={`${testimonial.author_name || testimonial.author} Company Logo`}
                                  className="h-6 w-6 md:h-8 md:w-8 object-contain"
                                  onError={(e) => {
                                    console.error('Logo failed to load:', logoSrc, 'for', testimonial.author_name);
                                    // Fallback to default logo on error
                                    e.target.src = logo1;
                                  }}
                                />
                              ) : (
                                // Fallback icon if no logo available
                                <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-200 rounded flex items-center justify-center">
                                  <span className="text-xs font-semibold text-gray-500">
                                    {(testimonial.author_name || testimonial.author)?.charAt(0)}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                          
                          {/* Author info on the right */}
                          <div>
                            <h4 className="font-semibold text-gray-900 text-base md:text-lg">
                              {testimonial.author_name || testimonial.author}
                            </h4>
                            {testimonial.author_position && (
                              <p className="text-sm md:text-base text-gray-600 mt-1">
                                {testimonial.author_position}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Navigation Dots */}
              {displayTestimonials.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {displayTestimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                        index === currentIndex ? 'bg-teal-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="relative h-80 md:h-96 flex items-center justify-center">
              <div className="text-center">
                {testimonialsLoading ? (
                  <div className="flex flex-col items-center space-y-4">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
                    <p className="text-gray-500 text-sm md:text-base">Loading testimonials...</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center space-y-4">
                    <div className="text-gray-400">
                      <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <p className="text-gray-500 text-sm md:text-base">No testimonials available</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;