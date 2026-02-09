import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Free Numerology Calculator - Life Path & Destiny Numbers',
  description: 'Calculate your life path number, expression number, and discover what they reveal about your personality and destiny. Free numerology reading based on your birth date and name.',
  path: '/numerology',
  keywords: [
    'numerology calculator',
    'life path number',
    'expression number',
    'destiny number',
    'numerology reading',
    'free numerology',
    'birth date numerology',
    'name numerology',
  ],
});

export default function NumerologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
