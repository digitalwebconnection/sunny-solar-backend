import React from 'react';
import { CheckCircle2, ShieldCheck, Zap, BatteryCharging, ArrowRight, Layers, Award } from 'lucide-react';
import { Button } from '../../../../../components/ui/Button';

export const AddBatteryRetrofitChoicesSection: React.FC = () => {
  const compatibleBrands = [
    'Fronius', 'SMA', 'Sungrow', 'SolarEdge', 'Enphase', 'GoodWe', 'Growatt', 'Huawei', 'Delta'
  ];

  const retrofitSystems = [
    {
      id: 'tesla-pw3',
      name: 'Tesla Powerwall 3 (AC Mode)',
      badge: 'Most Popular Retrofit',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      capacity: '13.5 kWh',
      backupPower: '11.5 kW Continuous',
      image: '/images/solutions/battery-bundle.jpg',
      description: 'The global benchmark for residential storage. Features a massive 11.5kW inverter output capable of running multi-split air conditioners and oven loads simultaneously.',
      features: [
        'Whole-home automatic blackout backup included',
        '10-year unlimited cycle manufacturer warranty',
        'Integrated thermal liquid regulation (-20°C to 50°C)',
        'Built-in Storm Watch weather alerts'
      ],
      specs: [
        { label: 'Usable Storage', value: '13.5 kWh' },
        { label: 'Continuous kW', value: '11.5 kW' },
        { label: 'Warranty', value: '10 Yrs Unlimited' },
        { label: 'Mounting', value: 'Floor or Wall' },
      ],
      highlight: true
    },
    {
      id: 'sungrow-sbr',
      name: 'Sungrow AC-Coupled SBR',
      badge: 'Modular & Expandable',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
      capacity: '9.6 – 19.2 kWh',
      backupPower: '5.0 – 10.0 kW Output',
      image: '/images/solutions/solar-kit.jpg',
      description: 'Modular high-voltage storage that can be sized to your exact household budget. Expand your storage in 3.2kWh blocks anytime as your family grows.',
      features: [
        'Safe, cobalt-free Lithium Iron Phosphate (LiFePO4)',
        'Stackable design without external connecting cables',
        '10-year Australian manufacturer backed warranty',
        'Rapid 4-hour switchboard installation'
      ],
      specs: [
        { label: 'Usable Storage', value: '9.6–19.2 kWh' },
        { label: 'Continuous kW', value: 'Up to 10.0 kW' },
        { label: 'Warranty', value: '10 Years' },
        { label: 'Scalability', value: '+3.2 kWh Blocks' },
      ],
      highlight: false
    },
    {
      id: 'sigenergy-sigenstor',
      name: 'Sigenergy SigenStor AC',
      badge: 'AI-Driven 0ms UPS',
      badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
      capacity: '8.0 – 48.0 kWh',
      backupPower: '6.0 – 25.0 kW Output',
      image: '/images/solutions/net-metering.jpg',
      description: 'Next-generation AI energy storage with true 0ms uninterruptible power supply (UPS) switchover. Zero computer reboots or digital clock resets during grid dropouts.',
      features: [
        'True 0-millisecond UPS blackout protection',
        'AI dynamic tariff arbitrage (charges at cheap rates)',
        '5-layer active battery safety and fire suppression',
        'Optional bi-directional DC EV fast charging'
      ],
      specs: [
        { label: 'Usable Storage', value: '8–48 kWh' },
        { label: 'Continuous kW', value: '6–25 kW' },
        { label: 'Warranty', value: '10 Years' },
        { label: 'Switchover', value: '0 ms (Instant)' },
      ],
      highlight: false
    }
  ];

  return (
    <section id="retrofit-systems" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-6xl mx-auto mb-10">
  
        <h2 className="text-2xl sm:text-3xl md:text-4xl max-w-3xl mx-auto font-extrabold text-slate-900 tracking-tight">
          Proven Battery Storage for <br /> <span className="text-emerald-600">Your Existing Inverter</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Select from tier-one, AC-coupled systems tested for seamless communication with Queensland rooftop solar systems.
        </p>
      </div>

   

      {/* 3 Asymmetrical Retrofit Cards (Normal, Small Containers with Rich Imagery) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-10">
        {retrofitSystems.map((sys) => (
          <div
            key={sys.id}
            className={`bg-white border transition-all flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md ${
              sys.highlight ? 'border-2 border-emerald-500 ring-1 ring-emerald-500/20' : 'border-slate-200/90 hover:border-slate-300'
            }`}
          >
            <div>
              {/* Image Header with Gradient & Tags */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900 group">
                <img
                  src={sys.image}
                  alt={sys.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                
                {/* Overlaid Badges */}
                <div className="absolute top-3 left-3">
                  <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md border ${sys.badgeColor}`}>
                    {sys.badge}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <span className="text-xs font-extrabold bg-slate-900/80 px-2.5 py-0.5 rounded border border-white/20">
                    {sys.capacity}
                  </span>
                  <span className="text-xs font-semibold text-amber-300">
                    {sys.backupPower}
                  </span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {sys.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {sys.description}
                </p>

                {/* 4 Mini Spec Containers Inside */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {sys.specs.map((sp) => (
                    <div key={sp.label} className="bg-slate-50 border border-slate-200/70 p-2 rounded-lg text-center">
                      <span className="text-[10px] font-bold text-slate-400 uppercase block">{sp.label}</span>
                      <span className="text-xs font-extrabold text-slate-900 mt-0.5 block">{sp.value}</span>
                    </div>
                  ))}
                </div>

                {/* Feature Checklist */}
                <div className="space-y-2 text-xs text-slate-700">
                  {sys.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action Section */}
            <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 mt-4">
              <Button
                to="/get-started/free-assessment"
                variant={sys.highlight ? 'accent-green' : 'outline'}
                size="md"
                fullWidth
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Check System Compatibility
              </Button>
            </div>
          </div>
        ))}
      </div>

    
    </section>
  );
};

export default AddBatteryRetrofitChoicesSection;
