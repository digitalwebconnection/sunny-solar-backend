import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { FlipText } from '@/components/ui/FlipText';

export const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-0 lg:min-h-160 bg-white overflow-hidden">
      {/* Ambient solar blue backdrop aura */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Left side — typography and Right side image */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-0 lg:min-h-155">
        {/* Left content panel */}
        <div className="relative z-20 flex items-center justify-center px-6 sm:px-12 lg:px-16 xl:px-8 pb-8 lg:pb-0">
          <div className="max-w-2xl ">

            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#1d4ed8] bg-blue-50 border border-blue-200/90 shadow-2xs mt-24 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#1d4ed8] animate-pulse" />
              <span>Master Electrician Founded • Est. 2011</span>
            </div>

            {/* Main heading — animated with FlipText */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-5xl text-slate-950 leading-[1.08] font-serif font-semibold"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <FlipText className="text-slate-950">
                Solar Built by Electricians,
              </FlipText>{' '}
              <FlipText className="text-amber-500" delay={0.3}>
                Powered by Pure Trust.
              </FlipText>
            </motion.h1>

            {/* Narrative copy */}
            <motion.p
              className="mt-6 text-base sm:text-lg text-slate-900 leading-relaxed font-normal"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Founded on the Gold Coast by Master Electrician{' '}
              <strong className="text-slate-900 font-semibold">Trent Palmer</strong>, Sunny Solar was built on one
              simple rule: treat every rooftop like our own family's home. No pushy telemarketers, zero subcontractors—just
              master-level engineering and 14+ years of honest Queensland service.
            </motion.p>


            {/* Call to action buttons */}
            <motion.div
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                to="/get-started"
                variant="primary"
                size="md"
                className="w-full sm:w-auto justify-center"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Get Free Assessment
              </Button>
              <Button
                to="/about/trent"
                variant="outline"
                size="md"
                className="w-full sm:w-auto justify-center"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Meet Founder Trent
              </Button>
            </motion.div>


          </div>
        </div>

        {/* Right side — image with diagonal clip */}
        <div className="relative hidden lg:block">
          <div
            className="absolute inset-0"
            style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
          >
            <img
              src="/images/about/solar-team-hero.jpg"
              alt="Sunny Solar installation crew on a rooftop"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-white/40" />
          </div>


        </div>
      </div>

      {/* Mobile image — shows below text on small screens */}
      <div className="lg:hidden relative h-[50vh] mt-auto">
        <img
          src="/images/about/solar-team-hero.jpg"
          alt="Sunny Solar installation crew on a rooftop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-white/60" />
      </div>

    </section>
  );
};

export default HeroSection;
