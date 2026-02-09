import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Free Birth Chart Calculator - Sun, Moon & Rising Signs',
  description: 'Calculate your birth chart for free. Discover your sun sign, moon sign, and rising sign (ascendant). Get a complete natal chart analysis based on your birth date, time, and location.',
  path: '/birth-chart',
  keywords: [
    'birth chart calculator',
    'natal chart',
    'sun sign',
    'moon sign',
    'rising sign',
    'ascendant calculator',
    'astrology chart',
    'free birth chart',
  ],
});

export default function BirthChartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
