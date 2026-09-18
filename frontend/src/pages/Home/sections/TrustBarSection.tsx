import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShieldCheck, Zap, Award, ChevronUp, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const stats = [
  {
    icon: Zap,
    target: 4500,
    suffix: '+',
    decimals: 0,
    label: 'Homes & Sites Powered',
    description: 'Queensland residential and commercial installations completed with zero subcontractors.',
    accentColor: '#ed5001',
    iconBg: 'bg-orange-500/10',
    linkTo: '/projects',
    linkText: 'Explore Project Portfolio',
  },
  {
    icon: Award,
    target: 15,
    suffix: '+',
    unit: 'Years',
    decimals: 0,
    label: 'Master Electrician Owned',
    description: 'Owner-operated by Trent Palmer, a licensed master electrician — not a sales company.',
    accentColor: '#265e11',
    iconBg: 'bg-emerald-500/10',
    linkTo: '/about/trent',
    linkText: 'Meet Trent Palmer',
  },
  {
    icon: ShieldCheck,
    target: 25,
    suffix: '',
    unit: 'Year',
    decimals: 0,
    label: 'Performance Guarantee',
    description: 'Industry-leading workmanship and performance warranty for total peace of mind.',
    accentColor: '#2563eb',
    iconBg: 'bg-blue-500/10',
    linkTo: '/solar/systems',
    linkText: 'View Guaranteed Systems',
  },
  {
    icon: Star,
    target: 4.9,
    suffix: '★',
    decimals: 1,
    label: 'Google Customer Rating',
    description: 'Hundreds of verified 5-star reviews from homeowners across South East Queensland.',
    accentColor: '#f59e0b',
    iconBg: 'bg-amber-500/10',
    linkTo: '/reviews',
    linkText: 'Read Verified Reviews',
  },
];

/* ── Animated number counter ── */
const AnimatedNumber: React.FC<{
  target: number;
  decimals: number;
  duration?: number;
}> = ({ target, decimals, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            setCount(ease * target);
            if (p < 1) requestAnimationFrame(tick);
            else setCount(target);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
    </span>
  );
};

