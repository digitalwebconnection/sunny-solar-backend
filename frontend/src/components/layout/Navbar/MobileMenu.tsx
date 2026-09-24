import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, Phone, ArrowRight } from 'lucide-react';
import { navigationData, NavSection } from '../../../data/navigationData';

const logo = '/logo.png';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const location = useLocation();

  // Close menu and collapse submenus when route changes
  useEffect(() => {
    onClose();
    setExpandedSection(null);
  }, [location.pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setExpandedSection(null);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const toggleSection = (title: string) => {
    setExpandedSection((prev) => (prev === title ? null : title));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with smooth fade */}
          <motion.div
            key="mobile-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/50 backdrop-blur-xs z-50 lg:hidden"
            aria-hidden="true"
          />

          {/* Drawer with smooth spring slide */}
          <motion.aside
            key="mobile-menu-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 320, mass: 0.8 }}
            className="fixed inset-y-0 right-0 w-[85vw] sm:w-[360px] max-w-full bg-white shadow-2xl z-50 flex flex-col lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            {/* Header: Logo and Close Button */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 bg-white shrink-0">
              <Link to="/" onClick={onClose} className="flex items-center">
                <img src={logo} alt="Sunny Solar" className="h-9 w-auto object-contain" />
              </Link>

              <button
                type="button"
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors active:scale-95 cursor-pointer"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Clean Navigation Links */}
            <div className="flex-1 overflow-y-auto px-4 py-3 divide-y divide-slate-100 overscroll-contain">
              {navigationData.map((section: NavSection) => {
                const hasChildren = Boolean(section.children?.items?.length);
                const isExpanded = expandedSection === section.title;

                return (
                  <div key={section.title} className="py-1">
                    {hasChildren ? (
                      <div>
                        {/* Accordion Row */}
                        <button
                          type="button"
                          onClick={() => toggleSection(section.title)}
                          className="w-full flex items-center justify-between py-3 px-2 rounded-lg text-left font-bold text-slate-800 hover:text-[#2B3CB8] hover:bg-[#F5F7FD] transition-colors text-base cursor-pointer"
                          aria-expanded={isExpanded}
                        >
                          <span className="flex items-center gap-2">
                            {section.title}
                            {section.badge && (
                              <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-[#2B3CB8]/10 text-[#2B3CB8]">
                                {section.badge}
                              </span>
                            )}
                          </span>
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-slate-400"
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        </button>

                        {/* Smooth Expanding Submenu */}
                        <AnimatePresence initial={false}>
                          {isExpanded && section.children && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.22, ease: [0.04, 0.62, 0.23, 0.98] }}
                              className="overflow-hidden pl-3 pr-1 pb-2 space-y-0.5 border-l-2 border-[#2B3CB8] ml-2"
                            >
                              <Link
                                to={section.href}
                                onClick={onClose}
                                className="block py-2 px-2 text-xs font-bold text-[#2B3CB8] hover:underline"
                              >
                                View all {section.title} →
                              </Link>
                              {section.children.items.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  to={subItem.href}
                                  onClick={onClose}
                                  className="flex items-center justify-between py-2 px-2 text-sm text-slate-600 hover:text-[#2B3CB8] hover:bg-slate-50 rounded-md font-medium transition-colors"
                                >
                                  <span>{subItem.title}</span>
                                  {subItem.badge && (
                                    <span className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200/60">
                                      {subItem.badge}
                                    </span>
                                  )}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      /* Direct Link */
                      <Link
                        to={section.href}
                        onClick={onClose}
                        className="flex items-center justify-between py-3 px-2 rounded-lg font-bold text-slate-800 hover:text-[#2B3CB8] hover:bg-[#F5F7FD] transition-colors text-base"
                      >
                        <span>{section.title}</span>
                        <ArrowRight className="w-4 h-4 text-slate-300" />
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Simple Footer: CTA & Direct Contact */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-3 shrink-0">
              <Link
                to="/get-started/free-assessment"
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#2B3CB8] hover:bg-[#1D2984] text-white font-bold text-sm shadow-md shadow-[#2B3CB8]/20 transition-all active:scale-[0.98]"
              >
                <span>Free Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="tel:1300030479"
                className="flex items-center justify-center gap-2 py-2 text-xs font-bold text-slate-700 hover:text-[#2B3CB8] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#2B3CB8]" />
                <span>1300 030 479</span>
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
