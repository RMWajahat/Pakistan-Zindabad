import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { supportMessages } from '../data/messages';

const SupporterWall: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  
  useEffect(() => {
    const checkScroll = () => {
      if (containerRef.current) {
        const { top } = containerRef.current.getBoundingClientRect();
        if (top < window.innerHeight - 100) {
          controls.start('visible');
        }
      }
    };
    
    window.addEventListener('scroll', checkScroll);
    checkScroll();
    
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [controls]);
  

  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <section id="messages" className="py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-pak-green mb-4">Voices of Support</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Join thousands of Pakistanis expressing their support and appreciation for our brave forces.
          </p>
        </motion.div>
        
        <div ref={containerRef} className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={container}
            initial="hidden"
            animate={controls}
          >
            {supportMessages.map((message) => (
              <motion.div 
                key={message.id}
                className="bg-white p-4 rounded-lg shadow-md border-l-4 border-pak-green"
                variants={item}
                whileHover={{ scale: 1.03, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
              >
                <p className="text-gray-700 mb-3">"{message.message}"</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-pak-green">{message.name}</span>
                  <span className="text-sm text-gray-500">{message.location}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <a href='https://mail.google.com/mail/?view=cm&to=rajamuhammadwajahat2003@gmail.com&su=Support%20Message%20for%20Pakistan&body=Pakistan%20Zindabad' target='blank' rel="noopener noreferrer"
              className="bg-pak-green text-white py-3 px-8 rounded-lg font-medium hover:bg-opacity-90 transition-colors duration-300 shadow-md"
            >
              Share Your Message
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SupporterWall;