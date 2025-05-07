import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import QuranVerse from './components/QuranVerse';
import HeroSection from './components/HeroSection';
import ForcesSection from './sections/ForcesSection';
import SupportSection from './sections/SupportSection';
import SupporterWall from './components/SupporterWall';
import Footer from './components/Footer';

function App() {
  return (
    <motion.div 
      className="font-poppins"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <QuranVerse />
      <HeroSection />
      <ForcesSection />
      <SupportSection />
      <SupporterWall />
      <Footer />
    </motion.div>
  );
}

export default App;