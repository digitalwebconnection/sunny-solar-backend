export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  serviceType: 'Solar Installation' | 'Solar + Battery' | 'Battery Retrofit' | 'Solar Upgrade' | 'Health Check';
  title: string;
  comment: string;
  verified: boolean;
  systemSummary: string;
  source: 'Google Reviews' | 'SolarQuotes' | 'Trustpilot';
}

export const reviewsData: Review[] = [
  {
    id: 'rev-1',
    author: 'Brett Thomson',
    location: 'Broadbeach Waters, QLD',
    rating: 5,
    date: '2 weeks ago',
    serviceType: 'Solar + Battery',
    title: 'The cleanest installation and zero aggressive sales pitch',
    comment: 'We spent two months getting 4 quotes. Three companies used pushy call-centre closers who knew nothing about solar engineering. Trent from Sunny Solar visited our property, physically climbed into our roof cavity, and created a tailored proposal with no pressure. The installation crew arrived on time, was spotless, and walked me through the app. Power bill dropped from $940 to $22 last month!',
    verified: true,
    systemSummary: '10.5kW REC Solar Panels + 13.5kWh Tesla Powerwall 3',
    source: 'Google Reviews'
  },
  {
    id: 'rev-2',
    author: 'Claire & Patrick Wilson',
    location: 'Camp Hill, Brisbane',
    rating: 5,
    date: '1 month ago',
    serviceType: 'Solar Installation',
    title: 'Cut our power bill by 82% immediately',
    comment: 'With 3 teenage kids, a swimming pool, and ducted A/C running constantly during summer heatwaves, our bills were terrifying. Sunny Solar sized a 13.2kW system with smart load divert. The panels look sleek on our slate roof, and their after-sales support has been genuinely wonderful.',
    verified: true,
    systemSummary: '13.2kW AIKO All-Black System with Fronius Inverter',
    source: 'SolarQuotes'
  },
  {
    id: 'rev-3',
    author: 'Mark Henderson',
    location: 'Currumbin Valley, QLD',
    rating: 5,
    date: '2 months ago',
    serviceType: 'Battery Retrofit',
    title: 'Retrofit battery added to our 6-year-old existing solar',
    comment: 'Our existing 5kW solar was doing okay during the day, but we were giving power back to the grid for 5c/kWh and buying it back at 34c/kWh at night. Sunny Solar installed an AC-coupled Sungrow battery. Flawless process, rebate paperwork was 100% handled by their office team.',
    verified: true,
    systemSummary: '9.6kWh Sungrow SBR High Voltage Battery Retrofit',
    source: 'Google Reviews'
  },
  {
    id: 'rev-4',
    author: 'Sophie Martin',
    location: 'North Lakes, QLD',
    rating: 5,
    date: '3 months ago',
    serviceType: 'Health Check',
    title: 'Found a burnt isolator that another solar company missed',
    comment: 'Booked their Solar Health Check because our solar generation had mysteriously halved over the past year. Their technician detected a degraded DC isolator on the roof with thermal imaging that was a severe fire hazard. Fixed within 48 hours and system is running at 100% capacity again.',
    verified: true,
    systemSummary: 'Comprehensive 24-Point Solar Audit & Remediation',
    source: 'Trustpilot'
  },
  {
    id: 'rev-5',
    author: 'Graham Ross',
    location: 'Helensvale, QLD',
    rating: 5,
    date: '3 months ago',
    serviceType: 'Solar Upgrade',
    title: 'Upgraded our old 3kW system to modern 8.8kW system',
    comment: 'Replaced an old 2013 inverter and 12 low-wattage panels with modern high efficiency equipment. Double the power output for a fraction of the space. Great communication from the office staff throughout.',
    verified: true,
    systemSummary: '8.8kW Trina Vertex Dual Glass + Sungrow Hybrid',
    source: 'Google Reviews'
  },
  {
    id: 'rev-6',
    author: 'Nadia El-Sayed',
    location: 'New Farm, Brisbane',
    rating: 5,
    date: '4 months ago',
    serviceType: 'Solar + Battery',
    title: 'Incredible app experience and true whole-home backup',
    comment: 'We experienced two blackout storms already this season. While the entire street was pitch black, our lights, refrigeration and wifi stayed on without even a blink. Sunny Solar is easily the most trustworthy contractor we worked with during our renovation.',
    verified: true,
    systemSummary: '11.4kW Solar Array + Tesla Powerwall 3 with Backup Gateway',
    source: 'SolarQuotes'
  }
];
