export interface ProjectGalleryImage {
  url: string;
  caption: string;
  tag: string;
}

export interface Project {
  slug: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Battery Storage' | 'Acreage';
  location: string;
  systemSize: string;
  panels: string;
  inverter: string;
  battery?: string;
  annualSavings: string;
  co2Offset: string;
  paybackPeriod: string;
  selfConsumption: string;
  imageUrl: string;
  gallery: ProjectGalleryImage[];
  description: string;
  challengeSolution?: {
    challenge: string;
    solution: string;
  };
  customerQuote: {
    quote: string;
    author: string;
    suburb: string;
  };
  highlights: string[];
  specs: { [key: string]: string };
}
