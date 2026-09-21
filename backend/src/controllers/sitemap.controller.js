import Blog from '../models/Blog.js';
import Knowledge from '../models/Knowledge.js';

const BASE_URL = process.env.CLIENT_URL?.split(',')[0]?.replace(/\/$/, '') || 'https://sunnysolar.com.au';

// Static base routes of Sunny Solar platform
const STATIC_ROUTES = [
  // Core
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/sitemap', priority: '0.85', changefreq: 'weekly' },
  
  // Solar
  { path: '/solar', priority: '0.9', changefreq: 'weekly' },
  { path: '/solar/systems', priority: '0.8', changefreq: 'weekly' },
  { path: '/solar/installation', priority: '0.8', changefreq: 'monthly' },
  { path: '/solar/upgrades', priority: '0.7', changefreq: 'monthly' },

  // Batteries
  { path: '/batteries', priority: '0.9', changefreq: 'weekly' },
  { path: '/batteries/solar-batteries', priority: '0.8', changefreq: 'weekly' },
  { path: '/batteries/solar-plus-battery', priority: '0.8', changefreq: 'weekly' },
  { path: '/batteries/battery-backup', priority: '0.7', changefreq: 'monthly' },

  // Existing Solar
  { path: '/existing-solar', priority: '0.8', changefreq: 'weekly' },
  { path: '/existing-solar/health-check', priority: '0.8', changefreq: 'weekly' },
  { path: '/existing-solar/savings', priority: '0.7', changefreq: 'monthly' },
  { path: '/existing-solar/upgrade', priority: '0.7', changefreq: 'monthly' },
  { path: '/existing-solar/add-battery', priority: '0.7', changefreq: 'monthly' },

  // Calculators
  { path: '/calculators', priority: '0.85', changefreq: 'weekly' },
  { path: '/calculators/solar-savings', priority: '0.9', changefreq: 'weekly' },
  { path: '/calculators/system-size', priority: '0.8', changefreq: 'monthly' },
  { path: '/calculators/battery-size', priority: '0.8', changefreq: 'monthly' },
  { path: '/calculators/battery-savings', priority: '0.7', changefreq: 'monthly' },
  { path: '/calculators/payback', priority: '0.7', changefreq: 'monthly' },
  { path: '/calculators/quote-comparison', priority: '0.8', changefreq: 'monthly' },
  { path: '/calculators/savings-so-far', priority: '0.7', changefreq: 'monthly' },
  { path: '/calculators/is-solar-right-for-me', priority: '0.8', changefreq: 'monthly' },

  // Learning Hub
  { path: '/learn/knowledge-hub', priority: '0.85', changefreq: 'weekly' },
  { path: '/learn/blog', priority: '0.8', changefreq: 'weekly' },

  // Projects
  { path: '/projects', priority: '0.8', changefreq: 'weekly' },
  { path: '/projects/coastal-contemporary-mermaid-beach', priority: '0.75', changefreq: 'monthly' },
  { path: '/projects/broadbeach-waters-luxury-solar-battery', priority: '0.75', changefreq: 'monthly' },
  { path: '/projects/brisbane-family-home-paddington', priority: '0.75', changefreq: 'monthly' },
  { path: '/projects/tamborine-mountain-acreage-solar', priority: '0.75', changefreq: 'monthly' },
  { path: '/projects/coomera-industrial-warehouse-solar', priority: '0.75', changefreq: 'monthly' },
  { path: '/projects/commercial-medical-centre-robina', priority: '0.75', changefreq: 'monthly' },

  // Service Areas
  { path: '/service-areas', priority: '0.85', changefreq: 'weekly' },
  { path: '/service-areas/gold-coast', priority: '0.8', changefreq: 'weekly' },
  { path: '/service-areas/brisbane', priority: '0.8', changefreq: 'weekly' },
  { path: '/service-areas/sunshine-coast', priority: '0.8', changefreq: 'weekly' },
  { path: '/service-areas/ipswich-western-suburbs', priority: '0.7', changefreq: 'weekly' },
  { path: '/service-areas/northern-nsw', priority: '0.7', changefreq: 'weekly' },

  // Resources
  { path: '/resources', priority: '0.8', changefreq: 'weekly' },
  { path: '/resources/buying-checklist', priority: '0.75', changefreq: 'monthly' },
  { path: '/resources/buyer-guide', priority: '0.75', changefreq: 'monthly' },
  { path: '/resources/battery-decision-guide', priority: '0.75', changefreq: 'monthly' },
  { path: '/resources/quote-review', priority: '0.75', changefreq: 'monthly' },
  { path: '/resources/electricity-bill-review', priority: '0.75', changefreq: 'monthly' },

  // Company & Contact
  { path: '/about', priority: '0.7', changefreq: 'monthly' },
  { path: '/about/trent', priority: '0.8', changefreq: 'monthly' },
  { path: '/reviews', priority: '0.8', changefreq: 'weekly' },
  { path: '/faq', priority: '0.8', changefreq: 'weekly' },
  { path: '/get-started/free-assessment', priority: '0.95', changefreq: 'daily' },
  { path: '/contact', priority: '0.85', changefreq: 'weekly' },

  // Legal
  { path: '/legal/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/legal/terms-conditions', priority: '0.3', changefreq: 'yearly' },
  { path: '/legal/terms-of-trade', priority: '0.3', changefreq: 'yearly' }
];

