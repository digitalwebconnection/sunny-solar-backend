import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { easeInOut, motion, type Variants } from 'framer-motion';
import { MapPin, ArrowRight, Sun } from 'lucide-react';
import { serviceAreasData } from '../../../data/serviceAreasData';
import { Button } from '../../../components/ui/Button';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const ServiceAreasTeaserSection: React.FC = () => {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  const flagshipHubs = serviceAreasData.slice(0, 2);
  const regionalCorridors = serviceAreasData.slice(2, 5);

  const regionalThemes = [
    {
      // Sunshine Coast: Emerald Green
      borderActive: 'border-[#265e11] ring-2 ring-[#265e11]/20',
      borderHover: 'hover:border-[#265e11]/60',
      shadowHover: 'hover:shadow-emerald-500/15',
      indicator: 'bg-gradient-to-r from-[#265e11] via-emerald-500 to-teal-400',
      iconBg: 'bg-emerald-50 text-[#265e11] group-hover:bg-[#265e11] group-hover:text-white',
      titleHover: 'group-hover:text-[#265e11]',
      badge: 'text-[#265e11] bg-emerald-50/90 group-hover:bg-emerald-100/90 border-emerald-200/80',
      sunIcon: 'text-[#265e11]',
      action: 'text-[#265e11] group-hover:text-emerald-800',
    },
    {
      // Ipswich & Western Corridor: Solar Panel Blue
      borderActive: 'border-[#1d4ed8] ring-2 ring-[#1d4ed8]/20',
      borderHover: 'hover:border-[#1d4ed8]/60',
      shadowHover: 'hover:shadow-blue-500/15',
      indicator: 'bg-gradient-to-r from-[#1d4ed8] via-[#2563eb] to-[#0284c7]',
      iconBg: 'bg-blue-50 text-[#1d4ed8] group-hover:bg-[#1d4ed8] group-hover:text-white',
      titleHover: 'group-hover:text-[#1d4ed8]',
      badge: 'text-[#1d4ed8] bg-blue-50/90 group-hover:bg-blue-100/90 border-blue-200/80',
      sunIcon: 'text-[#1d4ed8]',
      action: 'text-[#1d4ed8] group-hover:text-blue-800',
    },
    {
      // Northern NSW: Solar Orange
      borderActive: 'border-[#ed5001] ring-2 ring-[#ed5001]/20',
      borderHover: 'hover:border-[#ed5001]/60',
      shadowHover: 'hover:shadow-orange-500/15',
      indicator: 'bg-gradient-to-r from-[#ed5001] via-[#f06e02] to-[#f4a304]',
      iconBg: 'bg-orange-50 text-[#ed5001] group-hover:bg-[#ed5001] group-hover:text-white',
      titleHover: 'group-hover:text-[#ed5001]',
      badge: 'text-[#ed5001] bg-orange-50/90 group-hover:bg-orange-100/90 border-orange-200/80',
      sunIcon: 'text-[#ed5001]',
      action: 'text-[#ed5001] group-hover:text-[#c84300]',
    },
  ];

  return (
    <section className="py-10 lg:py-14 bg-linear-to-b from-white via-slate-50/70 to-white relative overflow-hidden border-t border-slate-200/70">
      {/* Background Animated Atmosphere: Technical Dot-Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#18181b 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Floating Ambient Brand Glow Orbs */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: easeInOut }}
        className="absolute top-1/4 -left-28 w-96 h-96 bg-[#265e11]/8 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 15, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-12 -right-28 w-96 h-96 bg-[#ed5001]/8 rounded-full blur-3xl pointer-events-none"
      />
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Local Authority Story & Interactive Action */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-2"
          >
            {/* Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#18181b] tracking-tight font-serif leading-[1.15]">
              Proudly Powering <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#ed5001] via-[#f06e02] to-[#f4a304] inline-block hover:scale-[1.01] transition-transform origin-left">
                South East Queensland
              </span>
            </h2>

            {/* Narrative */}
            <p className="text-base text-slate-700 leading-relaxed">
              We don’t run remote call centres from interstate. Trent Palmer and our in-house master electricians are based directly out of our Gold Coast and Brisbane facilities—ensuring rapid 5-day Energex approvals, marine-grade coastal installations, and genuine local accountability.
            </p>

            {/* Action Button with Light Shimmer Sheen */}
            <div className="">
              <Button
                to="/service-areas"
                variant="primary"
                size="md"
                className="w-full sm:w-auto group relative overflow-hidden rounded-xl shadow-lg shadow-[#ed5001]/25 bg-linear-to-r from-[#ed5001] via-[#f06e02] to-[#f4a304] hover:from-[#c84300] hover:to-[#ed5001] text-white border-0 font-bold px-7 py-3.5 transition-all duration-300 hover:shadow-[#ed5001]/40 hover:-translate-y-0.5 justify-center"
                icon={
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                }
              >
                <span className="absolute top-0 -left-full w-[60%] h-full bg-linear-to-r from-transparent via-white/25 to-transparent -skew-x-12 group-hover:left-[200%] transition-all duration-1000 ease-out pointer-events-none" />
                <span>Explore All Suburbs & Local Rebates</span>
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Clear, Balanced Regional Hub Cards with Rich Micro-Animations */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-7 space-y-4"
          >
            {/* Top Row: 2 Major Flagship Metro Hubs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {flagshipHubs.map((area, idx) => {
                const isHovered = hoveredSlug === area.slug;
                const isBlue = idx === 1; // Brisbane uses Solar Panel Blue

                return (
                  <motion.div
                    key={area.slug}
                    variants={cardVariants}
                    whileHover={{ y: -5, transition: { duration: 0.25, ease: 'easeOut' } }}
                    whileTap={{ scale: 0.985 }}
                    className="h-full"
                  >
                    <Link
                      to={`/service-areas/${area.slug}`}
                      onMouseEnter={() => setHoveredSlug(area.slug)}
                      onMouseLeave={() => setHoveredSlug(null)}
                      className={`group relative bg-white rounded-2xl p-5 sm:p-6 border transition-all duration-300 flex flex-col justify-between h-full overflow-hidden shadow-md shadow-slate-900/5 hover:shadow-xl ${
                        isBlue
                          ? isHovered
                            ? 'border-[#1d4ed8] ring-2 ring-[#1d4ed8]/20 shadow-blue-500/15'
                            : 'border-slate-300/80 hover:border-[#1d4ed8]/60 hover:shadow-blue-500/15'
                          : isHovered
                            ? 'border-[#ed5001] ring-2 ring-[#ed5001]/20 shadow-orange-500/15'
                            : 'border-slate-300/80 hover:border-[#ed5001]/60 hover:shadow-orange-500/15'
                      }`}
                    >
                      {/* Glowing Backlight Aura on Hover */}
                      <div
                        className={`absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 blur-xs transition-opacity duration-500 -z-10 ${
                          isBlue
                            ? 'bg-linear-to-r from-[#1d4ed8]/15 via-[#0284c7]/10 to-[#265e11]/15'
                            : 'bg-linear-to-r from-[#ed5001]/15 via-[#f4a304]/10 to-[#265e11]/15'
                        }`}
                      />

                      {/* Top active indicator line on hover */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                          isBlue
                            ? 'bg-linear-to-r from-[#1d4ed8] via-[#2563eb] to-[#0284c7]'
                            : 'bg-linear-to-r from-[#ed5001] via-[#f06e02] to-[#f4a304]'
                        }`}
                      />

                      <div className="space-y-4">
                        {/* Header Row: Icon, Title & Sun Hours Badge */}
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3 min-w-0">
                            <div
                              className={`w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 transition-all duration-300 shadow-xs ${
                                isBlue
                                  ? 'bg-blue-50/80 border-blue-200/70 text-[#1d4ed8] group-hover:bg-[#1d4ed8] group-hover:text-white group-hover:shadow-blue-500/20'
                                  : 'bg-orange-50/80 border-orange-200/70 text-[#ed5001] group-hover:bg-[#ed5001] group-hover:text-white group-hover:shadow-orange-500/20'
                              }`}
                            >
                              <MapPin className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" />
                            </div>
                            <div className="min-w-0">
                              <h3
                                className={`font-bold text-slate-900 transition-colors text-base sm:text-lg truncate ${
                                  isBlue ? 'group-hover:text-[#1d4ed8]' : 'group-hover:text-[#ed5001]'
                                }`}
                              >
                                {area.name}
                              </h3>
                              <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                                </span>
                                <span>{area.installerCount.split(' ')[0]} Master Electricians</span>
                              </div>
                            </div>
                          </div>

                          {/* Rotating Sun Badge */}
                          <span
                            className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full border shrink-0 transition-all duration-300 shadow-2xs ${
                              isBlue
                                ? 'text-[#1d4ed8] bg-blue-50/90 group-hover:bg-blue-100/90 border-blue-200/80'
                                : 'text-[#ed5001] bg-orange-50/90 group-hover:bg-orange-100/90 border-orange-200/80'
                            }`}
                          >
                            <Sun
                              className={`w-3.5 h-3.5 transition-transform duration-700 ease-out group-hover:rotate-180 group-hover:scale-110 ${
                                isBlue ? 'text-[#1d4ed8]' : 'text-[#ed5001]'
                              }`}
                            />
                            <span>{area.solarHoursPerDay}h sun</span>
                          </span>
                        </div>

                        {/* Clear Key Suburbs */}
                        <div className="text-xs text-slate-600 flex items-center gap-1.5 truncate pt-0.5">
                          <span className="font-semibold text-slate-800 shrink-0">Key Suburbs:</span>
                          <span className="text-slate-500 truncate">{area.suburbsServed.slice(0, 4).join(', ')}...</span>
                        </div>
                      </div>

                      {/* Bottom Action Strip */}
                      <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1.5">
                          <span className="text-slate-400 font-medium">Est. Savings:</span>
                          <span className="font-bold text-[#265e11] bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200/60 transition-transform duration-300 group-hover:scale-105">
                            {area.averageAnnualSolarSavings}
                          </span>
                        </div>
                        <span
                          className={`font-bold inline-flex items-center gap-1 transition-colors ${
                            isBlue
                              ? 'text-[#1d4ed8] group-hover:text-blue-800'
                              : 'text-[#ed5001] group-hover:text-[#c84300]'
                          }`}
                        >
                          <span>Explore Area</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Row: 3 Regional Corridors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {regionalCorridors.map((area, idx) => {
                const isHovered = hoveredSlug === area.slug;
                const theme = regionalThemes[idx % regionalThemes.length];

                return (
                  <motion.div
                    key={area.slug}
                    variants={cardVariants}
                    whileHover={{ y: -5, transition: { duration: 0.25, ease: 'easeOut' } }}
                    whileTap={{ scale: 0.985 }}
                    className="h-full"
                  >
                    <Link
                      to={`/service-areas/${area.slug}`}
                      onMouseEnter={() => setHoveredSlug(area.slug)}
                      onMouseLeave={() => setHoveredSlug(null)}
                      className={`group relative bg-white rounded-2xl p-4 sm:p-4.5 border transition-all duration-300 flex flex-col justify-between h-full overflow-hidden shadow-md shadow-slate-900/5 hover:shadow-xl ${
                        isHovered ? theme.borderActive : `border-slate-300/80 ${theme.borderHover}`
                      } ${theme.shadowHover}`}
                    >
                      {/* Top active indicator line on hover */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-1 ${theme.indicator} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      />

                      <div className="space-y-2.5">
                        {/* Title & Sun Badge */}
                        <div className="flex items-center justify-between gap-1.5">
                          <div className="flex items-center gap-2 min-w-0">
                            <div
                              className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 transition-colors duration-300 ${theme.iconBg} border-slate-200/70`}
                            >
                              <MapPin className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" />
                            </div>
                            <h4
                              className={`font-bold text-slate-900 ${theme.titleHover} transition-colors text-sm sm:text-[15px] truncate`}
                            >
                              {area.name}
                            </h4>
                          </div>
                          <span
                            className={`text-[11px] font-bold ${theme.badge} px-2 py-0.5 rounded-full border shrink-0 inline-flex items-center gap-1 transition-all duration-300`}
                          >
                            <Sun
                              className={`w-3 h-3 ${theme.sunIcon} transition-transform duration-700 ease-out group-hover:rotate-180 group-hover:scale-110`}
                            />
                            <span>{area.solarHoursPerDay}h</span>
                          </span>
                        </div>

                        {/* Suburbs line */}
                        <div className="text-[11px] text-slate-500 truncate">
                          <span className="font-semibold text-slate-700">Suburbs: </span>
                          <span>{area.suburbsServed.slice(0, 3).join(', ')}...</span>
                        </div>
                      </div>

                      {/* Bottom Strip */}
                      <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span className="font-bold text-[#265e11] bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/50 truncate">
                          {area.averageAnnualSolarSavings.split(' - ')[0]}/yr
                        </span>
                        <span className={`font-bold inline-flex items-center gap-1 ${theme.action} transition-colors`}>
                          <span>Explore</span>
                          <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServiceAreasTeaserSection;
