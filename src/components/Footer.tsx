import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cosmic-950 border-t border-cosmic-700 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-gold-400 font-semibold mb-4 flex items-center space-x-2">
              <span className="text-2xl">✨</span>
              <span>{siteConfig.name}</span>
            </h3>
            <p className="text-cosmic-300 text-sm">
              Your complete astrology resource for daily horoscopes, compatibility, birth charts, and more.
            </p>
          </div>

          {/* Zodiac Signs */}
          <div>
            <h4 className="text-gold-400 font-semibold mb-4">Zodiac Signs</h4>
            <div className="grid grid-cols-2 gap-2">
              {['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo'].map(sign => (
                <Link
                  key={sign}
                  href={`/zodiac/${sign}`}
                  className="text-cosmic-300 hover:text-gold-400 text-sm capitalize transition-colors"
                >
                  {sign}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-start-3">
            <h4 className="text-transparent mb-4">Continue</h4>
            <div className="grid grid-cols-2 gap-2">
              {['libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'].map(sign => (
                <Link
                  key={sign}
                  href={`/zodiac/${sign}`}
                  className="text-cosmic-300 hover:text-gold-400 text-sm capitalize transition-colors"
                >
                  {sign}
                </Link>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-gold-400 font-semibold mb-4">Tools & Guides</h4>
            <div className="space-y-2">
              <Link href="/compatibility" className="block text-cosmic-300 hover:text-gold-400 text-sm transition-colors">
                Compatibility
              </Link>
              <Link href="/birth-chart" className="block text-cosmic-300 hover:text-gold-400 text-sm transition-colors">
                Birth Chart
              </Link>
              <Link href="/chinese-zodiac" className="block text-cosmic-300 hover:text-gold-400 text-sm transition-colors">
                Chinese Zodiac
              </Link>
              <Link href="/numerology" className="block text-cosmic-300 hover:text-gold-400 text-sm transition-colors">
                Numerology
              </Link>
              <Link href="/tarot" className="block text-cosmic-300 hover:text-gold-400 text-sm transition-colors">
                Tarot Guide
              </Link>
              <Link href="/crystals" className="block text-cosmic-300 hover:text-gold-400 text-sm transition-colors">
                Crystal Guide
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-cosmic-800 mt-8 pt-8 text-center text-cosmic-400 text-sm">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p className="mt-2 text-xs text-cosmic-500">
            For entertainment purposes only. Not intended as professional advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
