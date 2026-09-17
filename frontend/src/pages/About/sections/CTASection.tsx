import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../../components/ui/Button';
import {
  ArrowRight,
  Phone,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  system: string;
  tag: string;
  text: string;
  rating: number;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 'sarah-david',
    name: 'Sarah & David M.',
    location: 'Burleigh Heads, QLD',
    system: '10.5kW Solar + Tesla Powerwall 2',
    tag: '85% Power Bill Drop',
    text: "Trent and his team were incredible — no pressure, honest advice, and a flawless installation. Our quarterly electricity bill went from over $1,200 down to under $180.",
    rating: 5,
    date: 'Verified Homeowner',
  },
  {
    id: 'mark-t',
    name: 'Mark T.',
    location: 'Robina, QLD',
    system: '6.6kW Jinko N-Type + SolaX Hybrid',
    tag: 'In-House Electricians',
    text: "After getting burned by a cheap solar company that went bust, Sunny Solar restored my faith. 100% in-house tradesmen, no pushy sales reps, and they answer the phone every time.",
    rating: 5,
    date: 'Verified Homeowner',
  },
  {
    id: 'lisa-greg',
    name: 'Lisa & Greg K.',
    location: 'Mudgeeraba, QLD',
    system: '13.2kW Commercial-Grade Array',
    tag: 'Above Engineering Forecast',
    text: "Seamless from consultation through to energisation. Trent personally oversaw the design, and our daily kilowatt-hour yields are consistently beating the initial engineering forecast.",
    rating: 5,
    date: 'Verified Homeowner',
  },
  {
    id: 'cameron-p',
    name: 'Cameron P.',
    location: 'Helensvale, QLD',
    system: '8.8kW Solar + Blackout Backup',
    tag: 'Sub-10ms Emergency Power',
    text: "During the recent summer storms, our whole street was blacked out for nearly 14 hours. Our Sunny Solar system kicked in instantly — fridge, aircon, and lights stayed on without a glitch.",
    rating: 5,
    date: 'Verified Homeowner',
  },
  {
    id: 'elena-marcus',
    name: 'Elena & Marcus R.',
    location: 'Currumbin Waters, QLD',
    system: '7.7kW Solar System',
    tag: 'Immaculate Roof Care',
    text: "Neatest trade workmanship I have ever seen. Conduit was hidden completely within wall cavities, zero broken tiles, and the site was left cleaner than when they arrived.",
    rating: 5,
    date: 'Verified Homeowner',
  },
  {
    id: 'andrew-w',
    name: 'Andrew W.',
    location: 'Pacific Pines, QLD',
    system: '9.9kW System + Smart Energy Meter',
    tag: 'Honest Gold Coast Local',
    text: "So refreshing to deal with real Master Electricians who actually know the AS/NZS wiring rules instead of commission-hungry salesmen. Best investment we made in our home.",
    rating: 5,
    date: 'Verified Homeowner',
  },
];

export const CTASection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Responsive visible cards count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Intersection observer for entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  // Keep currentIndex in bounds when resizing
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  // Autoplay slider: advances by 1 review every 5 seconds when not paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  return (
    <section ref={sectionRef} className="bg-white relative overflow-hidden">
      {/* Top subtle divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* Testimonials Slider Section */}
      <div className="py-20 sm:py-24 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
          {/* Header Row with Title, Google Badge, and One-by-One Navigation Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
           

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-[1.12]">
                Real Words From{' '}
                <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                  Real Families.
                </span>
              </h2>

              
            </motion.div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
              <span className="text-xs font-mono font-semibold text-slate-400 tracking-wider mr-1">
                {String(currentIndex + 1).padStart(2, '0')} / {String(maxIndex + 1).padStart(2, '0')}
              </span>

              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 shadow-sm transition-all duration-200 cursor-pointer active:scale-95 hover:scale-105"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 shadow-sm transition-all duration-200 cursor-pointer active:scale-95 hover:scale-105"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Testimonial Cards Carousel Viewport (Slides one-by-one) */}
          <div
            className="overflow-hidden -mx-3 py-2"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {testimonials.map((t, idx) => {
                const isFirstVisible = idx === currentIndex;

                return (
                  <div
                    key={t.id}
                    className="shrink-0 px-3 w-full md:w-1/2 lg:w-1/3 select-none"
                  >
                    <div
                      className={`group relative rounded-xl p-7 sm:p-6 bg-white border transition-all duration-500 flex flex-col justify-between h-full ${
                        isFirstVisible
                          ? 'border-amber-300/90 shadow-xl shadow-amber-400/50 ring-1 ring-amber-300/40'
                          : 'border-slate-200/90 shadow-sm hover:shadow-lg hover:border-slate-300'
                      }`}
                    >
                      {/* Card Top Row: Rating & Highlight Tag */}
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-1">
                            {Array.from({ length: t.rating }, (_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 text-amber-400 fill-amber-400"
                              />
                            ))}
                          </div>

                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200/70">
                            {t.tag}
                          </span>
                        </div>

                        {/* Quote icon */}
                        <Quote className="w-8 h-8 text-amber-400/25 mb-2" />

                        {/* Review Body */}
                        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal mb-6 min-h-[4.5rem]">
                          "{t.text}"
                        </p>
                      </div>

                      {/* Card Bottom Area: System Installed + Reviewer Profile */}
                      <div className="pt-5 border-t border-slate-100">
                        {/* System Specs Pill */}
                        <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-500 bg-slate-50 px-2.5 py-1 rounded-lg mb-4 border border-slate-200/60">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{t.system}</span>
                        </div>

                        {/* Author Profile */}
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-sm shadow-sm shrink-0">
                            {t.name.charAt(0)}
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-bold text-slate-900 truncate">
                              {t.name}
                            </p>
                            <p className="text-xs text-slate-500 flex items-center gap-1 truncate">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span>{t.location}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Pagination Dots Strip */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === dotIdx
                    ? 'w-8 bg-amber-500'
                    : 'w-2 bg-slate-200 hover:bg-slate-300'
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Full-bleed CTA */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="/images/about/happy-family-solar.jpg"
            alt="Happy family with solar-powered home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        <div className="relative z-10 py-24 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Ready to Power Your Home
                <br />
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  the Right Way?
                </span>
              </h3>

              <p className="mt-5 text-base sm:text-lg text-slate-100 leading-relaxed max-w-2xl mx-auto font-light">
                Book your free, no-obligation design consultation. We'll assess your home, calculate real savings, and design a system that actually delivers.
              </p>

              <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  to="/get-started/free-assessment"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Book Free Consultation
                </Button>
                <Button
                  href="tel:0756789012"
                  variant="outline"
                  size="lg"
                  icon={<Phone className="w-4 h-4" />}
                  iconPosition="left"
                  className="border-white/30 text-white hover:border-amber-400 hover:text-amber-400"
                >
                  Call (07) 5678 9012
                </Button>
              </div>

             
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
