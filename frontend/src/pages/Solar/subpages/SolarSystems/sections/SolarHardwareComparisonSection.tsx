import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sun, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Award, 
  Activity, 
  Sparkles,
  Wind
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export const SolarHardwareComparisonSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'panels' | 'inverters' | 'racking' | 'monitoring'>('panels');

  const hardwareComponents = {
    panels: {
      tag: 'Component 01 • Solar Generation',
      name: 'Tier-1 N-Type TOPCon & HJT Modules',
      leadBrand: 'AIKO Neostar & REC Alpha Pure-R',
      image: '/images/about/solar-installation-aerial.jpg',
      statPrimary: '23.6%',
      statPrimaryLabel: 'Peak Cell Efficiency',
      statSecondary: '-0.24%',
      statSecondaryLabel: 'Heat Loss / °C (Best in AU)',
      description:
        'Queensland metal roofs reach 65°C on summer afternoons. We install N-Type All-Back-Contact (ABC) and Heterojunction (HJT) cells that produce up to 25% more electricity during extreme heatwaves compared to older P-type panels.',
      highlights: [
        'Zero front-side busbars for 100% active solar absorption and pure black aesthetics',
        'Cell-level bypass circuitry eliminates hot spots and prevents string power collapse',
        '25-year comprehensive warranty covering parts, performance, AND certified labor',
        'Tested to 7,000 Pa severe cyclonic wind loads and coastal salt-mist corrosion',
      ],
      electricianVerdict:
        'Cheap panels degrade and turn brown under Queensland UV in 3 to 5 years. N-Type silicon eliminates Light-Induced Degradation, guaranteeing 88%+ output after 30 years.',
    },
    inverters: {
      tag: 'Component 02 • Power Conversion & Storage',
      name: 'Active-Cooled & DC Hybrid Inverters',
      leadBrand: 'Fronius Primo/Symo & Sungrow Hybrid',
      image: '/images/solutions/solar-kit.jpg',
      statPrimary: '98.4%',
      statPrimaryLabel: 'Peak Conversion Yield',
      statSecondary: '<20ms',
      statSecondaryLabel: 'Blackout Transfer Speed',
      description:
        'The inverter is the workhorse of your system. We install heavy-duty Austrian Fronius inverters with active fan cooling to prevent heat derating, and Sungrow Hybrid units ready for seamless battery storage.',
      highlights: [
        'Active forced-cooling prevents summer power throttling on sunny exterior walls',
        'Direct plug-in battery interface saves $2,000+ in future battery retrofit costs',
        'Sub-20 millisecond blackout changeover keeps refrigeration and Wi-Fi online',
        'PV Point daytime emergency power socket functions even without a battery',
      ],
      electricianVerdict:
        'Passive inverters without fans throttle down power as soon as ambient air hits 35°C. Active cooling protects internal capacitors and extends inverter lifespan to 15–20 years.',
    },
    racking: {
      tag: 'Component 03 • Structural Engineering',
      name: 'Cyclone-Rated Clenergy Mounting Hardware',
      leadBrand: 'Clenergy PV-ezRack Heavy-Duty',
      image: '/images/about/solar-warehouse.jpg',
      statPrimary: '7,000 Pa',
      statPrimaryLabel: 'Mechanical Storm Rating',
      statSecondary: 'Region C',
      statSecondaryLabel: 'Severe Cyclone Wind Certified',
      description:
        'Your solar system is only as secure as the mounting framing holding it to your roof. We exclusively use anodized marine-grade aluminium rails and stainless-steel roof brackets engineered for Queensland storm seasons.',
      highlights: [
        'Custom bracket mounting for tile, Colorbond, Klip-Lok, and corrugated iron',
        'Zero penetration clamps used on standing-seam and commercial metal profiles',
        '10-year roof watertight seal guarantee with zero cracked tiles or leaks',
        'Fully compliant with Australian Standards AS/NZS 1170.2 and AS/NZS 5033',
      ],
      electricianVerdict:
        'Cheap installers use flimsy unbranded rails that flex in high winds, causing micro-cracking in the silicon cells. Clenergy cyclone-rated hardware ensures the panels never move.',
    },
    monitoring: {
      tag: 'Component 04 • Smart Energy Management',
      name: 'Real-Time Consumption & Grid Metering',
      leadBrand: 'Smart WiFi Energy Meter & Mobile Cloud',
      image: '/images/about/happy-family-solar.jpg',
      statPrimary: '1 sec',
      statPrimaryLabel: 'Live Telemetry Refresh',
      statSecondary: '100%',
      statSecondaryLabel: 'Solar Self-Consumption Tracking',
      description:
        'Standard solar setups only show how much solar you produce, leaving you blind to what your home consumes. Our smart meter tracks live home energy draw, solar exports, and grid usage second-by-second on your smartphone.',
      highlights: [
        'Live smartphone dashboard showing exact solar generation, home draw & grid feeds',
        'Automated alerts if solar output drops or an appliance consumes excessive power',
        'Accurate solar export tariff tracking to maximize quarterly power bill credits',
        'Solar analytics that recommend the exact ideal battery size for your lifestyle',
      ],
      electricianVerdict:
        'Without consumption monitoring, homeowners export cheap solar for 6c and buy it back at night for 34c. Smart metering gives you the data to shift heavy pool pumps and AC to solar hours.',
    },
  };

  const current = hardwareComponents[activeTab];

  const comparisonPoints = [
    {
      metric: 'Solar Cell Technology',
      sunny: 'Tier-1 N-Type TOPCon & HJT Dual-Glass',
      generic: 'Outdated P-Type Mono or B-Grade Seconds',
    },
    {
      metric: 'Summer Heat Derating',
      sunny: '-0.24% to -0.26%/°C (Retains 90%+ in 40°C heat)',
      generic: '-0.42%/°C (Loses up to 35% power in summer)',
    },
    {
      metric: 'Inverter Thermal Management',
      sunny: 'Active forced-air cooling & European engineering',
      generic: 'Passive cheap heat-sinks (throttles at 35°C)',
    },
    {
      metric: 'Workmanship & Roof Guarantee',
      sunny: '10-Year In-House Master Electrician Written Guarantee',
      generic: '1-Year or outsourced to sub-contractors',
    },
    {
      metric: 'Australian Distributor Warranty',
      sunny: 'Full local office support (Parts, Output AND Labor)',
      generic: 'Overseas manufacturer with no Australian office',
    },
    {
      metric: 'Mounting & Storm Resistance',
      sunny: 'Clenergy Cyclone-Rated Region C Hardware',
      generic: 'Thin unbranded aluminium rails prone to flex',
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-6xl mx-auto text-center mb-14">
          <Badge variant="amber">The Hardware Standard</Badge>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-3 tracking-tight">
            The Anatomy of an Engineered Solar System
          </h2>
          <p className="mt-3 text-slate-900 text-sm sm:text-base leading-relaxed">
            A solar system is an 30-year electrical power station on your roof. We refuse to install white-label mystery parts. Explore the four core hardware pillars behind every Sunny Solar installation.
          </p>

          {/* Interactive 4-Pillar Nav Strip */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-10 p-1.5 rounded-full bg-slate-100 border border-slate-300 shadow-inner max-w-3xl mx-auto">
            <button
              onClick={() => setActiveTab('panels')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'panels'
                  ? 'bg-amber-500 text-slate-950 shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Sun className="w-4 h-4" />
              <span>1. Solar Panels</span>
            </button>

            <button
              onClick={() => setActiveTab('inverters')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'inverters'
                  ? 'bg-amber-500 text-slate-950 shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>2. Inverters</span>
            </button>

            <button
              onClick={() => setActiveTab('racking')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'racking'
                  ? 'bg-amber-500 text-slate-950 shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Wind className="w-4 h-4" />
              <span>3. Cyclone Racking</span>
            </button>

            <button
              onClick={() => setActiveTab('monitoring')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'monitoring'
                  ? 'bg-amber-500 text-slate-950 shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>4. Smart Meter</span>
            </button>
          </div>
        </div>

        {/* Feature Spotlight Spread (Media + Engineering Narrative) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pb-16"
          >
            {/* Left: Cinematic Installation Media with Floating Stat Pills */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-4/3.5 rounded-lg overflow-hidden shadow-black shadow-xl border border-slate-200">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent" />
                
                {/* Image Overlay Banner */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold block">
                      Lead Hardware Line
                    </span>
                    <span className="text-base font-serif font-bold text-white">
                      {current.leadBrand}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-amber-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    CEC Approved
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Technical Narrative & Master Electrician Note */}
            <div className="lg:col-span-6 space-y-6 pt-4 lg:pt-0">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 block mb-1">
                  {current.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 leading-tight">
                  {current.name}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {current.description}
              </p>

              {/* Highlights List */}
              <div className="space-y-2.5 pt-2">
                {current.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Electrician Verdict Quote */}
              <div className="p-4 rounded-xl bg-amber-50/60 border-l-4 border-amber-500 text-xs sm:text-sm text-slate-800 space-y-1">
                <div className="font-mono font-bold uppercase tracking-wider text-amber-800 text-[10px] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                  <span>Master Electrician Insight</span>
                </div>
                <p className="italic text-slate-700 leading-relaxed">
                  "{current.electricianVerdict}"
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex items-center gap-4">
                <Button
                  to="/get-started/free-assessment"
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Configure My System Proposal
                </Button>
                <span className="text-xs font-mono text-slate-500">
                  100% In-House Installers
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* The Tier-1 Standard vs Cheap Generic Solar Comparison */}
        <div className="mt-12 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-3xl font-serif font-bold text-slate-950">
              Sunny Solar Tier-1 Standard vs. Cheap Generic Solar
            </h3>
            <p className="text-xs sm:text-sm text-slate-800 mt-2">
              Why thousands of Queensland families choose engineered quality over bargain packages that fail in summer heat.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-160">
              <thead>
                <tr className="border-b-2 border-slate-900 text-lg font-mono uppercase tracking-wider">
                  <th className="py-4 px-4 text-slate-900 font-bold w-1/3">Key Evaluation Point</th>
                  <th className="py-4 px-6 text-slate-950 font-bold bg-amber-500/10 w-1/3">
                    <span className="flex items-center gap-1.5 text-amber-800">
                      <Sparkles className="w-4 h-4 text-amber-600" />
                      Sunny Solar Tier-1 Standard
                    </span>
                  </th>
                  <th className="py-4 px-6 text-slate-900 font-semibold w-1/3">
                    Budget Advertised Packages
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                {comparisonPoints.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-4 px-4 font-semibold text-slate-800">
                      {row.metric}
                    </td>
                    <td className="py-4 px-6 font-medium text-slate-950 bg-amber-500/5">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{row.sunny}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-500">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span>{row.generic}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section Bottom Assurance Strip */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-500" />
            <span className="font-medium text-slate-700">
              All components Clean Energy Council (CEC) Approved and backed by Australian warranties.
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-600 font-mono">
            <span>• 10-Yr Roof Workmanship</span>
            <span>• Energex Pre-Approved</span>
            <span>• Zero Subcontractors</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SolarHardwareComparisonSection;
