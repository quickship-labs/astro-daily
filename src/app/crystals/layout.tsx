import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Crystal Healing Guide - Properties & Zodiac Associations',
  description: 'Explore healing crystals and their properties, meanings, chakra connections, and zodiac associations. Complete guide to 30+ crystals and gemstones.',
  path: '/crystals',
  keywords: [
    'healing crystals',
    'crystal properties',
    'crystal meanings',
    'crystal guide',
    'chakra crystals',
    'zodiac crystals',
    'gemstones',
    'crystal healing',
  ],
});

export default function CrystalsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
