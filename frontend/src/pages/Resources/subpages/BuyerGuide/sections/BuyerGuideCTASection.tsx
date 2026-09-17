import React from 'react';
import { Calculator, ArrowRight, ShieldCheck, FileCheck } from 'lucide-react';
import { Button } from '../../../../../components/ui/Button';

export const BuyerGuideCTASection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 my-10">
      <div className="relative rounded-lg bg-white border border-slate-300 p-8 sm:p-10 shadow-lg overflow-hidden text-center">
        
        {/* Decorative ambient background */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-full text-xs font-semibold text-amber-800">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            <span>Ready for Tailored Numbers?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 tracking-tight">
            Calculate Your Home's Specific Solar & Battery Payback
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Ready to see how the numbers apply to your specific roof and electricity bill? Use our interactive system sizing tool or request an independent quote audit.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button
              to="/resources/electricity-bill-review"
              variant="primary"
              size="md"
              icon={<FileCheck className="w-4 h-4" />}
            >
              Analyze My Power Bill
            </Button>
            <Button
              to="/resources/buying-checklist"
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Get Solar Buying Checklist
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BuyerGuideCTASection;
