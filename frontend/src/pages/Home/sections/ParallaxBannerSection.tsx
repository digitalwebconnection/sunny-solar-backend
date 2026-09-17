import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, ArrowRight, Phone, Sun } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

export const ParallaxBannerSection: React.FC = () => {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('/images/home/parallax-solar-home.webp')",
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* Upper Div Overlay (h-full with dark scrim and backdrop blur) */}
      <div className="w-full h-full min-h-90 lg:min-h-100 bg-[#071328]/80 backdrop-blur-[2px] flex items-center justify-center text-center py-20 lg:py-14 px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Subtle solar blue radial lighting */}
        <div className="absolute inset-0 bg-radial from-blue-600/15 via-transparent to-transparent pointer-events-none" />

        {/* Upper Content */}
        <div className="max-w-6xl mx-auto relative z-20 space-y-6">
          
          

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-extrabold text-white tracking-tight font-serif leading-[1.15]">
            Built for Queensland Heat. <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#ed5001] via-[#f06e02] to-[#f4a304]">
              Engineered to Last Decades.
            </span>
          </h2>

          {/* Narrative Story */}
          <p className="mt-4 text-base sm:text-lg text-slate-100 leading-relaxed max-w-6xl mx-auto">
            While cut-rate solar outfits liquidate and leave thousands with orphaned inverters, Sunny Solar remains 100% privately owned, debt-free, and dedicated to in-house master craftsmanship since 2011.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              className="rounded-xl shadow-xl shadow-[#ed5001]/25 bg-linear-to-r from-[#ed5001] via-[#f06e02] to-[#f4a304] hover:from-[#c84300] hover:to-[#ed5001] text-white border-0 font-bold px-8 py-3.5 lg:py-2 transition-all duration-300 hover:shadow-[#ed5001]/40 hover:-translate-y-0.5 text-base"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Claim Your Free Solar Assessment
            </Button>

            <a
              href="tel:1300786697"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border border-white/20 hover:border-sky-400/60 bg-white/10 hover:bg-sky-500/15 text-white font-bold text-base backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>Speak to Trent: 1300 SUNNY</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ParallaxBannerSection;
