import React from 'react';
import { BatteryBackupHeroSection } from './sections/BatteryBackupHeroSection';
import { BatteryBackupSimulatorSection } from './sections/BatteryBackupSimulatorSection';
import { BatteryBackupWiringComparisonSection } from './sections/BatteryBackupWiringComparisonSection';
import { BatteryBackupStormWatchSection } from './sections/BatteryBackupStormWatchSection';

export const BatteryBackupPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* 1. Page Header */}
      <BatteryBackupHeroSection />

      <div className=" mt-12 space-y-16">
        {/* 2. Interactive Outage Simulator & Runtime Calculator */}
        <BatteryBackupSimulatorSection />

        {/* 3. Whole-Home vs Essential Circuits Comparison */}
        <BatteryBackupWiringComparisonSection />

        {/* 4. Storm Watch Feature Spotlight with Photo */}
        <BatteryBackupStormWatchSection />

  
      </div>
    </div>
  );
};

export default BatteryBackupPage;
