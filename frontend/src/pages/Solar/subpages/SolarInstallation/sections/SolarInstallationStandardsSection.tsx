import React from 'react';
import { ShieldCheck, Zap, Wrench, CheckCircle2 } from 'lucide-react';

export const SolarInstallationStandardsSection: React.FC = () => {
  const standards = [
    {
      icon: ShieldCheck,
      title: 'Zero Roof Leaks',
      badge: '10-Yr Guarantee',
      desc: 'Tiles are diamond-notched so brackets sit 100% flush into rafters without cracking tiles or relying on cheap silicone.',
    },
    {
      icon: Zap,
      title: 'Fire-Safe DC Protection',
      badge: 'AS/NZS 5033',
      desc: 'Heavy-duty IP66 rotary isolators with metal UV shields eliminate arcing faults—the leading cause of solar fires.',
    },
    {
      icon: Wrench,
      title: 'Concealed Cable Routing',
      badge: 'Clean Aesthetics',
      desc: 'Cables run through internal cavities or powder-coated metal conduits—never draped loosely across your gutters.',
    },
    {
      icon: CheckCircle2,
      title: 'Switchboard Protection',
      badge: 'AS/NZS 3000',
      desc: 'Upgraded with Type-A RCBO safety switches, lightning surge diverters, and calibrated earth loop testing on-site.',
    },
  ];

  return (
    <section className="py-16 lg:py-14 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Concise Centered Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-950 tracking-tight">
            The Master Electrician Standard of Workmanship
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Uncompromising electrical safety, zero roof leaks, and full-time in-house tradesmen on every single install.
          </p>
        </div>

        {/* 4 Clean Columns Separated by Hairline Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">
          {standards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="py-6 sm:py-0 sm:px-6 first:sm:pl-0 last:sm:pr-0 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/70 text-amber-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-serif font-bold text-slate-950 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
