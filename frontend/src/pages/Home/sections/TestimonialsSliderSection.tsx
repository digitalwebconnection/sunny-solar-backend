import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  MapPin,
  ArrowRight,
  Zap,
} from 'lucide-react';

interface TestimonialSlide {
  id: string;
  author: string;
  location: string;
  timeAgo: string;
  rating: number;
  title: string;
  comment: string;
  systemSummary: string;
  keyMetric: string;
  avatarBg: string;
}

const testimonials: TestimonialSlide[] = [
  {
    id: 't-1',
    author: 'Brett Thomson',
    location: 'Broadbeach Waters',
    timeAgo: '2 days ago',
    rating: 5,
    title: 'Zero sales pressure & spotless installation',
    comment:
      'Trent personally inspected our roof cavity and designed the perfect system. Power bill dropped from $940 to $22 last month! Cleanest tradesmen we have ever had on site.',
    systemSummary: '10.5kW REC + Tesla Powerwall 3',
    keyMetric: '$940 → $22/mo',
    avatarBg: 'bg-[#2B3CB8] text-white',
  },
  {
    id: 't-2',
    author: 'Claire & Patrick Wilson',
    location: 'Camp Hill, Brisbane',
    timeAgo: '4 days ago',
    rating: 5,
    title: 'Cut our power bill by 82% immediately',
    comment:
      'With 3 teenagers and ducted A/C in summer heatwaves, our solar system slashed our electricity bills by 82% from day one. Communication with the team was exceptional.',
    systemSummary: '13.2kW AIKO All-Black + Fronius',
    keyMetric: '82% Bill Cut',
    avatarBg: 'bg-[#1D2984] text-white',
  },
  {
    id: 't-3',
    author: 'Mark Henderson',
    location: 'Currumbin Valley',
    timeAgo: '1 week ago',
    rating: 5,
    title: 'Flawless battery retrofit to existing solar',
    comment:
      'Added a Sungrow battery to our 6-year-old system. Entire rebate paperwork was handled seamlessly by their office team. Now completely blackout-proof.',
    systemSummary: '9.6kWh Sungrow SBR Battery',
    keyMetric: '0% Evening Grid Draw',
    avatarBg: 'bg-[#151E64] text-white',
  },
  {
    id: 't-4',
    author: 'Sophie Martin',
    location: 'North Lakes',
    timeAgo: '1 week ago',
    rating: 5,
    title: 'Found a burnt isolator missed by others',
    comment:
      'Their technician found a hazardous degraded DC isolator with thermal imaging. Safely replaced and restored to 100% capacity! Truly honest electricians.',
    systemSummary: '24-Point Health Check & Repair',
    keyMetric: '100% Restored',
    avatarBg: 'bg-[#2433A1] text-white',
  },
  {
    id: 't-5',
    author: 'Graham Ross',
    location: 'Helensvale',
    timeAgo: '2 weeks ago',
    rating: 5,
    title: 'Doubled our output with modern panels',
    comment:
      'Replaced an old 2013 inverter with modern high-efficiency equipment. Double the power output for a fraction of the roof space. Highly recommend Sunny Solar.',
    systemSummary: '8.8kW Trina Vertex + Sungrow Hybrid',
    keyMetric: '2x Daily Output',
    avatarBg: 'bg-[#2B3CB8] text-white',
  },
  {
    id: 't-6',
    author: 'Nadia El-Sayed',
    location: 'New Farm, Brisbane',
    timeAgo: '3 weeks ago',
    rating: 5,
    title: 'True whole-home blackout backup',
    comment:
      'During recent storm blackouts while our whole street was dark, our lights, refrigeration and Wi-Fi stayed on seamlessly. Best investment for our Queensland home.',
    systemSummary: '11.4kW Solar + Tesla Powerwall 3',
    keyMetric: 'Zero Blackout Downtime',
    avatarBg: 'bg-[#1D2984] text-white',
  },
  {
    id: 't-7',
    author: 'Darren S.',
    location: 'Coomera',
    timeAgo: '1 month ago',
    rating: 5,
    title: 'Commercial connection with zero downtime',
    comment:
      'Warehouse installation executed over a planned weekend. Immediate demand charge reduction and effortless Energex approval. Prompt and professional.',
    systemSummary: '66kW Commercial Warehouse Solar',
    keyMetric: '$1,500+ Saved Monthly',
    avatarBg: 'bg-[#151E64] text-white',
  },
  {
    id: 't-8',
    author: 'David & Gillian M.',
    location: 'Tamborine Mountain',
    timeAgo: '1 month ago',
    rating: 5,
    title: '100% self-sufficient mountain acreage',
    comment:
      'Our neighbors lose power for days during mountain storms. We do not even notice the lights flicker. Outstanding craftsmanship and aftercare.',
    systemSummary: '19.8kW Ground Array + BYD Battery',
    keyMetric: '96% Self-Sufficiency',
    avatarBg: 'bg-[#2433A1] text-white',
  },
];

