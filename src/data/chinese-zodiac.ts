export interface ChineseZodiacSign {
  id: string;
  name: string;
  years: number[];
  element: string;
  yinYang: 'Yin' | 'Yang';
  traits: string[];
  strengths: string[];
  weaknesses: string[];
  luckyNumbers: number[];
  luckyColors: string[];
  compatibility: {
    best: string[];
    worst: string[];
  };
  description: string;
}

export const chineseZodiacSigns: ChineseZodiacSign[] = [
  {
    id: 'rat',
    name: 'Rat',
    years: [1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020, 2032],
    element: 'Water',
    yinYang: 'Yang',
    traits: ['Quick-witted', 'Resourceful', 'Versatile', 'Kind', 'Smart'],
    strengths: ['Adaptable', 'Quick thinking', 'Resourceful', 'Charming', 'Sociable'],
    weaknesses: ['Greedy', 'Stubborn', 'Scheming', 'Opportunistic', 'Picky'],
    luckyNumbers: [2, 3],
    luckyColors: ['Blue', 'Gold', 'Green'],
    compatibility: {
      best: ['Dragon', 'Monkey', 'Ox'],
      worst: ['Horse', 'Rooster'],
    },
    description: 'People born in the Year of the Rat are known for their quick wit, resourcefulness, and versatility. They are charming, sociable, and have a strong ability to adapt to different situations. Rats are intelligent and thrifty, always finding innovative solutions to problems.',
  },
  {
    id: 'ox',
    name: 'Ox',
    years: [1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021, 2033],
    element: 'Earth',
    yinYang: 'Yin',
    traits: ['Diligent', 'Dependable', 'Strong', 'Determined', 'Honest'],
    strengths: ['Hardworking', 'Reliable', 'Patient', 'Methodical', 'Loyal'],
    weaknesses: ['Stubborn', 'Narrow-minded', 'Conservative', 'Slow'],
    luckyNumbers: [1, 4],
    luckyColors: ['White', 'Yellow', 'Green'],
    compatibility: {
      best: ['Rat', 'Snake', 'Rooster'],
      worst: ['Tiger', 'Dragon', 'Horse', 'Sheep'],
    },
    description: 'Oxen are known for their diligence, dependability, and strength. They are hardworking, methodical, and persistent in achieving their goals. While they may be conservative and slow-moving, their determination and reliability make them excellent at completing tasks.',
  },
  {
    id: 'tiger',
    name: 'Tiger',
    years: [1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022, 2034],
    element: 'Wood',
    yinYang: 'Yang',
    traits: ['Brave', 'Confident', 'Competitive', 'Unpredictable', 'Charming'],
    strengths: ['Courageous', 'Confident', 'Charismatic', 'Adventurous', 'Passionate'],
    weaknesses: ['Impulsive', 'Rebellious', 'Aggressive', 'Short-tempered', 'Overindulgent'],
    luckyNumbers: [1, 3, 4],
    luckyColors: ['Blue', 'Gray', 'Orange'],
    compatibility: {
      best: ['Dragon', 'Horse', 'Pig'],
      worst: ['Ox', 'Snake', 'Monkey'],
    },
    description: 'Tigers are brave, competitive, and confident individuals. They are natural leaders who love adventure and taking on challenges. Their charisma and passion inspire others, though their impulsive nature can sometimes lead to hasty decisions.',
  },
  {
    id: 'rabbit',
    name: 'Rabbit',
    years: [1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023, 2035],
    element: 'Wood',
    yinYang: 'Yin',
    traits: ['Quiet', 'Elegant', 'Kind', 'Responsible', 'Patient'],
    strengths: ['Gentle', 'Compassionate', 'Artistic', 'Careful', 'Gracious'],
    weaknesses: ['Superficial', 'Stubborn', 'Melancholy', 'Overly cautious'],
    luckyNumbers: [3, 4, 6],
    luckyColors: ['Red', 'Pink', 'Purple', 'Blue'],
    compatibility: {
      best: ['Sheep', 'Monkey', 'Dog', 'Pig'],
      worst: ['Snake', 'Rooster'],
    },
    description: 'Rabbits are known for their elegance, kindness, and responsibility. They are gentle, compassionate individuals with refined tastes and artistic sensibilities. While they may be cautious and avoid confrontation, their patience and grace make them wonderful companions.',
  },
  {
    id: 'dragon',
    name: 'Dragon',
    years: [1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024, 2036],
    element: 'Earth',
    yinYang: 'Yang',
    traits: ['Confident', 'Intelligent', 'Enthusiastic', 'Ambitious', 'Charismatic'],
    strengths: ['Powerful', 'Lucky', 'Flexible', 'Eccentric', 'Imaginative'],
    weaknesses: ['Arrogant', 'Tactless', 'Hot-headed', 'Demanding', 'Gullible'],
    luckyNumbers: [1, 6, 7],
    luckyColors: ['Gold', 'Silver', 'Gray', 'White'],
    compatibility: {
      best: ['Rat', 'Tiger', 'Snake'],
      worst: ['Ox', 'Sheep', 'Dog'],
    },
    description: 'Dragons are the most powerful and charismatic of all Chinese zodiac signs. They are confident, intelligent, and enthusiastic, with natural leadership abilities. Dragons are ambitious dreamers who inspire others with their vision and determination.',
  },
  {
    id: 'snake',
    name: 'Snake',
    years: [1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025, 2037],
    element: 'Fire',
    yinYang: 'Yin',
    traits: ['Enigmatic', 'Intelligent', 'Wise', 'Graceful', 'Intuitive'],
    strengths: ['Philosophical', 'Organized', 'Sophisticated', 'Creative', 'Perceptive'],
    weaknesses: ['Jealous', 'Suspicious', 'Sly', 'Anxious', 'Possessive'],
    luckyNumbers: [2, 8, 9],
    luckyColors: ['Black', 'Red', 'Yellow'],
    compatibility: {
      best: ['Dragon', 'Rooster'],
      worst: ['Tiger', 'Rabbit', 'Sheep', 'Pig'],
    },
    description: 'Snakes are enigmatic, wise, and graceful individuals. They are deep thinkers with strong intuition and analytical minds. While they may appear calm and composed on the surface, Snakes are passionate and determined beneath their sophisticated exterior.',
  },
  {
    id: 'horse',
    name: 'Horse',
    years: [1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026, 2038],
    element: 'Fire',
    yinYang: 'Yang',
    traits: ['Animated', 'Active', 'Energetic', 'Independent', 'Frank'],
    strengths: ['Warm-hearted', 'Enthusiastic', 'Positive', 'Cheerful', 'Popular'],
    weaknesses: ['Impatient', 'Hot-blooded', 'Reckless', 'Self-centered', 'Changeable'],
    luckyNumbers: [2, 3, 7],
    luckyColors: ['Yellow', 'Green'],
    compatibility: {
      best: ['Tiger', 'Sheep', 'Rabbit'],
      worst: ['Rat', 'Ox', 'Horse', 'Rooster'],
    },
    description: 'Horses are animated, energetic, and independent spirits. They love freedom and social interaction, bringing warmth and enthusiasm wherever they go. Their positive outlook and cheerful nature make them popular, though their impatience can sometimes be a challenge.',
  },
  {
    id: 'sheep',
    name: 'Sheep',
    years: [1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027, 2039],
    element: 'Earth',
    yinYang: 'Yin',
    traits: ['Gentle', 'Mild', 'Sympathetic', 'Creative', 'Kind-hearted'],
    strengths: ['Calm', 'Compassionate', 'Artistic', 'Thoughtful', 'Peaceful'],
    weaknesses: ['Pessimistic', 'Moody', 'Indecisive', 'Timid', 'Vulnerable'],
    luckyNumbers: [2, 7],
    luckyColors: ['Brown', 'Red', 'Purple'],
    compatibility: {
      best: ['Rabbit', 'Horse', 'Pig'],
      worst: ['Ox', 'Dragon', 'Snake', 'Dog'],
    },
    description: 'Sheep are gentle, compassionate, and artistic souls. They are calm, kind-hearted individuals who value harmony and peace. Their creative nature and thoughtfulness make them excellent at understanding others, though their sensitivity can sometimes lead to moodiness.',
  },
  {
    id: 'monkey',
    name: 'Monkey',
    years: [1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028, 2040],
    element: 'Metal',
    yinYang: 'Yang',
    traits: ['Sharp', 'Smart', 'Curious', 'Playful', 'Innovative'],
    strengths: ['Intelligent', 'Adaptable', 'Quick-witted', 'Charming', 'Lucky'],
    weaknesses: ['Jealous', 'Suspicious', 'Cunning', 'Selfish', 'Arrogant'],
    luckyNumbers: [1, 7, 8],
    luckyColors: ['White', 'Blue', 'Gold'],
    compatibility: {
      best: ['Rat', 'Dragon'],
      worst: ['Tiger', 'Snake', 'Pig'],
    },
    description: 'Monkeys are sharp, intelligent, and curious individuals with quick wit and charm. They are innovative problem-solvers who adapt easily to change. Their playful nature and clever minds make them entertaining companions, though their cunning can sometimes be misunderstood.',
  },
  {
    id: 'rooster',
    name: 'Rooster',
    years: [1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029, 2041],
    element: 'Metal',
    yinYang: 'Yin',
    traits: ['Observant', 'Hardworking', 'Resourceful', 'Courageous', 'Confident'],
    strengths: ['Honest', 'Energetic', 'Intelligent', 'Practical', 'Loyal'],
    weaknesses: ['Vain', 'Critical', 'Boastful', 'Selfish', 'Abrasive'],
    luckyNumbers: [5, 7, 8],
    luckyColors: ['Gold', 'Brown', 'Yellow'],
    compatibility: {
      best: ['Ox', 'Snake'],
      worst: ['Rat', 'Rabbit', 'Horse', 'Rooster', 'Dog'],
    },
    description: 'Roosters are observant, hardworking, and confident individuals. They are honest, practical, and energetic, always striving for excellence. Their attention to detail and loyalty make them valuable friends, though their critical nature can sometimes be off-putting.',
  },
  {
    id: 'dog',
    name: 'Dog',
    years: [1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030, 2042],
    element: 'Earth',
    yinYang: 'Yang',
    traits: ['Loyal', 'Honest', 'Prudent', 'Faithful', 'Responsible'],
    strengths: ['Trustworthy', 'Courageous', 'Intelligent', 'Lively', 'Dutiful'],
    weaknesses: ['Stubborn', 'Worrying', 'Cold', 'Critical', 'Pessimistic'],
    luckyNumbers: [3, 4, 9],
    luckyColors: ['Green', 'Red', 'Purple'],
    compatibility: {
      best: ['Rabbit', 'Horse', 'Tiger'],
      worst: ['Dragon', 'Sheep', 'Rooster'],
    },
    description: 'Dogs are loyal, honest, and faithful individuals. They are trustworthy companions who value justice and responsibility. Their courageous and protective nature makes them excellent friends, though their tendency to worry and criticize can sometimes be challenging.',
  },
  {
    id: 'pig',
    name: 'Pig',
    years: [1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031, 2043],
    element: 'Water',
    yinYang: 'Yin',
    traits: ['Compassionate', 'Generous', 'Diligent', 'Easygoing', 'Honest'],
    strengths: ['Sincere', 'Tolerant', 'Honest', 'Optimistic', 'Sociable'],
    weaknesses: ['Naive', 'Gullible', 'Slow', 'Materialistic', 'Lazy'],
    luckyNumbers: [2, 5, 8],
    luckyColors: ['Yellow', 'Gray', 'Brown', 'Gold'],
    compatibility: {
      best: ['Tiger', 'Rabbit', 'Sheep'],
      worst: ['Snake', 'Monkey', 'Pig'],
    },
    description: 'Pigs are compassionate, generous, and diligent individuals. They are sincere, honest, and optimistic, enjoying life\'s pleasures with an easygoing attitude. Their tolerance and sociable nature make them beloved friends, though their naive trust can sometimes be exploited.',
  },
];

export function getChineseZodiacByYear(year: number): ChineseZodiacSign {
  // Chinese zodiac follows a 12-year cycle starting with Rat
  const baseYear = 1924; // Year of the Rat
  const index = (year - baseYear) % 12;
  const adjustedIndex = index < 0 ? index + 12 : index;
  return chineseZodiacSigns[adjustedIndex];
}

export function getChineseZodiacById(id: string): ChineseZodiacSign | undefined {
  return chineseZodiacSigns.find(sign => sign.id === id);
}
