import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import LandingPage from './pages/Home';

import NotFound from './pages/NotFound';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import WhatWeDo from './pages/WhatWeDo';
import WebDevelopment from './pages/WebDevelopment';
import MobileApp from './pages/MobileApp';
import ErpSolution from './pages/ErpSolution';
import EcommerceApplication from './pages/EcommerceApplication';
import PropertyManagement from './pages/PropertyManagement';
import FandbSolution from './pages/FandbSolution';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Blog from './pages/Blog';

// Import the dynamic component (this will handle ALL success stories)
import DynamicSuccessStory from './components/DynamicSuccessStory.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Header stays at top */}
        <Header />
        <ScrollToTop /> {/* Add this line - it should be inside Router but outside Routes */}
        {/* Main content area - flex-1 makes it grow to fill available space */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            
            <Route path="/about" element={<AboutUs />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/what-we-do/web-development" element={<WebDevelopment />} />
            <Route path="/what-we-do/mobile-app" element={<MobileApp />} />
            <Route path="/what-we-do/erp-solution" element={<ErpSolution />} />
            <Route path="/what-we-do/ecommerce-application" element={<EcommerceApplication />} />
            <Route path="/what-we-do/property-management" element={<PropertyManagement />} />
            <Route path="/what-we-do/fandb-solution" element={<FandbSolution />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Blog />} />
            
            {/* Single dynamic route handles ALL success stories */}
            <Route path="/success-stories/:slug" element={<DynamicSuccessStory />} />
            
            {/* 
              REMOVED STATIC SUCCESS STORY ROUTES:
              These are now handled by the dynamic route above
              - /success-stories/bizo-books → DynamicSuccessStory (slug: "bizo-books")
              - /success-stories/real-estate → DynamicSuccessStory (slug: "real-estate") 
              - /success-stories/kitchenly → DynamicSuccessStory (slug: "kitchenly")
              - /success-stories/coco-dine → DynamicSuccessStory (slug: "coco-dine")
            */}
            
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            
            {/* 404 route should be last */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        {/* Footer stays at bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;