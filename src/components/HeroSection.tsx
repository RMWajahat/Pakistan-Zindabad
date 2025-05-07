import React from 'react';
import { motion } from 'framer-motion';
import { Star, Moon } from 'lucide-react';
import CTAButton from './CTAButton';
import Flag from "../assets/pngwing.com.png";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-32 md:pb-24 min-h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-pak-green via-pak-green to-accent"
        style={{
          backgroundSize: '400% 400%',
          backgroundPosition: '0% 50%'
        }}
      />
      
      {/* Animated stars and moon */}
      <motion.div 
        className="absolute top-1/4 right-1/4 text-pak-gold opacity-50"
        animate={{ 
          y: [0, -10, 0],
          opacity: [0.5, 0.8, 0.5] 
        }}
        transition={{ 
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut" 
        }}
      >
        <Star size={24} />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-1/3 left-1/5 text-pak-gold opacity-50"
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.5, 0.9, 0.5] 
        }}
        transition={{ 
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
          delay: 1 
        }}
      >
        <Star size={16} />
      </motion.div>
      
      <motion.div 
        className="absolute top-1/3 right-1/5 text-pak-white opacity-50"
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.3, 0.7, 0.3] 
        }}
        transition={{ 
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
          delay: 0.5 
        }}
      >
        <Moon size={32} />
      </motion.div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-pak-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Supporting Pakistan <br />
              <span className="text-pak-gold">With Pride & Peace</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-pak-white mb-8 max-w-lg mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Celebrating our nation's guardians who uphold justice, dignity, and the true peaceful essence of Islam.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <CTAButton />
            </motion.div>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0">
            <motion.div 
              className="relative w-full h-[800px] md:h-[500px]"
              style={{
              backgroundImage: `url(${Flag})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              filter: 'drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.7))'
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;