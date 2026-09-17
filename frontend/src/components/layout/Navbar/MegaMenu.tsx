import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Sun,
  Wrench,
  ArrowUpCircle,
  BatteryCharging,
  Zap,
  ShieldCheck,
  Activity,
  TrendingUp,
  PlusCircle,
  Battery,
  DollarSign,
  Layers,
  Clock,
  Sliders,
  Scale,
  CheckCircle2,
  HelpCircle,
  BookOpen,
  FileText,
  CheckSquare,
  Download,
  FileSpreadsheet,
  FileCheck,
  FileSearch,
  ArrowRight,
  Sparkles,
  Phone,
  Check,
  LucideIcon,
} from 'lucide-react';
import { NavSection } from '../../../data/navigationData';

const iconMap: Record<string, LucideIcon> = {
  Sun,
  Wrench,
  ArrowUpCircle,
  BatteryCharging,
  Zap,
  ShieldCheck,
  Activity,
  TrendingUp,
  PlusCircle,
  Battery,
  DollarSign,
  Layers,
  Clock,
  Sliders,
  Scale,
  CheckCircle2,
  HelpCircle,
  BookOpen,
  FileText,
  CheckSquare,
  Download,
  FileSpreadsheet,
  FileCheck,
  FileSearch,
};

export interface MegaMenuProps {
  section: NavSection;
  isOpen: boolean;
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ section, isOpen, onClose }) => {
  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !section.children) return null;

  const { items, featured } = section.children;
  const isLargeSet = items.length > 4;

  return (
    <div
      className="absolute top-full left-0 right-0 w-full pt-2 z-50 animate-megamenu"
      onMouseLeave={onClose}
    >
      {/* Centered Floating Modern Card Container */}
      <div className={`mx-auto px-4 sm:px-6 transition-all duration-200 ${isLargeSet ? 'max-w-5xl' : 'max-w-4xl'}`}>
        <div className="bg-white rounded-lg shadow-[0_20px_50px_-12px_rgba(0,0,0,0.22),0_0_0_1px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden">
          
          {/* Top subtle gradient highlight rim with Brand colors (Green to Solar Blue to Solar Orange) */}
          <div className="h-1 w-full bg-gradient-to-r from-[#265e11] via-[#1d4ed8] via-[#f06e02] to-[#ed5001]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Zone: Nav Items */}
            <div className={`${featured ? 'lg:col-span-8' : 'lg:col-span-12'} p-5 sm:p-6 flex flex-col justify-between`}>
              <div>
                {/* Section Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#265e11] bg-[#265e11]/10 border border-[#265e11]/25 px-2 py-0.5 rounded">
                      {section.title}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      Select an option to get started
                    </span>
                  </div>
                  <Link
                    to={section.href}
                    onClick={onClose}
                    className="text-xs font-bold text-slate-600 hover:text-[#ed5001] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View all</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {items.map((item, idx) => {
                    const IconComp = item.icon ? iconMap[item.icon] : Sun;

                    return (
                      <Link
                        key={idx}
                        to={item.href}
                        onClick={onClose}
                        className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-orange-50/40 transition-all duration-150 border border-transparent hover:border-orange-200/50"
                      >
                        {/* Icon */}
                        <div className="w-9 h-9 rounded-lg bg-orange-50 text-[#ed5001] flex items-center justify-center shrink-0 group-hover:bg-[#ed5001] group-hover:text-white transition-all duration-200 shadow-xs">
                          {IconComp && <IconComp className="w-4 h-4" />}
                        </div>

                        {/* Title */}
                        <div className="flex-1 min-w-0 pr-1">
                          <div className="flex items-center gap-1.5">
                            <span className="font-semibold text-sm text-slate-900 group-hover:text-[#ed5001] transition-colors truncate">
                              {item.title}
                            </span>
                          </div>
                        </div>

                        {/* Hover Arrow */}
                        <div className="self-center shrink-0 text-[#ed5001] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Micro Trust Line */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1.5 text-[#1d4ed8] font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#1d4ed8]" />
                  <span>CEC Accredited • 25-Yr Performance Guarantee</span>
                </div>
                <Link
                  to="/service-areas"
                  onClick={onClose}
                  className="text-slate-400 hover:text-[#ed5001] transition-colors text-[11px]"
                >
                  Servicing QLD
                </Link>
              </div>
            </div>

            {/* Right Zone: Integrated Featured Panel */}
            {featured && (
              <div className="lg:col-span-4 bg-gradient-to-br from-[#071328] via-[#0b1f3a] to-slate-950 text-white p-6 flex flex-col justify-between relative overflow-hidden border-t lg:border-t-0 lg:border-l border-slate-800">
                {/* Subtle radial glow */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-blue-600/15 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-[10px] font-bold uppercase tracking-wider mb-3">
                    <Sparkles className="w-3 h-3 text-sky-400" />
                    Featured Spotlight
                  </div>

                  <h4 className="text-base font-bold text-white leading-snug">
                    {featured.title}
                  </h4>

                  <p className="mt-2 text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {featured.description}
                  </p>

                  <div className="mt-4 space-y-1.5 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-[#265e11] shrink-0" />
                      <span>Tier-1 Inverters & Panels</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-[#265e11] shrink-0" />
                      <span>$0 Upfront Payment Available</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 relative z-10 flex items-center justify-between">
                  <Link
                    to={featured.href}
                    onClick={onClose}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors group/cta"
                  >
                    <span>{featured.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover/cta:translate-x-1" />
                  </Link>

                  <a
                    href="tel:1300786697"
                    className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-white transition-colors"
                  >
                    <Phone className="w-3 h-3 text-[#f06e02]" />
                    <span>1300 SUNNY</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
