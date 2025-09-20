import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import your translation files
import enTranslations from './locales/en.json';
import arTranslations from './locales/ar.json';

i18n
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    debug: true, // Set to false in production
    
    // Define available languages
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    
    // Define the resources
    resources: {
      en: {
        translation: enTranslations
      },
      ar: {
        translation: arTranslations
      }
    },
    
    // Configure language detection
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'], // Cache the language selection
    },
    
    interpolation: {
      escapeValue: false // React already does escaping
    }
  });

export default i18n;