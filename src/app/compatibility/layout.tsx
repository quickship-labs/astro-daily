import { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: {
    default: 'Zodiac Compatibility Calculator - Love & Friendship',
    template: `%s | ${siteConfig.name}`,
  },
  description: 'Free zodiac compatibility calculator. Check your love, friendship, and work compatibility with any zodiac sign. Discover relationship strengths and challenges.',
  keywords: 'zodiac compatibility, compatibility calculator, love compatibility, friendship compatibility, relationship compatibility, astrology compatibility',
  alternates: {
    canonical: `${siteConfig.url}/compatibility`,
  },
  openGraph: {
    title: 'Zodiac Compatibility Calculator - Love & Friendship',
    description: 'Free zodiac compatibility calculator. Check your love, friendship, and work compatibility with any zodiac sign.',
    url: `${siteConfig.url}/compatibility`,
    siteName: siteConfig.name,
  },
};

export default function CompatibilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
