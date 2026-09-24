import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  Sun,
  BatteryCharging,
  Activity,
  TrendingUp,
  Calculator,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
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

const mobileSlideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring', stiffness: 350, damping: 30 },
      opacity: { duration: 0.22 },
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    transition: {
      x: { type: 'spring', stiffness: 350, damping: 30 },
      opacity: { duration: 0.18 },
    },
  }),
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
      borderActive: 'border-[#2B3CB8] ring-2 ring-[#2B3CB8]/20',
      borderHover: 'hover:border-[#2B3CB8]/60',
      shadowHover: 'hover:shadow-[#2B3CB8]/15',
      indicator: 'bg-[#2B3CB8]',
      iconBg: 'bg-[#F5F7FD] text-[#2B3CB8] group-hover:bg-[#2B3CB8] group-hover:text-white',
      iconText: 'text-[#2B3CB8]',
      badgeStyle: 'text-[#2B3CB8] bg-[#F5F7FD] group-hover:bg-[#E8EDFB] border-[#D1DCF8]',
      titleHover: 'group-hover:text-[#2B3CB8]',
      actionText: 'text-[#2B3CB8] group-hover:text-[#1D2984]',
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
      borderActive: 'border-[#2B3CB8] ring-2 ring-[#2B3CB8]/20',
      borderHover: 'hover:border-[#2B3CB8]/60',
      shadowHover: 'hover:shadow-[#2B3CB8]/15',
      indicator: 'bg-[#2B3CB8]',
      iconBg: 'bg-[#F5F7FD] text-[#2B3CB8] group-hover:bg-[#2B3CB8] group-hover:text-white',
      iconText: 'text-[#2B3CB8]',
      badgeStyle: 'text-[#2B3CB8] bg-[#F5F7FD] group-hover:bg-[#E8EDFB] border-[#D1DCF8]',
      titleHover: 'group-hover:text-[#2B3CB8]',
      actionText: 'text-[#2B3CB8] group-hover:text-[#1D2984]',
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
      borderActive: 'border-[#2B3CB8] ring-2 ring-[#2B3CB8]/20',
      borderHover: 'hover:border-[#2B3CB8]/60',
      shadowHover: 'hover:shadow-[#2B3CB8]/15',
      indicator: 'bg-[#2B3CB8]',
      iconBg: 'bg-[#F5F7FD] text-[#2B3CB8] group-hover:bg-[#2B3CB8] group-hover:text-white',
      iconText: 'text-[#2B3CB8]',
      badgeStyle: 'text-[#2B3CB8] bg-[#F5F7FD] group-hover:bg-[#E8EDFB] border-[#D1DCF8]',
      titleHover: 'group-hover:text-[#2B3CB8]',
      actionText: 'text-[#2B3CB8] group-hover:text-[#1D2984]',
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
      borderActive: 'border-[#2B3CB8] ring-2 ring-[#2B3CB8]/20',
      borderHover: 'hover:border-[#2B3CB8]/60',
      shadowHover: 'hover:shadow-[#2B3CB8]/15',
      indicator: 'bg-[#2B3CB8]',
      iconBg: 'bg-[#F5F7FD] text-[#2B3CB8] group-hover:bg-[#2B3CB8] group-hover:text-white',
      iconText: 'text-[#2B3CB8]',
      badgeStyle: 'text-[#2B3CB8] bg-[#F5F7FD] group-hover:bg-[#E8EDFB] border-[#D1DCF8]',
      titleHover: 'group-hover:text-[#2B3CB8]',
      actionText: 'text-[#2B3CB8] group-hover:text-[#1D2984]',
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
      borderActive: 'border-[#2B3CB8] ring-2 ring-[#2B3CB8]/20',
      borderHover: 'hover:border-[#2B3CB8]/60',
      shadowHover: 'hover:shadow-[#2B3CB8]/15',
      indicator: 'bg-[#2B3CB8]',
      iconBg: 'bg-[#F5F7FD] text-[#2B3CB8] group-hover:bg-[#2B3CB8] group-hover:text-white',
      iconText: 'text-[#2B3CB8]',
      badgeStyle: 'text-[#2B3CB8] bg-[#F5F7FD] group-hover:bg-[#E8EDFB] border-[#D1DCF8]',
      titleHover: 'group-hover:text-[#2B3CB8]',
      actionText: 'text-[#2B3CB8] group-hover:text-[#1D2984]',
    },
  },
];

