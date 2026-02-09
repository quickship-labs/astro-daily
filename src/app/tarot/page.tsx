import Link from 'next/link';
import { tarotCards, getDailyTarotCard } from '@/data/tarot';
import AdSlot from '@/components/AdSlot';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Tarot Card Meanings - Complete Guide to All 78 Cards',
  description: 'Explore complete tarot card meanings for all 78 cards including Major and Minor Arcana. Get your daily tarot card reading and learn upright and reversed meanings.',
  path: '/tarot',
  keywords: ['tarot cards', 'tarot meanings', 'daily tarot', 'major arcana', 'minor arcana', 'tarot guide', 'free tarot reading'],
});

export default function TarotPage() {
  const today = new Date();
  const dailyCard = getDailyTarotCard(today);

  const majorArcana = tarotCards.filter(card => card.arcana === 'Major');
  const minorArcana = tarotCards.filter(card => card.arcana === 'Minor');

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-sm text-cosmic-400 mb-6">
        <Link href="/" className="hover:text-gold-400">Home</Link>
        {' / '}
        <span className="text-gold-400">Tarot</span>
      </div>

      <div className="text-center mb-12">
        <div className="text-6xl mb-4">🃏</div>
        <h1 className="text-5xl font-bold mb-4 text-gold-400">
          Tarot Card Meanings Guide
        </h1>
        <p className="text-xl text-cosmic-200 max-w-3xl mx-auto">
          Explore the mystical world of tarot with our complete guide to all 78 cards.
        </p>
      </div>

      {/* Daily Card */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="bg-gradient-to-br from-mystical-800/30 to-cosmic-800/30 border border-mystical-600 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gold-400">Today&#39;s Card</h2>
          <div className="text-6xl mb-4">🃏</div>
          <h3 className="text-2xl font-bold text-cosmic-100 mb-4">{dailyCard.name}</h3>
          <p className="text-cosmic-200 mb-4">{dailyCard.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="bg-cosmic-800/50 rounded-lg p-4">
              <div className="text-gold-400 font-semibold mb-2">Upright Meaning</div>
              <p className="text-sm text-cosmic-300">{dailyCard.uprightMeaning}</p>
            </div>
            <div className="bg-cosmic-800/50 rounded-lg p-4">
              <div className="text-mystical-400 font-semibold mb-2">Reversed Meaning</div>
              <p className="text-sm text-cosmic-300">{dailyCard.reversedMeaning}</p>
            </div>
          </div>
        </div>
      </div>

      <AdSlot slot="tarot-1" className="mb-12" />

      {/* Major Arcana */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gold-400">Major Arcana (22 cards)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {majorArcana.map((card) => (
            <div
              key={card.id}
              className="bg-cosmic-800/30 border border-cosmic-700 rounded-lg p-6 hover:border-gold-500 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gold-400">{card.name}</h3>
                {card.number !== undefined && (
                  <span className="text-cosmic-400 text-sm">{card.number}</span>
                )}
              </div>
              <p className="text-sm text-cosmic-300 mb-4">{card.description}</p>
              <div className="space-y-2">
                <div>
                  <div className="text-xs text-gold-400 font-semibold mb-1">Upright</div>
                  <p className="text-xs text-cosmic-200">{card.uprightMeaning}</p>
                </div>
                <div>
                  <div className="text-xs text-mystical-400 font-semibold mb-1">Reversed</div>
                  <p className="text-xs text-cosmic-200">{card.reversedMeaning}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Minor Arcana */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-gold-400">Minor Arcana</h2>
        <p className="text-cosmic-200 mb-6">
          The Minor Arcana consists of 56 cards divided into four suits: Wands, Cups, Swords, and Pentacles.
          Each suit contains 14 cards (Ace through King).
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {minorArcana.map((card) => (
            <div
              key={card.id}
              className="bg-cosmic-800/30 border border-cosmic-700 rounded-lg p-6 hover:border-gold-500 transition-colors"
            >
              <h3 className="text-xl font-bold text-gold-400 mb-2">{card.name}</h3>
              <p className="text-sm text-cosmic-400 mb-3">{card.suit}</p>
              <p className="text-sm text-cosmic-300 mb-4">{card.description}</p>
              <div className="space-y-2">
                <div>
                  <div className="text-xs text-gold-400 font-semibold mb-1">Upright</div>
                  <p className="text-xs text-cosmic-200">{card.uprightMeaning}</p>
                </div>
                <div>
                  <div className="text-xs text-mystical-400 font-semibold mb-1">Reversed</div>
                  <p className="text-xs text-cosmic-200">{card.reversedMeaning}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
