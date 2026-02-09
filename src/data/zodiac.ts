export interface ZodiacSign {
  id: string;
  name: string;
  symbol: string;
  element: 'Fire' | 'Earth' | 'Air' | 'Water';
  quality: 'Cardinal' | 'Fixed' | 'Mutable';
  rulingPlanet: string;
  dateRange: string;
  startDate: { month: number; day: number };
  endDate: { month: number; day: number };
  traits: string[];
  strengths: string[];
  weaknesses: string[];
  likes: string[];
  dislikes: string[];
  description: string;
  colors: string[];
  luckyNumbers: number[];
  compatibleSigns: string[];
}

export const zodiacSigns: ZodiacSign[] = [
  {
    id: 'aries',
    name: 'Aries',
    symbol: '♈',
    element: 'Fire',
    quality: 'Cardinal',
    rulingPlanet: 'Mars',
    dateRange: 'March 21 - April 19',
    startDate: { month: 3, day: 21 },
    endDate: { month: 4, day: 19 },
    traits: ['Bold', 'Ambitious', 'Direct', 'Passionate', 'Confident'],
    strengths: ['Courageous', 'Determined', 'Confident', 'Enthusiastic', 'Optimistic', 'Honest', 'Passionate'],
    weaknesses: ['Impatient', 'Moody', 'Short-tempered', 'Impulsive', 'Aggressive'],
    likes: ['Comfortable clothes', 'Taking on leadership roles', 'Physical challenges', 'Individual sports'],
    dislikes: ['Inactivity', 'Delays', 'Work that does not use one\'s talents'],
    description: 'Aries is the first sign of the zodiac, and that\'s pretty much how those born under this sign see themselves: first. Aries are natural leaders, full of energy and always ready to take on new challenges. They are bold, ambitious, and adventurous, with a pioneering spirit that makes them excellent at starting new projects.',
    colors: ['Red', 'Scarlet'],
    luckyNumbers: [1, 8, 17],
    compatibleSigns: ['leo', 'sagittarius', 'gemini', 'aquarius'],
  },
  {
    id: 'taurus',
    name: 'Taurus',
    symbol: '♉',
    element: 'Earth',
    quality: 'Fixed',
    rulingPlanet: 'Venus',
    dateRange: 'April 20 - May 20',
    startDate: { month: 4, day: 20 },
    endDate: { month: 5, day: 20 },
    traits: ['Reliable', 'Patient', 'Practical', 'Devoted', 'Stable'],
    strengths: ['Reliable', 'Patient', 'Practical', 'Devoted', 'Responsible', 'Stable'],
    weaknesses: ['Stubborn', 'Possessive', 'Uncompromising'],
    likes: ['Gardening', 'Cooking', 'Music', 'Romance', 'High quality clothes', 'Working with hands'],
    dislikes: ['Sudden changes', 'Complications', 'Insecurity of any kind', 'Synthetic fabrics'],
    description: 'Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene environments, surrounded by soft sounds and soothing aromas. They are known for being reliable, practical, ambitious and sensual. They appreciate the finer things in life and are drawn to beauty, luxury, and comfort.',
    colors: ['Green', 'Pink'],
    luckyNumbers: [2, 6, 9, 12, 24],
    compatibleSigns: ['virgo', 'capricorn', 'cancer', 'pisces'],
  },
  {
    id: 'gemini',
    name: 'Gemini',
    symbol: '♊',
    element: 'Air',
    quality: 'Mutable',
    rulingPlanet: 'Mercury',
    dateRange: 'May 21 - June 20',
    startDate: { month: 5, day: 21 },
    endDate: { month: 6, day: 20 },
    traits: ['Versatile', 'Curious', 'Communicative', 'Witty', 'Youthful'],
    strengths: ['Gentle', 'Affectionate', 'Curious', 'Adaptable', 'Ability to learn quickly', 'Exchanging ideas'],
    weaknesses: ['Nervous', 'Inconsistent', 'Indecisive'],
    likes: ['Music', 'Books', 'Magazines', 'Chatting', 'Short trips'],
    dislikes: ['Being alone', 'Being confined', 'Repetition and routine'],
    description: 'Gemini is the third sign of the zodiac and is represented by the twins. Those born under this sign are highly intelligent, curious, and communicative. Geminis are known for their versatility and ability to adapt to different situations quickly. They have an insatiable curiosity and love to learn new things, making them excellent conversationalists.',
    colors: ['Light Green', 'Yellow'],
    luckyNumbers: [5, 7, 14, 23],
    compatibleSigns: ['aries', 'leo', 'libra', 'aquarius'],
  },
  {
    id: 'cancer',
    name: 'Cancer',
    symbol: '♋',
    element: 'Water',
    quality: 'Cardinal',
    rulingPlanet: 'Moon',
    dateRange: 'June 21 - July 22',
    startDate: { month: 6, day: 21 },
    endDate: { month: 7, day: 22 },
    traits: ['Emotional', 'Nurturing', 'Intuitive', 'Protective', 'Sympathetic'],
    strengths: ['Tenacious', 'Highly imaginative', 'Loyal', 'Emotional', 'Sympathetic', 'Persuasive'],
    weaknesses: ['Moody', 'Pessimistic', 'Suspicious', 'Manipulative', 'Insecure'],
    likes: ['Art', 'Home-based hobbies', 'Relaxing near or in water', 'Helping loved ones', 'A good meal with friends'],
    dislikes: ['Strangers', 'Any criticism of Mom', 'Revealing of personal life'],
    description: 'Cancer is the fourth sign of the zodiac, represented by the crab. Those born under this sign are deeply intuitive and sentimental. Cancers are highly emotional and sensitive, and care deeply about matters of the family and their home. They are sympathetic and attached to people they keep close, making them excellent nurturers and protectors.',
    colors: ['White', 'Silver'],
    luckyNumbers: [2, 3, 15, 20],
    compatibleSigns: ['taurus', 'virgo', 'scorpio', 'pisces'],
  },
  {
    id: 'leo',
    name: 'Leo',
    symbol: '♌',
    element: 'Fire',
    quality: 'Fixed',
    rulingPlanet: 'Sun',
    dateRange: 'July 23 - August 22',
    startDate: { month: 7, day: 23 },
    endDate: { month: 8, day: 22 },
    traits: ['Confident', 'Generous', 'Creative', 'Charismatic', 'Warm-hearted'],
    strengths: ['Creative', 'Passionate', 'Generous', 'Warm-hearted', 'Cheerful', 'Humorous'],
    weaknesses: ['Arrogant', 'Stubborn', 'Self-centered', 'Lazy', 'Inflexible'],
    likes: ['Theater', 'Taking holidays', 'Being admired', 'Expensive things', 'Bright colors', 'Fun with friends'],
    dislikes: ['Being ignored', 'Facing difficult reality', 'Not being treated like a king or queen'],
    description: 'Leo is the fifth sign of the zodiac, represented by the lion. Passionate, creative, and generous, Leos love to be in the spotlight. They are natural-born leaders with dramatic flair and a warm heart. Leos are known for their confidence, ambition, and strong sense of self. They are fiercely loyal and protective of those they love.',
    colors: ['Gold', 'Yellow', 'Orange'],
    luckyNumbers: [1, 3, 10, 19],
    compatibleSigns: ['aries', 'gemini', 'libra', 'sagittarius'],
  },
  {
    id: 'virgo',
    name: 'Virgo',
    symbol: '♍',
    element: 'Earth',
    quality: 'Mutable',
    rulingPlanet: 'Mercury',
    dateRange: 'August 23 - September 22',
    startDate: { month: 8, day: 23 },
    endDate: { month: 9, day: 22 },
    traits: ['Analytical', 'Practical', 'Meticulous', 'Helpful', 'Hardworking'],
    strengths: ['Loyal', 'Analytical', 'Kind', 'Hardworking', 'Practical'],
    weaknesses: ['Shyness', 'Worry', 'Overly critical of self and others', 'All work and no play'],
    likes: ['Animals', 'Healthy food', 'Books', 'Nature', 'Cleanliness'],
    dislikes: ['Rudeness', 'Asking for help', 'Taking center stage'],
    description: 'Virgo is the sixth sign of the zodiac, represented by the virgin or maiden. Virgos are known for their attention to detail, analytical minds, and practical approach to life. They are hardworking, methodical, and have high standards for themselves and others. Virgos are dedicated helpers who love to serve and make things better.',
    colors: ['Grey', 'Beige', 'Pale Yellow'],
    luckyNumbers: [5, 14, 15, 23, 32],
    compatibleSigns: ['taurus', 'cancer', 'scorpio', 'capricorn'],
  },
  {
    id: 'libra',
    name: 'Libra',
    symbol: '♎',
    element: 'Air',
    quality: 'Cardinal',
    rulingPlanet: 'Venus',
    dateRange: 'September 23 - October 22',
    startDate: { month: 9, day: 23 },
    endDate: { month: 10, day: 22 },
    traits: ['Diplomatic', 'Charming', 'Balanced', 'Social', 'Fair-minded'],
    strengths: ['Cooperative', 'Diplomatic', 'Gracious', 'Fair-minded', 'Social'],
    weaknesses: ['Indecisive', 'Avoids confrontations', 'Will carry a grudge', 'Self-pity'],
    likes: ['Harmony', 'Gentleness', 'Sharing with others', 'The outdoors'],
    dislikes: ['Violence', 'Injustice', 'Loudmouths', 'Conformity'],
    description: 'Libra is the seventh sign of the zodiac, represented by the scales. Libras are all about balance, justice, and harmony. They are naturally diplomatic, charming, and have a strong sense of fairness. Libras are social beings who thrive in partnerships and enjoy the company of others. They have an eye for beauty and appreciation for art and culture.',
    colors: ['Pink', 'Green', 'Light Blue'],
    luckyNumbers: [4, 6, 13, 15, 24],
    compatibleSigns: ['gemini', 'leo', 'sagittarius', 'aquarius'],
  },
  {
    id: 'scorpio',
    name: 'Scorpio',
    symbol: '♏',
    element: 'Water',
    quality: 'Fixed',
    rulingPlanet: 'Pluto',
    dateRange: 'October 23 - November 21',
    startDate: { month: 10, day: 23 },
    endDate: { month: 11, day: 21 },
    traits: ['Intense', 'Passionate', 'Mysterious', 'Determined', 'Brave'],
    strengths: ['Resourceful', 'Brave', 'Passionate', 'Stubborn', 'A true friend'],
    weaknesses: ['Distrusting', 'Jealous', 'Secretive', 'Violent'],
    likes: ['Truth', 'Facts', 'Being right', 'Longtime friends', 'Teasing', 'A grand passion'],
    dislikes: ['Dishonesty', 'Revealing secrets', 'Passive people'],
    description: 'Scorpio is the eighth sign of the zodiac, represented by the scorpion. Scorpios are known for their intensity, passion, and mysterious nature. They are brave, determined, and resourceful, with a natural ability to transform themselves and situations around them. Scorpios feel emotions deeply and are fiercely loyal to those they trust.',
    colors: ['Scarlet', 'Red', 'Rust'],
    luckyNumbers: [8, 11, 18, 22],
    compatibleSigns: ['cancer', 'virgo', 'capricorn', 'pisces'],
  },
  {
    id: 'sagittarius',
    name: 'Sagittarius',
    symbol: '♐',
    element: 'Fire',
    quality: 'Mutable',
    rulingPlanet: 'Jupiter',
    dateRange: 'November 22 - December 21',
    startDate: { month: 11, day: 22 },
    endDate: { month: 12, day: 21 },
    traits: ['Optimistic', 'Adventurous', 'Philosophical', 'Independent', 'Honest'],
    strengths: ['Generous', 'Idealistic', 'Great sense of humor'],
    weaknesses: ['Promises more than can deliver', 'Very impatient', 'Will say anything no matter how undiplomatic'],
    likes: ['Freedom', 'Travel', 'Philosophy', 'Being outdoors'],
    dislikes: ['Clingy people', 'Being constrained', 'Off-the-wall theories', 'Details'],
    description: 'Sagittarius is the ninth sign of the zodiac, represented by the archer. Those born under this sign are natural explorers, philosophers, and adventurers. They are optimistic, freedom-loving, and have an insatiable thirst for knowledge and new experiences. Sagittarians are known for their honesty, enthusiasm, and great sense of humor.',
    colors: ['Blue', 'Purple'],
    luckyNumbers: [3, 7, 9, 12, 21],
    compatibleSigns: ['aries', 'leo', 'libra', 'aquarius'],
  },
  {
    id: 'capricorn',
    name: 'Capricorn',
    symbol: '♑',
    element: 'Earth',
    quality: 'Cardinal',
    rulingPlanet: 'Saturn',
    dateRange: 'December 22 - January 19',
    startDate: { month: 12, day: 22 },
    endDate: { month: 1, day: 19 },
    traits: ['Ambitious', 'Disciplined', 'Responsible', 'Patient', 'Practical'],
    strengths: ['Responsible', 'Disciplined', 'Self-control', 'Good managers'],
    weaknesses: ['Know-it-all', 'Unforgiving', 'Condescending', 'Expecting the worst'],
    likes: ['Family', 'Tradition', 'Music', 'Understated status', 'Quality craftsmanship'],
    dislikes: ['Almost everything at some point'],
    description: 'Capricorn is the tenth sign of the zodiac, represented by the sea-goat. Capricorns are ambitious, disciplined, and practical. They are masters of self-control and have the ability to lead the way, make realistic plans, and manage many people at once. They are hardworking, responsible, and value tradition and family.',
    colors: ['Brown', 'Black', 'Dark Green'],
    luckyNumbers: [4, 8, 13, 22],
    compatibleSigns: ['taurus', 'virgo', 'scorpio', 'pisces'],
  },
  {
    id: 'aquarius',
    name: 'Aquarius',
    symbol: '♒',
    element: 'Air',
    quality: 'Fixed',
    rulingPlanet: 'Uranus',
    dateRange: 'January 20 - February 18',
    startDate: { month: 1, day: 20 },
    endDate: { month: 2, day: 18 },
    traits: ['Independent', 'Innovative', 'Humanitarian', 'Intellectual', 'Original'],
    strengths: ['Progressive', 'Original', 'Independent', 'Humanitarian'],
    weaknesses: ['Runs from emotional expression', 'Temperamental', 'Uncompromising', 'Aloof'],
    likes: ['Fun with friends', 'Helping others', 'Fighting for causes', 'Intellectual conversation', 'A good listener'],
    dislikes: ['Limitations', 'Broken promises', 'Being lonely', 'Dull or boring situations', 'People who disagree with them'],
    description: 'Aquarius is the eleventh sign of the zodiac, represented by the water bearer. Aquarians are progressive, original, independent, and humanitarian. They are deep thinkers who love helping others and fighting for causes they believe in. Aquarians are known for their innovative ideas and unique perspective on the world.',
    colors: ['Light Blue', 'Silver'],
    luckyNumbers: [4, 7, 11, 22, 29],
    compatibleSigns: ['aries', 'gemini', 'libra', 'sagittarius'],
  },
  {
    id: 'pisces',
    name: 'Pisces',
    symbol: '♓',
    element: 'Water',
    quality: 'Mutable',
    rulingPlanet: 'Neptune',
    dateRange: 'February 19 - March 20',
    startDate: { month: 2, day: 19 },
    endDate: { month: 3, day: 20 },
    traits: ['Compassionate', 'Artistic', 'Intuitive', 'Gentle', 'Wise'],
    strengths: ['Compassionate', 'Artistic', 'Intuitive', 'Gentle', 'Wise', 'Musical'],
    weaknesses: ['Fearful', 'Overly trusting', 'Sad', 'Desire to escape reality', 'Can be a victim or martyr'],
    likes: ['Being alone', 'Sleeping', 'Music', 'Romance', 'Visual media', 'Swimming', 'Spiritual themes'],
    dislikes: ['Know-it-all', 'Being criticized', 'The past coming back to haunt', 'Cruelty of any kind'],
    description: 'Pisces is the twelfth and final sign of the zodiac, represented by two fish swimming in opposite directions. Pisceans are compassionate, artistic, and deeply intuitive. They are gentle souls who are wise beyond their years and have a deep understanding of the emotional and spiritual realms. Pisces are dreamers with vivid imaginations.',
    colors: ['Mauve', 'Lilac', 'Purple', 'Violet', 'Sea Green'],
    luckyNumbers: [3, 9, 12, 15, 18, 24],
    compatibleSigns: ['taurus', 'cancer', 'scorpio', 'capricorn'],
  },
];

export function getZodiacSign(id: string): ZodiacSign | undefined {
  return zodiacSigns.find(sign => sign.id === id);
}

export function getZodiacSignByDate(month: number, day: number): ZodiacSign | undefined {
  return zodiacSigns.find(sign => {
    const { startDate, endDate } = sign;

    // Handle signs that span across year boundary (Capricorn)
    if (startDate.month > endDate.month) {
      return (
        (month === startDate.month && day >= startDate.day) ||
        (month === endDate.month && day <= endDate.day) ||
        (month > startDate.month || month < endDate.month)
      );
    }

    // Normal case
    return (
      (month === startDate.month && day >= startDate.day) ||
      (month === endDate.month && day <= endDate.day) ||
      (month > startDate.month && month < endDate.month)
    );
  });
}
