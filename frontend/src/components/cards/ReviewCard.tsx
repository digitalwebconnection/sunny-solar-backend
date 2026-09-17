import React from 'react';
import { Star, CheckCircle, MapPin } from 'lucide-react';
import { Review } from '../../data/reviewsData';
import { Badge } from '../ui/Badge';

export interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-6 shadow-sm hover:shadow-lg hover:border-[#1d4ed8]/50 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs font-semibold text-slate-400">{review.source}</span>
        </div>

        {/* Title */}
        <h4 className="font-bold text-base text-slate-900 leading-snug">
          "{review.title}"
        </h4>

        {/* Comment */}
        <p className="mt-3 text-sm text-slate-600 leading-relaxed italic">
          "{review.comment}"
        </p>
      </div>

      <div className="mt-5 pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-1.5 font-bold text-sm text-slate-900">
              {review.author}
              {review.verified && (
                <span title="Verified Customer" className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1d4ed8]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#1d4ed8] inline" />
                  <span>Verified</span>
                </span>
              )}
            </div>
            <div className="flex items-center gap-1 text-xs text-slate-400 mt-0.5">
              <MapPin className="w-3 h-3 text-slate-400" />
              {review.location}
            </div>
          </div>
          <Badge variant="blue" size="sm">
            {review.serviceType}
          </Badge>
        </div>

        <div className="mt-3 text-[11px] text-slate-400 bg-slate-50 px-2.5 py-1 rounded-lg truncate">
          System: {review.systemSummary}
        </div>
      </div>
    </div>
  );
};
