import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { KnowledgeHubHeroSection } from './sections/KnowledgeHubHeroSection';
import { KnowledgeHubGridSection } from './sections/KnowledgeHubGridSection';
import { api } from '../../../services/api';
import type { Article } from '../../../types/blog';
import { articlesData } from '../../../data/blogData';

const categories = [
  'All Guides',
  'Solar Basics',
  'Batteries',
  'Buying Solar',
  'Technical',
  'Existing Solar',
] as const;

export const KnowledgeHubPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Guides');
  const [articles, setArticles] = useState<Article[]>(() => articlesData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchKnowledge = async () => {
      try {
        const res = await api.getKnowledge(selectedCategory);
        if (isMounted && res?.data && res.data.length > 0) {
          setArticles(res.data);
        } else if (isMounted) {
          const fallback = selectedCategory === 'All Guides'
            ? articlesData
            : articlesData.filter((a) => a.category === selectedCategory);
          setArticles(fallback);
        }
      } catch (err) {
        if (isMounted) {
          const fallback = selectedCategory === 'All Guides'
            ? articlesData
            : articlesData.filter((a) => a.category === selectedCategory);
          setArticles(fallback);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchKnowledge();

    return () => {
      isMounted = false;
    };
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-50 pb-20 space-y-2">
      <Helmet>
        <title>Solar & Battery Knowledge Hub | Sunny Solar</title>
        <meta
          name="description"
          content="Expert educational guides, technical standards, and consumer advice written by licensed master electricians."
        />
      </Helmet>
      {/* 1. Hero & Education Pillars */}
      <KnowledgeHubHeroSection />

      {/* 2. Category Filter Pills Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-200/80">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200/90 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Filtered Articles Grid */}
      <KnowledgeHubGridSection
        articles={articles}
        basePath="/learn/knowledge-hub"
        loading={loading}
      />
    </div>
  );
};

export default KnowledgeHubPage;
