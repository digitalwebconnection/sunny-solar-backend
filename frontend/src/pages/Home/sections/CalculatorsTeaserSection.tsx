import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DollarSign,
  Layers,
  BatteryCharging,
  Clock,
  ArrowRight,
  Calculator,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

interface CalculatorItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  description: string;
  badge: string;
  highlight: string;
  features: string[];
  timeEstimate: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
}

const calculators: CalculatorItem[] = [
  {
    id: 'solar-savings',
    slug: 'solar-savings',
    number: '01',
    title: 'Solar Savings Calculator',
    description:
      'Calculate your quarterly and 10-year electricity bill reductions based on current utility spend.',
    badge: 'Most Popular',
    highlight: '~78% Bill Reduction',
    features: ['Quarterly savings breakdown', '10-year projection model', 'Feed-in tariff analysis'],
    timeEstimate: '60 seconds',
    icon: DollarSign,
    accentColor: '#ed5001',
  },
  {
    id: 'system-size',
    slug: 'system-size',
    number: '02',
    title: 'System Size Calculator',
    description:
      'Determine the ideal solar array capacity (6.6kW to 15kW+) tailored for your roof geometry, pool, and EV.',
    badge: 'Smart Sizing',
    highlight: 'Tailored kW Fit',
    features: ['Roof geometry analysis', 'EV & pool load matching', 'Panel layout optimization'],
    timeEstimate: '90 seconds',
    icon: Layers,
    accentColor: '#1d4ed8',
  },
  {
    id: 'battery-savings',
    slug: 'battery-savings',
    number: '03',
    title: 'Battery Savings & Backup',
    description:
      'Model nighttime peak-tariff avoidance and whole-home storm blackout protection with Tesla or Sungrow.',
    badge: 'High Value',
    highlight: 'Peak Tariff Defense',
    features: ['Peak-tariff avoidance model', 'Blackout protection sizing', 'Tesla & Sungrow comparison'],
    timeEstimate: '90 seconds',
    icon: BatteryCharging,
    accentColor: '#265e11',
  },
  {
    id: 'payback',
    slug: 'payback',
    number: '04',
    title: 'Payback & Break-Even ROI',
    description:
      'Determine your exact break-even timeline, internal rate of return, and government STC rebate values.',
    badge: 'Financial Model',
    highlight: '3.2 – 4.5 Year Payback',
    features: ['Break-even timeline', 'Internal rate of return', 'STC rebate calculator'],
    timeEstimate: '2 minutes',
    icon: Clock,
    accentColor: '#0284c7',
  },
];

