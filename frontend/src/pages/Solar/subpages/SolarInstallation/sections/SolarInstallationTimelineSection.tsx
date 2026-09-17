import React from 'react';
import { Clock, CheckCircle2, ShieldCheck, Wrench, Cable, Gauge, Smartphone, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const SolarInstallationTimelineSection: React.FC = () => {
  const steps = [
    {
      time: '07:00 AM',
      icon: ShieldCheck,
      title: 'Site Arrival & Safety Induction',
      description:
        'Our lead Master Electrician introduces the crew, conducts the roof structural hazard review, installs fall-arrest harness points, and covers grounds and pathways below.',
      tag: 'Safety Protocol',
    },
    {
      time: '08:30 AM',
      icon: Wrench,
      title: 'Roof Racking & Precision Flashing',
      description:
        'Marine-grade Clenergy rails are mounted with cyclone-rated brackets. Tile roofs are diamond-notched and flashed to prevent cracked tiles. Tin roofs use heavy-gauge dektite waterproofing.',
      tag: 'Zero Roof Leaks',
    },
    {
      time: '11:00 AM',
      icon: Cable,
      title: 'DC String Cabling & Conduit Concealment',
      description:
        'Heavy-duty solar DC cabling is run inside internal wall cavities or neat powder-coated metal conduits where possible — never left draped loosely across your gutters.',
      tag: 'Clean Aesthetics',
    },
    {
      time: '01:00 PM',
      icon: Gauge,
      title: 'Inverter & Switchboard Protection Wiring',
      description:
        'The inverter and smart consumption meter are securely mounted. Switchboard protection circuits, safety switches, and isolation devices are wired strictly to AS/NZS 5033 standards.',
      tag: 'Electrical Safety',
    },
    {
      time: '02:30 PM',
      icon: Sparkles,
      title: 'Panel Securing & Torque Verification',
      description:
        'Modules are hoisted and secured using calibrated torque wrenches to manufacturer specifications. Earth continuity is verified across every single rail and frame.',
      tag: 'Precision Engineering',
    },
    {
      time: '03:30 PM',
      icon: Smartphone,
      title: 'Energisation, Testing & App Setup',
      description:
        'We power on the system, verify live voltage telemetry, connect the inverter to your home Wi-Fi, and walk you through the live smartphone monitoring dashboard.',
      tag: 'Handover & Training',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-3 tracking-tight">
            What Happens on Your Installation Day
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Most residential systems are fully installed, safety-tested, and commissioned in a single seamless day by our full-time tradesmen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 rounded-xl p-6 sm:p-6 hover:border-amber-400 hover:bg-white shadow-black/50 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex items-center gap-1.5 font-mono text-xs font-bold px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 border border-amber-500/20">
                      <Clock className="w-3.5 h-3.5" />
                      {step.time}
                    </span>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      {step.tag}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif font-bold text-lg text-slate-950 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Quality Inspection Sign-Off</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Row */}
        <div className="mt-14 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <Button
            to="/get-started/free-assessment"
            variant="primary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            className="w-full sm:w-auto shadow-md"
          >
            Book My Free 3D Roof Assessment
          </Button>
          <Button
            to="/about/trent"
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            className="w-full sm:w-auto"
          >
            Meet Trent Palmer, Lead Electrician
          </Button>
        </div>
      </div>
    </section>
  );
};
