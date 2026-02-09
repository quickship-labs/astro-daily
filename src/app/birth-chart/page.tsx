'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getZodiacSignByDate } from '@/data/zodiac';
import AdSlot from '@/components/AdSlot';

export default function BirthChartPage() {
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [result, setResult] = useState<{
    sunSign: string;
    moonSign: string;
    risingSign: string;
    sunDescription: string;
    moonDescription: string;
    risingDescription: string;
  } | null>(null);

  const handleCalculate = () => {
    if (!birthDate) return;

    const date = new Date(birthDate);
    const month = date.getMonth() + 1;
    const day = date.getDate();

    // Get sun sign
    const sunSign = getZodiacSignByDate(month, day);

    if (!sunSign) return;

    // Simple moon sign calculation (based on day of month)
    const moonSignIndex = (day - 1 + month) % 12;
    const moonSignIds = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'];
    const moonSignId = moonSignIds[moonSignIndex];

    // Simple rising sign calculation (based on birth time hour)
    let risingSignId = sunSign.id;
    if (birthTime) {
      const hour = parseInt(birthTime.split(':')[0]);
      const risingIndex = (hour / 2) % 12;
      risingSignId = moonSignIds[Math.floor(risingIndex)];
    }

    setResult({
      sunSign: sunSign.name,
      moonSign: moonSignId.charAt(0).toUpperCase() + moonSignId.slice(1),
      risingSign: risingSignId.charAt(0).toUpperCase() + risingSignId.slice(1),
      sunDescription: 'Your sun sign represents your core identity, ego, and conscious self. It defines your basic personality and how you express yourself.',
      moonDescription: 'Your moon sign represents your emotional self, inner feelings, and subconscious. It reveals how you process emotions and what makes you feel secure.',
      risingDescription: 'Your rising sign (ascendant) represents how others perceive you and the mask you wear in social situations. It influences your outward behavior and first impressions.',
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumbs */}
      <div className="text-sm text-cosmic-400 mb-6">
        <Link href="/" className="hover:text-gold-400">Home</Link>
        {' / '}
        <span className="text-gold-400">Birth Chart</span>
      </div>

      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">🌟</div>
        <h1 className="text-5xl font-bold mb-4 text-gold-400">
          Free Birth Chart Calculator
        </h1>
        <p className="text-xl text-cosmic-200 max-w-3xl mx-auto">
          Discover your sun sign, moon sign, and rising sign. Your birth chart reveals the cosmic blueprint of your personality.
        </p>
      </div>

      {/* Calculator */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="bg-cosmic-800/30 border border-cosmic-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-gold-400">
            Enter Your Birth Information
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-cosmic-200 mb-2 font-semibold">
                Birth Date <span className="text-gold-400">*</span>
              </label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full px-4 py-3 bg-cosmic-700 border border-cosmic-600 rounded-lg text-cosmic-100 focus:border-gold-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-cosmic-200 mb-2 font-semibold">
                Birth Time <span className="text-cosmic-400 text-sm font-normal">(Optional - for Rising Sign)</span>
              </label>
              <input
                type="time"
                value={birthTime}
                onChange={(e) => setBirthTime(e.target.value)}
                className="w-full px-4 py-3 bg-cosmic-700 border border-cosmic-600 rounded-lg text-cosmic-100 focus:border-gold-500 focus:outline-none"
              />
              <p className="text-xs text-cosmic-400 mt-1">
                Enter your exact birth time for a more accurate rising sign calculation
              </p>
            </div>

            <button
              onClick={handleCalculate}
              disabled={!birthDate}
              className="w-full px-8 py-4 bg-gold-500 hover:bg-gold-600 disabled:bg-cosmic-600 disabled:cursor-not-allowed text-cosmic-950 font-bold rounded-lg transition-colors text-lg"
            >
              Calculate Birth Chart
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      {result && (
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-mystical-800/30 to-cosmic-800/30 border border-mystical-600 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-gold-400">
              Your Birth Chart
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Sun Sign */}
              <div className="bg-cosmic-800/50 border border-cosmic-600 rounded-lg p-6 text-center">
                <div className="text-5xl mb-3">☀️</div>
                <h3 className="text-xl font-bold text-gold-400 mb-2">Sun Sign</h3>
                <div className="text-3xl font-bold text-cosmic-100 mb-3">
                  {result.sunSign}
                </div>
                <p className="text-sm text-cosmic-300">{result.sunDescription}</p>
                <Link
                  href={`/zodiac/${result.sunSign.toLowerCase()}`}
                  className="inline-block mt-4 text-gold-400 hover:text-gold-300 text-sm"
                >
                  Learn more →
                </Link>
              </div>

              {/* Moon Sign */}
              <div className="bg-cosmic-800/50 border border-cosmic-600 rounded-lg p-6 text-center">
                <div className="text-5xl mb-3">🌙</div>
                <h3 className="text-xl font-bold text-mystical-400 mb-2">Moon Sign</h3>
                <div className="text-3xl font-bold text-cosmic-100 mb-3">
                  {result.moonSign}
                </div>
                <p className="text-sm text-cosmic-300">{result.moonDescription}</p>
                <Link
                  href={`/zodiac/${result.moonSign.toLowerCase()}`}
                  className="inline-block mt-4 text-gold-400 hover:text-gold-300 text-sm"
                >
                  Learn more →
                </Link>
              </div>

              {/* Rising Sign */}
              <div className="bg-cosmic-800/50 border border-cosmic-600 rounded-lg p-6 text-center">
                <div className="text-5xl mb-3">⬆️</div>
                <h3 className="text-xl font-bold text-cosmic-400 mb-2">Rising Sign</h3>
                <div className="text-3xl font-bold text-cosmic-100 mb-3">
                  {result.risingSign}
                </div>
                <p className="text-sm text-cosmic-300">{result.risingDescription}</p>
                <Link
                  href={`/zodiac/${result.risingSign.toLowerCase()}`}
                  className="inline-block mt-4 text-gold-400 hover:text-gold-300 text-sm"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </div>

          {/* Interpretation */}
          <div className="bg-cosmic-800/30 border border-cosmic-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-gold-400">Understanding Your Chart</h3>
            <div className="space-y-4 text-cosmic-200">
              <p>
                Your birth chart is a unique cosmic fingerprint that reveals the positions of celestial bodies at the exact moment of your birth. The three most important components are:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-gold-400 mr-2">☀️</span>
                  <span><strong>Sun Sign ({result.sunSign}):</strong> Your core self and conscious identity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mystical-400 mr-2">🌙</span>
                  <span><strong>Moon Sign ({result.moonSign}):</strong> Your emotional nature and inner world</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cosmic-400 mr-2">⬆️</span>
                  <span><strong>Rising Sign ({result.risingSign}):</strong> Your outward personality and how others see you</span>
                </li>
              </ul>
              <p>
                Together, these three signs create the foundation of your astrological profile. While your sun sign is what most people know, your moon and rising signs add depth and nuance to your personality.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Ad Slot */}
      <AdSlot slot="birth-chart-1" className="mb-12" />

      {/* FAQ */}
      <section className="max-w-3xl mx-auto bg-cosmic-800/30 border border-cosmic-700 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-gold-400">About Birth Charts</h2>
        <div className="space-y-6 text-sm text-cosmic-200">
          <div>
            <h3 className="font-semibold text-cosmic-100 mb-2">What is a birth chart?</h3>
            <p>A birth chart, or natal chart, is a snapshot of the sky at the exact moment and location you were born. It shows the positions of the sun, moon, and planets in relation to the zodiac signs and houses.</p>
          </div>
          <div>
            <h3 className="font-semibold text-cosmic-100 mb-2">Why do I need my birth time?</h3>
            <p>Your birth time is crucial for calculating your rising sign (ascendant) and the houses in your chart. The rising sign changes approximately every two hours, so even being off by an hour can affect your reading.</p>
          </div>
          <div>
            <h3 className="font-semibold text-cosmic-100 mb-2">What if I don&#39;t know my exact birth time?</h3>
            <p>If you don&#39;t know your birth time, you can still discover your sun and moon signs. However, your rising sign calculation will be less accurate. Check your birth certificate or ask family members for the most accurate time.</p>
          </div>
          <div>
            <h3 className="font-semibold text-cosmic-100 mb-2">Are sun, moon, and rising signs the only important placements?</h3>
            <p>While these three are the most influential, a complete birth chart also includes the positions of Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune, and Pluto, each affecting different areas of your life.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
