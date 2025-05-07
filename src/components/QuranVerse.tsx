import React from 'react';
import { motion } from 'framer-motion';

const QuranVerse: React.FC = () => {
  return (
    <motion.div 
      className="w-full text-center py-10 px-4 bg-gradient-to-r from-pak-green via-accent to-pak-green mt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl text-pak-white font-bold mb-4 font-arabic"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          وَقَاتِلُوا فِي سَبِيلِ اللَّهِ الَّذِينَ يُقَاتِلُونَكُمْ وَلَا تَعْتَدُوا ۚ إِنَّ اللَّهَ لَا يُحِبُّ الْمُعْتَدِينَ
        </motion.h2>
        
        <motion.p 
          className="text-lg md:text-xl text-pak-white font-medium italic"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          "Fight in the cause of Allah ˹only˺ against those who wage war against you, but do not exceed the limits." — Surah Al-Baqarah 2:190
        </motion.p>
      </div>
    </motion.div>
  );
};

export default QuranVerse;