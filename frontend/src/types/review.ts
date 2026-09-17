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
