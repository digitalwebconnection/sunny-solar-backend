import type { Article } from '../types/blog';

export type { Article };

// All blog and knowledge-hub data is fetched live from the MongoDB database via API.
export const articlesData: Article[] = [];
