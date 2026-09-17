import React from 'react';
import { TestimonialsCard } from '@/components/ui/testimonials-card';
import {
  Clock,
  ShieldCheck,
  Sparkles,
  FileCheck2,
  UserCheck,
  Zap,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface BuilderReason {
  id: string;
  badge: string;
  title: string;
  description: string;
  highlight: string;
  bgImage: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
  badgeBg: string;
  badgeColor: string;
  badgeBorder: string;
}

const builderReasons: BuilderReason[] = [
  {
    id: '01',
    badge: 'Zero Trade Clashes',
    title: 'Guaranteed Schedule Sync',
    description:
      'We coordinate directly with your site supervisor. Pre-wire rough-ins are executed cleanly during framing, and roof work is sequenced smoothly to eliminate construction roadblocks.',
    highlight: '100% On-Time Site Handover',
    bgImage: '/images/builder/builder-schedule-sync.png',
    icon: Clock,
    iconBg: 'bg-orange-500/10',
    iconColor: 'text-[#ed5001]',
    badgeBg: 'bg-orange-50',
    badgeColor: 'text-[#ed5001]',
    badgeBorder: 'border-orange-200/60',
  },
  {
    id: '02',
    badge: 'Licensed Master Trades',
    title: 'Zero Subcontractors (Subbies)',
    description:
      'Never risk your builder reputation on rushed third-party contractors. Trent Palmer and our in-house master electricians handle every cable, inverter mount, and isolator to the highest standard.',
    highlight: 'QBCC Licensed • CEC Retailer #A4892',
    bgImage: '/images/builder/builder-master-trades.jpg',
    icon: ShieldCheck,
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-[#265e11]',
    badgeBg: 'bg-emerald-50',
    badgeColor: 'text-[#265e11]',
    badgeBorder: 'border-emerald-200/60',
  },
  {
    id: '03',
    badge: 'Design Integrity',
    title: 'Concealed Conduits & Flush Racking',
    description:
      'No unsightly external surface conduits ruining your architectural elevation. We route DC cabling through internal wall cavities and install premium all-black tier-1 panels with sleek flush mounting.',
    highlight: 'Preserves Facade Street Appeal',
    bgImage: '/images/builder/builder-design-integrity.jpg',
    icon: Sparkles,
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-[#1d4ed8]',
    badgeBg: 'bg-blue-50',
    badgeColor: 'text-[#1d4ed8]',
    badgeBorder: 'border-blue-200/70',
  },
  {
    id: '04',
    badge: 'Certifier Ready',
    title: 'Rapid Form 15 & Form 16 Sign-Off',
    description:
      'Certificates of Electrical Safety and Form 15 / Form 16 design and inspection certificates are issued within 24 hours of fit-off—enabling fast, uninhibited private certifier approvals.',
    highlight: 'AS/NZS 3000 & 5033 Certified',
    bgImage: '/images/builder/builder-certifier-ready.jpg',
    icon: FileCheck2,
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-[#265e11]',
    badgeBg: 'bg-emerald-50',
    badgeColor: 'text-[#265e11]',
    badgeBorder: 'border-emerald-200/60',
  },
  {
    id: '05',
    badge: 'Zero Callbacks',
    title: 'Turnkey Homeowner Orientation',
    description:
      'At practical completion, we walk the new homeowner through their smart monitoring app and system operation. We take full ownership of warranty queries so you never field post-handover solar questions.',
    highlight: '25-Year Direct Workmanship Warranty',
    bgImage: '/images/builder/builder-zero-callbacks.jpg',
    icon: UserCheck,
    iconBg: 'bg-orange-500/10',
    iconColor: 'text-[#ed5001]',
    badgeBg: 'bg-orange-50',
    badgeColor: 'text-[#ed5001]',
    badgeBorder: 'border-orange-200/60',
  },
  {
    id: '06',
    badge: 'NCC 2022 Compliant',
    title: 'NatHERS 7-Star Energy Assistance',
    description:
      'We provide custom solar sizing and PV generation modeling during your drafting stage, helping your plans easily meet NCC 2022 energy efficiency and Whole-of-Home 7-star compliance targets.',
    highlight: 'Drafting & Plan Takeoff Support',
    bgImage: '/images/builder/builder-ncc-compliant.jpg',
    icon: Zap,
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-[#f59e0b]',
    badgeBg: 'bg-amber-50',
    badgeColor: 'text-[#b45309]',
    badgeBorder: 'border-amber-200/60',
  },
];

export const FeaturedProjectsSection: React.FC = () => {
  const items = builderReasons.map(reason => ({
    id: reason.id,
    title: reason.title,
    description: reason.description,
    image: reason.bgImage,
  }));

  return (
    <section className="py-20 lg:py-14 bg-slate-50 relative overflow-hidden border-t border-slate-200/70">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-125 h-125 bg-[#ed5001]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-125 h-125 bg-[#265e11]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-125 h-125 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-6xl mx-auto mb-12">
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#1d4ed8] bg-blue-50 border border-blue-200/90 shadow-2xs mb-4">
            <span className="w-2 h-2 rounded-full bg-[#1d4ed8] animate-pulse" />
            <span>Builder &amp; Developer Solar Partner</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-[#18181b] tracking-tight font-serif leading-[1.15]">
            Why Queensland Builders Choose <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#ed5001] via-[#f06e02] to-[#f4a304]">
              Sunny Solar
            </span>
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-5xl mx-auto">
            From frame-stage pre-wire to final Form 16 sign-off, we partner with custom builders, architects, and developers to deliver flawless solar without trade bottlenecks.
          </p>
        </div>

        {/* Stacked Animation Carousel */}
        <div className="mt-8 flex justify-center w-full">
          <TestimonialsCard 
            items={items} 
            width={400} 
            autoPlay={true}
            autoPlayInterval={4000}
            className="w-full max-w-6xl"
          />
        </div>

        {/* Bottom CTA Row Linking to Projects & Quote */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <Button
            to="/projects"
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            className="w-full sm:w-auto bg-white border-slate-300 hover:border-[#ed5001] hover:text-[#ed5001] shadow-xs"
          >
            Explore Completed Installations & Case Studies
          </Button>
          <Button
            to="/get-started/free-assessment"
            variant="primary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            className="w-full sm:w-auto shadow-md"
          >
            Request Builder or Residential Quote
          </Button>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
