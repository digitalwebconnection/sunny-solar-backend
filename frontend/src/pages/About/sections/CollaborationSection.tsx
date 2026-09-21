import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import xsolaar from "../../../assets/xsolar.png"
import jinko from "../../../assets/jinkosolar.png"

export const CollaborationSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 lg:py-14 bg-white overflow-hidden "
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column — Custom Authoritative Data & Value Pillars */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
         

            {/* Main Heading — Custom Sunny Solar data as requested */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-slate-950 tracking-tight leading-[1.05]">
              Partnering with World-Class Manufacturers for{' '}
              <span className="bg-gradient-to-r from-sky-600 via-sky-600 to-green-800 bg-clip-text text-transparent">
                Uncompromising Solar Performance
              </span>
            </h2>

            {/* Narrative Copy */}
            <p className="mt-6 text-base sm:text-lg text-slate-900 leading-relaxed font-normal">
              We reject cheap clearance hardware. Sunny Solar collaborates directly with global Tier-1 pioneers like{' '}
              <strong className="text-slate-900 font-semibold">SolaX Power</strong> and{' '}
              <strong className="text-slate-900 font-semibold">JinkoSolar</strong> to deliver high-yield N-Type TOPCon
              modules and intelligent hybrid inverters engineered to withstand Queensland’s brutal 42°C summer heat,
              cyclonic winds, and coastal salt mist.
            </p>

          

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                to="/solar/systems"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Tier-1 Systems
              </Button>
              <Button
                to="/resources/buying-checklist"
                variant="outline"
                size="md"
              >
                View Quality Checklist
              </Button>
            </div>
          </motion.div>

          {/* Right Column — Matches User's Image Layout (SolaX & Jinko Showcase on Pale Blue Canvas) */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className=" relative overflow-hidden">
              {/* Subtle ambient light gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-200/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col gap-10 sm:gap-4">
                {/* 1. SolaX Power Brand Block */}
                <div className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white/70 border border-sky-100/60 shadow-sm hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="h-16 sm:h-20 flex items-center justify-center w-full">
                    {/* SolaX Vector Logo */}
                    <img src={xsolaar} alt="solaax" className='w-60 h-60 object-contain'/>
                  </div>

                  <div className="mt-4 pt-4 border-t border-sky-100/80 w-full flex flex-col items-center">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Hybrid Inverters & High-Voltage Storage
                    </span>
                    <span className="text-[11px] text-slate-500 mt-1">
                      Up to 98.4% Efficiency • Sub-10ms Blackout Switchover
                    </span>
                  </div>
                </div>

                {/* Subtle Divider */}
                <div className="w-full h-px bg-linear-to-r from-transparent via-[#D1DCF8] to-transparent" />

                {/* 2. Jinko Solar Brand Block */}
                <div className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white/70 border border-sky-100/60 shadow-sm hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="h-16 sm:h-20 flex items-center justify-center w-full">
                    {/* Jinko Vector Logo */}
                    <img src={jinko} alt="jinko" className='w-60 h-60 object-contain'/>
                  </div>

                  <div className="mt-4 pt-4 border-t border-sky-100/80 w-full flex flex-col items-center">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      World's #1 N-Type TOPCon Solar PV Modules
                    </span>
                    <span className="text-[11px] text-slate-500 mt-1">
                      25-Year Product & 30-Year Linear Power Guarantee
                    </span>
                  </div>
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
