import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, CheckCircle2, Zap, ShieldCheck, ArrowRight, AlertCircle } from 'lucide-react';

interface PostcodeResult {
  postcode: string;
  region: string;
  network: string;
  fastTrack: boolean;
  batteryRebate: string;
  singlePhaseLimit: string;
  threePhaseLimit: string;
}

const knownRegions: Record<string, { region: string; network: string; rebate: string }> = {
  // Gold Coast
  '4217': { region: 'Gold Coast (Surfers Paradise / Benowa)', network: 'Energex', rebate: '$3,000 – $4,000 QLD Booster' },
  '4218': { region: 'Gold Coast (Broadbeach / Mermaid)', network: 'Energex', rebate: '$3,000 – $4,000 QLD Booster' },
  '4220': { region: 'Gold Coast (Burleigh Heads / Miami)', network: 'Energex', rebate: '$3,000 – $4,000 QLD Booster' },
  '4221': { region: 'Gold Coast (Elanora / Palm Beach)', network: 'Energex', rebate: '$3,000 – $4,000 QLD Booster' },
  '4226': { region: 'Gold Coast (Robina / Clear Island Waters)', network: 'Energex', rebate: '$3,000 – $4,000 QLD Booster' },
  '4215': { region: 'Gold Coast (Southport / Labrador)', network: 'Energex', rebate: '$3,000 – $4,000 QLD Booster' },
  '4209': { region: 'Gold Coast (Coomera / Upper Coomera)', network: 'Energex', rebate: '$3,000 – $4,000 QLD Booster' },
  // Brisbane
  '4000': { region: 'Brisbane CBD & Spring Hill', network: 'Energex', rebate: '$3,000 – $4,000 QLD Booster' },
  '4006': { region: 'Brisbane (Fortitude Valley / New Farm)', network: 'Energex', rebate: '$3,000 – $4,000 QLD Booster' },
  '4101': { region: 'Brisbane (South Brisbane / West End)', network: 'Energex', rebate: '$3,000 – $4,000 QLD Booster' },
  '4064': { region: 'Brisbane (Paddington / Milton)', network: 'Energex', rebate: '$3,000 – $4,000 QLD Booster' },
  '4122': { region: 'Brisbane (Mansfield / Mount Gravatt)', network: 'Energex', rebate: '$3,000 – $4,000 QLD Booster' },
  '4053': { region: 'Brisbane (Brookside / Everton Park)', network: 'Energex', rebate: '$3,000 – $4,000 QLD Booster' },
  // Sunshine Coast
  '4558': { region: 'Sunshine Coast (Maroochydore / Cotton Tree)', network: 'Energex', rebate: '$3,000 – $4,000 QLD Booster' },
  '4567': { region: 'Sunshine Coast (Noosa Heads / Sunrise Beach)', network: 'Energex', rebate: '$3,000 – $4,000 QLD Booster' },
  '4551': { region: 'Sunshine Coast (Caloundra / Pelican Waters)', network: 'Energex', rebate: '$3,000 – $4,000 QLD Booster' },
  '4556': { region: 'Sunshine Coast (Buderim / Forest Glen)', network: 'Energex', rebate: '$3,000 – $4,000 QLD Booster' },
  // Ipswich & West
  '4300': { region: 'Ipswich (Springfield Lakes / Brookwater)', network: 'Energex', rebate: '$3,000 – $4,000 QLD Booster' },
  '4305': { region: 'Ipswich Central / Brassall', network: 'Energex', rebate: '$3,000 – $4,000 QLD Booster' },
  // Northern NSW / Tweed
  '2485': { region: 'Tweed Coast (Tweed Heads / Terranora)', network: 'Essential Energy', rebate: 'NSW Peak Demand Reduction Scheme' },
  '2487': { region: 'Kingscliff / Casuarina / Cabarita', network: 'Essential Energy', rebate: 'NSW Peak Demand Reduction Scheme' },
};

