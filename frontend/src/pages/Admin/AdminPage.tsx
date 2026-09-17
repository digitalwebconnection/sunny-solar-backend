import React, { useState, useEffect, useRef } from 'react';
import {
  Lock,
  Mail,
  Plus,
  Trash2,
  Edit3,
  Eye,
  EyeOff,
  FileText,
  BarChart2,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  X,
  Search,
  RefreshCw,
  LogOut,
  LayoutDashboard,
  Globe,
  Sun,
  Layers,
  Calendar,
  Clock,
  User,
  ArrowUpRight,
  Filter,
  Check,
  BookOpen,
  Sliders,
  HelpCircle,
  Table,
  Cpu,
  ChevronDown,
  Upload,
  Image as ImageIcon,
  RotateCcw,
  Database
} from 'lucide-react';
import { api, getAdminToken, getStoredAdminUser } from '../../services/api';
import logo from '../../assets/Logo.png';

const categories = [
  'All Categories',
  'Solar Basics',
  'Batteries',
  'Buying Solar',
  'Technical',
  'Existing Solar',
  'General'
];

interface BlogItem {
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

interface QuickStat {
  label: string;
  value: string;
}

interface MatrixRow {
  feature: string;
  col1: string;
  col2: string;
  col3: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface KnowledgeItem {
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

export const AdminPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!getAdminToken());
  const [adminUser, setAdminUser] = useState<any>(getStoredAdminUser());

  // Active navigation tab: 'articles' | 'knowledge' | 'overview'
  const [activeTab, setActiveTab] = useState<'articles' | 'knowledge' | 'overview'>('articles');

  // Login form state loaded from .env
  const [email, setEmail] = useState(import.meta.env.VITE_ADMIN_EMAIL || 'admin@sunnysolar.com.au');
  const [password, setPassword] = useState(import.meta.env.VITE_ADMIN_PASSWORD || 'Admin@12345');
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  // Dashboard Data states
  const [stats, setStats] = useState<any>(null);
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [loadingBlogs, setLoadingBlogs] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Blog Filter & Search states
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft' | 'archived'>('all');
  const [categoryFilter, setCategoryFilter] = useState('All Categories');

  // Blog Modal / Form state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<'info' | 'content' | 'meta'>('info');
  const [editingBlog, setEditingBlog] = useState<BlogItem | null>(null);
  const [formLoading, setFormLoading] = useState(false);

  const contentRef = useRef<HTMLTextAreaElement>(null);
  const longContentRef = useRef<HTMLTextAreaElement>(null);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    category: 'Solar Basics',
    readTime: '5 min read',
    publishDate: '',
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

  // =========================================================================
  // KNOWLEDGE HUB STATES
  // =========================================================================
  const [knowledgeItems, setKnowledgeItems] = useState<KnowledgeItem[]>([]);
  const [loadingKnowledge, setLoadingKnowledge] = useState(false);
  const [searchKnowledge, setSearchKnowledge] = useState('');
  const [statusFilterKnowledge, setStatusFilterKnowledge] = useState<'all' | 'published' | 'draft' | 'archived'>('all');
  const [categoryFilterKnowledge, setCategoryFilterKnowledge] = useState('All Categories');

  // Knowledge Modal / Form state
  const [isKnowledgeModalOpen, setIsKnowledgeModalOpen] = useState(false);
  const [knowledgeModalTab, setKnowledgeModalTab] = useState<'info' | 'content' | 'blueprint' | 'meta'>('info');
  const [editingKnowledge, setEditingKnowledge] = useState<KnowledgeItem | null>(null);
  const [knowledgeFormLoading, setKnowledgeFormLoading] = useState(false);
  const [showContentPreview, setShowContentPreview] = useState(false);

  const knowledgeContentRef = useRef<HTMLTextAreaElement>(null);

  const [knowledgeFormData, setKnowledgeFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    category: 'Solar Basics',
    readTime: '6 min read',
    publishDate: '',
    author: 'Trent Palmer',
    authorRole: 'Founder & Master Electrician',
    imageUrl: '',
    content: '',
    keyTakeaways: '',
    blueprintTitle: '',
    blueprintBadge: '',
    quickStats: [] as QuickStat[],
    matrixHeaders: ['Specification', 'Budget Entry', 'Premium Standard', 'Commercial Grade'] as string[],
    matrixRows: [] as MatrixRow[],
    faqs: [] as FAQItem[],
    metaTitle: '',
    canonicalUrl: '',
    keywords: '',
    metaDescription: '',
    schema: '',
    isPublished: true
  });

  const loadDashboardData = async (silent: boolean = false) => {
    if (!silent) {
      setLoadingBlogs(true);
      setLoadingKnowledge(true);
    }
    try {
      const [statsRes, blogsRes, knowledgeRes] = await Promise.all([
        api.getStats().catch(() => null),
        api.getAllAdminBlogs().catch(() => null),
        api.getAllAdminKnowledge().catch(() => null)
      ]);

      if (statsRes?.stats) setStats(statsRes.stats);
      if (blogsRes?.data) setBlogs(blogsRes.data);
      if (knowledgeRes?.data) setKnowledgeItems(knowledgeRes.data);
    } catch (err: any) {
      if (!silent) {
        showToast('error', err.message || 'Failed to fetch data from MongoDB');
      }
    } finally {
      if (!silent) {
        setLoadingBlogs(false);
        setLoadingKnowledge(false);
      }
    }
  };

