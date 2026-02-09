// Deterministic horoscope generator using seeded random
function seededRandom(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  const x = Math.sin(hash) * 10000;
  return x - Math.floor(x);
}

function getRandomItem<T>(items: T[], seed: string, offset: number = 0): T {
  const random = seededRandom(seed + offset);
  const index = Math.floor(random * items.length);
  return items[index];
}

// Sentence pools for horoscope generation
const loveFragments = [
  'Your heart is open to new possibilities today.',
  'Romance takes an unexpected turn that brings joy.',
  'A meaningful conversation deepens an important relationship.',
  'Your charm is irresistible to those around you.',
  'Love energy surrounds you, making this a perfect day for connection.',
  'An old flame may cross your mind, bringing nostalgic feelings.',
  'Your partner appreciates your efforts more than you realize.',
  'Single? Today brings exciting potential for new romance.',
  'Trust your heart when making important relationship decisions.',
  'Vulnerability in relationships leads to deeper intimacy.',
  'Your compassion strengthens bonds with loved ones.',
  'A surprise gesture of affection brightens your day.',
  'Communication flows easily in all your relationships.',
  'Past relationship patterns become clear, helping you grow.',
  'Your confidence attracts positive romantic attention.',
  'Quality time with your partner creates lasting memories.',
  'A friendship may develop into something more meaningful.',
  'Your emotional intuition guides you well in matters of the heart.',
  'Love requires patience, and today teaches valuable lessons.',
  'Your authentic self is your most attractive quality.',
  'Romantic opportunities appear in unexpected places.',
  'A heartfelt compliment has more impact than you think.',
  'Your capacity for love expands in beautiful ways.',
  'Trust issues begin to resolve through honest dialogue.',
  'Playfulness and humor strengthen your romantic connections.',
  'Someone sees qualities in you that you overlook.',
  'Your loyalty and devotion are deeply appreciated.',
  'A bold romantic gesture pays off handsomely.',
  'Past hurts begin to heal, opening your heart.',
  'Your relationship goals become clearer today.',
  'Shared laughter creates powerful bonding moments.',
  'Your needs in relationships deserve to be expressed.',
  'A chance encounter sparks interesting possibilities.',
  'Your warmth and kindness draw others close.',
  'Romantic timing aligns perfectly in your favor.',
  'Deep conversations reveal important compatibilities.',
  'Your intuition about someone proves accurate.',
  'Love grows stronger through small daily acts.',
  'A relationship milestone approaches with positive energy.',
  'Your heart knows what your mind is still processing.',
  'Physical attraction intensifies in a current relationship.',
  'Your openness to love creates magnetic energy.',
  'A meaningful gift or gesture speaks volumes.',
  'Relationship boundaries become clearer and healthier.',
  'Your patience in love is about to be rewarded.',
  'Emotional walls come down, allowing true connection.',
  'A romantic dream may contain important insights.',
  'Your capacity to forgive strengthens relationships.',
  'Love takes courage, and you have plenty today.',
  'Your unique qualities make you wonderfully lovable.',
];

const careerFragments = [
  'Professional opportunities align with your skills today.',
  'Your hard work begins to receive well-deserved recognition.',
  'A creative solution to a work challenge presents itself.',
  'Networking connections prove valuable for future growth.',
  'Your leadership abilities shine in collaborative settings.',
  'Financial improvement comes through focused effort.',
  'A mentor figure offers guidance that shifts your perspective.',
  'Your innovative ideas capture the attention of decision-makers.',
  'Patience with workplace challenges yields positive results.',
  'Career goals become clearer, illuminating your path forward.',
  'Your expertise is valued more than you realize.',
  'A professional risk calculated carefully pays dividends.',
  'Workplace relationships strengthen through authentic communication.',
  'Your organizational skills bring order to chaos.',
  'New responsibilities showcase your capabilities beautifully.',
  'Financial planning today sets up future security.',
  'Your work-life balance improves through boundary-setting.',
  'Professional development opportunities appear unexpectedly.',
  'Your attention to detail prevents costly mistakes.',
  'Collaboration proves more effective than solo efforts.',
  'A work project reaches an important milestone.',
  'Your professional reputation benefits from consistent quality.',
  'Career advancement requires bold action you are ready to take.',
  'Financial decisions made today have lasting positive impact.',
  'Your problem-solving abilities impress colleagues and superiors.',
  'A side project gains momentum and shows promise.',
  'Your professional network expands in meaningful ways.',
  'Workplace conflicts resolve through diplomatic handling.',
  'Your productivity soars when you eliminate distractions.',
  'Career satisfaction increases as values align with work.',
  'A long-term professional goal becomes more attainable.',
  'Your negotiation skills secure favorable outcomes.',
  'Financial opportunities require careful evaluation before proceeding.',
  'Your professional intuition guides important decisions.',
  'Workplace innovation comes from trusting your instincts.',
  'A career transition you have considered gains clarity.',
  'Your ability to adapt serves you well professionally.',
  'Financial discipline today prevents future stress.',
  'Professional challenges reveal hidden strengths.',
  'Your work ethic inspires others on your team.',
  'A business partnership forms under promising conditions.',
  'Your time management improvements increase effectiveness.',
  'Career momentum builds through consistent daily effort.',
  'Financial abundance flows from aligned actions.',
  'Your professional confidence grows with each success.',
  'Workplace recognition comes for past contributions.',
  'A professional goal requires breaking into smaller steps.',
  'Your unique perspective adds value in work situations.',
  'Career opportunities favor those who stay prepared.',
  'Your professional growth accelerates through strategic focus.',
];

