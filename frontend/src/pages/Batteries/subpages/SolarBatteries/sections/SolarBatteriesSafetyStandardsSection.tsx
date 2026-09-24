import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ShieldCheck, ArrowRight, Flame, CheckCircle2, Lock, FileCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../../../../../components/ui/Button';

export const SolarBatteriesSafetyStandardsSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const safetyItems = [
    {
      icon: Flame,
      title: 'Non-Combustible Fire Barrier',
      desc: 'Certified 9mm compressed fibre-cement backing installed behind batteries on all timber and cavity walls.',
    },
    {
      icon: ShieldCheck,
      title: 'Strict Clearance Boundaries',
      desc: 'Mandatory 600mm to 900mm clearance from habitable windows, doors, ground level, and gas appliances.',
    },
    {
      icon: Lock,
      title: 'Emergency DC Rotary Isolator',
      desc: 'Independent, accessible lockable switch enabling emergency services or homeowners to instantly isolate power.',
    },
    {
      icon: FileCheck,
      title: 'Energex Form 16 Sign-Off',
      desc: 'Official Certificate of Electrical Safety compliance lodged directly with Energex/Ergon for your home insurance.',
    },
  ];

  const pauseTemporarily = () => {
    setIsPaused(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % safetyItems.length);
  }, [safetyItems.length]);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev === 0 ? safetyItems.length - 1 : prev - 1));
  }, [safetyItems.length]);

  const goToSlide = (index: number) => {
    setActiveSlide(index);
    pauseTemporarily();
  };

  // Auto-slide every 4.5 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    pauseTemporarily();
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
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
    <div className="pt-6 sm:pt-8 border-t border-slate-200/80">
      {/* Mobile Layout (< lg): Narrative on top, then sliding safety cards carousel, then CTA */}
      <div className="block lg:hidden space-y-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 mb-2.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>AS/NZS 5139:2019 Standard</span>
          </div>

          <h3 className="text-2xl xs:text-3xl font-serif font-bold text-slate-950 tracking-tight leading-snug">
            Rigorous Fire Safety & Location Engineering
          </h3>

          <p className="mt-2 text-xs xs:text-sm text-slate-600 leading-relaxed">
            Australian residential battery laws are among the strictest in the world. Our in-house Master Electricians ensure your installation is fully compliant, protecting your home insurance and maximizing battery cell life.
          </p>
        </div>

        {/* Mobile Sliding Carousel (< lg) */}
        <div>
          <div
            className="relative overflow-hidden rounded-2xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${activeSlide * 100}%)`,
              }}
            >
              {safetyItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="w-full shrink-0 px-0.5 flex flex-col">
                    <div className="rounded-2xl p-5 flex flex-col justify-between h-full bg-white border border-slate-200/90 shadow-2xs">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50/70 border border-emerald-200/60 px-2 py-0.5 rounded-md">
                            Requirement 0{idx + 1}
                          </span>
                        </div>

                        <h4 className="text-base xs:text-lg font-serif font-bold text-slate-950 tracking-tight mb-1.5">
                          {item.title}
                        </h4>

                        <p className="text-xs xs:text-sm text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
                        <span className="flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                          AS/NZS 5139 Mandated
                        </span>
                        <span>Standard 0{idx + 1}/0{safetyItems.length}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Slider Controls (Dots + Prev/Next Buttons) */}
          <div className="flex items-center justify-between mt-4 px-1">
            <div className="flex items-center gap-1.5">
              {safetyItems.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => goToSlide(dotIdx)}
                  aria-label={`Go to safety standard ${dotIdx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeSlide === dotIdx
                      ? 'w-6 bg-[#2B3CB8]'
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-slate-500 mr-1">
                0{activeSlide + 1} / 0{safetyItems.length}
              </span>
              <button
                type="button"
                onClick={() => {
                  prevSlide();
                  pauseTemporarily();
                }}
                aria-label="Previous standard"
                className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center shadow-2xs active:scale-95 transition-all cursor-pointer hover:bg-slate-50"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => {
                  nextSlide();
                  pauseTemporarily();
                }}
                aria-label="Next standard"
                className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center shadow-2xs active:scale-95 transition-all cursor-pointer hover:bg-slate-50"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Running Indicator / Swipe Hint */}
          <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2.5 px-1 font-medium">
            <span>← Swipe to explore</span>
            <span className="flex items-center gap-1 text-emerald-600 font-mono text-[10px]">
              <span className={`w-1.5 h-1.5 rounded-full ${isPaused ? 'bg-amber-400' : 'bg-emerald-500 animate-pulse'}`} />
              {isPaused ? 'Paused' : 'Auto-sliding'}
            </span>
            <span>Standard {activeSlide + 1} of {safetyItems.length} →</span>
          </div>
        </div>

        {/* Mobile CTA Button */}
        <div>
          <Button
            to="/get-started/free-assessment"
            variant="accent-green"
            size="md"
            fullWidth
            icon={<ArrowRight className="w-4 h-4" />}
            className="font-bold py-3"
          >
            Check My Wall & Switchboard
          </Button>
        </div>
      </div>

      {/* Desktop & Tablet Layout (>= lg): 2-Column Grid */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Heading, Narrative & CTA */}
        <div className="lg:col-span-5 space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>AS/NZS 5139:2019 Standard</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 tracking-tight leading-tight">
            Rigorous Fire Safety & Location Engineering
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed">
            Australian residential battery laws are among the strictest in the world. Our in-house Master Electricians ensure your installation is fully compliant, protecting your home insurance and maximizing battery cell life.
          </p>

          <div className="pt-2">
            <Button
              to="/get-started/free-assessment"
              variant="accent-green"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Check My Wall & Switchboard
            </Button>
          </div>
        </div>

        {/* Right Column: Open Safety Points with Minimal Dividers */}
        <div className="lg:col-span-7 divide-y divide-slate-200/70 border-y border-slate-200/70">
          {safetyItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="py-4 first:pt-2 last:pb-2 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-0.5">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SolarBatteriesSafetyStandardsSection;