export const TrustBarSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'up' | 'down'>('down');
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((idx: number, dir: 'up' | 'down') => {
    setDirection(dir);
    setActiveIndex(idx);
  }, []);

  /* Auto-cycle every 4 s */
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setDirection('down');
      setActiveIndex((prev) => (prev + 1) % stats.length);
    }, 4000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection('down');
      setActiveIndex((prev) => (prev + 1) % stats.length);
    }, 4000);
  }, []);

  const handlePrev = () => {
    goTo((activeIndex - 1 + stats.length) % stats.length, 'up');
    resetTimer();
  };
  const handleNext = () => {
    goTo((activeIndex + 1) % stats.length, 'down');
    resetTimer();
  };

  const active = stats[activeIndex];
  const Icon = active.icon;

  const slideVariants = {
    enter: (dir: 'up' | 'down') => ({
      y: dir === 'down' ? 80 : -80,
      opacity: 0,
      scale: 0.95,
    }),
    center: { y: 0, opacity: 1, scale: 1 },
    exit: (dir: 'up' | 'down') => ({
      y: dir === 'down' ? -80 : 80,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section className="bg-white py-10 lg:py-14 relative overflow-hidden">
      {/* Ambient blurs */}
      <div className="absolute -top-40 -left-40 w-125 h-125 rounded-full blur-[120px] pointer-events-none" style={{ background: `${active.accentColor}10` }} />
      <div className="absolute -bottom-40 -right-40 w-125 h-125 bg-slate-200/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Sliding Stat Showcase ── */}
          <div className="order-2 lg:order-1">
            {/* Navigation + Active Stat */}
            <div className="flex items-start gap-8">


              {/* Animated content area */}
              <div className="flex-1 min-h-70 sm:min-h-65 flex flex-col justify-center relative overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col  gap-5"
                  >
                    {/* Icon badge */}
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-500"
                      style={{ backgroundColor: `${active.accentColor}12` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: active.accentColor }} />
                    </div>

                    {/* Big number */}
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl sm:text-7xl lg:text-8xl font-extrabold font-serif tracking-tight text-slate-900 leading-none">
                        <AnimatedNumber
                          target={active.target}
                          decimals={active.decimals}
                          duration={1800}
                        />
                      </span>
                      <span className="text-3xl sm:text-4xl font-bold font-serif tracking-tight" style={{ color: active.accentColor }}>
                        {active.suffix}
                      </span>
                      {active.unit && (
                        <span className="text-2xl sm:text-3xl font-semibold text-slate-400 ml-1">
                          {active.unit}
                        </span>
                      )}
                    </div>

                    {/* Label */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif leading-snug">
                      {active.label}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-slate-500 leading-relaxed max-w-md">
                      {active.description}
                    </p>

                    {/* Contextual Link */}
                    <div className="pt-1">
                      <Link
                        to={active.linkTo}
                        className="inline-flex items-center gap-1.5 text-sm font-bold transition-all hover:underline group/statlink"
                        style={{ color: active.accentColor }}
                      >
                        <span>{active.linkText}</span>
                        <ArrowRight className="w-4 h-4 group-hover/statlink:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    {/* Animated accent bar */}
                    <motion.div
                      className="h-1 rounded-full mt-1"
                      style={{ backgroundColor: active.accentColor }}
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 3.8, ease: 'linear' }}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Mobile nav arrows */}
                <div className="flex sm:hidden gap-3 mt-6">
                  <button
                    onClick={handlePrev}
                    className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
                    aria-label="Previous stat"
                  >
                    <ChevronUp className="w-5 h-5 text-slate-500" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
                    aria-label="Next stat"
                  >
                    <ChevronDown className="w-5 h-5 text-slate-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Fixed Summary Card ── */}
          <div className="order-1 lg:order-2">
            <div className="bg-slate-950 rounded-lg p-4 sm:p-10 lg:p-6 relative overflow-hidden shadow-2xl">
              {/* Decorative glow */}
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-[80px] pointer-events-none" style={{ background: `${active.accentColor}25` }} />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full blur-[80px] pointer-events-none" />

              {/* Header */}
              <div className="relative z-10">
          

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight leading-[1.1] mb-5">
                  Real Numbers.<br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-[#ed5001] to-[#f4a304]">
                    Proven Impact.
                  </span>
                </h2>

               

                {/* Mini stat pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2.5 sm:gap-3">
                  {stats.map((stat, idx) => {
                    const StatIcon = stat.icon;
                    const isActive = idx === activeIndex;
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          goTo(idx, idx > activeIndex ? 'down' : 'up');
                          resetTimer();
                        }}
                        className="group relative text-left rounded-xl p-3 sm:p-4 transition-all duration-300 overflow-hidden cursor-pointer"
                        style={{
                          backgroundColor: isActive ? `${stat.accentColor}15` : 'rgba(255,255,255,0.03)',
                          borderWidth: '1px',
                          borderColor: isActive ? `${stat.accentColor}40` : 'rgba(255,255,255,0.06)',
                        }}
                      >
                        <div className="relative z-10 flex items-center gap-3">
                          <StatIcon
                            className="w-5 h-5 shrink-0 transition-colors duration-300"
                            style={{ color: isActive ? stat.accentColor : '#94a3b8' }}
                          />
                          <div>
                            <div className="text-lg font-extrabold text-white tabular-nums font-serif">
                              {stat.target.toLocaleString(undefined, {
                                minimumFractionDigits: stat.decimals,
                                maximumFractionDigits: stat.decimals,
                              })}
                              {stat.suffix}
                            </div>
                            <div className="text-xs font-medium text-slate-400 leading-tight mt-0.5">
                              {stat.label}
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Interactive Link to Calculator */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400">See your home's numbers:</span>
                  <Link
                    to="/calculators/solar-savings"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 hover:underline transition-colors"
                  >
                    <span>Run Savings Calculator</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustBarSection;
