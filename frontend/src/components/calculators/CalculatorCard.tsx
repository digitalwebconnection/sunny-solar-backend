import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  DollarSign,
  Layers,
  Clock,
  BatteryCharging,
  Sliders,
  Scale,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  LucideIcon
} from 'lucide-react';
import { CalculatorMeta } from '../../data/calculatorsData';
import { Badge } from '../ui/Badge';

const iconMap: Record<string, LucideIcon> = {
  DollarSign,
  Layers,
  Clock,
  BatteryCharging,
  Sliders,
  Scale,
  CheckCircle2,
  HelpCircle,
};

export interface CalculatorCardProps {
  calculator: CalculatorMeta;
  index?: number;
}

const MotionLink = motion.create(Link);

export const CalculatorCard: React.FC<CalculatorCardProps> = ({ calculator }) => {
  const IconComponent = iconMap[calculator.iconName] || DollarSign;

  return (
    <MotionLink
      to={`/calculators/${calculator.slug}`}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className="group bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs hover:shadow-xl hover:border-[#2B3CB8]/60 active:border-[#2B3CB8] flex flex-col justify-between relative overflow-hidden h-full cursor-pointer"
    >
      {/* Top Accent Gradient Bar on Hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#2B3CB8] via-[#6F8EE7] to-[#2B3CB8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Active Tap Solar Flare */}
      <div className="absolute inset-0 bg-radial from-[#2B3CB8]/10 via-transparent to-transparent opacity-0 group-active:opacity-100 transition-opacity duration-150 pointer-events-none" />

      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#2B3CB8]/10 border border-[#2B3CB8]/25 flex items-center justify-center text-[#2B3CB8] group-hover:bg-[#2B3CB8] group-hover:text-white group-hover:scale-105 group-hover:shadow-md group-hover:shadow-[#2B3CB8]/25 transition-all duration-300">
            <IconComponent className="w-6 h-6" />
          </div>
          {calculator.badge && (
            <Badge variant="amber" size="sm">
              {calculator.badge}
            </Badge>
          )}
        </div>

        <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#2B3CB8] transition-colors leading-snug">
          {calculator.title}
        </h3>

        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          {calculator.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
        <span className="font-medium text-slate-500">⏱️ {calculator.estimatedTime}</span>
        <span className="inline-flex items-center gap-1.5 font-bold text-[#2B3CB8] group-hover:text-[#1D2984]">
          <span>Launch Tool</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
        </span>
      </div>
    </MotionLink>
  );
};

export default CalculatorCard;

