import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Flame, TrendingDown, SunDim, CloudRain, ArrowRight, ShieldAlert } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

export interface WarningSign {
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  badge: string;
  badgeColor: string;
  title: string;
  symptom: string;
  remedy: string;
  linkTo: string;
  linkText: string;
}

export const ExistingSolarWarningSignsSection: React.FC = () => {
  const warnings: WarningSign[] = [
    {
      icon: AlertTriangle,
      iconColor: 'text-amber-600 bg-amber-500/10',
      badge: 'Unnoticed Loss',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      title: 'Silent Inverter Trips & Fault Codes',
      symptom:
        'The inverter shows an intermittent red error LED, ground fault error, or shuts down during hot midday hours without alerting you.',
      remedy: 'Full DC string voltage testing, error log extraction, and capacitor diagnostics by a Master Electrician.',
      linkTo: '/existing-solar/health-check',
      linkText: 'Book Inverter Diagnostics',
    },
    {
      icon: Flame,
      iconColor: 'text-rose-600 bg-rose-500/10',
      badge: 'Critical Fire Hazard',
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
      title: 'Degraded or Recalled DC Isolators',
      symptom:
        'Queensland summer UV cracks switch housings, causing water ingress, internal arcing, and severe switchboard fire hazards.',
      remedy: 'Immediate replacement with certified weatherproof IP66 rotary isolators compliant with AS/NZS 5033.',
      linkTo: '/existing-solar/health-check',
      linkText: 'Inspect DC Isolators',
    },
    {
      icon: TrendingDown,
      iconColor: 'text-indigo-600 bg-indigo-500/10',
      badge: 'Financial Drain',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      title: 'The 5¢ Feed-In Tariff Cliff',
      symptom:
        'Legacy high feed-in tariffs have expired. You export surplus solar for just 3¢–5¢ while purchasing peak evening power at 45¢/kWh.',
      remedy: 'Retrofit an AC-coupled battery (Tesla Powerwall 3 or Sungrow) to store daytime solar for night use.',
      linkTo: '/existing-solar/add-battery',
      linkText: 'Explore Battery Retrofits',
    },
    {
      icon: SunDim,
      iconColor: 'text-orange-600 bg-orange-500/10',
      badge: 'Generation Loss',
      badgeColor: 'bg-orange-50 text-orange-700 border-orange-200',
      title: 'Micro-Cracks & Diode Hotspots',
      symptom:
        'Subtle snail trails, yellowing backsheets, and cracked silicon wafers can cut total panel output by 25% to 40%.',
      remedy: 'High-resolution infrared thermal imaging to identify dead cells and claim manufacturer warranty replacements.',
      linkTo: '/existing-solar/upgrade',
      linkText: 'Panel Upgrade Options',
    },
    {
      icon: CloudRain,
      iconColor: 'text-sky-600 bg-sky-500/10',
      badge: 'Moisture Leakage',
      badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
      title: 'Safety Trips During Storms & Rain',
      symptom:
        'Your main switchboard or solar safety switch trips whenever it rains or morning humidity rises above 85%.',
      remedy: 'Megger high-voltage insulation resistance testing to locate cracked conduit glands or degraded cables.',
      linkTo: '/existing-solar/health-check',
      linkText: 'Book Insulation Test',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-2 md:px-4 lg:px-6">
      {/* Section Header */}
      <div className="text-center max-w-6xl mx-auto mb-10">
       
        <h2 className="text-2xl sm:text-3xl lg:text-4xl max-w-3xl mx-auto font-serif font-bold text-slate-950 mt-2 tracking-tight">
          5 Signs Your Existing Solar Needs Attention
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
          Over 38% of rooftop systems older than 4 years suffer from silent electrical degradation. If you notice any of these symptoms, early inspection prevents costly damage.
        </p>
      </div>

      {/* Warning Signs Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {warnings.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${item.iconColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-serif text-slate-950 mb-2 group-hover:text-amber-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.symptom}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs flex flex-col justify-between gap-3">
                <div>
                  <span className="font-bold text-slate-900 block mb-0.5">Electrician Remedy:</span>
                  <span className="text-slate-600 leading-snug">{item.remedy}</span>
                </div>
                <Link
                  to={item.linkTo}
                  className="inline-flex items-center gap-1 font-bold text-[#ed5001] hover:text-[#c44200] hover:underline transition-colors text-xs pt-1 group/wlink"
                >
                  <span>{item.linkText}</span>
                  <ArrowRight className="w-3 h-3 group-hover/wlink:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}

        {/* 6th Card: Direct Health Check Booking Card */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-md flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block mb-2">
              Comprehensive Audit
            </span>
            <h3 className="text-xl font-bold font-serif mb-2">
              Suspect Your Solar Isn't Performing?
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Our CEC Master Electricians conduct infrared thermal scans, string voltage audits, and isolator safety checks across Brisbane and Gold Coast.
            </p>
            <div className="text-2xl font-bold font-mono text-emerald-400 mb-1">
              $189 Fixed Price
            </div>
            <span className="text-[11px] text-slate-400 block mb-4">
              Includes full written compliance certificate & report
            </span>
          </div>

          <Button
            to="/existing-solar/health-check"
            variant="primary"
            size="sm"
            fullWidth
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Book 24-Point Health Check
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExistingSolarWarningSignsSection;
