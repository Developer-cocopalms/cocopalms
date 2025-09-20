import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { Helmet } from 'react-helmet';
import { getPageKeywords } from '../pages/hooks/keywordsService';
import { Users, TrendingUp, CheckCircle, ExternalLink, Building2, Home, Package, Smartphone, FileText, BarChart3 } from 'lucide-react';
import { useTranslation } from "react-i18next";
// Import all logos
import BizoSuiteLogo from '../assets/bizo_logo.png';
import RealEstateLogo from '../assets/Rentings Logo.jpeg';
import KitchenlyLogo from '../assets/Kitchenly Logo.png';
import CocoDineLogo from '../assets/Cocodine logo.png';
import { Link } from 'react-router-dom';

// Enhanced icon mapping object
const iconMap = {
  CheckCircle,
  Users,
  TrendingUp,
  Building2,
  Home,
  ExternalLink,
  Package,
  Smartphone,
  FileText,
  BarChart3
};

// Logo mapping object for local imports
const logoMap = {
  '/assets/bizo_logo.png': BizoSuiteLogo,
  '/assets/Rentings Logo.jpeg': RealEstateLogo,
  '/assets/Kitchenly Logo.png': KitchenlyLogo,
  '/assets/Cocodine logo.png': CocoDineLogo,
};

