import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

export const ParallaxBannerSection: React.FC = () => {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/home/parallax-solar-home.webp')",
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* Dark overlay with subtle backdrop blur for high contrast readability */}
      <div className="w-full h-full min-h-90 lg:min-h-90 bg-black/60 flex items-center justify-center text-center py-8 lg:py-14 px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Subtle radial lighting accent */}
        <div className="absolute inset-0 bg-radial from-black/20 via-transparent to-transparent pointer-events-none" />

        {/* Content Container */}
        <div className="max-w-5xl mx-auto relative z-20 space-y-4">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#D1DCF8] bg-[#2B3CB8]/30 border border-[#6F8EE7]/40 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#D1DCF8] animate-pulse" />
            <span>STILL FIGURING OUT SOLAR?</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-serif leading-[1.15]">
            Not Sure What You Need?
          </h2>

          {/* Supporting Copy */}
          <p className="mt-2 text-base sm:text-xl text-slate-200 leading-relaxed max-w-5xl mx-auto font-normal">
            Solar, batteries, existing systems — there’s a lot to consider. Sunny Solar can help you work out what makes sense for your home and energy needs.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button
              to="/get-started/free-assessment"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto rounded-xl shadow-xl shadow-[#2B3CB8]/25 bg-[#2B3CB8] hover:bg-[#1D2984] text-white border-0 font-bold px-8 py-3.5 transition-all duration-300 hover:shadow-[#2B3CB8]/40 hover:-translate-y-0.5 text-base justify-center"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Explore Your Solar Options
            </Button>

            <Button
              to="/contact"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl border-2 border-white/30 hover:border-white bg-white/10 hover:bg-white/20 text-white hover:text-white font-bold text-base backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 shadow-md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Talk to Sunny Solar
            </Button>
          </div>

          {/* Small Reassurance Line */}
          <p className="pt-2 text-xs sm:text-sm text-slate-300/80 font-medium">
            No pressure. Just clear information to help you take the next step.
          </p>

        </div>
      </div>
    </section>
  );
};

export default ParallaxBannerSection;
