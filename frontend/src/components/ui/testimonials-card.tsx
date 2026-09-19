"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface TestimonialItem {
    /** Unique identifier for the card */
    id: string | number;
    /** Title displayed for the card */
    title: string;
    /** Description text for the card */
    description: string;
    /** Image URL/path for the card */
    image: string;
    /** Optional badge or step label (e.g. Slide 01 — The Right System) */
    badge?: string;
    /** Optional progression subtitle (e.g. 01 — What do I need?) */
    subtitle?: string;
    /** Optional highlight text (e.g. Solar • Battery • Energy Use) */
    highlight?: string;
}

interface TestimonialsCardProps {
    /** Array of testimonial items to display */
    items: TestimonialItem[];
    /** Additional CSS classes for the container */
    className?: string;
    /** Width of the card stack (default: 400) */
    width?: number;
    /** Whether to show navigation arrows (default: true) */
    showNavigation?: boolean;
    /** Whether to show the counter (default: true) */
    showCounter?: boolean;
    /** Whether to enable auto-play (default: false) */
    autoPlay?: boolean;
    /** Auto-play interval in ms (default: 3000) */
    autoPlayInterval?: number;
    /** Optional controlled active index */
    activeIndex?: number;
    /** Optional callback when active index changes */
    onIndexChange?: (index: number) => void;
}

export function TestimonialsCard({
    items,
    className,
    width = 400,
    showNavigation = true,
    showCounter = true,
    autoPlay = false,
    autoPlayInterval = 3000,
    activeIndex: externalActiveIndex,
    onIndexChange,
}: TestimonialsCardProps) {
    const [internalActiveIndex, setInternalActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const isControlled = externalActiveIndex !== undefined;
    const activeIndex = isControlled ? externalActiveIndex : internalActiveIndex;

    const updateIndex = (newIndex: number, newDir: number) => {
        setDirection(newDir);
        if (!isControlled) {
            setInternalActiveIndex(newIndex);
        }
        onIndexChange?.(newIndex);
    };

    // Auto-play effect
    React.useEffect(() => {
        if (!autoPlay || items.length <= 1) return;

        const interval = setInterval(() => {
            const nextIdx = (activeIndex + 1) % items.length;
            updateIndex(nextIdx, 1);
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [autoPlay, autoPlayInterval, items.length, activeIndex, isControlled]);

    const handleNext = () => {
        const nextIdx = (activeIndex + 1) % items.length;
        updateIndex(nextIdx, 1);
    };

    const handlePrev = () => {
        const prevIdx = (activeIndex - 1 + items.length) % items.length;
        updateIndex(prevIdx, -1);
    };

    // Pre-calculate rotations for visual variety
    const rotations = useMemo(() => [4, -2, -9, 7], []);

    if (!items || items.length === 0) {
        return null;
    }

    const activeItem = items[activeIndex] || items[0];

    return (
        <div className={cn("flex items-center justify-center", className)}>
            <div
                className="relative grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] md:grid-rows-[auto_auto_auto] gap-x-6 gap-y-4 w-full"
                style={{ perspective: "1400px", maxWidth: `${width * 2.5}px` }}
            >
                {/* Image Card Stack */}
                <div className="row-start-2 col-start-1 md:row-start-1 mt-6 md:mt-0 row-span-3 relative w-full aspect-square" style={{ maxWidth: `${width}px` }}>
                    <AnimatePresence custom={direction}>
                        {items.map((item, index) => {
                            const isActive = index === activeIndex;
                            const offset = index - activeIndex;

                            return (
                                <motion.div
                                    key={item.id}
                                    className="absolute inset-0 w-full h-full overflow-hidden bg-neutral-200 border border-slate-200 shadow-2xl rounded-2xl"
                                    initial={{
                                        x: offset * 15,
                                        y: Math.abs(offset) * 6,
                                        z: -150 * Math.abs(offset),
                                        scale: 0.85 - Math.abs(offset) * 0.04,
                                        rotateZ: rotations[index % 4],
                                        opacity: isActive ? 1 : 0.5,
                                        zIndex: 10 - Math.abs(offset),
                                    }}
                                    animate={
                                        isActive
                                            ? {
                                                x: [offset * 15, direction === 1 ? -200 : 200, 0],
                                                y: [Math.abs(offset) * 6, 0, 0],
                                                z: [-200, 150, 250],
                                                scale: [0.85, 1.05, 1],
                                                rotateZ: [rotations[index % 4], -5, 0],
                                                opacity: 1,
                                                zIndex: 100,
                                            }
                                            : {
                                                x: offset * 15,
                                                y: Math.abs(offset) * 6,
                                                z: -150 * Math.abs(offset),
                                                rotateZ: rotations[index % 4],
                                                scale: 0.85 - Math.abs(offset) * 0.04,
                                                opacity: 0.55,
                                                zIndex: 10 - Math.abs(offset),
                                            }
                                    }
                                    exit={{
                                        x: direction === 1 ? -250 : 250,
                                        z: -260,
                                        scale: 0.75,
                                        rotateZ: direction === 1 ? -10 : 10,
                                        opacity: 0,
                                    }}
                                    transition={{
                                        duration: 0.75,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                        draggable={false}
                                    />
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Text Area */}
                <div className="col-start-1 md:col-start-2 md:row-start-1 flex flex-col justify-center min-h-48 pl-0 sm:pl-4 text-left">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeItem.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.35 }}
                        >
                            {(activeItem.badge || activeItem.subtitle) && (
                                <div className="flex flex-wrap items-center gap-2 mb-3">
                                    {activeItem.badge && (
                                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#ed5001] bg-orange-50 border border-orange-200/80">
                                            <span>{activeItem.badge}</span>
                                        </div>
                                    )}
                                    {activeItem.subtitle && (
                                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold text-slate-600 bg-slate-100 border border-slate-200/80">
                                            {activeItem.subtitle}
                                        </span>
                                    )}
                                </div>
                            )}

                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 font-serif mb-3 leading-snug">
                                {activeItem.title}
                            </h3>

                            <p className="text-sm sm:text-base text-neutral-600 mt-2 leading-relaxed">
                                {activeItem.description}
                            </p>

                            {activeItem.highlight && (
                                <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs sm:text-sm font-bold text-[#265e11]">
                                    <span className="w-2 h-2 rounded-full bg-[#265e11] shrink-0" />
                                    <span>{activeItem.highlight}</span>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Controls: ← 01 / 05 → */}
                <div className="col-start-1 md:col-start-2 md:row-start-3 flex items-center gap-3 m-auto -mt-2 md:mt-6 md:m-0 pl-0 sm:pl-4">
                    {showNavigation && items.length > 1 && (
                        <div className="inline-flex items-center gap-3 bg-white border border-slate-200/90 rounded-full px-2 py-1.5 shadow-sm">
                            <button
                                onClick={handlePrev}
                                className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-100 hover:bg-[#ed5001] text-slate-700 hover:text-white transition-all cursor-pointer active:scale-95"
                                aria-label="Previous slide"
                            >
                                <ArrowLeft className="w-4 h-4" />
                            </button>

                            {showCounter && (
                                <span className="font-mono text-xs sm:text-sm font-bold text-slate-700 select-none tracking-wider px-2">
                                    {String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
                                </span>
                            )}

                            <button
                                onClick={handleNext}
                                className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-100 hover:bg-[#ed5001] text-slate-700 hover:text-white transition-all cursor-pointer active:scale-95"
                                aria-label="Next slide"
                            >
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TestimonialsCard;
