export interface CalculatorMeta {
  id: string;
  slug: string;
  title: string;
  description: string;
  badge?: string;
  iconName: string;
  estimatedTime: string;
  inputsSummary: string;
}

export const calculatorsList: CalculatorMeta[] = [
  {
    id: 'solar-savings',
    slug: 'solar-savings',
    title: 'Solar Savings Calculator',
    description: 'Calculate your quarterly and 10-year electricity bill reductions based on current utility spend.',
    badge: 'Most Popular',
    iconName: 'DollarSign',
    estimatedTime: '60 seconds',
    inputsSummary: 'Current power bill, roof type & daily consumption habits'
  },
  {
    id: 'system-size',
    slug: 'system-size',
    title: 'System Size Calculator',
    description: 'Find the optimal solar array capacity (6.6kW to 15kW+) for your household appliance profile.',
    badge: 'Sizing Tool',
    iconName: 'Layers',
    estimatedTime: '90 seconds',
    inputsSummary: 'Household occupants, pool, EV & air conditioning status'
  },
  {
    id: 'payback',
    slug: 'payback',
    title: 'Payback & ROI Calculator',
    description: 'Determine the exact break-even timeline and internal rate of return incorporating STC incentives.',
    iconName: 'Clock',
    estimatedTime: '2 minutes',
    inputsSummary: 'Estimated capital investment, tariff rates & export feed-in'
  },
  {
    id: 'battery-savings',
    slug: 'battery-savings',
    title: 'Battery Savings Calculator',
    description: 'See how much peak-rate grid power you can avoid by storing daytime solar in a home battery.',
    badge: 'High Value',
    iconName: 'BatteryCharging',
    estimatedTime: '90 seconds',
    inputsSummary: 'Nighttime power draw, battery capacity & time-of-use tariffs'
  },
  {
    id: 'battery-size',
    slug: 'battery-size',
    title: 'Battery Size Calculator',
    description: 'Calculate whether a 5kWh, 9.6kWh, 13.5kWh, or 20kWh+ battery fits your evening consumption.',
    iconName: 'Sliders',
    estimatedTime: '2 minutes',
    inputsSummary: 'Evening air-con usage, blackout backup requirements'
  },
  {
    id: 'quote-comparison',
    slug: 'quote-comparison',
    title: 'Quote Comparison Tool',
    description: 'Compare two or three quotes side-by-side on panel tier, inverter warranty, and price per watt.',
    iconName: 'Scale',
    estimatedTime: '3 minutes',
    inputsSummary: 'Quote price, panel brand, inverter model & warranties'
  },
  {
    id: 'savings-so-far',
    slug: 'savings-so-far',
    title: 'How Much Have I Saved?',
    description: 'Audit your existing solar system generation against historical utility bills to verify ROI.',
    iconName: 'CheckCircle2',
    estimatedTime: '2 minutes',
    inputsSummary: 'Years installed, system size, generation data'
  },
  {
    id: 'is-solar-right-for-me',
    slug: 'is-solar-right-for-me',
    title: 'Is Solar Right for Me?',
    description: 'A 5-question feasibility assessment analyzing roof pitch, shading, home ownership, and switchboard age.',
    badge: 'Quick Quiz',
    iconName: 'HelpCircle',
    estimatedTime: '45 seconds',
    inputsSummary: 'Property ownership, roof material, shade condition'
  }
];
