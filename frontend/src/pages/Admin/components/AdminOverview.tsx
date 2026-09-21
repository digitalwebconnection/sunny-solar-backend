import React from 'react';
import { Folder, BookOpen, CheckCircle2, BarChart2, Edit3 } from 'lucide-react';
import { AdminTab, BlogItem, KnowledgeItem } from '../types';

interface AdminOverviewProps {
  stats: any;
  activeBlogs: BlogItem[];
  blogs: BlogItem[];
  activeKnowledge: KnowledgeItem[];
  knowledgeItems: KnowledgeItem[];
  publishedBlogs: BlogItem[];
  publishedKnowledge: KnowledgeItem[];
  setActiveTab: (tab: AdminTab) => void;
  handleOpenEdit: (blog: BlogItem) => void;
  handleOpenEditKnowledge: (item: KnowledgeItem) => void;
}

export const AdminOverview: React.FC<AdminOverviewProps> = ({
  stats,
  activeBlogs,
  blogs,
  activeKnowledge,
  knowledgeItems,
  publishedBlogs,
  publishedKnowledge,
  setActiveTab,
  handleOpenEdit,
  handleOpenEditKnowledge
}) => {
  return (
    <div className="space-y-6">
      {/* Key Metric Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Blog Articles */}
        <div
          onClick={() => setActiveTab('articles')}
          className="bg-white border border-neutral-200/90 hover:border-neutral-300 rounded-xl p-4.5 shadow-2xs flex items-center justify-between cursor-pointer transition-all"
        >
          <div>
            <span className="text-xs font-semibold text-neutral-500">Active Projects</span>
            <div className="text-2xl font-bold text-neutral-900 mt-0.5 tracking-tight">
              {stats ? stats.totalBlogs : activeBlogs.length}
            </div>
            <span className="text-[11px] text-neutral-400 mt-0.5 block">
              {stats?.allStoredBlogs || blogs.length} Total in Database
            </span>
          </div>
          <div className="w-10 h-10 rounded-lg bg-neutral-100 text-neutral-800 flex items-center justify-center">
            <Folder className="w-5 h-5" />
          </div>
        </div>

        {/* Card 2: Knowledge Hub Guides */}
        <div
          onClick={() => setActiveTab('knowledge')}
          className="bg-white border border-neutral-200/90 hover:border-neutral-300 rounded-xl p-4.5 shadow-2xs flex items-center justify-between cursor-pointer transition-all"
        >
          <div>
            <span className="text-xs font-semibold text-neutral-500">Technical Guides</span>
            <div className="text-2xl font-bold text-neutral-900 mt-0.5 tracking-tight">
              {stats?.totalKnowledge !== undefined ? stats.totalKnowledge : activeKnowledge.length}
            </div>
            <span className="text-[11px] text-neutral-400 mt-0.5 block">
              {stats?.allStoredKnowledge || knowledgeItems.length} Saved in Database
            </span>
          </div>
          <div className="w-10 h-10 rounded-lg bg-neutral-100 text-neutral-800 flex items-center justify-center">
            <BookOpen className="w-5 h-5" />
          </div>
        </div>

        {/* Card 3: Published Live */}
        <div className="bg-white border border-neutral-200/90 rounded-xl p-4.5 shadow-2xs flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-neutral-500">Published Live</span>
            <div className="text-2xl font-bold text-emerald-600 mt-0.5 tracking-tight">
              {(stats ? stats.publishedBlogs : publishedBlogs.length) +
                (stats?.publishedKnowledge !== undefined
                  ? stats.publishedKnowledge
                  : publishedKnowledge.length)}
            </div>
            <span className="text-[11px] text-emerald-600 font-medium mt-0.5 block">Visible to public</span>
          </div>
          <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>

        {/* Card 4: Total Views */}
        <div className="bg-white border border-neutral-200/90 rounded-xl p-4.5 shadow-2xs flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-neutral-500">Total Reads</span>
            <div className="text-2xl font-bold text-neutral-900 mt-0.5 tracking-tight">
              {(stats?.totalViews || blogs.reduce((acc, b) => acc + (b.views || 0), 0)) +
                (stats?.totalKnowledgeViews || knowledgeItems.reduce((acc, k) => acc + (k.views || 0), 0))}
            </div>
            <span className="text-[11px] text-neutral-400 font-medium mt-0.5 block">Organic page reads</span>
          </div>
          <div className="w-10 h-10 rounded-lg bg-neutral-100 text-neutral-800 flex items-center justify-center">
            <BarChart2 className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Quick Jump / Category Performance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-2xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-neutral-900">Recent Projects</h3>
            <button
              type="button"
              onClick={() => setActiveTab('articles')}
              className="text-xs font-semibold text-neutral-500 hover:text-neutral-900"
            >
              View all →
            </button>
          </div>
          <div className="space-y-2">
            {activeBlogs.slice(0, 5).map((blog) => (
              <div
                key={blog._id}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-neutral-50 border border-neutral-100 transition-colors"
              >
                <div className="min-w-0 pr-3">
                  <span className="text-xs font-bold text-neutral-900 block truncate">
                    {blog.title}
                  </span>
                  <span className="text-[10px] text-neutral-400 block truncate">
                    {blog.category} • {blog.publishDate || 'Recent'}
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      blog.isPublished
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-neutral-100 text-neutral-600'
                    }`}
                  >
                    {blog.isPublished ? 'Live' : 'Draft'}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleOpenEdit(blog)}
                    className="p-1 text-neutral-400 hover:text-neutral-900"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-2xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-neutral-900">Technical Guides</h3>
            <button
              type="button"
              onClick={() => setActiveTab('knowledge')}
              className="text-xs font-semibold text-neutral-500 hover:text-neutral-900"
            >
              View all →
            </button>
          </div>
          <div className="space-y-2">
            {activeKnowledge.slice(0, 5).map((guide) => (
              <div
                key={guide._id}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-neutral-50 border border-neutral-100 transition-colors"
              >
                <div className="min-w-0 pr-3">
                  <span className="text-xs font-bold text-neutral-900 block truncate">
                    {guide.title}
                  </span>
                  <span className="text-[10px] text-neutral-400 block truncate">
                    {guide.category} • {guide.readTime || '6 min read'}
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      guide.isPublished
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-neutral-100 text-neutral-600'
                    }`}
                  >
                    {guide.isPublished ? 'Live' : 'Draft'}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleOpenEditKnowledge(guide)}
                    className="p-1 text-neutral-400 hover:text-neutral-900"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
