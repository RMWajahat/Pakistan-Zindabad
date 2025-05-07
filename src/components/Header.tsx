import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-pak-green shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <motion.div 
              className="text-pak-white font-bold text-xl md:text-2xl font-poppins flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Heart className="mr-2 text-pak-gold" />
              <span>Pakistan Support</span>
            </motion.div>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <NavItem href="#home">Home</NavItem>
              <NavItem href="#forces">Our Forces</NavItem>
              <NavItem href="#support">Support</NavItem>
              <NavItem href="#messages">Messages</NavItem>
            </ul>
          </nav>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-pak-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-pak-green"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <ul className="px-4 py-4 space-y-4">
            <MobileNavItem href="#home" onClick={() => setIsOpen(false)}>Home</MobileNavItem>
            <MobileNavItem href="#forces" onClick={() => setIsOpen(false)}>Our Forces</MobileNavItem>
            <MobileNavItem href="#support" onClick={() => setIsOpen(false)}>Support</MobileNavItem>
            <MobileNavItem href="#messages" onClick={() => setIsOpen(false)}>Messages</MobileNavItem>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => (
  <motion.li whileHover={{ scale: 1.1 }}>
    <a 
      href={href} 
      className="text-pak-white hover:text-pak-gold transition-colors duration-300 font-medium"
    >
      {children}
    </a>
  </motion.li>
);

interface MobileNavItemProps extends NavItemProps {
  onClick: () => void;
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({ href, onClick, children }) => (
  <li>
    <a 
      href={href} 
      className="block text-pak-white hover:text-pak-gold transition-colors duration-300 font-medium py-2"
      onClick={onClick}
    >
      {children}
    </a>
  </li>
);

export default Header;