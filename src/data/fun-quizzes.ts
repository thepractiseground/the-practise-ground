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
  {
    slug: "animal-kingdom",
    title: "Animal Kingdom Facts",
    description: "From the fastest land animal to the largest ocean creature — how much do you know about the animal world?",
    category: "Science & Nature",
    color: "violet",
    emoji: "🦁",
    questions: [
      {
        question: "What is the fastest land animal?",
        options: ["Lion", "Cheetah", "Horse", "Greyhound"],
        answer: "B",
      },
      {
        question: "Which animal is known for having the best memory?",
        options: ["Dog", "Dolphin", "Elephant", "Parrot"],
        answer: "C",
      },
      {
        question: "How many legs does an octopus have?",
        options: ["6", "8", "10", "12"],
        answer: "B",
      },
      {
        question: "What is the largest living species of lizard?",
        options: ["Iguana", "Komodo Dragon", "Monitor Lizard", "Gila Monster"],
        answer: "B",
      },
      {
        question: "Which bird is known for its ability to mimic human speech?",
        options: ["Eagle", "Parrot", "Penguin", "Flamingo"],
        answer: "B",
      },
      {
        question: "What is a group of wolves called?",
        options: ["A herd", "A flock", "A pack", "A colony"],
        answer: "C",
      },
      {
        question: "Which animal can sleep for up to 22 hours a day?",
        options: ["Sloth", "Koala", "Cat", "Panda"],
        answer: "B",
      },
      {
        question: "What is the largest animal on Earth?",
        options: ["African Elephant", "Blue Whale", "Giraffe", "Whale Shark"],
        answer: "B",
      },
      {
        question: "Which insect is known for producing honey?",
        options: ["Ant", "Wasp", "Honeybee", "Butterfly"],
        answer: "C",
      },
      {
        question: "How many hearts does an octopus have?",
        options: ["1", "2", "3", "4"],
        answer: "C",
      },
      {
        question: "Which animal is the tallest in the world?",
        options: ["Elephant", "Giraffe", "Ostrich", "Camel"],
        answer: "B",
      },
      {
        question: "What is a baby kangaroo called?",
        options: ["Cub", "Kit", "Joey", "Pup"],
        answer: "C",
      },
      {
        question: "Which marine animal is known for changing colour to camouflage?",
        options: ["Jellyfish", "Starfish", "Chameleon fish", "Cuttlefish"],
        answer: "D",
      },
      {
        question: "Which animal has the longest lifespan?",
        options: ["Elephant", "Tortoise", "Whale", "Parrot"],
        answer: "B",
      },
      {
        question: "What type of animal is a Komodo dragon?",
        options: ["Dinosaur", "Reptile", "Amphibian", "Mammal"],
        answer: "B",
      },
    ],
  },
  {
    slug: "human-body",
    title: "The Human Body",
    description: "Bones, muscles, organs and more — test what you know about the amazing human body.",
    category: "Science & Nature",
    color: "violet",
    emoji: "🫀",
    questions: [
      {
        question: "How many bones are in the adult human body?",
        options: ["186", "206", "256", "306"],
        answer: "B",
      },
      {
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Liver", "Skin", "Lungs"],
        answer: "C",
      },
      {
        question: "Which part of the body produces insulin?",
        options: ["Liver", "Kidney", "Pancreas", "Stomach"],
        answer: "C",
      },
      {
        question: "How many chambers does the human heart have?",
        options: ["2", "3", "4", "5"],
        answer: "C",
      },
      {
        question: "What is the smallest bone in the human body?",
        options: ["Stapes (in the ear)", "Metacarpal (in the hand)", "Phalanx (in the toe)", "Hyoid (in the throat)"],
        answer: "A",
      },
      {
        question: "Which blood type is known as the 'universal donor'?",
        options: ["A+", "B+", "AB+", "O-"],
        answer: "D",
      },
      {
        question: "What percentage of the human body is water?",
        options: ["About 40%", "About 50%", "About 60%", "About 80%"],
        answer: "C",
      },
      {
        question: "Which part of the brain controls balance and coordination?",
        options: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
        answer: "B",
      },
      {
        question: "How many teeth does a typical adult have?",
        options: ["28", "30", "32", "34"],
        answer: "C",
      },
      {
        question: "What carries oxygen in the blood?",
        options: ["White blood cells", "Platelets", "Plasma", "Red blood cells"],
        answer: "D",
      },
      {
        question: "Which organ is responsible for filtering blood?",
        options: ["Heart", "Lungs", "Kidneys", "Spleen"],
        answer: "C",
      },
      {
        question: "What is the hardest substance in the human body?",
        options: ["Bone", "Tooth enamel", "Cartilage", "Nail"],
        answer: "B",
      },
      {
        question: "How many muscles are approximately in the human body?",
        options: ["About 200", "About 400", "About 600", "About 800"],
        answer: "C",
      },
      {
        question: "What gas do we breathe out?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        answer: "C",
      },
      {
        question: "Which sense is most closely linked to memory?",
        options: ["Sight", "Hearing", "Smell", "Touch"],
        answer: "C",
      },
    ],
  },
  {
    slug: "ancient-civilisations",
    title: "Ancient Civilisations",
    description: "Pyramids, gladiators and empires — journey through the greatest civilisations in history.",
    category: "History & Culture",
    color: "rose",
    emoji: "🏛️",
    questions: [
      {
        question: "Which ancient civilisation built the pyramids at Giza?",
        options: ["Romans", "Greeks", "Egyptians", "Persians"],
        answer: "C",
      },
      {
        question: "What writing system did the ancient Mesopotamians use?",
        options: ["Hieroglyphics", "Cuneiform", "Sanskrit", "Latin script"],
        answer: "B",
      },
      {
        question: "The Colosseum was used for entertainment in which ancient civilisation?",
        options: ["Greek", "Roman", "Egyptian", "Chinese"],
        answer: "B",
      },
      {
        question: "Which ancient civilisation is credited with inventing paper?",
        options: ["Greek", "Indian", "Chinese", "Egyptian"],
        answer: "C",
      },
      {
        question: "What was the name of the famous queen of ancient Egypt?",
        options: ["Nefertiti", "Cleopatra", "Hatshepsut", "All of the above"],
        answer: "D",
      },
      {
        question: "The Indus Valley Civilisation was located in which modern-day region?",
        options: ["Iraq", "Egypt", "Pakistan and India", "China"],
        answer: "C",
      },
      {
        question: "What is the ancient Greek city-state famous for its warriors?",
        options: ["Athens", "Sparta", "Corinth", "Thebes"],
        answer: "B",
      },
      {
        question: "Which ancient civilisation developed the concept of zero?",
        options: ["Greek", "Roman", "Indian", "Chinese"],
        answer: "C",
      },
      {
        question: "The Great Wall was built to protect which ancient empire?",
        options: ["Mongol Empire", "Roman Empire", "Chinese Empire", "Persian Empire"],
        answer: "C",
      },
      {
        question: "What did ancient Romans use aqueducts for?",
        options: ["Defence", "Carrying water", "Trade routes", "Religious ceremonies"],
        answer: "B",
      },
      {
        question: "The Mayan civilisation was located in which part of the world?",
        options: ["Africa", "Asia", "Central America", "Europe"],
        answer: "C",
      },
      {
        question: "What material were Viking ships primarily made of?",
        options: ["Stone", "Iron", "Wood", "Clay"],
        answer: "C",
      },
      {
        question: "Which Greek philosopher taught Alexander the Great?",
        options: ["Socrates", "Plato", "Aristotle", "Pythagoras"],
        answer: "C",
      },
      {
        question: "What was the ancient Egyptian writing system called?",
        options: ["Cuneiform", "Hieroglyphics", "Runes", "Calligraphy"],
        answer: "B",
      },
      {
        question: "Which empire was the largest in ancient history?",
        options: ["Roman Empire", "Mongol Empire", "Persian Empire", "Chinese Empire"],
        answer: "B",
      },
    ],
  },
  {
    slug: "fun-with-numbers",
    title: "Fun With Numbers",
    description: "Quick mental maths, number patterns and cool number facts — can you crack them all?",
    category: "Fun Maths",
    color: "emerald",
    emoji: "🔢",
    questions: [
      {
        question: "What is 15% of 200?",
        options: ["15", "20", "25", "30"],
        answer: "D",
      },
      {
        question: "What is the next number in the sequence: 2, 6, 18, 54, ...?",
        options: ["108", "162", "72", "216"],
        answer: "B",
      },
      {
        question: "If you buy 3 items at $4.50 each, how much do you spend?",
        options: ["$12.00", "$13.50", "$14.50", "$15.00"],
        answer: "B",
      },
      {
        question: "What is the square root of 144?",
        options: ["10", "11", "12", "14"],
        answer: "C",
      },
      {
        question: "How many sides does a hexagon have?",
        options: ["5", "6", "7", "8"],
        answer: "B",
      },
      {
        question: "What is 7 x 8?",
        options: ["54", "56", "58", "64"],
        answer: "B",
      },
      {
        question: "If a pizza is cut into 8 equal slices and you eat 3, what fraction is left?",
        options: ["3/8", "5/8", "3/5", "5/3"],
        answer: "B",
      },
      {
        question: "What number is both a perfect square and a perfect cube below 100?",
        options: ["16", "36", "64", "81"],
        answer: "C",
      },
      {
        question: "What is 1000 divided by 25?",
        options: ["25", "40", "50", "45"],
        answer: "B",
      },
      {
        question: "If a train travels at 90 km/h, how far does it go in 40 minutes?",
        options: ["50 km", "55 km", "60 km", "65 km"],
        answer: "C",
      },
      {
        question: "What is the sum of the first 10 natural numbers?",
        options: ["45", "50", "55", "60"],
        answer: "C",
      },
      {
        question: "A shirt costs $40 and is on sale for 25% off. What is the sale price?",
        options: ["$25", "$28", "$30", "$35"],
        answer: "C",
      },
      {
        question: "What is the value of 2 to the power of 10?",
        options: ["512", "1024", "2048", "256"],
        answer: "B",
      },
      {
        question: "If a rectangle has a length of 12 cm and width of 5 cm, what is its area?",
        options: ["34 cm²", "50 cm²", "60 cm²", "70 cm²"],
        answer: "C",
      },
      {
        question: "How many seconds are in one hour?",
        options: ["1800", "2400", "3000", "3600"],
        answer: "D",
      },
    ],
  },
  {
    slug: "brain-teasers-logic",
    title: "Brain Teasers & Logic",
    description: "Put your thinking cap on! Solve these tricky puzzles and logical reasoning questions.",
    category: "Fun Maths",
    color: "emerald",
    emoji: "🧩",
    questions: [
      {
        question: "If you have 6 apples and give away half, then buy 4 more, how many do you have?",
        options: ["5", "7", "8", "10"],
        answer: "B",
      },
      {
        question: "What comes next: 1, 1, 2, 3, 5, 8, ...?",
        options: ["11", "12", "13", "15"],
        answer: "C",
      },
      {
        question: "A clock shows 3:15. What is the angle between the hour and minute hands?",
        options: ["0°", "7.5°", "15°", "90°"],
        answer: "B",
      },
      {
        question: "If it takes 5 machines 5 minutes to make 5 widgets, how long does it take 100 machines to make 100 widgets?",
        options: ["5 minutes", "20 minutes", "50 minutes", "100 minutes"],
        answer: "A",
      },
      {
        question: "What is the missing number: 3, 9, 27, ?, 243",
        options: ["54", "72", "81", "108"],
        answer: "C",
      },
      {
        question: "A farmer has 17 sheep. All but 9 run away. How many are left?",
        options: ["8", "9", "17", "0"],
        answer: "B",
      },
      {
        question: "If you rearrange the letters 'CIFAIPC', you get the name of a(n):",
        options: ["Country", "Ocean", "City", "Animal"],
        answer: "B",
      },
      {
        question: "What weighs more: a kilogram of feathers or a kilogram of steel?",
        options: ["Feathers", "Steel", "They weigh the same", "It depends on volume"],
        answer: "C",
      },
      {
        question: "If two's company and three's a crowd, what are four and five?",
        options: ["A party", "Nine", "Too many", "A group"],
        answer: "B",
      },
      {
        question: "How many times can you subtract 5 from 25?",
        options: ["1", "4", "5", "Infinite"],
        answer: "A",
      },
      {
        question: "A bat and a ball cost $1.10 in total. The bat costs $1 more than the ball. How much does the ball cost?",
        options: ["$0.05", "$0.10", "$0.15", "$0.50"],
        answer: "A",
      },
      {
        question: "If there are 3 apples and you take away 2, how many apples do YOU have?",
        options: ["0", "1", "2", "3"],
        answer: "C",
      },
      {
        question: "What is half of 2 + 2?",
        options: ["2", "3", "1", "It depends on the order of operations"],
        answer: "D",
      },
      {
        question: "Complete the pattern: 16, 8, 4, 2, ...?",
        options: ["0", "1", "-2", "0.5"],
        answer: "B",
      },
      {
        question: "I am a 3-digit number. My tens digit is 5 more than my ones digit, and my hundreds digit is 8 less than my tens digit. What am I?",
        options: ["194", "digit combination impossible", "150", "362"],
        answer: "A",
      },
    ],
  },
  {
    slug: "oceans-rivers-world",
    title: "Oceans & Rivers of the World",
    description: "From the deepest ocean trench to the longest river — explore the waterways of our planet.",
    category: "Geography",
    color: "amber",
    emoji: "🌊",
    questions: [
      {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        answer: "C",
      },
      {
        question: "Which is the longest river in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        answer: "B",
      },
      {
        question: "What is the deepest point in the world's oceans?",
        options: ["Tonga Trench", "Mariana Trench", "Java Trench", "Puerto Rico Trench"],
        answer: "B",
      },
      {
        question: "Which river flows through Paris?",
        options: ["Thames", "Rhine", "Seine", "Danube"],
        answer: "C",
      },
      {
        question: "How many oceans are there on Earth?",
        options: ["4", "5", "6", "7"],
        answer: "B",
      },
      {
        question: "Which river is considered the holiest in India?",
        options: ["Yamuna", "Godavari", "Ganges", "Brahmaputra"],
        answer: "C",
      },
      {
        question: "The Great Barrier Reef is located in which ocean?",
        options: ["Indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Southern Ocean"],
        answer: "B",
      },
      {
        question: "Which river forms a natural border between the USA and Mexico?",
        options: ["Colorado River", "Mississippi River", "Rio Grande", "Columbia River"],
        answer: "C",
      },
      {
        question: "What is the saltiest body of water on Earth?",
        options: ["Dead Sea", "Red Sea", "Caspian Sea", "Mediterranean Sea"],
        answer: "A",
      },
      {
        question: "Which river passes through the most countries?",
        options: ["Amazon", "Nile", "Danube", "Mekong"],
        answer: "C",
      },
      {
        question: "The Amazon River flows through which continent?",
        options: ["Africa", "Asia", "South America", "North America"],
        answer: "C",
      },
      {
        question: "What is the smallest ocean?",
        options: ["Indian Ocean", "Southern Ocean", "Arctic Ocean", "Atlantic Ocean"],
        answer: "C",
      },
      {
        question: "Which famous waterfall is located on the border of Zambia and Zimbabwe?",
        options: ["Niagara Falls", "Iguazu Falls", "Victoria Falls", "Angel Falls"],
        answer: "C",
      },
      {
        question: "The Suez Canal connects which two bodies of water?",
        options: ["Atlantic and Pacific", "Mediterranean and Red Sea", "Indian and Pacific", "Black Sea and Caspian"],
        answer: "B",
      },
      {
        question: "Which river is the longest in Asia?",
        options: ["Ganges", "Mekong", "Yangtze", "Indus"],
        answer: "C",
      },
    ],
  },
  {
    slug: "sports-trivia",
    title: "Sports Around the World",
    description: "Goals, medals and records — test your knowledge of the world's most popular sports.",
    category: "General Knowledge",
    color: "cyan",
    emoji: "⚽",
    questions: [
      {
        question: "How many players are on a football (soccer) team on the field?",
        options: ["9", "10", "11", "12"],
        answer: "C",
      },
      {
        question: "In which country did the Olympic Games originate?",
        options: ["Italy", "Greece", "Egypt", "France"],
        answer: "B",
      },
      {
        question: "What is the maximum score in a single frame of bowling?",
        options: ["10", "20", "30", "50"],
        answer: "C",
      },
      {
        question: "How many rings are on the Olympic flag?",
        options: ["3", "4", "5", "6"],
        answer: "C",
      },
      {
        question: "In cricket, how many runs is a 'century'?",
        options: ["50", "100", "150", "200"],
        answer: "B",
      },
      {
        question: "Which country has won the most FIFA World Cup titles?",
        options: ["Germany", "Argentina", "Italy", "Brazil"],
        answer: "D",
      },
      {
        question: "What sport is played at Wimbledon?",
        options: ["Golf", "Tennis", "Cricket", "Polo"],
        answer: "B",
      },
      {
        question: "How long is a marathon in kilometres (approximately)?",
        options: ["26 km", "32 km", "42 km", "50 km"],
        answer: "C",
      },
      {
        question: "In basketball, how many points is a shot from beyond the three-point line worth?",
        options: ["1", "2", "3", "4"],
        answer: "C",
      },
      {
        question: "Which country is cricket's governing body, the ICC, headquartered in?",
        options: ["England", "India", "UAE", "Australia"],
        answer: "C",
      },
      {
        question: "How many events are in a decathlon?",
        options: ["5", "7", "10", "12"],
        answer: "C",
      },
      {
        question: "What colour card in football means a player is sent off?",
        options: ["Yellow", "Blue", "Red", "Green"],
        answer: "C",
      },
      {
        question: "Which sport is known as 'the gentleman's game'?",
        options: ["Golf", "Cricket", "Tennis", "Polo"],
        answer: "B",
      },
      {
        question: "In which sport would you perform a 'slam dunk'?",
        options: ["Volleyball", "Tennis", "Basketball", "Handball"],
        answer: "C",
      },
      {
        question: "How many players are on a standard volleyball team on the court?",
        options: ["5", "6", "7", "8"],
        answer: "B",
      },
    ],
  },
  {
    slug: "food-cuisine-world",
    title: "Food & Cuisine Around the World",
    description: "Sushi, pasta, tacos and more — match these iconic dishes to the countries they come from.",
    category: "General Knowledge",
    color: "cyan",
    emoji: "🍕",
    questions: [
      {
        question: "Sushi is a traditional dish from which country?",
        options: ["China", "South Korea", "Japan", "Thailand"],
        answer: "C",
      },
      {
        question: "Which country is the origin of the croissant?",
        options: ["France", "Austria", "Italy", "Belgium"],
        answer: "B",
      },
      {
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Avocado", "Onion", "Pepper"],
        answer: "B",
      },
      {
        question: "Kimchi is a traditional fermented dish from which country?",
        options: ["Japan", "China", "South Korea", "Vietnam"],
        answer: "C",
      },
      {
        question: "Which spice gives curry its yellow colour?",
        options: ["Paprika", "Saffron", "Cumin", "Turmeric"],
        answer: "D",
      },
      {
        question: "What type of food is 'naan'?",
        options: ["A rice dish", "A bread", "A soup", "A dessert"],
        answer: "B",
      },
      {
        question: "Which fruit is known as the 'king of fruits' in Southeast Asia?",
        options: ["Mango", "Jackfruit", "Durian", "Papaya"],
        answer: "C",
      },
      {
        question: "Paella is a famous dish from which country?",
        options: ["Mexico", "Spain", "Portugal", "Italy"],
        answer: "B",
      },
      {
        question: "What is tofu made from?",
        options: ["Rice", "Wheat", "Soybeans", "Potatoes"],
        answer: "C",
      },
      {
        question: "Maple syrup is most famously produced in which country?",
        options: ["USA", "Canada", "Sweden", "Norway"],
        answer: "B",
      },
      {
        question: "Which country is the largest producer of tea in the world?",
        options: ["India", "China", "Japan", "Sri Lanka"],
        answer: "B",
      },
      {
        question: "What is the main ingredient in hummus?",
        options: ["Lentils", "Chickpeas", "Black beans", "Peas"],
        answer: "B",
      },
      {
        question: "Fondue is a traditional dish from which country?",
        options: ["France", "Belgium", "Austria", "Switzerland"],
        answer: "D",
      },
      {
        question: "Which Italian dish is made of thin slices of raw meat or fish?",
        options: ["Bruschetta", "Carpaccio", "Risotto", "Pesto"],
        answer: "B",
      },
      {
        question: "What is the world's most consumed fruit?",
        options: ["Apple", "Orange", "Banana", "Mango"],
        answer: "C",
      },
    ],
  },
  {
    slug: "word-origins",
    title: "Word Origins & Etymology",
    description: "Every word has a story. Discover where common English words really come from.",
    category: "Language & Words",
    color: "lime",
    emoji: "📝",
    questions: [
      {
        question: "The word 'alphabet' comes from the first two letters of which language?",
        options: ["Latin", "Greek", "Hebrew", "Arabic"],
        answer: "B",
      },
      {
        question: "The word 'robot' was first used in which language?",
        options: ["German", "Russian", "Czech", "Japanese"],
        answer: "C",
      },
      {
        question: "What does the Latin root 'aqua' mean?",
        options: ["Air", "Earth", "Water", "Fire"],
        answer: "C",
      },
      {
        question: "The word 'piano' is short for 'pianoforte'. What language does it come from?",
        options: ["French", "Spanish", "Italian", "Portuguese"],
        answer: "C",
      },
      {
        question: "Which language gave us the word 'safari'?",
        options: ["Hindi", "Arabic", "Swahili", "Zulu"],
        answer: "C",
      },
      {
        question: "The word 'tsunami' comes from which language?",
        options: ["Chinese", "Korean", "Japanese", "Hawaiian"],
        answer: "C",
      },
      {
        question: "What does the Greek root 'phon' mean?",
        options: ["Light", "Sound", "Water", "Earth"],
        answer: "B",
      },
      {
        question: "The word 'chocolate' originally comes from which language?",
        options: ["Spanish", "Nahuatl (Aztec)", "Portuguese", "French"],
        answer: "B",
      },
      {
        question: "Which word comes from the Hindi language?",
        options: ["Safari", "Jungle", "Robot", "Piano"],
        answer: "B",
      },
      {
        question: "The prefix 'bio-' means:",
        options: ["Two", "Book", "Life", "Big"],
        answer: "C",
      },
      {
        question: "Which English word comes from the Arabic word 'al-jabr'?",
        options: ["Algorithm", "Algebra", "Almanac", "All of the above"],
        answer: "D",
      },
      {
        question: "The word 'kindergarten' comes from which language?",
        options: ["Dutch", "Swedish", "German", "Danish"],
        answer: "C",
      },
      {
        question: "What does the Latin root 'scrib' or 'script' mean?",
        options: ["To read", "To write", "To speak", "To teach"],
        answer: "B",
      },
      {
        question: "The word 'karate' literally means 'empty hand' in which language?",
        options: ["Chinese", "Korean", "Japanese", "Thai"],
        answer: "C",
      },
      {
        question: "Which common English word comes from the Sanskrit language?",
        options: ["Yoga", "Karate", "Tsunami", "Safari"],
        answer: "A",
      },
    ],
  },
  {
    slug: "famous-books-authors",
    title: "Famous Books & Authors",
    description: "Can you match these beloved books to the brilliant minds who wrote them?",
    category: "Language & Words",
    color: "lime",
    emoji: "📚",
    questions: [
      {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        answer: "B",
      },
      {
        question: "Who is the author of the Harry Potter series?",
        options: ["J.R.R. Tolkien", "C.S. Lewis", "J.K. Rowling", "Roald Dahl"],
        answer: "C",
      },
      {
        question: "Who wrote 'A Brief History of Time'?",
        options: ["Albert Einstein", "Stephen Hawking", "Carl Sagan", "Isaac Newton"],
        answer: "B",
      },
      {
        question: "The 'Diary of a Young Girl' was written by whom?",
        options: ["Helen Keller", "Anne Frank", "Mary Shelley", "Malala Yousafzai"],
        answer: "B",
      },
      {
        question: "Who wrote 'The Jungle Book'?",
        options: ["Mark Twain", "Lewis Carroll", "Rudyard Kipling", "H.G. Wells"],
        answer: "C",
      },
      {
        question: "'Charlie and the Chocolate Factory' was written by which author?",
        options: ["Enid Blyton", "Roald Dahl", "Dr. Seuss", "Beatrix Potter"],
        answer: "B",
      },
      {
        question: "Who wrote '1984'?",
        options: ["Aldous Huxley", "Ray Bradbury", "George Orwell", "H.G. Wells"],
        answer: "C",
      },
      {
        question: "Who is the author of 'The Theory of Everything'?",
        options: ["Albert Einstein", "Richard Feynman", "Stephen Hawking", "Neil deGrasse Tyson"],
        answer: "C",
      },
      {
        question: "'The Adventures of Tom Sawyer' was written by which American author?",
        options: ["Ernest Hemingway", "Mark Twain", "F. Scott Fitzgerald", "John Steinbeck"],
        answer: "B",
      },
      {
        question: "Who wrote 'Pride and Prejudice'?",
        options: ["Charlotte Bronte", "Jane Austen", "Emily Bronte", "Virginia Woolf"],
        answer: "B",
      },
      {
        question: "'The Lord of the Rings' was written by which author?",
        options: ["C.S. Lewis", "J.K. Rowling", "J.R.R. Tolkien", "Terry Pratchett"],
        answer: "C",
      },
      {
        question: "Who wrote the play 'The Merchant of Venice'?",
        options: ["Oscar Wilde", "William Shakespeare", "George Bernard Shaw", "Christopher Marlowe"],
        answer: "B",
      },
      {
        question: "Who is the author of 'Wings of Fire'?",
        options: ["Mahatma Gandhi", "Jawaharlal Nehru", "A.P.J. Abdul Kalam", "Rabindranath Tagore"],
        answer: "C",
      },
      {
        question: "Who wrote 'The Very Hungry Caterpillar'?",
        options: ["Dr. Seuss", "Eric Carle", "Maurice Sendak", "Shel Silverstein"],
        answer: "B",
      },
      {
        question: "'Alice's Adventures in Wonderland' was written by which author?",
        options: ["Lewis Carroll", "Brothers Grimm", "Hans Christian Andersen", "Roald Dahl"],
        answer: "A",
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
