import React from 'react';
import { ArrowRight, FileText, Camera, ShieldCheck, TrendingUp, Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '../../../../../components/ui/Button';

export const HealthCheckReportCTASection: React.FC = () => {
  const deliverables = [
    {
      icon: <Camera className="w-5 h-5 text-amber-600" />,
      iconBg: 'bg-amber-500/10',
      title: 'Infrared Thermal Photography',
      desc: 'High-resolution thermal imaging captures diode hotspots, defective cells, and loose high-resistance DC connections before they cause fire hazards.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      iconBg: 'bg-emerald-500/10',
      title: 'Form 16 Safety Certificate',
      desc: 'Official Certificate of Electrical Safety proving AS/NZS 5033 compliance — essential for building insurance claims, storm audits, and property sales.',
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-blue-600" />,
      iconBg: 'bg-blue-500/10',
      title: 'Actual vs Rated Yield Audit',
      desc: 'Precise DC string power measurements benchmarked against original factory nameplate wattage to verify your true degradation and daily yield.',
    },
    {
      icon: <FileText className="w-5 h-5 text-purple-600" />,
      iconBg: 'bg-purple-500/10',
      title: 'Fixed-Price Rectification Quote',
      desc: 'If any recalled isolators, cabling faults, or inverter issues are found, receive a clear itemized quote with zero pressure or sales obligations.',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-2 md:px-4 lg:px-6">
      {/* Section Header */}
      <div className="text-center max-w-6xl mx-auto mb-10">
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl  max-w-3xl mx-auto font-serif font-bold text-slate-950 tracking-tight">
          What You Receive With Your Health Check
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-800 leading-relaxed">
          Within 24 hours of completion, our Master Electrician delivers a comprehensive digital diagnostic pack documenting the physical condition, electrical safety, and output health of your solar setup.
        </p>
      </div>

      {/* 4 Deliverables Open Grid (No Clunky Nested Boxes) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {deliverables.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-slate-300/90 p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className={`w-10 h-10 rounded-lg ${item.iconBg} flex items-center justify-center mb-4`}>
                {item.icon}
              </div>
              <h3 className="text-base font-serif font-bold text-slate-950 mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>Included in $189 audit</span>
            </div>
          </div>
        ))}
      </div>

   
    </section>
  );
};

export default HealthCheckReportCTASection;
