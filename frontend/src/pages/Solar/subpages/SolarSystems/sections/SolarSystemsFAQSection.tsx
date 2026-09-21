import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export const SolarSystemsFAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How many kilowatts (kW) of solar does an average home actually need?',
      a: 'For a typical 3-4 bedroom Queensland home with ducted air conditioning or a pool, a 10.0kW to 13.2kW panel array paired with an 8kW or 10kW inverter delivers the strongest ROI. Even on overcast days or during winter, a larger array ensures your home stays powered without drawing expensive grid electricity.',
    },
    {
      q: 'What is the difference between single-phase and three-phase solar?',
      a: 'Single-phase homes have one 230V active wire, usually limiting inverter capacity to 5.0kW of continuous export into the grid. However, we can install up to a 10kW or 13.2kW panel array with a smart export limiter. Three-phase homes have three active wires, allowing up to 15kW–30kW of export capacity without restriction.',
    },
    {
      q: 'Why can I install a 6.6kW or 10kW panel array on a smaller inverter?',
      a: 'This is known as the "oversizing ratio". In Australia, Clean Energy Council rules allow installing up to 133% of the inverter’s rated capacity in solar panels while remaining eligible for Federal STC rebates. Oversizing allows the inverter to reach peak generation earlier in the morning and sustain it later into the evening.',
    },
    {
      q: 'Will my solar system still work during a neighborhood blackout?',
      a: 'Standard grid-connected solar without a battery shuts down immediately during a blackout for lineman safety (anti-islanding). However, if you choose a hybrid inverter like the Fronius GEN24 with PV Point or add a battery like the Tesla Powerwall 3, your system automatically islands to provide whole-home blackout backup.',
    },
    {
      q: 'How much will I receive for feeding excess electricity back into the grid?',
      a: 'Feed-in tariffs in South East Queensland typically range from 5c to 10c per kWh depending on your electricity retailer. Because buying grid power costs 32c+ per kWh, the highest return on investment comes from consuming your own power (self-consumption) or storing it in a battery rather than exporting it.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge variant="amber">Common Questions</Badge>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-3 tracking-tight">
            Frequently Asked Questions About Solar Sizing
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Everything you need to know about Queensland connection limits, sizing, and warranties.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200/90 rounded-2xl overflow-hidden transition-all duration-200 bg-white shadow-xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-slate-900 hover:text-[#2B3CB8] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#2B3CB8]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Navigation Links */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-sm font-semibold">
          <Link
            to="/calculators/system-size"
            className="inline-flex items-center gap-1.5 text-[#2B3CB8] hover:text-[#1D2984] transition-colors"
          >
            <span>Size your optimal solar array</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to="/faq"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Browse All FAQs →
            </Link>
            <Link
              to="/contact"
              className="text-[#2B3CB8] hover:underline"
            >
              Ask Our Electricians →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
