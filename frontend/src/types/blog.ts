export interface Article {
  _id?: string;
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
  keyTakeaways?: string[];
  metaTitle?: string;
  canonicalUrl?: string;
  keywords?: string;
  metaDescription?: string;
  schema?: string;
  longContent?: string;
  isPublished?: boolean;
  views?: number;
  createdAt?: string;
}
