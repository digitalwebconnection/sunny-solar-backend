import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AddBatteryHeroSection } from './sections/AddBatteryHeroSection';
import { AddBatteryHowItWorksSection } from './sections/AddBatteryHowItWorksSection';
import { AddBatteryRetrofitChoicesSection } from './sections/AddBatteryRetrofitChoicesSection';
import { AddBatteryBackupSection } from './sections/AddBatteryBackupSection';

export const AddBatteryPage: React.FC = () => {
  return (
    <div className="min-h-screen pb-10 space-y-16 sm:space-y-14">
      <Helmet>
        <title>Retrofit a Battery to Your Existing Solar | Sunny Solar</title>
        <meta
          name="description"
          content="Add an AC-coupled home battery to your existing solar array without voiding your current feed-in tariffs or replacing working inverters."
        />
      </Helmet>
      {/* Section 1: AC-Coupled Retrofit Hero & Inverter-Agnostic Overview */}
      <AddBatteryHeroSection />

      {/* Section 2: 4-Stage Solar + Battery Energy Flow & Switchboard Synergy */}
      <AddBatteryHowItWorksSection />

      {/* Section 3: Inverter-Agnostic Battery Retrofit Systems & Compatibility Matrix */}
      <AddBatteryRetrofitChoicesSection />

      {/* Section 4: Blackout Defense, Daytime Solar Islanding & Real-World Resilience */}
      <AddBatteryBackupSection />
    </div>
  );
};

export default AddBatteryPage;
