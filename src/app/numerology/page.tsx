'use client';

import { useState } from 'react';
import Link from 'next/link';
import { calculateLifePathNumber, calculateExpressionNumber, getNumerologyNumber } from '@/data/numerology';
import AdSlot from '@/components/AdSlot';

export default function NumerologyPage() {
  const [birthDate, setBirthDate] = useState('');
  const [fullName, setFullName] = useState('');
  const [lifePathResult, setLifePathResult] = useState<ReturnType<typeof getNumerologyNumber> | null>(null);
  const [expressionResult, setExpressionResult] = useState<ReturnType<typeof getNumerologyNumber> | null>(null);

  const handleCalculate = () => {
    if (birthDate) {
      const date = new Date(birthDate);
      const lifePathNum = calculateLifePathNumber(date);
      setLifePathResult(getNumerologyNumber(lifePathNum));
    }

    if (fullName) {
      const expressionNum = calculateExpressionNumber(fullName);
      setExpressionResult(getNumerologyNumber(expressionNum));
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumbs */}
      <div className="text-sm text-cosmic-400 mb-6">
        <Link href="/" className="hover:text-gold-400">Home</Link>
        {' / '}
        <span className="text-gold-400">Numerology</span>
      </div>

      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">🔢</div>
        <h1 className="text-5xl font-bold mb-4 text-gold-400">
          Free Numerology Calculator
        </h1>
        <p className="text-xl text-cosmic-200 max-w-3xl mx-auto">
          Discover your life path number and expression number. Uncover the hidden meanings in your birth date and name.
        </p>
      </div>

      {/* Calculator */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="bg-cosmic-800/30 border border-cosmic-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-gold-400">
            Calculate Your Numbers
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-cosmic-200 mb-2 font-semibold">
                Birth Date <span className="text-cosmic-400 text-sm font-normal">(for Life Path Number)</span>
              </label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full px-4 py-3 bg-cosmic-700 border border-cosmic-600 rounded-lg text-cosmic-100 focus:border-gold-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-cosmic-200 mb-2 font-semibold">
                Full Name <span className="text-cosmic-400 text-sm font-normal">(for Expression Number)</span>
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full birth name"
                className="w-full px-4 py-3 bg-cosmic-700 border border-cosmic-600 rounded-lg text-cosmic-100 focus:border-gold-500 focus:outline-none"
              />
              <p className="text-xs text-cosmic-400 mt-1">
                Use the name that appears on your birth certificate
              </p>
            </div>

            <button
              onClick={handleCalculate}
              disabled={!birthDate && !fullName}
              className="w-full px-8 py-4 bg-gold-500 hover:bg-gold-600 disabled:bg-cosmic-600 disabled:cursor-not-allowed text-cosmic-950 font-bold rounded-lg transition-colors text-lg"
            >
              Calculate My Numbers
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      {(lifePathResult || expressionResult) && (
        <div className="max-w-4xl mx-auto mb-12 space-y-8">
          {/* Life Path Number */}
          {lifePathResult && (
            <div className="bg-gradient-to-br from-mystical-800/30 to-cosmic-800/30 border border-mystical-600 rounded-lg p-8">
              <div className="text-center mb-6">
                <div className="text-7xl font-bold text-gold-400 mb-2">
                  {lifePathResult.number}
                </div>
                <h2 className="text-3xl font-bold text-cosmic-100 mb-2">
                  Life Path Number: {lifePathResult.name}
                </h2>
                <p className="text-cosmic-300">Your core purpose and destiny</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gold-400 mb-3">Meaning</h3>
                  <p className="text-cosmic-200 leading-relaxed">{lifePathResult.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gold-400 mb-3">Key Traits</h3>
                    <div className="flex flex-wrap gap-2">
                      {lifePathResult.traits.map((trait, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-cosmic-700/50 border border-cosmic-600 rounded-full text-sm text-cosmic-200"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gold-400 mb-3">Strengths</h3>
                    <ul className="space-y-1">
                      {lifePathResult.strengths.map((strength, index) => (
                        <li key={index} className="text-cosmic-200 text-sm flex items-start">
                          <span className="text-gold-400 mr-2">✓</span>
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-mystical-400 mb-3">Challenges</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {lifePathResult.weaknesses.map((weakness, index) => (
                      <li key={index} className="text-cosmic-200 text-sm flex items-start">
                        <span className="text-mystical-400 mr-2">•</span>
                        {weakness}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gold-400 mb-3">Ideal Careers</h3>
                  <div className="flex flex-wrap gap-2">
                    {lifePathResult.careers.map((career, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gold-500/20 border border-gold-500/40 rounded-full text-sm text-cosmic-100"
                      >
                        {career}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Expression Number */}
          {expressionResult && (
            <div className="bg-gradient-to-br from-cosmic-800/30 to-mystical-800/30 border border-cosmic-600 rounded-lg p-8">
              <div className="text-center mb-6">
                <div className="text-7xl font-bold text-mystical-400 mb-2">
                  {expressionResult.number}
                </div>
                <h2 className="text-3xl font-bold text-cosmic-100 mb-2">
                  Expression Number: {expressionResult.name}
                </h2>
                <p className="text-cosmic-300">Your natural talents and abilities</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-mystical-400 mb-3">Meaning</h3>
                  <p className="text-cosmic-200 leading-relaxed">{expressionResult.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-mystical-400 mb-3">Natural Talents</h3>
                    <ul className="space-y-1">
                      {expressionResult.strengths.map((strength, index) => (
                        <li key={index} className="text-cosmic-200 text-sm flex items-start">
                          <span className="text-mystical-400 mr-2">✓</span>
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-mystical-400 mb-3">Compatible Numbers</h3>
                    <div className="flex flex-wrap gap-2">
                      {expressionResult.compatibility.map((num) => (
                        <span
                          key={num}
                          className="w-10 h-10 flex items-center justify-center bg-mystical-700/50 border border-mystical-500 rounded-full text-cosmic-100 font-bold"
                        >
                          {num}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Ad Slot */}
      <AdSlot slot="numerology-1" className="mb-12" />

      {/* Number Meanings Reference */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gold-400">
          Numerology Numbers 1-9
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => {
            const numData = getNumerologyNumber(num);
            return numData ? (
              <div
                key={num}
                className="bg-cosmic-800/30 border border-cosmic-700 rounded-lg p-6 hover:border-gold-500 transition-colors"
              >
                <div className="text-4xl font-bold text-gold-400 mb-2">{num}</div>
                <h3 className="text-lg font-semibold text-cosmic-100 mb-2">{numData.name}</h3>
                <p className="text-sm text-cosmic-300 line-clamp-3">{numData.description}</p>
              </div>
            ) : null;
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto bg-cosmic-800/30 border border-cosmic-700 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-gold-400">About Numerology</h2>
        <div className="space-y-6 text-sm text-cosmic-200">
          <div>
            <h3 className="font-semibold text-cosmic-100 mb-2">What is numerology?</h3>
            <p>Numerology is the ancient practice of assigning meaning to numbers and their influence on our lives. It reveals insights about personality, life purpose, and destiny through calculations based on your birth date and name.</p>
          </div>
          <div>
            <h3 className="font-semibold text-cosmic-100 mb-2">What is a Life Path Number?</h3>
            <p>Your Life Path Number is the most important number in numerology. Calculated from your birth date, it reveals your life&#39;s purpose, natural talents, and the path you&#39;re meant to follow.</p>
          </div>
          <div>
            <h3 className="font-semibold text-cosmic-100 mb-2">What is an Expression Number?</h3>
            <p>Also called the Destiny Number, it&#39;s calculated from your full birth name. It reveals your natural abilities, talents, and the goals you&#39;re meant to achieve in this lifetime.</p>
          </div>
          <div>
            <h3 className="font-semibold text-cosmic-100 mb-2">What are Master Numbers?</h3>
            <p>Master Numbers (11, 22, 33) are special numbers in numerology that carry heightened spiritual significance and greater potential. They&#39;re not reduced to single digits and indicate special life missions.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