export const CalculatorsTeaserSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const active = calculators[activeIndex];
  const Icon = active.icon;

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % calculators.length);
    }, 5000);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const handleSelect = (idx: number) => {
    setActiveIndex(idx);
    resetTimer();
  };

  return (
    <section className="py-16 lg:py-14 bg-white relative overflow-hidden border-t border-slate-200/70">
      {/* Subtle ambient light accents */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#265e11]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-[#ed5001]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#1d4ed8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#1d4ed8] bg-blue-50/90 border border-blue-200/70 shadow-2xs mb-4">
            <Calculator className="w-3.5 h-3.5 text-[#1d4ed8]" />
            <span>Interactive Solar &amp; Battery Calculators</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18181b] tracking-tight font-serif leading-[1.15]">
            Know Your Numbers Before <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ed5001] via-[#f06e02] to-[#f4a304]">
              Speaking to Anyone
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-900 leading-relaxed max-w-4xl mx-auto">
            Select a specialized calculation engine below to see your potential quarterly savings, ideal system size, and battery payback in under 60 seconds—without high-pressure sales calls.
          </p>
        </div>

        {/* ── Tab Selector ── */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {calculators.map((calc, idx) => {
            const TabIcon = calc.icon;
            const isActive = idx === activeIndex;
            return (
              <button
                key={calc.id}
                onClick={() => handleSelect(idx)}
                className="relative flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer overflow-hidden border"
                style={{
                  backgroundColor: isActive ? `${calc.accentColor}0d` : 'transparent',
                  borderColor: isActive ? `${calc.accentColor}40` : '#e2e8f0',
                  color: isActive ? calc.accentColor : '#64748b',
                }}
              >
                <TabIcon className="w-4 h-4" />
                <span className="hidden sm:inline">{calc.title}</span>
                <span className="sm:hidden">{calc.number}</span>

                {/* Active indicator bar */}
                {isActive && (
                  <motion.div
                    layoutId="calculator-tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full"
                    style={{ backgroundColor: calc.accentColor }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* ── Showcase Area ── */}
        <div className="relative rounded-xl border border-slate-300/80 overflow-hidden bg-slate-50/50 min-h-100 sm:min-h-90">
          {/* Decorative ambient glow */}
          <div
            className="absolute -top-32 -right-32 w-80 h-80 rounded-full blur-[100px] pointer-events-none transition-colors duration-700"
            style={{ backgroundColor: `${active.accentColor}12` }}
          />
          <div
            className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full blur-[100px] pointer-events-none transition-colors duration-700"
            style={{ backgroundColor: `${active.accentColor}08` }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 p-8 sm:p-10 lg:p-6 items-center"
            >
              {/* Left: Content */}
              <div className="flex flex-col gap-6">
                {/* Number + Badge */}
                <div className="flex items-center gap-4">
                  <span
                    className="text-7xl sm:text-8xl font-extrabold font-serif leading-none select-none opacity-15"
                    style={{ color: active.accentColor }}
                  >
                    {active.number}
                  </span>
                  <div className="flex flex-col gap-2">
                    <span
                      className="inline-flex self-start items-center px-3 py-1 rounded-full text-xs font-bold border"
                      style={{
                        backgroundColor: `${active.accentColor}0d`,
                        color: active.accentColor,
                        borderColor: `${active.accentColor}30`,
                      }}
                    >
                      {active.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">⏱️ {active.timeEstimate}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif leading-snug tracking-tight">
                  {active.title}
                </h3>

                {/* Description */}
                <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
                  {active.description}
                </p>

                {/* CTA */}
                <Link
                  to={`/calculators/${active.slug}`}
                  className="inline-flex self-start items-center gap-2.5 px-7 py-3.5 rounded-xl text-white font-bold text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 mt-2"
                  style={{
                    background: `linear-gradient(135deg, ${active.accentColor}, ${active.accentColor}cc)`,
                    boxShadow: `0 8px 24px ${active.accentColor}25`,
                  }}
                >
                  <Calculator className="w-5 h-5" />
                  <span>Launch Calculator</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Right: Feature highlights + key stat */}
              <div className="flex flex-col gap-6">
                {/* Highlight stat card */}
                <div
                  className="rounded-2xl p-6 sm:p-8 border relative overflow-hidden"
                  style={{
                    backgroundColor: `${active.accentColor}08`,
                    borderColor: `${active.accentColor}20`,
                  }}
                >
                  <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl pointer-events-none" style={{ backgroundColor: `${active.accentColor}15` }} />
                  <div className="relative z-10">
                    <div className="text-sm font-semibold text-slate-500 mb-2">Key Outcome</div>
                    <div
                      className="text-3xl sm:text-4xl font-extrabold font-serif tracking-tight"
                      style={{ color: active.accentColor }}
                    >
                      {active.highlight}
                    </div>
                  </div>
                </div>

                {/* Feature list */}
                <div className="space-y-4">
                  <div className="text-sm font-bold text-slate-800 uppercase tracking-wider">What you'll discover</div>
                  {active.features.map((feature, i) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.1, duration: 0.4, ease: 'easeOut' }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2
                        className="w-5 h-5 shrink-0"
                        style={{ color: active.accentColor }}
                      />
                      <span className="text-base text-slate-600 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative icon */}
                <div className="hidden lg:flex justify-end mt-2">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center opacity-10"
                    style={{ backgroundColor: active.accentColor }}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress bar along bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-200/50">
            <motion.div
              key={activeIndex}
              className="h-full rounded-full"
              style={{ backgroundColor: active.accentColor }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 5, ease: 'linear' }}
            />
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-10 sm:mt-12 text-center">
          <Link
            to="/calculators"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-[#ed5001] via-[#f06e02] to-[#f4a304] hover:from-[#c84300] hover:to-[#ed5001] text-white font-bold text-sm shadow-md shadow-[#ed5001]/20 hover:shadow-[#ed5001]/35 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Explore All 8 Specialized Calculators</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CalculatorsTeaserSection;
