import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Chinese Zodiac - Find Your Animal Sign',
  description: 'Discover your Chinese zodiac animal based on your birth year. Learn about personality traits, compatibility, and lucky elements for all 12 Chinese zodiac signs.',
  path: '/chinese-zodiac',
  keywords: [
    'Chinese zodiac',
    'Chinese astrology',
    'zodiac animals',
    'Chinese horoscope',
    'year of the dragon',
    'Chinese zodiac signs',
    'zodiac compatibility',
  ],
});

export default function ChineseZodiacLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
