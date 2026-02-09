'use client';

import Link from 'next/link';
import { useState } from 'react';
import { siteConfig } from '@/lib/config';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [zodiacDropdownOpen, setZodiacDropdownOpen] = useState(false);

  return (
    <nav className="bg-cosmic-900/80 backdrop-blur-sm border-b border-cosmic-700 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">✨</span>
            <span className="text-xl font-bold text-gold-400">{siteConfig.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button
                className="text-cosmic-200 hover:text-gold-400 transition-colors flex items-center space-x-1"
                onMouseEnter={() => setZodiacDropdownOpen(true)}
                onMouseLeave={() => setZodiacDropdownOpen(false)}
              >
                <span>Zodiac Signs</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {zodiacDropdownOpen && (
                <div
                  className="absolute left-0 mt-2 w-64 bg-cosmic-800 border border-cosmic-600 rounded-lg shadow-xl py-2 grid grid-cols-2 gap-1 p-2"
                  onMouseEnter={() => setZodiacDropdownOpen(true)}
                  onMouseLeave={() => setZodiacDropdownOpen(false)}
                >
                  {['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'].map(sign => (
                    <Link
                      key={sign}
                      href={`/zodiac/${sign}`}
                      className="px-3 py-2 text-sm text-cosmic-200 hover:text-gold-400 hover:bg-cosmic-700 rounded capitalize"
                    >
                      {sign}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/compatibility" className="text-cosmic-200 hover:text-gold-400 transition-colors">
              Compatibility
            </Link>

            <Link href="/birth-chart" className="text-cosmic-200 hover:text-gold-400 transition-colors">
              Birth Chart
            </Link>

            <Link href="/chinese-zodiac" className="text-cosmic-200 hover:text-gold-400 transition-colors">
              Chinese Zodiac
            </Link>

            <Link href="/numerology" className="text-cosmic-200 hover:text-gold-400 transition-colors">
              Numerology
            </Link>

            <Link href="/tarot" className="text-cosmic-200 hover:text-gold-400 transition-colors">
              Tarot
            </Link>

            <Link href="/crystals" className="text-cosmic-200 hover:text-gold-400 transition-colors">
              Crystals
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cosmic-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-cosmic-700">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-cosmic-200 hover:text-gold-400 transition-colors py-2">
                Home
              </Link>
              <div>
                <div className="text-cosmic-400 text-sm font-semibold mb-2">Zodiac Signs</div>
                <div className="grid grid-cols-2 gap-2 pl-4">
                  {['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'].map(sign => (
                    <Link
                      key={sign}
                      href={`/zodiac/${sign}`}
                      className="text-cosmic-300 hover:text-gold-400 transition-colors text-sm capitalize py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {sign}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/compatibility" className="text-cosmic-200 hover:text-gold-400 transition-colors py-2">
                Compatibility
              </Link>
              <Link href="/birth-chart" className="text-cosmic-200 hover:text-gold-400 transition-colors py-2">
                Birth Chart
              </Link>
              <Link href="/chinese-zodiac" className="text-cosmic-200 hover:text-gold-400 transition-colors py-2">
                Chinese Zodiac
              </Link>
              <Link href="/numerology" className="text-cosmic-200 hover:text-gold-400 transition-colors py-2">
                Numerology
              </Link>
              <Link href="/tarot" className="text-cosmic-200 hover:text-gold-400 transition-colors py-2">
                Tarot
              </Link>
              <Link href="/crystals" className="text-cosmic-200 hover:text-gold-400 transition-colors py-2">
                Crystals
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
