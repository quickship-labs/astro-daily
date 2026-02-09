'use client';

import { useState } from 'react';
import Link from 'next/link';
import { chineseZodiacSigns, getChineseZodiacByYear } from '@/data/chinese-zodiac';
import AdSlot from '@/components/AdSlot';

export default function ChineseZodiacPage() {
  const [birthYear, setBirthYear] = useState('');
  const [result, setResult] = useState<ReturnType<typeof getChineseZodiacByYear> | null>(null);

  const handleCalculate = () => {
    if (birthYear) {
      const year = parseInt(birthYear);
      const sign = getChineseZodiacByYear(year);
      setResult(sign);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-sm text-cosmic-400 mb-6">
        <Link href="/" className="hover:text-gold-400">Home</Link>
        {' / '}
        <span className="text-gold-400">Chinese Zodiac</span>
      </div>

      <div className="text-center mb-12">
        <div className="text-6xl mb-4">🐉</div>
        <h1 className="text-5xl font-bold mb-4 text-gold-400">
          Chinese Zodiac - Find Your Animal Sign
        </h1>
        <p className="text-xl text-cosmic-200 max-w-3xl mx-auto">
          Discover your Chinese zodiac animal based on your birth year. Learn about your personality traits and compatibility.
        </p>
      </div>

      {/* Calculator */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="bg-cosmic-800/30 border border-cosmic-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-gold-400">
            Find Your Chinese Zodiac Sign
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-cosmic-200 mb-2 font-semibold">Birth Year</label>
              <input
                type="number"
                value={birthYear}
                onChange={(e) => setBirthYear(e.target.value)}
                placeholder="Enter your birth year (e.g., 1990)"
                min="1900"
                max="2100"
                className="w-full px-4 py-3 bg-cosmic-700 border border-cosmic-600 rounded-lg text-cosmic-100 focus:border-gold-500 focus:outline-none"
              />
            </div>

            <button
              onClick={handleCalculate}
              disabled={!birthYear}
              className="w-full px-8 py-4 bg-gold-500 hover:bg-gold-600 disabled:bg-cosmic-600 disabled:cursor-not-allowed text-cosmic-950 font-bold rounded-lg transition-colors text-lg"
            >
              Find My Sign
            </button>
          </div>
        </div>
      </div>

      {/* Result */}
      {result && (
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-mystical-800/30 to-cosmic-800/30 border border-mystical-600 rounded-lg p-8">
            <div className="text-center mb-8">
              <div className="text-7xl mb-4">
                {result.id === 'rat' && '🐀'}
                {result.id === 'ox' && '🐂'}
                {result.id === 'tiger' && '🐅'}
                {result.id === 'rabbit' && '🐇'}
                {result.id === 'dragon' && '🐉'}
                {result.id === 'snake' && '🐍'}
                {result.id === 'horse' && '🐎'}
                {result.id === 'sheep' && '🐑'}
                {result.id === 'monkey' && '🐵'}
                {result.id === 'rooster' && '🐓'}
                {result.id === 'dog' && '🐕'}
                {result.id === 'pig' && '🐖'}
              </div>
              <h2 className="text-4xl font-bold text-gold-400 mb-2">Year of the {result.name}</h2>
              <div className="flex justify-center gap-4 text-sm text-cosmic-300 mb-4">
                <span>Element: <strong className="text-cosmic-100">{result.element}</strong></span>
                <span>Energy: <strong className="text-cosmic-100">{result.yinYang}</strong></span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gold-400 mb-3">Personality</h3>
                <p className="text-cosmic-200 leading-relaxed mb-4">{result.description}</p>
                <div className="flex flex-wrap gap-2">
                  {result.traits.map((trait, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-cosmic-700/50 border border-cosmic-600 rounded-full text-sm text-cosmic-200"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gold-400 mb-3">Strengths</h3>
                  <ul className="space-y-2">
                    {result.strengths.map((strength, index) => (
                      <li key={index} className="text-cosmic-200 flex items-start">
                        <span className="text-gold-400 mr-2">✓</span>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-mystical-400 mb-3">Weaknesses</h3>
                  <ul className="space-y-2">
                    {result.weaknesses.map((weakness, index) => (
                      <li key={index} className="text-cosmic-200 flex items-start">
                        <span className="text-mystical-400 mr-2">•</span>
                        {weakness}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-cosmic-800/50 rounded-lg p-4">
                  <div className="text-cosmic-400 text-sm mb-2">Lucky Numbers</div>
                  <div className="text-cosmic-100 font-semibold">
                    {result.luckyNumbers.join(', ')}
                  </div>
                </div>
                <div className="bg-cosmic-800/50 rounded-lg p-4">
                  <div className="text-cosmic-400 text-sm mb-2">Lucky Colors</div>
                  <div className="text-cosmic-100 font-semibold">
                    {result.luckyColors.join(', ')}
                  </div>
                </div>
                <div className="bg-cosmic-800/50 rounded-lg p-4">
                  <div className="text-cosmic-400 text-sm mb-2">Compatible With</div>
                  <div className="text-cosmic-100 font-semibold capitalize">
                    {result.compatibility.best.join(', ')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <AdSlot slot="chinese-zodiac-1" className="mb-12" />

      {/* All Signs */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8 text-gold-400">
          All 12 Chinese Zodiac Animals
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {chineseZodiacSigns.map((sign) => (
            <div
              key={sign.id}
              className="bg-cosmic-800/30 border border-cosmic-700 rounded-lg p-6 text-center hover:border-gold-500 transition-colors"
            >
              <div className="text-5xl mb-2">
                {sign.id === 'rat' && '🐀'}
                {sign.id === 'ox' && '🐂'}
                {sign.id === 'tiger' && '🐅'}
                {sign.id === 'rabbit' && '🐇'}
                {sign.id === 'dragon' && '🐉'}
                {sign.id === 'snake' && '🐍'}
                {sign.id === 'horse' && '🐎'}
                {sign.id === 'sheep' && '🐑'}
                {sign.id === 'monkey' && '🐵'}
                {sign.id === 'rooster' && '🐓'}
                {sign.id === 'dog' && '🐕'}
                {sign.id === 'pig' && '🐖'}
              </div>
              <div className="text-lg font-semibold text-cosmic-100">{sign.name}</div>
              <div className="text-xs text-cosmic-400 mt-1">{sign.element}</div>
              <div className="text-xs text-cosmic-500 mt-2">
                {sign.years.slice(-3).join(', ')}...
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
