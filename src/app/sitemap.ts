import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/config';
import { zodiacSigns } from '@/data/zodiac';
import { popularCompatibilityPairs } from '@/data/compatibility';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Main pages
  const mainPages = [
    '',
    '/compatibility',
    '/birth-chart',
    '/numerology',
    '/tarot',
    '/crystals',
    '/chinese-zodiac',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: path === '' ? 1 : 0.9,
  }));

  // Zodiac sign pages
  const zodiacPages = zodiacSigns.map((sign) => ({
    url: `${baseUrl}/zodiac/${sign.id}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  // Compatibility pair pages
  const compatibilityPages = popularCompatibilityPairs.map(([sign1, sign2]) => ({
    url: `${baseUrl}/compatibility/${sign1}-${sign2}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...mainPages, ...zodiacPages, ...compatibilityPages];
}
