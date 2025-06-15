// Featured content utilities and types

// Priority threshold constants
export const PRIORITY_THRESHOLDS = {
  FEATURED: 8,      // Main featured content
  HIGHLIGHTED: 6,   // Secondary featured content  
  STANDARD: 3,      // Regular featured content
  MINIMUM: 1,
} as const;

// Expiry durations in milliseconds
export const EXPIRY_DURATIONS = {
  FEATURED: 14 * 24 * 60 * 60 * 1000, // 14 days
  HIGHLIGHTED: 30 * 24 * 60 * 60 * 1000, // 30 days
  STANDARD: 60 * 24 * 60 * 60 * 1000, // 60 days
} as const;

export interface FeaturedContentMeta {
  featured: boolean;
  featuredPriority?: number; // 8+=Featured, 6+=Highlighted, 3+=Standard
  featuredUntil?: Date; // Auto-expire featured status
}

// Content categories based on existing site structure
export const CONTENT_CATEGORIES = {
  news: ['Istraživanja', 'Događaji', 'Saradnja', 'Edukacija', 'Ekonomija', 'Obrazovanje'],
  publications: ['Demografia', 'Ekonomija', 'Obrazovanje', 'Kultura', 'Javna uprava'],
  events: ['Konferencija', 'Radionica', 'Tribina', 'Prezentacija', 'Okrugli sto']
} as const;

export function isFeaturedActive(meta: FeaturedContentMeta): boolean {
  if (!meta.featured) return false;
  if (!meta.featuredUntil) return true;
  return new Date() < new Date(meta.featuredUntil);
}

export function sortByFeaturedPriority<T extends { featuredPriority?: number }>(
  items: T[]
): T[] {
  return [...items].sort((a, b) => 
    (b.featuredPriority || 0) - (a.featuredPriority || 0)
  );
}

// Example usage with content
export interface Publication extends FeaturedContentMeta {
  id: string;
  title: string;
  description: string;
  authors: string[];
  publishedDate: Date;
  type: 'book' | 'report' | 'article';
  coverImage?: string;
  downloadUrl?: string;
  slug: string;
}

export interface NewsArticle extends FeaturedContentMeta {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedDate: Date;
  author: string;
  category: string;
  image?: string;
  slug: string;
  readTime: string;
}

// Featured content selection strategies
export function selectFeaturedContent<T extends FeaturedContentMeta>(
  items: T[],
  options: {
    maxItems?: number;
    includeExpired?: boolean;
    minPriority?: number;
  } = {}
): T[] {
  // Input validation
  if (!Array.isArray(items)) {
    throw new Error('Items must be an array');
  }

  const { maxItems = 5, includeExpired = false, minPriority = PRIORITY_THRESHOLDS.MINIMUM } = options;

  if (maxItems < 0 || minPriority < 0) {
    throw new Error('maxItems and minPriority must be non-negative');
  }

  const filtered = items.filter(item => {
    if (!item.featured) return false;
    if (!includeExpired && !isFeaturedActive(item)) return false;
    if ((item.featuredPriority || 0) < minPriority) return false;
    return true;
  });

  return sortByFeaturedPriority(filtered).slice(0, maxItems);
}

// Featured content presets for common scenarios
export const FEATURED_PRESETS = {
  featured: {
    featured: true,
    featuredPriority: PRIORITY_THRESHOLDS.FEATURED,
    featuredUntil: new Date(Date.now() + EXPIRY_DURATIONS.FEATURED),
  },
  highlighted: {
    featured: true,
    featuredPriority: PRIORITY_THRESHOLDS.HIGHLIGHTED,
    featuredUntil: new Date(Date.now() + EXPIRY_DURATIONS.HIGHLIGHTED),
  },
  standard: {
    featured: true,
    featuredPriority: PRIORITY_THRESHOLDS.STANDARD,
    featuredUntil: new Date(Date.now() + EXPIRY_DURATIONS.STANDARD),
  },
} as const;