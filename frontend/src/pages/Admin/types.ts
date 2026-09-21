export const categories = [
  'All Categories',
  'Solar Basics',
  'Batteries',
  'Buying Solar',
  'Technical',
  'Existing Solar',
  'General'
];

export interface BlogItem {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  author: string;
  authorRole: string;
  imageUrl: string;
  content: string | string[];
  keyTakeaways: string[];
  metaTitle?: string;
  canonicalUrl?: string;
  keywords?: string;
  metaDescription?: string;
  schema?: string;
  longContent?: string;
  isPublished: boolean;
  views: number;
  isDeleted?: boolean;
  deletedAt?: string;
  createdAt: string;
}

export interface QuickStat {
  label: string;
  value: string;
}

export interface MatrixRow {
  feature: string;
  col1: string;
  col2: string;
  col3: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface KnowledgeItem {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  author: string;
  authorRole: string;
  imageUrl: string;
  content: string;
  keyTakeaways: string[];
  blueprintTitle?: string;
  blueprintBadge?: string;
  quickStats?: QuickStat[];
  matrixHeaders?: string[];
  matrixRows?: MatrixRow[];
  faqs?: FAQItem[];
  metaTitle?: string;
  canonicalUrl?: string;
  keywords?: string;
  metaDescription?: string;
  schema?: string;
  isPublished: boolean;
  views: number;
  isDeleted?: boolean;
  deletedAt?: string;
  createdAt: string;
}

export type AdminTab = 'articles' | 'knowledge' | 'overview';
export type StatusFilter = 'all' | 'published' | 'draft' | 'archived';
export type ViewMode = 'grid' | 'table';
export type SortBy = 'newest' | 'oldest' | 'views' | 'title';
export type BlogModalTab = 'info' | 'content' | 'meta';
export type KnowledgeModalTab = 'info' | 'content' | 'blueprint' | 'meta';

export interface ToastInfo {
  type: 'success' | 'error';
  message: string;
}

export interface TimelineHealth {
  percent: number;
  status: string;
  color: 'emerald' | 'amber' | 'rose';
}

export interface BlogFormData {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  author: string;
  authorRole: string;
  imageUrl: string;
  content: string;
  keyTakeaways: string;
  metaTitle: string;
  canonicalUrl: string;
  keywords: string;
  metaDescription: string;
  schema: string;
  longContent: string;
  isPublished: boolean;
}

export interface KnowledgeFormData {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  author: string;
  authorRole: string;
  imageUrl: string;
  content: string;
  keyTakeaways: string;
  blueprintTitle: string;
  blueprintBadge: string;
  quickStats: QuickStat[];
  matrixHeaders: string[];
  matrixRows: MatrixRow[];
  faqs: FAQItem[];
  metaTitle: string;
  canonicalUrl: string;
  keywords: string;
  metaDescription: string;
  schema: string;
  isPublished: boolean;
}
