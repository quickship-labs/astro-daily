export interface NumerologyNumber {
  number: number;
  name: string;
  description: string;
  traits: string[];
  strengths: string[];
  weaknesses: string[];
  careers: string[];
  compatibility: number[];
}

export const numerologyNumbers: NumerologyNumber[] = [
  {
    number: 1,
    name: 'The Leader',
    description: 'Number 1 represents independence, leadership, and new beginnings. Those with this number are natural-born leaders who are ambitious, determined, and self-reliant. They have a strong desire to be first and to achieve greatness.',
    traits: ['Independent', 'Ambitious', 'Determined', 'Pioneering', 'Confident'],
    strengths: ['Leadership', 'Innovation', 'Courage', 'Self-motivation', 'Initiative'],
    weaknesses: ['Bossy', 'Domineering', 'Impatient', 'Self-centered', 'Stubborn'],
    careers: ['Entrepreneur', 'CEO', 'Manager', 'Inventor', 'Leader'],
    compatibility: [1, 5, 7],
  },
  {
    number: 2,
    name: 'The Peacemaker',
    description: 'Number 2 represents harmony, cooperation, and diplomacy. Those with this number are natural mediators who value relationships and seek balance in all things. They are sensitive, intuitive, and excellent team players.',
    traits: ['Diplomatic', 'Cooperative', 'Sensitive', 'Intuitive', 'Peaceful'],
    strengths: ['Teamwork', 'Empathy', 'Patience', 'Mediation', 'Understanding'],
    weaknesses: ['Overly sensitive', 'Indecisive', 'Passive', 'Dependent', 'Self-conscious'],
    careers: ['Counselor', 'Diplomat', 'Teacher', 'Mediator', 'Social worker'],
    compatibility: [2, 4, 8],
  },
  {
    number: 3,
    name: 'The Communicator',
    description: 'Number 3 represents creativity, self-expression, and communication. Those with this number are artistic, optimistic, and have a natural gift for words. They bring joy and inspiration to others through their creative talents.',
    traits: ['Creative', 'Expressive', 'Optimistic', 'Sociable', 'Artistic'],
    strengths: ['Communication', 'Creativity', 'Charm', 'Enthusiasm', 'Inspiration'],
    weaknesses: ['Scattered', 'Superficial', 'Moody', 'Extravagant', 'Unfocused'],
    careers: ['Writer', 'Artist', 'Performer', 'Designer', 'Entertainer'],
    compatibility: [3, 6, 9],
  },
  {
    number: 4,
    name: 'The Builder',
    description: 'Number 4 represents stability, structure, and hard work. Those with this number are practical, reliable, and dedicated to building solid foundations. They value tradition, order, and systematic approaches to life.',
    traits: ['Practical', 'Organized', 'Hardworking', 'Reliable', 'Traditional'],
    strengths: ['Discipline', 'Dependability', 'Loyalty', 'Persistence', 'Organization'],
    weaknesses: ['Rigid', 'Stubborn', 'Overly serious', 'Resistant to change', 'Dull'],
    careers: ['Accountant', 'Engineer', 'Architect', 'Manager', 'Administrator'],
    compatibility: [2, 4, 8],
  },
  {
    number: 5,
    name: 'The Adventurer',
    description: 'Number 5 represents freedom, change, and adventure. Those with this number are dynamic, versatile, and crave variety in life. They are natural explorers who embrace change and seek new experiences.',
    traits: ['Adventurous', 'Versatile', 'Freedom-loving', 'Dynamic', 'Curious'],
    strengths: ['Adaptability', 'Resourcefulness', 'Energy', 'Progressive thinking', 'Versatility'],
    weaknesses: ['Restless', 'Impulsive', 'Irresponsible', 'Inconsistent', 'Overindulgent'],
    careers: ['Travel guide', 'Entrepreneur', 'Journalist', 'Salesperson', 'Marketing specialist'],
    compatibility: [1, 5, 7],
  },
  {
    number: 6,
    name: 'The Nurturer',
    description: 'Number 6 represents love, responsibility, and nurturing. Those with this number are caring, compassionate individuals who value family and community. They are natural healers and protectors who create harmony in their environments.',
    traits: ['Caring', 'Responsible', 'Nurturing', 'Compassionate', 'Protective'],
    strengths: ['Compassion', 'Responsibility', 'Harmony', 'Balance', 'Service'],
    weaknesses: ['Anxious', 'Worry-prone', 'Interfering', 'Self-righteous', 'Overprotective'],
    careers: ['Teacher', 'Nurse', 'Counselor', 'Interior designer', 'Social worker'],
    compatibility: [3, 6, 9],
  },
  {
    number: 7,
    name: 'The Seeker',
    description: 'Number 7 represents wisdom, spirituality, and introspection. Those with this number are analytical, philosophical, and seek deeper truths. They are natural researchers and thinkers who value knowledge and understanding.',
    traits: ['Analytical', 'Spiritual', 'Introspective', 'Wise', 'Mysterious'],
    strengths: ['Intelligence', 'Intuition', 'Analysis', 'Spirituality', 'Perfectionism'],
    weaknesses: ['Aloof', 'Secretive', 'Pessimistic', 'Suspicious', 'Isolated'],
    careers: ['Scientist', 'Researcher', 'Analyst', 'Philosopher', 'Spiritual teacher'],
    compatibility: [1, 5, 7],
  },
  {
    number: 8,
    name: 'The Powerhouse',
    description: 'Number 8 represents power, success, and material abundance. Those with this number are ambitious, confident, and have strong business acumen. They are natural leaders in the material world who achieve great success.',
    traits: ['Ambitious', 'Powerful', 'Successful', 'Authoritative', 'Business-minded'],
    strengths: ['Leadership', 'Executive ability', 'Financial acumen', 'Efficiency', 'Organization'],
    weaknesses: ['Materialistic', 'Controlling', 'Workaholic', 'Insensitive', 'Impatient'],
    careers: ['Executive', 'Banker', 'Investor', 'Politician', 'Business owner'],
    compatibility: [2, 4, 8],
  },
  {
    number: 9,
    name: 'The Humanitarian',
    description: 'Number 9 represents compassion, idealism, and universal love. Those with this number are humanitarian, selfless, and dedicated to making the world a better place. They are wise, compassionate souls with broad perspectives.',
    traits: ['Compassionate', 'Humanitarian', 'Idealistic', 'Generous', 'Wise'],
    strengths: ['Compassion', 'Tolerance', 'Generosity', 'Selflessness', 'Wisdom'],
    weaknesses: ['Impractical', 'Financially careless', 'Moody', 'Scattered', 'Aimless'],
    careers: ['Humanitarian worker', 'Artist', 'Healer', 'Teacher', 'Counselor'],
    compatibility: [3, 6, 9],
  },
  {
    number: 11,
    name: 'The Illuminator',
    description: 'Master Number 11 represents spiritual illumination, intuition, and inspiration. Those with this number are highly intuitive, visionary individuals with great spiritual insight. They are meant to inspire and enlighten others.',
    traits: ['Intuitive', 'Spiritual', 'Visionary', 'Inspirational', 'Idealistic'],
    strengths: ['Intuition', 'Inspiration', 'Spiritual insight', 'Charisma', 'Idealism'],
    weaknesses: ['Nervous energy', 'Impractical', 'Overly sensitive', 'Anxious', 'Self-critical'],
    careers: ['Spiritual teacher', 'Counselor', 'Artist', 'Inventor', 'Motivational speaker'],
    compatibility: [2, 11, 22],
  },
  {
    number: 22,
    name: 'The Master Builder',
    description: 'Master Number 22 represents the ability to turn dreams into reality on a grand scale. Those with this number are master builders who can manifest great visions into practical reality. They combine spiritual insight with practical application.',
    traits: ['Visionary', 'Practical', 'Powerful', 'Disciplined', 'Master builder'],
    strengths: ['Manifestation', 'Leadership', 'Practicality', 'Vision', 'Organization'],
    weaknesses: ['Overwhelming pressure', 'All or nothing', 'Workaholic', 'Demanding', 'Stressed'],
    careers: ['Architect', 'International business', 'Planner', 'Leader', 'Environmentalist'],
    compatibility: [4, 11, 22],
  },
  {
    number: 33,
    name: 'The Master Teacher',
    description: 'Master Number 33 represents the master teacher and spiritual uplifter. Those with this number are devoted to uplifting humanity through teaching, healing, and service. They embody unconditional love and compassion.',
    traits: ['Compassionate', 'Nurturing', 'Teaching', 'Healing', 'Selfless'],
    strengths: ['Universal love', 'Teaching', 'Healing', 'Nurturing', 'Service'],
    weaknesses: ['Martyr complex', 'Overgiving', 'Neglecting self', 'Burdened', 'Drained'],
    careers: ['Teacher', 'Healer', 'Spiritual leader', 'Humanitarian', 'Counselor'],
    compatibility: [6, 9, 33],
  },
];

