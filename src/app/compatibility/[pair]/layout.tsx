import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { zodiacSigns } from '@/data/zodiac';
import { getCompatibility, popularCompatibilityPairs } from '@/data/compatibility';
import { generatePageMetadata } from '@/lib/seo';

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ pair: string }>;
}

export async function generateStaticParams() {
  return popularCompatibilityPairs.map(([sign1, sign2]) => ({
    pair: `${sign1}-${sign2}`,
  }));
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { pair } = await params;
  const [sign1Id, sign2Id] = pair.split('-');

  const sign1 = zodiacSigns.find(s => s.id === sign1Id);
  const sign2 = zodiacSigns.find(s => s.id === sign2Id);
  const compatibility = getCompatibility(sign1Id, sign2Id);

  if (!sign1 || !sign2 || !compatibility) {
    return {};
  }

  return generatePageMetadata({
    title: `${sign1.name} and ${sign2.name} Compatibility - Love & Relationship`,
    description: `${sign1.name} and ${sign2.name} compatibility: ${compatibility.overallScore}% match. ${compatibility.summary.substring(0, 120)}... Discover love, friendship, and relationship insights.`,
    path: `/compatibility/${pair}`,
    keywords: [
      `${sign1.name} ${sign2.name} compatibility`,
      `${sign1.name} and ${sign2.name}`,
      `${sign1.name} ${sign2.name} love`,
      `${sign1.name} ${sign2.name} relationship`,
      'zodiac compatibility',
      'love compatibility',
    ],
  });
}

export default function CompatibilityPairLayout({ children }: LayoutProps) {
  return children;
}
