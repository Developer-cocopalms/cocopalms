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
import BizoBooks from './pages/BizoBooks';
import RealEstate from './pages/RealEstate';
import Kitchenly from './pages/Kitchenly';
import CocoDine from './pages/CocoDine';
import PrivacyPolicy from './pages/PrivacyPolicy';
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
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/success-stories/bizo-books" element={<BizoBooks />} />
            <Route path="/success-stories/real-estate" element={<RealEstate />} />
            <Route path="/success-stories/kitchenly" element={<Kitchenly />} />
            <Route path="/success-stories/coco-dine" element={<CocoDine />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        
        {/* Footer stays at bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;