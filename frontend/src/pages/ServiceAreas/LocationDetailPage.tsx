import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { serviceAreasData } from '../../data/serviceAreasData';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { MapPin, Sun, Zap, ShieldCheck, ArrowLeft, ArrowRight, CheckCircle2, Phone, Star } from 'lucide-react';

export const LocationDetailPage: React.FC = () => {
  const { location } = useParams<{ location: string }>();
  const area = serviceAreasData.find((a) => a.slug === location);

  if (!area) {
    return <Navigate to="/service-areas" replace />;
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20 pt-24 sm:pt-28">
      <Breadcrumbs
        customItems={[
          { label: 'Service Areas', href: '/service-areas' },
          { label: area.name },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 space-y-12">
        {/* Localized Banner */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-12 shadow-sm">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="amber" icon={<MapPin className="w-3.5 h-3.5" />}>
              {area.region}
            </Badge>
            <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              ☀️ {area.solarHoursPerDay} Peak Sun Hours / Day
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 leading-tight">
            Solar & Battery Installations in{' '}
            <span className="bg-linear-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              {area.name}
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            {area.headline}. {area.description}
          </p>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row flex-wrap gap-4">
            <Button
              to="/get-started/free-assessment"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto justify-center"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Free {area.name} Solar Assessment
            </Button>

            <a
              href="tel:1300786697"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 font-bold text-slate-800 hover:bg-slate-50 transition-colors w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              1300 SUNNY (786 697)
            </a>
          </div>
        </div>

        {/* Local Highlights & Suburbs */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7 bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-8 shadow-sm space-y-6">
            <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              Why Homeowners in {area.name} Choose Sunny Solar
            </h3>

            <div className="space-y-3.5">
              {area.keyHighlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900">
              <span className="font-bold block mb-1">Local Rebates Available in {area.name}:</span>
              {area.rebateInfo}
            </div>
          </div>

          <div className="md:col-span-5 bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-8 shadow-sm space-y-4">
            <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-500" />
              Suburbs We Service in {area.name}
            </h3>

            <p className="text-xs text-slate-500">
              Our local response vans service all surrounding neighborhoods:
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {area.suburbsServed.map((suburb, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-slate-100 hover:bg-amber-100 text-slate-800 font-semibold px-3 py-1.5 rounded-xl border border-slate-200 transition-colors"
                >
                  {suburb}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-1.5">
              <span className="font-bold text-slate-800">Local Crew:</span> {area.installerCount}
            </div>
          </div>
        </div> 

        {/* Local CTA */}
        <div className="bg-slate-900 text-white rounded-3xl p-5 sm:p-12 border border-slate-800 text-center space-y-4">
          <Badge variant="navy">Local Fast Track</Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Schedule Your On-Site Solar Assessment in {area.name}
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Book an assessment with a Master Electrician who understands local wind ratings, roof types, and Energex network constraints.
          </p>
          <div className="pt-2">
            <Button
              to="/get-started/free-assessment"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto justify-center"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Book Free {area.name} Assessment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetailPage;