const healthFragments = [
  'Physical energy increases when you prioritize rest.',
  'Your body communicates needs that deserve attention.',
  'Mental clarity improves through mindfulness practices.',
  'A healthy habit you start today creates lasting benefits.',
  'Your immune system strengthens with proper self-care.',
  'Stress reduction becomes a priority for overall wellness.',
  'Physical activity brings both energy and mental balance.',
  'Your intuition guides wise health-related decisions.',
  'Sleep quality improves, enhancing daytime vitality.',
  'Nutritional choices today impact how you feel tomorrow.',
  'Your body responds positively to gentle movement.',
  'Mental health benefits from connection with nature.',
  'A wellness routine gains consistency and shows results.',
  'Your energy levels balance through better hydration.',
  'Physical discomfort signals a need for lifestyle adjustment.',
  'Mental fog clears when you reduce information overload.',
  'Your body thanks you for choosing nourishing foods.',
  'Preventive health measures taken now pay dividends later.',
  'Energy management requires honoring your natural rhythms.',
  'Your strength builds gradually through regular practice.',
  'Mental resilience grows from facing challenges mindfully.',
  'A health concern resolves with consistent attention.',
  'Your vitality increases when stress decreases.',
  'Physical flexibility improves with dedicated stretching.',
  'Mental peace comes from releasing what you cannot control.',
  'Your wellness journey progresses at exactly the right pace.',
  'Energy conservation today prevents burnout tomorrow.',
  'A health professional provides valuable insights.',
  'Your body heals when given adequate rest and nutrition.',
  'Mental clutter clears through meditation or journaling.',
  'Physical symptoms ease with proper stress management.',
  'Your health goals become achievable through small steps.',
  'Energy levels stabilize with consistent daily routines.',
  'Mental sharpness increases with adequate brain breaks.',
  'Your body craves movement after periods of stillness.',
  'Wellness improves when you listen to bodily signals.',
  'Emotional health strengthens through self-compassion.',
  'Your energy reserves replenish with quality downtime.',
  'Physical strength surprises you during challenging activities.',
  'Mental wellness benefits from limiting negative inputs.',
  'Your health improves when priorities align with values.',
  'Energy management becomes easier with clear boundaries.',
  'A wellness practice you have neglected calls for attention.',
  'Your vitality reflects the care you invest in yourself.',
  'Physical recovery accelerates with proper rest intervals.',
  'Mental health thrives in environments you can control.',
  'Your body responds beautifully to consistent self-care.',
  'Energy flows freely when stress blockages release.',
  'A health goal reached creates momentum for further progress.',
  'Your overall wellness benefits from balanced living.',
];

