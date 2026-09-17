import React from 'react';
import { ArrowRight, ShieldCheck, Moon, Zap } from 'lucide-react';
import { Badge } from '../../../../../components/ui/Badge';

export const SolarBatteriesRetrofitGuideSection: React.FC = () => {
  const useCases = [
    {
      id: 'evening-savings',
      title: 'Store Daytime Solar for Evening Peak Rates',
      badge: 'Peak Tariff Elimination',
      badgeVariant: 'amber' as const,
      image: '/images/solutions/battery-hero.jpg',
      alt: 'Tesla Powerwall home battery installed on garage wall',
      desc: 'Rooftop panels produce surplus electricity during midday when feed-in tariffs pay only 3¢–5¢. Your battery stores this clean power so you can run air-con, cooking, and lighting for free after the sun sets.',
      metric: 'Save Up to 88% on Evening Grid Bills',
      icon: Moon,
    },
    {
      id: 'blackout-backup',
      title: 'Instant Backup When Queensland Storms Hit',
      badge: 'Sub-100ms Blackout Defense',
      badgeVariant: 'emerald' as const,
      image: '/images/solutions/battery-storm.jpg',
      alt: 'Home brightly illuminated with battery backup during storm blackout',
      desc: 'When summer storms knock down transmission lines, your battery isolates your home from the grid in under 100ms. Lights stay on, refrigerators stay cold, and Wi-Fi remains connected without rebooting.',
      metric: 'Seamless Sub-100ms Outage Switchover',
      icon: ShieldCheck,
    },
    {
      id: 'high-power-loads',
      title: 'Power Heavy Ducted Air-Con & EV Charging',
      badge: 'High-Surge Autonomy',
      badgeVariant: 'navy' as const,
      image: '/images/solutions/battery-bundle.jpg',
      alt: 'Integrated home solar and battery storage installation',
      desc: 'With massive motor-start surge capacities (up to 18.5kW), modern home batteries effortlessly start whole-home ducted air conditioners and charge electric vehicles directly from stored sunshine.',
      metric: 'Up to 18.5kW Motor-Start Surge Power',
      icon: Zap,
    },
  ];

  return (
    <div className="pt-8 border-t border-slate-200/80">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 inline-block mb-2.5">
          Real-World Storage Applications
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-950 tracking-tight">
          How You Use Your Solar Battery
        </h2>
        <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
          From eliminating 45¢ evening electricity rates to keeping your home running during severe Queensland storm blackouts, here is how home batteries work for you every day.
        </p>
      </div>

      {/* 3 Visual Use-Case Cards with Real Battery Images (No Enclosing Box) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {useCases.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="flex flex-col justify-between group"
            >
              <div>
                {/* Visual Battery Photo Container */}
                <div className="relative aspect-16/10 rounded-xl overflow-hidden bg-slate-950 shadow-sm mb-4">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3 left-3">
                    <Badge variant={item.badgeVariant} size="sm">
                      {item.badge}
                    </Badge>
                  </div>

                  {/* Bottom Metric Pill inside Image */}
                  <div className="absolute bottom-3 left-3 right-3 text-xs font-semibold text-emerald-300 flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{item.metric}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-950 tracking-tight mb-2 group-hover:text-emerald-800 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
                <span>Certified Master Electrician Install</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default SolarBatteriesRetrofitGuideSection;
