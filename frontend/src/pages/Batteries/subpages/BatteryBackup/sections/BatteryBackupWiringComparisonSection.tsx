import React from 'react';
import { Home, Zap, Check } from 'lucide-react';
import { Badge } from '../../../../../components/ui/Badge';
import { Button } from '../../../../../components/ui/Button';

export const BatteryBackupWiringComparisonSection: React.FC = () => {
  return (
    <div className='max-w-7xl mx-auto px-6'>
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Badge variant="emerald">Switchboard Engineering</Badge>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-3 tracking-tight">
          Whole-Home vs Essential Circuit Backup
        </h2>
        <p className="mt-4 text-slate-600 text-base sm:text-lg">
          Understand the two primary electrical wiring methodologies configured by our Master Electricians:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Option A: Whole-Home */}
        <div className="bg-white rounded-xl border-2 border-amber-500/80 p-8 shadow-md relative flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <Home className="w-6 h-6" />
              </div>
              <Badge variant="amber">Top Choice for Families</Badge>
            </div>

            <h3 className="text-2xl font-bold text-slate-950 mb-2">Whole-Home Backup</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              Every electrical outlet, appliance, and light fixture in your entire home remains powered. When the grid collapses, you won’t even notice your neighbors are in the dark.
            </p>

            <div className="space-y-3 pb-6 border-b border-slate-100">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Powers heavy central ducted air conditioning & kitchen appliances</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Sub-100ms automatic transfer switch (PCs, Wi-Fi & clocks never reboot)</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Rooftop solar continues generating electricity & refilling battery during day</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Requires 11.5kW+ surge capacity (Tesla Powerwall 3 or dual inverters)</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-2">
            <Button
              to="/get-started/free-assessment"
              variant="primary"
              size="md"
              fullWidth
            >
              Select Whole-Home Backup
            </Button>
          </div>
        </div>

        {/* Option B: Essential Circuits */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <Badge variant="emerald">Extended Runtime</Badge>
            </div>

            <h3 className="text-2xl font-bold text-slate-950 mb-2">Essential Circuit Backup</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              A dedicated backup sub-board isolates your critical loads (refrigeration, lighting, Wi-Fi, and medical equipment) while disconnecting heavy energy hogs like pool pumps and hot water.
            </p>

            <div className="space-y-3 pb-6 border-b border-slate-100">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Significantly extends battery runtime to 4–7 days during severe crises</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Prevents accidental battery depletion from ovens or electric vehicle charging</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Lower equipment cost; pairs perfectly with Sungrow 6kW hybrid & Enphase 5P</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Full sub-board electrical surge isolation complying with AS/NZS 3000</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-2">
            <Button
              to="/get-started/free-assessment"
              variant="outline"
              size="md"
              fullWidth
            >
              Select Essential Circuits
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BatteryBackupWiringComparisonSection;