export const PostcodeEligibilityChecker: React.FC = () => {
  const [postcode, setPostcode] = useState('');
  const [result, setResult] = useState<PostcodeResult | null>(null);
  const [error, setError] = useState('');

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = postcode.trim();
    if (!clean) {
      setError('Please enter a 4-digit postcode.');
      setResult(null);
      return;
    }

    const num = parseInt(clean, 10);
    if (isNaN(num) || clean.length !== 4) {
      setError('Please enter a valid 4-digit Australian postcode.');
      setResult(null);
      return;
    }

    setError('');

    if (knownRegions[clean]) {
      const match = knownRegions[clean];
      setResult({
        postcode: clean,
        region: match.region,
        network: match.network,
        fastTrack: true,
        batteryRebate: match.rebate,
        singlePhaseLimit: '5.0 kW Export',
        threePhaseLimit: '15.0 kW Export (30kW Inverter)',
      });
    } else if (clean.startsWith('4')) {
      // General QLD Energex area
      setResult({
        postcode: clean,
        region: 'South East Queensland',
        network: 'Energex Distribution Network',
        fastTrack: true,
        batteryRebate: 'Eligible for QLD Battery Booster Subsidy ($3,000–$4,000)',
        singlePhaseLimit: '5.0 kW Export Limit',
        threePhaseLimit: '15.0 kW Export Limit',
      });
    } else if (clean.startsWith('248') || clean.startsWith('249')) {
      // Northern NSW
      setResult({
        postcode: clean,
        region: 'Northern Rivers NSW',
        network: 'Essential Energy Network',
        fastTrack: true,
        batteryRebate: 'Eligible for NSW Energy Savings Scheme (ESS)',
        singlePhaseLimit: '5.0 kW Export Limit',
        threePhaseLimit: '15.0 kW Export Limit',
      });
    } else {
      setError(`Postcode ${clean} is outside our direct primary South East Queensland service zone. Call 1300 030 479 to confirm availability.`);
      setResult(null);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-lg shadow-slate-900/5 max-w-3xl mx-auto">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-[#1d4ed8] bg-blue-50 border border-blue-200 mb-2.5">
          <Zap className="w-3.5 h-3.5 text-[#1d4ed8]" />
          <span>Grid & Rebate Validation</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-950">
          Check Your Suburb Energex Fast-Track Approval
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-lg mx-auto">
          Enter your Queensland or Tweed postcode to verify 5-day grid connection approval and battery subsidies.
        </p>
      </div>

      <form onSubmit={handleCheck} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
        <div className="relative grow">
          <input
            type="text"
            maxLength={4}
            placeholder="Enter Postcode (e.g. 4217, 4000, 4558)"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value.replace(/\D/g, ''))}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#ed5001] bg-slate-50/50"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 rounded-xl bg-linear-to-r from-[#ed5001] to-[#f06e02] hover:from-[#c84300] hover:to-[#ed5001] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-[#ed5001]/25 cursor-pointer transition-transform active:scale-[0.98]"
        >
          <Search className="w-4 h-4" />
          <span>Check Postcode</span>
        </button>
      </form>

      {error && (
        <div className="mt-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2 max-w-md mx-auto">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {result && (
        <div className="mt-6 pt-6 border-t border-slate-100 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                Network Status
              </span>
              <span className="font-extrabold text-sm text-emerald-950 flex items-center gap-1.5 mt-0.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>5-Day Fast-Track</span>
              </span>
              <span className="text-[11px] text-emerald-700 block mt-1">
                {result.network}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 block">
                Export Capacity
              </span>
              <span className="font-extrabold text-sm text-blue-950 flex items-center gap-1.5 mt-0.5">
                <Zap className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{result.singlePhaseLimit}</span>
              </span>
              <span className="text-[11px] text-blue-700 block mt-1">
                {result.threePhaseLimit}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">
                Rebate Eligibility
              </span>
              <span className="font-extrabold text-sm text-amber-950 flex items-center gap-1.5 mt-0.5">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Active Subsidy</span>
              </span>
              <span className="text-[11px] text-amber-700 block mt-1">
                {result.batteryRebate}
              </span>
            </div>
          </div>

          <div className="mt-5 text-center">
            <Link
              to="/get-started/free-assessment"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-[#ed5001] to-[#f06e02] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#ed5001]/25 hover:shadow-xl transition-all"
            >
              <span>Request 3D Assessment for {result.region}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostcodeEligibilityChecker;