export function calculateLifePathNumber(birthDate: Date): number {
  const year = birthDate.getFullYear();
  const month = birthDate.getMonth() + 1;
  const day = birthDate.getDate();

  // Reduce each component
  const reducedDay = reduceToSingleDigit(day);
  const reducedMonth = reduceToSingleDigit(month);
  const reducedYear = reduceToSingleDigit(year);

  // Add them together
  const sum = reducedDay + reducedMonth + reducedYear;

  // Reduce to single digit or master number
  return reduceToMasterOrSingleDigit(sum);
}

export function calculateExpressionNumber(fullName: string): number {
  const letterValues: { [key: string]: number } = {
    A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
    J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
    S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8,
  };

  const normalizedName = fullName.toUpperCase().replace(/[^A-Z]/g, '');
  let sum = 0;

  for (const letter of normalizedName) {
    sum += letterValues[letter] || 0;
  }

  return reduceToMasterOrSingleDigit(sum);
}

function reduceToSingleDigit(num: number): number {
  while (num > 9) {
    num = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
  }
  return num;
}

function reduceToMasterOrSingleDigit(num: number): number {
  // Check for master numbers first
  if (num === 11 || num === 22 || num === 33) {
    return num;
  }

  while (num > 9) {
    const newNum = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);

    // Check if the reduced number is a master number
    if (newNum === 11 || newNum === 22 || newNum === 33) {
      return newNum;
    }

    num = newNum;
  }

  return num;
}

export function getNumerologyNumber(num: number): NumerologyNumber | undefined {
  return numerologyNumbers.find(n => n.number === num);
}
