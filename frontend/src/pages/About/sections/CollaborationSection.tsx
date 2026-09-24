import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import xsolaar from "../../../assets/xsolar.png";
import jinko from "../../../assets/jinkosolar.png";

interface PartnerBrand {
  name: string;
  logo: string;
  badge: string;
  category: string;
  details: string;
}

export const CollaborationSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const partners: PartnerBrand[] = [
    {
      name: 'SolaX Power',
      logo: xsolaar,
      badge: 'Tier-1 Hybrid Inverters',
      category: 'Hybrid Inverters & High-Voltage Storage',
      details: 'Up to 98.4% Efficiency • Sub-10ms Blackout Switchover',
    },
    {
      name: 'JinkoSolar',
      logo: jinko,
      badge: 'Tier-1 Solar PV Modules',
      category: "World's #1 N-Type TOPCon Solar PV Modules",
      details: '25-Year Product & 30-Year Linear Power Guarantee',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? partners.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === partners.length - 1 ? 0 : prev + 1));
  };

  // Auto-switch partner cards every 3.8s on mobile when not paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 3800);
    return () => clearInterval(timer);
  }, [isPaused, currentSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 35) {
      nextSlide();
    } else if (diff < -35) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
    setTimeout(() => setIsPaused(false), 4000);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-12 xs:py-14 sm:py-20 lg:py-20 bg-white overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Left Column — Custom Authoritative Data & Value Pillars */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#2B3CB8] bg-[#F5F7FD] border border-[#D1DCF8] shadow-2xs mb-3.5 sm:mb-4 w-fit">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2B3CB8]" />
              <span>Tier-1 Manufacturing Partnerships</span>
            </div>

            {/* Main Heading — Custom Sunny Solar data as requested */}
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-[1.2] sm:leading-[1.12] lg:leading-[1.05] text-center lg:text-left">
              Partnering with World-Class Manufacturers for{' '}
              <span className="bg-linear-to-r from-sky-600 via-sky-600 to-green-800 bg-clip-text text-transparent">
                Uncompromising Solar Performance
              </span>
            </h2>

            {/* Narrative Copy */}
            <p className="mt-3.5 sm:mt-5 text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed font-normal text-center lg:text-left max-w-2xl lg:max-w-none">
              We reject cheap clearance hardware. Sunny Solar collaborates directly with global Tier-1 pioneers like{' '}
              <strong className="text-slate-900 font-semibold">SolaX Power</strong> and{' '}
              <strong className="text-slate-900 font-semibold">JinkoSolar</strong> to deliver high-yield N-Type TOPCon
              modules and intelligent hybrid inverters engineered to withstand Queensland’s brutal 42°C summer heat,
              cyclonic winds, and coastal salt mist.
            </p>

            {/* CTAs */}
            <div className="mt-6 sm:mt-8 flex flex-col xs:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full xs:w-auto">
              <Button
                to="/solar/systems"
                variant="primary"
                size="md"
                className="w-full xs:w-auto text-center"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Tier-1 Systems
              </Button>
              <Button
                to="/resources/buying-checklist"
                variant="outline"
                size="md"
                className="w-full xs:w-auto text-center"
              >
                View Quality Checklist
              </Button>
            </div>
          </motion.div>

          {/* Right Column — SolaX & Jinko Showcase */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Mobile View: One-by-One Sliding Carousel with Auto-Rotate */}
            <div className="block lg:hidden">
              <div
                className="relative overflow-hidden "
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* Ambient backdrop glow */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-36 h-36 bg-amber-200/25 rounded-full blur-3xl pointer-events-none" />

                {/* Sliding single-card carousel */}
                <div className="relative z-10 overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {partners.map((partner, idx) => (
                      <div key={idx} className="w-full shrink-0 px-0.5">
                        <div className="group flex flex-col items-center text-center p-5 rounded-xl bg-white/95 border border-sky-100/80 shadow-xs">
                          {/* Mini partner badge */}
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-[#2B3CB8] bg-[#F5F7FD] border border-[#D1DCF8] mb-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2B3CB8]" />
                            <span>{partner.badge}</span>
                          </div>

                          {/* Brand Logo */}
                          <div className="h-16 flex items-center justify-center w-full px-2">
                            <img
                              src={partner.logo}
                              alt={partner.name}
                              className="max-h-14 max-w-[210px] w-auto h-auto object-contain"
                            />
                          </div>

                          {/* Specs / Meta */}
                          <div className="mt-3.5 pt-3.5 border-t border-sky-100/80 w-full flex flex-col items-center">
                            <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                              {partner.category}
                            </span>
                            <span className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                              {partner.details}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Controls: Previous, Indicators, Next */}
                <div className="relative z-10 flex items-center justify-between mt-3.5 pt-1 px-1">
                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Previous partner"
                    className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center shadow-2xs active:scale-95 transition-all cursor-pointer hover:bg-slate-50"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {/* Active Dots */}
                  <div className="flex items-center gap-1.5">
                    {partners.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setCurrentSlide(idx)}
                        aria-label={`Partner ${idx + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                          currentSlide === idx
                            ? 'w-6 bg-[#2B3CB8]'
                            : 'w-2 bg-slate-300 hover:bg-slate-400'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next partner"
                    className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center shadow-2xs active:scale-95 transition-all cursor-pointer hover:bg-slate-50"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop View: Stacked Brand Showcase */}
            <div className="hidden lg:block">
              <div className="relative overflow-hidden rounded-2xl bg-sky-50/50 p-6 border border-sky-100/70">
                {/* Subtle ambient light gradient */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-sky-200/25 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 flex flex-col gap-4">
                  {partners.map((partner, idx) => (
                    <React.Fragment key={idx}>
                      <div className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white/95 border border-sky-100/80 shadow-xs hover:shadow-md transition-all duration-300">
                        <div className="h-20 flex items-center justify-center w-full px-2">
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="max-h-16 max-w-[240px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>

                        <div className="mt-4 pt-4 border-t border-sky-100/80 w-full flex flex-col items-center">
                          <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                            {partner.category}
                          </span>
                          <span className="text-xs text-slate-500 mt-1 leading-relaxed">
                            {partner.details}
                          </span>
                        </div>
                      </div>

                      {idx < partners.length - 1 && (
                        <div className="w-full h-px bg-linear-to-r from-transparent via-[#D1DCF8] to-transparent" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Precise Vector Logo for SolaX Power
const SolaxLogo: React.FC = () => {
  return (
    <svg
      viewBox="0 0 340 75"
      className="h-12 sm:h-14 w-auto max-w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* SolaX Geometric 'X' Icon */}
      <g fill="#2B3CB8">
        {/* Top-Left to Center Arm */}
        <path d="M12 8 L32 37.5 L46 37.5 L26 8 Z" />
        {/* Top-Right to Center Arm */}
        <path d="M68 8 L48 37.5 L34 37.5 L54 8 Z" />
        {/* Bottom-Left to Center Arm */}
        <path d="M12 67 L32 37.5 L46 37.5 L26 67 Z" />
        {/* Bottom-Right to Center Arm */}
        <path d="M68 67 L48 37.5 L34 37.5 L54 67 Z" />
      </g>

      {/* SOLAX Text */}
      <text
        x="88"
        y="45"
        fill="#2B3CB8"
        fontFamily="'Plus Jakarta Sans', 'Outfit', sans-serif"
        fontWeight="900"
        fontSize="38"
        letterSpacing="2.5"
      >
        SOLAX
      </text>

      {/* POWER Subtext */}
      <text
        x="180"
        y="64"
        fill="#2B3CB8"
        fontFamily="'Plus Jakarta Sans', sans-serif"
        fontWeight="800"
        fontSize="13"
        letterSpacing="4.2"
      >
        POWER
      </text>
    </svg>
  );
};

// Precise Vector Logo for Jinko Solar
const JinkoLogo: React.FC = () => {
  return (
    <svg
      viewBox="0 0 280 80"
      className="h-12 sm:h-15 w-auto max-w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stylized JinkO Wordmark */}
      <g fill="#2B3CB8">
        {/* Dot on J */}
        <circle cx="26" cy="38" r="7" />
        {/* J stem & curve */}
        <path
          d="M36 12 L50 12 L50 50 C50 64 39 72 23 72 C12 72 4 66 2 58 L16 54 C17 58 20 61 25 61 C32 61 36 57 36 49 Z"
        />

        {/* i */}
        <ellipse cx="64" cy="27" rx="5" ry="5" />
        <path d="M59 36 L70 36 L70 68 L59 68 Z" />

        {/* n */}
        <path d="M80 36 L91 36 L91 43 C94 38 100 35 107 35 C118 35 123 41 123 52 L123 68 L112 68 L112 53 C112 47 109 44 104 44 C98 44 91 48 91 55 L91 68 L80 68 Z" />

        {/* k */}
        <path d="M133 12 L144 12 L144 45 L157 36 L171 36 L154 48 L172 68 L158 68 L144 52 L144 68 L133 68 Z" />

        {/* O */}
        <path
          d="M205 34 C222 34 233 46 233 60 C233 74 222 86 205 86 C188 86 177 74 177 60 C177 46 188 34 205 34 Z M205 44 C195 44 188 51 188 60 C188 69 195 76 205 76 C215 76 222 69 222 60 C222 51 215 44 205 44 Z"
          transform="translate(10, -8)"
        />
      </g>
    </svg>
  );
};

export default CollaborationSection;
