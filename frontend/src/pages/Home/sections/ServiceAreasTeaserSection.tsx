import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import {
  Sun,
  BatteryCharging,
  Activity,
  TrendingUp,
  Calculator,
  ArrowRight,
} from 'lucide-react';
import { Button } from '../../../components/ui/Button';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

interface SolutionCard {
  id: string;
  badge: string;
  title: string;
  description: string;
  cta: string;
  link: string;
  icon: React.ComponentType<{ className?: string }>;
  theme: {
    borderActive: string;
    borderHover: string;
    shadowHover: string;
    indicator: string;
    iconBg: string;
    iconText: string;
    badgeStyle: string;
    titleHover: string;
    actionText: string;
  };
}

const flagshipSolutions: SolutionCard[] = [
  {
    id: '01',
    badge: 'SOLAR',
    title: 'Residential Solar',
    description: 'Solar systems designed around your home, energy use and electricity needs.',
    cta: 'Explore Solar',
    link: '/solar',
    icon: Sun,
    theme: {
      borderActive: 'border-[#ed5001] ring-2 ring-[#ed5001]/20',
      borderHover: 'hover:border-[#ed5001]/60',
      shadowHover: 'hover:shadow-orange-500/15',
      indicator: 'bg-linear-to-r from-[#ed5001] via-[#f06e02] to-[#f4a304]',
      iconBg: 'bg-orange-50 text-[#ed5001] group-hover:bg-[#ed5001] group-hover:text-white',
      iconText: 'text-[#ed5001]',
      badgeStyle: 'text-[#ed5001] bg-orange-50/90 group-hover:bg-orange-100/90 border-orange-200/80',
      titleHover: 'group-hover:text-[#ed5001]',
      actionText: 'text-[#ed5001] group-hover:text-[#c84300]',
    },
  },
  {
    id: '02',
    badge: 'BATTERIES',
    title: 'Home Battery Storage',
    description: 'Store more of your solar and make better use of the energy you generate.',
    cta: 'Explore Batteries',
    link: '/batteries',
    icon: BatteryCharging,
    theme: {
      borderActive: 'border-[#1d4ed8] ring-2 ring-[#1d4ed8]/20',
      borderHover: 'hover:border-[#1d4ed8]/60',
      shadowHover: 'hover:shadow-blue-500/15',
      indicator: 'bg-linear-to-r from-[#1d4ed8] via-[#2563eb] to-[#0284c7]',
      iconBg: 'bg-blue-50 text-[#1d4ed8] group-hover:bg-[#1d4ed8] group-hover:text-white',
      iconText: 'text-[#1d4ed8]',
      badgeStyle: 'text-[#1d4ed8] bg-blue-50/90 group-hover:bg-blue-100/90 border-blue-200/80',
      titleHover: 'group-hover:text-[#1d4ed8]',
      actionText: 'text-[#1d4ed8] group-hover:text-blue-800',
    },
  },
];

