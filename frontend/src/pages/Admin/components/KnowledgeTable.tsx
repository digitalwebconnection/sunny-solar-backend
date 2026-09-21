import React from 'react';
import { BookOpen, ExternalLink, Edit3, Trash2 } from 'lucide-react';
import { KnowledgeItem, TimelineHealth } from '../types';

interface KnowledgeTableProps {
  sortedFilteredKnowledge: KnowledgeItem[];
  handleOpenEditKnowledge: (item: KnowledgeItem) => void;
  handleTogglePublishKnowledge: (item: KnowledgeItem) => void;
  handleDeleteKnowledge: (id: string, title: string) => void;
  getTimelineHealth: (item: { isPublished: boolean; isDeleted?: boolean; views: number }) => TimelineHealth;
}

export const KnowledgeTable: React.FC<KnowledgeTableProps> = ({
  sortedFilteredKnowledge,
  handleOpenEditKnowledge,
  handleTogglePublishKnowledge,
  handleDeleteKnowledge,
  getTimelineHealth
}) => {
  return (
    <div className="bg-white border border-neutral-200 rounded-xl shadow-2xs overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-neutral-50/80 border-b border-neutral-200 text-black font-bold uppercase tracking-wider">
              <th className="py-3 px-5">Guide Info</th>
              <th className="py-3 px-5">Category</th>
              <th className="py-3 px-5">Status</th>
     
              <th className="py-3 px-5">Reads</th>
              <th className="py-3 px-5">Due Date</th>
              <th className="py-3 px-5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 text-neutral-600 font-medium">
            {sortedFilteredKnowledge.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-12 text-center text-neutral-400">
                  <BookOpen className="w-8 h-8 mx-auto mb-2 text-neutral-300" />
                  <p className="font-semibold text-sm text-neutral-700">
                    No Knowledge Hub guides found
                  </p>
                  <p className="text-xs text-neutral-400 mt-1">
                    Try adjusting your filters or search query.
                  </p>
                </td>
              </tr>
            ) : (
              sortedFilteredKnowledge.map((item) => {
                const health = getTimelineHealth(item);
                return (
                  <tr key={item._id} className="hover:bg-neutral-50/60 transition-colors">
                    <td className="py-3 px-5">
                      <div className="flex items-center gap-3">
                        {item.imageUrl && (
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-9 h-9 rounded-lg object-cover shrink-0 border border-neutral-200"
                            onError={(e: any) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        )}
                        <div className="min-w-0">
                          <span className="font-bold text-neutral-900 block truncate max-w-xs text-xs">
                            {item.title}
                          </span>
                          <span className="text-[10px] text-neutral-400 block truncate">
                            by {item.author || 'Admin'}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className="py-3 px-5">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium bg-neutral-100 text-neutral-800">
                        {item.category}
                      </span>
                    </td>

                    <td className="py-3 px-5">
                      {item.isDeleted ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                          <span>Archived</span>
                        </span>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handleTogglePublishKnowledge(item)}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium cursor-pointer transition-all border ${
                            item.isPublished
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                              : 'bg-neutral-100 text-neutral-600 border-neutral-200 hover:bg-neutral-200'
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              item.isPublished ? 'bg-emerald-500' : 'bg-neutral-400'
                            }`}
                          />
                          <span>{item.isPublished ? 'Live' : 'Draft'}</span>
                        </button>
                      )}
                    </td>

                   

                    <td className="py-3 px-5 font-bold text-neutral-800">
                      {item.views || 0}
                    </td>

                    <td className="py-3 px-5 text-neutral-500">
                      {item.publishDate || 'Recent'}
                    </td>

                    <td className="py-3 px-5 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <a
                          href={`/learn/knowledge-hub/${item.slug}`}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 text-neutral-400 hover:text-neutral-900 rounded-md transition-colors"
                          title="Preview"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        <button
                          type="button"
                          onClick={() => handleOpenEditKnowledge(item)}
                          className="p-1.5 text-neutral-400 hover:text-neutral-900 rounded-md transition-colors cursor-pointer"
                          title="Edit"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteKnowledge(item._id, item.title)}
                          className="p-1.5 text-neutral-400 hover:text-rose-600 rounded-md transition-colors cursor-pointer"
                          title="Delete"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
