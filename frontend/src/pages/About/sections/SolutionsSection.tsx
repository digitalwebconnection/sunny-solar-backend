import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Building2, Award, TrendingUp } from 'lucide-react';

interface SolutionCard {
  icon: React.ReactNode;
  iconColor: string;
  title: string;
  description: string;
  bgImage: string;
}

export const SolutionsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const cards: SolutionCard[] = [
    {
      icon: <Shield className="w-9 h-9 text-amber-500 stroke-[1.8]" />,
      iconColor: 'text-amber-500',
      title: 'Adani & Polycab Partner',
      description:
        'Authorized partner delivering Tier-1 PV modules and world-class on-grid solar inverters.',
      bgImage: '/images/solutions/adani-polycab.jpg',
    },
    {
      icon: <Building2 className="w-9 h-9 text-sky-600 stroke-[1.8]" />,
      iconColor: 'text-sky-600',
      title: '1-Box Solar KIT (1-25 kW)',
      description:
        'Complete turnkey box with all components ready for fast rooftop solar PV installation.',
      bgImage: '/images/solutions/solar-kit.jpg',
    },
    {
      icon: <Award className="w-9 h-9 text-amber-500 stroke-[1.8]" />,
      iconColor: 'text-amber-500',
      title: 'Trained In-House Engineers',
      description:
        'Dedicated team of certified engineers supporting solar installers and system integrators.',
      bgImage: '/images/solutions/engineers.jpg',
    },
    {
      icon: <TrendingUp className="w-9 h-9 text-sky-600 stroke-[1.8]" />,
      iconColor: 'text-sky-600',
      title: 'DISCOM Net-Metering',
      description:
        'Sanctioned net-metering & generation meters (Secure & L&T DLMS Class 0.5S) with CTs.',
      bgImage: '/images/solutions/net-metering.jpg',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 lg:py-14 overflow-hidden bg-white"
    >


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight text-center leading-[1.15]"
          initial={{ opacity: 0, y: 25 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          One Stop Solution for All
          <br />
          <span className="text-slate-900">Solar Rooftop </span>
          <span className="bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h2>

        {/* 4 Cards Grid with Clearly Visible Background Images & Upper Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 sm:mt-16">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl p-7 sm:p-8 h-80 border border-slate-200/90 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center group bg-white"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
            >
              {/* Card Background Image Layer — clearly visible */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <img
                  src={card.bgImage}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out "
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/55 to-black/80 " />
              </div>

              {/* Upper Content Layer */}
              <div className="relative z-10 flex flex-col items-center text-center w-full">
                {/* Icon inside frosted container */}
                <div className="w-16 h-16 rounded-2xl bg-white/95 backdrop-blur-md shadow-md border border-slate-200/80 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-serif font-bold text-white mb-3 group-hover:text-amber-600 transition-colors">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-white leading-relaxed font-medium">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default SolutionsSection;