const secondarySolutions: SolutionCard[] = [
  {
    id: '03',
    badge: 'EXISTING SOLAR',
    title: 'Solar Health Check',
    description: 'Find out how your existing system is performing and what you could do next.',
    cta: 'Check Your Solar',
    link: '/existing-solar/health-check',
    icon: Activity,
    theme: {
      borderActive: 'border-[#265e11] ring-2 ring-[#265e11]/20',
      borderHover: 'hover:border-[#265e11]/60',
      shadowHover: 'hover:shadow-emerald-500/15',
      indicator: 'bg-linear-to-r from-[#265e11] via-emerald-500 to-teal-400',
      iconBg: 'bg-emerald-50 text-[#265e11] group-hover:bg-[#265e11] group-hover:text-white',
      iconText: 'text-[#265e11]',
      badgeStyle: 'text-[#265e11] bg-emerald-50/90 group-hover:bg-emerald-100/90 border-emerald-200/80',
      titleHover: 'group-hover:text-[#265e11]',
      actionText: 'text-[#265e11] group-hover:text-emerald-800',
    },
  },
  {
    id: '04',
    badge: 'UPGRADES',
    title: 'Get More From Your Solar',
    description: 'Explore system expansion, battery additions and other upgrade options.',
    cta: 'Explore Upgrades',
    link: '/existing-solar/upgrade',
    icon: TrendingUp,
    theme: {
      borderActive: 'border-amber-500 ring-2 ring-amber-500/20',
      borderHover: 'hover:border-amber-400/60',
      shadowHover: 'hover:shadow-amber-500/15',
      indicator: 'bg-linear-to-r from-amber-500 via-amber-400 to-yellow-300',
      iconBg: 'bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white',
      iconText: 'text-amber-600',
      badgeStyle: 'text-amber-700 bg-amber-50/90 group-hover:bg-amber-100/90 border-amber-200/80',
      titleHover: 'group-hover:text-amber-600',
      actionText: 'text-amber-700 group-hover:text-amber-900',
    },
  },
  {
    id: '05',
    badge: 'SOLAR TOOLS',
    title: 'Know Your Numbers',
    description: 'Calculate your potential savings, system size, battery needs and payback.',
    cta: 'Explore Solar Tools',
    link: '/calculators',
    icon: Calculator,
    theme: {
      borderActive: 'border-indigo-500 ring-2 ring-indigo-500/20',
      borderHover: 'hover:border-indigo-400/60',
      shadowHover: 'hover:shadow-indigo-500/15',
      indicator: 'bg-linear-to-r from-indigo-500 via-blue-500 to-sky-400',
      iconBg: 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white',
      iconText: 'text-indigo-600',
      badgeStyle: 'text-indigo-700 bg-indigo-50/90 group-hover:bg-indigo-100/90 border-indigo-200/80',
      titleHover: 'group-hover:text-indigo-600',
      actionText: 'text-indigo-700 group-hover:text-indigo-900',
    },
  },
];

