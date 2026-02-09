import Link from 'next/link';
import { zodiacSigns } from '@/data/zodiac';
import { generateDailyHoroscope } from '@/lib/horoscope-generator';
import AdSlot from '@/components/AdSlot';

export default function HomePage() {
  const today = new Date();

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gold-400 via-mystical-400 to-cosmic-400 bg-clip-text text-transparent">
          Welcome to AstroDaily
        </h1>
        <p className="text-xl text-cosmic-200 max-w-3xl mx-auto mb-8">
          Discover your destiny through the stars. Get free daily horoscopes, compatibility insights, birth chart calculations, and explore the mystical world of astrology.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/compatibility"
            className="px-8 py-3 bg-gold-500 hover:bg-gold-600 text-cosmic-950 font-semibold rounded-lg transition-colors"
          >
            Check Compatibility
          </Link>
          <Link
            href="/birth-chart"
            className="px-8 py-3 bg-mystical-600 hover:bg-mystical-700 text-white font-semibold rounded-lg transition-colors"
          >
            Calculate Birth Chart
          </Link>
        </div>
      </section>

      {/* Zodiac Wheel Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gold-400">
          Choose Your Zodiac Sign
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {zodiacSigns.map((sign) => (
            <Link
              key={sign.id}
              href={`/zodiac/${sign.id}`}
              className="group bg-cosmic-800/50 hover:bg-cosmic-700/50 border border-cosmic-600 hover:border-gold-500 rounded-lg p-6 text-center transition-all transform hover:scale-105"
            >
              <div className="text-4xl mb-2">{sign.symbol}</div>
              <div className="text-lg font-semibold text-cosmic-100 group-hover:text-gold-400 transition-colors">
                {sign.name}
              </div>
              <div className="text-xs text-cosmic-400 mt-1">{sign.dateRange}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Ad Slot */}
      <AdSlot slot="homepage-1" className="my-12" />

      {/* Daily Horoscope Previews */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gold-400">
          Today&#39;s Horoscopes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {zodiacSigns.slice(0, 6).map((sign) => {
            const horoscope = generateDailyHoroscope(sign.id, today);
            const preview = horoscope.split('.')[0] + '.';

            return (
              <div
                key={sign.id}
                className="bg-cosmic-800/30 border border-cosmic-700 rounded-lg p-6 hover:border-gold-500 transition-colors"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-3xl">{sign.symbol}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gold-400">{sign.name}</h3>
                    <p className="text-xs text-cosmic-400">{sign.dateRange}</p>
                  </div>
                </div>
                <p className="text-cosmic-200 text-sm mb-4">{preview}</p>
                <Link
                  href={`/zodiac/${sign.id}`}
                  className="text-gold-400 hover:text-gold-300 text-sm font-medium"
                >
                  Read full horoscope →
                </Link>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-8">
          <p className="text-cosmic-300 text-sm">
            Scroll down to see horoscopes for all 12 zodiac signs, or click on your sign above.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <Link
          href="/compatibility"
          className="bg-gradient-to-br from-mystical-800 to-cosmic-800 border border-mystical-600 rounded-lg p-8 hover:border-gold-500 transition-all transform hover:scale-105"
        >
          <div className="text-4xl mb-4">💕</div>
          <h3 className="text-2xl font-bold text-gold-400 mb-2">Compatibility</h3>
          <p className="text-cosmic-200 text-sm">
            Discover how well you match with other zodiac signs in love, friendship, and work.
          </p>
        </Link>

        <Link
          href="/birth-chart"
          className="bg-gradient-to-br from-cosmic-800 to-mystical-800 border border-cosmic-600 rounded-lg p-8 hover:border-gold-500 transition-all transform hover:scale-105"
        >
          <div className="text-4xl mb-4">🌟</div>
          <h3 className="text-2xl font-bold text-gold-400 mb-2">Birth Chart</h3>
          <p className="text-cosmic-200 text-sm">
            Calculate your sun, moon, and rising signs with our free birth chart calculator.
          </p>
        </Link>

        <Link
          href="/numerology"
          className="bg-gradient-to-br from-mystical-800 to-cosmic-800 border border-mystical-600 rounded-lg p-8 hover:border-gold-500 transition-all transform hover:scale-105"
        >
          <div className="text-4xl mb-4">🔢</div>
          <h3 className="text-2xl font-bold text-gold-400 mb-2">Numerology</h3>
          <p className="text-cosmic-200 text-sm">
            Find your life path number and discover what it reveals about your destiny.
          </p>
        </Link>

        <Link
          href="/tarot"
          className="bg-gradient-to-br from-cosmic-800 to-mystical-800 border border-cosmic-600 rounded-lg p-8 hover:border-gold-500 transition-all transform hover:scale-105"
        >
          <div className="text-4xl mb-4">🃏</div>
          <h3 className="text-2xl font-bold text-gold-400 mb-2">Tarot Guide</h3>
          <p className="text-cosmic-200 text-sm">
            Explore the meanings of all 78 tarot cards and draw your daily card.
          </p>
        </Link>

        <Link
          href="/crystals"
          className="bg-gradient-to-br from-mystical-800 to-cosmic-800 border border-mystical-600 rounded-lg p-8 hover:border-gold-500 transition-all transform hover:scale-105"
        >
          <div className="text-4xl mb-4">💎</div>
          <h3 className="text-2xl font-bold text-gold-400 mb-2">Crystal Guide</h3>
          <p className="text-cosmic-200 text-sm">
            Learn about healing crystals, their properties, and zodiac associations.
          </p>
        </Link>

        <Link
          href="/chinese-zodiac"
          className="bg-gradient-to-br from-cosmic-800 to-mystical-800 border border-cosmic-600 rounded-lg p-8 hover:border-gold-500 transition-all transform hover:scale-105"
        >
          <div className="text-4xl mb-4">🐉</div>
          <h3 className="text-2xl font-bold text-gold-400 mb-2">Chinese Zodiac</h3>
          <p className="text-cosmic-200 text-sm">
            Discover your Chinese zodiac animal and its unique personality traits.
          </p>
        </Link>
      </section>

      {/* FAQ Section */}
      <section className="bg-cosmic-800/30 border border-cosmic-700 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gold-400">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          <div>
            <h3 className="text-lg font-semibold text-cosmic-100 mb-2">
              How accurate are daily horoscopes?
            </h3>
            <p className="text-cosmic-300 text-sm">
              Daily horoscopes are based on general astrological principles and provide guidance for your zodiac sign. While they can offer valuable insights, remember that astrology is for entertainment and self-reflection purposes.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-cosmic-100 mb-2">
              What is a birth chart?
            </h3>
            <p className="text-cosmic-300 text-sm">
              A birth chart, also called a natal chart, is a snapshot of the sky at the exact moment and location of your birth. It reveals your sun sign, moon sign, rising sign, and the positions of all planets, providing deep insights into your personality and life path.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-cosmic-100 mb-2">
              How do I find my zodiac sign?
            </h3>
            <p className="text-cosmic-300 text-sm">
              Your zodiac sign is determined by your birth date. Simply find the date range that includes your birthday in our zodiac sign grid above to discover your sun sign.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-cosmic-100 mb-2">
              What is zodiac compatibility?
            </h3>
            <p className="text-cosmic-300 text-sm">
              Zodiac compatibility examines how well two signs work together in relationships. It considers the elements, qualities, and characteristics of each sign to determine potential strengths and challenges in love, friendship, and partnership.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
