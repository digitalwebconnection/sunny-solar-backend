import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Home, Zap, Check, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Badge } from '../../../../../components/ui/Badge';
import { Button } from '../../../../../components/ui/Button';

export const BatteryBackupWiringComparisonSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const options = [
    {
      id: 'whole-home',
      name: 'Whole-Home Backup',
      badge: 'Top Choice for Families',
      badgeVariant: 'amber' as const,
      icon: Home,
      iconColor: 'bg-amber-500/10 text-amber-600',
      description:
        'Every electrical outlet, appliance, and light fixture in your entire home remains powered. When the grid collapses, you won’t even notice your neighbors are in the dark.',
      bullets: [
        'Powers heavy central ducted air conditioning & kitchen appliances',
        'Sub-100ms automatic transfer switch (PCs, Wi-Fi & clocks never reboot)',
        'Rooftop solar continues generating electricity & refilling battery during day',
        'Requires 11.5kW+ surge capacity (Tesla Powerwall 3 or dual inverters)',
      ],
      ctaText: 'Select Whole-Home Backup',
      ctaVariant: 'primary' as const,
      featured: true,
    },
    {
      id: 'essential-circuits',
      name: 'Essential Circuit Backup',
      badge: 'Extended Runtime',
      badgeVariant: 'emerald' as const,
      icon: Zap,
      iconColor: 'bg-emerald-500/10 text-emerald-600',
      description:
        'A dedicated backup sub-board isolates your critical loads (refrigeration, lighting, Wi-Fi, and medical equipment) while disconnecting heavy energy hogs like pool pumps and hot water.',
      bullets: [
        'Significantly extends battery runtime to 4–7 days during severe crises',
        'Prevents accidental battery depletion from ovens or electric vehicle charging',
        'Lower equipment cost; pairs perfectly with Sungrow 6kW hybrid & Enphase 5P',
        'Full sub-board electrical surge isolation complying with AS/NZS 3000',
      ],
      ctaText: 'Select Essential Circuits',
      ctaVariant: 'outline' as const,
      featured: false,
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
    setActiveSlide((prev) => (prev + 1) % options.length);
  }, [options.length]);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev === 0 ? options.length - 1 : prev - 1));
  }, [options.length]);

  const goToSlide = (index: number) => {
    setActiveSlide(index);
    pauseTemporarily();
  };

  // Auto-slide every 5 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
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
    <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 px-2 sm:px-0">
        <Badge variant="emerald">Switchboard Engineering</Badge>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-950 mt-3 tracking-tight leading-snug">
          Whole-Home vs Essential Circuit Backup
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Understand the two primary electrical wiring methodologies configured by our Master Electricians:
        </p>
      </div>

      {/* Mobile Sliding Carousel (< md: Options Slide One-by-One with Autoplay & Swipe) */}
      <div className="block md:hidden mb-8">
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
            {options.map((opt, idx) => {
              const Icon = opt.icon;
              return (
                <div key={opt.id} className="w-full shrink-0 px-0.5 flex flex-col">
                  <div
                    className={`bg-white rounded-2xl p-5 xs:p-6 flex flex-col justify-between h-full transition-all duration-300 ${
                      opt.featured
                        ? 'border-2 border-amber-500 shadow-md shadow-amber-500/10'
                        : 'border border-slate-200/90 shadow-2xs'
                    }`}
                  >
                    <div>
                      {/* Top Header Row: Icon + Badge + Option Counter */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${opt.iconColor}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Badge variant={opt.badgeVariant} size="sm">
                            {opt.badge}
                          </Badge>
                          <span className="text-[11px] font-mono font-bold text-slate-400 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-md">
                            0{idx + 1}/02
                          </span>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl font-serif font-bold text-slate-950 mb-2">
                        {opt.name}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {opt.description}
                      </p>

                      {/* Bullets */}
                      <div className="space-y-2.5 pb-4 mb-4 border-b border-slate-100 text-xs text-slate-700">
                        {opt.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                            <span className="leading-snug">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div>
                      <Button
                        to="/get-started/free-assessment"
                        variant={opt.ctaVariant}
                        size="md"
                        fullWidth
                        icon={<ArrowRight className="w-4 h-4" />}
                        className="font-bold py-3"
                      >
                        {opt.ctaText}
                      </Button>
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
            {options.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => goToSlide(dotIdx)}
                aria-label={`Go to option ${dotIdx + 1}`}
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
              0{activeSlide + 1} / 02
            </span>
            <button
              type="button"
              onClick={() => {
                prevSlide();
                pauseTemporarily();
              }}
              aria-label="Previous option"
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
              aria-label="Next option"
              className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center shadow-2xs active:scale-95 transition-all cursor-pointer hover:bg-slate-50"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Running Indicator / Swipe Hint */}
        <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2.5 px-1 font-medium">
          <span>← Swipe to compare</span>
          <span className="flex items-center gap-1 text-emerald-600 font-mono text-[10px]">
            <span className={`w-1.5 h-1.5 rounded-full ${isPaused ? 'bg-amber-400' : 'bg-emerald-500 animate-pulse'}`} />
            {isPaused ? 'Paused' : 'Auto-sliding'}
          </span>
          <span>Option {activeSlide + 1} of 2 →</span>
        </div>
      </div>

      {/* Desktop & Tablet Grid (>= md): 2 Side-by-Side Cards */}
      <div className="hidden md:grid md:grid-cols-2 gap-8">
        {/* Option A: Whole-Home */}
        <div className="bg-white rounded-xl border-2 border-amber-500/80 p-8 shadow-md relative flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <Home className="w-6 h-6" />
              </div>
              <Badge variant="amber">Top Choice for Families</Badge>
            </div>

            <h3 className="text-2xl font-bold text-slate-950 mb-2">Whole-Home Backup</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              Every electrical outlet, appliance, and light fixture in your entire home remains powered. When the grid collapses, you won’t even notice your neighbors are in the dark.
            </p>

            <div className="space-y-3 pb-6 border-b border-slate-100">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Powers heavy central ducted air conditioning & kitchen appliances</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Sub-100ms automatic transfer switch (PCs, Wi-Fi & clocks never reboot)</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Rooftop solar continues generating electricity & refilling battery during day</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Requires 11.5kW+ surge capacity (Tesla Powerwall 3 or dual inverters)</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-2">
            <Button
              to="/get-started/free-assessment"
              variant="primary"
              size="md"
              fullWidth
            >
              Select Whole-Home Backup
            </Button>
          </div>
        </div>

        {/* Option B: Essential Circuits */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <Badge variant="emerald">Extended Runtime</Badge>
            </div>

            <h3 className="text-2xl font-bold text-slate-950 mb-2">Essential Circuit Backup</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              A dedicated backup sub-board isolates your critical loads (refrigeration, lighting, Wi-Fi, and medical equipment) while disconnecting heavy energy hogs like pool pumps and hot water.
            </p>

            <div className="space-y-3 pb-6 border-b border-slate-100">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Significantly extends battery runtime to 4–7 days during severe crises</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Prevents accidental battery depletion from ovens or electric vehicle charging</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Lower equipment cost; pairs perfectly with Sungrow 6kW hybrid & Enphase 5P</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Full sub-board electrical surge isolation complying with AS/NZS 3000</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-2">
            <Button
              to="/get-started/free-assessment"
              variant="outline"
              size="md"
              fullWidth
            >
              Select Essential Circuits
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatteryBackupWiringComparisonSection;
