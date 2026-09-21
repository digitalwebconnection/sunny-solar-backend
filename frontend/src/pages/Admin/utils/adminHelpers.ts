import { TimelineHealth, BlogFormData, KnowledgeFormData } from '../types';

export const getTimelineHealth = (item: {
  isPublished: boolean;
  isDeleted?: boolean;
  views: number;
}): TimelineHealth => {
  if (item.isDeleted) return { percent: 24, status: 'archived', color: 'rose' };
  if (!item.isPublished) return { percent: 45, status: 'draft', color: 'amber' };
  const views = item.views || 0;
  if (views > 100) return { percent: 92, status: 'high', color: 'emerald' };
  if (views > 30) return { percent: 72, status: 'healthy', color: 'emerald' };
  return { percent: 58, status: 'active', color: 'emerald' };
};

export const getDefaultBlogFormData = (todayFormatted: string): BlogFormData => ({
  title: '',
  slug: '',
  excerpt: '',
  category: 'Solar Basics',
  readTime: '5 min read',
  publishDate: todayFormatted,
  author: 'Trent Palmer',
  authorRole: 'Founder & Master Electrician',
  imageUrl: '',
  content: '',
  keyTakeaways: '',
  metaTitle: '',
  canonicalUrl: '',
  keywords: '',
  metaDescription: '',
  schema: '',
  longContent: '',
  isPublished: true
});

export const getDefaultKnowledgeFormData = (todayFormatted: string): KnowledgeFormData => ({
  title: '',
  slug: '',
  excerpt: '',
  category: 'Solar Basics',
  readTime: '6 min read',
  publishDate: todayFormatted,
  author: 'Trent Palmer',
  authorRole: 'Founder & Master Electrician',
  imageUrl: '',
  content:
    '<p>Welcome to our comprehensive technical field guide. In this section we explore engineering benchmarks, hardware sizing formulas, and real-world system longevity.</p>',
  keyTakeaways:
    'Standardize on N-Type silicon cells for enhanced temperature resilience.\nMaintain inverter oversizing between 1.25x and 1.33x.\nEnsure Tier-1 structural mounting with AS/NZS 5033:2021 compliance.',
  blueprintTitle: 'Engineering Blueprint & Field Specifications',
  blueprintBadge: 'Technical Specification',
  quickStats: [
    { label: 'Recommended Orientation', value: 'North 15° - 35° Pitch' },
    { label: 'Average Daily Output', value: '24 - 32 kWh / day' },
    { label: 'DC Sizing Ratio', value: '1.33x Oversizing' }
  ],
  matrixHeaders: [
    'Specification',
    'Budget Entry',
    'Premium Standard',
    'Commercial Grade'
  ],
  matrixRows: [
    {
      feature: 'Cell Architecture',
      col1: 'P-Type Standard',
      col2: 'N-Type TOPCon / IBC',
      col3: 'Heterojunction (HJT)'
    },
    {
      feature: 'Degradation Rate',
      col1: '0.55% / year',
      col2: '0.40% / year',
      col3: '0.25% / year'
    },
    {
      feature: 'Temperature Coefficient',
      col1: '-0.35% / °C',
      col2: '-0.29% / °C',
      col3: '-0.24% / °C'
    }
  ],
  faqs: [
    {
      question:
        'What is the optimal rooftop solar capacity for Melbourne households?',
      answer:
        'A 6.6kW solar array paired with a 5kW single-phase inverter represents the optimal sweet spot for Victorian grid approvals and maximum STC government rebates.'
    },
    {
      question:
        'How do DC oversizing ratios affect generation on cloudy days?',
      answer:
        'Oversizing your DC array to 133% allows the inverter to reach full nameplate output earlier in the morning and maintain steady peak generation even in overcast conditions.'
    }
  ],
  metaTitle: '',
  canonicalUrl: '',
  keywords:
    'solar blueprint, engineering specifications, inverter sizing, melbourne solar installation',
  metaDescription:
    'In-depth engineering blueprint and comparison matrix for residential and commercial solar installations.',
  schema: '',
  isPublished: true
});
