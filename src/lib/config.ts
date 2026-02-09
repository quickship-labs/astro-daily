export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'AstroDaily',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://astrodaily.vercel.app',
  description: 'Free daily horoscopes, zodiac compatibility, birth charts, numerology, tarot readings, and crystal guides. Your complete astrology resource.',
  adsensePublisherId: process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || '',
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
};
