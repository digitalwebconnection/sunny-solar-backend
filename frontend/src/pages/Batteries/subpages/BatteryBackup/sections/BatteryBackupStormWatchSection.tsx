import React from 'react';
import { CloudRain, ArrowRight } from 'lucide-react';
import { Button } from '../../../../../components/ui/Button';

export const BatteryBackupStormWatchSection: React.FC = () => {
  return (
    <div className="relative  overflow-hidden shadow-2xl bg-slate-950 border border-slate-800 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
        
        <div className="lg:col-span-7 p-8 sm:p-12 space-y-5">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <CloudRain className="w-4 h-4" />
            <span>BOM Radar Weather Watch Integration</span>
          </div>

          <h3 className="text-3xl font-serif font-bold leading-tight">
            Automated Severe Weather Pre-Charging Mode
          </h3>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            When a cyclone, hail squall, or severe thunderstorm warning is issued by the Bureau of Meteorology, our smart battery systems automatically enter emergency standby. The battery halts power export and immediately tops up to 100% capacity from available solar or off-peak grid power before the storm strikes.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="bg-white/5 p-3 rounded-xl border border-white/10">
              <div className="text-xs font-bold text-white">Live BOM Weather Feed</div>
              <div className="text-[11px] text-slate-400">Syncs every 15 minutes</div>
            </div>
            <div className="bg-white/5 p-3 rounded-xl border border-white/10">
              <div className="text-xs font-bold text-white">Black Start Microgrid</div>
              <div className="text-[11px] text-slate-400">Recharges from daytime solar</div>
            </div>
          </div>

          <div className="pt-2">
            <Button
              to="/get-started/free-assessment"
              variant="accent-green"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Get Storm Resilience Proposal
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5 h-80 lg:h-full min-h-[340px] relative">
          <img
            src="/images/solutions/battery-storm.jpg"
            alt="Home illuminated during severe thunderstorm blackout"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950 via-transparent to-transparent" />
        </div>

      </div>
    </div>
  );
};

export default BatteryBackupStormWatchSection;