  // Auto-refresh: Automatically syncs data from DB every 8 seconds & on window focus,
  // so whenever anyone adds, edits, or deletes an article or guide, the admin list auto-refreshes!
  useEffect(() => {
    if (!isAuthenticated) return;

    // Initial load with spinner
    loadDashboardData(false);

    // Background interval for live auto-refresh
    const intervalId = setInterval(() => {
      // Only auto-refresh if no edit/create modal is actively open to avoid interrupting input
      if (!isModalOpen && !isKnowledgeModalOpen) {
        loadDashboardData(true);
      }
    }, 8000);

    // Auto-refresh when admin switches back to this browser tab
    const handleFocus = () => {
      if (!isModalOpen && !isKnowledgeModalOpen) {
        loadDashboardData(true);
      }
    };
    window.addEventListener('focus', handleFocus);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('focus', handleFocus);
    };
  }, [isAuthenticated, isModalOpen, isKnowledgeModalOpen]);

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3500);
  };

  // =========================================================================
  // RICH TEXT EDITOR HELPERS (BLOG)
  // =========================================================================
  const applyFormatting = (
    field: 'content' | 'longContent',
    tagStart: string,
    tagEnd: string = ''
  ) => {
    const ref = field === 'content' ? contentRef.current : longContentRef.current;
    if (!ref) return;

    const start = ref.selectionStart;
    const end = ref.selectionEnd;
    const currentText = formData[field] || '';
    const selectedText = currentText.substring(start, end);

    const replacement = selectedText
      ? `${tagStart}${selectedText}${tagEnd}`
      : `${tagStart}${tagEnd}`;

    const updatedText =
      currentText.substring(0, start) + replacement + currentText.substring(end);

    setFormData((prev) => ({ ...prev, [field]: updatedText }));

    setTimeout(() => {
      ref.focus();
      const newPos = selectedText ? start + replacement.length : start + tagStart.length;
      ref.setSelectionRange(newPos, newPos);
    }, 0);
  };

  const handleInsertLink = (field: 'content' | 'longContent') => {
    const ref = field === 'content' ? contentRef.current : longContentRef.current;
    if (!ref) return;

    const start = ref.selectionStart;
    const end = ref.selectionEnd;
    const currentText = formData[field] || '';
    const selectedText = currentText.substring(start, end);

    const url = window.prompt('Enter link destination URL:', 'https://');
    if (!url) return;

    const linkText = selectedText || window.prompt('Enter link text:', 'click here') || url;
    const linkHtml = `<a href="${url}" target="_blank" rel="noopener noreferrer">${linkText}</a>`;

    const updatedText =
      currentText.substring(0, start) + linkHtml + currentText.substring(end);

    setFormData((prev) => ({ ...prev, [field]: updatedText }));
  };

  const handleClearFormatting = (field: 'content' | 'longContent') => {
    const ref = field === 'content' ? contentRef.current : longContentRef.current;
    if (!ref) return;

    const start = ref.selectionStart;
    const end = ref.selectionEnd;
    const currentText = formData[field] || '';
    const selectedText = currentText.substring(start, end);

    if (!selectedText) {
      if (window.confirm('Clear all content in this editor?')) {
        setFormData((prev) => ({ ...prev, [field]: '' }));
      }
      return;
    }

    const cleaned = selectedText.replace(/<\/?[^>]+(>|$)/g, '');
    const updatedText =
      currentText.substring(0, start) + cleaned + currentText.substring(end);

    setFormData((prev) => ({ ...prev, [field]: updatedText }));
  };

  // =========================================================================
  // RICH TEXT EDITOR HELPERS (KNOWLEDGE)
  // =========================================================================
  const applyKnowledgeFormatting = (tagStart: string, tagEnd: string = '') => {
    const ref = knowledgeContentRef.current;
    if (!ref) return;

    const start = ref.selectionStart;
    const end = ref.selectionEnd;
    const currentText = knowledgeFormData.content || '';
    const selectedText = currentText.substring(start, end);

    const replacement = selectedText
      ? `${tagStart}${selectedText}${tagEnd}`
      : `${tagStart}${tagEnd}`;

    const updatedText =
      currentText.substring(0, start) + replacement + currentText.substring(end);

    setKnowledgeFormData((prev) => ({ ...prev, content: updatedText }));

    setTimeout(() => {
      ref.focus();
      const newPos = selectedText ? start + replacement.length : start + tagStart.length;
      ref.setSelectionRange(newPos, newPos);
    }, 0);
  };

  const handleInsertKnowledgeLink = () => {
    const ref = knowledgeContentRef.current;
    if (!ref) return;

    const start = ref.selectionStart;
    const end = ref.selectionEnd;
    const currentText = knowledgeFormData.content || '';
    const selectedText = currentText.substring(start, end);

    const url = window.prompt('Enter link destination URL:', 'https://');
    if (!url) return;

    const linkText = selectedText || window.prompt('Enter link text:', 'click here') || url;
    const linkHtml = `<a href="${url}" target="_blank" rel="noopener noreferrer">${linkText}</a>`;

    const updatedText =
      currentText.substring(0, start) + linkHtml + currentText.substring(end);

    setKnowledgeFormData((prev) => ({ ...prev, content: updatedText }));
  };

  const handleClearKnowledgeFormatting = () => {
    const ref = knowledgeContentRef.current;
    if (!ref) return;

    const start = ref.selectionStart;
    const end = ref.selectionEnd;
    const currentText = knowledgeFormData.content || '';
    const selectedText = currentText.substring(start, end);

    if (!selectedText) {
      if (window.confirm('Clear all content in this editor?')) {
        setKnowledgeFormData((prev) => ({ ...prev, content: '' }));
      }
      return;
    }

    const cleaned = selectedText.replace(/<\/?[^>]+(>|$)/g, '');
    const updatedText =
      currentText.substring(0, start) + cleaned + currentText.substring(end);

    setKnowledgeFormData((prev) => ({ ...prev, content: updatedText }));
  };

  // =========================================================================
  // DYNAMIC BLUEPRINT SPEC HELPERS
  // =========================================================================
  const handleAddQuickStat = () => {
    setKnowledgeFormData((prev) => ({
      ...prev,
      quickStats: [...prev.quickStats, { label: '', value: '' }]
    }));
  };

  const handleRemoveQuickStat = (index: number) => {
    setKnowledgeFormData((prev) => ({
      ...prev,
      quickStats: prev.quickStats.filter((_, i) => i !== index)
    }));
  };

  const handleUpdateQuickStat = (index: number, field: 'label' | 'value', val: string) => {
    setKnowledgeFormData((prev) => {
      const updated = [...prev.quickStats];
      updated[index] = { ...updated[index], [field]: val };
      return { ...prev, quickStats: updated };
    });
  };

  const handleUpdateMatrixHeader = (index: number, val: string) => {
    setKnowledgeFormData((prev) => {
      const updated = [...prev.matrixHeaders];
      updated[index] = val;
      return { ...prev, matrixHeaders: updated };
    });
  };

  const handleAddMatrixRow = () => {
    setKnowledgeFormData((prev) => ({
      ...prev,
      matrixRows: [...prev.matrixRows, { feature: '', col1: '', col2: '', col3: '' }]
    }));
  };

  const handleRemoveMatrixRow = (index: number) => {
    setKnowledgeFormData((prev) => ({
      ...prev,
      matrixRows: prev.matrixRows.filter((_, i) => i !== index)
    }));
  };

  const handleUpdateMatrixRow = (index: number, field: keyof MatrixRow, val: string) => {
    setKnowledgeFormData((prev) => {
      const updated = [...prev.matrixRows];
      updated[index] = { ...updated[index], [field]: val };
      return { ...prev, matrixRows: updated };
    });
  };

  const handleAddFaq = () => {
    setKnowledgeFormData((prev) => ({
      ...prev,
      faqs: [...prev.faqs, { question: '', answer: '' }]
    }));
  };

  const handleRemoveFaq = (index: number) => {
    setKnowledgeFormData((prev) => ({
      ...prev,
      faqs: prev.faqs.filter((_, i) => i !== index)
    }));
  };

  const handleUpdateFaq = (index: number, field: 'question' | 'answer', val: string) => {
    setKnowledgeFormData((prev) => {
      const updated = [...prev.faqs];
      updated[index] = { ...updated[index], [field]: val };
      return { ...prev, faqs: updated };
    });
  };

  // =========================================================================
  // IMAGE UPLOAD HANDLERS (CLOUDINARY)
  // =========================================================================
  const [uploadingBlogImage, setUploadingBlogImage] = useState(false);
  const [uploadingKnowledgeImage, setUploadingKnowledgeImage] = useState(false);

  const handleKnowledgeImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      showToast('error', 'Image size should be less than 10MB');
      return;
    }

    const reader = new FileReader();
    reader.onload = async () => {
      if (typeof reader.result === 'string') {
        const base64Data = reader.result;
        // Immediate local preview so UI updates without delay
        setKnowledgeFormData((prev) => ({
          ...prev,
          imageUrl: base64Data
        }));

        setUploadingKnowledgeImage(true);
        try {
          const res = await api.uploadImage(base64Data, 'sunny-solar/knowledge');
          if (res?.url) {
            setKnowledgeFormData((prev) => ({
              ...prev,
              imageUrl: res.url
            }));
            showToast('success', 'Image uploaded to Cloudinary successfully!');
          }
        } catch (uploadErr: any) {
          console.warn('Cloudinary upload fallback to controller auto-upload:', uploadErr);
          showToast('error', `Cloudinary direct upload failed: ${uploadErr.message || 'Will upload on save'}`);
        } finally {
          setUploadingKnowledgeImage(false);
        }
      }
    };
    reader.onerror = () => {
      showToast('error', 'Failed to read image file');
    };
    reader.readAsDataURL(file);
  };

  const handleBlogImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      showToast('error', 'Image size should be less than 10MB');
      return;
    }

    const reader = new FileReader();
    reader.onload = async () => {
      if (typeof reader.result === 'string') {
        const base64Data = reader.result;
        // Immediate local preview
        setFormData((prev) => ({
          ...prev,
          imageUrl: base64Data
        }));

        setUploadingBlogImage(true);
        try {
          const res = await api.uploadImage(base64Data, 'sunny-solar/blogs');
          if (res?.url) {
            setFormData((prev) => ({
              ...prev,
              imageUrl: res.url
            }));
            showToast('success', 'Image uploaded to Cloudinary successfully!');
          }
        } catch (uploadErr: any) {
          console.warn('Cloudinary upload fallback to controller auto-upload:', uploadErr);
          showToast('error', `Cloudinary direct upload failed: ${uploadErr.message || 'Will upload on save'}`);
        } finally {
          setUploadingBlogImage(false);
        }
      }
    };
    reader.onerror = () => {
      showToast('error', 'Failed to read image file');
    };
    reader.readAsDataURL(file);
  };

  // =========================================================================
  // AUTHENTICATION HANDLERS
  // =========================================================================
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError(null);

    try {
      const res = await api.login({ email, password });
      setIsAuthenticated(true);
      setAdminUser(res.admin);
      showToast('success', `Welcome back, ${res.admin.name || 'Admin'}!`);
    } catch (err: any) {
      setLoginError(err.message || 'Invalid email or password. Please verify credentials.');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    api.logout();
    setIsAuthenticated(false);
    setAdminUser(null);
  };

  // =========================================================================
  // BLOG CRUD ACTIONS
  // =========================================================================
  const handleTogglePublish = async (blog: BlogItem) => {
    try {
      const res = await api.togglePublishBlog(blog._id);
      setBlogs((prev) =>
        prev.map((b) => (b._id === blog._id ? { ...b, isPublished: res.isPublished } : b))
      );
      showToast('success', `Article is now ${res.isPublished ? 'Live' : 'Draft'}.`);
      await loadDashboardData(true);
    } catch (err: any) {
      showToast('error', err.message || 'Could not update status');
    }
  };

  const handleDeleteBlog = async (id: string, title: string) => {
    if (
      !window.confirm(
        `Are you sure you want to remove "${title}" from the website and admin view?\n\nNOTE: This data is NEVER deleted from the database. It is permanently saved in MongoDB Atlas and can be restored from the "Archived in DB" tab anytime.`
      )
    )
      return;

    try {
      await api.deleteBlog(id);
      setBlogs((prev) =>
        prev.map((b) => (b._id === id ? { ...b, isDeleted: true, isPublished: false, deletedAt: new Date().toISOString() } : b))
      );
      showToast('success', 'Removed from website & active list. Safely preserved in database!');
      await loadDashboardData(true);
    } catch (err: any) {
      showToast('error', err.message || 'Failed to remove article');
    }
  };

  const handleRestoreBlog = async (id: string, title: string) => {
    try {
      await api.restoreBlog(id);
      setBlogs((prev) =>
        prev.map((b) => (b._id === id ? { ...b, isDeleted: false, deletedAt: undefined } : b))
      );
      showToast('success', `"${title}" restored successfully from database!`);
      await loadDashboardData(true);
    } catch (err: any) {
      showToast('error', err.message || 'Failed to restore article');
    }
  };

  const handleOpenEdit = (blog: BlogItem) => {
    setEditingBlog(blog);
    setModalTab('info');
    setFormData({
      title: blog.title || '',
      slug: blog.slug || '',
      excerpt: blog.excerpt || '',
      category: blog.category || 'Solar Basics',
      readTime: blog.readTime || '5 min read',
      publishDate: blog.publishDate || '',
      author: blog.author || 'Trent Palmer',
      authorRole: blog.authorRole || 'Founder & Master Electrician',
      imageUrl: blog.imageUrl || '',
      content:
        typeof blog.content === 'string'
          ? blog.content
          : Array.isArray(blog.content)
            ? blog.content.join('\n\n')
            : '',
      keyTakeaways: Array.isArray(blog.keyTakeaways) ? blog.keyTakeaways.join('\n') : '',
      metaTitle: blog.metaTitle || '',
      canonicalUrl: blog.canonicalUrl || '',
      keywords: blog.keywords || '',
      metaDescription: blog.metaDescription || '',
      schema: blog.schema || '',
      longContent: blog.longContent || '',
      isPublished: blog.isPublished !== undefined ? blog.isPublished : true
    });
    setIsModalOpen(true);
  };

  const handleOpenCreate = () => {
    setEditingBlog(null);
    setModalTab('info');
    const todayFormatted = new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    setFormData({
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
    setIsModalOpen(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.excerpt) {
      showToast('error', 'Title and excerpt are required');
      return;
    }

    setFormLoading(true);

    try {
      const payload = {
        ...formData,
        keyTakeaways: formData.keyTakeaways.split('\n').map((k) => k.trim()).filter(Boolean)
      };

      if (editingBlog) {
        const res = await api.updateBlog(editingBlog._id, payload);
        setBlogs((prev) => prev.map((b) => (b._id === editingBlog._id ? res.data : b)));
        showToast('success', 'Article updated successfully!');
      } else {
        const res = await api.createBlog(payload);
        setBlogs((prev) => [res.data, ...prev]);
        showToast('success', 'New article published successfully!');
      }

      setIsModalOpen(false);
      await loadDashboardData(true);
    } catch (err: any) {
      showToast('error', err.message || 'Error saving article');
    } finally {
      setFormLoading(false);
    }
  };

  // =========================================================================
  // KNOWLEDGE HUB CRUD ACTIONS
  // =========================================================================
  const handleTogglePublishKnowledge = async (item: KnowledgeItem) => {
    try {
      const res = await api.togglePublishKnowledge(item._id);
      setKnowledgeItems((prev) =>
        prev.map((k) => (k._id === item._id ? { ...k, isPublished: res.isPublished } : k))
      );
      showToast('success', `Knowledge guide is now ${res.isPublished ? 'Live' : 'Draft'}.`);
      await loadDashboardData(true);
    } catch (err: any) {
      showToast('error', err.message || 'Could not update guide status');
    }
  };

  const handleDeleteKnowledge = async (id: string, title: string) => {
    if (
      !window.confirm(
        `Are you sure you want to remove "${title}" from the website and admin view?\n\nNOTE: This data is NEVER deleted from the database. It is permanently saved in MongoDB Atlas and can be restored from the "Archived in DB" tab anytime.`
      )
    )
      return;

    try {
      await api.deleteKnowledge(id);
      setKnowledgeItems((prev) =>
        prev.map((k) => (k._id === id ? { ...k, isDeleted: true, isPublished: false, deletedAt: new Date().toISOString() } : k))
      );
      showToast('success', 'Removed from website & active list. Safely preserved in database!');
      await loadDashboardData(true);
    } catch (err: any) {
      showToast('error', err.message || 'Failed to remove knowledge guide');
    }
  };

  const handleRestoreKnowledge = async (id: string, title: string) => {
    try {
      await api.restoreKnowledge(id);
      setKnowledgeItems((prev) =>
        prev.map((k) => (k._id === id ? { ...k, isDeleted: false, deletedAt: undefined } : k))
      );
      showToast('success', `"${title}" restored successfully from database!`);
      await loadDashboardData(true);
    } catch (err: any) {
      showToast('error', err.message || 'Failed to restore knowledge guide');
    }
  };

  const handleOpenEditKnowledge = (item: KnowledgeItem) => {
    setEditingKnowledge(item);
    setKnowledgeModalTab('info');
    setShowContentPreview(false);
    setKnowledgeFormData({
      title: item.title || '',
      slug: item.slug || '',
      excerpt: item.excerpt || '',
      category: item.category || 'Solar Basics',
      readTime: item.readTime || '6 min read',
      publishDate: item.publishDate || '',
      author: item.author || 'Trent Palmer',
      authorRole: item.authorRole || 'Founder & Master Electrician',
      imageUrl: item.imageUrl || '',
      content: typeof item.content === 'string' ? item.content : '',
      keyTakeaways: Array.isArray(item.keyTakeaways) ? item.keyTakeaways.join('\n') : '',
      blueprintTitle: item.blueprintTitle || '',
      blueprintBadge: item.blueprintBadge || '',
      quickStats: item.quickStats && item.quickStats.length > 0 ? item.quickStats : [
        { label: 'Recommended Inverter Oversizing', value: '1.33x DC-to-AC Ratio' },
        { label: 'Annual Degradation Limit', value: '< 0.40% / year' }
      ],
      matrixHeaders: item.matrixHeaders && item.matrixHeaders.length === 4 ? item.matrixHeaders : ['Specification', 'Budget Entry', 'Premium Standard', 'Commercial Grade'],
      matrixRows: item.matrixRows && item.matrixRows.length > 0 ? item.matrixRows : [
        { feature: 'Cell Architecture', col1: 'P-Type Mono PERC', col2: 'N-Type TOPCon / IBC', col3: 'Heterojunction (HJT)' }
      ],
      faqs: item.faqs && item.faqs.length > 0 ? item.faqs : [
        { question: 'What is the optimal orientation for Melbourne roofs?', answer: 'True North at a 25-30 degree pitch maximizes annual yield.' }
      ],
      metaTitle: item.metaTitle || '',
      canonicalUrl: item.canonicalUrl || '',
      keywords: item.keywords || '',
      metaDescription: item.metaDescription || '',
      schema: item.schema || '',
      isPublished: item.isPublished !== undefined ? item.isPublished : true
    });
    setIsKnowledgeModalOpen(true);
  };

  const handleOpenCreateKnowledge = () => {
    setEditingKnowledge(null);
    setKnowledgeModalTab('info');
    setShowContentPreview(false);
    const todayFormatted = new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    setKnowledgeFormData({
      title: '',
      slug: '',
      excerpt: '',
      category: 'Solar Basics',
      readTime: '6 min read',
      publishDate: todayFormatted,
      author: 'Trent Palmer',
      authorRole: 'Founder & Master Electrician',
      imageUrl: '',
      content: '<p>Welcome to our comprehensive technical field guide. In this section we explore engineering benchmarks, hardware sizing formulas, and real-world system longevity.</p>',
      keyTakeaways: 'Standardize on N-Type silicon cells for enhanced temperature resilience.\nMaintain inverter oversizing between 1.25x and 1.33x.\nEnsure Tier-1 structural mounting with AS/NZS 5033:2021 compliance.',
      blueprintTitle: 'Engineering Blueprint & Field Specifications',
      blueprintBadge: 'Technical Specification',
      quickStats: [
        { label: 'Recommended Orientation', value: 'North 15° - 35° Pitch' },
        { label: 'Average Daily Output', value: '24 - 32 kWh / day' },
        { label: 'DC Sizing Ratio', value: '1.33x Oversizing' }
      ],
      matrixHeaders: ['Specification', 'Budget Entry', 'Premium Standard', 'Commercial Grade'],
      matrixRows: [
        { feature: 'Cell Architecture', col1: 'P-Type Standard', col2: 'N-Type TOPCon / IBC', col3: 'Heterojunction (HJT)' },
        { feature: 'Degradation Rate', col1: '0.55% / year', col2: '0.40% / year', col3: '0.25% / year' },
        { feature: 'Temperature Coefficient', col1: '-0.35% / °C', col2: '-0.29% / °C', col3: '-0.24% / °C' }
      ],
      faqs: [
        {
          question: 'What is the optimal rooftop solar capacity for Melbourne households?',
          answer: 'A 6.6kW solar array paired with a 5kW single-phase inverter represents the optimal sweet spot for Victorian grid approvals and maximum STC government rebates.'
        },
        {
          question: 'How do DC oversizing ratios affect generation on cloudy days?',
          answer: 'Oversizing your DC array to 133% allows the inverter to reach full nameplate output earlier in the morning and maintain steady peak generation even in overcast conditions.'
        }
      ],
      metaTitle: '',
      canonicalUrl: '',
      keywords: 'solar blueprint, engineering specifications, inverter sizing, melbourne solar installation',
      metaDescription: 'In-depth engineering blueprint and comparison matrix for residential and commercial solar installations.',
      schema: '',
      isPublished: true
    });
    setIsKnowledgeModalOpen(true);
  };

  const handleKnowledgeFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!knowledgeFormData.title || !knowledgeFormData.excerpt) {
      showToast('error', 'Title and excerpt are required');
      return;
    }

    setKnowledgeFormLoading(true);

    try {
      const payload = {
        ...knowledgeFormData,
        keyTakeaways: knowledgeFormData.keyTakeaways.split('\n').map((k) => k.trim()).filter(Boolean),
        quickStats: knowledgeFormData.quickStats.filter((s) => s.label.trim() || s.value.trim()),
        matrixRows: knowledgeFormData.matrixRows.filter((r) => r.feature.trim() || r.col1.trim() || r.col2.trim() || r.col3.trim()),
        faqs: knowledgeFormData.faqs.filter((f) => f.question.trim() || f.answer.trim())
      };

      if (editingKnowledge) {
        const res = await api.updateKnowledge(editingKnowledge._id, payload);
        setKnowledgeItems((prev) => prev.map((k) => (k._id === editingKnowledge._id ? res.data : k)));
        showToast('success', 'Knowledge Hub guide updated successfully!');
      } else {
        const res = await api.createKnowledge(payload);
        setKnowledgeItems((prev) => [res.data, ...prev]);
        showToast('success', 'New Knowledge Hub guide published successfully!');
      }

      setIsKnowledgeModalOpen(false);
      await loadDashboardData(true);
    } catch (err: any) {
      showToast('error', err.message || 'Error saving Knowledge guide');
    } finally {
      setKnowledgeFormLoading(false);
    }
  };

  // Blog counts
  const activeBlogs = blogs.filter((b) => !b.isDeleted);
  const publishedBlogs = blogs.filter((b) => b.isPublished && !b.isDeleted);
  const draftBlogs = blogs.filter((b) => !b.isPublished && !b.isDeleted);
  const archivedBlogs = blogs.filter((b) => b.isDeleted);

  // Knowledge counts
  const activeKnowledge = knowledgeItems.filter((k) => !k.isDeleted);
  const publishedKnowledge = knowledgeItems.filter((k) => k.isPublished && !k.isDeleted);
  const draftKnowledge = knowledgeItems.filter((k) => !k.isPublished && !k.isDeleted);
  const archivedKnowledge = knowledgeItems.filter((k) => k.isDeleted);

  // Filtered Blogs logic
  const filteredBlogs = blogs.filter((b) => {
    const matchesSearch =
      b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === 'all'
        ? !b.isDeleted
        : statusFilter === 'published'
          ? b.isPublished && !b.isDeleted
          : statusFilter === 'draft'
            ? !b.isPublished && !b.isDeleted
            : b.isDeleted; // 'archived'

    const matchesCategory =
      categoryFilter === 'All Categories' ? true : b.category === categoryFilter;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  // Filtered Knowledge logic
  const filteredKnowledge = knowledgeItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchKnowledge.toLowerCase()) ||
      item.category.toLowerCase().includes(searchKnowledge.toLowerCase()) ||
      item.author.toLowerCase().includes(searchKnowledge.toLowerCase()) ||
      (item.blueprintTitle && item.blueprintTitle.toLowerCase().includes(searchKnowledge.toLowerCase()));

    const matchesStatus =
      statusFilterKnowledge === 'all'
        ? !item.isDeleted
        : statusFilterKnowledge === 'published'
          ? item.isPublished && !item.isDeleted
          : statusFilterKnowledge === 'draft'
            ? !item.isPublished && !item.isDeleted
            : item.isDeleted; // 'archived'

    const matchesCategory =
      categoryFilterKnowledge === 'All Categories' ? true : item.category === categoryFilterKnowledge;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  // --------------------------------------------------------------------------
  // VIEW 1: DEDICATED CLEAN WHITE LOGIN SCREEN
  // --------------------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden font-sans">
        {/* Subtle decorative background gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-87.5 bg-linear-to-b from-amber-100/50 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-md bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-xl shadow-slate-200/40 relative z-10">
          {/* Logo & Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mx-auto mb-3">
              <img src={logo} alt="Sunny Solar Logo" className="h-16 w-auto object-contain drop-shadow-xs" />
            </div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Sunny Solar Admin</h1>
            <p className="text-xs text-slate-500 mt-1">Sign in to access your content management panel</p>
          </div>

          {/* Error Alert */}
          {loginError && (
            <div className="mb-6 p-3.5 bg-rose-50 border border-rose-200 rounded-2xl flex items-center gap-3 text-rose-700 text-xs font-semibold">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
              <span>{loginError}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@sunnysolar.com.au"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-3 focus:ring-amber-500/10 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-3 focus:ring-amber-500/10 transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full mt-2 bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-amber-500/20 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2 transition-all"
            >
              {loginLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  <span>Logging in...</span>
                </>
              ) : (
                <span>Sign In to Dashboard</span>
              )}
            </button>
          </form>

          {/* Quick Demo Fill Credentials Button */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setEmail(import.meta.env.VITE_ADMIN_EMAIL || 'admin@sunnysolar.com.au');
                setPassword(import.meta.env.VITE_ADMIN_PASSWORD || 'Admin@12345');
              }}
              className="text-xs text-amber-700 hover:text-amber-800 font-semibold bg-amber-50 hover:bg-amber-100/80 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              Auto-fill Credentials from .env
            </button>
            <a
              href="/"
              className="text-xs text-slate-400 hover:text-slate-700 transition-colors flex items-center gap-1"
            >
              <span>Back to Sunny Solar website</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // VIEW 2: DEDICATED FULL ADMIN PANEL (WHITE AESTHETIC)
  // --------------------------------------------------------------------------
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex font-sans antialiased">
      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl shadow-xl text-xs font-bold border transition-all ${toast.type === 'success'
              ? 'bg-emerald-600 text-white border-emerald-500'
              : 'bg-rose-600 text-white border-rose-500'
            }`}
        >
          {toast.type === 'success' ? <Check className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
          <span>{toast.message}</span>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 1. LEFT SIDEBAR (CLEAN WHITE) */}
      {/* ------------------------------------------------------------- */}
      <aside className="w-64 bg-white border-r border-slate-200/80 flex flex-col shrink-0 fixed inset-y-0 left-0 z-30 shadow-xs">
        {/* Brand Area */}
        <div className="h-18 px-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Sunny Solar Logo" className="h-16 w-auto object-contain" />

          </div>
        </div>

        {/* Navigation Links */}
        <div className="p-4 flex-1 space-y-1">
          <div className="px-3 py-2 text-[10px] font-bold text-slate-900 uppercase tracking-wider">
            Management
          </div>

          {/* Tab 1: Articles & Blog */}
          <button
            onClick={() => setActiveTab('articles')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeTab === 'articles'
                ? 'bg-amber-50 text-amber-800 shadow-xs'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
          >
            <div className="flex items-center gap-2.5">
              <FileText className={`w-4 h-4 ${activeTab === 'articles' ? 'text-amber-600' : 'text-slate-400'}`} />
              <span>Articles & Blog</span>
            </div>
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${activeTab === 'articles' ? 'bg-amber-200/70 text-amber-900' : 'bg-slate-100 text-slate-600'
                }`}
            >
              {activeBlogs.length}
            </span>
          </button>

          {/* Tab 2: Knowledge Hub */}
          <button
            onClick={() => setActiveTab('knowledge')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeTab === 'knowledge'
                ? 'bg-amber-50 text-amber-800 shadow-xs'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
          >
            <div className="flex items-center gap-2.5">
              <BookOpen className={`w-4 h-4 ${activeTab === 'knowledge' ? 'text-amber-600' : 'text-slate-400'}`} />
              <span>Knowledge Hub</span>
            </div>
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${activeTab === 'knowledge' ? 'bg-amber-200/70 text-amber-900' : 'bg-slate-100 text-slate-600'
                }`}
            >
              {activeKnowledge.length}
            </span>
          </button>

          {/* Tab 3: Overview & Stats */}
          <button
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeTab === 'overview'
                ? 'bg-amber-50 text-amber-800 shadow-xs'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
          >
            <LayoutDashboard className={`w-4 h-4 ${activeTab === 'overview' ? 'text-amber-600' : 'text-slate-400'}`} />
            <span>Dashboard Stats</span>
          </button>

          <div className="pt-4 px-3 py-2 text-[10px] font-bold text-slate-900 uppercase tracking-wider">
            Quick Actions
          </div>

          <button
            onClick={handleOpenCreate}
            className="w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-amber-600 transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4 text-amber-500" />
            <span>Write New Article</span>
          </button>

          <button
            onClick={handleOpenCreateKnowledge}
            className="w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-amber-600 transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4 text-amber-500" />
            <span>New Knowledge Guide</span>
          </button>

          <a
            href="/learn/blog"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all"
          >
            <div className="flex items-center gap-2.5">
              <Globe className="w-4 h-4 text-slate-400" />
              <span>View Public Blog</span>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </a>

          <a
            href="/learn/knowledge-hub"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all"
          >
            <div className="flex items-center gap-2.5">
              <BookOpen className="w-4 h-4 text-slate-400" />
              <span>View Knowledge Hub</span>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Bottom User Area */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-black text-xs">
                AD
              </div>
              <div className="overflow-hidden">
                <span className="text-xs font-bold text-slate-900 block truncate">
                  {adminUser?.name || 'Administrator'}
                </span>
                <span className="text-[10px] text-slate-500 block truncate">
                  {adminUser?.email || 'admin@sunnysolar.com.au'}
                </span>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* ------------------------------------------------------------- */}
      {/* 2. MAIN CONTENT AREA (CLEAN WHITE BG) */}
      {/* ------------------------------------------------------------- */}
      <div className="flex-1 pl-64 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="h-18 bg-white border-b border-slate-200/80 px-8 flex items-center justify-between sticky top-0 z-20 shadow-xs">
          <div>
            <h2 className="text-2xl font-extrabold font-serif text-slate-900 tracking-tight">
              {activeTab === 'articles'
                ? 'Articles & Blog Management'
                : activeTab === 'knowledge'
                  ? 'Knowledge Hub Technical Guides'
                  : 'Dashboard Analytics'}
            </h2>

          </div>

          <div className="flex items-center gap-3">
            {/* Auto-Refresh / Live Sync Badge */}
            <div
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200/70 rounded-xl text-xs font-semibold select-none"
              title="Real-time auto-refresh active. Syncs with database automatically every 8 seconds, on tab focus, and immediately after any add, edit, or delete action."
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Auto-Sync ON</span>
            </div>

            <button
              onClick={() => loadDashboardData(false)}
              disabled={loadingBlogs || loadingKnowledge}
              className="p-2.5 bg-slate-100 hover:bg-slate-200/80 rounded-xl text-slate-600 transition-colors cursor-pointer"
              title="Refresh Data Now"
            >
              <RefreshCw
                className={`w-4 h-4 ${loadingBlogs || loadingKnowledge ? 'animate-spin text-amber-600' : ''}`}
              />
            </button>

            {activeTab === 'knowledge' ? (
              <button
                onClick={handleOpenCreateKnowledge}
                className="bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-md shadow-amber-500/20 cursor-pointer transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>New Knowledge Guide</span>
              </button>
            ) : (
              <button
                onClick={handleOpenCreate}
                className="bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-md shadow-amber-500/20 cursor-pointer transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Create Article</span>
              </button>
            )}
          </div>
        </header>

        {/* Content Container */}
        <main className="p-8 max-w-7xl w-full mx-auto space-y-6">
          {/* Key Metric Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1: Blog Articles */}
            <div
              onClick={() => setActiveTab('articles')}
              className={`bg-white border rounded-2xl p-5 shadow-xs flex items-center justify-between cursor-pointer transition-all ${activeTab === 'articles' ? 'border-amber-400 ring-2 ring-amber-400/20' : 'border-slate-200/80 hover:border-slate-300'
                }`}
            >
              <div>
                <span className="text-xs font-bold text-slate-500">Active Blog Articles</span>
                <div className="text-3xl font-black text-slate-900 mt-1">
                  {stats ? stats.totalBlogs : activeBlogs.length}
                </div>
                <span className="text-[11px] text-slate-400 mt-0.5 block">
                  {stats?.allStoredBlogs || blogs.length} Total Saved in Database
                </span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
            </div>

            {/* Card 2: Knowledge Hub Guides */}
            <div
              onClick={() => setActiveTab('knowledge')}
              className={`bg-white border rounded-2xl p-5 shadow-xs flex items-center justify-between cursor-pointer transition-all ${activeTab === 'knowledge' ? 'border-amber-400 ring-2 ring-amber-400/20' : 'border-slate-200/80 hover:border-slate-300'
                }`}
            >
              <div>
                <span className="text-xs font-bold text-slate-500">Active Knowledge Guides</span>
                <div className="text-3xl font-black text-amber-600 mt-1">
                  {stats?.totalKnowledge !== undefined ? stats.totalKnowledge : activeKnowledge.length}
                </div>
                <span className="text-[11px] text-amber-600/80 font-medium mt-0.5 block">
                  {stats?.allStoredKnowledge || knowledgeItems.length} Total Saved in Database
                </span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
            </div>

            {/* Card 3: Published Live */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-500">Published Live</span>
                <div className="text-3xl font-black text-emerald-600 mt-1">
                  {(stats ? stats.publishedBlogs : publishedBlogs.length) +
                    (stats?.publishedKnowledge !== undefined
                      ? stats.publishedKnowledge
                      : publishedKnowledge.length)}
                </div>
                <span className="text-[11px] text-emerald-600/80 font-medium mt-0.5 block">Visible to public</span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
            </div>

            {/* Card 4: Total Views */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-500">Cumulative Reads</span>
                <div className="text-3xl font-black text-blue-600 mt-1">
                  {(stats?.totalViews || blogs.reduce((acc, b) => acc + (b.views || 0), 0)) +
                    (stats?.totalKnowledgeViews || knowledgeItems.reduce((acc, k) => acc + (k.views || 0), 0))}
                </div>
                <span className="text-[11px] text-blue-600/80 font-medium mt-0.5 block">Organic page reads</span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <BarChart2 className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* TAB 1: ARTICLES MANAGEMENT TABLE */}
          {/* ------------------------------------------------------------- */}
          {activeTab === 'articles' && (
            <div className="bg-white border border-slate-200/80 rounded-3xl shadow-xs overflow-hidden">
              {/* Filter / Search Bar */}
              <div className="p-5 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Search */}
                <div className="relative max-w-sm w-full">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by title, author, keyword..."
                    className="w-full bg-slate-50 border border-slate-200/90 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                {/* Filters */}
                <div className="flex items-center gap-3 flex-wrap">
                  {/* Status Pills */}
                  <div className="bg-slate-100 p-1 rounded-xl flex items-center gap-1 text-xs">
                    <button
                      onClick={() => setStatusFilter('all')}
                      className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${statusFilter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                        }`}
                    >
                      Active ({activeBlogs.length})
                    </button>
                    <button
                      onClick={() => setStatusFilter('published')}
                      className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${statusFilter === 'published' ? 'bg-white text-emerald-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                        }`}
                    >
                      Published ({publishedBlogs.length})
                    </button>
                    <button
                      onClick={() => setStatusFilter('draft')}
                      className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${statusFilter === 'draft' ? 'bg-white text-slate-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                        }`}
                    >
                      Drafts ({draftBlogs.length})
                    </button>
                    <button
                      onClick={() => setStatusFilter('archived')}
                      className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${statusFilter === 'archived' ? 'bg-amber-100 text-amber-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
                        }`}
                      title="Articles removed from website and admin view but preserved permanently in database"
                    >
                      Recycle Bin ({archivedBlogs.length})
                    </button>
                  </div>

                  {/* Category Dropdown */}
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="bg-slate-50 border border-slate-200/90 rounded-xl px-3 py-2 text-xs text-slate-700 font-semibold focus:outline-none focus:border-amber-500 cursor-pointer"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>

                  <button
                    onClick={handleOpenCreate}
                    className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-3.5 py-2 rounded-xl text-xs flex items-center gap-1.5 cursor-pointer transition-colors shadow-xs"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>New Article</span>
                  </button>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-50/80 border-b border-slate-100 text-slate-500 font-bold uppercase tracking-wider">
                      <th className="py-3.5 px-6">Article Info</th>
                      <th className="py-3.5 px-6">Category</th>
                      <th className="py-3.5 px-6">Status</th>
                      <th className="py-3.5 px-6">Reads</th>
                      <th className="py-3.5 px-6">Publish Date</th>
                      <th className="py-3.5 px-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600 font-medium">
                    {filteredBlogs.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-12 text-center text-slate-400">
                          <FileText className="w-8 h-8 mx-auto mb-2 text-slate-300" />
                          <p className="font-semibold text-sm text-slate-700">No blog articles found</p>
                          <p className="text-xs text-slate-400 mt-1">Try adjusting your filters or search query.</p>
                        </td>
                      </tr>
                    ) : (
                      filteredBlogs.map((blog) => (
                        <tr key={blog._id} className="hover:bg-slate-50/60 transition-colors">
                          {/* Title & Author */}
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-3">
                              {blog.imageUrl && (
                                <img
                                  src={blog.imageUrl}
                                  alt={blog.title}
                                  className="w-10 h-10 rounded-lg object-cover shrink-0 border border-slate-200"
                                  onError={(e: any) => {
                                    e.target.style.display = 'none';
                                  }}
                                />
                              )}
                              <div className="min-w-0">
                                <span className="font-bold text-slate-900 block truncate max-w-sm text-sm">
                                  {blog.title}
                                </span>
                                
                              </div>
                            </div>
                          </td>

                          {/* Category */}
                          <td className="py-4 px-6">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200/50">
                              {blog.category}
                            </span>
                          </td>

                          {/* Status */}
                          <td className="py-4 px-6">
                            {blog.isDeleted ? (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200/80">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                <span>Archived in DB</span>
                              </span>
                            ) : (
                              <button
                                onClick={() => handleTogglePublish(blog)}
                                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold cursor-pointer transition-all ${blog.isPublished
                                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/80 hover:bg-emerald-100'
                                    : 'bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200'
                                  }`}
                                title="Click to toggle status"
                              >
                                <span
                                  className={`w-1.5 h-1.5 rounded-full ${blog.isPublished ? 'bg-emerald-500' : 'bg-slate-400'
                                    }`}
                                />
                                <span>{blog.isPublished ? 'Live' : 'Draft'}</span>
                              </button>
                            )}
                          </td>

                          {/* Reads */}
                          <td className="py-4 px-6 font-bold text-slate-700">
                            {blog.views || 0}
                          </td>

                          {/* Publish Date */}
                          <td className="py-4 px-6 text-slate-500">
                            {blog.publishDate || 'Recent'}
                          </td>

                          {/* Action Buttons */}
                          <td className="py-4 px-6 text-right">
                            {blog.isDeleted ? (
                              <div className="flex items-center justify-end">
                                <button
                                  onClick={() => handleRestoreBlog(blog._id, blog.title)}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200/80 rounded-xl font-bold text-xs transition-colors cursor-pointer"
                                  title="Restore to active panel & website"
                                >
                                  <RotateCcw className="w-3.5 h-3.5" />
                                  <span>Restore</span>
                                </button>
                              </div>
                            ) : (
                              <div className="flex items-center justify-end gap-1.5">
                                <a
                                  href={`/learn/blog/${blog.slug}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="p-2 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-xl transition-colors"
                                  title="Preview on live website"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                                <button
                                  onClick={() => handleOpenEdit(blog)}
                                  className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                                  title="Edit Article"
                                >
                                  <Edit3 className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => handleDeleteBlog(blog._id, blog.title)}
                                  className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
                                  title="Remove from panel & website (safely keeps in database)"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ------------------------------------------------------------- */}
          {/* TAB 2: KNOWLEDGE HUB TECHNICAL GUIDES TABLE */}
          {/* ------------------------------------------------------------- */}
          {activeTab === 'knowledge' && (
            <div className="bg-white border border-slate-200/80 rounded-3xl shadow-xs overflow-hidden">
              {/* Filter / Search Bar */}
              <div className="p-5 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Search */}
                <div className="relative max-w-sm w-full">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    value={searchKnowledge}
                    onChange={(e) => setSearchKnowledge(e.target.value)}
                    placeholder="Search knowledge guides, blueprints, specs..."
                    className="w-full bg-slate-50 border border-slate-200/90 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                {/* Filters */}
                <div className="flex items-center gap-3 flex-wrap">
                  {/* Status Pills */}
                  <div className="bg-slate-100 p-1 rounded-xl flex items-center gap-1 text-xs">
                    <button
                      onClick={() => setStatusFilterKnowledge('all')}
                      className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${statusFilterKnowledge === 'all'
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                        }`}
                    >
                      Active ({activeKnowledge.length})
                    </button>
                    <button
                      onClick={() => setStatusFilterKnowledge('published')}
                      className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${statusFilterKnowledge === 'published'
                          ? 'bg-white text-emerald-700 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                        }`}
                    >
                      Published ({publishedKnowledge.length})
                    </button>
                    <button
                      onClick={() => setStatusFilterKnowledge('draft')}
                      className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${statusFilterKnowledge === 'draft'
                          ? 'bg-white text-slate-800 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                        }`}
                    >
                      Drafts ({draftKnowledge.length})
                    </button>
                    <button
                      onClick={() => setStatusFilterKnowledge('archived')}
                      className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${statusFilterKnowledge === 'archived'
                          ? 'bg-amber-100 text-amber-900 shadow-xs'
                          : 'text-slate-500 hover:text-slate-900'
                        }`}
                      title="Guides removed from website and admin view but preserved permanently in database"
                    >
                      Archived in DB ({archivedKnowledge.length})
                    </button>
                  </div>

                  {/* Category Dropdown */}
                  <select
                    value={categoryFilterKnowledge}
                    onChange={(e) => setCategoryFilterKnowledge(e.target.value)}
                    className="bg-slate-50 border border-slate-200/90 rounded-xl px-3 py-2 text-xs text-slate-700 font-semibold focus:outline-none focus:border-amber-500 cursor-pointer"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>

                  <button
                    onClick={handleOpenCreateKnowledge}
                    className="bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold px-3.5 py-2 rounded-xl text-xs flex items-center gap-1.5 cursor-pointer transition-colors shadow-xs"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>New Guide</span>
                  </button>
                </div>
              </div>

              {/* Knowledge Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-50/80 border-b border-slate-100 text-slate-500 font-bold uppercase tracking-wider">
                      <th className="py-3.5 px-6">Guide & Blueprint</th>
                      <th className="py-3.5 px-6">Category & Read</th>

                      <th className="py-3.5 px-6">Status</th>
                      <th className="py-3.5 px-6">Reads</th>
                      <th className="py-3.5 px-6">Publish Date</th>
                      <th className="py-3.5 px-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600 font-medium">
                    {filteredKnowledge.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="py-12 text-center text-slate-400">
                          <BookOpen className="w-8 h-8 mx-auto mb-2 text-slate-300" />
                          <p className="font-semibold text-sm text-slate-700">No Knowledge Hub guides found</p>
                          <p className="text-xs text-slate-400 mt-1">Try adjusting your filters or create a new technical guide.</p>
                        </td>
                      </tr>
                    ) : (
                      filteredKnowledge.map((item) => (
                        <tr key={item._id} className="hover:bg-slate-50/60 transition-colors">
                          {/* Guide Title & Slug */}
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-3">
                              {item.imageUrl && (
                                <img
                                  src={item.imageUrl}
                                  alt={item.title}
                                  className="w-10 h-10 rounded-lg object-cover shrink-0 border border-slate-200"
                                  onError={(e: any) => {
                                    e.target.style.display = 'none';
                                  }}
                                />
                              )}
                              <div className="min-w-0">
                                <span className="font-bold text-slate-900 block truncate max-w-xs sm:max-w-sm text-sm">
                                  {item.title}
                                </span>

                              </div>
                            </div>
                          </td>

                          {/* Category & Read Time */}
                          <td className="py-4 px-6">
                            <div>
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200/50">
                                {item.category}
                              </span>
                              <span className="text-[10px] text-slate-400 block mt-1">
                                {item.readTime || '6 min read'}
                              </span>
                            </div>
                          </td>



                          {/* Status */}
                          <td className="py-4 px-6">
                            {item.isDeleted ? (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200/80">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                <span>Archived in DB</span>
                              </span>
                            ) : (
                              <button
                                onClick={() => handleTogglePublishKnowledge(item)}
                                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold cursor-pointer transition-all ${item.isPublished
                                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/80 hover:bg-emerald-100'
                                    : 'bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200'
                                  }`}
                                title="Click to toggle status"
                              >
                                <span
                                  className={`w-1.5 h-1.5 rounded-full ${item.isPublished ? 'bg-emerald-500' : 'bg-slate-400'
                                    }`}
                                />
                                <span>{item.isPublished ? 'Live' : 'Draft'}</span>
                              </button>
                            )}
                          </td>

                          {/* Reads */}
                          <td className="py-4 px-6 font-bold text-slate-700">
                            {item.views || 0}
                          </td>

                          {/* Publish Date */}
                          <td className="py-4 px-6 text-slate-500">
                            {item.publishDate || 'Recent'}
                          </td>

                          {/* Action Buttons */}
                          <td className="py-4 px-6 text-right">
                            {item.isDeleted ? (
                              <div className="flex items-center justify-end">
                                <button
                                  onClick={() => handleRestoreKnowledge(item._id, item.title)}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200/80 rounded-xl font-bold text-xs transition-colors cursor-pointer"
                                  title="Restore to active panel & website"
                                >
                                  <RotateCcw className="w-3.5 h-3.5" />
                                  <span>Restore</span>
                                </button>
                              </div>
                            ) : (
                              <div className="flex items-center justify-end gap-1.5">
                                <a
                                  href={`/learn/knowledge-hub/${item.slug}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="p-2 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-xl transition-colors"
                                  title="Preview on live website"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                                <button
                                  onClick={() => handleOpenEditKnowledge(item)}
                                  className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                                  title="Edit Knowledge Guide"
                                >
                                  <Edit3 className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => handleDeleteKnowledge(item._id, item.title)}
                                  className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
                                  title="Remove from panel & website (safely keeps in database)"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}


        </main>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 4. MODAL: COMPOSE / EDIT BLOG ARTICLE */}
      {/* ------------------------------------------------------------- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[94vh] flex flex-col shadow-2xl overflow-hidden my-4 border border-slate-200">
            {/* Modal Header */}
            <div className="bg-linear-to-r from-orange-500 to-amber-500 px-6 py-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 border-2 border-white rounded-md flex items-center justify-center">
                  <Plus className="w-4 h-4 text-white stroke-3" />
                </div>
                <h3 className="text-lg font-black tracking-wide text-white">
                  {editingBlog ? 'Edit Blog' : 'Add New Blog'}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Three Tabs: Blog Info | Content | Meta Tags */}
            <div className="px-6 pt-3 border-b border-slate-200 flex items-center gap-8 bg-white">
              <button
                type="button"
                onClick={() => setModalTab('info')}
                className={`pb-3 text-sm font-bold transition-all relative cursor-pointer ${modalTab === 'info' ? 'text-orange-500' : 'text-slate-400 hover:text-slate-600'
                  }`}
              >
                Blog Info
                {modalTab === 'info' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
                )}
              </button>

              <button
                type="button"
                onClick={() => setModalTab('content')}
                className={`pb-3 text-sm font-bold transition-all relative cursor-pointer ${modalTab === 'content' ? 'text-orange-500' : 'text-slate-400 hover:text-slate-600'
                  }`}
              >
                Content
                {modalTab === 'content' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
                )}
              </button>

              <button
                type="button"
                onClick={() => setModalTab('meta')}
                className={`pb-3 text-sm font-bold transition-all relative cursor-pointer ${modalTab === 'meta' ? 'text-orange-500' : 'text-slate-400 hover:text-slate-600'
                  }`}
              >
                Meta Tags
                {modalTab === 'meta' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
                )}
              </button>
            </div>

            {/* Form Body */}
            <form onSubmit={handleFormSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* TAB 1: BLOG INFO */}
              {modalTab === 'info' && (
                <div className="border border-slate-200 rounded-2xl p-6 bg-white space-y-4">
                  {/* Blog Title */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">Blog Title</label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => {
                        const val = e.target.value;
                        setFormData((prev) => ({
                          ...prev,
                          title: val,
                          slug:
                            !editingBlog || !prev.slug
                              ? val
                                .toLowerCase()
                                .replace(/[^a-z0-9]+/g, '-')
                                .replace(/(^-|-$)+/g, '')
                              : prev.slug
                        }));
                      }}
                      placeholder="e.g. Solar Trends 2024"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10"
                    />
                  </div>

                  {/* URL Slug */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      URL Slug <span className="text-slate-400 font-normal">(auto-generated from title)</span>
                    </label>
                    <div className="flex items-center rounded-xl border border-slate-300 bg-slate-50 overflow-hidden focus-within:border-amber-500 focus-within:bg-white">
                      <span className="pl-4 pr-1 text-slate-400 font-medium text-xs sm:text-sm select-none">
                        /learn/blog/
                      </span>
                      <input
                        type="text"
                        value={formData.slug}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            slug: e.target.value.toLowerCase().replace(/\s+/g, '-')
                          })
                        }
                        placeholder="your-blog-title"
                        className="w-full bg-transparent px-2 py-2.5 text-xs sm:text-sm text-slate-800 font-mono focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Category & Read Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">Category</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-500"
                      >
                        {categories.filter((c) => c !== 'All Categories').map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">Read Time</label>
                      <input
                        type="text"
                        value={formData.readTime}
                        onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                        placeholder="e.g. 5 min read"
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  {/* Author & Role */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">Author Name</label>
                      <input
                        type="text"
                        value={formData.author}
                        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">Author Role</label>
                      <input
                        type="text"
                        value={formData.authorRole}
                        onChange={(e) => setFormData({ ...formData, authorRole: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  {/* Publish Date */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">Publish Date</label>
                    <input
                      type="text"
                      value={formData.publishDate}
                      onChange={(e) => setFormData({ ...formData, publishDate: e.target.value })}
                      placeholder="e.g. Sep 17, 2026"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  {/* Header / Featured Blog Image Upload */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <ImageIcon className="w-3.5 h-3.5 text-amber-500" />
                        <span>Featured Blog Image</span>
                      </label>
                      {formData.imageUrl && (
                        <button
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, imageUrl: '' }))}
                          className="text-[11px] text-rose-500 hover:text-rose-700 font-semibold cursor-pointer"
                        >
                          Remove Image
                        </button>
                      )}
                    </div>

                    {/* Preview or Upload Dropzone */}
                    {formData.imageUrl ? (
                      <div className="relative rounded-2xl overflow-hidden border border-slate-200 group mb-3 bg-slate-50">
                        <img
                          src={formData.imageUrl}
                          alt="Article preview"
                          className="w-full h-44 object-cover"
                          onError={(e: any) => {
                            e.target.src = '/images/blog/default.jpg';
                          }}
                        />
                        {uploadingBlogImage && (
                          <div className="absolute inset-0 bg-slate-900/80 flex flex-col items-center justify-center gap-2 text-white z-10 backdrop-blur-xs">
                            <div className="w-6 h-6 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
                            <span className="text-xs font-semibold text-amber-300">Uploading to Cloudinary...</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2.5">
                          <label className="bg-white text-slate-900 hover:bg-slate-100 px-3.5 py-2 rounded-xl text-xs font-bold shadow-md cursor-pointer flex items-center gap-1.5 transition-colors">
                            <Upload className="w-3.5 h-3.5 text-amber-600" />
                            <span>Upload New File</span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleBlogImageUpload}
                              className="hidden"
                            />
                          </label>
                          <button
                            type="button"
                            onClick={() => setFormData((prev) => ({ ...prev, imageUrl: '' }))}
                            className="bg-rose-600 hover:bg-rose-700 text-white px-3.5 py-2 rounded-xl text-xs font-bold shadow-md cursor-pointer flex items-center gap-1.5 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <label className="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 hover:border-amber-500 hover:bg-amber-50/40 rounded-2xl p-6 cursor-pointer transition-all mb-3 text-center group bg-slate-50/60 relative">
                        {uploadingBlogImage ? (
                          <div className="flex flex-col items-center justify-center gap-2 py-4 text-amber-600">
                            <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                            <span className="text-xs font-bold">Uploading to Cloudinary...</span>
                          </div>
                        ) : (
                          <>
                            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                              <Upload className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-bold text-slate-800">
                              Click to upload Article Image
                            </span>
                            <span className="text-[11px] text-slate-400 mt-0.5">
                              Cloudinary Cloud Storage (PNG, JPG, WEBP)
                            </span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleBlogImageUpload}
                              className="hidden"
                            />
                          </>
                        )}
                      </label>
                    )}

                    {/* Or enter/edit image URL directly */}
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.imageUrl}
                        onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                        placeholder="Or enter image URL (e.g. /images/blog/... or https://...)"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 font-mono"
                      />
                    </div>
                  </div>

                  {/* Excerpt */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">Excerpt / Summary</label>
                    <textarea
                      rows={3}
                      required
                      value={formData.excerpt}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      placeholder="Brief summary shown on blog cards..."
                      className="w-full bg-white border border-slate-300 rounded-xl p-3 text-sm text-slate-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  {/* Key Takeaways */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      Key Takeaways <span className="text-slate-400 font-normal">(one per line)</span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.keyTakeaways}
                      onChange={(e) => setFormData({ ...formData, keyTakeaways: e.target.value })}
                      placeholder="Bullet 1&#10;Bullet 2&#10;Bullet 3"
                      className="w-full bg-white border border-slate-300 rounded-xl p-3 text-sm text-slate-900 font-mono focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>
              )}

              {/* TAB 2: CONTENT */}
              {modalTab === 'content' && (
                <div className="border border-slate-200 rounded-2xl p-6 bg-white space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-bold text-slate-800">Article Body Content</label>
                    <span className="text-[11px] text-slate-400">Supports HTML formatting</span>
                  </div>

                  <div className="rounded-2xl overflow-hidden border border-slate-300 bg-[#162132]">
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 px-3.5 py-2 bg-[#0d1624] border-b border-slate-700/80 text-xs text-slate-300 select-none">
                      <button
                        type="button"
                        onClick={() => applyFormatting('content', '<strong>', '</strong>')}
                        className="px-2 py-1 hover:bg-slate-700/70 rounded font-black hover:text-white transition-colors cursor-pointer"
                        title="Bold"
                      >
                        B
                      </button>
                      <button
                        type="button"
                        onClick={() => applyFormatting('content', '<em>', '</em>')}
                        className="px-2 py-1 hover:bg-slate-700/70 rounded italic hover:text-white transition-colors cursor-pointer"
                        title="Italic"
                      >
                        I
                      </button>
                      <button
                        type="button"
                        onClick={() => applyFormatting('content', '<u>', '</u>')}
                        className="px-2 py-1 hover:bg-slate-700/70 rounded underline hover:text-white transition-colors cursor-pointer"
                        title="Underline"
                      >
                        <u>U</u>
                      </button>

                      <span className="h-4 w-px bg-slate-700 mx-1" />

                      {['h2', 'h3', 'h4'].map((h) => (
                        <button
                          key={h}
                          type="button"
                          onClick={() => applyFormatting('content', `<${h}>`, `</${h}>`)}
                          className="px-1.5 py-1 hover:bg-slate-700/70 rounded font-bold uppercase text-[11px] hover:text-white transition-colors cursor-pointer"
                          title={`Heading ${h.toUpperCase()}`}
                        >
                          {h.toUpperCase()}
                        </button>
                      ))}

                      <span className="h-4 w-px bg-slate-700 mx-1" />

                      <button
                        type="button"
                        onClick={() => applyFormatting('content', '<p>', '</p>')}
                        className="px-2 py-1 hover:bg-slate-700/70 rounded hover:text-white transition-colors text-[11px] cursor-pointer"
                        title="Paragraph"
                      >
                        P
                      </button>

                      <button
                        type="button"
                        onClick={() => handleInsertLink('content')}
                        className="px-2 py-1 hover:bg-slate-700/70 rounded hover:text-white transition-colors text-[11px] flex items-center gap-1 cursor-pointer"
                        title="Insert Link"
                      >
                        <span>🔗</span> Link
                      </button>

                      <button
                        type="button"
                        onClick={() => handleClearFormatting('content')}
                        className="px-2 py-1 hover:bg-slate-700/70 rounded text-slate-400 hover:text-rose-400 transition-colors text-[11px] cursor-pointer"
                        title="Clear Formatting"
                      >
                        Clear
                      </button>
                    </div>

                    <textarea
                      ref={contentRef}
                      rows={12}
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      placeholder="Write your article body here. You can use standard HTML or formatted text..."
                      className="w-full bg-[#162132] text-slate-100 p-4 font-mono text-xs focus:outline-none resize-y min-h-55"
                    />
                  </div>
                </div>
              )}

              {/* TAB 3: META TAGS */}
              {modalTab === 'meta' && (
                <div className="border border-slate-200 rounded-2xl p-6 bg-white space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">Meta Title</label>
                    <input
                      type="text"
                      value={formData.metaTitle}
                      onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                      placeholder="SEO Title | Sunny Solar"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">Canonical URL</label>
                    <input
                      type="text"
                      value={formData.canonicalUrl}
                      onChange={(e) => setFormData({ ...formData, canonicalUrl: e.target.value })}
                      placeholder="https://sunnysolar.com.au/learn/blog/..."
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">Keywords</label>
                    <input
                      type="text"
                      value={formData.keywords}
                      onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                      placeholder="solar, panels, battery, inverter"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">Meta Description</label>
                    <textarea
                      rows={3}
                      value={formData.metaDescription}
                      onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                      placeholder="Search engine meta description snippet..."
                      className="w-full bg-white border border-slate-300 rounded-xl p-3 text-sm text-slate-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">Schema Markup (JSON-LD)</label>
                    <textarea
                      rows={3}
                      value={formData.schema}
                      onChange={(e) => setFormData({ ...formData, schema: e.target.value })}
                      placeholder='{ "@context": "https://schema.org", ... }'
                      className="w-full bg-white border border-slate-300 rounded-xl p-3 text-sm text-slate-900 font-mono focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>
              )}

              {/* Published Toggle */}
              <div className="flex items-center gap-2.5 px-2">
                <input
                  type="checkbox"
                  id="modalIsPublished"
                  checked={formData.isPublished}
                  onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
                  className="w-4 h-4 text-orange-500 rounded border-slate-300 focus:ring-orange-400 cursor-pointer"
                />
                <label htmlFor="modalIsPublished" className="text-xs font-bold text-slate-800 cursor-pointer">
                  Publish immediately on live blog
                </label>
              </div>

              {/* Modal Footer Actions */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 font-bold text-xs transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={formLoading}
                  className="bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold px-6 py-2.5 rounded-xl shadow-md shadow-orange-500/20 disabled:opacity-50 cursor-pointer text-xs flex items-center gap-2 transition-all"
                >
                  {formLoading && (
                    <div className="w-3.5 h-3.5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  )}
                  <span>{editingBlog ? 'Update Blog' : 'Add Blog'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 5. MODAL: COMPOSE / EDIT KNOWLEDGE HUB TECHNICAL GUIDE */}
      {/* ------------------------------------------------------------- */}
      {isKnowledgeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[94vh] flex flex-col shadow-2xl overflow-hidden my-4 border border-slate-200">
            {/* Modal Header */}
            <div className="bg-linear-to-r from-orange-500 to-amber-500 px-6 py-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 border-2 border-white rounded-lg flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-white stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-lg font-black tracking-wide text-white">
                    {editingKnowledge ? 'Edit Knowledge Hub Guide' : 'Add Technical Field Guide'}
                  </h3>
                  <span className="text-[11px] text-amber-100 font-medium block">
                    Engineering Blueprints, Decision Matrices & Technical Specifications
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsKnowledgeModalOpen(false)}
                className="w-8 h-8 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Four Tabs: Guide Info | Content | Blueprint & Specs | Meta Tags */}
            <div className="px-6 pt-3 border-b border-slate-200 flex items-center gap-6 sm:gap-8 bg-white overflow-x-auto">
              <button
                type="button"
                onClick={() => setKnowledgeModalTab('info')}
                className={`pb-3 text-sm font-bold transition-all relative shrink-0 cursor-pointer ${knowledgeModalTab === 'info' ? 'text-orange-500' : 'text-slate-400 hover:text-slate-600'
                  }`}
              >
                Guide Info
                {knowledgeModalTab === 'info' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
                )}
              </button>

              <button
                type="button"
                onClick={() => setKnowledgeModalTab('content')}
                className={`pb-3 text-sm font-bold transition-all relative shrink-0 cursor-pointer ${knowledgeModalTab === 'content' ? 'text-orange-500' : 'text-slate-400 hover:text-slate-600'
                  }`}
              >
                Content
                {knowledgeModalTab === 'content' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
                )}
              </button>

              <button
                type="button"
                onClick={() => setKnowledgeModalTab('blueprint')}
                className={`pb-3 text-sm font-bold transition-all relative shrink-0 cursor-pointer flex items-center gap-1.5 ${knowledgeModalTab === 'blueprint' ? 'text-orange-500' : 'text-slate-400 hover:text-slate-600'
                  }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Blueprint & Specs</span>
                {knowledgeModalTab === 'blueprint' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
                )}
              </button>

              <button
                type="button"
                onClick={() => setKnowledgeModalTab('meta')}
                className={`pb-3 text-sm font-bold transition-all relative shrink-0 cursor-pointer ${knowledgeModalTab === 'meta' ? 'text-orange-500' : 'text-slate-400 hover:text-slate-600'
                  }`}
              >
                Meta Tags
                {knowledgeModalTab === 'meta' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
                )}
              </button>
            </div>

            {/* Form Body */}
            <form onSubmit={handleKnowledgeFormSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* TAB 1: GUIDE INFO */}
              {knowledgeModalTab === 'info' && (
                <div className="border border-slate-200 rounded-2xl p-6 bg-white space-y-4">
                  {/* Title */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">Guide Title</label>
                    <input
                      type="text"
                      required
                      value={knowledgeFormData.title}
                      onChange={(e) => {
                        const val = e.target.value;
                        setKnowledgeFormData((prev) => ({
                          ...prev,
                          title: val,
                          slug:
                            !editingKnowledge || !prev.slug
                              ? val
                                .toLowerCase()
                                .replace(/[^a-z0-9]+/g, '-')
                                .replace(/(^-|-$)+/g, '')
                              : prev.slug
                        }));
                      }}
                      placeholder="e.g. Solar System Sizing Guide: Finding the Sweet Spot"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10"
                    />
                  </div>

                  {/* URL Slug */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      URL Slug <span className="text-slate-400 font-normal">(auto-generated from title)</span>
                    </label>
                    <div className="flex items-center rounded-xl border border-slate-300 bg-slate-50 overflow-hidden focus-within:border-amber-500 focus-within:bg-white">
                      <span className="pl-4 pr-1 text-slate-400 font-medium text-xs sm:text-sm select-none">
                        /learn/knowledge-hub/
                      </span>
                      <input
                        type="text"
                        value={knowledgeFormData.slug}
                        onChange={(e) =>
                          setKnowledgeFormData({
                            ...knowledgeFormData,
                            slug: e.target.value.toLowerCase().replace(/\s+/g, '-')
                          })
                        }
                        placeholder="solar-system-sizing-guide"
                        className="w-full bg-transparent px-2 py-2.5 text-xs sm:text-sm text-slate-800 font-mono focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Category & Read Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">Category</label>
                      <select
                        value={knowledgeFormData.category}
                        onChange={(e) => setKnowledgeFormData({ ...knowledgeFormData, category: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-500"
                      >
                        {categories.filter((c) => c !== 'All Categories').map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">Read Time</label>
                      <input
                        type="text"
                        value={knowledgeFormData.readTime}
                        onChange={(e) => setKnowledgeFormData({ ...knowledgeFormData, readTime: e.target.value })}
                        placeholder="e.g. 6 min read"
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  {/* Author Name & Role */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">Author Name</label>
                      <input
                        type="text"
                        value={knowledgeFormData.author}
                        onChange={(e) => setKnowledgeFormData({ ...knowledgeFormData, author: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">Author Role</label>
                      <input
                        type="text"
                        value={knowledgeFormData.authorRole}
                        onChange={(e) => setKnowledgeFormData({ ...knowledgeFormData, authorRole: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  {/* Publish Date */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">Publish Date</label>
                    <input
                      type="text"
                      value={knowledgeFormData.publishDate}
                      onChange={(e) => setKnowledgeFormData({ ...knowledgeFormData, publishDate: e.target.value })}
                      placeholder="e.g. Sep 17, 2026"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  {/* Header / Featured Guide Image Upload */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <ImageIcon className="w-3.5 h-3.5 text-amber-500" />
                        <span>Header / Featured Guide Image</span>
                      </label>
                      {knowledgeFormData.imageUrl && (
                        <button
                          type="button"
                          onClick={() => setKnowledgeFormData((prev) => ({ ...prev, imageUrl: '' }))}
                          className="text-[11px] text-rose-500 hover:text-rose-700 font-semibold cursor-pointer"
                        >
                          Remove Image
                        </button>
                      )}
                    </div>

                    {/* Preview or Upload Dropzone */}
                    {knowledgeFormData.imageUrl ? (
                      <div className="relative rounded-2xl overflow-hidden border border-slate-200 group mb-3 bg-slate-50">
                        <img
                          src={knowledgeFormData.imageUrl}
                          alt="Knowledge Guide preview"
                          className="w-full h-44 object-cover"
                          onError={(e: any) => {
                            e.target.src = '/images/blog/solar-system-size.jpg';
                          }}
                        />
                        {uploadingKnowledgeImage && (
                          <div className="absolute inset-0 bg-slate-900/80 flex flex-col items-center justify-center gap-2 text-white z-10 backdrop-blur-xs">
                            <div className="w-6 h-6 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
                            <span className="text-xs font-semibold text-amber-300">Uploading to Cloudinary...</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2.5">
                          <label className="bg-white text-slate-900 hover:bg-slate-100 px-3.5 py-2 rounded-xl text-xs font-bold shadow-md cursor-pointer flex items-center gap-1.5 transition-colors">
                            <Upload className="w-3.5 h-3.5 text-amber-600" />
                            <span>Upload New File</span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleKnowledgeImageUpload}
                              className="hidden"
                            />
                          </label>
                          <button
                            type="button"
                            onClick={() => setKnowledgeFormData((prev) => ({ ...prev, imageUrl: '' }))}
                            className="bg-rose-600 hover:bg-rose-700 text-white px-3.5 py-2 rounded-xl text-xs font-bold shadow-md cursor-pointer flex items-center gap-1.5 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <label className="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 hover:border-amber-500 hover:bg-amber-50/40 rounded-2xl p-6 cursor-pointer transition-all mb-3 text-center group bg-slate-50/60 relative">
                        {uploadingKnowledgeImage ? (
                          <div className="flex flex-col items-center justify-center gap-2 py-4 text-amber-600">
                            <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                            <span className="text-xs font-bold">Uploading to Cloudinary...</span>
                          </div>
                        ) : (
                          <>
                            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                              <Upload className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-bold text-slate-800">
                              Click to upload Knowledge Guide Image
                            </span>
                            <span className="text-[11px] text-slate-400 mt-0.5">
                              Cloudinary Cloud Storage (PNG, JPG, WEBP)
                            </span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleKnowledgeImageUpload}
                              className="hidden"
                            />
                          </>
                        )}
                      </label>
                    )}

                    {/* Or enter/edit image URL directly */}
                    <div className="relative">
                      <input
                        type="text"
                        value={knowledgeFormData.imageUrl}
                        onChange={(e) =>
                          setKnowledgeFormData((prev) => ({ ...prev, imageUrl: e.target.value }))
                        }
                        placeholder="Or enter image URL (e.g. /images/blog/solar-system-size.jpg or https://...)"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 font-mono"
                      />
                    </div>
                  </div>

                  {/* Excerpt */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">Excerpt / Technical Overview</label>
                    <textarea
                      rows={3}
                      required
                      value={knowledgeFormData.excerpt}
                      onChange={(e) => setKnowledgeFormData({ ...knowledgeFormData, excerpt: e.target.value })}
                      placeholder="High-level engineering overview displayed in the Knowledge Hub catalog..."
                      className="w-full bg-white border border-slate-300 rounded-xl p-3 text-sm text-slate-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  {/* Key Takeaways */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      Key Takeaways <span className="text-slate-400 font-normal">(one per line)</span>
                    </label>
                    <textarea
                      rows={3}
                      value={knowledgeFormData.keyTakeaways}
                      onChange={(e) => setKnowledgeFormData({ ...knowledgeFormData, keyTakeaways: e.target.value })}
                      placeholder="Standardize on N-Type silicon cells for enhanced temperature resilience.&#10;Maintain inverter oversizing between 1.25x and 1.33x.&#10;Ensure Tier-1 structural mounting with AS/NZS 5033:2021 compliance."
                      className="w-full bg-white border border-slate-300 rounded-xl p-3 text-sm text-slate-900 font-mono focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>
              )}

              {/* TAB 2: CONTENT */}
              {knowledgeModalTab === 'content' && (
                <div className="border border-slate-200 rounded-2xl p-6 bg-white space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="block text-xs font-bold text-slate-800">Guide Technical Content</label>
                      <p className="text-[11px] text-slate-400">Supports rich HTML headings, paragraphs, and lists</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowContentPreview(!showContentPreview)}
                      className="text-xs font-bold text-amber-600 hover:text-amber-700 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200/60 cursor-pointer"
                    >
                      {showContentPreview ? 'Edit Raw Content' : 'Preview Formatted Output'}
                    </button>
                  </div>

                  {showContentPreview ? (
                    <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50 min-h-62.5 prose max-w-none text-slate-800 text-sm">
                      <div dangerouslySetInnerHTML={{ __html: knowledgeFormData.content || '<p class="text-slate-400 italic">No content written yet.</p>' }} />
                    </div>
                  ) : (
                    <div className="rounded-2xl overflow-hidden border border-slate-300 bg-[#162132]">
                      {/* Formatting toolbar */}
                      <div className="flex flex-wrap items-center gap-1 sm:gap-2 px-3.5 py-2 bg-[#0d1624] border-b border-slate-700/80 text-xs text-slate-300 select-none">
                        <button
                          type="button"
                          onClick={() => applyKnowledgeFormatting('<strong>', '</strong>')}
                          className="px-2 py-1 hover:bg-slate-700/70 rounded font-black hover:text-white transition-colors cursor-pointer"
                          title="Bold"
                        >
                          B
                        </button>
                        <button
                          type="button"
                          onClick={() => applyKnowledgeFormatting('<em>', '</em>')}
                          className="px-2 py-1 hover:bg-slate-700/70 rounded italic hover:text-white transition-colors cursor-pointer"
                          title="Italic"
                        >
                          I
                        </button>
                        <button
                          type="button"
                          onClick={() => applyKnowledgeFormatting('<u>', '</u>')}
                          className="px-2 py-1 hover:bg-slate-700/70 rounded underline hover:text-white transition-colors cursor-pointer"
                          title="Underline"
                        >
                          <u>U</u>
                        </button>

                        <span className="h-4 w-px bg-slate-700 mx-1" />

                        {['h2', 'h3', 'h4'].map((h) => (
                          <button
                            key={h}
                            type="button"
                            onClick={() => applyKnowledgeFormatting(`<${h}>`, `</${h}>`)}
                            className="px-1.5 py-1 hover:bg-slate-700/70 rounded font-bold uppercase text-[11px] hover:text-white transition-colors cursor-pointer"
                            title={`Heading ${h.toUpperCase()}`}
                          >
                            {h.toUpperCase()}
                          </button>
                        ))}

                        <span className="h-4 w-px bg-slate-700 mx-1" />

                        <button
                          type="button"
                          onClick={() => applyKnowledgeFormatting('<p>', '</p>')}
                          className="px-2 py-1 hover:bg-slate-700/70 rounded hover:text-white transition-colors text-[11px] cursor-pointer"
                          title="Paragraph"
                        >
                          P
                        </button>

                        <button
                          type="button"
                          onClick={() => applyKnowledgeFormatting('<ul>\n  <li>', '</li>\n</ul>')}
                          className="px-2 py-1 hover:bg-slate-700/70 rounded hover:text-white transition-colors text-[11px] cursor-pointer"
                          title="Unordered List"
                        >
                          • List
                        </button>

                        <button
                          type="button"
                          onClick={handleInsertKnowledgeLink}
                          className="px-2 py-1 hover:bg-slate-700/70 rounded hover:text-white transition-colors text-[11px] flex items-center gap-1 cursor-pointer"
                          title="Insert Link"
                        >
                          <span>🔗</span> Link
                        </button>

                        <button
                          type="button"
                          onClick={handleClearKnowledgeFormatting}
                          className="px-2 py-1 hover:bg-slate-700/70 rounded text-slate-400 hover:text-rose-400 transition-colors text-[11px] cursor-pointer"
                          title="Clear Formatting"
                        >
                          Clear
                        </button>
                      </div>

                      <textarea
                        ref={knowledgeContentRef}
                        rows={14}
                        value={knowledgeFormData.content}
                        onChange={(e) => setKnowledgeFormData({ ...knowledgeFormData, content: e.target.value })}
                        placeholder="Write detailed technical content here. HTML tags such as <h2>, <p>, <ul>, <li>, and <strong> are fully supported."
                        className="w-full bg-[#162132] text-slate-100 p-4 font-mono text-xs focus:outline-none resize-y min-h-62.5"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: BLUEPRINT & SPECS */}
              {knowledgeModalTab === 'blueprint' && (
                <div className="space-y-6">
                  {/* Blueprint Title & Badge */}
                  <div className="border border-slate-200 rounded-2xl p-6 bg-white space-y-4">
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-amber-500" />
                      <span>Blueprint Section Header</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-800 mb-1.5">Blueprint Title</label>
                        <input
                          type="text"
                          value={knowledgeFormData.blueprintTitle}
                          onChange={(e) =>
                            setKnowledgeFormData({ ...knowledgeFormData, blueprintTitle: e.target.value })
                          }
                          placeholder="e.g. Engineering Blueprint & Specifications"
                          className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-800 mb-1.5">Blueprint Badge Tag</label>
                        <input
                          type="text"
                          value={knowledgeFormData.blueprintBadge}
                          onChange={(e) =>
                            setKnowledgeFormData({ ...knowledgeFormData, blueprintBadge: e.target.value })
                          }
                          placeholder="e.g. Field Specification 2026"
                          className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Quick Technical Specs List */}
                  <div className="border border-slate-200 rounded-2xl p-6 bg-white space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                          <Sliders className="w-4 h-4 text-amber-500" />
                          <span>Quick Specifications & Benchmarks</span>
                        </h4>
                        <p className="text-[11px] text-slate-500">Displayed in high-visibility stat boxes on the live page</p>
                      </div>

                      <button
                        type="button"
                        onClick={handleAddQuickStat}
                        className="bg-amber-50 hover:bg-amber-100/80 text-amber-800 font-bold px-3 py-1.5 rounded-xl text-xs flex items-center gap-1.5 border border-amber-200/60 cursor-pointer transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add Stat</span>
                      </button>
                    </div>

                    <div className="space-y-2.5">
                      {knowledgeFormData.quickStats.length === 0 ? (
                        <div className="p-4 bg-slate-50 rounded-xl text-center text-xs text-slate-400">
                          No quick stats added yet. Click &quot;Add Stat&quot; to configure technical specs.
                        </div>
                      ) : (
                        knowledgeFormData.quickStats.map((stat, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-2.5 bg-slate-50 rounded-xl border border-slate-200/70">
                            <input
                              type="text"
                              value={stat.label}
                              onChange={(e) => handleUpdateQuickStat(idx, 'label', e.target.value)}
                              placeholder="Label (e.g. DC Sizing Ratio)"
                              className="flex-1 bg-white border border-slate-300 rounded-lg px-3 py-1.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                            />
                            <input
                              type="text"
                              value={stat.value}
                              onChange={(e) => handleUpdateQuickStat(idx, 'value', e.target.value)}
                              placeholder="Value (e.g. 1.33x Oversizing)"
                              className="flex-1 bg-white border border-slate-300 rounded-lg px-3 py-1.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500 font-semibold"
                            />
                            <button
                              type="button"
                              onClick={() => handleRemoveQuickStat(idx)}
                              className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer transition-colors"
                              title="Delete spec"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                  {/* Comparison Matrix Table */}
                  <div className="border border-slate-200 rounded-2xl p-6 bg-white space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                          <Table className="w-4 h-4 text-blue-500" />
                          <span>Comparison Matrix Table</span>
                        </h4>
                        <p className="text-[11px] text-slate-500">Tiered comparison columns for technical hardware evaluations</p>
                      </div>

                      <button
                        type="button"
                        onClick={handleAddMatrixRow}
                        className="bg-blue-50 hover:bg-blue-100/80 text-blue-800 font-bold px-3 py-1.5 rounded-xl text-xs flex items-center gap-1.5 border border-blue-200/60 cursor-pointer transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add Row</span>
                      </button>
                    </div>

                    {/* Column Headers Config */}
                    <div className="p-3 bg-slate-100 rounded-xl space-y-2">
                      <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">
                        Table Column Headers (4 Columns)
                      </span>
                      <div className="grid grid-cols-4 gap-2">
                        {knowledgeFormData.matrixHeaders.map((header, idx) => (
                          <input
                            key={idx}
                            type="text"
                            value={header}
                            onChange={(e) => handleUpdateMatrixHeader(idx, e.target.value)}
                            placeholder={`Col ${idx + 1}`}
                            className="bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 font-bold focus:outline-none focus:border-amber-500"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Matrix Rows */}
                    <div className="space-y-2.5">
                      {knowledgeFormData.matrixRows.length === 0 ? (
                        <div className="p-4 bg-slate-50 rounded-xl text-center text-xs text-slate-400">
                          No matrix rows configured. Click &quot;Add Row&quot; to build comparison data.
                        </div>
                      ) : (
                        knowledgeFormData.matrixRows.map((row, idx) => (
                          <div key={idx} className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-xl border border-slate-200/70">
                            <input
                              type="text"
                              value={row.feature}
                              onChange={(e) => handleUpdateMatrixRow(idx, 'feature', e.target.value)}
                              placeholder="Feature (e.g. Cell Type)"
                              className="w-1/4 bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 font-bold focus:outline-none focus:border-amber-500"
                            />
                            <input
                              type="text"
                              value={row.col1}
                              onChange={(e) => handleUpdateMatrixRow(idx, 'col1', e.target.value)}
                              placeholder="Col 1 Value"
                              className="w-1/4 bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 focus:outline-none focus:border-amber-500"
                            />
                            <input
                              type="text"
                              value={row.col2}
                              onChange={(e) => handleUpdateMatrixRow(idx, 'col2', e.target.value)}
                              placeholder="Col 2 Value"
                              className="w-1/4 bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 focus:outline-none focus:border-amber-500"
                            />
                            <input
                              type="text"
                              value={row.col3}
                              onChange={(e) => handleUpdateMatrixRow(idx, 'col3', e.target.value)}
                              placeholder="Col 3 Value"
                              className="w-1/4 bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 focus:outline-none focus:border-amber-500"
                            />
                            <button
                              type="button"
                              onClick={() => handleRemoveMatrixRow(idx)}
                              className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer transition-colors"
                              title="Delete row"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                  {/* Frequently Asked Questions */}
                  <div className="border border-slate-200 rounded-2xl p-6 bg-white space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                          <HelpCircle className="w-4 h-4 text-emerald-500" />
                          <span>Frequently Asked Technical Questions (FAQs)</span>
                        </h4>
                        <p className="text-[11px] text-slate-500">Rendered in interactive accordions on the live guide</p>
                      </div>

                      <button
                        type="button"
                        onClick={handleAddFaq}
                        className="bg-emerald-50 hover:bg-emerald-100/80 text-emerald-800 font-bold px-3 py-1.5 rounded-xl text-xs flex items-center gap-1.5 border border-emerald-200/60 cursor-pointer transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add FAQ</span>
                      </button>
                    </div>

                    <div className="space-y-3">
                      {knowledgeFormData.faqs.length === 0 ? (
                        <div className="p-4 bg-slate-50 rounded-xl text-center text-xs text-slate-400">
                          No FAQs added yet. Click &quot;Add FAQ&quot; to include common questions and answers.
                        </div>
                      ) : (
                        knowledgeFormData.faqs.map((faq, idx) => (
                          <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200/70 space-y-2">
                            <div className="flex items-center justify-between gap-2">
                              <input
                                type="text"
                                value={faq.question}
                                onChange={(e) => handleUpdateFaq(idx, 'question', e.target.value)}
                                placeholder="Question (e.g. What is the optimal roof tilt?)"
                                className="flex-1 bg-white border border-slate-300 rounded-lg px-3 py-1.5 text-xs text-slate-900 font-bold focus:outline-none focus:border-amber-500"
                              />
                              <button
                                type="button"
                                onClick={() => handleRemoveFaq(idx)}
                                className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer transition-colors shrink-0"
                                title="Delete FAQ"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            <textarea
                              rows={2}
                              value={faq.answer}
                              onChange={(e) => handleUpdateFaq(idx, 'answer', e.target.value)}
                              placeholder="Answer explanation..."
                              className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-xs text-slate-800 focus:outline-none focus:border-amber-500"
                            />
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: META TAGS */}
              {knowledgeModalTab === 'meta' && (
                <div className="border border-slate-200 rounded-2xl p-6 bg-white space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">Meta Title</label>
                    <input
                      type="text"
                      value={knowledgeFormData.metaTitle}
                      onChange={(e) => setKnowledgeFormData({ ...knowledgeFormData, metaTitle: e.target.value })}
                      placeholder="Solar Engineering Blueprint | Sunny Solar Knowledge Hub"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">Canonical URL</label>
                    <input
                      type="text"
                      value={knowledgeFormData.canonicalUrl}
                      onChange={(e) => setKnowledgeFormData({ ...knowledgeFormData, canonicalUrl: e.target.value })}
                      placeholder="https://sunnysolar.com.au/learn/knowledge-hub/..."
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">Keywords</label>
                    <input
                      type="text"
                      value={knowledgeFormData.keywords}
                      onChange={(e) => setKnowledgeFormData({ ...knowledgeFormData, keywords: e.target.value })}
                      placeholder="solar blueprint, inverter sizing, engineering specs, battery matrix"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">Meta Description</label>
                    <textarea
                      rows={3}
                      value={knowledgeFormData.metaDescription}
                      onChange={(e) => setKnowledgeFormData({ ...knowledgeFormData, metaDescription: e.target.value })}
                      placeholder="Search engine meta description snippet for technical guide..."
                      className="w-full bg-white border border-slate-300 rounded-xl p-3 text-sm text-slate-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">Schema Markup (JSON-LD)</label>
                    <textarea
                      rows={3}
                      value={knowledgeFormData.schema}
                      onChange={(e) => setKnowledgeFormData({ ...knowledgeFormData, schema: e.target.value })}
                      placeholder='{ "@context": "https://schema.org", "@type": "TechArticle", ... }'
                      className="w-full bg-white border border-slate-300 rounded-xl p-3 text-sm text-slate-900 font-mono focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>
              )}

              {/* Published Toggle */}
              <div className="flex items-center gap-2.5 px-2">
                <input
                  type="checkbox"
                  id="modalKnowledgeIsPublished"
                  checked={knowledgeFormData.isPublished}
                  onChange={(e) => setKnowledgeFormData({ ...knowledgeFormData, isPublished: e.target.checked })}
                  className="w-4 h-4 text-orange-500 rounded border-slate-300 focus:ring-orange-400 cursor-pointer"
                />
                <label htmlFor="modalKnowledgeIsPublished" className="text-xs font-bold text-slate-800 cursor-pointer">
                  Publish immediately on live Knowledge Hub (/learn/knowledge-hub)
                </label>
              </div>

              {/* Modal Footer Actions */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsKnowledgeModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 font-bold text-xs transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={knowledgeFormLoading}
                  className="bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold px-6 py-2.5 rounded-xl shadow-md shadow-orange-500/20 disabled:opacity-50 cursor-pointer text-xs flex items-center gap-2 transition-all"
                >
                  {knowledgeFormLoading && (
                    <div className="w-3.5 h-3.5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  )}
                  <span>{editingKnowledge ? 'Update Knowledge Guide' : 'Add Knowledge Guide'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