export const getSitemapXml = async (req, res) => {
  try {
    const today = new Date().toISOString().split('T')[0];

    // Fetch published blogs and knowledge guides
    const [blogs, knowledge] = await Promise.all([
      Blog.find({ isPublished: true, isDeleted: { $ne: true } })
        .select('slug updatedAt createdAt')
        .lean()
        .catch(() => []),
      Knowledge.find({ isPublished: true, isDeleted: { $ne: true } })
        .select('slug updatedAt createdAt')
        .lean()
        .catch(() => [])
    ]);

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // 1. Static Routes
    for (const route of STATIC_ROUTES) {
      xml += `  <url>\n`;
      xml += `    <loc>${BASE_URL}${route.path}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;
      xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
      xml += `    <priority>${route.priority}</priority>\n`;
      xml += `  </url>\n`;
    }

    // 2. Published Blog Articles
    for (const blog of blogs) {
      const lastmod = (blog.updatedAt || blog.createdAt ? new Date(blog.updatedAt || blog.createdAt).toISOString() : new Date().toISOString()).split('T')[0];
      xml += `  <url>\n`;
      xml += `    <loc>${BASE_URL}/learn/blog/${blog.slug}</loc>\n`;
      xml += `    <lastmod>${lastmod}</lastmod>\n`;
      xml += `    <changefreq>weekly</changefreq>\n`;
      xml += `    <priority>0.8</priority>\n`;
      xml += `  </url>\n`;
    }

    // 3. Published Knowledge Hub Guides
    for (const item of knowledge) {
      const lastmod = (item.updatedAt || item.createdAt ? new Date(item.updatedAt || item.createdAt).toISOString() : new Date().toISOString()).split('T')[0];
      xml += `  <url>\n`;
      xml += `    <loc>${BASE_URL}/learn/knowledge-hub/${item.slug}</loc>\n`;
      xml += `    <lastmod>${lastmod}</lastmod>\n`;
      xml += `    <changefreq>weekly</changefreq>\n`;
      xml += `    <priority>0.8</priority>\n`;
      xml += `  </url>\n`;
    }

    xml += `</urlset>`;

    res.header('Content-Type', 'application/xml');
    res.header('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour
    return res.status(200).send(xml);
  } catch (error) {
    console.error('Error generating dynamic sitemap:', error);
    return res.status(500).send('Error generating sitemap');
  }
};
