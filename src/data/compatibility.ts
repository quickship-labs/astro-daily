export interface CompatibilityData {
  sign1: string;
  sign2: string;
  overallScore: number;
  loveScore: number;
  friendshipScore: number;
  communicationScore: number;
  trustScore: number;
  summary: string;
  strengths: string[];
  challenges: string[];
}

export const compatibilityData: CompatibilityData[] = [
  // Aries combinations
  {
    sign1: 'aries',
    sign2: 'leo',
    overallScore: 95,
    loveScore: 98,
    friendshipScore: 92,
    communicationScore: 90,
    trustScore: 95,
    summary: 'A fiery and passionate match! Aries and Leo share incredible chemistry, mutual respect, and a love for adventure. Both are natural leaders who inspire and energize each other.',
    strengths: ['Passionate connection', 'Mutual respect', 'Shared energy and enthusiasm', 'Great sexual chemistry'],
    challenges: ['Both want to be in charge', 'Competitive nature', 'Ego clashes possible'],
  },
  {
    sign1: 'aries',
    sign2: 'sagittarius',
    overallScore: 93,
    loveScore: 95,
    friendshipScore: 94,
    communicationScore: 92,
    trustScore: 88,
    summary: 'An adventurous and exciting pairing! These two fire signs share a love for freedom, exploration, and new experiences. Their relationship is never boring.',
    strengths: ['Love of adventure', 'Optimistic outlook', 'Great sense of humor', 'Independence respected'],
    challenges: ['Both can be impulsive', 'Commitment issues', 'Need for personal space'],
  },
  {
    sign1: 'aries',
    sign2: 'gemini',
    overallScore: 85,
    loveScore: 82,
    friendshipScore: 90,
    communicationScore: 88,
    trustScore: 80,
    summary: 'A dynamic and fun combination! Aries provides the action while Gemini brings the ideas. Together they create an exciting and intellectually stimulating partnership.',
    strengths: ['Never boring', 'Great conversations', 'Shared curiosity', 'Fun and playful'],
    challenges: ['Gemini\'s indecisiveness frustrates Aries', 'Different emotional needs', 'Restlessness'],
  },
  {
    sign1: 'aries',
    sign2: 'aquarius',
    overallScore: 80,
    loveScore: 78,
    friendshipScore: 85,
    communicationScore: 82,
    trustScore: 75,
    summary: 'An unconventional and stimulating match! Both value independence and bring unique perspectives to the relationship. They inspire each other to think differently.',
    strengths: ['Mutual independence', 'Innovative thinking', 'Respect for individuality', 'Exciting adventures'],
    challenges: ['Emotional disconnect', 'Aquarius too detached for Aries', 'Different priorities'],
  },
  {
    sign1: 'aries',
    sign2: 'libra',
    overallScore: 75,
    loveScore: 80,
    friendshipScore: 72,
    communicationScore: 70,
    trustScore: 73,
    summary: 'Opposites attract in this pairing! Aries is direct and impulsive while Libra is diplomatic and balanced. They can complement each other beautifully or clash frequently.',
    strengths: ['Balance each other', 'Strong attraction', 'Learn from differences', 'Passionate connection'],
    challenges: ['Different approaches to conflict', 'Aries too blunt for Libra', 'Decision-making struggles'],
  },

  // Taurus combinations
  {
    sign1: 'taurus',
    sign2: 'virgo',
    overallScore: 90,
    loveScore: 88,
    friendshipScore: 92,
    communicationScore: 85,
    trustScore: 95,
    summary: 'A grounded and stable match! Both earth signs value security, loyalty, and practicality. They build a solid foundation together with shared values and goals.',
    strengths: ['Loyalty and trust', 'Shared values', 'Practical approach', 'Stable relationship'],
    challenges: ['Can be too routine', 'Both stubborn', 'Lack spontaneity'],
  },
  {
    sign1: 'taurus',
    sign2: 'capricorn',
    overallScore: 88,
    loveScore: 85,
    friendshipScore: 90,
    communicationScore: 82,
    trustScore: 93,
    summary: 'A power couple in the making! These earth signs share ambition, determination, and appreciation for the finer things. They build lasting success together.',
    strengths: ['Shared ambition', 'Financial compatibility', 'Mutual respect', 'Long-term vision'],
    challenges: ['Both can be materialistic', 'Work over play', 'Emotional reserve'],
  },
  {
    sign1: 'taurus',
    sign2: 'cancer',
    overallScore: 92,
    loveScore: 95,
    friendshipScore: 88,
    communicationScore: 87,
    trustScore: 94,
    summary: 'A nurturing and loving partnership! Taurus provides security while Cancer offers emotional depth. Together they create a warm, comfortable home.',
    strengths: ['Deep emotional bond', 'Nurturing relationship', 'Shared love of home', 'Loyalty'],
    challenges: ['Cancer\'s moods', 'Taurus possessiveness', 'Both can be stubborn'],
  },
  {
    sign1: 'taurus',
    sign2: 'pisces',
    overallScore: 87,
    loveScore: 90,
    friendshipScore: 82,
    communicationScore: 80,
    trustScore: 88,
    summary: 'A romantic and gentle pairing! Taurus grounds Pisces while Pisces brings magic and creativity to Taurus. A beautiful balance of earth and water.',
    strengths: ['Romantic connection', 'Complementary strengths', 'Gentle and caring', 'Artistic appreciation'],
    challenges: ['Pisces too dreamy for practical Taurus', 'Different pace', 'Communication gaps'],
  },

  // Gemini combinations
  {
    sign1: 'gemini',
    sign2: 'libra',
    overallScore: 90,
    loveScore: 88,
    friendshipScore: 93,
    communicationScore: 95,
    trustScore: 82,
    summary: 'An intellectually stimulating match! Both air signs love communication, socializing, and mental connection. They understand each other perfectly.',
    strengths: ['Great communication', 'Social compatibility', 'Intellectual bond', 'Fun and lighthearted'],
    challenges: ['Both indecisive', 'Lack of emotional depth', 'Flightiness'],
  },
  {
    sign1: 'gemini',
    sign2: 'aquarius',
    overallScore: 88,
    loveScore: 85,
    friendshipScore: 92,
    communicationScore: 93,
    trustScore: 80,
    summary: 'A progressive and innovative pairing! These air signs share intellectual curiosity, love of freedom, and unconventional thinking. Never a dull moment!',
    strengths: ['Mental stimulation', 'Shared values', 'Independence respected', 'Progressive thinking'],
    challenges: ['Emotional detachment', 'Too much in their heads', 'Lack of grounding'],
  },
  {
    sign1: 'gemini',
    sign2: 'leo',
    overallScore: 82,
    loveScore: 80,
    friendshipScore: 85,
    communicationScore: 88,
    trustScore: 75,
    summary: 'A playful and exciting combination! Gemini keeps Leo entertained while Leo brings passion and drama. Together they create a fun, social partnership.',
    strengths: ['Fun and playful', 'Social butterflies', 'Optimistic outlook', 'Creative together'],
    challenges: ['Leo needs more devotion', 'Gemini\'s flirtatiousness', 'Different emotional needs'],
  },

  // Cancer combinations
  {
    sign1: 'cancer',
    sign2: 'scorpio',
    overallScore: 94,
    loveScore: 97,
    friendshipScore: 90,
    communicationScore: 88,
    trustScore: 96,
    summary: 'An intensely emotional and devoted match! Both water signs understand each other\'s depths. They form a powerful, transformative bond.',
    strengths: ['Deep emotional connection', 'Loyalty', 'Intuitive understanding', 'Passionate love'],
    challenges: ['Intense emotions', 'Possessiveness', 'Holding grudges'],
  },
  {
    sign1: 'cancer',
    sign2: 'pisces',
    overallScore: 96,
    loveScore: 98,
    friendshipScore: 92,
    communicationScore: 90,
    trustScore: 95,
    summary: 'A dreamy and romantic pairing! These water signs share emotional depth, intuition, and compassion. They create a beautiful, nurturing relationship.',
    strengths: ['Emotional harmony', 'Intuitive bond', 'Romantic and caring', 'Creative together'],
    challenges: ['Both can be overly sensitive', 'Escapist tendencies', 'Need for grounding'],
  },
  {
    sign1: 'cancer',
    sign2: 'virgo',
    overallScore: 85,
    loveScore: 83,
    friendshipScore: 88,
    communicationScore: 82,
    trustScore: 90,
    summary: 'A caring and supportive match! Cancer provides emotional warmth while Virgo offers practical support. They create a nurturing, stable home.',
    strengths: ['Mutual care', 'Loyalty', 'Complementary strengths', 'Domestic harmony'],
    challenges: ['Virgo\'s criticism hurts Cancer', 'Different expressions of love', 'Cancer\'s mood swings'],
  },

  // Leo combinations
  {
    sign1: 'leo',
    sign2: 'sagittarius',
    overallScore: 90,
    loveScore: 92,
    friendshipScore: 93,
    communicationScore: 88,
    trustScore: 85,
    summary: 'A vibrant and adventurous pairing! Both fire signs share enthusiasm, optimism, and love of life. They inspire and energize each other constantly.',
    strengths: ['Adventurous spirit', 'Optimism', 'Passionate connection', 'Fun-loving'],
    challenges: ['Both want freedom', 'Leo needs more devotion', 'Blunt honesty'],
  },
  {
    sign1: 'leo',
    sign2: 'libra',
    overallScore: 88,
    loveScore: 90,
    friendshipScore: 87,
    communicationScore: 85,
    trustScore: 83,
    summary: 'A glamorous and romantic match! Leo loves Libra\'s charm while Libra adores Leo\'s confidence. Together they shine in social settings.',
    strengths: ['Romantic connection', 'Social compatibility', 'Appreciation of beauty', 'Balanced partnership'],
    challenges: ['Both need attention', 'Decision-making', 'Leo\'s dominance'],
  },

  // Virgo combinations
  {
    sign1: 'virgo',
    sign2: 'capricorn',
    overallScore: 92,
    loveScore: 88,
    friendshipScore: 95,
    communicationScore: 90,
    trustScore: 96,
    summary: 'A practical and ambitious pairing! Both earth signs value hard work, responsibility, and achievement. They build a solid, successful life together.',
    strengths: ['Shared values', 'Mutual respect', 'Practical approach', 'Loyalty'],
    challenges: ['Can be too serious', 'Work obsessed', 'Lack of spontaneity'],
  },
  {
    sign1: 'virgo',
    sign2: 'scorpio',
    overallScore: 87,
    loveScore: 88,
    friendshipScore: 85,
    communicationScore: 83,
    trustScore: 92,
    summary: 'An intense and transformative match! Virgo brings order while Scorpio adds depth. Together they create a powerful, loyal partnership.',
    strengths: ['Loyalty', 'Depth of connection', 'Mutual dedication', 'Problem-solving'],
    challenges: ['Scorpio\'s intensity', 'Virgo\'s criticism', 'Control issues'],
  },

  // Libra combinations
  {
    sign1: 'libra',
    sign2: 'sagittarius',
    overallScore: 82,
    loveScore: 80,
    friendshipScore: 88,
    communicationScore: 85,
    trustScore: 75,
    summary: 'A fun and social pairing! Libra brings harmony while Sagittarius adds adventure. They enjoy life together with optimism and joy.',
    strengths: ['Social compatibility', 'Optimism', 'Love of beauty and culture', 'Open-minded'],
    challenges: ['Sagittarius too blunt', 'Different commitment levels', 'Libra needs more stability'],
  },
  {
    sign1: 'libra',
    sign2: 'aquarius',
    overallScore: 90,
    loveScore: 87,
    friendshipScore: 93,
    communicationScore: 92,
    trustScore: 85,
    summary: 'An intellectually compatible match! Both air signs value communication, social justice, and innovation. They share a strong mental connection.',
    strengths: ['Intellectual bond', 'Shared ideals', 'Social activism', 'Respect for independence'],
    challenges: ['Emotional detachment', 'Aquarius too aloof', 'Indecisiveness'],
  },

  // Scorpio combinations
  {
    sign1: 'scorpio',
    sign2: 'capricorn',
    overallScore: 90,
    loveScore: 88,
    friendshipScore: 92,
    communicationScore: 85,
    trustScore: 95,
    summary: 'A powerful and ambitious pairing! Scorpio provides intensity while Capricorn adds structure. Together they achieve great things.',
    strengths: ['Mutual ambition', 'Loyalty', 'Deep respect', 'Transformative growth'],
    challenges: ['Both controlling', 'Emotional reserve', 'Power struggles'],
  },
  {
    sign1: 'scorpio',
    sign2: 'pisces',
    overallScore: 95,
    loveScore: 98,
    friendshipScore: 90,
    communicationScore: 88,
    trustScore: 94,
    summary: 'A deeply spiritual and emotional match! These water signs share incredible intuition, empathy, and emotional depth. A soulmate connection.',
    strengths: ['Intuitive understanding', 'Emotional depth', 'Spiritual connection', 'Unconditional support'],
    challenges: ['Intensity of emotions', 'Escapist tendencies', 'Codependency'],
  },

  // Sagittarius combinations
  {
    sign1: 'sagittarius',
    sign2: 'aquarius',
    overallScore: 88,
    loveScore: 85,
    friendshipScore: 92,
    communicationScore: 90,
    trustScore: 83,
    summary: 'A free-spirited and progressive match! Both value independence, innovation, and adventure. They inspire each other to grow.',
    strengths: ['Shared values', 'Independence respected', 'Adventurous spirit', 'Open-mindedness'],
    challenges: ['Emotional detachment', 'Commitment issues', 'Too much freedom'],
  },

  // Capricorn combinations
  {
    sign1: 'capricorn',
    sign2: 'pisces',
    overallScore: 85,
    loveScore: 87,
    friendshipScore: 82,
    communicationScore: 80,
    trustScore: 88,
    summary: 'A complementary pairing! Capricorn provides structure while Pisces brings creativity and compassion. They balance each other beautifully.',
    strengths: ['Complementary strengths', 'Mutual support', 'Capricorn grounds Pisces', 'Pisces softens Capricorn'],
    challenges: ['Different approaches', 'Communication gaps', 'Pisces too dreamy for Capricorn'],
  },
];

