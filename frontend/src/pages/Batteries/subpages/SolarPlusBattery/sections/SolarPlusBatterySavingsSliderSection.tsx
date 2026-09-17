import React from 'react';
import { Sun, Moon, ShieldCheck, DollarSign, ArrowRight } from 'lucide-react';
import { Badge } from '../../../../../components/ui/Badge';
import { Button } from '../../../../../components/ui/Button';

export const SolarPlusBatterySavingsSliderSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Daytime Solar Harvest',
      timeframe: 'Morning to Afternoon',
      badge: '100% Free Solar',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      icon: Sun,
      iconColor: 'text-amber-500 bg-amber-500/10',
      description:
        'Your high-efficiency rooftop panels power your daytime household appliances while directly filling your battery storage with surplus clean energy.',
      metric: 'Powers all daytime home loads',
    },
    {
      step: '02',
      title: 'Evening Peak Elimination',
      timeframe: '4:00 PM – 10:00 PM',
      badge: 'Zero Peak Rates',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      icon: Moon,
      iconColor: 'text-emerald-500 bg-emerald-500/10',
      description:
        'When energy retailers charge expensive peak rates (45¢–52¢/kWh), your battery seamlessly takes over to power cooking, TVs, lighting, and air-con.',
      metric: 'Saves up to 48¢/kWh during peak',
    },
    {
      step: '03',
      title: 'Instant Blackout Protection',
      timeframe: '24/7 Storm Defense',
      badge: 'Sub-100ms Switchover',
      badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
      icon: ShieldCheck,
      iconColor: 'text-sky-500 bg-sky-500/10',
      description:
        'If severe Queensland weather knocks down neighborhood power lines, your automatic transfer gateway keeps your refrigeration, lights, and Wi-Fi running uninterrupted.',
      metric: 'Seamless whole-home backup',
    },
    {
      step: '04',
      title: 'Up to 88% Bill Reduction',
      timeframe: 'Year-Round Financial Yield',
      badge: 'Max ROI',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      icon: DollarSign,
      iconColor: 'text-indigo-500 bg-indigo-500/10',
      description:
        'By combining rooftop solar generation with intelligent battery storage, most households slash their quarterly electricity expense down to basic supply charges.',
      metric: 'Save $2,800 – $4,600+ annually',
    },
  ];

  return (
    <section className=" max-w-7xl mx-auto px-2 md:px-4 lg:px-6">
      {/* Concise Section Header */}
      <div className="text-center max-w-6xl mx-auto mb-10">

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-950 mt-3 tracking-tight">
          How a Solar + Battery System <br /> Works for You
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
          A matched solar and battery ecosystem operates automatically 24/7 to deliver free power, eliminate peak energy prices, and safeguard your home.
        </p>
      </div>

      {/* 4 Clean, Simple Content Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-slate-50 rounded-xl p-5 border shadow-black/50 shadow-md  border-slate-200/80 flex flex-col justify-between hover:bg-slate-100/70 transition-all group"
            >
              <div>
                {/* Top Row: Icon & Step Number */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.iconColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {item.step}
                  </span>
                </div>

                {/* Badge & Timeframe */}
                <div className="mb-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${item.badgeColor} inline-block mb-1`}>
                    {item.badge}
                  </span>
                  <div className="text-[11px] font-medium text-slate-400">
                    {item.timeframe}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-950 mb-2 group-hover:text-amber-800 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Metric Pill */}
              <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-semibold text-slate-700">
                ✓ {item.metric}
              </div>
            </div>
          );
        })}
      </div>

      
    </section>
  );
};

export default SolarPlusBatterySavingsSliderSection;
