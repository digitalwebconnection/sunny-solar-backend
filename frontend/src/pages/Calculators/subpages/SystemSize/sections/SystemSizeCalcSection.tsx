import React, { useState } from 'react';
import { Users, ArrowRight, RotateCcw, Sun } from 'lucide-react';
import { Button } from '../../../../../components/ui/Button';

export const SystemSizeCalcSection: React.FC = () => {
  const [occupants, setOccupants] = useState<number>(4);
  const [airConType, setAirConType] = useState<'ducted' | 'split' | 'none'>('ducted');
  const [hasPool, setHasPool] = useState<boolean>(true);
  const [hasEv, setHasEv] = useState<boolean>(false);
  const [futureBattery, setFutureBattery] = useState<boolean>(true);

  /* Calculation logic */
  let dailyKwh = (occupants || 1) * 5.5;
  if (airConType === 'ducted') dailyKwh += 12;
  if (airConType === 'split') dailyKwh += 6;
  if (hasPool) dailyKwh += 7;
  if (hasEv) dailyKwh += 9;
  if (futureBattery) dailyKwh += 6;

  // In QLD, 1 kW of solar yields ~4.2 kWh/day
  const neededKw = Math.ceil((dailyKwh / 4.2) * 10) / 10;
  
  // Recommend nearest standard array
  let recommendedSystem = '6.6 kW';
  let panelCount = 15;
  let roofArea = '30 m²';
  if (neededKw > 7.0 && neededKw <= 9.5) {
    recommendedSystem = '8.8 kW';
    panelCount = 20;
    roofArea = '40 m²';
  } else if (neededKw > 9.5 && neededKw <= 12.0) {
    recommendedSystem = '10.0 kW';
    panelCount = 23;
    roofArea = '46 m²';
  } else if (neededKw > 12.0) {
    recommendedSystem = '13.2 kW';
    panelCount = 30;
    roofArea = '60 m²';
  }

  const dailyProduction = Math.round(panelCount * 0.44 * 4.2);

  const resetDefaults = () => {
    setOccupants(4);
    setAirConType('ducted');
    setHasPool(true);
    setHasEv(false);
    setFutureBattery(true);
  };

  const occupantPresets = [1, 2, 3, 4, 5, 6];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="p-6 sm:p-8">
        
        {/* Simple Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-200">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-950 tracking-tight">
              Calculate Your Ideal System Size
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Select your household features to determine the ideal kilowatt array capacity and panel count.
            </p>
          </div>
          <button
            type="button"
            onClick={resetDefaults}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-amber-600 bg-slate-100 hover:bg-slate-200/80 px-3 py-1.5 rounded-lg transition-colors self-start sm:self-auto cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>
        </div>

        {/* 2-Column Normal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-start">
          
          {/* Left: Simple Inputs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Household Occupants */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-slate-900 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-amber-500" />
                  Household Occupants
                </label>
                <div className="relative flex items-center">
                  <input
                    type="number"
                    min="1"
                    max="12"
                    step="1"
                    value={occupants === 0 ? '' : occupants}
                    onChange={(e) => {
                      const val = e.target.value === '' ? 1 : Math.max(1, Math.min(12, Number(e.target.value)));
                      setOccupants(val);
                    }}
                    className="w-28 px-3 py-1 text-base font-bold text-amber-700 bg-amber-50 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-center shadow-2xs"
                  />
                  <span className="ml-2 text-xs font-semibold text-slate-500">People</span>
                </div>
              </div>
              
              <input
                type="range"
                min="1"
                max="8"
                step="1"
                value={Math.min(Math.max(occupants || 1, 1), 8)}
                onChange={(e) => setOccupants(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-100 rounded-lg"
              />

              {/* Quick Presets */}
              <div className="flex items-center gap-2 mt-2.5">
                <span className="text-[11px] text-slate-400 font-medium">Quick select:</span>
                {occupantPresets.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setOccupants(preset)}
                    className={`text-xs px-2.5 py-1 rounded-md border font-medium transition-colors cursor-pointer ${
                      occupants === preset
                        ? 'bg-amber-500 text-white border-amber-500'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {preset} {preset === 1 ? 'person' : 'people'}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Air Conditioning Setup */}
            <div>
              <label className="text-sm font-semibold text-slate-900 block mb-2">
                Air Conditioning Setup
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'ducted', label: 'Ducted A/C', sub: 'Whole house' },
                  { id: 'split', label: 'Split Systems', sub: '1 - 3 units' },
                  { id: 'none', label: 'Fans / No A/C', sub: 'Minimal cooling' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setAirConType(item.id as any)}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      airConType === item.id
                        ? 'bg-amber-500 text-white border-amber-500 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span className="text-xs font-bold block">{item.label}</span>
                    <span className={`text-[10px] block mt-0.5 ${
                      airConType === item.id ? 'text-amber-100' : 'text-slate-400'
                    }`}>
                      {item.sub}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Additional Power Draw Checkboxes */}
            <div>
              <label className="text-sm font-semibold text-slate-900 block mb-2">
                Additional Major Power Loads
              </label>
              <div className="space-y-2.5">
                <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={hasPool}
                    onChange={(e) => setHasPool(e.target.checked)}
                    className="w-4 h-4 accent-amber-500 rounded cursor-pointer"
                  />
                  <div className="text-xs">
                    <span className="font-semibold text-slate-900 block">Swimming Pool / Spa Heater</span>
                    <span className="text-slate-500">Adds ~7 kWh daily daytime filtration and heating demand</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={hasEv}
                    onChange={(e) => setHasEv(e.target.checked)}
                    className="w-4 h-4 accent-amber-500 rounded cursor-pointer"
                  />
                  <div className="text-xs">
                    <span className="font-semibold text-slate-900 block">Electric Vehicle (EV) Charger</span>
                    <span className="text-slate-500">Requires dedicated solar generation to charge with free sun power</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={futureBattery}
                    onChange={(e) => setFutureBattery(e.target.checked)}
                    className="w-4 h-4 accent-amber-500 rounded cursor-pointer"
                  />
                  <div className="text-xs">
                    <span className="font-semibold text-slate-900 block">Planning to Add Battery Storage</span>
                    <span className="text-slate-500">Sizes extra panel capacity to store surplus energy for nighttime use</span>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* Right: Simple, Normal Results (5 cols) */}
          <div className="lg:col-span-5 bg-slate-50 rounded-xl border border-slate-200/80 p-5 sm:p-6 space-y-4">
            
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Sizing Recommendation
              </span>
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                ~{Math.round(dailyKwh)} kWh / day load
              </span>
            </div>

            {/* Primary Hero Stat Card */}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-center">
              <span className="text-xs font-medium text-amber-800 uppercase tracking-wider block">
                Recommended System Size
              </span>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-amber-700 mt-1">
                {recommendedSystem}
              </div>
              <p className="text-xs text-amber-700/80 mt-1">
                Optimal array capacity for your household appliance and occupant profile
              </p>
            </div>

            {/* Secondary Stat Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              
              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <span className="text-[11px] font-medium text-slate-500 block">Panel Count</span>
                <span className="text-lg font-bold text-slate-900 mt-0.5 block">
                  {panelCount} Panels
                </span>
                <span className="text-[10px] text-slate-400">440W N-Type TOPCon</span>
              </div>

              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <span className="text-[11px] font-medium text-slate-500 block">Roof Area Needed</span>
                <span className="text-lg font-bold text-emerald-600 mt-0.5 block">
                  ~{roofArea}
                </span>
                <span className="text-[10px] text-slate-400">Unobstructed roof space</span>
              </div>

              <div className="col-span-full p-3 bg-white rounded-lg border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-medium text-slate-500 block">Estimated Daily Generation</span>
                  <span className="text-base font-bold text-slate-900">{dailyProduction} kWh / day</span>
                </div>
                <Sun className="w-5 h-5 text-amber-500" />
              </div>

            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Button
                to="/get-started/free-assessment"
                variant="primary"
                size="md"
                fullWidth
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Get Custom Roof Design & Quote
              </Button>
            </div>

            {/* Note */}
            <p className="text-[11px] text-slate-400 text-center leading-relaxed">
              Based on standard Queensland solar irradiance yields of ~4.2 kWh per kW capacity.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SystemSizeCalcSection;
