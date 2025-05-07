import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

const CTAButton: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  
  const handleClick = () => {
    setIsAnimating(true);
    setShowMessage(true);
    setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => setShowMessage(false), 3000);
    }, 1500);
  };
  
  return (
    <div className="inline-block relative">
      <motion.button
        className="bg-pak-gold text-pak-green font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
      >
        <span className="mr-2">I Support Pakistan</span>
        <Heart className="h-5 w-5" />
      </motion.button>
      
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-white p-4 rounded-lg shadow-xl text-center w-64"
          >
            <p className="text-pak-green font-semibold">❤️ Thank you for your support!</p>
            <p className="text-sm text-gray-600 mt-2">Together we stand for peace and prosperity.</p>
          </motion.div>
        )}
      </AnimatePresence>
      
      {isAnimating && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 h-2 w-2 rounded-full bg-pak-gold"
              initial={{ x: -10, y: -10, opacity: 1 }}
              animate={{
                x: Math.random() * 200 - 100,
                y: Math.random() * 200 - 100,
                opacity: 0,
                scale: Math.random() * 3 + 1
              }}
              transition={{ duration: Math.random() + 0.5 }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CTAButton;