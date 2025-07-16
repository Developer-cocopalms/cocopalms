import React, { useEffect, useState } from 'react';

const AdvancedInstagramSlider = () => {
  const [iframeHeight, setIframeHeight] = useState(280);

  useEffect(() => {
    // Load the LightWidget script if it hasn't been loaded yet
    const existingScript = document.querySelector('script[src="https://cdn.lightwidget.com/widgets/lightwidget.js"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://cdn.lightwidget.com/widgets/lightwidget.js';
      script.async = true;
      document.head.appendChild(script);
    }

    // Set responsive iframe height based on screen size
    const updateIframeHeight = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setIframeHeight(280); // Mobile
      } else if (width < 768) {
        setIframeHeight(350); // Small tablet
      } else if (width < 1024) {
        setIframeHeight(400); // Tablet
      } else if (width < 1280) {
        setIframeHeight(450); // Desktop
      } else if (width < 1536) {
        setIframeHeight(500); // Large desktop
      } else {
        setIframeHeight(550); // Extra large
      }
    };

    // Initial call
    updateIframeHeight();

    // Add resize listener
    window.addEventListener('resize', updateIframeHeight);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateIframeHeight);
    };
  }, []);

  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 bg-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header - Smaller Text Size */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight px-2 sm:px-0">
            Follow Us on Instagram
          </h2>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-4 md:px-0">
            {/* Progressive content based on screen size */}
           
            <span className="hidden xs:block sm:hidden">Stay connected with Cocopalms and see our latest updates</span>
            <span className="hidden sm:block md:hidden">Stay connected with Cocopalms and see our latest updates </span>
            <span className="hidden md:block">Stay connected with Cocopalms and see our latest updates</span>
          </p>
        </div>

        {/* Instagram Widget Container - Advanced Responsive */}
        <div className="w-full max-w-7xl mx-auto">
          {/* Responsive wrapper with aspect ratio container */}
          <div className="relative w-full">
            <div className="rounded-md xs:rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-sm xs:shadow-md sm:shadow-lg md:shadow-xl bg-gray-50">
              {/* Loading placeholder */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse rounded-md xs:rounded-lg sm:rounded-xl md:rounded-2xl"></div>
              
              {/* Instagram iframe - FIXED URL */}
              <iframe 
                src="https://cdn.lightwidget.com/widgets/c5bed79327655fd99bec3ac47756dc37.html" 
                scrolling="no" 
                allowTransparency="true" 
                className="lightwidget-widget w-full border-0 overflow-hidden relative z-10"
                style={{ 
                  width: '100%', 
                  height: `${iframeHeight}px`,
                  border: 0, 
                  overflow: 'hidden'
                }}
                title="Cocopalms Instagram Feed"
                onLoad={(e) => {
                  // Hide loading placeholder when iframe loads
                  const placeholder = e.target.parentElement.querySelector('.animate-pulse');
                  if (placeholder) {
                    placeholder.style.display = 'none';
                  }
                }}
              />
            </div>
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default AdvancedInstagramSlider;