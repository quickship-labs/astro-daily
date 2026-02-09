import { Metadata } from 'next';
import { siteConfig } from './config';

interface PageMetadataParams {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

export function generatePageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataParams): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
