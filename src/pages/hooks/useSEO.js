// hooks/useSEO.js
import { useEffect } from 'react';

const useSEO = ({ title, description, canonicalUrl, keywords }) => {
  useEffect(() => {
    // Your website's base URL
    const baseUrl = 'https://www.cocopalms.com'; // Replace with your actual domain
    const fullCanonicalUrl = canonicalUrl.startsWith('http') 
      ? canonicalUrl 
      : `${baseUrl}${canonicalUrl}`;

    // Update title
    if (title) {
      document.title = title;
    }

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = description;
      document.head.appendChild(metaDescription);
    }

    // Update or create keywords meta tag
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        metaKeywords.content = keywords;
        document.head.appendChild(metaKeywords);
      }
    }

    // Update or create canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', fullCanonicalUrl);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = fullCanonicalUrl;
      document.head.appendChild(canonicalLink);
    }

    // Cleanup function (optional - removes tags when component unmounts)
    return () => {
      // You can choose to clean up or leave the tags
      // This is optional based on your needs
    };
  }, [title, description, canonicalUrl, keywords]);
};

export default useSEO;