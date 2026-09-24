import React, { useState } from 'react';
import { 
  Sliders, 
  Home, 
  Lightbulb, 
  Wifi, 
  Tv, 
  ThermometerSnowflake, 
  Droplet, 
  HeartPulse, 
  ArrowRight,
  RotateCcw
} from 'lucide-react';
import { Badge } from '../../../../../components/ui/Badge';
import { Button } from '../../../../../components/ui/Button';

interface ApplianceItem {
  id: string;
  name: string;
  watts: number;
  icon: React.ElementType;
  essential: boolean;
  note: string;
}

export const BatteryBackupSimulatorSection: React.FC = () => {
  const [selectedAppliances, setSelectedAppliances] = useState<string[]>([
    'fridge',
    'lights',
    'wifi',
    'medical',
  ]);

  const appliances: ApplianceItem[] = [
    { id: 'fridge', name: 'Family Refrigerator & Freezer', watts: 150, icon: Home, essential: true, note: 'Protects food and medicine spoilage' },
    { id: 'lights', name: 'LED Home Lighting (10 Rooms)', watts: 120, icon: Lightbulb, essential: true, note: 'Entire home stays brightly lit' },
    { id: 'wifi', name: 'NBN Wi-Fi Modem & Laptop', watts: 90, icon: Wifi, essential: true, note: 'Keep emergency communications active' },
    { id: 'tv', name: 'Smart TV & News Broadcasts', watts: 120, icon: Tv, essential: false, note: 'Live emergency weather bulletins' },
    { id: 'ac', name: 'Inverter Split-System A/C (Bedrooms)', watts: 1200, icon: ThermometerSnowflake, essential: false, note: 'Keeps family cool during muggy storms' },
    { id: 'pump', name: 'Rainwater Pressure Pump', watts: 800, icon: Droplet, essential: false, note: 'Full household water pressure' },
    { id: 'medical', name: 'CPAP / Medical Equipment', watts: 70, icon: HeartPulse, essential: true, note: 'Life-critical uninterrupted power' },
  ];

  const toggleAppliance = (id: string) => {
    setSelectedAppliances((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectEssentials = () => {
    setSelectedAppliances(['fridge', 'lights', 'wifi', 'medical']);
  };

  const selectAll = () => {
    setSelectedAppliances(appliances.map((a) => a.id));
  };

  const clearAll = () => {
    setSelectedAppliances([]);
  };

  // Calculate total running load
  const totalWatts = appliances
    .filter((a) => selectedAppliances.includes(a.id))
    .reduce((sum, a) => sum + a.watts, 0);

  const totalKw = (totalWatts / 1000).toFixed(2);

  // Calculate runtimes (hours) assuming 90% usable depth of discharge with zero solar
  const runtimeHours = (capacityKwh: number) => {
    if (totalWatts === 0) return 0;
    const hours = (capacityKwh * 0.9) / (totalWatts / 1000);
    return Math.round(hours * 10) / 10;
  };

  const runtime9 = runtimeHours(9.6);
  const runtime13 = runtimeHours(13.5);
  const runtime25 = runtimeHours(25.6);

  return (
    <div id="simulator" className="max-w-7xl mx-auto scroll-mt-18 px-3 xs:px-4 sm:px-6">
      {/* Section Header */}
      <div className="max-w-3xl mb-6 sm:mb-8 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
          <Badge variant="navy" icon={<Sliders className="w-3.5 h-3.5" />}>
            Interactive Calculator
          </Badge>
          <span className="text-xs font-bold text-slate-500">AS/NZS 3000 Load Calculation</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 tracking-tight leading-snug">
          Simulate Your Household Outage Runtime
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
          Toggle the appliances you want powered during a blackout to see estimated runtimes across different battery capacities:
        </p>
      </div>

      {/* Mobile Layout (< lg): Live Top HUD + 2-Column Compact Touch Grid + Breakdown */}
      <div className="block lg:hidden space-y-4">
        {/* Mobile Live Telemetry Summary HUD */}
        <div className="bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-2xl p-4 shadow-lg border border-slate-800">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Current Backup Load
              </span>
              <div className="text-2xl font-extrabold font-mono text-amber-400">
                {totalWatts}W <span className="text-xs font-normal text-slate-400">({totalKw} kW)</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Tesla PW3 Runtime
              </span>
              <div className="text-2xl font-extrabold font-mono text-emerald-400">
                ~{runtime13}h
              </div>
            </div>
          </div>

          {/* Presets and Active Counter Row */}
          <div className="flex items-center justify-between pt-2.5 text-xs">
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded">
              {selectedAppliances.length} of {appliances.length} Active
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={selectEssentials}
                className="text-[11px] font-semibold text-slate-300 hover:text-white px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 transition-all cursor-pointer"
              >
                Essentials
              </button>
              <button
                type="button"
                onClick={selectAll}
                className="text-[11px] font-semibold text-slate-300 hover:text-white px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 transition-all cursor-pointer"
              >
                All
              </button>
              <button
                type="button"
                onClick={clearAll}
                className="text-[11px] font-semibold text-slate-400 hover:text-rose-400 px-1.5 py-0.5 rounded hover:bg-white/10 transition-all cursor-pointer"
                title="Clear all"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* 2-Column Compact Appliance Touch Grid */}
        <div>
          <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>Tap to Toggle Devices</span>
            <span className="text-[11px] font-normal text-slate-400">Instant runtime update</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {appliances.map((app) => {
              const Icon = app.icon;
              const isSelected = selectedAppliances.includes(app.id);
              return (
                <button
                  key={app.id}
                  type="button"
                  onClick={() => toggleAppliance(app.id)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs ring-1 ring-emerald-500'
                      : 'bg-white text-slate-700 border-slate-200/90 shadow-2xs hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-1 mb-2">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span
                      className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded ${
                        isSelected
                          ? 'bg-emerald-500 text-slate-950'
                          : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      {isSelected ? 'ON' : 'OFF'}
                    </span>
                  </div>

                  <div>
                    <div className="text-[11px] xs:text-xs font-bold leading-tight line-clamp-1">
                      {app.name}
                    </div>
                    <div className="flex items-center justify-between mt-1 text-[11px] font-mono">
                      <span className={isSelected ? 'text-amber-400 font-bold' : 'text-slate-900 font-semibold'}>
                        {app.watts}W
                      </span>
                      {app.essential && (
                        <span className={`text-[9px] font-semibold ${isSelected ? 'text-emerald-400' : 'text-emerald-600'}`}>
                          Essential
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Battery Runtime Breakdown Card */}
        <div className="bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-2xl p-4 sm:p-5 space-y-3.5 shadow-md border border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Estimated Dark-Hours Runtimes
            </span>
            <span className="text-[10px] text-amber-400 font-semibold">Zero Sun Grid Loss</span>
          </div>

          <div className="space-y-2">
            <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center justify-between text-xs">
              <div>
                <div className="font-bold text-white">Sungrow 9.6 kWh SBR</div>
                <div className="text-[10px] text-slate-400">Essential Circuit Storage</div>
              </div>
              <div className="text-right">
                <span className="text-base font-bold font-mono text-emerald-400">~{runtime9}h</span>
              </div>
            </div>

            <div className="bg-amber-500/10 p-3 rounded-xl border border-amber-500/30 flex items-center justify-between text-xs">
              <div>
                <div className="font-bold text-white">Tesla Powerwall 3 (13.5 kWh)</div>
                <div className="text-[10px] text-amber-300 font-semibold">Flagship Whole-Home</div>
              </div>
              <div className="text-right">
                <span className="text-lg font-bold font-mono text-amber-400">~{runtime13}h</span>
              </div>
            </div>

            <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center justify-between text-xs">
              <div>
                <div className="font-bold text-white">High-Capacity Bank (25.6 kWh)</div>
                <div className="text-[10px] text-slate-400">3-Phase / Dual Powerwall</div>
              </div>
              <div className="text-right">
                <span className="text-base font-bold font-mono text-blue-400">~{runtime25}h</span>
              </div>
            </div>
          </div>

          <p className="text-[11px] text-slate-400 italic">
            * When the sun rises, rooftop solar panels replenish the battery, extending runtimes indefinitely.
          </p>

          <div className="pt-1">
            <Button
              to="/get-started/free-assessment"
              variant="accent-green"
              size="md"
              fullWidth
              icon={<ArrowRight className="w-4 h-4" />}
              className="font-bold py-3"
            >
              Custom Backup Design Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop & Tablet Layout (>= lg: 12-Column Grid) */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
        {/* Appliance Selector Grid */}
        <div className="lg:col-span-7 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {appliances.map((app) => {
              const Icon = app.icon;
              const isSelected = selectedAppliances.includes(app.id);
              return (
                <button
                  key={app.id}
                  type="button"
                  onClick={() => toggleAppliance(app.id)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-start justify-between gap-3 ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-1 ring-emerald-500'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white text-slate-600 border border-slate-200'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold leading-tight">{app.name}</div>
                      <div className={`text-[11px] mt-0.5 ${isSelected ? 'text-slate-400' : 'text-slate-500'}`}>
                        {app.note}
                      </div>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className={`text-xs font-mono font-bold block ${
                      isSelected ? 'text-amber-400' : 'text-slate-900'
                    }`}>
                      {app.watts}W
                    </span>
                    <span className={`text-[10px] font-bold ${
                      isSelected ? 'text-emerald-400' : 'text-slate-400'
                    }`}>
                      {isSelected ? 'ON' : 'OFF'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <p className="text-xs text-slate-500 italic pt-2">
            * Note: When the sun rises, your solar panels replenish the battery in real time, extending runtimes indefinitely for multi-day outages.
          </p>
        </div>

        {/* Live Runtime Results Display */}
        <div className="lg:col-span-5 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl border border-slate-800">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Continuous Load</span>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded">
                {selectedAppliances.length} Devices Active
              </span>
            </div>
            <div className="mt-2 text-3xl font-extrabold font-mono text-amber-400">
              {totalWatts} Watts <span className="text-sm font-normal text-slate-400">({totalKw} kW)</span>
            </div>
          </div>

          {/* Runtimes per Battery Capacity */}
          <div className="space-y-3 pt-3 border-t border-slate-800">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Estimated Dark-Hours Runtime (Zero Sun):
            </span>

            <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white">Sungrow 9.6 kWh SBR</div>
                <div className="text-[10px] text-slate-400">Essential Circuit Storage</div>
              </div>
              <div className="text-right">
                <span className="text-lg font-bold font-mono text-emerald-400">~{runtime9} Hours</span>
              </div>
            </div>

            <div className="bg-amber-500/10 p-3.5 rounded-xl border border-amber-500/30 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white">Tesla Powerwall 3 (13.5 kWh)</div>
                <div className="text-[10px] text-amber-300 font-semibold">Flagship Whole-Home Backup</div>
              </div>
              <div className="text-right">
                <span className="text-xl font-bold font-mono text-amber-400">~{runtime13} Hours</span>
              </div>
            </div>

            <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white">High-Capacity Bank (25.6 kWh)</div>
                <div className="text-[10px] text-slate-400">3-Phase / Dual Powerwall</div>
              </div>
              <div className="text-right">
                <span className="text-lg font-bold font-mono text-blue-400">~{runtime25} Hours</span>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <Button
              to="/get-started/free-assessment"
              variant="accent-green"
              size="md"
              fullWidth
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Custom Backup Design Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatteryBackupSimulatorSection;
