import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Sparkles } from 'lucide-react';

export const MobileStickyActionBar: React.FC = () => {
  const location = useLocation();

  // Hide on thank you page so confirmation remains uncluttered
  if (location.pathname === '/thank-you') {
    return null;
  }

  return (
    <aside
      aria-label="Quick mobile contact actions"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200/90 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] transition-transform duration-300"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        {/* Direct Call Button */}
        <a
          href="tel:1300786697"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-900 active:bg-slate-800 text-white font-bold text-xs shadow-md transition-transform active:scale-[0.98]"
        >
          <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <Phone className="w-3.5 h-3.5" />
          </div>
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider">Call Electrician</span>
            <span className="text-xs font-extrabold text-white">1300 SUNNY</span>
          </div>
        </a>

        {/* Free Quote Button */}
        <Link
          to="/get-started/free-assessment"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-linear-to-r from-[#ed5001] via-[#f06e02] to-[#f4a304] active:from-[#c84300] active:to-[#ed5001] text-white font-bold text-xs shadow-md shadow-[#ed5001]/25 transition-transform active:scale-[0.98]"
        >
          <Sparkles className="w-4 h-4 shrink-0 text-amber-200" />
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[9px] font-semibold text-amber-100 uppercase tracking-wider">100% Free</span>
            <span className="text-xs font-extrabold text-white">3D Roof Quote</span>
          </div>
        </Link>
      </div>
    </aside>
  );
};

export default MobileStickyActionBar;
