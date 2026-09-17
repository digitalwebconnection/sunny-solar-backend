import React from 'react';
import { Search, Recycle, Wrench, Zap, CheckCircle2 } from 'lucide-react';

export const SolarUpgradesProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      icon: Search,
      title: 'Electrical & Roof Diagnostic',
      desc: 'We test open-circuit voltages (Voc), insulation resistance (>100 MΩ), and roof structural framing to determine if existing cabling and brackets can be safely reused.',
      signOff: 'Full Feasibility Report',
    },
    {
      step: '02',
      icon: Recycle,
      title: 'Safe Decommission & Eco-Recycling',
      desc: 'Old inverters and degraded modules are safely disconnected and delivered to accredited Australian e-waste recyclers to divert hazardous glass and silicon from landfills.',
      signOff: 'Zero-Landfill Guarantee',
    },
    {
      step: '03',
      icon: Wrench,
      title: 'Rooftop Waterproof Re-Sealing',
      desc: 'Old penetrations and screw holes are sealed and waterproofed. New marine-grade Clenergy cyclone rails are installed to modern AS/NZS 1170.2 standards.',
      signOff: '10-Yr Water Barrier Warranty',
    },
    {
      step: '04',
      icon: Zap,
      title: 'Energex Re-Approval & Commissioning',
      desc: 'We submit the revised system paperwork to Energex for network capacity expansion approval and configure your new live Wi-Fi app monitoring dashboard.',
      signOff: 'Energex Network Approved',
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/20 p-6 sm:p-6 hover:border-amber-400 hover:bg-white shadow-black/5 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-2xl font-bold text-slate-300 group-hover:text-amber-500/60 transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-slate-950 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item.signOff}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-500">
          <span className="flex items-center gap-2 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            10-Year Workmanship Guarantee
          </span>
          <span className="flex items-center gap-2 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            100% In-House Master Electricians
          </span>
          <span className="flex items-center gap-2 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            Accredited Australian PV Recycling
          </span>
          <span className="flex items-center gap-2 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            Energex Network Paperwork Managed
          </span>
        </div>
      </div>
    </section>
  );
};