const DynamicSuccessStory = () => {
  const { slug } = useParams();
  const [storyData, setStoryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [keywords, setKeywords] = useState('success story, case study, digital transformation, IT solutions Kuwait, business growth, technology solutions')
  
  // Add translation hooks
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  // Generate canonical URL based on slug
  const canonicalUrl = `https://cocopalms.io/success-stories/${slug}`;

  // Helper function to get localized text from story data
  const getLocalizedText = (field) => {
    if (!storyData) return '';
    
    if (i18n.language === 'ar') {
      const arabicField = `${field}_ar`;
      return storyData[arabicField] || storyData[field]; // Fallback to English if Arabic not available
    }
    return storyData[field];
  };

  // Helper function to get localized JSON content (for features, stats, etc.)
  const getLocalizedJsonContent = (field) => {
    if (!storyData || !storyData[field]) return null;
    
    const content = storyData[field];
    if (!Array.isArray(content)) return content;
    
    return content.map(item => {
      if (i18n.language === 'ar') {
        return {
          ...item,
          title: item.title_ar || item.title,
          description: item.description_ar || item.description,
          label: item.label_ar || item.label
        };
      }
      return item;
    });
  };

  // Helper function to get localized additional sections
  const getLocalizedAdditionalSections = () => {
    if (!storyData || !storyData.additional_sections) return null;
    
    const sections = storyData.additional_sections;
    if (!Array.isArray(sections)) return sections;
    
    return sections.map(section => {
      let localizedSection = {
        ...section,
        title: i18n.language === 'ar' ? (section.title_ar || section.title) : section.title
      };
      
      if (section.items && Array.isArray(section.items)) {
        localizedSection.items = section.items.map(item => ({
          ...item,
          title: i18n.language === 'ar' ? (item.title_ar || item.title) : item.title,
          description: i18n.language === 'ar' ? (item.description_ar || item.description) : item.description
        }));
      }
      
      return localizedSection;
    });
  };
  
  useEffect(() => {
    fetchStoryContent();
  }, [slug]);

   
  useEffect(() => {
    const fetchKeywords = async () => {
      if (slug) {
        const pageKeywords = await getPageKeywords(`success-stories/${slug}`);
        if (pageKeywords) {
          setKeywords(pageKeywords);
        }
      }
    };
    fetchKeywords();
  }, [slug]);
   

  // Update meta description manually - similar to WhatWeDo page
  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', getMetaDescription());
    }
  }, [storyData, slug, i18n.language]); // Add i18n.language dependency

  
  // Add useEffect for canonical URL management
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
  }, [canonicalUrl, slug]);

  const fetchStoryContent = async () => {
    try {
      setLoading(true);
      
      const { data, error } = await supabase
        .from('success_stories_content')
        .select(`
          *,
          hero_title_ar,
          hero_subtitle_ar,
          hero_description_ar,
          hero_cta_text_ar,
          overview_title_ar,
          overview_description_ar,
          features_title_ar,
          results_title_ar,
          results_subtitle_ar,
          cta_title_ar,
          cta_description_ar,
          cta_primary_text_ar,
          cta_secondary_text_ar
        `)
        .eq('slug', slug)
        .eq('is_active', true)
        .single();

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }
      
      if (data) {
        setStoryData(data);
      } else {
        setError('Story not found');
      }
    } catch (err) {
      console.error('Error fetching story content:', err);
      setError('Failed to load story content');
    } finally {
      setLoading(false);
    }
  };

  const renderIcon = (iconName, className = "h-8 w-8") => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className={className} /> : <CheckCircle className={className} />;
  };

  const renderFeatures = (features) => {
    const localizedFeatures = getLocalizedJsonContent('features');
    if (!Array.isArray(localizedFeatures)) return null;
    
    return localizedFeatures.map((feature, index) => (
      <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
        <div className={`text-${feature.color} mb-4`}>
          {renderIcon(feature.icon, "h-8 w-8")}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
      </div>
    ));
  };

  const renderStats = (stats) => {
    const localizedStats = getLocalizedJsonContent('results_stats');
    if (!Array.isArray(localizedStats)) return null;
    
    return localizedStats.map((stat, index) => (
      <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
        <div className={`text-${stat.color} mx-auto mb-4`}>
          {renderIcon(stat.icon, "h-12 w-12")}
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
        <p className="text-gray-600">{stat.label}</p>
      </div>
    ));
  };

  const renderAdditionalSections = () => {
    const localizedSections = getLocalizedAdditionalSections();
    if (!localizedSections || !Array.isArray(localizedSections)) return null;

    return localizedSections.map((section, index) => {
      if (section.type === 'who_we_serve') {
        return (
          <div key={index} className={`py-16 bg-${section.background || 'gray-50'}`}>
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                {section.title}
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {section.items?.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                    <div className={`text-${item.color} mx-auto mb-4`}>
                      {renderIcon(item.icon, "h-12 w-12")}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      }
      return null;
    });
  };

  // Function to get the correct logo
  const getLogoSrc = () => {
    if (storyData?.logo_url) {
      // First try to get from logoMap (for local imports)
      const mappedLogo = logoMap[storyData.logo_url];
      if (mappedLogo) {
        return mappedLogo;
      }
      // If not found in mapping, use the URL directly (for external URLs)
      return storyData.logo_url;
    }
    // Fallback to BizoSuiteLogo
    return BizoSuiteLogo;
  };

  // Generate dynamic meta data based on story data
  const getMetaTitle = () => {
    // Specific titles for each success story based on slug
    const titleMap = {
      'bizo-books': 'Bizo Books Case Study | Cocopalms ERP & Automation Impact',
      'real-estate': 'Real Estate Case Study | Cocopalms Platform in Action',
      'kitchenly': 'Kitchenly Case Study | Cocopalms ERP & Platform Impact',
      'coco-dine': 'Cocodine Case Study | Cocopalms ERP & Automation Impact'
    };

    // Return specific title if slug matches, otherwise use dynamic title
    if (titleMap[slug]) {
      return titleMap[slug];
    }
    
    // Fallback to dynamic title based on story data with localization
    const heroTitle = getLocalizedText('hero_title');
    if (heroTitle) {
      return `${heroTitle} | Success Story | Cocopalms`;
    }
    
    return `Success Story | Cocopalms`;
  };

  const getMetaDescription = () => {
    // Specific descriptions for each success story based on slug
    const descriptionMap = {
      'bizo-books': 'Explore the Bizo Books case study showcasing Cocopalms ERP and automation solutions, driving efficiency and business transformation.',
      'real-estate': 'Discover our Real Estate case study, highlighting a B2B & B2C platform that revolutionizes property management and rental processes.',
      'kitchenly': 'Explore the Kitchenly case study, demonstrating the impact of Cocopalms ERP and platform solutions on efficiency and business growth.',
      'coco-dine': 'Explore the Cocodine case study, showcasing how Cocopalms ERP and automation solutions enhance operational efficiency and business performance.'
    };

    // Return specific description if slug matches
    if (descriptionMap[slug]) {
      return descriptionMap[slug];
    }
    
    // Fallback to dynamic description based on story data with localization
    const heroSubtitle = getLocalizedText('hero_subtitle');
    if (heroSubtitle) {
      return heroSubtitle.length > 160 
        ? heroSubtitle.substring(0, 157) + '...'
        : heroSubtitle;
    }
    
    return `Discover how Cocopalms helped transform businesses with innovative technology solutions and digital transformation services.`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-teal-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">
            {isRTL ? 'جار التحميل...' : 'Loading story content...'}
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="text-center max-w-md mx-auto p-8">
          <div className="text-red-600 mb-4">
            <ExternalLink className="h-16 w-16 mx-auto" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {isRTL ? 'عذراً! حدث خطأ ما' : 'Oops! Something went wrong'}
          </h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button 
            onClick={() => window.history.back()}
            className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
          >
            {isRTL ? 'العودة' : 'Go Back'}
          </button>
        </div>
      </div>
    );
  }

  if (!storyData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {isRTL ? 'القصة غير موجودة' : 'Story Not Found'}
          </h2>
          <p className="text-gray-600">
            {isRTL ? 'لا يمكن العثور على قصة النجاح المطلوبة.' : 'The requested success story could not be found.'}
          </p>
        </div>
      </div>
    );
  }

  const getMetaKeywords = () => {
    // Return the dynamic keywords state
    return keywords;
  };

  return (
    <div className="min-h-screen bg-gray-50" dir={isRTL ? 'rtl' : 'ltr'}>
      <Helmet>
        <title>{getMetaTitle()}</title>
        <meta name="keywords" content={getMetaKeywords()} />
        <meta name="description" content={getMetaDescription()} />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={getMetaTitle()} />
        <meta property="og:description" content={getMetaDescription()} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Cocopalms" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={getMetaTitle()} />
        <meta name="twitter:description" content={getMetaDescription()} />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Cocopalms" />
        <meta name="keywords" content="success story, case study, digital transformation, IT solutions Kuwait, business growth, technology solutions" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Helmet>

      {/* Hero Section */}
      <div className={`bg-gradient-to-r from-${storyData.gradient_from} to-${storyData.gradient_to} text-white py-20 mt-24`}>
        <div className="container mx-auto px-4 text-center">
          {/* Dynamic Logo */}
          <div className="flex justify-center mb-6">
            <div className="bg-white p-4 rounded-full shadow-lg">
              <img 
                src={getLogoSrc()} 
                alt={`${getLocalizedText('hero_title')} Logo`} 
                className="h-12 w-12 object-contain"
                onError={(e) => {
                  // Fallback to BizoSuiteLogo if image fails to load
                  e.target.src = BizoSuiteLogo;
                }}
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{getLocalizedText('hero_title')}</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            {getLocalizedText('hero_subtitle')}
          </p>
          
          {storyData.hero_cta_url && (
            <Link
              to={storyData.hero_cta_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              {getLocalizedText('hero_cta_text')} <ExternalLink className={`${isRTL ? 'mr-2' : 'ml-2'} h-5 w-5`} />
            </Link>
          )}
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              {getLocalizedText('overview_title')}
            </h2>
            <div className="prose prose-xl mx-auto">
              <p className="text-gray-600 text-xl leading-relaxed text-center">
                {getLocalizedText('overview_description')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            {getLocalizedText('features_title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {renderFeatures()}
          </div>
        </div>
      </div>

      {/* Additional Sections (like "Who We Serve") */}
      {renderAdditionalSections()}

      {/* Results & Impact */}
      <div className={`py-20 bg-${storyData.results_background_color || 'blue-50'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            {getLocalizedText('results_title')}
          </h2>
          {getLocalizedText('results_subtitle') && (
            <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
              {getLocalizedText('results_subtitle')}
            </p>
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {renderStats()}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className={`py-20 bg-gradient-to-r from-${storyData.gradient_from} to-${storyData.gradient_to} text-white`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">{getLocalizedText('cta_title')}</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            {getLocalizedText('cta_description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {storyData.cta_primary_url && (
              <Link
                to={storyData.cta_primary_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                {getLocalizedText('cta_primary_text')} <ExternalLink className={`${isRTL ? 'mr-2' : 'ml-2'} h-5 w-5`} />
              </Link>
            )}
            {storyData.cta_secondary_url && (
              <Link 
                to={storyData.cta_secondary_url} 
                className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
              >
                {getLocalizedText('cta_secondary_text')}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicSuccessStory;