import React from 'react';
import { FileSearch, CheckSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '../../../../../components/ui/Button';

export const QuoteReviewCTASection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 my-10">
      <div className="relative rounded-lg bg-white border border-slate-300 p-8 sm:p-10 shadow-lg overflow-hidden text-center">
        
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-full text-xs font-semibold text-amber-800">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            <span>Before You Sign Anything</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 tracking-tight">
            Arm Yourself with the Vetting Checklist
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Want to grill the salesperson yourself? Download our free 15-question buying checklist or submit your electricity bill to check whether the proposed system size actually matches your household consumption.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button
              to="/resources/buying-checklist"
              variant="primary"
              size="md"
              icon={<CheckSquare className="w-4 h-4" />}
            >
              Get Free Buying Checklist
            </Button>
            <Button
              to="/resources/electricity-bill-review"
              variant="outline"
              size="md"
              icon={<FileSearch className="w-4 h-4" />}
            >
              Check My Electricity Bill
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default QuoteReviewCTASection;
