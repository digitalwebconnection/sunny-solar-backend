import React from 'react';
import { motion } from 'framer-motion';
import { Sun } from 'lucide-react';

export const ProjectsHeroSection: React.FC = () => {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-10 bg-linear-to-b from-amber-500/10 via-amber-500/5 to-white overflow-hidden ">
      {/* Background glow discs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 left-10 w-80 h-80 bg-orange-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#1d4ed8] bg-blue-50 border border-blue-200/90 shadow-2xs mb-4">
          <span className="w-2 h-2 rounded-full bg-[#1d4ed8] animate-pulse" />
          <span>Real South East Queensland Rooftops</span>
        </div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-[1.12] max-w-4xl mx-auto"
        >
          Completed Solar & Battery Systems{' '}
          <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
            Built to Last.
          </span>
        </motion.h1>

        {/* Narrative Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-base sm:text-lg text-slate-700 max-w-6xl mx-auto leading-relaxed font-normal"
        >
          Inspect real rooftop and battery installations across Brisbane, Gold Coast, and the Hinterland. Verified meter yields, unedited photos, and 100% in-house Master Electrician workmanship.
        </motion.p>

        {/* Key Metrics Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 "
        >
          <div className="p-4 text-center rounded-xl bg-blue-50/70 border border-blue-200/70 shadow-2xs">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#1d4ed8] block">4,200+</span>
            <span className="text-[11px] font-bold text-blue-800 uppercase tracking-wider mt-0.5 block">
              Systems Installed
            </span>
          </div>

          <div className="p-4  text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-amber-900 block">$3.4M+</span>
            <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider mt-0.5 block">
              Annual Client Savings
            </span>
          </div>

          <div className="p-4 text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-950 block">100%</span>
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-0.5 block">
              In-House Tradesmen
            </span>
          </div>

          <div className="p-4 0 text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-900 block">4.98★</span>
            <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider mt-0.5 block">
              Google Rating (280+)
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsHeroSection;
