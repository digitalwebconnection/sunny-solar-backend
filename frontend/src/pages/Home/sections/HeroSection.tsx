import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  Sun 
} from 'lucide-react';
import heroBgImage from '../../../assets/hero-installer.jpg';
import consultantAvatar from '../../../assets/main-removebg.png';

import { submitToWeb3Forms } from '../../../utils/web3forms';
import { api } from '../../../services/api';



export const HeroSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    postcode: '',
    address: '',
  });
  const [systemType, setSystemType] = useState<'combo' | 'solar' | 'battery'>('combo');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const navigate = useNavigate();



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const systemName = systemType === 'combo' ? 'Solar + Battery Combo' : systemType === 'solar' ? 'Solar Only' : 'Battery Only';

    // 1. Persist lead to database
    let backendSuccess = false;
    try {
      await api.createLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        suburb: formData.postcode || formData.address,
        service: systemName,
        sourcePage: 'Homepage Hero',
      });
      backendSuccess = true;
    } catch (dbErr) {
      console.warn('Database lead notice:', dbErr);
    }

    // 2. Dispatch via Web3Forms
    try {
      const res = await submitToWeb3Forms({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        postcode: formData.postcode,
        address: formData.address,
        system_type: systemName,
        page: 'Homepage Hero',
      }, {
        subject: `New Free Quote Request - ${formData.name} (${formData.postcode || formData.address})`,
        from_name: 'Sunny Solar Website',
      });

      setIsSubmitting(false);
      if (res.success || backendSuccess) {
        setIsSubmitted(true);
        navigate('/thank-you');
      } else {
        setErrorMessage(res.message || 'Error submitting request. Please try again.');
      }
    } catch (err: any) {
      setIsSubmitting(false);
      if (backendSuccess) {
        setIsSubmitted(true);
        navigate('/thank-you');
      } else {
        setErrorMessage('Error submitting request. Please try again.');
      }
    }
  };

  return (
    <section className="relative min-h-145 lg:min-h-auto flex items-center overflow-hidden">
      {/* Full-width Responsive Background Image (Clearly Visible) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroBgImage}
          alt="Sunny Solar Installation"
          className="w-full h-full object-cover object-center"
        />

        {/* Light Overlay to keep image clearly visible while ensuring text contrast */}
        <div className="absolute inset-0 bg-black/55 sm:bg-linear-to-t sm:from-black/85 sm:via-black/50 sm:to-black/30" />
        
        {/* Subtle deep solar panel blue ambient aura */}
        <div className="absolute -top-24 right-1/4 w-125 h-125 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Hero Content & Small Form Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 pt-28 sm:pt-36 lg:pt-52 pb-10 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          {/* Upper-Left Concise Content Block with Text Animations */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 text-left space-y-4"
          >
            {/* Top Micro Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-slate-900/80 border border-white/20 backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-blue-300 font-bold">SOLAR PANELS • SOLAR BATTERY • </span>
              
              <span className="text-amber-300 font-bold">ENERGY SOLUTIONS</span>
            </div>

            {/* Animated Headline with Dynamic Cycling Highlight */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-[1.18] drop-shadow-md min-h-19 sm:min-h-23 lg:min-h-29">
              Make Your Solar Decision With Confidence.{' '}
              <br className="hidden sm:inline" />
              <span className="inline-block relative">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={phraseIndex}
                    initial={{ opacity: 0, y: 16, filter: 'blur(5px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -16, filter: 'blur(5px)' }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block bg-linear-to-r from-[#ed5001] via-[#f06e02] to-[#f4a304] bg-clip-text text-transparent drop-shadow-[0_2px_14px_rgba(237,80,1,0.4)] font-extrabold"
                  >
                    Solar Made Simple.
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            {/* Subheading with Smooth Delayed Entrance */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm sm:text-base text-white leading-relaxed max-w-lg drop-shadow-sm"
            >
              Solar solutions designed around your home, your energy use and your goals. Understand your options. Choose what works for your home.
            </motion.p>

            {/* CTA Button with Interactive Micro-hover Effect */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="pt-1 flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <a
                href="#hero-quote-form"
                className="group inline-flex items-center justify-center gap-2 font-bold px-6 py-2.5 rounded-lg bg-linear-to-r from-[#ed5001] via-[#f06e02] to-[#f4a304] text-white shadow-md hover:shadow-xl hover:shadow-[#ed5001]/30 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm cursor-pointer w-full sm:w-auto"
              >
                <span>Explore Solar Options</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>              
            </motion.div>
          </motion.div>

          {/* Right-Side Small Lead-Gen Form with Subtle Fade-In */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex justify-center lg:justify-end mt-12 sm:mt-14 lg:mt-0"
          >
            <div id="hero-quote-form" className="relative w-full max-w-lg bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-white/50 text-slate-900">
              
              {/* Friendly Solar Specialist Avatar on Top-Right */}
              <div className="absolute -top-14 sm:-top-12 right-2 sm:right-7 pointer-events-none z-20 flex flex-col items-end select-none">
                

                {/* Cutout with subtle ambient glow and 3D shadow */}
                <div className="relative">
                  <div className="absolute inset-0 bg-[#ed5001]/15 rounded-full blur-md scale-90 -z-10" />
                  <img
                    src={consultantAvatar}
                    alt="Sunny Solar Energy Consultant"
                    className="w-24 sm:w-28 md:w-44.5 h-auto object-contain drop-shadow-[0_12px_18px_rgba(0,0,0,0.3)] filter"
                  />
                </div>
              </div>

              <div className="mb-3 text-left pr-24 sm:pr-28">
                <h3 className="text-base sm:text-2xl font-bold font-serif text-slate-900 leading-snug">
                  Get a Free Quote
                </h3>
                <p className="text-xs text-slate-500">
                  Fixed pricing • No obligation
                </p>
              </div>

              {/* Interactive System Type Selector */}
              <div className="mb-3 grid grid-cols-3 gap-2 p-1 bg-slate-100 rounded-lg text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setSystemType('combo')}
                  className={`py-1.5 px-2 rounded-md transition-all flex items-center justify-center gap-1 cursor-pointer ${
                    systemType === 'combo'
                      ? 'bg-linear-to-r from-[#ed5001] to-[#f06e02] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  <Sun className="w-3 h-3" />
                  <span>+</span>
                  <Zap className="w-3 h-3" />
                </button>
                <button
                  type="button"
                  onClick={() => setSystemType('solar')}
                  className={`py-1.5 px-2 rounded-md transition-all flex items-center justify-center gap-1 cursor-pointer ${
                    systemType === 'solar'
                      ? 'bg-[#1d4ed8] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  <Sun className="w-3 h-3" />
                  <span>Solar</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSystemType('battery')}
                  className={`py-1.5 px-2 rounded-md transition-all flex items-center justify-center gap-1 cursor-pointer ${
                    systemType === 'battery'
                      ? 'bg-[#265e11] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  <Zap className="w-3 h-3" />
                  <span></span>
                </button>
              </div>

              {isSubmitted ? (
                <div className="py-6 text-center space-y-2">
                  <CheckCircle2 className="w-9 h-9 text-[#265e11] mx-auto" />
                  <h4 className="text-sm font-bold text-slate-900">
                    Quote Request Sent!
                  </h4>
                  <p className="text-xs text-slate-600">
                    Thanks, <strong className="text-slate-900">{formData.name}</strong>. Our team will be in touch shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', postcode: '', address: '' });
                    }}
                    className="text-xs font-semibold text-[#ed5001] hover:underline pt-1 cursor-pointer"
                  >
                    Submit another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name *"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#ed5001] focus:ring-1 focus:ring-[#ed5001] transition-all"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number *"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#ed5001] focus:ring-1 focus:ring-[#ed5001] transition-all"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address *"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#ed5001] focus:ring-1 focus:ring-[#ed5001] transition-all"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        name="postcode"
                        required
                        value={formData.postcode}
                        onChange={handleChange}
                        placeholder="Post Code *"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#ed5001] focus:ring-1 focus:ring-[#ed5001] transition-all"
                      />
                    </div>

                    <div className="col-span-2">
                      <input
                        type="text"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="House Address *"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#ed5001] focus:ring-1 focus:ring-[#ed5001] transition-all"
                      />
                    </div>
                  </div>

                  {errorMessage && (
                    <div className="p-2 rounded bg-red-50 border border-red-200 text-red-600 text-xs text-center">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 px-4 rounded-lg font-bold text-xs sm:text-sm text-white bg-linear-to-r from-[#ed5001] via-[#f06e02] to-[#f4a304] hover:shadow-md hover:brightness-105 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-75 pt-2"
                  >
                    {isSubmitting ? (
                      <span>Submitting to Web3Forms...</span>
                    ) : (
                      <>
                        <span>Get Free Quote</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-400 pt-0.5">
                    🔒 100% privacy protected • No spam
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>

     
      </div>
    </section>
  );
};

export default HeroSection;
