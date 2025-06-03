import { useState, useEffect } from 'react';
import { ChevronRight, Menu, X, Smartphone, ShoppingCart, Monitor, Building2, Users, Utensils } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import iPhoneSvg from '../assets/iPhone3.svg';
import cocopalmsSvg from '../assets/Cocopalms2.svg';
import BizoLogo from '../assets/bizo_logo.png';
import RealEstateLogo from '../assets/Rentings Logo.jpeg';
import KitchenlyLogo from '../assets/Kitchenly Logo.png';
import CocoDineLogo from '../assets/Cocodine logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSuccessDropdownOpen, setIsSuccessDropdownOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    setIsSuccessDropdownOpen(false);
  }, [location]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex flex-col items-center relative">
            <img src={iPhoneSvg} alt="iPhone Logo" className="h-8 w-8 " />
            <img src={cocopalmsSvg} alt="Cocopalms Logo" className="h-20 w-20 -mt-6" />
          </Link>
          
          {/* Desktop Navigation - Moved next to logo */}
          <nav className="hidden md:flex space-x-8 ml-10">
            <Link 
              to="/" 
              className={`font-medium transition-colors duration-200 ${
                location.pathname === '/' 
                  ? 'text-custom-teal border-b-2 border-custom-teal pb-1' 
                  : 'text-gray-700 hover:text-custom-teal'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors duration-200 ${
                location.pathname === '/about' 
                  ? 'text-custom-teal border-b-2 border-custom-teal pb-1' 
                  : 'text-gray-700 hover:text-custom-teal'
              }`}
            >
              About Us
            </Link>
            
            {/* What We Do Dropdown */}
            <div className="relative group">
              <Link 
                to="/what-we-do"
                className={`font-medium transition-colors duration-200 flex items-center ${
                  location.pathname === '/what-we-do' 
                    ? 'text-custom-teal border-b-2 border-custom-teal pb-1' 
                    : 'text-gray-700 hover:text-custom-teal'
                }`}
              >
                What We Do
                <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-90" />
              </Link>
              <div className="absolute left-0 mt-2 w-[900px] origin-top-left rounded-lg bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-6">
                    {/* Web Development Card */}
                    <Link to="/what-we-do#web-development" className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200 block">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <Monitor className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Web Development</h3>
                      <p className="text-gray-600 text-sm">
                        Professional websites and web applications for businesses from startup to enterprise level.
                      </p>
                    </Link>

                    {/* Mobile Apps Card */}
                    <Link to="/what-we-do#mobile-apps" className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200 block">
                      <div className="flex items-center mb-4">
                        <div className="bg-green-100 p-3 rounded-lg">
                          <Smartphone className="h-6 w-6 text-green-600" />
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile Apps</h3>
                      <p className="text-gray-600 text-sm">
                        High-quality mobile applications that deliver exceptional user experiences across all platforms.
                      </p>
                    </Link>

                    {/* Bizosuite ERP Card */}
                    <Link to="/what-we-do#erp-solutions" className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200 block">
                      <div className="flex items-center mb-4">
                        <div className="bg-purple-100 p-3 rounded-lg">
                          <Users className="h-6 w-6 text-purple-600" />
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">ERP Solution</h3>
                      <p className="text-gray-600 text-sm">
                        Comprehensive ERP solution with unified modules for all your operational needs.
                      </p>
                    </Link>

                    {/* E-commerce Solutions Card - Second Row First */}
                    <Link to="/what-we-do#ecommerce" className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200 block">
                      <div className="flex items-center mb-4">
                        <div className="bg-orange-100 p-3 rounded-lg">
                          <ShoppingCart className="h-6 w-6 text-orange-600" />
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">E-commerce Applications</h3>
                      <p className="text-gray-600 text-sm">
                        Custom e-commerce platforms to help you tap into the global online marketplace.
                      </p>
                    </Link>

                    {/* Real Estate Platform Card - Second Row Second */}
                    <Link to="/what-we-do#real-estate" className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200 block">
                      <div className="flex items-center mb-4">
                        <div className="bg-teal-100 p-3 rounded-lg">
                          <Building2 className="h-6 w-6 text-teal-600" />
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Real Estate Platform</h3>
                      <p className="text-gray-600 text-sm">
                        B2B & B2C platform connecting landlords and tenants for seamless property rentals.
                      </p>
                    </Link>

                    {/* F&B Software Card - Second Row Third */}
                    <Link to="/what-we-do#fnb-solutions" className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200 block">
                      <div className="flex items-center mb-4">
                        <div className="bg-red-100 p-3 rounded-lg">
                          <Utensils className="h-6 w-6 text-red-600" />
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">F&B Software</h3>
                      <p className="text-gray-600 text-sm">
                        Specialized software applications tailored for restaurants, cafes, and food service businesses.
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
{/* Success Stories Dropdown */}
<div className="relative group">
  <button 
    className={`font-medium transition-colors duration-200 flex items-center ${
      location.pathname.startsWith('/success-stories') 
        ? 'text-custom-teal border-b-2 border-custom-teal pb-1' 
        : 'text-gray-700 hover:text-custom-teal'
    }`}
  >
    Success Stories
    <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-90" />
  </button>
  <div className="absolute left-0 mt-2 w-[600px] origin-top-left rounded-lg bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
    <div className="p-6">
      <div className="grid grid-cols-2 gap-6">
        {/* Bizo Books Card */}
        <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
          <Link to="/success-stories/bizo-books" className="block">
            <div className="flex items-center mb-1">
              <img 
                src={BizoLogo} 
                alt="BizoSuite ERP Logo" 
                className="h-24 w-24 object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">BizoSuite ERP</h3>
            <p className="text-gray-600 text-sm mb-2">
             Smart ERP solution designed to help growing businesses manage operations efficiently.
            </p>
          </Link>
          <a 
            href="https://bizosuite.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-custom-teal font-medium text-sm hover:text-custom-teal/80 transition-colors duration-200"
          >
            TRY NOW <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>

        {/* Real Estate Card */}
        <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
          <Link to="/success-stories/real-estate" className="block">
            <div className="flex items-center mb-1">
              <img 
                src={RealEstateLogo} 
                alt="Real Estate Logo" 
                className="h-24 w-24 object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Real Estate</h3>
            <p className="text-gray-600 text-sm mb-2">
              Comprehensive property management and real estate solutions.
            </p>
          </Link>
          <a 
            href="https://rentings.io/en" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-custom-teal font-medium text-sm hover:text-custom-teal/80 transition-colors duration-200"
          >
            TRY NOW <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>

        {/* Kitchenly Card */}
        <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
          <Link to="/success-stories/kitchenly" className="block">
            <div className="flex items-center mb-1">
              <img 
                src={KitchenlyLogo} 
                alt="Kitchenly Logo" 
                className="h-24 w-24 object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Kitchenly</h3>
            <p className="text-gray-600 text-sm mb-2">
              Smart kitchen management and restaurant operations platform.
            </p>
          </Link>
          <a 
            href="https://kitchenly.cloud/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-custom-teal font-medium text-sm hover:text-custom-teal/80 transition-colors duration-200"
          >
            TRY NOW <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>

        {/* Coco Dine Card */}
        <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
          <Link to="/success-stories/coco-dine" className="block">
            <div className="flex items-center mb-1">
              <img 
                src={CocoDineLogo} 
                alt="Coco Dine Logo" 
                className="h-24 w-24 object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Coco Dine</h3>
            <p className="text-gray-600 text-sm mb-2">
              Complete dining experience and restaurant management system.
            </p>
          </Link>
          <a 
            href="https://www.cocodine.me/en" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-custom-teal font-medium text-sm hover:text-custom-teal/80 transition-colors duration-200"
          >
            TRY NOW <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>    
{/* Temporarily hidden - Our Work
            <Link 
              to="/our-work" 
              className={`font-medium transition-colors duration-200 ${
                location.pathname === '/our-work' 
                  ? 'text-custom-teal border-b-2 border-custom-teal pb-1' 
                  : 'text-gray-700 hover:text-custom-teal'
              }`}
            >
              Our Work
            </Link>
            */}
            <Link 
              to="/contact" 
              className={`font-medium transition-colors duration-200 ${
                location.pathname === '/contact' 
                  ? 'text-custom-teal border-b-2 border-custom-teal pb-1' 
                  : 'text-gray-700 hover:text-custom-teal'
              }`}
            >
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Right side buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Language switcher */}
          <button className="text-gray-700 hover:text-custom-teal font-medium transition-colors duration-200">
            EN
          </button>
          
          {/* CTA Button */}
          <Link 
            to="/contact" 
            className="bg-custom-teal hover:bg-custom-teal/90 text-white px-6 py-2 rounded-md font-medium transition duration-300"
          >
            Get In Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 transition-colors duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>

    {/* Mobile Navigation Menu */}
    {isMenuOpen && (
      <div className="md:hidden bg-white border-t mt-2 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`font-medium py-2 transition-colors duration-200 ${
                location.pathname === '/' 
                  ? 'text-custom-teal border-l-4 border-custom-teal pl-4' 
                  : 'text-gray-700 hover:text-custom-teal pl-4'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium py-2 transition-colors duration-200 ${
                location.pathname === '/about' 
                  ? 'text-custom-teal border-l-4 border-custom-teal pl-4' 
                  : 'text-gray-700 hover:text-custom-teal pl-4'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            
            {/* Mobile What We Do Dropdown */}
            <div className="relative">
              <div className="flex items-center justify-between">
                <Link 
                  to="/what-we-do"
                  className={`font-medium py-2 transition-colors duration-200 flex-1 ${
                    location.pathname === '/what-we-do' 
                      ? 'text-custom-teal border-l-4 border-custom-teal pl-4' 
                      : 'text-gray-700 hover:text-custom-teal pl-4'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  What We Do
                </Link>
                <button 
                  className="text-gray-700 hover:text-custom-teal font-medium py-2 px-4 transition-colors duration-200"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-90' : ''}`} />
                </button>
              </div>
              {isDropdownOpen && (
                <div className="pl-8 mt-2 space-y-4">
                  <Link to="/what-we-do#web-development" className="block" onClick={() => setIsMenuOpen(false)}>
                    <h4 className="font-semibold text-gray-900">Web Development</h4>
                    <p className="text-sm text-gray-500 mt-1">Professional websites and web applications for businesses from startup to enterprise level.</p>
                  </Link>
                  <Link to="/what-we-do#mobile-apps" className="block" onClick={() => setIsMenuOpen(false)}>
                    <h4 className="font-semibold text-gray-900">Mobile Apps</h4>
                    <p className="text-sm text-gray-500 mt-1">High-quality mobile applications that deliver exceptional user experiences across all platforms.</p>
                  </Link>
                  <Link to="/what-we-do#erp-solutions" className="block" onClick={() => setIsMenuOpen(false)}>
                    <h4 className="font-semibold text-gray-900">ERP Solution</h4>
                    <p className="text-sm text-gray-500 mt-1">Comprehensive ERP solution with unified modules for all your operational needs.</p>
                  </Link>
                  <Link to="/what-we-do#ecommerce" className="block" onClick={() => setIsMenuOpen(false)}>
                    <h4 className="font-semibold text-gray-900">E-commerce Applications</h4>
                    <p className="text-sm text-gray-500 mt-1">Custom e-commerce platforms to help you tap into the global online marketplace.</p>
                  </Link>
                  <Link to="/what-we-do#real-estate" className="block" onClick={() => setIsMenuOpen(false)}>
                    <h4 className="font-semibold text-gray-900">Real Estate Platform</h4>
                    <p className="text-sm text-gray-500 mt-1">B2B & B2C platform connecting landlords and tenants for seamless property rentals.</p>
                  </Link>
                  <Link to="/what-we-do#fnb-solutions" className="block" onClick={() => setIsMenuOpen(false)}>
                    <h4 className="font-semibold text-gray-900">F&B Software</h4>
                    <p className="text-sm text-gray-500 mt-1">Specialized software applications tailored for restaurants, cafes, and food service businesses.</p>
                  </Link>
                </div>
              )}
            </div>
            
            {/* Mobile Success Stories Dropdown */}
            <div className="relative">
              <div className="flex items-center justify-between">
                <button 
                  className={`font-medium py-2 transition-colors duration-200 flex-1 text-left ${
                    location.pathname.startsWith('/success-stories') 
                      ? 'text-custom-teal border-l-4 border-custom-teal pl-4' 
                      : 'text-gray-700 hover:text-custom-teal pl-4'
                  }`}
                  onClick={() => setIsSuccessDropdownOpen(!isSuccessDropdownOpen)}
                >
                  Success Stories
                </button>
                <button 
                  className="text-gray-700 hover:text-custom-teal font-medium py-2 px-4 transition-colors duration-200"
                  onClick={() => setIsSuccessDropdownOpen(!isSuccessDropdownOpen)}
                >
                  <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${isSuccessDropdownOpen ? 'rotate-90' : ''}`} />
                </button>
              </div>
              {isSuccessDropdownOpen && (
                <div className="pl-8 mt-2 space-y-4">
                  <Link to="/success-stories/bizo-books" className="block" onClick={() => setIsMenuOpen(false)}>
                    <h4 className="font-semibold text-gray-900">BizoSuite ERP</h4>
                    <p className="text-sm text-gray-500 mt-1">Smart ERP solution designed to help growing businesses manage operations efficiently.
                    </p>
                  </Link>
                  <Link to="/success-stories/real-estate" className="block" onClick={() => setIsMenuOpen(false)}>
                    <h4 className="font-semibold text-gray-900">Real Estate</h4>
                    <p className="text-sm text-gray-500 mt-1">Comprehensive property management and real estate solutions.</p>
                  </Link>
                  <Link to="/success-stories/kitchenly" className="block" onClick={() => setIsMenuOpen(false)}>
                    <h4 className="font-semibold text-gray-900">Kitchenly</h4>
                    <p className="text-sm text-gray-500 mt-1">Smart kitchen management and restaurant operations platform.</p>
                  </Link>
                  <Link to="/success-stories/coco-dine" className="block" onClick={() => setIsMenuOpen(false)}>
                    <h4 className="font-semibold text-gray-900">Coco Dine</h4>
                    <p className="text-sm text-gray-500 mt-1">Complete dining experience and restaurant management system.</p>
                  </Link>
                </div>
              )}
            </div>
            
{/* Temporarily hidden - Our Work
            <Link 
              to="/our-work" 
              className={`font-medium py-2 transition-colors duration-200 ${
                location.pathname === '/our-work' 
                  ? 'text-custom-teal border-l-4 border-custom-teal pl-4' 
                  : 'text-gray-700 hover:text-custom-teal pl-4'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Our Work
            </Link>
            */}
            <Link 
              to="/contact" 
              className={`font-medium py-2 transition-colors duration-200 ${
                location.pathname === '/contact' 
                  ? 'text-custom-teal border-l-4 border-custom-teal pl-4' 
                  : 'text-gray-700 hover:text-custom-teal pl-4'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            
            <div className="border-t pt-4 flex flex-col space-y-3">
              <button className="text-gray-700 hover:text-custom-teal font-medium py-2 text-left pl-4 transition-colors duration-200">
                Language (EN)
              </button>
              <Link 
                to="/contact" 
                className="bg-custom-teal hover:bg-custom-teal/90 text-white px-6 py-3 rounded-md font-medium transition duration-300 text-center mx-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Get In Touch
              </Link>
            </div>
          </nav>
        </div>
      </div>
    )}
  </header>
  );
};

export default Header;