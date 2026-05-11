import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import BackgroundAnimation from './components/animations/BackgroundAnimation';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Talent from './pages/Talent';
import TalentProfile from './pages/TalentProfile';

const App = () => {
  return (
    <HashRouter>
      <BackgroundAnimation />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/talent" element={<Talent />} />
        <Route path="/talent/:playerId" element={<TalentProfile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default App;
