import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  MapPin,
  ArrowRight,
  Sparkles,
  Zap,
} from 'lucide-react';
import { Badge } from '../../../components/ui/Badge';

interface TestimonialSlide {
  id: string;
  author: string;
  location: string;
  rating: number;
  title: string;
  comment: string;
  systemSummary: string;
  keyMetric: string;
  image: string;
}

const testimonials: TestimonialSlide[] = [
  {
    id: 't-1',
    author: 'Brett Thomson',
    location: 'Broadbeach Waters',
    rating: 5,
    title: 'Zero sales pressure & spotless installation',
    comment:
      'Trent personally inspected our roof cavity and designed the perfect system. Power bill dropped from $940 to $22 last month!',
    systemSummary: '10.5kW REC + Tesla Powerwall 3',
    keyMetric: '$940 → $22/mo',
    image: '/images/projects/tesla-solar-roof.jpg',
  },
  {
    id: 't-2',
    author: 'Claire & Patrick Wilson',
    location: 'Camp Hill, Brisbane',
    rating: 5,
    title: 'Cut our power bill by 82% immediately',
    comment:
      'With 3 teenagers and ducted A/C in summer heatwaves, our solar system slashed our electricity bills by 82% from day one.',
    systemSummary: '13.2kW AIKO All-Black + Fronius',
    keyMetric: '82% Bill Cut',
    image: '/images/projects/project-rooftop-array.jpg',
  },
  {
    id: 't-3',
    author: 'Mark Henderson',
    location: 'Currumbin Valley',
    rating: 5,
    title: 'Flawless battery retrofit to existing solar',
    comment:
      'Added a Sungrow battery to our 6-year-old system. Entire rebate paperwork was handled seamlessly by their office team.',
    systemSummary: '9.6kWh Sungrow SBR Battery',
    keyMetric: '0% Evening Grid Draw',
    image: '/images/projects/project-battery-storage.jpg',
  },
  {
    id: 't-4',
    author: 'Sophie Martin',
    location: 'North Lakes',
    rating: 5,
    title: 'Found a burnt isolator missed by others',
    comment:
      'Their technician found a hazardous degraded DC isolator with thermal imaging. Safely replaced and restored to 100% capacity!',
    systemSummary: '24-Point Health Check & Repair',
    keyMetric: '100% Restored',
    image: '/images/projects/sunny-boy-inverter.jpg',
  },
  {
    id: 't-5',
    author: 'Graham Ross',
    location: 'Helensvale',
    rating: 5,
    title: 'Doubled our output with modern panels',
    comment:
      'Replaced an old 2013 inverter with modern high-efficiency equipment. Double the power output for a fraction of the roof space.',
    systemSummary: '8.8kW Trina Vertex + Sungrow Hybrid',
    keyMetric: '2x Daily Output',
    image: '/images/projects/pv-solar-thermal.jpg',
  },
  {
    id: 't-6',
    author: 'Nadia El-Sayed',
    location: 'New Farm, Brisbane',
    rating: 5,
    title: 'True whole-home blackout backup',
    comment:
      'During recent storm blackouts while our whole street was dark, our lights, refrigeration and Wi-Fi stayed on seamlessly.',
    systemSummary: '11.4kW Solar + Tesla Powerwall 3',
    keyMetric: 'Zero Blackout Downtime',
    image: '/images/projects/dji-aerial-solar.jpg',
  },
  {
    id: 't-7',
    author: 'Darren S.',
    location: 'Coomera Commercial',
    rating: 5,
    title: 'Commercial connection with zero downtime',
    comment:
      'Warehouse installation executed over a planned weekend. Immediate demand charge reduction and effortless Energex approval.',
    systemSummary: '66kW Commercial Warehouse Solar',
    keyMetric: '$1,500+ Saved Monthly',
    image: '/images/projects/aerial-view-solar.jpg',
  },
  {
    id: 't-8',
    author: 'David & Gillian M.',
    location: 'Tamborine Mountain',
    rating: 5,
    title: '100% self-sufficient mountain acreage',
    comment:
      'Our neighbors lose power for days during mountain storms. We do not even notice the lights flicker. Outstanding craftsmanship!',
    systemSummary: '19.8kW Ground Array + BYD Battery',
    keyMetric: '96% Self-Sufficiency',
    image: '/images/projects/homestead-overview.jpg',
  },
];

export const TestimonialsSliderSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Responsive visible count (4 cards on desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 768) {
        setVisibleCount(2);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  // Slide one by one forward
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  // Slide one by one backward
  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto sliding every 3.2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3200);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Touch swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 40) {
      nextSlide();
    } else if (diff < -40) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="py-12 lg:py-14 bg-slate-50 relative overflow-hidden border-t border-slate-200/80">
      {/* Ambient solar blue backdrop */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-slate-900 tracking-tight">
              Real Installations.{' '}
              <span className="bg-linear-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                Real Customer Savings.
              </span>
            </h2>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#1d4ed8] hover:border-blue-300 flex items-center justify-center transition-colors shadow-xs active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#1d4ed8] hover:border-blue-300 flex items-center justify-center transition-colors shadow-xs active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Slider Window */}
        <div
          className="relative overflow-hidden cursor-grab py-2 pb-4 active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="px-2 sm:px-2.5 shrink-0"
                style={{ width: `${100 / visibleCount}%` }}
              >
                <div className="h-full bg-white rounded-lg  border border-slate-200/90 shadow-sm shadow-black/50 hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden group">
                  {/* Compact Image */}
                  <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />

                    {/* Metric Badge */}
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs">
                      <span className="font-bold text-amber-400 flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        {item.keyMetric}
                      </span>
                      <span className="text-[11px] text-slate-300 font-medium truncate max-w-37.5">
                        {item.systemSummary}
                      </span>
                    </div>
                  </div>

                  {/* Compact Body */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-0.5">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>

                      <h3 className="font-bold text-sm text-slate-900 line-clamp-1 group-hover:text-amber-600 transition-colors">
                        "{item.title}"
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed italic line-clamp-2">
                        "{item.comment}"
                      </p>
                    </div>

                    {/* Compact Author Footer */}
                    <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 font-bold text-slate-900">
                        <span>{item.author}</span>
                        <span title="Verified Customer" className="inline-flex">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-400 text-[11px]">
                        <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compact Navigation Dots & Link */}
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? 'w-6 h-2 bg-amber-500'
                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          <Link
            to="/reviews"
            className="text-xs font-bold text-slate-600 hover:text-amber-600 transition-colors flex items-center gap-1"
          >
            <span>View All 100+ Reviews</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSliderSection;