const generalFragments = [
  'Today brings opportunities for personal growth and learning.',
  'Your intuition is particularly strong and trustworthy.',
  'Unexpected positive developments surprise and delight you.',
  'A problem that seemed complex reveals a simple solution.',
  'Your positive attitude attracts favorable circumstances.',
  'Important insights arrive through casual conversations.',
  'The universe supports your highest intentions today.',
  'A creative project gains momentum and clarity.',
  'Your generosity creates ripple effects you may not see.',
  'Old patterns break as new possibilities emerge.',
  'Today favors planning over impulsive action.',
  'Your unique perspective offers value others appreciate.',
  'A fortunate coincidence works in your favor.',
  'Patience with current circumstances yields future rewards.',
  'Your authenticity attracts people and situations that resonate.',
  'A lesson from the past proves useful in present situations.',
  'Today encourages reflection before making major decisions.',
  'Your adaptability helps navigate changing circumstances smoothly.',
  'Small acts of kindness create meaningful impacts.',
  'A goal you set earlier shows signs of manifestation.',
  'Your creativity flourishes when you make time for play.',
  'Important information comes from an unexpected source.',
  'Today supports releasing what no longer serves you.',
  'Your inner wisdom knows exactly what you need right now.',
  'A fresh perspective on an old situation changes everything.',
  'Today favors collaboration over competition.',
  'Your presence makes a positive difference in others\' lives.',
  'A risk you have considered deserves serious evaluation.',
  'Today brings clarity to a confusing situation.',
  'Your emotional intelligence guides social interactions beautifully.',
  'A personal boundary you set strengthens all your relationships.',
  'Today rewards those who trust the process.',
  'Your talents shine brightest when you share them generously.',
  'A meaningful synchronicity captures your attention.',
  'Today encourages balance in all areas of life.',
  'Your growth happens in ways you may not immediately recognize.',
  'A decision made today has long-term positive implications.',
  'Today supports healing old wounds and moving forward.',
  'Your enthusiasm inspires others to take positive action.',
  'A challenge transforms into an opportunity with shifted perspective.',
  'Today favors quality over quantity in all endeavors.',
  'Your inner child seeks joy and playfulness today.',
  'A promise made to yourself deserves to be kept.',
  'Today brings closure to something that has been incomplete.',
  'Your wisdom grows through both success and setbacks.',
  'A new beginning emerges from an ending you may not have chosen.',
  'Today encourages gratitude for simple blessings.',
  'Your path forward becomes illuminated by inner clarity.',
  'A chance to make a difference presents itself unexpectedly.',
  'Today reminds you that you are exactly where you need to be.',
];

export function generateDailyHoroscope(sign: string, date: Date): string {
  // Create unique seed from date and sign
  const dateStr = date.toISOString().split('T')[0]; // YYYY-MM-DD
  const seed = `${sign}-${dateStr}`;

  // Select one fragment from each category
  const love = getRandomItem(loveFragments, seed, 1);
  const career = getRandomItem(careerFragments, seed, 2);
  const health = getRandomItem(healthFragments, seed, 3);
  const general = getRandomItem(generalFragments, seed, 4);

  // Randomly select 3-4 fragments to create variety
  const fragmentCount = seededRandom(seed + '5') > 0.5 ? 4 : 3;
  const allFragments = [love, career, health, general];

  // Shuffle and take the first fragmentCount items
  const selectedFragments: string[] = [];
  const indices = [0, 1, 2, 3];
  for (let i = 0; i < fragmentCount; i++) {
    const randomIndex = Math.floor(seededRandom(seed + `6${i}`) * indices.length);
    selectedFragments.push(allFragments[indices[randomIndex]]);
    indices.splice(randomIndex, 1);
  }

  return selectedFragments.join(' ');
}

export function getLuckyDay(sign: string, date: Date): string {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const dateStr = date.toISOString().split('T')[0];
  return getRandomItem(days, `${sign}-${dateStr}-day`);
}

export function getLuckyColor(sign: string, date: Date): string {
  const colors = [
    'Purple', 'Gold', 'Silver', 'Blue', 'Green', 'Red',
    'Orange', 'Yellow', 'Pink', 'Turquoise', 'Indigo', 'White'
  ];
  const dateStr = date.toISOString().split('T')[0];
  return getRandomItem(colors, `${sign}-${dateStr}-color`);
}

export function getDailyLuckyNumbers(sign: string, date: Date, count: number = 3): number[] {
  const dateStr = date.toISOString().split('T')[0];
  const numbers: number[] = [];

  for (let i = 0; i < count; i++) {
    const num = Math.floor(seededRandom(`${sign}-${dateStr}-num${i}`) * 99) + 1;
    numbers.push(num);
  }

  return numbers.sort((a, b) => a - b);
}
