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
import heroBg from '../../../../public/images/about/gallery/electrician-mounting-inverter.jpg';

export const ServicesOverviewSection: React.FC = () => {
  return (
    <section className="py-10 lg:py-14 bg-white relative overflow-hidden">
      {/* Subtle Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#2B3CB8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-120 h-120 bg-[#2B3CB8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#2B3CB8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
          
          {/* Left Column: Story & Information */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#2B3CB8] bg-[#F5F7FD] border border-[#D1DCF8] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#2B3CB8] animate-pulse" />
              <Sun className="w-3.5 h-3.5 text-[#2B3CB8]" />
              <span>About Sunny Solar • Est. 2011</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl text-center  md:text-left font-serif font-bold text-[#18181b] tracking-tight leading-[1.15]">
              Solar Is More Than Panels. <br />
              <span className="text-[#2B3CB8]">
                It’s About Making the Right Energy Decision.
              </span>
            </h2>

            {/* Narrative Story */}
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
              Solar is a major investment.
Sunny Solar believes you should understand your options before you commit.
              </p>
              <p>
From choosing the right solar system and battery to understanding your savings and existing system performance, we give you practical advice built around your energy needs.              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <Button
                to="/about"
                variant="primary"
                size="md"
                className="w-full sm:w-auto rounded-lg shadow-lg shadow-[#2B3CB8]/20 bg-[#2B3CB8] hover:bg-[#1D2984] text-white border-0 font-bold px-6 py-3 transition-all duration-300 hover:shadow-[#2B3CB8]/35 hover:-translate-y-0.5"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Your Solar Options
              </Button>

              <a
                href="tel:1300030479"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-xl border border-slate-200 hover:border-[#2B3CB8] text-slate-800 hover:text-[#2B3CB8] font-bold text-sm bg-white hover:bg-[#F5F7FD] transition-all duration-300 shadow-xs hover:shadow hover:-translate-y-0.5"
              >
                <div className="w-7 h-7 rounded-lg bg-[#F5F7FD] border border-[#D1DCF8] flex items-center justify-center text-[#2B3CB8]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>Call Us: <span className="text-[#2B3CB8]">1300 030 479</span></span>
              </a>
            </div>
          </div>

          {/* Right Column: Sleek Modern Visual Showcase */}
          <div className="lg:col-span-6 relative">
            {/* Offset Decorative Layered Backdrop */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-xl bg-[#2B3CB8]/10 border border-slate-200/50 -z-10 hidden lg:block" />

            {/* Ambient Background Aura */}
            <div className="absolute -top-6 -left-6 w-84 h-84 bg-[#2B3CB8]/20 rounded-full blur-2xl -z-10 hidden lg:block" />

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
                className="absolute top-4 right-4 bg-white/95 hover:bg-white backdrop-blur-md border border-slate-200/80 hover:border-[#2B3CB8] rounded-full px-3.5 py-1.5 shadow-md flex items-center gap-2 transition-all duration-200 hover:scale-105"
                title="View CEC Accreditation & Installation Standards"
              >
                <ShieldCheck className="w-4 h-4 text-[#2B3CB8]" />
                <span className="text-xs font-bold text-slate-800">
                  NETCC APPROVED SELLER
                </span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;
