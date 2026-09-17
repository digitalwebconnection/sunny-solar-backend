import React, { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { articlesData } from '../../../data/blogData';
import { Breadcrumbs } from '../../../components/layout/Breadcrumbs';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { api } from '../../../services/api';
import {
  Clock,
  Calendar,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Share2,
  Check,
  ShieldCheck,
  BookOpen,
  Phone,
  Calculator,
  Lightbulb,
  FileText,
  UserCheck,
  Sun,
  BatteryCharging,
  Coins,
  Wrench,
  Cpu,
  ChevronDown,
  HelpCircle,
  BarChart3,
  Award,
  Zap,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* CATEGORY CONFIGURATION                                                     */
/* -------------------------------------------------------------------------- */
const categoryConfig: Record<
  string,
  {
    badgeVariant: 'amber' | 'emerald' | 'navy' | 'slate';
    icon: React.ComponentType<{ className?: string }>;
    accentColor: string;
    proTip: string;
    standardRef: string;
  }
> = {
  'Solar Basics': {
    badgeVariant: 'amber',
    icon: Sun,
    accentColor: 'amber',
    proTip:
      'Under AS/NZS 5033 and Clean Energy Council guidelines, you can oversize panel capacity by up to 133% of your inverter AC rating (e.g. 8.8kW of panels on a 6.6kW inverter). This ensures full harvest earlier in the morning and sustains yield through cloudy Queensland weather.',
    standardRef: 'AS/NZS 5033:2021 Installation Standard',
  },
  Batteries: {
    badgeVariant: 'emerald',
    icon: BatteryCharging,
    accentColor: 'emerald',
    proTip:
      'When sizing a battery for blackout protection, prioritize continuous locked-rotor surge kW over total kWh capacity. High continuous inverter surge is what prevents blackouts from tripping when your ducted air conditioning or pool pump compressor kicks in.',
    standardRef: 'AS/NZS 4777.2 & AS/NZS 5139 Battery Safety Standard',
  },
  'Buying Solar': {
    badgeVariant: 'navy',
    icon: Coins,
    accentColor: 'blue',
    proTip:
      'With feed-in tariffs at 4c-7c/kWh, your real financial engine is avoided retail cost. Every kWh you consume directly during the day saves you 34c-38c/kWh in purchased grid electricity. System sizing and timer scheduling should reflect daytime consumption first.',
    standardRef: 'Clean Energy Regulator STC Guidelines',
  },
  'Existing Solar': {
    badgeVariant: 'amber',
    icon: Wrench,
    accentColor: 'amber',
    proTip:
      'Rooftop DC isolator switches installed before 2018 have experienced high failure rates across Australia due to UV embrittlement and water ingress. Have a licensed CEC electrician inspect your isolators and carry out thermal imaging during any system health check.',
    standardRef: 'AS/NZS 5033 Fire Safety Standards',
  },
  Technical: {
    badgeVariant: 'slate',
    icon: Cpu,
    accentColor: 'slate',
    proTip:
      'In hot Australian summers where roof temperatures exceed 65°C, N-Type TOPCon panels (-0.26%/°C) lose significantly less power than older P-Type PERC panels (-0.38%/°C). Over a full year, this yields 8-12% higher real-world energy harvest in sunny Queensland.',
    standardRef: 'IEC 61215 & IEC 61730 Photovoltaic Testing Standards',
  },
};

const defaultCategoryConfig = {
  badgeVariant: 'amber' as const,
  icon: BookOpen,
  accentColor: 'amber',
  proTip:
    'Ensure all solar equipment is listed on the Clean Energy Council Approved Products register to qualify for federal STC rebates and local DNSP grid connection approval.',
  standardRef: 'Clean Energy Council Approved Hardware Standards',
};

/* -------------------------------------------------------------------------- */
/* RICH TECHNICAL ARTICLES DATA (Specialized Blueprint & FAQs)                */
/* -------------------------------------------------------------------------- */
interface RichArticleData {
  blueprintTitle: string;
  blueprintBadge: string;
  quickStats: { label: string; value: string }[];
  matrixHeaders: string[];
  matrixRows: { feature: string; col1: string; col2: string; col3?: string }[];
  deepDiveSections: {
    title: string;
    paragraphs: string[];
    highlightBox?: {
      title: string;
      text: string;
    };
  }[];
  faqs: { question: string; answer: string }[];
}

const richArticlesMap: Record<string, RichArticleData> = {
  'what-size-solar-system-do-i-need': {
    blueprintTitle: '2025 Residential Solar Sizing Decision Matrix',
    blueprintBadge: 'Engineering Sizing Guide',
    quickStats: [
      { label: 'Baseline Sizing', value: '6.6 kW' },
      { label: 'Modern Sweet Spot', value: '8.8 kW' },
      { label: 'Avg Daily Output', value: '26 - 38 kWh' },
      { label: 'Typical Payback', value: '2.8 - 3.4 Yrs' },
    ],
    matrixHeaders: ['Metric / Requirement', 'Entry: 6.6 kW', 'Sweet Spot: 8.8 kW', 'Electrified: 10-13.2 kW'],
    matrixRows: [
      {
        feature: 'Number of Panels',
        col1: '15 - 16 Panels (440W)',
        col2: '20 - 22 Panels (440W)',
        col3: '24 - 30 Panels (440W)',
      },
      {
        feature: 'Inverter AC Capacity',
        col1: '5.0 kW (1-Phase)',
        col2: '6.6 kW (1-Phase)',
        col3: '8.2 - 10 kW (3-Phase)',
      },
      {
        feature: 'Required Roof Area',
        col1: 'Approx. 32 m²',
        col2: 'Approx. 44 m²',
        col3: 'Approx. 58 - 65 m²',
      },
      {
        feature: 'Ideal Household Profile',
        col1: '1-2 people, gas hot water, no ducted A/C',
        col2: '3-5 people, ducted A/C, swimming pool',
        col3: 'Large family, EV charging, 2x Heat pumps',
      },
      {
        feature: 'Battery Readiness',
        col1: 'Covers nighttime basic baseload',
        col2: 'Generates enough daytime surplus to fill 10-13kWh battery',
        col3: 'Ideal for 15-25kWh battery + EV overnight charging',
      },
    ],
    deepDiveSections: [
      {
        title: '1. Why the Outdated "5kW Rule" Is Costing Homeowners Money',
        paragraphs: [
          'Five years ago, a 5kW solar system was the cookie-cutter standard across Queensland. Today, that sizing recommendation is thoroughly obsolete. Modern households have electrified: induction cooking, ducted reverse-cycle air conditioning, heat pump water heaters, and electric vehicles have pushed typical daily consumption from 14 kWh to 24-35 kWh.',
          'Because the federal Small-scale Renewable Energy Scheme (STC rebate) provides an upfront point-of-sale discount for systems up to 100kW, the incremental cost to upgrade from 6.6kW to 8.8kW is remarkably low — typically around $1,200 to $1,800. In return, you receive up to 35% more electricity every single day.',
        ],
        highlightBox: {
          title: 'The Golden Rule of Modern Solar Sizing',
          text: 'Never size your solar system just for today’s power bill. Sizing your roof array to cover future battery storage and electric vehicles now avoids having to pay double for a second installer callout and switchboard upgrade 24 months down the road.',
        },
      },
      {
        title: '2. The 133% Oversizing Rule Explained (CEC Engineering Standard)',
        paragraphs: [
          'One of the most common questions homeowners ask is: "Why does my quote specify 8.8kW of panels when the inverter is only rated for 6.6kW?"',
          'Under Clean Energy Council guidelines and AS/NZS 5033 standards, solar arrays are permitted to be oversized up to 133% of the inverter’s nominal AC rating. Solar panels rarely operate at 100% of their lab-tested Standard Test Condition (STC) capacity due to Queensland’s intense rooftop heat, morning haze, and seasonal sun angles.',
          'By pairing an 8.8kW array with a 6.6kW inverter, your system reaches peak output earlier at 8:30 AM and maintains peak generation until 4:30 PM. While minor "inverter clipping" occurs for a brief 90 minutes around midday in midsummer, the total daily harvest gained in morning and late afternoon far outweighs any clipped energy.',
        ],
      },
      {
        title: '3. Network Export Limits: Single-Phase vs Three-Phase in Queensland',
        paragraphs: [
          'In Southeast Queensland, your local Distribution Network Service Provider (DNSP) — either Energex or Ergon Energy — dictates how much power you can export back into the electrical grid.',
          'On a standard single-phase residential supply, Energex permits a maximum inverter capacity of 5kVA with a 5kW export limit. However, through modern smart hybrid inverters with dynamic export management, you can install a 6.6kW or 8kW inverter with panel capacity up to 10kW, programmatically capping grid export at 5kW while routing all surplus generation straight into your home appliances or battery.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Will my inverter overheat if I oversize panels up to 133%?',
        answer:
          'No. Quality tier-1 inverters (like Sungrow, Fronius, and Enphase) are engineered with integrated heat sinks and smart thermal throttling. Inverters only draw the electrical current they require; extra panel capacity does not force excess current through the electronics.',
      },
      {
        question: 'What if my roof does not face true North?',
        answer:
          'East- and West-facing roofs are now highly desirable! While North delivers peak midday harvest, an East-West split generates power during the critical morning rush (7:00 AM - 9:00 AM) and evening peak (4:00 PM - 7:00 PM), maximizing direct household consumption.',
      },
      {
        question: 'Can I install a 6.6kW system today and add more panels later?',
        answer:
          'Adding panels to an existing system later is often difficult and expensive because Australian electrical standards (AS/NZS 5033) update frequently. Adding panels later typically requires replacing the inverter, upgrading switchboard wiring, and re-certifying the entire system. It is vastly more economical to max out your roof on day one.',
      },
    ],
  },
  'tesla-powerwall-3-vs-sungrow-sbr': {
    blueprintTitle: 'Tesla Powerwall 3 vs Sungrow SBR: Architectural Breakdown',
    blueprintBadge: 'Battery Hardware Face-off',
    quickStats: [
      { label: 'Powerwall Capacity', value: '13.5 kWh' },
      { label: 'Sungrow Modular', value: '9.6 - 25.6 kWh' },
      { label: 'Continuous Surge', value: '11.5 kW vs 5-10 kW' },
      { label: 'Warranty Retention', value: '70% at 10 Yrs' },
    ],
    matrixHeaders: ['Feature / Specification', 'Tesla Powerwall 3', 'Sungrow SBR High-Voltage'],
    matrixRows: [
      {
        feature: 'Usable Battery Capacity',
        col1: '13.5 kWh per chassis',
        col2: 'Modular: 9.6, 12.8, 16.0, 19.2, or 25.6 kWh',
      },
      {
        feature: 'Continuous Output (On-Grid/Backup)',
        col1: '11.5 kW continuous power',
        col2: '5.0 kW to 10.0 kW (depends on hybrid inverter model)',
      },
      {
        feature: 'Motor Starting Surge (LRA)',
        col1: '185 LRA (Starts heavy ducted A/C effortlessly)',
        col2: '35 - 50 A (Adequate for standard appliances)',
      },
      {
        feature: 'Cell Chemistry',
        col1: 'Nickel Manganese Cobalt (NMC)',
        col2: 'Cobalt-Free Lithium Iron Phosphate (LiFePO4)',
      },
      {
        feature: 'Inverter Architecture',
        col1: 'Integrated 6x MPPT solar inverter chassis',
        col2: 'DC-coupled to external Sungrow Hybrid Inverter',
      },
      {
        feature: 'Three-Phase Compatibility',
        col1: 'Single-phase backup; 3 units needed for full 3-phase',
        col2: 'Native balanced 3-phase hybrid support with 1 battery stack',
      },
    ],
    deepDiveSections: [
      {
        title: '1. Inverter Architecture: Integrated vs Modular Split-System',
        paragraphs: [
          'The fundamental difference between Tesla Powerwall 3 and the Sungrow SBR system lies in their architecture. The Powerwall 3 is an all-in-one system: the battery cells, battery management system (BMS), and an 11.5kW solar string inverter with 6 MPPT trackers are housed inside a single streamlined enclosure.',
          'Sungrow employs a modular split-system philosophy. The SBR battery consists of stackable 3.2kWh modular bricks that connect directly into an external Sungrow hybrid inverter (such as the SH5.0RS or SH10RS). This allows you to start with 9.6kWh and add additional modules down the track as your budget allows.',
        ],
        highlightBox: {
          title: 'Master Electrician Verdict on Inverter Failure',
          text: 'If an inverter fault occurs on Powerwall 3, both solar generation and battery storage go offline during warranty replacement. With Sungrow, the battery stack and inverter are separate components, making field service and individual component replacement straightforward.',
        },
      },
      {
        title: '2. Chemistry Deep-Dive: LiFePO4 vs NMC Thermal Profiles',
        paragraphs: [
          'Sungrow utilizes Lithium Iron Phosphate (LiFePO4 / LFP) prismatic cells. LFP is widely recognized by battery engineers as the safest residential chemistry available: it is completely cobalt-free, has a thermal runaway threshold exceeding 270°C, and offers superior cycle longevity in hot Australian garages.',
          'Tesla Powerwall 3 utilizes advanced NMC chemistry with liquid thermal cooling. NMC provides higher energy density, allowing Tesla to deliver 13.5kWh and 11.5kW of continuous power in a compact wall footprint. Tesla’s proprietary glycol liquid cooling loop ensures optimal cell temperature even during 40°C heatwaves.',
        ],
      },
      {
        title: '3. Blackout Emergency Power Supply & Surge Performance',
        paragraphs: [
          'Where the Tesla Powerwall 3 stands in a class of its own is peak locked-rotor surge capability. With 11.5kW of continuous output and up to 185 LRA surge, Powerwall 3 can effortlessly start high-draw inductive loads — such as 16kW ducted air conditioners or borehole water pumps — without tripping into safety protection during a blackout.',
          'Sungrow SBR delivers whole-home backup when paired with their Backup Box, switching over in under 20 milliseconds (fast enough that desktop computers and clocks never reboot). However, for homes with large multi-zone ducted A/C, you may need a soft-starter on your compressor or load-shedding contactors.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can Tesla Powerwall 3 be added to my existing solar system?',
        answer:
          'Yes, but because Powerwall 3 includes its own integrated 11.5kW solar inverter, it can either replace your old solar inverter entirely or be AC-coupled to your existing array using a Tesla Gateway 2.',
      },
      {
        question: 'Can I add more battery modules to Sungrow SBR later?',
        answer:
          'Yes. Sungrow allows modules to be added within the first 2-3 years. If you start with a 3-module 9.6kWh stack, you can easily expand to 4 modules (12.8kWh) or up to 8 modules (25.6kWh) as your power consumption grows.',
      },
      {
        question: 'Which system has better app monitoring?',
        answer:
          'The Tesla mobile app is widely considered the gold standard for intuitive UI, real-time storm watch weather tracking, and EV charging integration. Sungrow’s iSolarCloud provides deeper technical data, string-level voltage metrics, and trade diagnostic tools preferred by electrical engineers.',
      },
    ],
  },
  'solar-rebates-and-feed-in-tariffs-explained': {
    blueprintTitle: 'Australian Solar Financial Engine: STC Rebate & FiT Breakdown',
    blueprintBadge: 'Economics & ROI Analysis',
    quickStats: [
      { label: 'STC Rebate Value', value: '$2,400 - $3,600' },
      { label: 'Avg Feed-in Tariff', value: '4 - 7c / kWh' },
      { label: 'Avoided Grid Cost', value: '34 - 38c / kWh' },
      { label: 'Effective ROI', value: '22% - 28% p.a.' },
    ],
    matrixHeaders: ['Financial Mechanism', 'How It Works', 'Current 2025 Value', 'Homeowner Strategy'],
    matrixRows: [
      {
        feature: 'Small-scale Technology Certificates (STC)',
        col1: 'Federal point-of-sale rebate based on 10-year expected generation',
        col2: 'Deducts approx. $380 - $420 per kW of panels directly off invoice',
        col3: 'Maximize panel footprint on initial install before annual rebate phase-down',
      },
      {
        feature: 'Feed-in Tariff (FiT)',
        col1: 'Retailer credit for excess solar electricity exported to grid',
        col2: '4.5c to 7.0c per exported kWh in Southeast QLD',
        col3: 'Exporting power for pennies is dead; avoid sending power to the grid',
      },
      {
        feature: 'Self-Consumption (Avoided Cost)',
        col1: 'Powering appliances directly with rooftop solar energy',
        col2: 'Saves 34c to 38c per kWh otherwise purchased from AGL/Origin/Alinta',
        col3: 'Run heat pumps, pool filtration, and dishwashers between 10am and 3pm',
      },
      {
        feature: 'Solar Battery Storage',
        col1: 'Storing daytime solar surplus for evening peak tariff discharge',
        col2: 'Displaces peak evening grid electricity (up to 42c/kWh)',
        col3: 'Adds blackout resilience and eliminates 85-95% of retail quarterly bill',
      },
    ],
    deepDiveSections: [
      {
        title: '1. The STC Federal Rebate: How the Point-of-Sale Discount Works',
        paragraphs: [
          'The Australian federal government solar rebate is administered through the Clean Energy Regulator under the Small-scale Renewable Energy Scheme (SRES). It is not a government tax refund that you claim at tax time; instead, it is an upfront point-of-sale discount.',
          'When you install an accredited system, Clean Energy Council approved installers generate Small-scale Technology Certificates (STCs) based on your postcode rating zone and total kW capacity. On an 8.8kW system in Brisbane or the Gold Coast, STCs immediately shave between $2,800 and $3,400 off your quote.',
        ],
        highlightBox: {
          title: 'Important: The Annual STC Deeming Period Phase-Down',
          text: 'The SRES scheme is legislated to end on December 31, 2030. Every year on January 1st, the certificate multiplier drops by one year. Waiting another year to install solar automatically reduces your federal rebate discount by roughly 9-10%.',
        },
      },
      {
        title: '2. Why Feed-in Tariffs Dropped from 44c to 5c/kWh',
        paragraphs: [
          'Homeowners who remember Queensland’s 44-cent Solar Bonus Scheme in 2010 are often shocked to see 2025 feed-in tariffs sitting at 4c to 6c per kWh. This drop is not a retailer conspiracy — it reflects the wholesale physics of the National Electricity Market (NEM).',
          'With over 3.5 million Australian homes generating clean solar simultaneously at 1:00 PM, midday wholesale electricity prices frequently collapse to zero or negative values. Retail energy providers cannot pay 20 cents for electricity that is essentially free on the wholesale market.',
        ],
      },
      {
        title: '3. The Modern ROI Formula: Squeezing Maximum Value from Avoided Cost',
        paragraphs: [
          'Because exported electricity earns only 5c/kWh while imported electricity costs 34c/kWh, the financial secret of solar is 100% self-consumption.',
          'Every single kilowatt-hour you divert into running your swimming pool chlorinator, hot water heat pump, ducted air conditioning, or EV charger saves you 34 cents immediately. By shifting daytime loads into your solar production window, an 8.8kW solar system generates over $2,100 to $2,800 in annual tax-free savings, achieving complete capital payback in under 3.2 years.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I have to apply for the STC solar rebate myself?',
        answer:
          'No. Your CEC Accredited installer calculates the STCs and applies them as a direct discount line-item on your final quote. You sign an STC assignment form on the day of commissioning.',
      },
      {
        question: 'Can I switch energy retailers to get a higher feed-in tariff?',
        answer:
          'Be very careful! Retailers that advertise higher feed-in tariffs (e.g. 10c/kWh) often compensate by charging significantly higher daily supply charges (e.g. $1.35/day) or higher evening peak rates (44c/kWh). Always calculate total annual net bill impact rather than chasing FiT alone.',
      },
      {
        question: 'Is a solar battery mandatory to get a good return on investment?',
        answer:
          'No. A well-sized solar array without a battery still yields an outstanding 22% to 28% annual return on investment simply through daytime self-consumption. A battery is an upgrade for blackout security and evening independence.',
      },
    ],
  },
  'signs-your-existing-solar-system-is-failing': {
    blueprintTitle: '5-Point Solar System Health & Fire Safety Audit',
    blueprintBadge: 'Safety & Diagnostic Standard',
    quickStats: [
      { label: 'Highest Risk', value: 'Pre-2018 DC Isolators' },
      { label: 'Inverter Lifespan', value: '7 - 10 Years' },
      { label: 'Degradation Alert', value: '>15% Output Drop' },
      { label: 'Audit Standard', value: 'AS/NZS 5033:2021' },
    ],
    matrixHeaders: ['Diagnostic Check', 'Warning Sign / Symptom', 'Risk Level', 'Mandatory Action'],
    matrixRows: [
      {
        feature: '1. Inverter Status Lights',
        col1: 'Solid red light, flashing orange, or blank LCD screen',
        col2: 'High (System is completely offline or in fault mode)',
        col3: 'Check error code (Isolation/Ground fault); do not attempt rebooting yourself',
      },
      {
        feature: '2. Rooftop DC Isolator Switch',
        col1: 'Discolored/burnt casing, water droplets inside switch, cracked UV plastic',
        col2: 'Critical Fire Hazard (Major cause of Australian rooftop fires)',
        col3: 'Isolate via switchboard and contact a licensed CEC electrician immediately',
      },
      {
        feature: '3. Quarterly Generation Slump',
        col1: 'Power bill suddenly spikes; quarterly harvest dropped >25% vs last year',
        col2: 'Moderate Financial Drain',
        col3: 'Book a full I-V curve tracer audit to identify failed panel strings',
      },
      {
        feature: '4. Panel Micro-cracks & Browning',
        col1: 'Snail trails, EVA browning, delaminated white backsheet, broken glass',
        col2: 'High (Hotspots can cause thermal glass shatter and DC arc faults)',
        col3: 'Thermal imaging inspection to check for failed bypass diodes',
      },
      {
        feature: '5. Switchboard RCD / Breaker Trips',
        col1: 'Solar circuit breaker trips intermittently on rainy or humid mornings',
        col2: 'High (Indicates moisture entering cabling or isolator conduits)',
        col3: 'Perform 1,000V insulation resistance test on DC strings',
      },
    ],
    deepDiveSections: [
      {
        title: '1. The Silent Rooftop Crisis: Why 1 in 3 Older Systems Have Faults',
        paragraphs: [
          'Australia has installed rooftop solar faster than any nation on earth, with over 3.5 million systems operating. However, independent audits by state safety regulators indicate that nearly one in three systems over six years old suffer from unaddressed electrical faults.',
          'Because solar systems work silently without moving parts, an inverter shutdown or blown fuse often goes completely unnoticed for months. Homeowners only realize their system stopped generating when an unexpectedly massive $900 quarterly power bill lands in their mailbox.',
        ],
        highlightBox: {
          title: 'The Pre-2018 Rooftop DC Isolator Alert',
          text: 'Between 2012 and 2018, Australian standards mandated rooftop DC isolator switches. Unfortunately, harsh Australian UV radiation degraded cheap polycarbonate enclosures, allowing rain ingress that caused internal DC electrical arcing and rooftop fires. Newer standards allow isolators to be safely omitted when panels are enclosed in heavy-duty conduit.',
        },
      },
      {
        title: '2. Decoding Inverter Error Codes: Ground Faults vs Grid Voltage High',
        paragraphs: [
          'When an inverter displays a red fault light, it has triggered its internal protective relays. Two error types dominate:',
          'Isolation Faults (ISO Low / Earth Fault): Moisture has penetrated the DC wiring, connectors, or solar panel backsheet, causing current to leak to the roof frame. This is a severe shock hazard and the inverter refuses to start.',
          'Grid Overvoltage (AC Overvoltage >253V): On sunny days, neighborhood solar generation pushes street grid voltage above the legal Australian ceiling of 253V. The inverter throttles output or shuts down to protect home appliances.',
        ],
      },
      {
        title: '3. What Happens During a Professional 24-Point Solar Health Check',
        paragraphs: [
          'A certified Clean Energy Council solar health check goes far beyond spraying panels with a garden hose. A licensed solar electrician performs:',
          '• High-voltage DC insulation resistance testing at 1,000V to detect cable degradation.\n• Infrared thermal imaging to detect hidden cell hotspots and failing bypass diodes.\n• Rooftop isolator torque and seal integrity inspection.\n• Switchboard breaker and surge protection verification.\n• Generation benchmark verification against local irradiance satellite data.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How often should a residential solar system be inspected?',
        answer:
          'The Clean Energy Council recommends a comprehensive electrical health inspection every 2 to 3 years. Systems over 5 years old should be inspected annually to ensure fire safety seals remain watertight.',
      },
      {
        question: 'Can I replace just my inverter if my panels are still functioning?',
        answer:
          'Yes! Upgrading an old 5kW string inverter to a modern smart hybrid inverter (like Sungrow or GoodWe) restores full generation and immediately makes your home battery-ready. However, your installer must verify that existing panel open-circuit voltages comply with modern standards.',
      },
      {
        question: 'Do dirty panels really cause a significant drop in power?',
        answer:
          'Light dust typically causes a 3-5% drop, which is usually washed away by regular rain. However, heavy bird droppings, lichen, or sap from nearby gum trees can block individual cells, creating localized hot spots that drop string output by up to 20-30%.',
      },
    ],
  },
  'n-type-topcon-vs-perc-solar-panels': {
    blueprintTitle: 'N-Type TOPCon vs P-Type PERC: Silicon Cell Physics Comparison',
    blueprintBadge: 'Next-Gen Cell Engineering',
    quickStats: [
      { label: 'TOPCon Temp Coeff', value: '-0.26% / °C' },
      { label: 'PERC Temp Coeff', value: '-0.38% / °C' },
      { label: 'Initial LID', value: '0.0% (Zero)' },
      { label: '30-Yr Yield Retention', value: '87.4% Output' },
    ],
    matrixHeaders: ['Technical Parameter', 'N-Type TOPCon (Tunnel Oxide)', 'P-Type PERC (Older Standard)'],
    matrixRows: [
      {
        feature: 'Silicon Base Doping',
        col1: 'N-Type (Phosphorus-doped; zero Boron-Oxygen defects)',
        col2: 'P-Type (Boron-doped; prone to Light-Induced Degradation)',
      },
      {
        feature: 'Temperature Coefficient (Pmax)',
        col1: '-0.26% to -0.30% / °C (High heat resilience)',
        col2: '-0.36% to -0.40% / °C (Significant summer power drop)',
      },
      {
        feature: 'Loss at 65°C Roof Surface (Summer)',
        col1: '10.4% derating (Generates 89.6% of rated watts)',
        col2: '15.2% derating (Generates only 84.8% of rated watts)',
      },
      {
        feature: 'Light-Induced Degradation (LID)',
        col1: '0.0% (Immune to first-year boron-oxygen loss)',
        col2: '1.5% to 2.5% loss in the first 6 months of sunlight',
      },
      {
        feature: 'Bifaciality Factor',
        col1: '80% to 85% rear capture efficiency',
        col2: '65% to 70% rear capture efficiency',
      },
      {
        feature: '30-Year Linear Warranty',
        col1: '87.4% retained power guaranteed at Year 30',
        col2: '80.2% retained power guaranteed at Year 25',
      },
    ],
    deepDiveSections: [
      {
        title: '1. Silicon Physics: Why N-Type TOPCon Eliminated Recombination',
        paragraphs: [
          'For over a decade, P-type PERC (Passivated Emitter and Rear Cell) panels dominated the global residential market. However, manufacturing advances have allowed TOPCon (Tunnel Oxide Passivated Contact) to conquer the market with dramatically superior silicon physics.',
          'In traditional P-type silicon, boron atoms react with trace oxygen under initial sunlight exposure, creating Boron-Oxygen defects that cause immediate Light-Induced Degradation (LID). N-type silicon uses phosphorus instead of boron, completely eliminating LID and preventing minority carrier recombination through an ultra-thin 1.5nm tunnel oxide layer.',
        ],
        highlightBox: {
          title: 'The Real-World Queensland Summer Impact',
          text: 'Solar panels are rated at Standard Test Conditions (STC) of 25°C. On a 35°C Brisbane summer afternoon, dark rooftop panels regularly reach 65°C to 70°C. Under these blistering conditions, TOPCon panels produce 8% to 12% more kilowatt-hours every single afternoon than standard PERC panels.',
        },
      },
      {
        title: '2. Dual-Glass Encapsulation and Coastal Salt Spray Durability',
        paragraphs: [
          'Most modern Tier-1 TOPCon panels (such as AIKO, Trina Vertex S+, and JinkoSolar Tiger Neo) are manufactured with dual-glass encapsulation (2.0mm tempered glass on the front and 2.0mm on the rear) replacing the traditional plastic polymer backsheet.',
          'For homes on the Gold Coast, Sunshine Coast, or Moreton Bay, dual-glass construction provides an impermeable barrier against salt mist corrosion, coastal humidity, and moisture ingress that historically degraded internal silver busbars in cheaper panels.',
        ],
      },
      {
        title: '3. Financial Payoff: Is TOPCon Worth the Extra $20 per Panel?',
        paragraphs: [
          'With production scale rapidly maturing, the price premium for N-Type TOPCon panels has collapsed to less than $15-$25 per panel compared to older stock PERC modules.',
          'Over a 25-year operating lifespan, that nominal $300-$400 upfront difference on a 20-panel system generates over 18,000 additional kilowatt-hours of harvest. That equates to more than $5,400 in additional avoided grid electricity costs, making TOPCon an indisputable engineering choice.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is TOPCon the same as HJT (Heterojunction) or ABC (All-Back-Contact)?',
        answer:
          'They are related N-type technologies. TOPCon uses passivated tunnel oxide contacts. HJT combines crystalline silicon with amorphous silicon layers. ABC (All-Back-Contact) moves all electrical busbars to the rear for maximum light absorption. All three represent premium N-type silicon.',
      },
      {
        question: 'Do TOPCon panels generate more power on overcast or rainy days?',
        answer:
          'Yes. Because N-type silicon has higher low-light spectral sensitivity in the infrared and diffuse wavelength bands, TOPCon panels start harvesting earlier at dawn and maintain output deeper into dusk or through overcast weather.',
      },
      {
        question: 'Which manufacturers produce Tier-1 TOPCon panels in Australia?',
        answer:
          'Leading Clean Energy Council approved manufacturers including AIKO, Trina Solar, JinkoSolar, Longi, and Canadian Solar have transitioned their flagship residential product lines to N-Type TOPCon technology.',
      },
    ],
  },
};

/* -------------------------------------------------------------------------- */
/* MAIN COMPONENT                                                             */
/* -------------------------------------------------------------------------- */
export const KnowledgeDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [article, setArticle] = useState<any>(() => {
    return articlesData.find((a) => a.slug === slug) || null;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchGuide = async () => {
      if (!slug) return;
      try {
        const res = await api.getKnowledgeBySlug(slug);
        if (isMounted && res?.data) {
          setArticle(res.data);
          setLoading(false);
          return;
        }
      } catch (err) {
        // Fallback to static
      }

      if (isMounted) {
        const local = articlesData.find((a) => a.slug === slug) || null;
        setArticle(local);
        setLoading(false);
      }
    };

    fetchGuide();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  // Dynamic SEO Injection
  useEffect(() => {
    if (!article) return;
    const originalTitle = document.title;
    document.title = article.metaTitle || `${article.title} | Sunny Solar Knowledge Hub`;

    const updateMetaTag = (nameAttr: string, nameValue: string, content: string) => {
      let el = document.querySelector(`meta[${nameAttr}="${nameValue}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(nameAttr, nameValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
      return el;
    };

    updateMetaTag('name', 'description', article.metaDescription || article.excerpt);
    if (article.keywords) updateMetaTag('name', 'keywords', article.keywords);

    if (article.canonicalUrl) {
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', article.canonicalUrl);
    }

    return () => {
      document.title = originalTitle;
    };
  }, [article]);

  if (!loading && !article) {
    return <Navigate to="/learn/knowledge-hub" replace />;
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center py-24">
        <div className="w-10 h-10 border-3 border-amber-500/20 border-t-amber-500 rounded-full animate-spin" />
      </div>
    );
  }

  const articleIndex = articlesData.findIndex((a) => a.slug === slug);
  const prevArticle = articleIndex > 0 ? articlesData[articleIndex - 1] : null;
  const nextArticle =
    articleIndex !== -1 && articleIndex < articlesData.length - 1
      ? articlesData[articleIndex + 1]
      : null;

  const relatedArticles = articlesData
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  const config = categoryConfig[article.category] || defaultCategoryConfig;
  const CategoryIcon = config.icon;

  // Retrieve rich technical data if available, or fallback to static map
  const defaultRich = richArticlesMap[article.slug];
  const richData = {
    blueprintTitle:
      article.blueprintTitle || defaultRich?.blueprintTitle || '2025 Technical Decision Matrix',
    blueprintBadge:
      article.blueprintBadge || defaultRich?.blueprintBadge || 'Engineering Sizing Guide',
    quickStats:
      article.quickStats && article.quickStats.length > 0
        ? article.quickStats
        : defaultRich?.quickStats || [],
    matrixHeaders:
      article.matrixHeaders && article.matrixHeaders.length > 0
        ? article.matrixHeaders
        : defaultRich?.matrixHeaders || [],
    matrixRows:
      article.matrixRows && article.matrixRows.length > 0
        ? article.matrixRows
        : defaultRich?.matrixRows || [],
    deepDiveSections: defaultRich?.deepDiveSections || [],
    faqs:
      article.faqs && article.faqs.length > 0
        ? article.faqs
        : defaultRich?.faqs || []
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 sm:pt-28 pb-24">
      {/* -------------------------------------------------------------------- */}
      {/* 1. TOP BREADCRUMBS & NAVIGATION BAR                                  */}
      {/* -------------------------------------------------------------------- */}
      <div className="bg-white border-b border-slate-200/80 shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden">
            <Breadcrumbs
              customItems={[
                { label: 'Knowledge Hub', href: '/learn/knowledge-hub' },
                { label: article.category, href: '/learn/knowledge-hub' },
                { label: article.title },
              ]}
              className="py-0 px-0 max-w-none m-0 flex-1 min-w-0"
            />
          </div>

          <Link
            to="/learn/knowledge-hub"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-amber-50 hover:border-amber-300 text-xs font-bold text-slate-600 hover:text-amber-700 transition-all shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Back to Knowledge Hub</span>
            <span className="sm:hidden">Back</span>
          </Link>
        </div>
      </div>

      {/* -------------------------------------------------------------------- */}
      {/* 2. MAIN 2-COLUMN ARTICLE LAYOUT (max-w-6xl)                          */}
      {/* -------------------------------------------------------------------- */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ================================================================ */}
          {/* MAIN ARTICLE COLUMN (8 cols)                                     */}
          {/* ================================================================ */}
          <article className="lg:col-span-8 space-y-6">
            {/* Primary Container Card */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-xs">
              {/* Category, Date, Read Time, Share Button */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant={config.badgeVariant}>
                    <span className="flex items-center gap-1">
                      <CategoryIcon className="w-3.5 h-3.5" />
                      {article.category}
                    </span>
                  </Badge>

                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.publishDate}
                  </span>
                  <span className="text-xs text-slate-400">•</span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-600 hover:text-amber-600 hover:border-amber-300 transition-all cursor-pointer shadow-2xs"
                  title="Share this guide"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied Link!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Share Guide</span>
                    </>
                  )}
                </button>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {article.title}
              </h1>

              {/* Excerpt / Lead */}
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {article.excerpt}
              </p>

              {/* Hero Image */}
              <div className="mt-6 -mx-6 sm:-mx-10 overflow-hidden">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-56 sm:h-72 md:h-80 object-cover"
                  loading="eager"
                />
              </div>

              {/* Author & Verification Row */}
              <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                    {article.author
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      <span>{article.author}</span>
                      <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <div className="text-xs text-slate-500">{article.authorRole}</div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>CEC Master Electrician Reviewed</span>
                </div>
              </div>

              {/* -------------------------------------------------------------- */}
              {/* SECTION: KEY TAKEAWAYS                                         */}
              {/* -------------------------------------------------------------- */}
              <div
                id="key-takeaways"
                className="mt-8 bg-amber-500/10 border-2 border-amber-400/40 rounded-2xl p-6 sm:p-7"
              >
                <h2 className="font-extrabold text-base sm:text-lg text-amber-950 mb-3.5 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-600" />
                  <span>Key Takeaways at a Glance</span>
                </h2>
                <ul className="space-y-3">
                  {article.keyTakeaways.map((takeaway, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-amber-950 leading-relaxed font-medium"
                    >
                      <span className="w-4 h-4 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* -------------------------------------------------------------- */}
              {/* SECTION: TECHNICAL KNOWLEDGE BLUEPRINT / SPEC MATRIX           */}
              {/* -------------------------------------------------------------- */}
              {richData && (
                <div
                  id="technical-blueprint"
                  className="mt-8 rounded-2xl border border-slate-200/90 bg-slate-900 text-white overflow-hidden shadow-sm"
                >
                  {/* Blueprint Top Header Bar */}
                  <div className="p-5 sm:p-6 bg-slate-950/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                        <BarChart3 className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                          {richData.blueprintBadge}
                        </span>
                        <h3 className="font-bold text-sm sm:text-base text-white">
                          {richData.blueprintTitle}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span>{config.standardRef}</span>
                    </div>
                  </div>

                  {/* Quick Metric Chips Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-slate-800">
                    {richData.quickStats.map((stat, idx) => (
                      <div key={idx} className="bg-slate-900 p-4 text-center">
                        <div className="text-[11px] text-slate-400 font-medium mb-1">
                          {stat.label}
                        </div>
                        <div className="text-base sm:text-lg font-extrabold text-amber-400">
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Comparison / Diagnostic Matrix Table */}
                  <div className="p-5 sm:p-6 overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse min-w-[540px]">
                      <thead>
                        <tr className="border-b border-slate-800 text-slate-400 font-semibold">
                          {richData.matrixHeaders.map((header, hIdx) => (
                            <th key={hIdx} className="pb-3 px-3 first:pl-0">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60">
                        {richData.matrixRows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-800/40 transition-colors">
                            <td className="py-3 px-3 first:pl-0 font-semibold text-slate-200">
                              {row.feature}
                            </td>
                            <td className="py-3 px-3 text-slate-300">{row.col1}</td>
                            <td className="py-3 px-3 text-slate-300">{row.col2}</td>
                            {row.col3 && (
                              <td className="py-3 px-3 text-slate-300">{row.col3}</td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* -------------------------------------------------------------- */}
              {/* SECTION: DEEP DIVE ARTICLES CONTENT                            */}
              {/* -------------------------------------------------------------- */}
              <div id="deep-dive" className="mt-10 space-y-8">
                {richData ? (
                  richData.deepDiveSections.map((sec, sIdx) => (
                    <div key={sIdx} className="space-y-4">
                      <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                        {sec.title}
                      </h2>
                      {sec.paragraphs.map((para, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-slate-700 text-sm sm:text-base leading-relaxed"
                        >
                          {para}
                        </p>
                      ))}

                      {sec.highlightBox && (
                        <div className="my-5 p-5 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-950">
                          <h4 className="font-bold text-xs sm:text-sm text-amber-900 flex items-center gap-1.5 mb-1.5">
                            <Zap className="w-4 h-4 text-amber-600" />
                            <span>{sec.highlightBox.title}</span>
                          </h4>
                          <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
                            {sec.highlightBox.text}
                          </p>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="space-y-5 text-slate-700 text-base leading-relaxed">
                    {typeof article.content === 'string' ? (
                      <div
                        className="rich-blog-content"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                      />
                    ) : Array.isArray(article.content) ? (
                      article.content.map((paragraph: string, idx: number) => (
                        <p key={idx} className={idx === 0 ? 'text-slate-900 font-medium' : ''}>
                          {paragraph}
                        </p>
                      ))
                    ) : null}
                  </div>
                )}
              </div>

              {/* -------------------------------------------------------------- */}
              {/* SECTION: MASTER ELECTRICIAN TRADE COMPLIANCE                   */}
              {/* -------------------------------------------------------------- */}
              <div
                id="trade-standards"
                className="mt-10 rounded-2xl bg-slate-900 text-white p-6 sm:p-7 shadow-md"
              >
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <Lightbulb className="w-4 h-4" />
                  <span>Master Electrician Trade Advisory</span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  What Homeowners Must Verify on Their Quote
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {config.proTip}
                </p>
                <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Verified by Trent Palmer (CEC Master Electrician #84920)
                  </span>
                  <span className="text-amber-400 font-semibold">{config.standardRef}</span>
                </div>
              </div>

              {/* -------------------------------------------------------------- */}
              {/* SECTION: FREQUENTLY ASKED QUESTIONS ACCORDION                  */}
              {/* -------------------------------------------------------------- */}
              {richData && richData.faqs && richData.faqs.length > 0 && (
                <div id="faq-summary" className="mt-10 pt-8 border-t border-slate-100">
                  <h3 className="text-lg font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-amber-500" />
                    <span>Frequently Asked Questions</span>
                  </h3>

                  <div className="space-y-3">
                    {richData.faqs.map((faq, fIdx) => (
                      <div
                        key={fIdx}
                        className="rounded-xl border border-slate-200 overflow-hidden bg-white transition-all"
                      >
                        <button
                          type="button"
                          onClick={() => toggleFaq(fIdx)}
                          className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors cursor-pointer"
                        >
                          <span>{faq.question}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${openFaqIndex === fIdx ? 'rotate-180 text-amber-600' : ''
                              }`}
                          />
                        </button>
                        {openFaqIndex === fIdx && (
                          <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* -------------------------------------------------------------- */}
              {/* SECTION: PREVIOUS & NEXT GUIDES NAVIGATION                     */}
              {/* -------------------------------------------------------------- */}
              <div className="mt-10 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {prevArticle ? (
                  <Link
                    to={`/learn/knowledge-hub/${prevArticle.slug}`}
                    className="group p-4 rounded-xl border border-slate-200 hover:border-amber-400 hover:bg-amber-50/30 transition-all text-left block"
                  >
                    <div className="flex items-center gap-1 text-xs text-slate-400 mb-1">
                      <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                      <span>Previous Guide</span>
                    </div>
                    <div className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-1">
                      {prevArticle.title}
                    </div>
                  </Link>
                ) : (
                  <div />
                )}

                {nextArticle ? (
                  <Link
                    to={`/learn/knowledge-hub/${nextArticle.slug}`}
                    className="group p-4 rounded-xl border border-slate-200 hover:border-amber-400 hover:bg-amber-50/30 transition-all text-right block"
                  >
                    <div className="flex items-center justify-end gap-1 text-xs text-slate-400 mb-1">
                      <span>Next Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-1">
                      {nextArticle.title}
                    </div>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </div>

            {/* Bottom Primary Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <Button
                to="/learn/knowledge-hub"
                variant="outline"
                size="md"
                icon={<ArrowLeft className="w-4 h-4" />}
                iconPosition="left"
              >
                Back to All Guides
              </Button>

              <Button
                to="/get-started/free-assessment"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Get Free Roof Assessment
              </Button>
            </div>
          </article>

          {/* ================================================================ */}
          {/* STICKY SIDEBAR COLUMN (4 cols)                                   */}
          {/* ================================================================ */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            {/* Table of Contents Navigation */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs">
              <h3 className="font-bold text-sm text-slate-900 mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-500" />
                <span>On This Page</span>
              </h3>
              <nav className="space-y-1 text-xs">
                <a
                  href="#key-takeaways"
                  className="block p-2 rounded-xl text-slate-600 hover:text-amber-600 hover:bg-amber-50/60 transition-colors font-medium"
                >
                  ⚡ Key Takeaways at a Glance
                </a>
                {richData && (
                  <a
                    href="#technical-blueprint"
                    className="block p-2 rounded-xl text-slate-600 hover:text-amber-600 hover:bg-amber-50/60 transition-colors font-medium"
                  >
                    📊 Technical Knowledge Blueprint
                  </a>
                )}
                <a
                  href="#deep-dive"
                  className="block p-2 rounded-xl text-slate-600 hover:text-amber-600 hover:bg-amber-50/60 transition-colors font-medium"
                >
                  📖 In-Depth Analysis
                </a>
                <a
                  href="#trade-standards"
                  className="block p-2 rounded-xl text-slate-600 hover:text-amber-600 hover:bg-amber-50/60 transition-colors font-medium"
                >
                  🛡️ Master Electrician Standards
                </a>
                {richData && richData.faqs && (
                  <a
                    href="#faq-summary"
                    className="block p-2 rounded-xl text-slate-600 hover:text-amber-600 hover:bg-amber-50/60 transition-colors font-medium"
                  >
                    ❓ Frequently Asked Questions
                  </a>
                )}
              </nav>
            </div>

            {/* Free Assessment & Sizing Calculator CTA Box */}
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-2xl p-6 shadow-md">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-white/20 text-white uppercase tracking-wider mb-2.5">
                Free Assessment
              </span>
              <h3 className="font-extrabold text-lg leading-snug">
                Need Help Applying This To Your Roof?
              </h3>
              <p className="mt-2 text-xs text-amber-50 leading-relaxed">
                Get an independent 3D solar layout and battery sizing calculation custom-engineered for your Queensland home.
              </p>

              <div className="mt-5 space-y-2.5">
                <Button
                  to="/get-started/free-assessment"
                  variant="secondary"
                  size="sm"
                  className="w-full justify-center bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs py-2.5"
                >
                  Request Roof Assessment
                </Button>

                <Button
                  to="/calculators/system-size"
                  variant="outline"
                  size="sm"
                  className="w-full justify-center border-white/40 text-white hover:bg-white/10 text-xs py-2"
                  icon={<Calculator className="w-3.5 h-3.5" />}
                  iconPosition="left"
                >
                  Calculate System Size
                </Button>
              </div>

              <a
                href="tel:1300786697"
                className="mt-4 pt-3 border-t border-white/20 flex items-center justify-center gap-2 text-xs text-amber-100 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call 1300 SUNNY (786 697)</span>
              </a>
            </div>

            {/* Related Knowledge Guides */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs">
              <h3 className="font-bold text-sm text-slate-900 mb-3.5 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-500" />
                <span>Related Guides</span>
              </h3>

              <div className="space-y-3">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.slug}
                    to={`/learn/knowledge-hub/${rel.slug}`}
                    className="group block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/50 border border-slate-200/70 hover:border-amber-300 transition-all"
                  >
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-[10px] font-bold text-amber-700 bg-amber-100/60 px-2 py-0.5 rounded-md">
                        {rel.category}
                      </span>
                      <span className="text-[10px] text-slate-400">{rel.readTime}</span>
                    </div>
                    <h4 className="font-bold text-xs text-slate-800 group-hover:text-amber-600 transition-colors line-clamp-2 leading-snug">
                      {rel.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>

            {/* Official Certification & Standards Badge */}
            <div className="p-4 rounded-2xl border border-slate-200/80 bg-white shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200/60">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    Clean Energy Council Accredited
                  </div>
                  <div className="text-[11px] text-slate-500">
                    AS/NZS 5033:2021 & AS/NZS 4777.2 Certified
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeDetailPage;
