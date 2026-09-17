import React from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { SmoothScroll } from './components/common/SmoothScroll';
import { Navbar } from './components/layout/Navbar/Navbar';
import { Footer } from './components/layout/Footer/Footer';
import { MobileStickyActionBar } from './components/layout/MobileStickyActionBar';
import { AppRoutes } from './routes/AppRoutes';

function AppLayout() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  // Completely separate layout for Admin Portal: no public header, footer, or sticky bar
  if (isAdmin) {
    return (
      <>
        <ScrollToTop />
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-amber-500 selection:text-slate-950">
          <AppRoutes />
        </div>
      </>
    );
  }

  // Standard public website layout
  return (
    <SmoothScroll>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen selection:bg-[#1d4ed8] selection:text-white relative">
        <Navbar />
        <main className="grow">
          <AppRoutes />
        </main>
        <Footer />
        <MobileStickyActionBar />
      </div>
    </SmoothScroll>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
