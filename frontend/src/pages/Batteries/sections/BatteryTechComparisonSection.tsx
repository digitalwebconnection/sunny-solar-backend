import React, { useState } from 'react';
import { Check, X, Shield, Sparkles, ArrowRight, Award, Cpu, Flame, BatteryCharging } from 'lucide-react';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';

export const BatteryTechComparisonSection: React.FC = () => {
  const [selectedBattery, setSelectedBattery] = useState<'tesla' | 'sungrow' | 'enphase' | 'alpha'>('tesla');

  const specs = [
    {
      feature: 'Usable Energy Capacity',
      tesla: '13.5 kWh',
      sungrow: '9.6 to 25.6 kWh (Modular)',
      enphase: '5.0 to 20.0 kWh (Modular)',
      alpha: '10.1 to 20.2 kWh',
    },
    {
      feature: 'Continuous Backup Output',
      tesla: '11.5 kW (Starts heavy A/C)',
      sungrow: '6.0 kW to 10.0 kW',
      enphase: '3.84 kW per 5P unit',
      alpha: '5.0 kW to 10.0 kW',
    },
    {
      feature: 'Peak Surge Capacity (10s)',
      tesla: '18.5 kW (Extreme Surge)',
      sungrow: '12.0 kW',
      enphase: '7.68 kW (per 2 units)',
      alpha: '10.0 kW',
    },
    {
      feature: 'Built-in Solar Inverter',
      tesla: 'Yes (11.5 kW 6x MPPT Built-In)',
      sungrow: 'Requires Sungrow Hybrid',
      enphase: 'Integrated 6x Microinverters',
      alpha: 'Integrated Hybrid Inverter',
    },
    {
      feature: 'Battery Chemistry',
      tesla: 'LiFePO4 (LFP Cobalt-Free)',
      sungrow: 'LiFePO4 (LFP Cobalt-Free)',
      enphase: 'LiFePO4 (LFP Cobalt-Free)',
      alpha: 'LiFePO4 (LFP Cobalt-Free)',
    },
    {
      feature: 'Warranty Coverage',
      tesla: '10 Years (Unlimited Cycles)',
      sungrow: '10 Years (6,000 Cycles / 70%)',
      enphase: '15 Years (Industry Longest)',
      alpha: '10 Years / 6,000 Cycles',
    },
    {
      feature: 'Blackout Transfer Time',
      tesla: '<100ms (Automated Gateway)',
      sungrow: '<20ms (with EPS Switch)',
      enphase: '<100ms (System Controller)',
      alpha: '<100ms (Internal EPS)',
    },
    {
      feature: 'Storm Watch Integration',
      tesla: 'Yes (Automated BOM feed)',
      sungrow: 'Yes (iSolarCloud app mode)',
      enphase: 'Yes (Storm Guard app)',
      alpha: 'Manual toggle in app',
    },
  ];

  const batteryProfiles = {
    tesla: {
      name: 'Tesla Powerwall 3',
      tag: 'Best for Whole-Home Backup & Heavy Ducted Air-Con',
      desc: 'The benchmark of residential storage. Features a massive 11.5kW built-in solar inverter with 6 MPPT inputs, allowing you to connect up to 20kW of solar panels directly into the battery without extra inverters on your wall.',
      pros: ['Starts any residential central ducted A/C unit', 'Unlimited cycle 10-year warranty', 'Sleekest industrial design & app UX'],
      verdict: 'Our #1 recommendation for families wanting seamless whole-home blackout resilience and maximum solar expansion.',
    },
    sungrow: {
      name: 'Sungrow SBR High-Voltage Modular',
      tag: 'Best Modular Value & 3-Phase Commercial Balance',
      desc: 'Stackable 3.2kWh blocks allow you to start with 9.6kWh and expand up to 25.6kWh as your energy needs or EV charging demands grow. Outstanding cost-per-kilowatt-hour value.',
      pros: ['Expandable modular architecture anytime', 'Seamless 3-phase switchboard symmetry', 'Proven reliability in Queensland heat'],
      verdict: 'The smart choice for budget-conscious homeowners wanting high capacity and clean stackable aesthetics.',
    },
    enphase: {
      name: 'Enphase IQ Battery 5P',
      tag: 'Longest Warranty & Safest Low-Voltage AC Design',
      desc: 'Built with 6 embedded IQ8 microinverters per unit, meaning there is zero high-voltage DC on your wall and zero single point of failure. Backed by an industry-leading 15-year standard warranty.',
      pros: ['15-year warranty (5 years longer than competitors)', 'Modular 5kWh building blocks', 'Safe low-voltage AC coupling'],
      verdict: 'Ideal for tech-savvy homeowners and existing Enphase microinverter rooftop solar owners wanting maximum lifespan.',
    },
    alpha: {
      name: 'AlphaESS SMILE-G3',
      tag: 'All-in-One Value Workhorse',
      desc: 'Combines an integrated hybrid inverter, energy management controller, and modular LFP batteries into a compact single-column enclosure.',
      pros: ['Extremely competitive pricing point', 'Compact vertical footprint', 'High continuous discharge rate'],
      verdict: 'Excellent entry point for households seeking reliable blackout protection on a sensible upfront budget.',
    },
  };

  const activeProfile = batteryProfiles[selectedBattery];

  return (
    <section className="py-14 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-6xl mx-auto mb-6">

          <h2 className="text-3xl sm:text-4xl max-w-3xl mx-auto font-serif font-bold text-slate-950 mt-3 tracking-tight">
            Compare Top Battery Technologies Side-by-Side
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            We are 100% brand agnostic. Our Master Electricians recommend the hardware that best matches your switchboard capacity, roof orientation, and family energy profile.
          </p>
        </div>

        

   

        {/* Detailed Side-by-Side Comparison Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
          <table className="w-full text-left border-collapse min-w-[760px]">
            <thead>
              <tr className="bg-slate-900 text-white text-xs sm:text-sm">
                <th className="p-4 sm:p-5 font-bold">Key Specification</th>
                <th className="p-4 sm:p-5 font-bold text-amber-400 bg-slate-800">
                  Tesla Powerwall 3
                </th>
                <th className="p-4 sm:p-5 font-bold">Sungrow SBR Series</th>
                <th className="p-4 sm:p-5 font-bold">Enphase IQ 5P</th>
                <th className="p-4 sm:p-5 font-bold">AlphaESS SMILE-G3</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
              {specs.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-slate-900 bg-slate-50/70">{row.feature}</td>
                  <td className="p-4 sm:p-5 font-semibold text-amber-950 bg-amber-50/40">
                    {row.tesla}
                  </td>
                  <td className="p-4 sm:p-5 text-slate-700">{row.sungrow}</td>
                  <td className="p-4 sm:p-5 text-slate-700">{row.enphase}</td>
                  <td className="p-4 sm:p-5 text-slate-700">{row.alpha}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Calculator Prompt */}
        <div className="mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            to="/calculators/battery-size"
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Calculate Which Battery Fits Your Kilowatt-Hours
          </Button>
          <Button
            to="/get-started/free-assessment"
            variant="primary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            className="shadow-md"
          >
            Request Tailored Battery Proposal
          </Button>
        </div>

      </div>
    </section>
  );
};

export default BatteryTechComparisonSection;
