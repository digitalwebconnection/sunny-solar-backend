import React from 'react';
import { AddBatteryHeroSection } from './sections/AddBatteryHeroSection';
import { AddBatteryHowItWorksSection } from './sections/AddBatteryHowItWorksSection';
import { AddBatteryRetrofitChoicesSection } from './sections/AddBatteryRetrofitChoicesSection';
import { AddBatteryBackupSection } from './sections/AddBatteryBackupSection';

export const AddBatteryPage: React.FC = () => {
  return (
    <div className="min-h-screen pb-10 space-y-16 sm:space-y-14">
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
