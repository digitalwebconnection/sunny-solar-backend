import React from 'react';
import { Search, Compass, Wrench, Smartphone, CheckCircle2, ArrowRight } from 'lucide-react';
import { Badge } from '../../../../components/ui/Badge';
import { Button } from '../../../../components/ui/Button';

export const SolarLandingProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: Search,
      title: '3D Roof & Shading Simulation',
      desc: 'We analyze your satellite roof layout, pitch, and nearby tree foliage to calculate month-by-month solar harvest accuracy within 3%.',
    },
    {
      num: '02',
      icon: Compass,
      title: 'Master Electrician Design',
      desc: 'No generic formulas. Our licensed electrical contractor customizes your string inverter, DC isolators, and Energex network pre-approvals.',
    },
    {
      num: '03',
      icon: Wrench,
      title: '1-Day Zero-Damage Install',
      desc: 'Installed strictly by full-time in-house tradesmen. Marine-grade racking, concealed conduits, and absolute zero broken tile guarantee.',
    },
    {
      num: '04',
      icon: Smartphone,
      title: 'Testing, App Setup & Support',
      desc: 'We commission the system, test output voltages, pair your smartphone telemetry app, and provide ongoing local Queensland support.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="amber">Frictionless Experience</Badge>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-3 tracking-tight">
            How We Deliver Your Solar System
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            From your initial satellite roof consultation to your first zero-dollar power bill, our in-house team handles every engineering approval, grid connection, and rebate document.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-slate-50 rounded-xl p-6 border border-slate-200/80 hover:border-amber-400/80 hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-2xl font-bold text-slate-300 group-hover:text-amber-500/60 transition-colors">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-slate-950 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom Process CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <Button
            to="/solar/installation"
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            className="w-full sm:w-auto"
          >
            View Full 1-Day Installation Standards
          </Button>
          <Button
            to="/get-started/free-assessment"
            variant="primary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            className="w-full sm:w-auto shadow-md"
          >
            Request Free Roof Assessment
          </Button>
        </div>
      </div>
    </section>
  );
};