export const ServiceAreasTeaserSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-12 lg:py-16 bg-linear-to-b from-white via-slate-50/70 to-white relative overflow-hidden border-t border-slate-200/70">
      {/* Background Subtle Dot-Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#18181b 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Floating Ambient Brand Glow Orbs */}
      <div className="absolute top-1/4 -left-28 w-96 h-96 bg-[#265e11]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 -right-28 w-96 h-96 bg-[#ed5001]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Column: Section Heading & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#1d4ed8] bg-blue-50 border border-blue-200/90 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#1d4ed8] animate-pulse" />
              <span>SOLAR FOR AUSTRALIAN HOMES</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18181b] tracking-tight font-serif leading-[1.15]">
              Solar Solutions Built for <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#ed5001] via-[#f06e02] to-[#f4a304] inline-block">
                Australian Homes.
              </span>
            </h2>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              From solar and batteries to existing-system assessments and upgrades, Sunny Solar helps Australian homeowners make the most of their energy.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <Button
                to="/solar"
                variant="primary"
                size="md"
                className="w-full sm:w-auto group relative overflow-hidden rounded-xl shadow-lg shadow-[#ed5001]/25 bg-linear-to-r from-[#ed5001] via-[#f06e02] to-[#f4a304] hover:from-[#c84300] hover:to-[#ed5001] text-white border-0 font-bold px-7 py-3.5 transition-all duration-300 hover:shadow-[#ed5001]/40 hover:-translate-y-0.5 justify-center"
                icon={
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                }
              >
                <span>Explore Our Solutions</span>
              </Button>
            </div>
          </motion.div>

          {/* Right Column: 5 Solution Cards (2 Top, 3 Bottom) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-7 space-y-4"
          >
            {/* Top Row: 2 Major Cards (Card 01 & Card 02) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {flagshipSolutions.map((card) => {
                const isHovered = hoveredId === card.id;
                const IconComponent = card.icon;

                return (
                  <motion.div
                    key={card.id}
                    variants={cardVariants}
                    whileHover={{ y: -5, transition: { duration: 0.25, ease: 'easeOut' } }}
                    whileTap={{ scale: 0.985 }}
                    className="h-full"
                  >
                    <Link
                      to={card.link}
                      onMouseEnter={() => setHoveredId(card.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      className={`group relative bg-white rounded-2xl p-5 sm:p-6 border transition-all duration-300 flex flex-col justify-between h-full overflow-hidden shadow-md shadow-slate-900/5 hover:shadow-xl ${
                        isHovered
                          ? `${card.theme.borderActive} ${card.theme.shadowHover}`
                          : `border-slate-300/80 ${card.theme.borderHover} ${card.theme.shadowHover}`
                      }`}
                    >
                      {/* Top active indicator line on hover */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-1.25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${card.theme.indicator}`}
                      />

                      <div className="space-y-3.5">
                        {/* Header Row: Badge & Icon */}
                        <div className="flex items-center justify-between gap-3">
                          <span
                            className={`text-xs font-extrabold tracking-wider px-2.5 py-1 rounded-full border shrink-0 transition-colors duration-300 shadow-2xs ${card.theme.badgeStyle}`}
                          >
                            {card.badge}
                          </span>
                          <div
                            className={`w-10 h-10 rounded-xl border border-slate-200/70 flex items-center justify-center shrink-0 transition-all duration-300 shadow-xs ${card.theme.iconBg}`}
                          >
                            <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                          </div>
                        </div>

                        {/* Title & Description */}
                        <div>
                          <h3
                            className={`font-bold text-slate-900 font-serif text-lg sm:text-xl transition-colors leading-snug ${card.theme.titleHover}`}
                          >
                            {card.title}
                          </h3>
                          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {card.description}
                          </p>
                        </div>
                      </div>

                      {/* Bottom Action CTA Strip */}
                      <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm">
                        <span
                          className={`font-bold inline-flex items-center gap-1.5 transition-colors ${card.theme.actionText}`}
                        >
                          <span>{card.cta}</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Row: 3 Cards (Card 03, Card 04, Card 05) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {secondarySolutions.map((card) => {
                const isHovered = hoveredId === card.id;
                const IconComponent = card.icon;

                return (
                  <motion.div
                    key={card.id}
                    variants={cardVariants}
                    whileHover={{ y: -5, transition: { duration: 0.25, ease: 'easeOut' } }}
                    whileTap={{ scale: 0.985 }}
                    className="h-full"
                  >
                    <Link
                      to={card.link}
                      onMouseEnter={() => setHoveredId(card.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      className={`group relative bg-white rounded-2xl p-4 sm:p-5 border transition-all duration-300 flex flex-col justify-between h-full overflow-hidden shadow-md shadow-slate-900/5 hover:shadow-xl ${
                        isHovered
                          ? `${card.theme.borderActive} ${card.theme.shadowHover}`
                          : `border-slate-300/80 ${card.theme.borderHover} ${card.theme.shadowHover}`
                      }`}
                    >
                      {/* Top active indicator line on hover */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-1.25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${card.theme.indicator}`}
                      />

                      <div className="space-y-3">
                        {/* Header Row: Badge & Icon */}
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={`text-[11px] font-extrabold tracking-wider px-2 py-0.5 rounded-full border shrink-0 transition-colors duration-300 ${card.theme.badgeStyle}`}
                          >
                            {card.badge}
                          </span>
                          <div
                            className={`w-8 h-8 rounded-lg border border-slate-200/70 flex items-center justify-center shrink-0 transition-all duration-300 shadow-xs ${card.theme.iconBg}`}
                          >
                            <IconComponent className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                          </div>
                        </div>

                        {/* Title & Description */}
                        <div>
                          <h4
                            className={`font-bold text-slate-900 font-serif text-sm sm:text-base transition-colors leading-snug ${card.theme.titleHover}`}
                          >
                            {card.title}
                          </h4>
                          <p className="mt-1.5 text-xs text-slate-600 leading-relaxed line-clamp-3">
                            {card.description}
                          </p>
                        </div>
                      </div>

                      {/* Bottom Action CTA Strip */}
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span
                          className={`font-bold inline-flex items-center gap-1 transition-colors ${card.theme.actionText}`}
                        >
                          <span>{card.cta}</span>
                          <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1.5" />
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
