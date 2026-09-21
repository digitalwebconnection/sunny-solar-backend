import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, X, Phone, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { navigationData } from '../../../data/navigationData';
import { Button } from '../../ui/Button';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Animate in/out
  React.useEffect(() => {
    if (isOpen) {
      // Small delay to allow DOM to render before animating
      requestAnimationFrame(() => setIsVisible(true));
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  // Keep mounted briefly for exit animation
  const [shouldRender, setShouldRender] = React.useState(false);
  React.useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    } else {
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  const toggleSection = (title: string) => {
    setExpandedSection((prev) => (prev === title ? null : title));
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`fixed inset-y-0 right-0 w-[85vw] max-w-sm bg-white shadow-2xl z-50 flex flex-col overflow-y-auto transition-transform duration-300 ease-out ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>


        {/* Links with Accordion Submenus */}
        <div className="p-4 flex-1 divide-y divide-slate-100 space-y-1">
          {navigationData.map((section) => {
            const hasChildren = Boolean(section.children?.items?.length);
            const isExpanded = expandedSection === section.title;

            return (
              <div key={section.title} className="py-2">
                {hasChildren ? (
                  <div>
                    <button
                      type="button"
                      onClick={() => toggleSection(section.title)}
                      className="w-full flex items-center justify-between py-3 min-h-11 text-left font-bold text-slate-800 hover:text-[#2B3CB8] transition-colors text-base"
                    >
                      <span>{section.title}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180 text-[#2B3CB8]' : 'text-slate-400'
                          }`}
                      />
                    </button>

                    {isExpanded && section.children && (
                      <div className="pl-3 mt-1 space-y-0.5 border-l-2 border-[#2B3CB8]">
                        <Link
                          to={section.href}
                          onClick={onClose}
                          className="block py-2.5 min-h-11 items-center text-xs font-bold text-[#2B3CB8] hover:underline"
                        >
                          View {section.title} Overview →
                        </Link>
                        {section.children.items.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            onClick={onClose}
                            className="block py-2.5 min-h-11 items-center text-sm text-slate-600 hover:text-[#2B3CB8] font-medium"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={section.href}
                    onClick={onClose}
                    className="py-3 min-h-11 flex items-center font-bold text-slate-800 hover:text-[#2B3CB8] transition-colors text-base"
                  >
                    {section.title}
                  </Link>
                )}
              </div>
            );
          })}

          {/* Quick Support, Trust and Resource Links */}
          <div className="pt-4 space-y-1 text-sm text-slate-500">
            <Link to="/about/trent" onClick={onClose} className="block py-2 min-h-11 items-center hover:text-[#2B3CB8]">
              Meet Trent (Founder Bio)
            </Link>
            <Link to="/reviews" onClick={onClose} className="py-2 min-h-11 flex items-center hover:text-[#2B3CB8]">
              Verified Customer Reviews
            </Link>
            <Link to="/service-areas" onClick={onClose} className="py-2 min-h-11 flex items-center hover:text-[#2B3CB8]">
              Service Areas & Locations
            </Link>
            <Link to="/resources" onClick={onClose} className="py-2 min-h-11 flex items-center hover:text-[#2B3CB8]">
              Buyer Guides & Checklists
            </Link>
            <Link to="/faq" onClick={onClose} className="py-2 min-h-11 flex items-center hover:text-[#2B3CB8]">
              Frequently Asked Questions
            </Link>
            <Link to="/contact" onClick={onClose} className="py-2 min-h-11 flex items-center hover:text-[#2B3CB8]">
              Contact Our Electricians
            </Link>
          </div>
        </div>

        {/* Drawer Footer with CTA */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-3">
          <Button
            to="/get-started/free-assessment"
            onClick={onClose}
            variant="primary"
            size="md"
            fullWidth
            className="rounded-full bg-[#2B3CB8] hover:bg-[#1D2984] text-white border-0 shadow-lg shadow-[#2B3CB8]/25"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Free Solar Assessment
          </Button>

          <div className="pt-2 text-xs text-slate-500 space-y-1.5">
            <a
              href="tel:1300030479"
              className="flex items-center gap-2 text-slate-700 font-semibold hover:text-[#2B3CB8]"
            >
              <Phone className="w-3.5 h-3.5 text-[#2B3CB8]" />
              1300 030 479
            </a>
            <a
              href="mailto:info@sunnysolar.com.au"
              className="flex items-center gap-2 text-slate-500 hover:text-slate-800"
            >
              <Mail className="w-3.5 h-3.5 text-[#2B3CB8]" />
              info@sunnysolar.com.au
            </a>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-[#2B3CB8] font-medium pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2B3CB8] shrink-0" />
            <span>NETCC APPROVED SELLER #A4892</span>
          </div>
        </div>
      </div>
    </div>
  );
};
