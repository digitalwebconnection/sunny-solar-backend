import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';
import { CursorCard } from '@/components/ui/CursorCard';

interface FAQ {
  question: string;
  answer: string;
  image: string;
  description: string;
}

const faqs: FAQ[] = [
  {
    question: 'How long does a residential solar installation take?',
    answer:
      'Most standard residential installations (6.6kW to 13.2kW) are completed in a single day. Our team arrives around 7:00 AM, secures the roof, mounts the panels, completes the electrical wiring and inverter setup, and performs thorough safety testing by mid-afternoon.',
    image: '/images/projects/project-rooftop-array.jpg',
    description: 'Precision single-day rooftop installation by Master Electricians.',
  },
  {
    question: 'What warranties come with a Sunny Solar system?',
    answer:
      'You receive a 25-year panel product and performance warranty, a 10-to-15 year inverter warranty, and our comprehensive 10-year workmanship guarantee. If any part of your system underperforms, we manage the replacement directly.',
    image: '/images/projects/panel-engineering.jpg',
    description: '25-year panel performance & 10-year comprehensive workmanship warranty.',
  },
  {
    question: 'Will a home battery keep my power on during a blackout?',
    answer:
      'Yes. Systems equipped with backup capabilities (like Tesla Powerwall 3 or Sungrow EPS) automatically disconnect from the grid during an outage within milliseconds, keeping your lights, refrigeration, Wi-Fi, and essential circuits running seamlessly.',
    image: '/images/projects/project-battery-storage.jpg',
    description: 'Instant millisecond blackout backup protection with Tesla & Sungrow.',
  },
  {
    question: 'How do Australian Federal STC solar rebates work?',
    answer:
      'Small-scale Technology Certificates (STCs) provide an immediate point-of-sale discount based on your system’s expected clean energy output. On a typical 10kW system, STCs reduce upfront costs by $2,800 to $3,600. We claim these directly on your behalf so you only pay the net price.',
    image: '/images/projects/tesla-solar-roof.jpg',
    description: 'Immediate point-of-sale government STC discounts applied to your quote.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Filter FAQs based on real-time search query
  const filteredFaqs = useMemo(() => {  
    if (!searchQuery.trim()) return faqs;
    const query = searchQuery.toLowerCase().trim();
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <section className="py-8 sm:py-10 lg:py-14 bg-white relative overflow-hidden border-t border-slate-200/80">
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Column: Heading, Search Bar & Accordions */}
          <div className="lg:col-span-7 flex flex-col justify-center">


            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center md:text-left font-serif font-extrabold text-[#232d4b] tracking-tight leading-[1.15] mb-8">
              Frequently Asked <br className="hidden sm:inline" />
              Questions
            </h2>

            {/* Accordion Questions List */}
            <div className="divide-y divide-slate-200/80 border-t border-b border-slate-200/80">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <div key={index} className="transition-colors duration-150">
                      <CursorCard
                        as="div"
                        image={faq.image}
                        description={faq.description}
                        className="w-full"
                      >
                        <button
                          type="button"
                          onClick={() => toggleFAQ(index)}
                          className="w-full py-4 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none group"
                          aria-expanded={isOpen}
                        >
                          <span
                            className={`font-bold text-base sm:text-lg transition-colors duration-150 pr-2 ${isOpen
                              ? 'text-[#2B3CB8]'
                              : 'text-slate-800 group-hover:text-[#2B3CB8]'
                              }`}
                          >
                            {faq.question}
                          </span>

                          <div className="shrink-0 flex items-center justify-center w-6 h-6 text-slate-400 group-hover:text-slate-600 transition-colors">
                            {isOpen ? (
                              <Minus className="w-4 h-4 text-[#2B3CB8] stroke-[2.5]" />
                            ) : (
                              <Plus className="w-4 h-4 text-slate-400 group-hover:text-slate-600 stroke-[2.5]" />
                            )}
                          </div>
                        </button>
                      </CursorCard>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <p className="pb-5 pt-0.5 pr-6 text-slate-500 text-sm sm:text-base leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })
              ) : (
                <div className="py-10 text-center">
                  <HelpCircle className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                  <p className="text-slate-600 font-medium text-base">
                    No questions found matching "{searchQuery}"
                  </p>
                  <p className="text-slate-400 text-sm mt-1">
                    Try another search term or ask our solar specialists directly.
                  </p>
                  <div className="mt-3 flex items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="text-sm font-semibold text-[#2B3CB8] hover:underline cursor-pointer"
                    >
                      Clear search filter
                    </button>
                    <span className="text-slate-300">•</span>
                    <Link
                      to="/contact"
                      className="text-sm font-semibold text-[#2B3CB8] hover:underline"
                    >
                      Contact our team
                    </Link>
                  </div>
                </div>
              )}
            </div>

           

          </div>

          {/* Right Column: High-Res FAQ 3D Character Illustration */}
          <div className="lg:col-span-5 hidden  md:flex items-center justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">

              {/* Soft warm aura glow behind the illustration */}
              <div className="absolute -inset-4 bg-linear-to-tr from-amber-100/40 via-orange-50/25 to-slate-100/50  blur-2xl -z-10 pointer-events-none" />

              {/* Illustration container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative flex items-center justify-center"
              >
                <img
                  src="/images/home/faq-illustration.jpg"
                  alt="Frequently Asked Questions - Sunny Solar Help & Advice"
                  className="w-full h-auto object-contain max-h-125 sm:max-h-147.5  transition-transform duration-500 "
                  loading="lazy"
                />
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
