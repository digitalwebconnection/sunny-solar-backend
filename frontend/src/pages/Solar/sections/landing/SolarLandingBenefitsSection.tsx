import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, ThermometerSun, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { Badge } from '../../../../components/ui/Badge';

export const SolarLandingBenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Crush Peak Power Bills',
      highlight: 'Up to 85% Daytime Offset',
      description:
        'Run daytime power-hungry ducted air conditioning, electric heat pump hot water, and swimming pool pumps directly from free self-generated sunshine.',
      linkTo: '/calculators/solar-savings',
      linkText: 'Calculate Bill Savings',
    },
    {
      icon: ThermometerSun,
      title: 'Ultra-Low Heat Degradation',
      highlight: '-0.26%/°C Temp Coefficient',
      description:
        'Standard cheap solar drops 25%+ efficiency when the mercury hits 38°C. Our N-Type TOPCon panels are specifically engineered for Queensland summer heatwaves.',
      linkTo: '/solar/systems',
      linkText: 'View N-Type Systems',
    },
    {
      icon: ShieldCheck,
      title: '25-Year Triple Guarantee',
      highlight: 'Product, Output & Labor',
      description:
        'Guaranteed minimum 89.4% electricity output after 25 years. Every single screw, bracket, and roof tile is backed by our 10-year in-house roof leak guarantee.',
      linkTo: '/solar/installation',
      linkText: 'Installation Standards',
    },
    {
      icon: Zap,
      title: 'Future-Proof Battery Architecture',
      highlight: 'Hybrid & AC-Coupled Ready',
      description:
        'Every solar inverter is engineered to accept a Tesla Powerwall 3, BYD, or Sungrow high-voltage battery on day one or whenever your budget allows.',
      linkTo: '/batteries',
      linkText: 'Explore Battery Options',
    },
  ];

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-6xl mx-auto mb-16">

          <h2 className="text-3xl sm:text-4xl max-w-3xl mx-auto font-serif font-bold text-slate-950 mt-3 tracking-tight">
            The Difference Between Cheap Solar & Engineered Solar
          </h2>
          <p className="mt-4 text-slate-900 text-base sm:text-lg leading-relaxed">
            Cut-price telemarketers use unaccredited subcontractors and low-grade tier-3 panels that fail within 4 years. We employ full-time Master Electricians delivering engineered installations that last decades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-300/80 rounded-xl p-6 shadow-black/40 shadow-lg hover:shadow-xl hover:border-amber-400/80 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-300/30 text-amber-600 flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-bold font-mono text-amber-600 mb-1 uppercase tracking-wider">
                    {item.highlight}
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/80">
                  <Link
                    to={item.linkTo}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors group/blink"
                  >
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/blink:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
