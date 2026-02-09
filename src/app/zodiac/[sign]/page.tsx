import { notFound } from 'next/navigation';
import Link from 'next/link';
import { zodiacSigns, getZodiacSign } from '@/data/zodiac';
import { getSignCompatibilities } from '@/data/compatibility';
import { generateDailyHoroscope, getLuckyDay, getLuckyColor, getDailyLuckyNumbers } from '@/lib/horoscope-generator';
import AdSlot from '@/components/AdSlot';

interface PageProps {
  params: Promise<{ sign: string }>;
}

export async function generateStaticParams() {
  return zodiacSigns.map((sign) => ({
    sign: sign.id,
  }));
}

export default async function ZodiacSignPage({ params }: PageProps) {
  const { sign: signId } = await params;
  const sign = getZodiacSign(signId);

  if (!sign) {
    notFound();
  }

  const today = new Date();
  const horoscope = generateDailyHoroscope(sign.id, today);
  const luckyDay = getLuckyDay(sign.id, today);
  const luckyColor = getLuckyColor(sign.id, today);
  const dailyLuckyNumbers = getDailyLuckyNumbers(sign.id, today);
  const compatibilities = getSignCompatibilities(sign.id);

  // Get top 3 compatible signs
  const topCompatible = compatibilities
    .sort((a, b) => b.overallScore - a.overallScore)
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumbs */}
      <div className="text-sm text-cosmic-400 mb-6">
        <Link href="/" className="hover:text-gold-400">Home</Link>
        {' / '}
        <span>Zodiac Signs</span>
        {' / '}
        <span className="text-gold-400">{sign.name}</span>
      </div>

      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-8xl mb-4">{sign.symbol}</div>
        <h1 className="text-5xl font-bold mb-4 text-gold-400">{sign.name}</h1>
        <p className="text-xl text-cosmic-200 mb-2">{sign.dateRange}</p>
        <div className="flex justify-center gap-6 text-sm text-cosmic-300">
          <span>Element: <strong className="text-cosmic-100">{sign.element}</strong></span>
          <span>Quality: <strong className="text-cosmic-100">{sign.quality}</strong></span>
          <span>Ruling Planet: <strong className="text-cosmic-100">{sign.rulingPlanet}</strong></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Daily Horoscope */}
          <section className="bg-cosmic-800/30 border border-cosmic-700 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4 text-gold-400">
              Daily Horoscope - {today.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </h2>
            <p className="text-cosmic-200 leading-relaxed text-lg">{horoscope}</p>
          </section>

          {/* Today&#39;s Lucky Elements */}
          <section className="bg-gradient-to-br from-mystical-800/30 to-cosmic-800/30 border border-mystical-600 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gold-400">Today&#39;s Lucky Elements</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <div className="text-cosmic-400 text-sm mb-1">Lucky Day</div>
                <div className="text-xl font-semibold text-cosmic-100">{luckyDay}</div>
              </div>
              <div>
                <div className="text-cosmic-400 text-sm mb-1">Lucky Color</div>
                <div className="text-xl font-semibold text-cosmic-100">{luckyColor}</div>
              </div>
              <div>
                <div className="text-cosmic-400 text-sm mb-1">Lucky Numbers</div>
                <div className="text-xl font-semibold text-cosmic-100">
                  {dailyLuckyNumbers.join(', ')}
                </div>
              </div>
            </div>
          </section>

          {/* Sign Overview */}
          <section className="bg-cosmic-800/30 border border-cosmic-700 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4 text-gold-400">About {sign.name}</h2>
            <p className="text-cosmic-200 leading-relaxed mb-6">{sign.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gold-400 mb-3">Strengths</h3>
                <ul className="space-y-2">
                  {sign.strengths.map((strength, index) => (
                    <li key={index} className="text-cosmic-200 flex items-start">
                      <span className="text-gold-400 mr-2">✓</span>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-mystical-400 mb-3">Weaknesses</h3>
                <ul className="space-y-2">
                  {sign.weaknesses.map((weakness, index) => (
                    <li key={index} className="text-cosmic-200 flex items-start">
                      <span className="text-mystical-400 mr-2">•</span>
                      {weakness}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Traits */}
          <section className="bg-cosmic-800/30 border border-cosmic-700 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gold-400">{sign.name} Personality Traits</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-cosmic-100 mb-3">Key Traits</h3>
                <div className="flex flex-wrap gap-2">
                  {sign.traits.map((trait, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-mystical-700/30 border border-mystical-600 rounded-full text-sm text-cosmic-200"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cosmic-100 mb-3">Likes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {sign.likes.map((like, index) => (
                    <div key={index} className="text-cosmic-200 flex items-start">
                      <span className="text-gold-400 mr-2">♥</span>
                      {like}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cosmic-100 mb-3">Dislikes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {sign.dislikes.map((dislike, index) => (
                    <div key={index} className="text-cosmic-200 flex items-start">
                      <span className="text-mystical-400 mr-2">✗</span>
                      {dislike}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* AdSlot */}
          <AdSlot slot="zodiac-sign-1" />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Sign Info Card */}
          <div className="bg-gradient-to-br from-cosmic-800/50 to-mystical-800/50 border border-cosmic-600 rounded-lg p-6 sticky top-20">
            <h3 className="text-xl font-bold mb-4 text-gold-400">{sign.name} Quick Facts</h3>

            <div className="space-y-4 text-sm">
              <div>
                <div className="text-cosmic-400">Symbol</div>
                <div className="text-2xl">{sign.symbol}</div>
              </div>

              <div>
                <div className="text-cosmic-400">Element</div>
                <div className="text-cosmic-100 font-semibold">{sign.element}</div>
              </div>

              <div>
                <div className="text-cosmic-400">Quality</div>
                <div className="text-cosmic-100 font-semibold">{sign.quality}</div>
              </div>

              <div>
                <div className="text-cosmic-400">Ruling Planet</div>
                <div className="text-cosmic-100 font-semibold">{sign.rulingPlanet}</div>
              </div>

              <div>
                <div className="text-cosmic-400">Colors</div>
                <div className="flex gap-2 mt-1">
                  {sign.colors.map((color, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-cosmic-700 rounded-full text-xs text-cosmic-200"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-cosmic-400">Lucky Numbers</div>
                <div className="text-cosmic-100 font-semibold">
                  {sign.luckyNumbers.join(', ')}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-cosmic-700">
              <Link
                href="/birth-chart"
                className="block w-full text-center px-4 py-3 bg-gold-500 hover:bg-gold-600 text-cosmic-950 font-semibold rounded-lg transition-colors"
              >
                Calculate Birth Chart
              </Link>
            </div>
          </div>

          {/* Compatibility Quick View */}
          <div className="bg-cosmic-800/30 border border-cosmic-700 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-gold-400">Best Matches</h3>
            <div className="space-y-3">
              {topCompatible.map((compat) => {
                const otherSign = compat.sign1 === sign.id ? compat.sign2 : compat.sign1;
                const otherSignData = zodiacSigns.find(s => s.id === otherSign);

                return (
                  <Link
                    key={otherSign}
                    href={`/compatibility/${sign.id}-${otherSign}`}
                    className="block p-3 bg-cosmic-700/30 hover:bg-cosmic-700/50 border border-cosmic-600 rounded-lg transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{otherSignData?.symbol}</span>
                        <span className="text-cosmic-100 font-semibold capitalize">{otherSign}</span>
                      </div>
                      <div className="text-gold-400 font-bold">{compat.overallScore}%</div>
                    </div>
                  </Link>
                );
              })}
            </div>
            <Link
              href={`/compatibility?sign1=${sign.id}`}
              className="block mt-4 text-center text-gold-400 hover:text-gold-300 text-sm"
            >
              Check all compatibility matches →
            </Link>
          </div>

          {/* Ad Slot */}
          <AdSlot slot="zodiac-sidebar-1" format="vertical" />
        </div>
      </div>
    </div>
  );
}
