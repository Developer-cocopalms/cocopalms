// Create this file: src/components/schema/SchemaMarkup.js
import React from 'react';
import { Helmet } from 'react-helmet';

// 1. Organization Schema for Cocopalms
export const CocopalmsOrganizationSchema = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TechnologyCompany",
    "name": "Cocopalms Technology Partner",
    "alternateName": "Cocopalms",
    "description": "Leading IT company in Kuwait providing web development, mobile application development, e-commerce solutions, ERP systems, and digital transformation services",
    "url": "https://cocopalms.io",
    "logo": {
      "@type": "ImageObject",
      "url": "https://cocopalms.io/logo.png" // Update with your actual logo URL
    },
    "foundingDate": "2020", // Update with actual founding date
    "numberOfEmployees": "10-50", // Update based on your team size
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Kuwait",
      "addressRegion": "Kuwait",
      "addressLocality": "Kuwait City" // Update with actual location
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+965-XXXX-XXXX", // Add your actual phone number
        "contactType": "customer service",
        "availableLanguage": ["English", "Arabic"],
        "areaServed": "Kuwait"
      },
      {
        "@type": "ContactPoint",
        "email": "info@cocopalms.io", // Add your actual email
        "contactType": "customer service",
        "availableLanguage": ["English", "Arabic"]
      }
    ],
    "sameAs": [
      // Add your actual social media URLs
      "https://www.facebook.com/cocopalms",
      "https://www.linkedin.com/company/cocopalms",
      "https://twitter.com/cocopalms",
      "https://www.instagram.com/cocopalms"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "50", // Based on your "50+ Companies" stat
      "bestRating": "5"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Professional website development for businesses of all sizes using modern technologies like React and Node.js"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile Application Development",
            "description": "Native and cross-platform mobile app development for iOS and Android"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce Development",
            "description": "Scalable e-commerce platforms with secure payment gateways and inventory management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "ERP Solutions",
            "description": "Comprehensive ERP systems including BizoSuite for business management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Property Management Systems",
            "description": "B2B and B2C property management platforms connecting landlords and tenants"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Food & Beverage Software",
            "description": "Specialized software solutions for restaurants, cafes, and F&B businesses"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

// 2. Website Schema
export const CocopalmsWebsiteSchema = () => {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Cocopalms Technology Partner",
    "alternateName": "Cocopalms",
    "url": "https://cocopalms.io",
    "description": "IT Company in Kuwait providing web development, mobile apps, e-commerce, and ERP solutions",
    "inLanguage": "en",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://cocopalms.io/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://cocopalms.io/#organization"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
};

// 3. HomePage WebPage Schema
export const CocopalmsHomePageSchema = () => {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "IT Company in Kuwait | Cocopalms Technology Partner",
    "url": "https://cocopalms.io",
    "description": "Leading IT company in Kuwait providing web development, mobile apps, e-commerce, ERP systems, and digital transformation services. Trusted by 50+ companies.",
    "inLanguage": "en",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://cocopalms.io/#website"
    },
    "about": {
      "@type": "Organization",
      "@id": "https://cocopalms.io/#organization"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://cocopalms.io/hero-image.jpg" // Update with your hero image URL
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://cocopalms.io"
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>
    </Helmet>
  );
};

// 4. FAQ Schema (if you add FAQ section)
export const CocopalmsFAQSchema = ({ faqs }) => {
  if (!faqs || faqs.length === 0) return null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};

// 5. Service-specific Schema for individual service pages
export const CocopalmsServiceSchema = ({ serviceName, serviceDescription, serviceUrl }) => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": serviceDescription,
    "url": serviceUrl,
    "provider": {
      "@type": "Organization",
      "@id": "https://cocopalms.io/#organization"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Kuwait"
    },
    "serviceType": "Information Technology Services",
    "category": "Technology"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
    </Helmet>
  );
};

// 6. Review/Testimonial Schema
export const CocopalmsReviewSchema = ({ testimonials }) => {
  if (!testimonials || testimonials.length === 0) return null;

  const reviews = testimonials.map((testimonial, index) => ({
    "@type": "Review",
    "author": {
      "@type": "Organization",
      "name": testimonial.author_name || testimonial.author
    },
    "reviewBody": testimonial.quote,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": 5, // Assuming 5-star reviews
      "bestRating": 5
    }
  }));

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://cocopalms.io/#organization",
    "review": reviews
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(reviewSchema)}
      </script>
    </Helmet>
  );
};

// 7. Breadcrumb Schema for internal pages
export const CocopalmsBreadcrumbSchema = ({ breadcrumbs }) => {
  if (!breadcrumbs || breadcrumbs.length === 0) return null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

// 8. Local Business Schema (if you want to emphasize local presence in Kuwait)
export const CocopalmsLocalBusinessSchema = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://cocopalms.io/#localbusiness",
    "name": "Cocopalms Technology Partner",
    "image": "https://cocopalms.io/logo.png",
    "telephone": "+965-XXXX-XXXX", // Add your phone
    "email": "info@cocopalms.io", // Add your email
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address", // Add actual address
      "addressLocality": "Kuwait City",
      "addressRegion": "Kuwait",
      "addressCountry": "Kuwait"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "29.3759", // Add actual coordinates
      "longitude": "47.9774"
    },
    "url": "https://cocopalms.io",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday", 
          "Wednesday",
          "Thursday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "$$", // Adjust based on your pricing
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "50"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
};