import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FreeAssessmentFaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How quickly will I receive my solar assessment and quote?',
      a: 'In most cases, our engineering team completes your 3D satellite roof analysis and delivers an itemized proposal within 24 business hours.',
    },
    {
      q: 'Is the roof assessment and consultation completely free?',
      a: 'Yes, 100% free with zero obligation. We believe in providing transparent engineering facts and clear payback numbers so you can make an informed decision.',
    },
    {
      q: 'Do you employ your own electricians or use subcontractors?',
      a: 'We never farm out installations to third-party subbies. Every technician on your roof is a permanent, background-checked Sunny Solar Master Electrician.',
    },
    {
      q: 'Can you assess my property remotely via satellite?',
      a: 'Yes! Our 3D solar design software analyzes your roof facets, tilt angles, and tree shading with high precision before an electrician visits your home.',
    },
  ];

  return (
    <section className="pt-14 lg:pt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-slate-900">
            Quick answers to common questions about our assessments and quotes.
          </p>
        </div>

        <div className="divide-y divide-slate-200/90">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="py-4">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
                >
                  <span className="text-sm sm:text-base font-serif font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 group-hover:text-slate-700 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FreeAssessmentFaqSection;
