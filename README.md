# AstroDaily - Astrology Website

A complete, SEO-optimized astrology website built with Next.js 15, featuring daily horoscopes, compatibility calculators, birth charts, numerology, tarot readings, and crystal guides.

## Features

- **Daily Horoscopes**: Algorithmically generated daily horoscopes for all 12 zodiac signs
- **Zodiac Compatibility**: Check compatibility between any two zodiac signs
- **Birth Chart Calculator**: Calculate sun, moon, and rising signs
- **Numerology Calculator**: Find your life path and expression numbers
- **Tarot Guide**: Complete guide to all 78 tarot cards with daily card feature
- **Crystal Healing Guide**: 30+ crystals with properties and zodiac associations
- **Chinese Zodiac**: Discover your Chinese zodiac animal and traits

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Static export (SSG)
- **Monetization**: Google AdSense integration

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables** (optional):
   ```bash
   cp .env.example .env
   ```

   Configure:
   - `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID` - Your Google AdSense publisher ID
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Your Google Analytics ID

3. **Run development server**:
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000)

4. **Build for production**:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── zodiac/[sign]/     # Individual zodiac sign pages
│   ├── compatibility/      # Compatibility calculator and pairs
│   ├── birth-chart/       # Birth chart calculator
│   ├── numerology/        # Numerology calculator
│   ├── tarot/             # Tarot card guide
│   ├── crystals/          # Crystal healing guide
│   └── chinese-zodiac/    # Chinese zodiac
├── components/            # Reusable components
│   ├── AdSlot.tsx        # Google AdSense component
│   ├── Navbar.tsx        # Navigation
│   └── Footer.tsx        # Footer
├── data/                 # Data files
│   ├── zodiac.ts         # Zodiac signs data
│   ├── compatibility.ts  # Compatibility data
│   ├── tarot.ts          # Tarot cards
│   ├── crystals.ts       # Crystal properties
│   ├── chinese-zodiac.ts # Chinese zodiac animals
│   └── numerology.ts     # Numerology numbers
└── lib/                  # Utilities
    ├── config.ts         # Site configuration
    ├── seo.ts            # SEO helper functions
    └── horoscope-generator.ts  # Horoscope algorithm
```

## SEO Features

- Unique title and meta description for every page
- Canonical URLs
- Open Graph and Twitter Card metadata
- Sitemap generation
- Robots.txt
- Structured data ready (FAQ sections)
- Static site generation for maximum performance

## Horoscope Generation

Daily horoscopes are generated using a deterministic algorithm that:
- Uses a seeded random number generator based on date + zodiac sign
- Selects from pools of 50+ pre-written sentence fragments
- Ensures the same input always produces the same output
- Allows for static page generation while appearing dynamic

## Deployment

This site is configured for static export:

```bash
npm run build
```

The output will be in the `out` directory, ready to deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## Monetization

The site includes Google AdSense integration:
1. Set your AdSense publisher ID in environment variables
2. AdSlot components are placed throughout the site
3. Shows placeholder ads when not configured
4. Real ads display when publisher ID is set

## License

For entertainment purposes only. Not intended as professional advice.

## Contact

Built with Next.js 15 and Tailwind CSS.