export function getCompatibility(sign1: string, sign2: string): CompatibilityData | undefined {
  // Normalize sign names
  const s1 = sign1.toLowerCase();
  const s2 = sign2.toLowerCase();

  // Find exact match or reverse match
  return compatibilityData.find(
    (comp) =>
      (comp.sign1 === s1 && comp.sign2 === s2) ||
      (comp.sign1 === s2 && comp.sign2 === s1)
  );
}

export function getSignCompatibilities(sign: string): CompatibilityData[] {
  const s = sign.toLowerCase();
  return compatibilityData.filter(
    (comp) => comp.sign1 === s || comp.sign2 === s
  );
}

// Popular compatibility pairs for static page generation
export const popularCompatibilityPairs = [
  ['aries', 'leo'],
  ['aries', 'sagittarius'],
  ['aries', 'gemini'],
  ['taurus', 'virgo'],
  ['taurus', 'capricorn'],
  ['taurus', 'cancer'],
  ['gemini', 'libra'],
  ['gemini', 'aquarius'],
  ['cancer', 'scorpio'],
  ['cancer', 'pisces'],
  ['leo', 'sagittarius'],
  ['leo', 'libra'],
  ['virgo', 'capricorn'],
  ['virgo', 'scorpio'],
  ['libra', 'sagittarius'],
  ['libra', 'aquarius'],
  ['scorpio', 'capricorn'],
  ['scorpio', 'pisces'],
  ['sagittarius', 'aquarius'],
  ['capricorn', 'pisces'],
];
