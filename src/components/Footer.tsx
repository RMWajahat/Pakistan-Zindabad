import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Flag, Star, Move as Dove } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-pak-green text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <motion.div 
              className="flex items-center mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Heart className="text-pak-gold mr-2" />
              <span className="text-xl font-bold">Pakistan Support</span>
            </motion.div>
            <motion.p 
              className="text-gray-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Celebrating the true essence of peace, dignity and honor that our forces uphold.
            </motion.p>
          </div>
          
          <div>
            <motion.h3 
              className="text-lg font-semibold mb-4 flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Flag className="text-pak-gold mr-2" />
              Quick Links
            </motion.h3>
            <motion.ul 
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <li><a href="#home" className="text-gray-300 hover:text-pak-gold transition-colors duration-300">Home</a></li>
              <li><a href="#forces" className="text-gray-300 hover:text-pak-gold transition-colors duration-300">Our Forces</a></li>
              <li><a href="#support" className="text-gray-300 hover:text-pak-gold transition-colors duration-300">Support</a></li>
              <li><a href="#messages" className="text-gray-300 hover:text-pak-gold transition-colors duration-300">Messages</a></li>
            </motion.ul>
          </div>
          
          <div>
            <motion.h3 
              className="text-lg font-semibold mb-4 flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Star className="text-pak-gold mr-2" />
              Connect With Me
            </motion.h3>
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              
              <a href="https://www.instagram.com/invis.codes" className="text-gray-300 hover:text-pak-gold transition-colors duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/muhammad-wajahat-hussain-0b5177225/" className="text-gray-300 hover:text-pak-gold transition-colors duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15A1.5 1.5 0 0021 19.5v-15A1.5 1.5 0 0019.5 3zM8.25 18H6V9h2.25v9zm-1.125-10.125a1.375 1.375 0 110-2.75A1.375 1.375 0 017.125 7.875zM18 18h-2.25v-4c0-.75-.25-1.25-.875-1.25-.625 0-.875.5-.875 1v4H12V9h2v1c1-.75 2-2.25 4-2 .75-.125 2 .125 2 .125V18z"/>
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-700 text-center flex items-center justify-center text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Dove className="mr-2 text-pak-gold" size={18} />
          <p>© {new Date().getFullYear()} Pakistan Support. Made with love for peace and unity.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;