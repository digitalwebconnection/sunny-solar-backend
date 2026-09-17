import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { calculatorsList } from '../../../data/calculatorsData';
import { CalculatorCard } from '../../../components/calculators/CalculatorCard';
import { Sparkles, SlidersHorizontal } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
  },
};

export const CalculatorsGridSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-16">
      {/* Centered Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.45 }}
        className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
      >
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-300/40 mb-3 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Tool Suite</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Available Solar & Battery Calculators
        </h2>

        <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-xl mx-auto leading-relaxed">
          Select a specialized tool below to model your home's exact energy profile, battery ROI, and quarterly bill reductions.
        </p>

        <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs mt-4">
          <SlidersHorizontal className="w-3.5 h-3.5 text-amber-500" />
          <span>8 Verified Engineering Models</span>
        </div>
      </motion.div>

      {/* Animated Calculators Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-30px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {calculatorsList.map((calc, index) => (
          <motion.div key={calc.id} variants={itemVariants}>
            <CalculatorCard calculator={calc} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CalculatorsGridSection;

