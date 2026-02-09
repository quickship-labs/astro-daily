import { notFound } from 'next/navigation';
import Link from 'next/link';
import { zodiacSigns } from '@/data/zodiac';
import { getCompatibility, popularCompatibilityPairs } from '@/data/compatibility';
import AdSlot from '@/components/AdSlot';

interface PageProps {
  params: Promise<{ pair: string }>;
}

export async function generateStaticParams() {
  return popularCompatibilityPairs.map(([sign1, sign2]) => ({
    pair: `${sign1}-${sign2}`,
  }));
}

export default async function CompatibilityPairPage({ params }: PageProps) {
  const { pair } = await params;
  const [sign1Id, sign2Id] = pair.split('-');

  const compatibility = getCompatibility(sign1Id, sign2Id);
  const sign1 = zodiacSigns.find(s => s.id === sign1Id);
  const sign2 = zodiacSigns.find(s => s.id === sign2Id);

  if (!compatibility || !sign1 || !sign2) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumbs */}
      <div className="text-sm text-cosmic-400 mb-6">
        <Link href="/" className="hover:text-gold-400">Home</Link>
        {' / '}
        <Link href="/compatibility" className="hover:text-gold-400">Compatibility</Link>
        {' / '}
        <span className="text-gold-400 capitalize">{sign1.name} & {sign2.name}</span>
      </div>

      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center space-x-4 mb-4">
          <span className="text-8xl">{sign1.symbol}</span>
          <span className="text-5xl text-gold-400">💕</span>
          <span className="text-8xl">{sign2.symbol}</span>
        </div>
        <h1 className="text-5xl font-bold mb-4 text-gold-400">
          {sign1.name} and {sign2.name} Compatibility
        </h1>
        <p className="text-xl text-cosmic-200 max-w-3xl mx-auto">
          Love, Friendship, and Relationship Compatibility Analysis
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Overall Compatibility Score */}
        <div className="bg-gradient-to-br from-mystical-800/30 to-cosmic-800/30 border border-mystical-600 rounded-lg p-8 text-center mb-8">
          <div className="text-7xl font-bold text-gold-400 mb-2">
            {compatibility.overallScore}%
          </div>
          <div className="text-xl text-cosmic-200">Overall Compatibility</div>
        </div>

        {/* Detailed Scores */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-cosmic-800/30 border border-cosmic-700 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-mystical-400 mb-2">
              {compatibility.loveScore}%
            </div>
            <div className="text-cosmic-300">Love & Romance</div>
          </div>
          <div className="bg-cosmic-800/30 border border-cosmic-700 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-mystical-400 mb-2">
              {compatibility.friendshipScore}%
            </div>
            <div className="text-cosmic-300">Friendship</div>
          </div>
          <div className="bg-cosmic-800/30 border border-cosmic-700 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-mystical-400 mb-2">
              {compatibility.communicationScore}%
            </div>
            <div className="text-cosmic-300">Communication</div>
          </div>
          <div className="bg-cosmic-800/30 border border-cosmic-700 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-mystical-400 mb-2">
              {compatibility.trustScore}%
            </div>
            <div className="text-cosmic-300">Trust</div>
          </div>
        </div>

        {/* Summary */}
        <section className="bg-cosmic-800/30 border border-cosmic-700 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gold-400">Relationship Overview</h2>
          <p className="text-cosmic-200 leading-relaxed text-lg">{compatibility.summary}</p>
        </section>

        {/* Strengths */}
        <section className="bg-cosmic-800/30 border border-cosmic-700 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gold-400">Relationship Strengths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {compatibility.strengths.map((strength, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-gold-500/10 border border-gold-500/30 rounded-lg"
              >
                <span className="text-gold-400 text-xl flex-shrink-0">✓</span>
                <span className="text-cosmic-200">{strength}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section className="bg-cosmic-800/30 border border-cosmic-700 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-mystical-400">Potential Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {compatibility.challenges.map((challenge, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-mystical-500/10 border border-mystical-500/30 rounded-lg"
              >
                <span className="text-mystical-400 text-xl flex-shrink-0">•</span>
                <span className="text-cosmic-200">{challenge}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Ad Slot */}
        <AdSlot slot="compatibility-pair-1" className="mb-8" />

        {/* Sign Details Comparison */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-cosmic-800/30 border border-cosmic-700 rounded-lg p-6">
            <div className="text-center mb-4">
              <div className="text-5xl mb-2">{sign1.symbol}</div>
              <h3 className="text-2xl font-bold text-gold-400">{sign1.name}</h3>
              <p className="text-sm text-cosmic-400">{sign1.dateRange}</p>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-cosmic-400">Element:</span>
                <span className="text-cosmic-100 ml-2 font-semibold">{sign1.element}</span>
              </div>
              <div>
                <span className="text-cosmic-400">Quality:</span>
                <span className="text-cosmic-100 ml-2 font-semibold">{sign1.quality}</span>
              </div>
              <div>
                <span className="text-cosmic-400">Ruling Planet:</span>
                <span className="text-cosmic-100 ml-2 font-semibold">{sign1.rulingPlanet}</span>
              </div>
            </div>
            <Link
              href={`/zodiac/${sign1.id}`}
              className="block mt-4 text-center text-gold-400 hover:text-gold-300 text-sm"
            >
              Learn more about {sign1.name} →
            </Link>
          </div>

          <div className="bg-cosmic-800/30 border border-cosmic-700 rounded-lg p-6">
            <div className="text-center mb-4">
              <div className="text-5xl mb-2">{sign2.symbol}</div>
              <h3 className="text-2xl font-bold text-gold-400">{sign2.name}</h3>
              <p className="text-sm text-cosmic-400">{sign2.dateRange}</p>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-cosmic-400">Element:</span>
                <span className="text-cosmic-100 ml-2 font-semibold">{sign2.element}</span>
              </div>
              <div>
                <span className="text-cosmic-400">Quality:</span>
                <span className="text-cosmic-100 ml-2 font-semibold">{sign2.quality}</span>
              </div>
              <div>
                <span className="text-cosmic-400">Ruling Planet:</span>
                <span className="text-cosmic-100 ml-2 font-semibold">{sign2.rulingPlanet}</span>
              </div>
            </div>
            <Link
              href={`/zodiac/${sign2.id}`}
              className="block mt-4 text-center text-gold-400 hover:text-gold-300 text-sm"
            >
              Learn more about {sign2.name} →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-cosmic-800/50 to-mystical-800/50 border border-cosmic-600 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gold-400 mb-4">
            Want to Explore More Compatibility Matches?
          </h3>
          <Link
            href="/compatibility"
            className="inline-block px-8 py-3 bg-gold-500 hover:bg-gold-600 text-cosmic-950 font-semibold rounded-lg transition-colors"
          >
            Try Compatibility Calculator
          </Link>
        </div>
      </div>
    </div>
  );
}
