// In-memory view deduplication cache
// Tracks `${ip}_${type}_${slug}` with a 30-minute cooldown window
const recentViews = new Map();

/**
 * Determines whether a view count should be incremented.
 * Prevents double-counting from React StrictMode, rapid refreshes, and admin previews.
 * 
 * @param {import('express').Request} req
 * @param {string} type - 'blog' or 'knowledge'
 * @param {string} slug
 * @returns {boolean}
 */
export const shouldTrackView = (req, type, slug) => {
  // 1. Never increment if previewing from admin panel or explicitly instructed not to track
  if (
    req.query.preview === 'true' ||
    req.query.noTrack === 'true' ||
    req.headers['x-preview-mode'] === 'true'
  ) {
    return false;
  }

  // 2. Identify client by IP
  const clientIp =
    req.headers['x-forwarded-for']?.split(',')[0].trim() ||
    req.socket?.remoteAddress ||
    req.ip ||
    'unknown';

  const key = `${clientIp}_${type}_${slug.toLowerCase()}`;
  const now = Date.now();
  const lastViewTime = recentViews.get(key);

  // 3. Debounce window: 60 seconds (60000 ms)
  // Prevents React StrictMode double mounts (< 100ms), rapid refreshes, and re-renders
  if (lastViewTime && now - lastViewTime < 60 * 1000) {
    return false;
  }

  recentViews.set(key, now);

  // Clean up old entries periodically to prevent memory leaks
  if (recentViews.size > 5000) {
    for (const [k, timestamp] of recentViews.entries()) {
      if (now - timestamp > 60 * 1000) {
        recentViews.delete(k);
      }
    }
  }

  return true;
};