const allSolutions: SolutionCard[] = [...flagshipSolutions, ...secondarySolutions];

export const ServiceAreasTeaserSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentMobileIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = allSolutions.length - 1;
      if (next >= allSolutions.length) next = 0;
      return next;
    });
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentMobileIndex ? 1 : -1);
    setCurrentMobileIndex(index);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentMobileIndex, isPaused]);

  const currentCard = allSolutions[currentMobileIndex];
  const CurrentIcon = currentCard.icon;

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-linear-to-b from-white via-slate-50/70 to-white relative overflow-hidden border-t border-slate-200/70">
      {/* Background Subtle Dot-Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#18181b 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Floating Ambient Brand Glow Orbs */}
      <div className="absolute top-1/4 -left-28 w-96 h-96 bg-[#2B3CB8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 -right-28 w-96 h-96 bg-[#2B3CB8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-[#2B3CB8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

          {/* Left Column: Section Heading & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-3.5 sm:space-y-4 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#2B3CB8] bg-[#F5F7FD] border border-[#D1DCF8] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#2B3CB8] animate-pulse" />
              <span>SOLAR FOR AUSTRALIAN HOMES</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18181b] tracking-tight font-serif leading-[1.18] sm:leading-[1.15]">
              Solar Solutions Built for{' '}
              <br className="hidden sm:inline" />
              <span className="text-[#2B3CB8] inline-block">
                Australian Homes.
              </span>
            </h2>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              From solar and batteries to existing-system assessments and upgrades, Sunny Solar helps Australian homeowners make the most of their energy.
            </p>

            {/* CTA Button */}
            <div className="pt-1 sm:pt-2 w-full flex justify-center lg:justify-start">
              <Button
                to="/solar"
                variant="primary"
                size="md"
                className="w-full xs:w-auto group relative overflow-hidden rounded-xl shadow-lg shadow-[#2B3CB8]/25 bg-[#2B3CB8] hover:bg-[#1D2984] text-white border-0 font-bold px-6 sm:px-7 py-3 sm:py-3.5 transition-all duration-300 hover:shadow-[#2B3CB8]/40 hover:-translate-y-0.5 justify-center min-h-[46px] sm:min-h-[48px]"
                icon={
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                }
              >
                <span>Explore Our Solutions</span>
              </Button>
            </div>
          </motion.div>

          {/* Right Column: 5 Solution Cards */}
          <div className="lg:col-span-7">
            {/* Mobile View: Swipeable Carousel (One by One) */}
            <div 
              className="block lg:hidden"
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setTimeout(() => setIsPaused(false), 4000)}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative overflow-hidden min-h-[250px] flex items-stretch">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentMobileIndex}
                    custom={direction}
                    variants={mobileSlideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, { offset, velocity }) => {
                      const swipe = Math.abs(offset.x) * velocity.x;
                      if (offset.x < -35 || swipe < -500) {
                        paginate(1);
                      } else if (offset.x > 35 || swipe > 500) {
                        paginate(-1);
                      }
                    }}
                    className="w-full h-full touch-pan-y"
                  >
                    <Link
                      to={currentCard.link}
                      className="group relative bg-white rounded-2xl p-5 border border-slate-300/80 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden shadow-md shadow-slate-900/5 active:scale-[0.99]"
                    >
                      {/* Top active indicator line */}
                      <div className={`absolute top-0 left-0 right-0 h-1.5 ${currentCard.theme.indicator}`} />

                      <div className="space-y-3.5">
                        {/* Header Row: Badge & Icon */}
                        <div className="flex items-center justify-between gap-3">
                          <span
                            className={`text-xs font-extrabold tracking-wider px-2.5 py-1 rounded-full border shrink-0 transition-colors duration-300 shadow-2xs ${currentCard.theme.badgeStyle}`}
                          >
                            {currentCard.badge}
                          </span>
                          <div
                            className={`w-10 h-10 rounded-xl border border-slate-200/70 flex items-center justify-center shrink-0 shadow-xs ${currentCard.theme.iconBg}`}
                          >
                            <CurrentIcon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                          </div>
                        </div>

                        {/* Title & Description */}
                        <div>
                          <h3
                            className="font-bold text-slate-900 font-serif text-lg transition-colors leading-snug"
                          >
                            {currentCard.title}
                          </h3>
                          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {currentCard.description}
                          </p>
                        </div>
                      </div>

                      {/* Bottom Action CTA Strip */}
                      <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm">
                        <span
                          className={`font-bold inline-flex items-center gap-1.5 transition-colors ${currentCard.theme.actionText}`}
                        >
                          <span>{currentCard.cta}</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                        </span>
                        <span className="text-[11px] font-semibold text-slate-400 font-mono">
                          0{currentMobileIndex + 1} / 0{allSolutions.length}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Mobile Carousel Navigation Controls */}
              <div className="flex items-center justify-between mt-3.5 px-1">
                {/* Prev Button */}
                <button
                  type="button"
                  onClick={() => paginate(-1)}
                  aria-label="Previous solution"
                  className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-700 active:bg-slate-100 active:scale-95 transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Progress Dots */}
                <div className="flex items-center gap-1.5">
                  {allSolutions.map((s, idx) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => goToSlide(idx)}
                      aria-label={`Go to ${s.title}`}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentMobileIndex
                          ? 'w-6 bg-[#2B3CB8]'
                          : 'w-2 bg-slate-300 hover:bg-slate-400'
                      }`}
                    />
                  ))}
                </div>

                {/* Next Button */}
                <button
                  type="button"
                  onClick={() => paginate(1)}
                  aria-label="Next solution"
                  className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-700 active:bg-slate-100 active:scale-95 transition-all cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Desktop View: Full Grid Layout */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="hidden lg:block space-y-4"
            >
              {/* Top Row: 2 Major Cards (Card 01 & Card 02) */}
              <div className="grid grid-cols-2 gap-4">
                {flagshipSolutions.map((card) => {
                  const isHovered = hoveredId === card.id;
                  const IconComponent = card.icon;

                  return (
                    <motion.div
                      key={card.id}
                      variants={cardVariants}
                      whileHover={{ y: -4, transition: { duration: 0.25, ease: 'easeOut' } }}
                      whileTap={{ scale: 0.985 }}
                      className="h-full"
                    >
                      <Link
                        to={card.link}
                        onMouseEnter={() => setHoveredId(card.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        className={`group relative bg-white rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between h-full overflow-hidden shadow-md shadow-slate-900/5 hover:shadow-xl active:scale-[0.99] ${
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
                              className={`font-bold text-slate-900 font-serif text-xl transition-colors leading-snug ${card.theme.titleHover}`}
                            >
                              {card.title}
                            </h3>
                            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                              {card.description}
                            </p>
                          </div>
                        </div>

                        {/* Bottom Action CTA Strip */}
                        <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-sm">
                          <span
                            className={`font-bold inline-flex items-center gap-1.5 transition-colors ${card.theme.actionText}`}
                          >
                            <span>{card.cta}</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Row: 3 Cards (Card 03, Card 04, Card 05) */}
              <div className="grid grid-cols-3 gap-4">
                {secondarySolutions.map((card) => {
                  const isHovered = hoveredId === card.id;
                  const IconComponent = card.icon;

                  return (
                    <motion.div
                      key={card.id}
                      variants={cardVariants}
                      whileHover={{ y: -4, transition: { duration: 0.25, ease: 'easeOut' } }}
                      whileTap={{ scale: 0.985 }}
                      className="h-full"
                    >
                      <Link
                        to={card.link}
                        onMouseEnter={() => setHoveredId(card.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        className={`group relative bg-white rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between h-full overflow-hidden shadow-md shadow-slate-900/5 hover:shadow-xl active:scale-[0.99] ${
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
                              className={`font-bold text-slate-900 font-serif text-base transition-colors leading-snug ${card.theme.titleHover}`}
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
                            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
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
      </div>
    </section>
  );
};

export default ServiceAreasTeaserSection;