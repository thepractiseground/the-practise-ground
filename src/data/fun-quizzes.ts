export interface FunQuestion {
  question: string;
  options: string[];
  answer: "A" | "B" | "C" | "D";
}

export interface FunQuiz {
  slug: string;
  title: string;
  description: string;
  category: string;
  color: string;
  emoji: string;
  questions: FunQuestion[];
}

export const funQuizzes: FunQuiz[] = [
  {
    slug: "world-capitals-landmarks",
    title: "World Capitals & Landmarks",
    description: "From the Eiffel Tower to the Great Wall — how well do you know the world's most famous cities and landmarks?",
    category: "Geography",
    color: "amber",
    emoji: "🌍",
    questions: [
      {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        answer: "C",
      },
      {
        question: "The Colosseum is a famous landmark in which city?",
        options: ["Athens", "Rome", "Istanbul", "Madrid"],
        answer: "B",
      },
      {
        question: "Which country is home to Machu Picchu?",
        options: ["Mexico", "Colombia", "Peru", "Chile"],
        answer: "C",
      },
      {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
        answer: "D",
      },
      {
        question: "The Statue of Liberty was a gift from which country?",
        options: ["United Kingdom", "France", "Germany", "Spain"],
        answer: "B",
      },
      {
        question: "Which city is known as the 'City of Canals'?",
        options: ["Amsterdam", "Venice", "Bangkok", "Bruges"],
        answer: "B",
      },
      {
        question: "What is the capital of South Korea?",
        options: ["Busan", "Incheon", "Seoul", "Daegu"],
        answer: "C",
      },
      {
        question: "The Great Sphinx stands near the pyramids in which country?",
        options: ["Sudan", "Libya", "Egypt", "Jordan"],
        answer: "C",
      },
      {
        question: "What is the capital of Brazil?",
        options: ["Rio de Janeiro", "Sao Paulo", "Brasilia", "Salvador"],
        answer: "C",
      },
      {
        question: "In which city would you find the Blue Mosque?",
        options: ["Cairo", "Tehran", "Istanbul", "Marrakech"],
        answer: "C",
      },
      {
        question: "What is the capital of New Zealand?",
        options: ["Auckland", "Christchurch", "Wellington", "Queenstown"],
        answer: "C",
      },
      {
        question: "The Petronas Twin Towers are located in which city?",
        options: ["Singapore", "Kuala Lumpur", "Jakarta", "Bangkok"],
        answer: "B",
      },
      {
        question: "What is the capital of Turkey?",
        options: ["Istanbul", "Ankara", "Izmir", "Antalya"],
        answer: "B",
      },
      {
        question: "Which landmark is located on the island of Manhattan?",
        options: ["Golden Gate Bridge", "Space Needle", "Empire State Building", "Willis Tower"],
        answer: "C",
      },
      {
        question: "What is the capital of Kenya?",
        options: ["Lagos", "Nairobi", "Addis Ababa", "Kampala"],
        answer: "B",
      },
    ],
  },
  {
    slug: "space-solar-system",
    title: "Space & Solar System Facts",
    description: "Planets, stars, and everything beyond — test your knowledge of the universe we live in.",
    category: "Science & Nature",
    color: "violet",
    emoji: "🚀",
    questions: [
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "B",
      },
      {
        question: "How many planets are in our solar system?",
        options: ["7", "8", "9", "10"],
        answer: "B",
      },
      {
        question: "What is the largest planet in our solar system?",
        options: ["Saturn", "Neptune", "Jupiter", "Uranus"],
        answer: "C",
      },
      {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Earth", "Mercury", "Mars"],
        answer: "C",
      },
      {
        question: "What is the name of Earth's natural satellite?",
        options: ["Titan", "Europa", "The Moon", "Phobos"],
        answer: "C",
      },
      {
        question: "Which planet has the most visible rings?",
        options: ["Jupiter", "Uranus", "Neptune", "Saturn"],
        answer: "D",
      },
      {
        question: "What type of star is our Sun?",
        options: ["Red Giant", "White Dwarf", "Yellow Dwarf", "Blue Giant"],
        answer: "C",
      },
      {
        question: "Which planet rotates on its side?",
        options: ["Neptune", "Uranus", "Pluto", "Venus"],
        answer: "B",
      },
      {
        question: "What is the hottest planet in our solar system?",
        options: ["Mercury", "Venus", "Mars", "Jupiter"],
        answer: "B",
      },
      {
        question: "How long does it take light from the Sun to reach Earth?",
        options: ["About 8 seconds", "About 8 minutes", "About 8 hours", "About 80 minutes"],
        answer: "B",
      },
      {
        question: "Which space agency launched the Hubble Space Telescope?",
        options: ["ESA", "NASA", "ISRO", "Roscosmos"],
        answer: "B",
      },
      {
        question: "What is the largest moon in the solar system?",
        options: ["Titan", "Europa", "Ganymede", "Callisto"],
        answer: "C",
      },
      {
        question: "Which planet has the shortest day (fastest rotation)?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "C",
      },
      {
        question: "What is a group of stars forming a pattern called?",
        options: ["Galaxy", "Nebula", "Constellation", "Asteroid belt"],
        answer: "C",
      },
      {
        question: "Who was the first human to walk on the Moon?",
        options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "John Glenn"],
        answer: "C",
      },
    ],
  },
  {
    slug: "famous-inventions",
    title: "Famous Inventions & Their Inventors",
    description: "From the light bulb to the internet — match the world-changing inventions to the people who created them.",
    category: "History & Culture",
    color: "rose",
    emoji: "💡",
    questions: [
      {
        question: "Who is credited with inventing the telephone?",
        options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Guglielmo Marconi"],
        answer: "C",
      },
      {
        question: "What did the Wright Brothers famously invent?",
        options: ["The automobile", "The aeroplane", "The helicopter", "The hot air balloon"],
        answer: "B",
      },
      {
        question: "Who invented the World Wide Web?",
        options: ["Steve Jobs", "Bill Gates", "Tim Berners-Lee", "Mark Zuckerberg"],
        answer: "C",
      },
      {
        question: "The printing press was invented by which person?",
        options: ["Leonardo da Vinci", "Johannes Gutenberg", "Galileo Galilei", "Isaac Newton"],
        answer: "B",
      },
      {
        question: "Who is known for developing the theory of relativity?",
        options: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Stephen Hawking"],
        answer: "C",
      },
      {
        question: "What did Alexander Fleming discover?",
        options: ["Insulin", "Penicillin", "Aspirin", "Vaccination"],
        answer: "B",
      },
      {
        question: "Who invented the first practical light bulb?",
        options: ["Benjamin Franklin", "Nikola Tesla", "Thomas Edison", "Michael Faraday"],
        answer: "C",
      },
      {
        question: "The steam engine was significantly improved by which inventor?",
        options: ["James Watt", "George Stephenson", "Robert Fulton", "Henry Ford"],
        answer: "A",
      },
      {
        question: "Who is credited with inventing the radio?",
        options: ["Alexander Graham Bell", "Guglielmo Marconi", "Thomas Edison", "Nikola Tesla"],
        answer: "B",
      },
      {
        question: "What did Marie Curie discover?",
        options: ["Electricity", "Gravity", "Radioactivity (Radium & Polonium)", "X-rays"],
        answer: "C",
      },
      {
        question: "The first successful vaccine was developed for which disease?",
        options: ["Polio", "Smallpox", "Measles", "Cholera"],
        answer: "B",
      },
      {
        question: "Who invented dynamite?",
        options: ["Alfred Nobel", "Samuel Morse", "Louis Pasteur", "Robert Oppenheimer"],
        answer: "A",
      },
      {
        question: "The first programmable computer was invented by which person?",
        options: ["Alan Turing", "Charles Babbage", "Ada Lovelace", "John von Neumann"],
        answer: "B",
      },
      {
        question: "What did Galileo Galilei improve to observe the stars?",
        options: ["The microscope", "The compass", "The telescope", "The astrolabe"],
        answer: "C",
      },
      {
        question: "Who invented the cotton gin?",
        options: ["Eli Whitney", "Samuel Slater", "James Hargreaves", "Edmund Cartwright"],
        answer: "A",
      },
    ],
  },
  {
    slug: "flags-of-the-world",
    title: "Flags of the World",
    description: "Stripes, stars, and crescents — can you match these flags to the right country?",
    category: "Geography",
    color: "amber",
    emoji: "🏳️",
    questions: [
      {
        question: "Which country's flag features a red circle on a white background?",
        options: ["South Korea", "Bangladesh", "Japan", "Turkey"],
        answer: "C",
      },
      {
        question: "The Union Jack is the flag of which country?",
        options: ["Australia", "United Kingdom", "New Zealand", "Canada"],
        answer: "B",
      },
      {
        question: "Which country has a maple leaf on its flag?",
        options: ["Ireland", "Finland", "Canada", "Lebanon"],
        answer: "C",
      },
      {
        question: "Which country's flag is the only one that is not rectangular?",
        options: ["Switzerland", "Nepal", "Vatican City", "Bhutan"],
        answer: "B",
      },
      {
        question: "The green, white and saffron tricolour with a blue wheel belongs to which country?",
        options: ["Ireland", "Italy", "India", "Ivory Coast"],
        answer: "C",
      },
      {
        question: "Which country's flag features a red star and crescent on a red background?",
        options: ["Pakistan", "Turkey", "Algeria", "Tunisia"],
        answer: "B",
      },
      {
        question: "The flag with 50 stars and 13 stripes belongs to which country?",
        options: ["Australia", "Brazil", "United States", "Malaysia"],
        answer: "C",
      },
      {
        question: "Which African country has a flag with green, yellow, and red horizontal stripes?",
        options: ["Nigeria", "Ethiopia", "Ghana", "Kenya"],
        answer: "B",
      },
      {
        question: "Which country's flag features a dragon?",
        options: ["China", "Wales", "Bhutan", "Both Wales and Bhutan"],
        answer: "D",
      },
      {
        question: "The blue and white striped flag with a Star of David belongs to which country?",
        options: ["Greece", "Argentina", "Israel", "Honduras"],
        answer: "C",
      },
      {
        question: "Which Scandinavian country has a red flag with a white cross?",
        options: ["Sweden", "Norway", "Denmark", "Finland"],
        answer: "C",
      },
      {
        question: "Which country has a flag with a green background and a white crescent and star?",
        options: ["Saudi Arabia", "Pakistan", "Libya", "Turkmenistan"],
        answer: "B",
      },
      {
        question: "The flag of Brazil features which shape at its centre?",
        options: ["A star", "A diamond", "A triangle", "A circle"],
        answer: "B",
      },
      {
        question: "Which country's flag is completely green with no other colours or symbols?",
        options: ["Saudi Arabia", "Libya (1977-2011)", "Nigeria", "Bangladesh"],
        answer: "B",
      },
      {
        question: "The Southern Cross constellation appears on the flags of which two countries?",
        options: ["India and Sri Lanka", "Australia and New Zealand", "Brazil and Chile", "South Africa and Kenya"],
        answer: "B",
      },
    ],
  },
  {
    slug: "idioms-meanings",
    title: "Idioms & Their Meanings",
    description: "Do you know what it means to 'break the ice' or 'hit the nail on the head'? Find out!",
    category: "Language & Words",
    color: "lime",
    emoji: "📖",
    questions: [
      {
        question: "What does the idiom 'break the ice' mean?",
        options: ["To cause damage", "To start a conversation in a social setting", "To solve a mystery", "To freeze something"],
        answer: "B",
      },
      {
        question: "What does 'a piece of cake' mean?",
        options: ["Something delicious", "Something very easy", "A small portion", "A reward"],
        answer: "B",
      },
      {
        question: "What does 'let the cat out of the bag' mean?",
        options: ["To release an animal", "To start a fight", "To reveal a secret", "To give a gift"],
        answer: "C",
      },
      {
        question: "What does 'hit the nail on the head' mean?",
        options: ["To build something", "To hurt yourself", "To describe exactly what is correct", "To make a mistake"],
        answer: "C",
      },
      {
        question: "What does 'once in a blue moon' mean?",
        options: ["During nighttime", "Very rarely", "When the moon is blue", "Every month"],
        answer: "B",
      },
      {
        question: "What does the idiom 'burning the midnight oil' mean?",
        options: ["Wasting resources", "Working late into the night", "Cooking dinner", "Starting a fire"],
        answer: "B",
      },
      {
        question: "What does 'the ball is in your court' mean?",
        options: ["You are playing tennis", "It is your turn to take action", "You won the game", "The situation is unfair"],
        answer: "B",
      },
      {
        question: "What does 'barking up the wrong tree' mean?",
        options: ["Being afraid of dogs", "Making a wrong assumption", "Climbing a tree", "Shouting loudly"],
        answer: "B",
      },
      {
        question: "What does 'cost an arm and a leg' mean?",
        options: ["To be injured", "To be very cheap", "To be very expensive", "To require surgery"],
        answer: "C",
      },
      {
        question: "What does 'bite the bullet' mean?",
        options: ["To eat something hard", "To face a difficult situation bravely", "To stop talking", "To go to the dentist"],
        answer: "B",
      },
      {
        question: "What does 'spill the beans' mean?",
        options: ["To make a mess", "To cook poorly", "To reveal secret information", "To waste food"],
        answer: "C",
      },
      {
        question: "What does 'under the weather' mean?",
        options: ["Standing in the rain", "Feeling unwell", "Being outdoors", "Checking the forecast"],
        answer: "B",
      },
      {
        question: "What does 'the best of both worlds' mean?",
        options: ["Living in two countries", "Having advantages of two different things", "Travelling a lot", "Being very lucky"],
        answer: "B",
      },
      {
        question: "What does 'when pigs fly' mean?",
        options: ["On a farm", "During a miracle", "Something that will never happen", "When animals evolve"],
        answer: "C",
      },
      {
        question: "What does 'add fuel to the fire' mean?",
        options: ["To help someone cook", "To make a bad situation worse", "To warm up a room", "To light a campfire"],
        answer: "B",
      },
    ],
  },
];

export function getFunQuiz(slug: string): FunQuiz | undefined {
  return funQuizzes.find((q) => q.slug === slug);
}

export function getAllFunQuizSlugs(): string[] {
  return funQuizzes.map((q) => q.slug);
}
