import { useState, useEffect } from 'react';
import { ChevronRight, Menu, X, Smartphone, ShoppingCart, Monitor, Building2, Users, Utensils } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import iPhoneSvg from '../assets/iPhone3.svg';
import cocopalmsSvg from '../assets/Cocopalms2.svg';

// Import all the logos
import bizoLogo from '../assets/bizo_logo.png';
import rentingsLogo from '../assets/Rentings Logo.jpeg';
import kitchenlyLogo from '../assets/Kitchenly Logo.png';
import cocodineLogo from '../assets/Cocodine logo.png';
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSuccessDropdownOpen, setIsSuccessDropdownOpen] = useState(false);
  const [successStories, setSuccessStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  // Logo mapping object
  const logoMap = {
    'bizo-books': bizoLogo,
    'real-estate': rentingsLogo,
    'kitchenly': kitchenlyLogo,
    'coco-dine': cocodineLogo
  };

  // Get current language direction
  const isRTL = i18n.language === 'ar';

  // Helper function to get localized text for success stories
  const getLocalizedSuccessStoryText = (story, field) => {
    if (i18n.language === 'ar') {
      const arabicField = `${field}_ar`;
      return story[arabicField] || story[field]; // Fallback to English if Arabic not available
    }
    return story[field];
  };

  // Fetch success stories from Supabase with Arabic fields
  useEffect(() => {
    const fetchSuccessStories = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('success_stories')
          .select(`
            *,
            title_ar,
            description_ar,
            external_button_text_ar
          `)
          .eq('is_active', true)
          .order('display_order', { ascending: true });

        if (error) {
          console.error('Error fetching success stories:', error);
        } else {
          setSuccessStories(data || []);
        }
      } catch (error) {
        console.error('Error fetching success stories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSuccessStories();
  }, []); // Only run once on mount

  // Re-fetch data when language changes (if needed for dynamic updates)
  useEffect(() => {
    if (successStories.length > 0) {
      // No need to refetch, just re-render with new language
      // The component will automatically use the correct language with getLocalizedSuccessStoryText
    }
  }, [i18n.language]);

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

  // Function to change language
  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLanguage);
    // Update document direction
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLanguage;
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex flex-col items-center relative">
              <img src={iPhoneSvg} alt={t('header.alt.Logo')} className="h-8 w-8" />
              <img src={cocopalmsSvg} alt={t('header.alt.cocopalmsLogo')} className="h-20 w-20 -mt-6" />
            </Link>
            
            {/* Desktop Navigation - Moved next to logo */}
            <nav className={`hidden md:flex space-x-8 ${isRTL ? 'mr-10' : 'ml-10'}`}>
              <Link 
                to="/" 
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === '/' 
                    ? 'text-custom-teal border-b-2 border-custom-teal pb-1' 
                    : 'text-gray-700 hover:text-custom-teal'
                }`}
              >
                {t('header.nav.home')}
              </Link>
              <Link 
                to="/about" 
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === '/about' 
                    ? 'text-custom-teal border-b-2 border-custom-teal pb-1' 
                    : 'text-gray-700 hover:text-custom-teal'
                }`}
              >
                {t('header.nav.aboutUs')}
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
                  {t('header.nav.whatWeDo')}
                  <ChevronRight className={`${isRTL ? 'mr-1' : 'ml-1'} h-4 w-4 transition-transform duration-200 group-hover:rotate-90 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
                <div className={`absolute ${isRTL ? 'right-0' : 'left-0'} mt-2 w-[900px] ${isRTL ? 'origin-top-right' : 'origin-top-left'} rounded-lg bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50`}>
                  <div className="p-6">
                    <div className="grid grid-cols-3 gap-6">
                      {/* Web Development Card */}
                      <Link to="/what-we-do/web-development" className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200 block">
                        <div className="flex items-center mb-4">
                          <div className="bg-blue-100 p-3 rounded-lg">
                            <Monitor className="h-6 w-6 text-blue-600" />
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('header.whatWeDoDropdown.webDevelopment.title')}</h3>
                        <p className="text-gray-600 text-sm">
                          {t('header.whatWeDoDropdown.webDevelopment.subtitle')}
                        </p>
                      </Link>

                      {/* Mobile Apps Card */}
                      <Link to="/what-we-do/mobile-app" className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200 block">
                        <div className="flex items-center mb-4">
                          <div className="bg-green-100 p-3 rounded-lg">
                            <Smartphone className="h-6 w-6 text-green-600" />
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('header.whatWeDoDropdown.mobileApps.title')}</h3>
                        <p className="text-gray-600 text-sm">
                          {t('header.whatWeDoDropdown.mobileApps.subtitle')}
                        </p>
                      </Link>

                      {/* Bizosuite ERP Card */}
                      <Link to="/what-we-do/erp-solution" className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200 block">
                        <div className="flex items-center mb-4">
                          <div className="bg-purple-100 p-3 rounded-lg">
                            <Users className="h-6 w-6 text-purple-600" />
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('header.whatWeDoDropdown.erpSolution.title')}</h3>
                        <p className="text-gray-600 text-sm">
                          {t('header.whatWeDoDropdown.erpSolution.subtitle')}
                        </p>
                      </Link>

                      {/* E-commerce Solutions Card - Second Row First */}
                      <Link to="/what-we-do/ecommerce-application" className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200 block">
                        <div className="flex items-center mb-4">
                          <div className="bg-orange-100 p-3 rounded-lg">
                            <ShoppingCart className="h-6 w-6 text-orange-600" />
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('header.whatWeDoDropdown.ecommerceApplications.title')}</h3>
                        <p className="text-gray-600 text-sm">
                          {t('header.whatWeDoDropdown.ecommerceApplications.subtitle')}
                        </p>
                      </Link>

                      {/* Real Estate Platform Card - Second Row Second */}
                      <Link to="/what-we-do/property-management" className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200 block">
                        <div className="flex items-center mb-4">
                          <div className="bg-teal-100 p-3 rounded-lg">
                            <Building2 className="h-6 w-6 text-teal-600" />
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('header.whatWeDoDropdown.propertyManagementSystem.title')}</h3>
                        <p className="text-gray-600 text-sm">
                          {t('header.whatWeDoDropdown.propertyManagementSystem.subtitle')}
                        </p>
                      </Link>

                      {/* F&B Software Card - Second Row Third */}
                      <Link to="/what-we-do/fandb-solution" className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200 block">
                        <div className="flex items-center mb-4">
                          <div className="bg-red-100 p-3 rounded-lg">
                            <Utensils className="h-6 w-6 text-red-600" />
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('header.whatWeDoDropdown.fnbSolution.title')}</h3>
                        <p className="text-gray-600 text-sm">
                          {t('header.whatWeDoDropdown.fnbSolution.subtitle')}
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Stories Dropdown - Now with Arabic support */}
              <div className="relative group">
                <button 
                  className={`font-medium transition-colors duration-200 flex items-center ${
                    location.pathname.startsWith('/success-stories') 
                      ? 'text-custom-teal border-b-2 border-custom-teal pb-1' 
                      : 'text-gray-700 hover:text-custom-teal'
                  }`}
                >
                  {t('header.nav.successStories')}
                  <ChevronRight className={`${isRTL ? 'mr-1' : 'ml-1'} h-4 w-4 transition-transform duration-200 group-hover:rotate-90 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute ${isRTL ? 'right-0' : 'left-0'} mt-2 w-[600px] ${isRTL ? 'origin-top-right' : 'origin-top-left'} rounded-lg bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50`}>
                  <div className="p-6">
                    {loading ? (
                      <div className="flex justify-center items-center py-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-custom-teal"></div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-6">
                        {successStories.map((story) => (
                          <div key={story.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                            <Link to={`/success-stories/${story.slug}`} className="block">
                              <div className="flex items-center mb-1">
                                <img 
                                  src={logoMap[story.slug] || story.logo_url} 
                                  alt={`${getLocalizedSuccessStoryText(story, 'title')} Logo`} 
                                  className="h-24 w-24 object-contain"
                                  onError={(e) => {
                                    console.log(`Failed to load logo for ${getLocalizedSuccessStoryText(story, 'title')}:`, e.target.src);
                                    e.target.style.display = 'none';
                                  }}
                                />
                              </div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {getLocalizedSuccessStoryText(story, 'title')}
                              </h3>
                              <p className="text-gray-600 text-sm mb-2">
                                {getLocalizedSuccessStoryText(story, 'description')}
                              </p>
                            </Link>
                            {story.external_url && (
                              <a 
                                href={story.external_url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center text-custom-teal font-medium text-sm hover:text-custom-teal/80 transition-colors duration-200"
                              >
                                {getLocalizedSuccessStoryText(story, 'external_button_text') || t('header.successStoriesDropdown.tryNow')} 
                                <ChevronRight className={`${isRTL ? 'mr-1' : 'ml-1'} h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Blog Link - Fixed active state logic */}
              <Link 
                to="/blog" 
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === '/blog' || location.pathname.startsWith('/blog/')
                    ? 'text-custom-teal border-b-2 border-custom-teal pb-1' 
                    : 'text-gray-700 hover:text-custom-teal'
                }`}
              >
                {t('header.nav.blog')}
              </Link>
              
              <Link 
                to="/contact" 
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === '/contact' 
                    ? 'text-custom-teal border-b-2 border-custom-teal pb-1' 
                    : 'text-gray-700 hover:text-custom-teal'
                }`}
              >
                {t('header.nav.contactUs')}
              </Link>
            </nav>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center text-gray-700 hover:text-custom-teal font-medium"
            >
              🌐 {i18n.language === "en" ? "AR" : "EN"}
            </button>

            {/* CTA Button */}
            <Link 
              to="/contact" 
              className="bg-custom-teal hover:bg-custom-teal/90 text-white px-6 py-2 rounded-md font-medium transition duration-300"
            >
              {t('header.nav.ctaGetInTouch')}
            </Link>
          </div>

          {/* Mobile Right Side - Language Switcher + Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile Language Switcher - Positioned before menu button */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center justify-center w-12 h-10 bg-white/10 backdrop-blur-sm rounded-full text-gray-700 hover:text-custom-teal font-medium transition-all duration-200 border border-gray-200/50"
            >
              <span className="text-sm font-medium">
                {i18n.language === "en" ? "AR" : "EN"}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="text-gray-700 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
                    ? `text-custom-teal ${isRTL ? 'border-r-4 border-custom-teal pr-4' : 'border-l-4 border-custom-teal pl-4'}` 
                    : `text-gray-700 hover:text-custom-teal ${isRTL ? 'pr-4' : 'pl-4'}`
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.nav.home')}
              </Link>
              <Link 
                to="/about" 
                className={`font-medium py-2 transition-colors duration-200 ${
                  location.pathname === '/about' 
                    ? `text-custom-teal ${isRTL ? 'border-r-4 border-custom-teal pr-4' : 'border-l-4 border-custom-teal pl-4'}` 
                    : `text-gray-700 hover:text-custom-teal ${isRTL ? 'pr-4' : 'pl-4'}`
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.nav.aboutUs')}
              </Link>
              
              {/* Mobile What We Do Dropdown */}
              <div className="relative">
                <div className="flex items-center justify-between">
                  <Link 
                    to="/what-we-do"
                    className={`font-medium py-2 transition-colors duration-200 flex-1 ${
                      location.pathname === '/what-we-do' 
                        ? `text-custom-teal ${isRTL ? 'border-r-4 border-custom-teal pr-4' : 'border-l-4 border-custom-teal pl-4'}` 
                        : `text-gray-700 hover:text-custom-teal ${isRTL ? 'pr-4' : 'pl-4'}`
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('header.nav.whatWeDo')}
                  </Link>
                  <button 
                    className="text-gray-700 hover:text-custom-teal font-medium py-2 px-4 transition-colors duration-200"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-90' : ''} ${isRTL ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                {isDropdownOpen && (
                  <div className={`${isRTL ? 'pr-8' : 'pl-8'} mt-2 space-y-4`}>
                    <Link to="/what-we-do/web-development" className="block" onClick={() => setIsMenuOpen(false)}>
                      <h4 className="font-semibold text-gray-900">{t('header.whatWeDoDropdown.webDevelopment.title')}</h4>
                      <p className="text-sm text-gray-500 mt-1">{t('header.whatWeDoDropdown.webDevelopment.subtitle')}</p>
                    </Link>
                    <Link to="/what-we-do/mobile-app" className="block" onClick={() => setIsMenuOpen(false)}>
                      <h4 className="font-semibold text-gray-900">{t('header.whatWeDoDropdown.mobileApps.title')}</h4>
                      <p className="text-sm text-gray-500 mt-1">{t('header.whatWeDoDropdown.mobileApps.subtitle')}</p>
                    </Link>
                    <Link to="/what-we-do/erp-solution" className="block" onClick={() => setIsMenuOpen(false)}>
                      <h4 className="font-semibold text-gray-900">{t('header.whatWeDoDropdown.erpSolution.title')}</h4>
                      <p className="text-sm text-gray-500 mt-1">{t('header.whatWeDoDropdown.erpSolution.subtitle')}</p>
                    </Link>
                    <Link to="/what-we-do/ecommerce-application" className="block" onClick={() => setIsMenuOpen(false)}>
                      <h4 className="font-semibold text-gray-900">{t('header.whatWeDoDropdown.ecommerceApplications.title')}</h4>
                      <p className="text-sm text-gray-500 mt-1">{t('header.whatWeDoDropdown.ecommerceApplications.subtitle')}</p>
                    </Link>
                    <Link to="/what-we-do/property-management" className="block" onClick={() => setIsMenuOpen(false)}>
                      <h4 className="font-semibold text-gray-900">{t('header.whatWeDoDropdown.propertyManagementSystem.title')}</h4>
                      <p className="text-sm text-gray-500 mt-1">{t('header.whatWeDoDropdown.propertyManagementSystem.subtitle')}</p>
                    </Link>
                    <Link to="/what-we-do/fandb-solution" className="block" onClick={() => setIsMenuOpen(false)}>
                      <h4 className="font-semibold text-gray-900">{t('header.whatWeDoDropdown.fnbSolution.title')}</h4>
                      <p className="text-sm text-gray-500 mt-1">{t('header.whatWeDoDropdown.fnbSolution.subtitle')}</p>
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Mobile Success Stories Dropdown - Now with Arabic support */}
              <div className="relative">
                <div className="flex items-center justify-between">
                  <button 
                    className={`font-medium py-2 transition-colors duration-200 flex-1 text-left ${
                      location.pathname.startsWith('/success-stories') 
                        ? `text-custom-teal ${isRTL ? 'border-r-4 border-custom-teal pr-4' : 'border-l-4 border-custom-teal pl-4'}` 
                        : `text-gray-700 hover:text-custom-teal ${isRTL ? 'pr-4' : 'pl-4'}`
                    }`}
                    onClick={() => setIsSuccessDropdownOpen(!isSuccessDropdownOpen)}
                  >
                    {t('header.nav.successStories')}
                  </button>
                  <button 
                    className="text-gray-700 hover:text-custom-teal font-medium py-2 px-4 transition-colors duration-200"
                    onClick={() => setIsSuccessDropdownOpen(!isSuccessDropdownOpen)}
                  >
                    <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${isSuccessDropdownOpen ? 'rotate-90' : ''} ${isRTL ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                {isSuccessDropdownOpen && (
                  <div className={`${isRTL ? 'pr-8' : 'pl-8'} mt-2 space-y-4`}>
                    {loading ? (
                      <div className="flex justify-center items-center py-4">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-custom-teal"></div>
                      </div>
                    ) : (
                      successStories.map((story) => (
                        <Link 
                          key={story.id} 
                          to={`/success-stories/${story.slug}`} 
                          className="block" 
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className="flex items-center mb-2">
                            <img 
                              src={logoMap[story.slug] || story.logo_url} 
                              alt={`${getLocalizedSuccessStoryText(story, 'title')} Logo`} 
                              className={`h-12 w-12 object-contain ${isRTL ? 'ml-3' : 'mr-3'}`}
                              onError={(e) => {
                                console.log(`Failed to load mobile logo for ${getLocalizedSuccessStoryText(story, 'title')}:`, e.target.src);
                                e.target.style.display = 'none';
                              }}
                            />
                            <div>
                              <h4 className="font-semibold text-gray-900">
                                {getLocalizedSuccessStoryText(story, 'title')}
                              </h4>
                              <p className="text-sm text-gray-500 mt-1">
                                {getLocalizedSuccessStoryText(story, 'description')}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))
                    )}
                  </div>
                )}
              </div>
              
              {/* Mobile Blog Link */}
              <Link 
                to="/blog" 
                className={`font-medium py-2 transition-colors duration-200 ${
                  location.pathname === '/blog' || location.pathname.startsWith('/blog/')
                    ? `text-custom-teal ${isRTL ? 'border-r-4 border-custom-teal pr-4' : 'border-l-4 border-custom-teal pl-4'}` 
                    : `text-gray-700 hover:text-custom-teal ${isRTL ? 'pr-4' : 'pl-4'}`
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.nav.blog')}
              </Link>
              
              <Link 
                to="/contact" 
                className={`font-medium py-2 transition-colors duration-200 ${
                  location.pathname === '/contact' 
                    ? `text-custom-teal ${isRTL ? 'border-r-4 border-custom-teal pr-4' : 'border-l-4 border-custom-teal pl-4'}` 
                    : `text-gray-700 hover:text-custom-teal ${isRTL ? 'pr-4' : 'pl-4'}`
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.nav.contactUs')}
              </Link>
              
              <div className="border-t pt-4">
                <Link 
                  to="/contact" 
                  className="bg-custom-teal hover:bg-custom-teal/90 text-white px-6 py-3 rounded-md font-medium transition duration-300 text-center block mx-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('header.nav.ctaGetInTouch')}
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