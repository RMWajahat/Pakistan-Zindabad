import React from 'react';
import { motion } from 'framer-motion';
import ForceCard from '../components/ForceCard';
import { forces } from '../data/forces';

const ForcesSection: React.FC = () => {
  return (
    <section id="forces" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-pak-green mb-4">Our Guardians of Peace</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            The brave men and women who protect our borders and uphold Pakistan's values of dignity, justice, and peace.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {forces.map((force, index) => (
            <ForceCard key={force.id} force={force} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForcesSection;