import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ForceInfo, getIconComponent } from '../data/forces';

interface ForceCardProps {
  force: ForceInfo;
  index: number;
}

const ForceCard: React.FC<ForceCardProps> = ({ force, index }) => {
  const [showQuote, setShowQuote] = useState(false);
  const Icon = getIconComponent(force.icon);
  
  const handleSalute = () => {
    setShowQuote(true);
    setTimeout(() => setShowQuote(false), 4000);
  };
  
  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
    >
      <div className="h-2 bg-pak-green"></div>
      <div className="p-6">
        <motion.div 
          className="w-16 h-16 rounded-full bg-pak-green flex items-center justify-center mx-auto mb-4"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1 }}
        >
          <Icon size={32} className="text-pak-gold" />
        </motion.div>
        
        <h3 className="text-2xl font-bold text-pak-green text-center mb-2">{force.name}</h3>
        
        <div className="italic text-center text-gray-600 mb-4">"{force.motto}"</div>
        
        <p className="text-gray-700 text-center mb-6">{force.description}</p>
        
        <motion.button 
          className="w-full py-3 px-6 bg-pak-green text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors duration-300 flex items-center justify-center"
          whileTap={{ scale: 0.95 }}
          onClick={handleSalute}
        >
          Send Salute
          <motion.span 
            className="ml-2"
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            🇵🇰
          </motion.span>
        </motion.button>
      </div>

      <AnimatePresence>
        {showQuote && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 bg-pak-green bg-opacity-95 p-6 flex items-center justify-center"
          >
            <div className="text-center text-white">
              <p className="text-lg font-semibold mb-3">{force.quote}</p>
              <p className="text-sm opacity-80">Peace and dignity are our strength.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ForceCard;