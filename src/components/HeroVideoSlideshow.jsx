import React, { useState, useEffect } from 'react';

const HeroVideoSlideshow = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const videos = [
    '/clip1.mp4',
    '/clip2.mp4',
    '/clip3.mp4',
    '/clip4.mp4'
  ];

  const content = [
    {
      title: "Seamless Tech. Real Impact",
      subtitle: "We build intuitive digital experiences with ERP, e-commerce, automation tools, and more.",
      buttonText: "Explore Services",
      link: "/what-we-do"
    },
    {
      title: "Empower Your Business with Seamless Solutions!",
      subtitle: "Powerful range of IT solutions tailored for modern businesses, from ERP systems and mobile apps to e-commerce platforms and delivery management tools.",
      buttonText: "Contact Us",
      link: "/contact"
    },
    {
      title: "Your Technology Partner for Tomorrow",
      subtitle: "Crafting enterprise-ready systems, mobile solutions, and e-commerce platforms that deliver results.",
      buttonText: "Schedule a Call",
      link: "/contact"
    },
    {
      title: "Digital Solutions That Drive Success",
      subtitle: "Empowering businesses with high-performance web & mobile apps, ERP integrations, and tech-driven transformation.",
      buttonText: "Get Started",
      link: "/contact"
    }
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        setIsVisible(true);
        setProgress(0);
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  }, [videos.length, isPaused]);

  useEffect(() => {
    if (isPaused) return;

    setProgress(0);
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + (100 / 80);
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [currentVideoIndex, isPaused]);

  const handlePausePlay = () => {
    setIsPaused(!isPaused);
  };

  const handlePrevious = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
      setIsVisible(true);
      setProgress(0);
    }, 300);
  };

  const handleNext = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
      setIsVisible(true);
      setProgress(0);
    }, 300);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden mt-20 sm:mt-24 md:mt-28">
      {/* Full Screen Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {videos.map((video, index) => (
          <video
            key={index}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Gradient overlay for enhanced text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30"></div>
      </div>

      {/* Header Space - This pushes content below the header */}
      <div className="absolute top-0 left-0 w-full h-0 bg-transparent z-30 pointer-events-none"></div>

      {/* Content Container */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center sm:text-left max-w-4xl mx-auto sm:mx-0">
            <div className={`transition-all duration-500 ${
              isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
            }`}>
              
              {/* Dynamic Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6 md:mb-8 drop-shadow-2xl">
                {content[currentVideoIndex].title}
              </h1>
              
              {/* Dynamic Subtitle */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto sm:mx-0 drop-shadow-lg">
                {content[currentVideoIndex].subtitle}
              </p>
              
              {/* Dynamic Button */}
              <a 
                href={content[currentVideoIndex].link}
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full transition-all duration-300 inline-block text-center transform hover:scale-105 hover:shadow-xl shadow-teal-500/25 text-sm sm:text-base md:text-lg cursor-pointer"
              >
                {content[currentVideoIndex].buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-25">
        <div 
          className="h-full bg-teal-500 transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Navigation Controls - Desktop */}
      <div className="absolute bottom-8 right-8 hidden sm:flex flex-col space-y-3 z-30">
        {/* Pause/Play Button */}
        <button 
          onClick={handlePausePlay}
          className="bg-white/90 backdrop-blur-sm text-teal-700 p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          {isPaused ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          )}
        </button>
        
        {/* Previous Button */}
        <button 
          onClick={handlePrevious}
          className="bg-white/90 backdrop-blur-sm text-teal-700 p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
          </svg>
        </button>
        
        {/* Next Button */}
        <button 
          onClick={handleNext}
          className="bg-white/90 backdrop-blur-sm text-teal-700 p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Controls */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex sm:hidden space-x-4 z-30">
        {/* Mobile Pause/Play */}
        <button 
          onClick={handlePausePlay}
          className="bg-white/90 backdrop-blur-sm text-teal-700 p-2.5 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
        >
          {isPaused ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          )}
        </button>
        
        {/* Mobile Previous */}
        <button 
          onClick={handlePrevious}
          className="bg-white/90 backdrop-blur-sm text-teal-700 p-2.5 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
          </svg>
        </button>
        
        {/* Mobile Next */}
        <button 
          onClick={handleNext}
          className="bg-white/90 backdrop-blur-sm text-teal-700 p-2.5 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Dots */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:hidden z-30">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => {
                setCurrentVideoIndex(index);
                setIsVisible(true);
                setProgress(0);
              }, 300);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentVideoIndex 
                ? 'bg-white scale-125 shadow-lg' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-1/4 right-1/6 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/6 w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 bg-teal-400/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default HeroVideoSlideshow;