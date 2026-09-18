import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/Logo.png';
import {
  Menu,
  Phone,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';
import { navigationData } from '../../../data/navigationData';
import { MegaMenu } from './MegaMenu';
import { MobileMenu } from './MobileMenu';
import { Button } from '../../ui/Button';

export const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const activeSection = navigationData.find((s) => s.title === activeMenu);

  return (
    <header className="fixed top-0 left-0 w-full z-40 transition-all duration-300">
      {/* Top Notification / Trust Bar (Semi-transparent & minimal) */}
      <div
        className={`text-xs py-1.5 px-4 sm:px-6 transition-colors duration-300 border-b ${isScrolled || !isHomePage
          ? 'bg-slate-950 text-white border-slate-800 backdrop-blur-md'
          : 'bg-white text-slate-900 border-slate-200/60 backdrop-blur-sm'
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 min-w-0">
            <span className="flex items-center gap-1.5 text-[#ed5001] font-semibold shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-[#265e11] shrink-0" />
              <span className="hidden sm:inline">CEC Approved Solar Retailer</span>
              <span className="sm:hidden">CEC Approved</span>
            </span>
            <span
              className={`hidden md:inline-flex items-center gap-1.5 font-bold text-[11px] px-2.5 py-0.5 rounded-full transition-all ${isScrolled || !isHomePage
                ? 'text-sky-300 bg-sky-950/80 border border-sky-500/40 shadow-xs'
                : 'text-blue-700 bg-blue-50 border border-blue-200/90 shadow-2xs'
                }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#1d4ed8] inline-block animate-pulse" />
              25-Year Performance Warranty
            </span>
            <span
              className={`hidden lg:inline-block ${isScrolled || !isHomePage ? 'text-slate-200' : 'text-slate-700'
                }`}
            >
              • Over 4,200+ Homes Powered
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <Link
              to="/service-areas"
              className={`transition-colors hidden sm:inline ${isScrolled || !isHomePage
                ? 'text-slate-200 hover:text-[#ed5001]'
                : 'text-slate-700 hover:text-[#ed5001]'
                }`}
            >
              Gold Coast • Brisbane • Sunshine Coast
            </Link>
            <a
              href="tel:1300786697"
              className={`flex items-center gap-1.5 font-bold transition-colors ${isScrolled || !isHomePage
                ? 'text-white hover:text-[#ed5001]'
                : 'text-slate-900 hover:text-[#ed5001]'
                }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#ed5001] shrink-0" />
              <span className="hidden sm:inline">1300 SUNNY (786 697)</span>
              <span className="sm:hidden">1300 SUNNY</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Transparent / Glass Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${isScrolled
          ? 'bg-[#ffffff]/95 backdrop-blur-xl text-black shadow-2xl py-1'
          : isHomePage
            ? 'bg-white  py-3 sm:py-1 text-black'
            : 'bg-[#ffffff]/90 backdrop-blur-md py-1 text-black'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="  flex items-center justify-center">
              <img
                src={logo}
                alt="Sunny Solar"
                className="h-11 sm:h-20 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav Links (Clean, bold, uppercase with Logo colors) */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navigationData.map((section) => {
              const hasChildren = Boolean(section.children?.items?.length);
              const isActive =
                location.pathname === section.href ||
                (section.children?.items.some((item) => location.pathname === item.href) ?? false);
              const isMenuOpen = activeMenu === section.title;

              return (
                <div
                  key={section.title}
                  className="relative py-1 group"
                  onMouseEnter={() => hasChildren && setActiveMenu(section.title)}
                >
                  <Link
                    to={section.href}
                    onClick={() => !hasChildren && setActiveMenu(null)}
                    className={`px-2 py-1 rounded-lg text-base font-semibold tracking-wide flex items-center gap-1.5 transition-all duration-150 ${isActive
                      ? isScrolled
                        ? 'text-[#265e11] bg-[#265e11]/10 font-bold'
                        : 'text-[#265e11] bg-white/15 font-bold'
                      : isMenuOpen
                        ? 'text-[#ed5001] bg-orange-50/80 font-semibold'
                        : isScrolled
                          ? 'text-[#18181b] hover:text-[#ed5001] hover:bg-orange-50/60'
                          : 'text-black hover:text-[#ed5001] hover:bg-white/10'
                      }`}
                  >
                    <span>{section.title}</span>
                    {hasChildren && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${isMenuOpen
                          ? 'rotate-180 text-[#ed5001]'
                          : isActive
                            ? isScrolled
                              ? 'text-[#265e11]'
                              : 'text-[#265e11]'
                            : isScrolled
                              ? 'text-[#18181b]/70 group-hover:text-[#ed5001]'
                              : 'text-black/80 group-hover:text-[#ed5001]'
                          }`}
                      />
                    )}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Right Action Buttons (Matching logo solar orange pill style) */}
          <div className="flex items-center gap-3">
            <Button
              to="/get-started/free-assessment"
              variant="primary"
              size="md"
              className="hidden lg:inline-flex rounded-full text-xs uppercase tracking-wider font-extrabold shadow-lg shadow-[#ed5001]/25 bg-linear-to-r from-[#ed5001] via-[#f06e02] to-[#f4a304] hover:from-[#c84300] hover:to-[#ed5001] text-white border-0"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Free Assessment
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 min-w-11 min-h-11 flex items-center justify-center rounded-xl transition-colors lg:hidden cursor-pointer text-slate-900 hover:bg-slate-100"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Desktop Mega Menu Dropdown */}
        {activeSection && activeSection.children && (
          <MegaMenu
            section={activeSection}
            isOpen={Boolean(activeMenu)}
            onClose={() => setActiveMenu(null)}
          />
        )}
      </nav>

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Navbar;
