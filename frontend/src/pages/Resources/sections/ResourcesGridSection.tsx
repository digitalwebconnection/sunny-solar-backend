import React from 'react';
import { resourcesData } from '../../../data/resourcesData';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { 
  Download, 
  CheckSquare, 
  FileSpreadsheet, 
  FileCheck, 
  FileSearch, 
  ArrowRight, 
  Check, 
  Sparkles,
  BookOpen,
  Clock
} from 'lucide-react';

const iconMap: Record<string, any> = {
  'buying-checklist': CheckSquare,
  'buyer-guide': Download,
  'battery-decision-guide': FileSpreadsheet,
  'quote-review': FileCheck,
  'electricity-bill-review': FileSearch,
};

export const ResourcesGridSection: React.FC = () => {
  const list = Object.values(resourcesData);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Independent Consumer Library</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 tracking-tight">
            Available Homeowner Guides & Tools
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Select a resource below to download free PDFs, vetted buying checklists, or claim an engineering audit.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs self-start sm:self-auto">
          <BookOpen className="w-4 h-4 text-amber-500" />
          <span>5 Verified Resources (2025 Edition)</span>
        </div>
      </div>

      {/* Grid of Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {list.map((item) => {
          const Icon = iconMap[item.slug] || Download;
          const isAudit = item.format === 'Free Audit' || item.format === 'Interactive Review';

          return (
            <div
              key={item.slug}
              className="bg-white rounded-lg border border-slate-300 p-6 sm:p-7 shadow-lg hover:shadow-lg hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Gradient Bar on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    {item.badge && (
                      <Badge variant={isAudit ? 'emerald' : 'amber'} size="sm">
                        {item.badge}
                      </Badge>
                    )}
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                      {item.format}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Subtitle / Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* What's Inside Checklist */}
                <div className="space-y-2 pb-5 border-b border-slate-100">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Inside this Resource:
                  </span>
                  {item.whatInside.slice(0, 3).map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="mt-5 pt-1 flex flex-col gap-3">
                {item.pagesCount && (
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{item.pagesCount}</span>
                  </div>
                )}
                <Button
                  to={`/resources/${item.slug}`}
                  variant={isAudit ? 'primary' : 'outline'}
                  size="md"
                  fullWidth
                  icon={<ArrowRight className="w-4 h-4" />}
                  className={!isAudit ? 'group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 transition-all' : ''}
                >
                  {item.ctaText}
                </Button>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default ResourcesGridSection;
