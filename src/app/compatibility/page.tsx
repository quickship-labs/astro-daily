'use client';

import { useState } from 'react';
import Link from 'next/link';
import { zodiacSigns } from '@/data/zodiac';
import { getCompatibility } from '@/data/compatibility';
import AdSlot from '@/components/AdSlot';

export default function CompatibilityPage() {
  const [sign1, setSign1] = useState('');
  const [sign2, setSign2] = useState('');
  const [result, setResult] = useState<ReturnType<typeof getCompatibility> | null>(null);

  const handleCheck = () => {
    if (sign1 && sign2) {
      const compatibility = getCompatibility(sign1, sign2);
      setResult(compatibility || null);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumbs */}
      <div className="text-sm text-cosmic-400 mb-6">
        <Link href="/" className="hover:text-gold-400">Home</Link>
        {' / '}
        <span className="text-gold-400">Compatibility</span>
      </div>

      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">💕</div>
        <h1 className="text-5xl font-bold mb-4 text-gold-400">
          Zodiac Compatibility Calculator
        </h1>
        <p className="text-xl text-cosmic-200 max-w-3xl mx-auto">
          Discover how well you match with other zodiac signs. Check your love, friendship, and work compatibility.
        </p>
      </div>

      {/* Calculator */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="bg-cosmic-800/30 border border-cosmic-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-gold-400">
            Select Two Signs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-cosmic-200 mb-2 font-semibold">First Sign</label>
              <select
                value={sign1}
                onChange={(e) => setSign1(e.target.value)}
                className="w-full px-4 py-3 bg-cosmic-700 border border-cosmic-600 rounded-lg text-cosmic-100 focus:border-gold-500 focus:outline-none"
              >
                <option value="">Choose a sign...</option>
                {zodiacSigns.map((sign) => (
                  <option key={sign.id} value={sign.id}>
                    {sign.symbol} {sign.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-cosmic-200 mb-2 font-semibold">Second Sign</label>
              <select
                value={sign2}
                onChange={(e) => setSign2(e.target.value)}
                className="w-full px-4 py-3 bg-cosmic-700 border border-cosmic-600 rounded-lg text-cosmic-100 focus:border-gold-500 focus:outline-none"
              >
                <option value="">Choose a sign...</option>
                {zodiacSigns.map((sign) => (
                  <option key={sign.id} value={sign.id}>
                    {sign.symbol} {sign.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={handleCheck}
            disabled={!sign1 || !sign2}
            className="w-full px-8 py-4 bg-gold-500 hover:bg-gold-600 disabled:bg-cosmic-600 disabled:cursor-not-allowed text-cosmic-950 font-bold rounded-lg transition-colors text-lg"
          >
            Check Compatibility
          </button>
        </div>
      </div>

      {/* Results */}
      {result && (
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-mystical-800/30 to-cosmic-800/30 border border-mystical-600 rounded-lg p-8">
            <div className="text-center mb-8">
              <div className="flex justify-center items-center space-x-4 mb-4">
                <span className="text-6xl">
                  {zodiacSigns.find(s => s.id === result.sign1)?.symbol}
                </span>
                <span className="text-4xl text-gold-400">💕</span>
                <span className="text-6xl">
                  {zodiacSigns.find(s => s.id === result.sign2)?.symbol}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gold-400 mb-2 capitalize">
                {result.sign1} & {result.sign2}
              </h2>
              <div className="text-5xl font-bold text-cosmic-100 mb-2">
                {result.overallScore}%
              </div>
              <div className="text-cosmic-300">Overall Compatibility</div>
            </div>

            {/* Compatibility Scores */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-mystical-400">{result.loveScore}%</div>
                <div className="text-cosmic-300 text-sm">Love</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-mystical-400">{result.friendshipScore}%</div>
                <div className="text-cosmic-300 text-sm">Friendship</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-mystical-400">{result.communicationScore}%</div>
                <div className="text-cosmic-300 text-sm">Communication</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-mystical-400">{result.trustScore}%</div>
                <div className="text-cosmic-300 text-sm">Trust</div>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gold-400 mb-3">Compatibility Summary</h3>
              <p className="text-cosmic-200 leading-relaxed">{result.summary}</p>
            </div>

            {/* Strengths */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gold-400 mb-3">Relationship Strengths</h3>
              <ul className="space-y-2">
                {result.strengths.map((strength, index) => (
                  <li key={index} className="text-cosmic-200 flex items-start">
                    <span className="text-gold-400 mr-2">✓</span>
                    {strength}
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div>
              <h3 className="text-xl font-bold text-mystical-400 mb-3">Potential Challenges</h3>
              <ul className="space-y-2">
                {result.challenges.map((challenge, index) => (
                  <li key={index} className="text-cosmic-200 flex items-start">
                    <span className="text-mystical-400 mr-2">•</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 text-center">
              <Link
                href={`/compatibility/${result.sign1}-${result.sign2}`}
                className="inline-block px-8 py-3 bg-gold-500 hover:bg-gold-600 text-cosmic-950 font-semibold rounded-lg transition-colors"
              >
                View Detailed Compatibility Page
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Ad Slot */}
      <AdSlot slot="compatibility-1" className="mb-12" />

      {/* Popular Compatibility Matches */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gold-400">
          Popular Compatibility Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            ['aries', 'leo'],
            ['taurus', 'virgo'],
            ['gemini', 'libra'],
            ['cancer', 'pisces'],
            ['leo', 'sagittarius'],
            ['virgo', 'capricorn'],
          ].map(([s1, s2]) => {
            const sign1Data = zodiacSigns.find(s => s.id === s1);
            const sign2Data = zodiacSigns.find(s => s.id === s2);
            const compat = getCompatibility(s1, s2);

            return (
              <Link
                key={`${s1}-${s2}`}
                href={`/compatibility/${s1}-${s2}`}
                className="flex items-center justify-between p-4 bg-cosmic-800/30 hover:bg-cosmic-700/30 border border-cosmic-700 hover:border-gold-500 rounded-lg transition-all"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{sign1Data?.symbol}</span>
                  <span className="text-gold-400">&</span>
                  <span className="text-3xl">{sign2Data?.symbol}</span>
                  <span className="text-cosmic-100 font-semibold capitalize">
                    {s1} & {s2}
                  </span>
                </div>
                {compat && (
                  <span className="text-gold-400 font-bold text-lg">
                    {compat.overallScore}%
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto mt-16 bg-cosmic-800/30 border border-cosmic-700 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-gold-400">About Zodiac Compatibility</h2>
        <div className="space-y-6 text-sm text-cosmic-200">
          <div>
            <h3 className="font-semibold text-cosmic-100 mb-2">How is compatibility calculated?</h3>
            <p>Zodiac compatibility is based on the elements, qualities, and characteristics of each sign. We analyze how these factors interact to determine compatibility in love, friendship, communication, and trust.</p>
          </div>
          <div>
            <h3 className="font-semibold text-cosmic-100 mb-2">Can incompatible signs make it work?</h3>
            <p>Absolutely! While some signs naturally mesh better than others, any relationship can succeed with understanding, communication, and effort. Compatibility readings provide insights, not destinies.</p>
          </div>
          <div>
            <h3 className="font-semibold text-cosmic-100 mb-2">What makes signs compatible?</h3>
            <p>Signs of the same element (Fire, Earth, Air, Water) often share similar values and communication styles. Complementary elements can also create balance and growth in relationships.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
