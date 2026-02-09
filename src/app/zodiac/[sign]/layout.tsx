import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getZodiacSign, zodiacSigns } from '@/data/zodiac';
import { generatePageMetadata } from '@/lib/seo';

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ sign: string }>;
}

export async function generateStaticParams() {
  return zodiacSigns.map((sign) => ({
    sign: sign.id,
  }));
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { sign: signId } = await params;
  const sign = getZodiacSign(signId);

  if (!sign) {
    return {};
  }

  return generatePageMetadata({
    title: `${sign.name} Daily Horoscope - Free ${sign.name} Astrology Today`,
    description: `Free daily horoscope for ${sign.name} (${sign.dateRange}). ${sign.description.substring(0, 120)}... Get your ${sign.name} horoscope, traits, compatibility, and more.`,
    path: `/zodiac/${signId}`,
    keywords: [
      `${sign.name} horoscope`,
      `${sign.name} daily horoscope`,
      `${sign.name} astrology`,
      `${sign.name} zodiac sign`,
      `${sign.name} traits`,
      `${sign.name} compatibility`,
      sign.element,
      sign.rulingPlanet,
    ],
  });
}

export default function ZodiacSignLayout({ children }: LayoutProps) {
  return children;
}
