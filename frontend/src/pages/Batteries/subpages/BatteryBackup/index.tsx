import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BatteryBackupHeroSection } from './sections/BatteryBackupHeroSection';
import { BatteryBackupSimulatorSection } from './sections/BatteryBackupSimulatorSection';
import { BatteryBackupWiringComparisonSection } from './sections/BatteryBackupWiringComparisonSection';
import { BatteryBackupStormWatchSection } from './sections/BatteryBackupStormWatchSection';

export const BatteryBackupPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <Helmet>
        <title>Blackout Protection & Emergency Battery Backup | Sunny Solar</title>
        <meta
          name="description"
          content="Keep essential circuits or your whole home running through severe storm outages and grid disruptions with instant solar battery backup."
        />
      </Helmet>
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
