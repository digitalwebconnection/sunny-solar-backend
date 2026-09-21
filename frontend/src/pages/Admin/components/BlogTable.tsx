import React from 'react';
import { FileText, ExternalLink, Edit3, Trash2 } from 'lucide-react';
import { BlogItem, TimelineHealth } from '../types';

interface BlogTableProps {
  sortedFilteredBlogs: BlogItem[];
  handleOpenEdit: (blog: BlogItem) => void;
  handleTogglePublish: (blog: BlogItem) => void;
  handleDeleteBlog: (id: string, title: string) => void;
  getTimelineHealth: (item: { isPublished: boolean; isDeleted?: boolean; views: number }) => TimelineHealth;
}

export const BlogTable: React.FC<BlogTableProps> = ({
  sortedFilteredBlogs,
  handleOpenEdit,
  handleTogglePublish,
  handleDeleteBlog,
  getTimelineHealth
}) => {
  return (
    <div className="bg-white border border-neutral-200 rounded-xl shadow-2xs overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-neutral-50/80 border-b border-neutral-200 text-black font-bold uppercase tracking-wider">
              <th className="py-3 px-5">Project Info</th>
              <th className="py-3 px-5">Category</th>
              <th className="py-3 px-5">Status</th>
             
              <th className="py-3 px-5">Reads</th>
              <th className="py-3 px-5">Due Date</th>
              <th className="py-3 px-5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 text-neutral-600 font-medium">
            {sortedFilteredBlogs.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-12 text-center text-neutral-400">
                  <FileText className="w-8 h-8 mx-auto mb-2 text-neutral-300" />
                  <p className="font-semibold text-sm text-neutral-700">No blog articles found</p>
                  <p className="text-xs text-neutral-400 mt-1">
                    Try adjusting your filters or search query.
                  </p>
                </td>
              </tr>
            ) : (
              sortedFilteredBlogs.map((blog) => {
                const health = getTimelineHealth(blog);
                return (
                  <tr key={blog._id} className="hover:bg-neutral-50/60 transition-colors">
                    <td className="py-3 px-5">
                      <div className="flex items-center gap-3">
                        {blog.imageUrl && (
                          <img
                            src={blog.imageUrl}
                            alt={blog.title}
                            className="w-9 h-9 rounded-lg object-cover shrink-0 border border-neutral-200"
                            onError={(e: any) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        )}
                        <div className="min-w-0">
                          <span className="font-bold text-neutral-900 block truncate max-w-xs text-xs">
                            {blog.title}
                          </span>
                          <span className="text-[10px] text-neutral-400 block truncate">
                            by {blog.author || 'Admin'}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className="py-3 px-5">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium bg-neutral-100 text-neutral-800">
                        {blog.category}
                      </span>
                    </td>

                    <td className="py-3 px-5">
                      {blog.isDeleted ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                          <span>Archived</span>
                        </span>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handleTogglePublish(blog)}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold cursor-pointer transition-all border ${
                            blog.isPublished
                              ? 'bg-blue-50/40 text-blue-900 border-blue-200 hover:bg-blue-100'
                              : 'bg-white text-black border-neutral-200 hover:bg-neutral-100'
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              blog.isPublished ? 'bg-blue-600' : 'bg-black'
                            }`}
                          />
                          <span>{blog.isPublished ? 'Live' : 'Draft'}</span>
                        </button>
                      )}
                    </td>


                    <td className="py-3 px-5 font-bold text-blue-600">
                      {blog.views || 0}
                    </td>

                    <td className="py-3 px-5 text-neutral-800 font-medium">
                      {blog.publishDate || 'Recent'}
                    </td>

                    <td className="py-3 px-5 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <a
                          href={`/learn/blog/${blog.slug}`}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 text-neutral-400 hover:text-neutral-900 rounded-md transition-colors"
                          title="Preview"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <button
                          type="button"
                          onClick={() => handleOpenEdit(blog)}
                          className="p-1.5 text-blue-600 hover:text-blue-800 hover:bg-blue-50/50 rounded-md transition-colors cursor-pointer"
                          title="Edit"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteBlog(blog._id, blog.title)}
                          className="p-1.5 text-red-500 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-colors cursor-pointer"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
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
