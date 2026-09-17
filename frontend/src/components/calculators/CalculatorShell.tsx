import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, RefreshCw } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export interface ResultMetric {
  label: string;
  value: string;
  subtext?: string;
  highlight?: boolean;
  green?: boolean;
}

export interface CalculatorShellProps {
  title: string;
  subtitle: string;
  badge?: string;
  inputSection: React.ReactNode;
  results: ResultMetric[];
  calculationSummary?: React.ReactNode;
  onReset?: () => void;
  ctaText?: string;
  ctaLink?: string;
  formulaNote?: string;
}

export const CalculatorShell: React.FC<CalculatorShellProps> = ({
  title,
  subtitle,
  badge = 'Interactive Estimator',
  inputSection,
  results,
  calculationSummary,
  onReset,
  ctaText = 'Lock In These Savings with a Free Assessment',
  ctaLink = '/get-started/free-assessment',
  formulaNote = 'Estimates are based on standard Clean Energy Council solar radiance modeling, average 34c/kWh retail rates, and 6c/kWh export tariffs. Real output varies based on roof orientation, pitch, and shading.',
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Top Banner */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="amber" size="sm" icon={<Sparkles className="w-3 h-3" />}>
            {badge}
          </Badge>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{title}</h2>
        <p className="mt-1.5 text-slate-600 text-sm sm:text-base max-w-3xl">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Form Inputs */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between pb-5 mb-6 border-b border-slate-100">
            <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-500 text-white text-xs flex items-center justify-center font-extrabold">
                1
              </span>
              Your Household Parameters
            </h3>
            {onReset && (
              <button
                type="button"
                onClick={onReset}
                className="text-xs font-semibold text-slate-400 hover:text-amber-600 flex items-center gap-1 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                Reset Defaults
              </button>
            )}
          </div>

          <div className="space-y-6">{inputSection}</div>
        </div>

        {/* Right Column: Results Panel */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white rounded-3xl p-5 sm:p-8 shadow-xl border border-slate-800 relative overflow-hidden lg:sticky lg:top-28">
          {/* Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between pb-5 mb-6 border-b border-slate-800">
            <h3 className="font-bold text-white text-lg flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 text-xs flex items-center justify-center font-extrabold">
                2
              </span>
              Estimated Results
            </h3>
            <span className="text-[11px] font-mono tracking-wider bg-slate-800 text-amber-300 px-2.5 py-0.5 rounded-full border border-slate-700">
              Live Preview
            </span>
          </div>

          {/* Results Metric Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-6">
            {results.map((metric, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-2xl border transition-all ${
                  metric.highlight
                    ? 'bg-amber-500/10 border-amber-400/40 col-span-full'
                    : metric.green
                    ? 'bg-emerald-500/10 border-emerald-400/30'
                    : 'bg-slate-800/60 border-slate-700/60'
                }`}
              >
                <span className="text-xs font-medium text-slate-400 block uppercase tracking-wider">
                  {metric.label}
                </span>
                <div
                  className={`mt-1 font-extrabold tracking-tight ${
                    metric.highlight
                      ? 'text-2xl sm:text-3xl text-amber-400'
                      : metric.green
                      ? 'text-xl sm:text-2xl text-emerald-400'
                      : 'text-xl sm:text-2xl text-white'
                  }`}
                >
                  {metric.value}
                </div>
                {metric.subtext && (
                  <p className="mt-1 text-xs text-slate-400">{metric.subtext}</p>
                )}
              </div>
            ))}
          </div>

          {calculationSummary && <div className="mb-6">{calculationSummary}</div>}

          {/* CTA Button */}
          <Button
            to={ctaLink}
            variant="primary"
            size="lg"
            fullWidth
            icon={<ArrowRight className="w-4 h-4" />}
          >
            {ctaText}
          </Button>

          {/* Guarantee / trust */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400 text-center">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>No obligation • 100% Free engineer review</span>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-500 leading-relaxed font-sans">
            <span className="font-semibold text-slate-400">Formula Note:</span> {formulaNote}
          </div>
        </div>
      </div>
    </div>
  );
};
