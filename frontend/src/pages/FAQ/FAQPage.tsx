import React, { useState } from 'react';
import { PageHeader } from '../../components/layout/PageHeader';
import { faqData } from '../../data/faqData';
import { Accordion } from '../../components/ui/Accordion';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { HelpCircle, Phone, ArrowRight } from 'lucide-react';

const categories = ['All', 'Solar', 'Batteries', 'Existing Solar', 'Buying', 'Technical'] as const;

export const FAQPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredItems =
    activeCategory === 'All'
      ? faqData
      : faqData.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <PageHeader
        badge="Help & Knowledge"
        title="Frequently Asked"
        highlightText="Questions"
        description="Clear, honest answers about solar technology, home batteries, federal STC rebates, and our master installation warranties."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-10">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion Component */}
        <Accordion items={filteredItems} allowMultiple defaultOpenId={filteredItems[0]?.id} />

        {/* Still have questions banner */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-8 text-center space-y-4 shadow-sm">
          <h3 className="text-xl font-extrabold text-slate-900">
            Have a question not answered here?
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Speak directly with one of our Master Electricians. No call centers, no sales pitch.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="tel:1300786697"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 font-bold text-sm text-slate-800 hover:bg-slate-50 transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              Call 1300 SUNNY
            </a>
            <Button to="/get-started/free-assessment" variant="primary" size="md">
              Ask Via Online Assessment
            </Button>
            <Button to="/contact" variant="outline" size="md">
              Send Direct Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
