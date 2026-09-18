import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  ArrowRight,
  Phone,
  Sun,
  Award,
} from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import heroBg from '../../../assets/hero-installer.jpg';

export const ServicesOverviewSection: React.FC = () => {
  return (
    <section className="py-10 lg:py-14 bg-white relative overflow-hidden">
      {/* Subtle Ambient Glows - no extra containers/content */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#265e11]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[480px] h-[480px] bg-[#ed5001]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story & Information */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#1d4ed8] bg-blue-50/90 border border-blue-200/60 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#1d4ed8] animate-pulse" />
              <Sun className="w-3.5 h-3.5 text-[#ed5001]" />
              <span>About Sunny Solar • Est. 2011</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-[44px] text-center  md:text-left font-serif font-extrabold text-[#18181b] tracking-tight leading-[1.15]">
              We Don’t Just Sell Panels. <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#ed5001] via-[#f06e02] to-[#f4a304]">
                We Engineer 25-Year Peace of Mind.
              </span>
            </h2>

            {/* Narrative Story */}
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                In 2011, Master Electrician <strong className="text-slate-900 font-semibold">Trent Palmer</strong> founded Sunny Solar with a clear mission: eliminate aggressive telemarketing sales tactics and build premium solar systems that Australian families can rely on for decades.
              </p>
              <p>
                While hundreds of cut-rate solar outfits liquidated over the past decade—leaving thousands with orphaned, hazardous inverters—Sunny Solar has remained <strong className="text-slate-900 font-semibold">100% privately owned, debt-free</strong>, and steadfastly committed to in-house master craftsmanship.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <Button
                to="/about"
                variant="primary"
                size="md"
                className="w-full sm:w-auto rounded-lg shadow-lg shadow-[#ed5001]/20 bg-gradient-to-r from-[#ed5001] via-[#f06e02] to-[#f4a304] hover:from-[#c84300] hover:to-[#ed5001] text-white border-0 font-bold px-6 py-3 transition-all duration-300 hover:shadow-[#ed5001]/35 hover:-translate-y-0.5"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Learn More About Us
              </Button>

              <a
                href="tel:1300786697"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-xl border border-slate-200 hover:border-[#1d4ed8] text-slate-800 hover:text-[#1d4ed8] font-bold text-sm bg-white hover:bg-blue-50/40 transition-all duration-300 shadow-xs hover:shadow hover:-translate-y-0.5"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#1d4ed8]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>Speak to Trent: <span className="text-[#1d4ed8]">1300 SUNNY</span></span>
              </a>
            </div>
          </div>

          {/* Right Column: Sleek Modern Visual Showcase */}
          <div className="lg:col-span-6 relative">
            {/* Offset Decorative Layered Backdrop */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-xl bg-gradient-to-br from-[#1d4ed8]/15 via-[#f4a304]/15 to-[#ed5001]/20 border border-slate-200/50 -z-10 hidden lg:block" />

            {/* Ambient Background Aura */}
            <div className="absolute -top-6 -left-6 w-84 h-84 bg-[#265e11]/50 rounded-full blur-2xl -z-10 hidden lg:block" />

            {/* Main Image Frame */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-slate-900/10 border-2 border-white bg-slate-100 aspect-4/4 group">
              <img
                src={heroBg}
                alt="Sunny Solar Master Electrician Installing Solar & Battery"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Floating Verified Badge (Top Right) */}
              <Link
                to="/solar/installation"
                className="absolute top-4 right-4 bg-white/95 hover:bg-white backdrop-blur-md border border-slate-200/80 hover:border-emerald-300 rounded-full px-3.5 py-1.5 shadow-md flex items-center gap-2 transition-all duration-200 hover:scale-105"
                title="View CEC Accreditation & Installation Standards"
              >
                <ShieldCheck className="w-4 h-4 text-[#265e11]" />
                <span className="text-xs font-bold text-slate-800">
                  CEC Approved Retailer 
                </span>
              </Link>

              {/* Compact Floating Trust Chip (Bottom Left) */}
              <Link
                to="/about/trent"
                className="absolute bottom-4 left-4 bg-white/95 hover:bg-white backdrop-blur-md border border-slate-200/80 hover:border-blue-300 rounded-2xl p-3 shadow-xl flex items-center gap-3 max-w-67.5 transition-all duration-200 hover:scale-105 group/chip"
                title="Meet Trent Palmer, Master Certified Installer"
              >
                <div className="w-9 h-9 rounded-xl bg-linear-to-br from-[#1d4ed8] via-[#2563eb] to-[#0284c7] flex items-center justify-center text-white shrink-0 shadow-sm shadow-blue-500/25 group-hover/chip:scale-105 transition-transform">
                  <Award className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-900 leading-tight truncate group-hover/chip:text-[#1d4ed8] transition-colors">Master Certified Installer</div>
                  <div className="text-[11px] text-slate-500 font-medium truncate mt-0.5 flex items-center gap-1">
                    <span>Trent Palmer</span>
                    <span className="text-[#1d4ed8] font-bold">→</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;
