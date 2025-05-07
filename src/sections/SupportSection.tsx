import React from 'react';
import { motion } from 'framer-motion';
import { Move as Dove, Shield, Heart } from 'lucide-react';

const SupportSection: React.FC = () => {
  const handleJoinMovement = () => {
    window.open('https://www.linkedin.com/in/muhammad-wajahat-hussain-0b5177225/', '_blank');
  };

  return (
    <section id="support" className="py-20 bg-gradient-to-b from-pak-green to-accent text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stand With Pakistan</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Join us in supporting the true values of peace, dignity, and justice that Pakistan and Islam represent.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Shield className="h-12 w-12 text-pak-gold" />}
            title="Protect"
            description="Support efforts to protect Pakistan's sovereignty and the dignity of its people."
            index={0}
          />
          
          <FeatureCard 
            icon={<Dove className="h-12 w-12 text-pak-gold" />}
            title="Promote Peace"
            description="Help spread the message of peace and tolerance that represents the true essence of Islam."
            index={1}
          />
          
          <FeatureCard 
            icon={<Heart className="h-12 w-12 text-pak-gold" />}
            title="Unite"
            description="Stand united with Pakistanis around the world in solidarity and mutual respect."
            index={2}
          />
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="bg-pak-gold text-pak-green font-bold py-4 px-10 rounded-full shadow-lg text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleJoinMovement}
          >
            Join Me and Make Pakistan Proud
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div 
      className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <motion.div 
        className="mx-auto mb-4 w-20 h-20 rounded-full bg-pak-green/50 flex items-center justify-center"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 1 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-white/80">{description}</p>
    </motion.div>
  );
};

export default SupportSection;