'use client';

import { useState } from 'react';
import Link from 'next/link';
import { crystals, getCrystalsByZodiac } from '@/data/crystals';
import { zodiacSigns } from '@/data/zodiac';
import AdSlot from '@/components/AdSlot';

export default function CrystalsPage() {
  const [filterSign, setFilterSign] = useState<string>('');

  const displayedCrystals = filterSign
    ? getCrystalsByZodiac(filterSign)
    : crystals;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-sm text-cosmic-400 mb-6">
        <Link href="/" className="hover:text-gold-400">Home</Link>
        {' / '}
        <span className="text-gold-400">Crystals</span>
      </div>

      <div className="text-center mb-12">
        <div className="text-6xl mb-4">💎</div>
        <h1 className="text-5xl font-bold mb-4 text-gold-400">
          Crystal Healing Guide
        </h1>
        <p className="text-xl text-cosmic-200 max-w-3xl mx-auto">
          Discover the properties, meanings, and zodiac associations of healing crystals and gemstones.
        </p>
      </div>

      {/* Filter */}
      <div className="max-w-md mx-auto mb-12">
        <label className="block text-cosmic-200 mb-2 font-semibold text-center">
          Filter by Zodiac Sign
        </label>
        <select
          value={filterSign}
          onChange={(e) => setFilterSign(e.target.value)}
          className="w-full px-4 py-3 bg-cosmic-700 border border-cosmic-600 rounded-lg text-cosmic-100 focus:border-gold-500 focus:outline-none"
        >
          <option value="">All Crystals</option>
          {zodiacSigns.map((sign) => (
            <option key={sign.id} value={sign.id}>
              {sign.symbol} {sign.name}
            </option>
          ))}
        </select>
      </div>

      <AdSlot slot="crystals-1" className="mb-12" />

      {/* Crystals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCrystals.map((crystal) => (
          <div
            key={crystal.id}
            className="bg-cosmic-800/30 border border-cosmic-700 rounded-lg p-6 hover:border-gold-500 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-2xl font-bold text-gold-400">{crystal.name}</h3>
              <div className="text-2xl">💎</div>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-cosmic-300">{crystal.description}</p>

              <div>
                <div className="text-xs text-cosmic-400 font-semibold mb-2">Properties</div>
                <div className="flex flex-wrap gap-2">
                  {crystal.properties.map((prop, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-mystical-700/30 border border-mystical-600 rounded-full text-xs text-cosmic-200"
                    >
                      {prop}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-cosmic-400 text-xs mb-1">Chakra</div>
                  <div className="text-cosmic-100 font-semibold">{crystal.chakra}</div>
                </div>
                <div>
                  <div className="text-cosmic-400 text-xs mb-1">Element</div>
                  <div className="text-cosmic-100 font-semibold">{crystal.element}</div>
                </div>
                <div>
                  <div className="text-cosmic-400 text-xs mb-1">Color</div>
                  <div className="text-cosmic-100 font-semibold">{crystal.color}</div>
                </div>
                <div>
                  <div className="text-cosmic-400 text-xs mb-1">Zodiac</div>
                  <div className="text-cosmic-100 font-semibold capitalize">
                    {crystal.zodiacSigns.includes('all') ? 'All' : crystal.zodiacSigns.join(', ')}
                  </div>
                </div>
              </div>

              <div>
                <div className="text-xs text-cosmic-400 font-semibold mb-2">Uses</div>
                <ul className="space-y-1">
                  {crystal.uses.slice(0, 3).map((use, index) => (
                    <li key={index} className="text-xs text-cosmic-200 flex items-start">
                      <span className="text-gold-400 mr-2">•</span>
                      {use}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto mt-16 bg-cosmic-800/30 border border-cosmic-700 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-gold-400">About Crystal Healing</h2>
        <div className="space-y-6 text-sm text-cosmic-200">
          <div>
            <h3 className="font-semibold text-cosmic-100 mb-2">How do healing crystals work?</h3>
            <p>Crystals are believed to emit vibrations and energy that can interact with the human energy field. Different crystals have different properties based on their composition, color, and formation.</p>
          </div>
          <div>
            <h3 className="font-semibold text-cosmic-100 mb-2">How do I choose the right crystal?</h3>
            <p>Choose crystals based on your intention, zodiac sign, or chakra you want to work with. Trust your intuition - you&#39;re often drawn to the crystal you need most.</p>
          </div>
          <div>
            <h3 className="font-semibold text-cosmic-100 mb-2">How do I cleanse and charge my crystals?</h3>
            <p>Common methods include moonlight (especially full moon), sunlight (use caution as some crystals fade), running water, sage smoke, or placing them on selenite. Recharge regularly to maintain their energy.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
