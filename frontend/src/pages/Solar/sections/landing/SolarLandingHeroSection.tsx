import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sun, 
  CheckCircle2, 
  Star, 
  Calculator, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';
import { Button } from '../../../../components/ui/Button';
import { Badge } from '../../../../components/ui/Badge';
import { Breadcrumbs } from '../../../../components/layout/Breadcrumbs';

export const SolarLandingHeroSection: React.FC = () => {
  return (
    <section className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-white border-b border-slate-200/60 overflow-hidden">
      {/* Subtle ambient solar glow */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-36 left-10 w-80 h-80 bg-orange-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
       

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Tight, High-Impact Value Proposition */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Top Micro Badges */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2.5 flex-wrap"
            >
              <Badge variant="blue" icon={<Sun className="w-3.5 h-3.5 text-[#1d4ed8]" />}>
                Master Electrician Engineered
              </Badge>

              <Link
                to="/reviews"
                className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 bg-white/90 hover:bg-white px-3 py-0.5 rounded-full border border-slate-200 hover:border-amber-300 shadow-2xs transition-all duration-200 hover:scale-105 group/rev"
                title="Read 420+ Verified Customer Reviews"
              >
                <div className="flex text-amber-500">
                  <Star className="w-3 h-3 fill-amber-500" />
                  <Star className="w-3 h-3 fill-amber-500" />
                  <Star className="w-3 h-3 fill-amber-500" />
                  <Star className="w-3 h-3 fill-amber-500" />
                  <Star className="w-3 h-3 fill-amber-500" />
                </div>
                <span className="font-bold text-slate-900 ml-1">4.98</span>
                <span className="text-slate-500 group-hover/rev:text-amber-600 transition-colors">(420+ Reviews)</span>
              </Link>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-[1.12]"
            >
              High-Yield Solar{' '}
              <span className="bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 bg-clip-text text-transparent">
                Engineered for Peak Sun.
              </span>
            </motion.h1>

            {/* Concise Subtitle (Small Content) */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl"
            >
              Slash your electricity bills by up to 85% with Tier-1 N-Type solar panels and smart European hybrid inverters. Installed strictly by in-house Master Electricians with zero subcontractors.
            </motion.p>

            {/* Compact CTA Row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1"
            >
              <Button
                to="/get-started/free-assessment"
                variant="primary"
                size="md"
                className="w-full sm:w-auto font-bold shadow-md justify-center"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Get Free 3D Roof Proposal
              </Button>
              <Button
                to="/calculators/solar-savings"
                variant="outline"
                size="md"
                className="w-full sm:w-auto justify-center"
                icon={<Calculator className="w-4 h-4" />}
              >
                Calculate Savings
              </Button>
            </motion.div>

           

          </div>

          {/* Right Column: Clean, Compact Visual Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-950 group aspect-4/3 max-w-lg mx-auto">
              <img
                src="/images/about/solar-installation-aerial.jpg"
                alt="Solar Installation on Queensland Home"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Clean Status Strip */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs bg-slate-950/75 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-serif font-bold text-white">8.6 kW Peak Generation</span>
                </div>
                <span className="text-[11px] font-mono text-amber-400 font-semibold">Palm Beach, QLD</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SolarLandingHeroSection;