export const TestimonialsSliderSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Responsive visible count (4 cards on desktop, 3 on tablet, 2 on small tablet, 1 on mobile)
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

  // Slide forward
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  // Slide backward
  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto sliding every 4.5 seconds with pause support
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  // Touch swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 35) {
      nextSlide();
    } else if (diff < -35) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
    setTimeout(() => setIsPaused(false), 4000);
  };

  return (
    <section className="py-10 sm:py-12 lg:py-16 bg-slate-50 relative overflow-hidden border-t border-slate-200/80">
      {/* Ambient solar blue backdrop */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2B3CB8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Title & Desktop Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-extrabold text-slate-900 tracking-tight leading-tight">
              Real Installations.{' '}
              <span className="bg-linear-to-r from-[#2B3CB8] via-[#4658D9] to-[#6F8EE7] bg-clip-text text-transparent">
                Real Customer Savings.
              </span>
            </h2>
          </div>

          {/* Desktop Slider Arrow Controls */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous review"
              className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#2B3CB8] hover:border-[#2B3CB8] flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next review"
              className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#2B3CB8] hover:border-[#2B3CB8] flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
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
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
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
                className="px-1.5 sm:px-2.5 shrink-0"
                style={{ width: `${100 / visibleCount}%` }}
              >
                <div className="h-full bg-white rounded-2xl border border-slate-200/90 hover:shadow-xl shadow-xs sm:shadow-md shadow-slate-900/5 hover:border-[#2B3CB8] transition-all duration-300 flex flex-col justify-between p-4.5 sm:p-5 group min-h-[260px]">
                  <div className="space-y-3">
                    {/* Author Header Row: Avatar + Name + Time + Verified Chip */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5 min-w-0">
                        {/* Initial letter avatar */}
                        <div
                          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${item.avatarBg} flex items-center justify-center font-extrabold text-sm shadow-xs shrink-0 select-none`}
                        >
                          {item.author.charAt(0)}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1 font-bold text-slate-900 text-xs sm:text-sm truncate">
                            <span className="truncate">{item.author}</span>
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#2B3CB8] shrink-0" />
                          </div>
                          <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium truncate">
                            <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                            <span className="truncate">{item.location}</span>
                            <span>•</span>
                            <span className="shrink-0">{item.timeAgo}</span>
                          </div>
                        </div>
                      </div>

                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#F5F7FD] text-[#2B3CB8] border border-[#D1DCF8] shrink-0">
                        Verified
                      </span>
                    </div>

                    {/* Star Rating Row */}
                    <div className="flex items-center gap-1 pt-0.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-[#2B3CB8] text-[#2B3CB8]"
                        />
                      ))}
                      <span className="ml-1 text-xs font-bold text-slate-700">5.0</span>
                    </div>

                    {/* Review Title & Body */}
                    <div className="space-y-1">
                      <h3 className="font-bold text-sm sm:text-base text-slate-900 line-clamp-1 group-hover:text-[#2B3CB8] transition-colors">
                        "{item.title}"
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {item.comment}
                      </p>
                    </div>
                  </div>

                  {/* Bottom System & Metric Strip */}
                  <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-1 text-slate-500 truncate text-[11px]">
                      <Zap className="w-3 h-3 text-[#2B3CB8] shrink-0" />
                      <span className="truncate">{item.systemSummary}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-md font-bold text-[10px] sm:text-[11px] bg-emerald-50 text-emerald-700 border border-emerald-200/60 shrink-0">
                      {item.keyMetric}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls, Dots & Link */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center justify-between w-full sm:w-auto gap-3">
            {/* Arrows for mobile */}
            <div className="flex sm:hidden items-center gap-1.5">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous review"
                className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center shadow-2xs active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next review"
                className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center shadow-2xs active:scale-95 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    currentIndex === idx
                      ? 'w-5 sm:w-6 h-2 bg-[#2B3CB8]'
                      : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            {/* Mobile slide counter */}
            <span className="sm:hidden text-xs font-semibold text-slate-400 font-mono">
              0{currentIndex + 1} / 0{testimonials.length}
            </span>
          </div>

          <Link
            to="/reviews"
            className="text-xs sm:text-sm font-bold text-[#2B3CB8] hover:text-[#1D2984] transition-colors flex items-center gap-1 group"
          >
            <span>View All Verified Reviews</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSliderSection;
