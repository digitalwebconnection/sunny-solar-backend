const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Token helpers
export const getAdminToken = (): string | null => {
  return localStorage.getItem('sunny_admin_token');
};

export const setAdminToken = (token: string): void => {
  localStorage.setItem('sunny_admin_token', token);
};

export const removeAdminToken = (): void => {
  localStorage.removeItem('sunny_admin_token');
  localStorage.removeItem('sunny_admin_user');
};

export const getStoredAdminUser = () => {
  const user = localStorage.getItem('sunny_admin_user');
  return user ? JSON.parse(user) : null;
};

export const setStoredAdminUser = (user: any) => {
  localStorage.setItem('sunny_admin_user', JSON.stringify(user));
};

// Generic fetch wrapper with auth header
const request = async (endpoint: string, options: RequestInit = {}) => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...((options.headers as Record<string, string>) || {})
  };

  const token = getAdminToken();
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'API request failed');
  }

  return data;
};

// API Services
export const api = {
  // Auth
  login: async (credentials: { email: string; password: string }) => {
    const res = await request('/admin/login', {
      method: 'POST',
      body: JSON.stringify(credentials)
    });
    if (res.token) {
      setAdminToken(res.token);
      setStoredAdminUser(res.admin);
    }
    return res;
  },

  logout: () => {
    removeAdminToken();
  },

  getProfile: () => request('/admin/me'),

  getStats: () => request('/admin/stats'),

  // Image Upload to Cloudinary
  uploadImage: (image: string, folder: string = 'sunny-solar'): Promise<{ success: boolean; url: string; public_id?: string; message?: string }> =>
    request('/upload', {
      method: 'POST',
      body: JSON.stringify({ image, folder })
    }),


  // Public Blogs
  getBlogs: (category?: string, search?: string) => {
    const params = new URLSearchParams();
    if (category && category !== 'All Articles') params.append('category', category);
    if (search) params.append('search', search);
    return request(`/blogs?${params.toString()}`);
  },

  getBlogBySlug: (slug: string) => request(`/blogs/${slug}`),

  // Admin Blogs
  getAllAdminBlogs: () => request('/blogs/admin/all'),

  createBlog: (blogData: any) =>
    request('/blogs', {
      method: 'POST',
      body: JSON.stringify(blogData)
    }),

  updateBlog: (id: string, blogData: any) =>
    request(`/blogs/${id}`, {
      method: 'PUT',
      body: JSON.stringify(blogData)
    }),

  togglePublishBlog: (id: string) =>
    request(`/blogs/${id}/publish`, {
      method: 'PATCH'
    }),

  deleteBlog: (id: string) =>
    request(`/blogs/${id}`, {
      method: 'DELETE'
    }),

  restoreBlog: (id: string) =>
    request(`/blogs/${id}/restore`, {
      method: 'PATCH'
    }),

  // Public Knowledge Hub
  getKnowledge: (category?: string, search?: string) => {
    const params = new URLSearchParams();
    if (category && category !== 'All Guides' && category !== 'All Categories') {
      params.append('category', category);
    }
    if (search) params.append('search', search);
    return request(`/knowledge?${params.toString()}`);
  },

  getKnowledgeBySlug: (slug: string) => request(`/knowledge/${slug}`),

  // Admin Knowledge Hub
  getAllAdminKnowledge: () => request('/knowledge/admin/all'),

  createKnowledge: (knowledgeData: any) =>
    request('/knowledge', {
      method: 'POST',
      body: JSON.stringify(knowledgeData)
    }),

  updateKnowledge: (id: string, knowledgeData: any) =>
    request(`/knowledge/${id}`, {
      method: 'PUT',
      body: JSON.stringify(knowledgeData)
    }),

  togglePublishKnowledge: (id: string) =>
    request(`/knowledge/${id}/publish`, {
      method: 'PATCH'
    }),

  deleteKnowledge: (id: string) =>
    request(`/knowledge/${id}`, {
      method: 'DELETE'
    }),

  restoreKnowledge: (id: string) =>
    request(`/knowledge/${id}/restore`, {
      method: 'PATCH'
    })
};
