function wordGame() {
  return {
    currentScreen: "start",
    showInfoPopup: false,
    gameSettings: {
      language: "english",
      teams: 2,
      words: 20,
    },
    timeRemaining: 60,
    timerInterval: null,
    currentTeam: 1,
    currentRound: 1,
    timerRunning: false,
    currentWordIndex: 0,
    nextWordClicks: 0,
    previousWordClicks: 0,
    roundScore: 0,
    showRoundScore: false,
    teamScores: {},
    combinedWords: [], // New property for 'both' language mode

    // Word arrays
    dutchWords: [
      "Winston Churchill",
      "Ariana Grande",
      "Stephen Hawking",
      "Koningin Elizabeth",
      "Albert Schweitzer",
      "Lionel Messi",
      "Mahatma Gandhi",
      "Wolfgang Amadeus Mozart",
      "Charles Darwin",
      "Isaac Newton",
      "Pablo Picasso",
      "Marie Curie",
      "Freddie Mercury",
      "Oprah",
      "Novak Djokovic",
      "Andy Warhol",
      "Barack",
      "Céline Dion",
      "Michael Schumacher",
      "Anne Frank",
      "Ernest Hemingway",
      "Stephen Curry",
      "Clint Eastwood",
      "Madonna",
      "Jamie Oliver",
      "Florence Nightingale",
      "Neil Armstrong",
      "Bruce Springsteen",
      "JK Rowling",
      "Harrison Ford",
      "Justin Timberlake",
      "Keanu Reeves",
      "Billie Eilish",
      "Charles Chaplin",
      "Pelé",
      "Dalai Lama",
      "Frank Sinatra",
      "Prinses Diana",
      "Hugh Jackman",
      "Keira Knightley",
      "Brooklyn Bridge",
      "Mount Fuji",
      "Buckingham Palace",
      "Central Park",
      "Tafelberg",
      "Akropolis",
      "Westminster Abbey",
      "Brandenburger Tor",
      "Mont Blanc",
      "Angel Falls",
      "Groot Barrièrerif",
      "Death Valley",
      "Kremlinpaleis",
      "Banff Nationaal Park",
      "Sint-Pietersbasiliek",
      "Sagrada Familia",
      "Yosemite",
      "Bora Bora",
      "Santorini",
      "Malediven",
      "IJsland",
      "Azoren",
      "Fiji",
      "Seychellen",
      "Pompeï",
      "Kasteel van Edinburgh",
      "Etna",
      "Baikalmeer",
      "Kruger Nationaal Park",
      "Cinque Terre",
      "Antelope Canyon",
      "Zion Nationaal Park",
      "Bryce Canyon",
      "Banff",
      "Patagonië",
      "Reykjavik",
      "Salzburg",
      "Dubai Marina",
      "Vaticaanstad",
      "Monaco",
      "Volkswagen",
      "Intel",
      "Dell",
      "HP",
      "Maserati",
      "Lamborghini",
      "Chanel",
      "Dior",
      "Adidas Originals",
      "Ben & Jerry’s",
      "Nestlé",
      "Kellogg’s",
      "Sprite",
      "Fanta",
      "Corona",
      "Budweiser",
      "Gillette",
      "Pampers",
      "IKEA",
      "Nescafé",
      "Magnum",
      "Toblerone",
      "Oreo",
      "KitKat",
      "Pringles",
      "Lay’s",
      "Vans",
      "Converse",
      "Reebok",
      "Levi’s",
      "Swatch",
      "Tag Heuer",
      "GoPro",
      "Canon",
      "Nikon",
      "Asus",
      "Acer",
      "Braun",
      "Tupperware",
      "Playmobil",
      "Frozen Fever",
      "Zootropolis",
      "Monsters en Co.",
      "Binnenstebuiten",
      "Wall-E",
      "Up",
      "Rapunzel",
      "Merida",
      "Cars",
      "Een Luizenleven",
      "Mulan",
      "Pocahontas",
      "De Incredibles",
      "The Mandalorian",
      "WandaVision",
      "Loki",
      "Black Widow",
      "Eternals",
      "Doctor Who",
      "Sherlock",
      "Peaky Blinders",
      "The Crown",
      "Stranger Things",
      "Squid Game",
      "La Casa de Papel",
      "Bridgerton",
      "The Witcher",
      "Westworld",
      "The Boys",
      "The Office",
      "Parks and Recreation",
      "Modern Family",
      "How I Met Your Mother",
      "Seinfeld",
      "Grey’s Anatomy",
      "NCIS",
      "Law & Order",
      "Top Gear",
      "MythBusters",
      "Planet Earth",
      "Magnetron",
      "Blender",
      "Telescoop",
      "Microscoop",
      "Kalender",
      "Dagboek",
      "Kussen",
      "Deken",
      "Schoenen",
      "Sokken",
      "Jas",
      "Handschoenen",
      "Sjaal",
      "Helm",
      "Zonnebril",
      "Portemonnee",
      "Creditcard",
      "Ticket",
      "Paspoort",
      "Kaart",
      "Kompas",
      "Rugzak",
      "Tent",
      "Slaapzak",
      "Kaars",
      "Lucifers",
      "Zeep",
      "Tandenborstel",
      "Tandpasta",
      "Shampoo",
      "Kam",
      "Spiegel",
      "Nagellak",
      "Parfum",
      "Borstel",
      "Verf",
      "Liniaal",
      "Gum",
      "Schaar",
      "Lijm",
      "Biljart",
      "Croquet",
      "Pickleball",
      "Jeu de boules",
      "Pétanque",
      "Suppen",
      "Windsurfen",
      "Kitesurfen",
      "Kajakken",
      "Kanovaren",
      "Paragliden",
      "Deltavliegen",
      "Klimmen",
      "Boulderen",
      "Tokkelen",
      "Paintball",
      "Airsoft",
      "Laser Game",
      "Trampolinespringen",
      "Parkour",
      "Schaatsen",
      "Snelschaatsen",
      "Kunstschaatsen",
      "Curling",
      "Sneeuwscooteren",
      "Sleeën",
      "Hondenslee",
      "Oriënteren",
      "Discgolf",
      "Voetgolf",
      "Gaelic football",
      "Sepak Takraw",
      "Kabaddi",
      "Padel",
      "Floorball",
      "Indoor klimmen",
      "Mountainbiken",
      "BMX",
      "Skeeleren",
      "Quadrijden",
      "Tennis",
      "Basketbal",
      "Honkbal",
      "Cricket",
      "Rugby",
      "Golf",
      "Zwemmen",
      "Boksen",
      "IJshockey",
      "Skiën",
      "Snowboarden",
      "Surfen",
      "Wielrennen",
      "Hardlopen",
      "Turnen",
      "Karate",
      "Judo",
      "Badminton",
      "Tafeltennis",
      "Volleybal",
      "Skateboarden",
      "Worstelen",
      "Boogschieten",
      "Schermen",
      "Vissen",
      "Paardrijden",
      "Zeilen",
      "Duiken",
      "Wandelen",
      "Roeien",
      "Polo",
      "Handbal",
      "Snooker",
      "Darten",
      "Lacrosse",
      "Netbal",
      "Softbal",
      "Triatlon",
      "Marathon",
      "Bowlen",
      "Schaken",
      "Pizza",
      "Voetbal",
      "Vulkaan",
      "Regenboog",
      "Gitaar",
      "Olympische Spelen",
      "Robot",
      "Dinosaurus",
      "Ruimteschip",
      "Fiets",
      "Chocolade",
      "IJs",
      "Trein",
      "Vliegtuig",
      "Computer",
      "Lamp",
      "Camera",
      "Zon",
      "Maan",
      "Ster",
      "Boek",
      "Stoel",
      "Tafel",
      "Auto",
      "Schip",
      "Berg",
      "Rivier",
      "Meer",
      "Boom",
      "Bloem",
      "Pen",
      "Telefoon",
      "Klok",
      "Bed",
      "Huis",
      "Sleutel",
      "Deur",
      "Raam",
      "Tas",
      "Harry Potter",
      "Titanic",
      "Star Wars",
      "Game of Thrones",
      "De Leeuwenkoning",
      "Frozen",
      "In de Ban van de Ring",
      "Breaking Bad",
      "The Avengers",
      "Jurassic Park",
      "The Matrix",
      "Finding Nemo",
      "De Simpsons",
      "Friends",
      "Avatar",
      "Toy Story",
      "Black Panther",
      "Spider-Man",
      "Batman",
      "Wonder Woman",
      "De Peetvader",
      "De Hobbit",
      "Shrek",
      "Vaiana",
      "Encanto",
      "Belle en het Beest",
      "Sneeuwwitje",
      "Assepoester",
      "Pinokkio",
      "De Kleine Zeemeermin",
      "Aladdin",
      "Iron Man",
      "Doctor Strange",
      "Thor",
      "Captain America",
      "Hulk",
      "Ant-Man",
      "Frozen 2",
      "Coco",
      "Ratatouille",
      "Coca-Cola",
      "Nike",
      "Google",
      "iPhone",
      "LEGO",
      "McDonald’s",
      "Tesla",
      "Spotify",
      "Netflix",
      "Adidas",
      "Apple",
      "Samsung",
      "Ford",
      "Amazon",
      "Microsoft",
      "Ferrari",
      "YouTube",
      "KFC",
      "Sony",
      "Instagram",
      "Twitter",
      "Starbucks",
      "Toyota",
      "PlayStation",
      "Xbox",
      "Nintendo",
      "Gucci",
      "Prada",
      "Puma",
      "Shell",
      "Heineken",
      "Philips",
      "Airbnb",
      "Uber",
      "WhatsApp",
      "Zara",
      "H&M",
      "Pepsi",
      "Red Bull",
      "Rolex",
      "Eiffeltoren",
      "Chinese Muur",
      "Mount Everest",
      "Operagebouw van Sydney",
      "Vrijheidsbeeld",
      "Sahara",
      "Tadzj Mahal",
      "London Bridge",
      "Amazone regenwoud",
      "Times Square",
      "Big Ben",
      "Burj Khalifa",
      "Stonehenge",
      "Niagara Watervallen",
      "Colosseum",
      "Rode Plein",
      "Machu Picchu",
      "Grand Canyon",
      "Loch Ness",
      "Toren van Pisa",
      "Mount Kilimanjaro",
      "Kremlin",
      "Victoria Watervallen",
      "Berlijnse Muur",
      "Dode Zee",
      "Golden Gatebrug",
      "Hollywood",
      "Yellowstone",
      "Galapagoseilanden",
      "Serengeti",
      "Blauwe Moskee",
      "Christus de Verlosser",
      "Versailles",
      "Petra",
      "Chichen Itza",
      "Himalaya",
      "Ayers Rock",
      "Piramiden van Gizeh",
      "Venetië",
      "Poolcirkel",
      "Albert Einstein",
      "Beyoncé",
      "Elon Musk",
      "Cristiano Ronaldo",
      "Marilyn Monroe",
      "Nelson Mandela",
      "Taylor Swift",
      "Barack Obama",
      "Michael Jordan",
      "Leonardo da Vinci",
      "Adele",
      "Tom Cruise",
      "Oprah Winfrey",
      "David Beckham",
      "Lady Gaga",
      "Vincent van Gogh",
      "Rembrandt",
      "Usain Bolt",
      "Albert Pujols",
      "Charlie Chaplin",
      "Stephen King",
      "Bill Gates",
      "Mark Zuckerberg",
      "Serena Williams",
      "Rihanna",
      "Mick Jagger",
      "Elvis Presley",
      "Kylie Jenner",
      "Morgan Freeman",
      "Bruce Lee",
      "Emma Watson",
      "Chris Hemsworth",
      "Dwayne Johnson",
      "Angela Merkel",
      "Paus Franciscus",
      "Shakira",
      "Justin Bieber",
      "Jackie Chan",
      "Greta Thunberg",
      "Ed Sheeran",
      "Vuurtoren",
      "Backpacker",
      "Waterval",
      "Zonsopkomst",
      "Zonsondergang",
      "Meeuw",
      "Kwal",
      "Octopus",
      "Haai",
      "Dolfijn",
      "Walvis",
      "Krab",
      "Kreeft",
      "Koraal",
      "Schelp",
      "Woestijn",
      "Oase",
      "Kloof",
      "Gletsjer",
      "Klif",
      "Grot",
      "Eiland",
      "Vulkaanuitbarsting",
      "Aardbeving",
      "Tornado",
      "Orkaan",
      "Onweersbui",
      "Bliksem",
      "Overstroming",
      "Droogte",
      "Lawine",
      "Windroos",
      "Kaartenmaker",
      "Wereldbol",
      "Continent",
      "Hoofdstad",
      "Grens",
      "Ambassade",
      "Paspoortstempel",
      "Visum",
      "Koffer",
      "Instapkaart",
      "Luchthaven",
      "Startbaan",
      "Piloot",
      "Stewardess",
      "Loket",
      "Treinstation",
      "Bushalte",
      "Taxi",
      "Metro",
      "Tram",
      "Veerboot",
      "Reddingsboot",
      "Jacht",
      "Zeilboot",
      "Kano",
      "Kajak",
      "Roeiboot",
      "Cruiseschip",
      "Haven",
      "Pier",
      "Dok",
      "Magazijn",
      "Fabriek",
      "Werkplaats",
      "Boerderij",
      "Schuur",
      "Tractor",
      "Ploeg",
      "Oogstmachine",
      "Windmolen",
      "Watermolen",
      "Kas",
      "Tuin",
      "Boomgaard",
      "Wijngaard",
      "Veld",
      "Weide",
      "Bos",
      "Jungle",
      "Moeras",
      "Vijver",
      "Beek",
      "Watervalbekken",
      "Brug",
      "Tunnel",
      "Snelweg",
      "Rotonde",
      "Kruispunt",
      "Oversteekplaats",
      "Straatlantaarn",
      "Wegwijzer",
      "Reclamebord",
      "Winkel",
      "Supermarkt",
      "Markt",
      "Kraam",
      "Bakkerij",
      "Slager",
      "Visboer",
      "Boodschappentas",
      "Winkelwagen",
      "Kassa",
      "Bon",
      "Pinapparaat",
      "Geldautomaat",
      "Bank",
      "Postkantoor",
      "Brief",
      "Envelop",
      "Postzegel",
      "Pakket",
      "Bestelbus",
      "Fietspad",
      "Skatepark",
      "Speeltuin",
      "Glijbaan",
      "Schommel",
      "Zandbak",
      "Wip",
      "Draaimolen",
      "Klimrek",
      "Sportveld",
      "Stadion",
      "Arena",
      "Scorebord",
      "Scheidsrechter",
      "Coach",
      "Speler",
      "Doelman",
      "Aanvoerder",
      "Team",
      "Fans",
      "Medaille",
      "Trofee",
      "Podium",
      "Brandweerman",
      "Brandweerwagen",
      "Brandslang",
      "Politieagent",
      "Politiewagen",
      "Ambulance",
      "Ambulancebroeder",
      "Dokter",
      "Verpleegkundige",
      "Chirurg",
      "Patiënt",
      "Ziekenhuis",
      "Kliniek",
      "Apotheek",
      "Medicijn",
      "Verband",
      "Rolstoel",
      "Krukken",
      "Brancard",
      "Laboratorium",
      "Microscoopglaasje",
      "Reageerbuis",
      "Bekerglas",
      "Gasbrander",
      "Veiligheidsbril",
      "Notitieboek",
      "Pennenbak",
      "Paperclip",
      "Nietmachine",
      "Perforator",
      "Map",
      "Map",
      "Whiteboard",
      "Stift",
      "Krijt",
      "Schoolbord",
      "Bureau",
      "Voorzitter",
      "Vergadering",
      "Presentatie",
      "Projector",
      "Scherm",
      "Laptop",
      "Toetsenbord",
      "Muis",
      "Monitor",
      "Printer",
      "Scanner",
      "Kabel",
      "Stekker",
      "Stopcontact",
      "Lichtschakelaar",
      "Plafond",
      "Muur",
      "Vloer",
      "Dak",
      "Schoorsteen",
      "Trap",
      "Lift",
      "Balkon",
      "Terras",
      "Tuinhuis",
      "Hek",
      "Poort",
      "Pad",
      "Oprit",
      "Garage",
      "Autowasstraat",
      "Benzinepomp",
      "Tankstation",
      "Laadpaal",
    ],

    englishWords: [
      "Winston Churchill",
      "Ariana Grande",
      "Stephen Hawking",
      "Queen Elizabeth",
      "Albert Schweitzer",
      "Lionel Messi",
      "Mahatma Gandhi",
      "Wolfgang Amadeus Mozart",
      "Charles Darwin",
      "Isaac Newton",
      "Pablo Picasso",
      "Marie Curie",
      "Freddie Mercury",
      "Oprah",
      "Novak Djokovic",
      "Andy Warhol",
      "Barack",
      "Celine Dion",
      "Michael Schumacher",
      "Anne Frank",
      "Ernest Hemingway",
      "Stephen Curry",
      "Clint Eastwood",
      "Madonna",
      "Jamie Oliver",
      "Florence Nightingale",
      "Neil Armstrong",
      "Bruce Springsteen",
      "JK Rowling",
      "Harrison Ford",
      "Justin Timberlake",
      "Keanu Reeves",
      "Billie Eilish",
      "Charles Chaplin",
      "Pelé",
      "Dalai Lama",
      "Frank Sinatra",
      "Princess Diana",
      "Hugh Jackman",
      "Keira Knightley",
      "Brooklyn Bridge",
      "Mount Fuji",
      "Buckingham Palace",
      "Central Park",
      "Table Mountain",
      "Acropolis",
      "Westminster Abbey",
      "Brandenburg Gate",
      "Mont Blanc",
      "Angel Falls",
      "Great Barrier Reef",
      "Death Valley",
      "Kremlin Palace",
      "Banff National Park",
      "St. Peter’s Basilica",
      "Sagrada Familia",
      "Yosemite",
      "Bora Bora",
      "Santorini",
      "Maldives",
      "Iceland",
      "Azores",
      "Fiji",
      "Seychelles",
      "Pompeii",
      "Edinburgh Castle",
      "Mount Etna",
      "Lake Baikal",
      "Kruger National Park",
      "Cinque Terre",
      "Antelope Canyon",
      "Zion National Park",
      "Bryce Canyon",
      "Banff",
      "Patagonia",
      "Reykjavik",
      "Salzburg",
      "Dubai Marina",
      "Vatican City",
      "Monaco",
      "Volkswagen",
      "Intel",
      "Dell",
      "HP",
      "Maserati",
      "Lamborghini",
      "Chanel",
      "Dior",
      "Adidas Originals",
      "Ben & Jerry’s",
      "Nestlé",
      "Kellogg’s",
      "Sprite",
      "Fanta",
      "Corona",
      "Budweiser",
      "Gillette",
      "Pampers",
      "IKEA",
      "Nescafé",
      "Magnum",
      "Toblerone",
      "Oreo",
      "KitKat",
      "Pringles",
      "Lay’s",
      "Vans",
      "Converse",
      "Reebok",
      "Levi’s",
      "Swatch",
      "Tag Heuer",
      "GoPro",
      "Canon",
      "Nikon",
      "Asus",
      "Acer",
      "Braun",
      "Tupperware",
      "Playmobil",
      "Frozen Fever",
      "Zootopia",
      "Monsters Inc.",
      "Inside Out",
      "Wall-E",
      "Up",
      "Tangled",
      "Brave",
      "Cars",
      "A Bug’s Life",
      "Mulan",
      "Pocahontas",
      "The Incredibles",
      "The Mandalorian",
      "WandaVision",
      "Loki",
      "Black Widow",
      "Eternals",
      "Doctor Who",
      "Sherlock",
      "Peaky Blinders",
      "The Crown",
      "Stranger Things",
      "Squid Game",
      "Money Heist",
      "Bridgerton",
      "The Witcher",
      "Westworld",
      "The Boys",
      "The Office",
      "Parks and Recreation",
      "Modern Family",
      "How I Met Your Mother",
      "Seinfeld",
      "Grey’s Anatomy",
      "NCIS",
      "Law & Order",
      "Top Gear",
      "MythBusters",
      "Planet Earth",
      "Microwave",
      "Blender",
      "Telescope",
      "Microscope",
      "Calendar",
      "Diary",
      "Pillow",
      "Blanket",
      "Shoes",
      "Socks",
      "Jacket",
      "Gloves",
      "Scarf",
      "Helmet",
      "Sunglasses",
      "Wallet",
      "Credit Card",
      "Ticket",
      "Passport",
      "Map",
      "Compass",
      "Backpack",
      "Tent",
      "Sleeping Bag",
      "Candle",
      "Matches",
      "Soap",
      "Toothbrush",
      "Toothpaste",
      "Shampoo",
      "Comb",
      "Mirror",
      "Nail Polish",
      "Perfume",
      "Brush",
      "Paint",
      "Ruler",
      "Eraser",
      "Scissors",
      "Glue",
      "Billiards",
      "Croquet",
      "Pickleball",
      "Bocce",
      "Pétanque",
      "Paddleboarding",
      "Windsurfing",
      "Kitesurfing",
      "Kayaking",
      "Canoeing",
      "Paragliding",
      "Hang Gliding",
      "Rock Climbing",
      "Bouldering",
      "Zip Lining",
      "Paintball",
      "Airsoft",
      "Laser Tag",
      "Trampolining",
      "Parkour",
      "Ice Skating",
      "Speed Skating",
      "Figure Skating",
      "Curling",
      "Snowmobiling",
      "Sledding",
      "Dog Sledding",
      "Orienteering",
      "Disc Golf",
      "Footgolf",
      "Gaelic Football",
      "Sepak Takraw",
      "Kabaddi",
      "Padel",
      "Floorball",
      "Indoor Climbing",
      "Mountain Biking",
      "BMX",
      "Rollerblading",
      "Quad Biking",
      "Tennis",
      "Basketball",
      "Baseball",
      "Cricket",
      "Rugby",
      "Golf",
      "Swimming",
      "Boxing",
      "Ice Hockey",
      "Skiing",
      "Snowboarding",
      "Surfing",
      "Cycling",
      "Running",
      "Gymnastics",
      "Karate",
      "Judo",
      "Badminton",
      "Table Tennis",
      "Volleyball",
      "Skateboarding",
      "Wrestling",
      "Archery",
      "Fencing",
      "Fishing",
      "Horse Riding",
      "Sailing",
      "Diving",
      "Hiking",
      "Rowing",
      "Polo",
      "Handball",
      "Snooker",
      "Darts",
      "Lacrosse",
      "Netball",
      "Softball",
      "Triathlon",
      "Marathon",
      "Bowling",
      "Chess",
      "Pizza",
      "Football",
      "Volcano",
      "Rainbow",
      "Guitar",
      "Olympics",
      "Robot",
      "Dinosaur",
      "Space Shuttle",
      "Bicycle",
      "Chocolate",
      "Ice Cream",
      "Train",
      "Airplane",
      "Computer",
      "Lamp",
      "Camera",
      "Sun",
      "Moon",
      "Star",
      "Book",
      "Chair",
      "Table",
      "Car",
      "Ship",
      "Mountain",
      "River",
      "Lake",
      "Tree",
      "Flower",
      "Pen",
      "Phone",
      "Clock",
      "Bed",
      "House",
      "Key",
      "Door",
      "Window",
      "Bag",
      "Harry Potter",
      "Titanic",
      "Star Wars",
      "Game of Thrones",
      "The Lion King",
      "Frozen",
      "Lord of the Rings",
      "Breaking Bad",
      "The Avengers",
      "Jurassic Park",
      "The Matrix",
      "Finding Nemo",
      "The Simpsons",
      "Friends",
      "Avatar",
      "Toy Story",
      "Black Panther",
      "Spider-Man",
      "Batman",
      "Wonder Woman",
      "The Godfather",
      "The Hobbit",
      "Shrek",
      "Moana",
      "Encanto",
      "Beauty and the Beast",
      "Snow White",
      "Cinderella",
      "Pinocchio",
      "The Little Mermaid",
      "Aladdin",
      "Iron Man",
      "Doctor Strange",
      "Thor",
      "Captain America",
      "Hulk",
      "Ant-Man",
      "Frozen 2",
      "Coco",
      "Ratatouille",
      "Coca-Cola",
      "Nike",
      "Google",
      "iPhone",
      "LEGO",
      "McDonald’s",
      "Tesla",
      "Spotify",
      "Netflix",
      "Adidas",
      "Apple",
      "Samsung",
      "Ford",
      "Amazon",
      "Microsoft",
      "Ferrari",
      "YouTube",
      "KFC",
      "Sony",
      "Instagram",
      "Twitter",
      "Starbucks",
      "Toyota",
      "PlayStation",
      "Xbox",
      "Nintendo",
      "Gucci",
      "Prada",
      "Puma",
      "Shell",
      "Heineken",
      "Philips",
      "Airbnb",
      "Uber",
      "WhatsApp",
      "Zara",
      "H&M",
      "Pepsi",
      "Red Bull",
      "Rolex",
      "Eiffel Tower",
      "Great Wall of China",
      "Mount Everest",
      "Sydney Opera House",
      "Statue of Liberty",
      "Sahara Desert",
      "Taj Mahal",
      "London Bridge",
      "Amazon Rainforest",
      "Times Square",
      "Big Ben",
      "Burj Khalifa",
      "Stonehenge",
      "Niagara Falls",
      "Colosseum",
      "Red Square",
      "Machu Picchu",
      "Grand Canyon",
      "Loch Ness",
      "Leaning Tower of Pisa",
      "Mount Kilimanjaro",
      "Kremlin",
      "Victoria Falls",
      "Berlin Wall",
      "Dead Sea",
      "Golden Gate Bridge",
      "Hollywood",
      "Yellowstone",
      "Galápagos Islands",
      "Serengeti",
      "Blue Mosque",
      "Christ the Redeemer",
      "Versailles",
      "Petra",
      "Chichen Itza",
      "Himalayas",
      "Ayers Rock",
      "Giza Pyramids",
      "Venice",
      "Arctic Circle",
      "Albert Einstein",
      "Beyoncé",
      "Elon Musk",
      "Cristiano Ronaldo",
      "Marilyn Monroe",
      "Nelson Mandela",
      "Taylor Swift",
      "Barack Obama",
      "Michael Jordan",
      "Leonardo da Vinci",
      "Adele",
      "Tom Cruise",
      "Oprah Winfrey",
      "David Beckham",
      "Lady Gaga",
      "Vincent van Gogh",
      "Rembrandt",
      "Usain Bolt",
      "Albert Pujols",
      "Charlie Chaplin",
      "Stephen King",
      "Bill Gates",
      "Mark Zuckerberg",
      "Serena Williams",
      "Rihanna",
      "Mick Jagger",
      "Elvis Presley",
      "Kylie Jenner",
      "Morgan Freeman",
      "Bruce Lee",
      "Emma Watson",
      "Chris Hemsworth",
      "Dwayne Johnson",
      "Angela Merkel",
      "Pope Francis",
      "Shakira",
      "Justin Bieber",
      "Jackie Chan",
      "Greta Thunberg",
      "Ed Sheeran",
      "Lighthouse",
      "Backpacker",
      "Waterfall",
      "Sunrise",
      "Sunset",
      "Seagull",
      "Jellyfish",
      "Octopus",
      "Shark",
      "Dolphin",
      "Whale",
      "Crab",
      "Lobster",
      "Coral",
      "Shell",
      "Desert",
      "Oasis",
      "Canyon",
      "Glacier",
      "Cliff",
      "Cave",
      "Island",
      "Volcano Eruption",
      "Earthquake",
      "Tornado",
      "Hurricane",
      "Thunderstorm",
      "Lightning",
      "Flood",
      "Drought",
      "Avalanche",
      "Compass Rose",
      "Mapmaker",
      "Globe",
      "Continent",
      "Capital City",
      "Border",
      "Embassy",
      "Passport Stamp",
      "Visa",
      "Suitcase",
      "Boarding Pass",
      "Airport",
      "Runway",
      "Pilot",
      "Stewardess",
      "Ticket Booth",
      "Train Station",
      "Bus Stop",
      "Taxi",
      "Subway",
      "Tram",
      "Ferry",
      "Lifeboat",
      "Yacht",
      "Sailboat",
      "Canoe",
      "Kayak",
      "Rowboat",
      "Cruise Ship",
      "Harbor",
      "Pier",
      "Dock",
      "Warehouse",
      "Factory",
      "Workshop",
      "Farm",
      "Barn",
      "Tractor",
      "Plow",
      "Harvester",
      "Windmill",
      "Watermill",
      "Greenhouse",
      "Garden",
      "Orchard",
      "Vineyard",
      "Field",
      "Meadow",
      "Forest",
      "Jungle",
      "Swamp",
      "Pond",
      "Stream",
      "Waterfall Basin",
      "Bridge",
      "Tunnel",
      "Highway",
      "Roundabout",
      "Intersection",
      "Crosswalk",
      "Streetlight",
      "Signpost",
      "Billboard",
      "Shop",
      "Supermarket",
      "Market",
      "Stall",
      "Bakery",
      "Butcher",
      "Fishmonger",
      "Grocery Bag",
      "Shopping Cart",
      "Cash Register",
      "Receipt",
      "Credit Card Machine",
      "ATM",
      "Bank",
      "Post Office",
      "Letter",
      "Envelope",
      "Stamp",
      "Parcel",
      "Delivery Van",
      "Bicycle Lane",
      "Skate Park",
      "Playground",
      "Slide",
      "Swing",
      "Sandbox",
      "See-saw",
      "Merry-go-round",
      "Climbing Frame",
      "Sports Field",
      "Stadium",
      "Arena",
      "Scoreboard",
      "Referee",
      "Coach",
      "Player",
      "Goalkeeper",
      "Captain",
      "Team",
      "Fans",
      "Medal",
      "Trophy",
      "Podium",
      "Firefighter",
      "Fire Truck",
      "Fire Hose",
      "Police Officer",
      "Police Car",
      "Ambulance",
      "Paramedic",
      "Doctor",
      "Nurse",
      "Surgeon",
      "Patient",
      "Hospital",
      "Clinic",
      "Pharmacy",
      "Medicine",
      "Bandage",
      "Wheelchair",
      "Crutches",
      "Stretcher",
      "Laboratory",
      "Microscope Slide",
      "Test Tube",
      "Beaker",
      "Bunsen Burner",
      "Safety Goggles",
      "Notebook",
      "Pen Holder",
      "Paperclip",
      "Stapler",
      "Hole Punch",
      "Binder",
      "Folder",
      "Whiteboard",
      "Marker",
      "Chalk",
      "Blackboard",
      "Desk",
      "Chairperson",
      "Meeting",
      "Presentation",
      "Projector",
      "Screen",
      "Laptop",
      "Keyboard",
      "Mouse",
      "Monitor",
      "Printer",
      "Scanner",
      "Cable",
      "Plug",
      "Socket",
      "Light Switch",
      "Ceiling",
      "Wall",
      "Floor",
      "Roof",
      "Chimney",
      "Stairs",
      "Elevator",
      "Balcony",
      "Terrace",
      "Garden Shed",
      "Fence",
      "Gate",
      "Path",
      "Driveway",
      "Garage",
      "Car Wash",
      "Fuel Pump",
      "Petrol Station",
      "Electric Car Charger",
    ],

    teamColors: [
      "#FF1744", // Vibrant Red
      "#00E676", // Vibrant Green
      "#2196F3", // Vibrant Blue
      "#FF9800", // Vibrant Orange
      "#9C27B0", // Vibrant Purple
      "#FFEB3B", // Vibrant Yellow
      "#00BCD4", // Vibrant Cyan
      "#FF5722", // Vibrant Deep Orange
    ],

    // Team management
    increaseTeams() {
      if (this.gameSettings.teams < 8) {
        this.gameSettings.teams++;
      }
    },

    decreaseTeams() {
      if (this.gameSettings.teams > 2) {
        this.gameSettings.teams--;
      }
    },

    // Word count management
    increaseWords() {
      if (this.gameSettings.words < 100) {
        this.gameSettings.words += 5;
      }
    },

    decreaseWords() {
      if (this.gameSettings.words > 10) {
        this.gameSettings.words -= 5;
      }
    },

    // Shuffle array using Fisher-Yates algorithm
    shuffleArray(array) {
      const shuffled = [...array]; // Create a copy to avoid mutating original
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    },

    // Start the game
    startGame() {
      // Stop any existing timer first
      this.stopTimer();

      // Reset game state
      this.currentTeam = 1;
      this.currentRound = 1;
      this.timerRunning = false;
      this.timeRemaining = 60;
      this.currentWordIndex = 0; // Reset word index for new game

      // Initialize team scores
      this.initializeTeamScores();

      // Handle word arrays based on language setting
      if (this.gameSettings.language === "both") {
        // Create combined array with even words from one array and odd words from the other
        this.combinedWords = [];

        // Randomly choose which array to take even words from
        const useDutchEven = Math.random() < 0.5;

        if (useDutchEven) {
          // Take even words from Dutch, odd words from English
          for (let i = 0; i < this.dutchWords.length; i += 2) {
            this.combinedWords.push(this.dutchWords[i]);
          }
          for (let i = 1; i < this.englishWords.length; i += 2) {
            this.combinedWords.push(this.englishWords[i]);
          }
        } else {
          // Take even words from English, odd words from Dutch
          for (let i = 0; i < this.englishWords.length; i += 2) {
            this.combinedWords.push(this.englishWords[i]);
          }
          for (let i = 1; i < this.dutchWords.length; i += 2) {
            this.combinedWords.push(this.dutchWords[i]);
          }
        }

        // Shuffle the combined array
        this.combinedWords = this.shuffleArray(this.combinedWords);
      } else {
        // For single language modes, shuffle the respective arrays
        if (this.gameSettings.language === "dutch") {
          this.dutchWords = this.shuffleArray(this.dutchWords);
        } else {
          this.englishWords = this.shuffleArray(this.englishWords);
        }
      }

      // Add a little animation delay before switching screens
      const startBtn = document.querySelector(".start-btn");
      if (startBtn) {
        startBtn.style.transform = "scale(0.95)";
        setTimeout(() => {
          this.currentScreen = "game";
          // Reset button transform
          if (startBtn) {
            startBtn.style.transform = "";
          }
        }, 150);
      } else {
        this.currentScreen = "game";
      }

      // Log the game settings for debugging
      console.log("Starting game with settings:", this.gameSettings);
      console.log("Words randomized for this game");
    },

    // Start timer
    startTimer() {
      this.timerRunning = true;
      this.timeRemaining = 60;
      this.timerInterval = setInterval(() => {
        if (this.timeRemaining > 0) {
          this.timeRemaining -= 0.1;
        } else {
          // Play buzzer sound when time runs out
          this.playBuzzerSound();
          this.stopTimer();
          this.nextRound();
        }
      }, 100);
    },

    // Start a round
    startRound() {
      this.resetRoundState();
      this.startTimer();
    },

    // Initialize team scores and randomize team colors
    initializeTeamScores() {
      this.teamScores = {};
      for (let i = 1; i <= this.gameSettings.teams; i++) {
        this.teamScores[i] = 0;
      }

      // Randomize team colors
      this.teamColors = this.shuffleArray([...this.teamColors]);
    },

    // Reset round state
    resetRoundState() {
      // Don't reset currentWordIndex - keep track of progress across rounds
      this.nextWordClicks = 0;
      this.previousWordClicks = 0;
      this.roundScore = 0;
      this.showRoundScore = false;
    },

    // Get current word based on language setting
    getCurrentWord() {
      const words =
        this.gameSettings.language === "dutch"
          ? this.dutchWords
          : this.gameSettings.language === "english"
          ? this.englishWords
          : this.gameSettings.language === "both"
          ? this.combinedWords
          : this.englishWords;

      return words[this.currentWordIndex] || "No more words";
    },

    // Navigate to next word
    nextWord() {
      if (!this.timerRunning) return;

      this.nextWordClicks++;
      this.currentWordIndex++;

      // Check if we've reached the word limit
      const maxWords =
        this.gameSettings.language === "both"
          ? this.combinedWords.length
          : this.gameSettings.language === "dutch"
          ? this.dutchWords.length
          : this.englishWords.length;

      if (
        this.currentWordIndex >= this.gameSettings.words ||
        this.currentWordIndex >= maxWords
      ) {
        // Game is complete - all words have been used
        // Calculate and add the final round's score
        this.roundScore = this.nextWordClicks - this.previousWordClicks;
        this.teamScores[this.currentTeam] += this.roundScore;

        // Play win sound
        this.playWinSound();
        this.currentScreen = "gameComplete";
        this.stopTimer();
        return;
      }
    },

    // Navigate to previous word
    previousWord() {
      if (!this.timerRunning) return;

      this.previousWordClicks++;
      this.currentWordIndex--;

      // Don't go below 0 - maintain progress tracking
      if (this.currentWordIndex < 0) {
        this.currentWordIndex = 0;
      }
    },

    // Create audio context for sound effects
    createAudioContext() {
      if (!this.audioContext) {
        this.audioContext = new (window.AudioContext ||
          window.webkitAudioContext)();
      }
    },

    // Play point sound effect with increasing pitch
    playPointSound(pointNumber) {
      this.createAudioContext();

      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);

      // Calculate pitch based on point number (higher points = higher pitch)
      const baseFrequency = 400; // Starting frequency
      const pitchIncrement = 50; // Hz increase per point
      const frequency = baseFrequency + pointNumber * pitchIncrement;
      const endFrequency = frequency + 200; // Slight rise during the sound

      oscillator.frequency.setValueAtTime(
        frequency,
        this.audioContext.currentTime
      );
      oscillator.frequency.exponentialRampToValueAtTime(
        endFrequency,
        this.audioContext.currentTime + 0.1
      );

      gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        this.audioContext.currentTime + 0.1
      );

      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + 0.1);
    },

    // Play buzzer sound when time runs out
    playBuzzerSound() {
      // Create audio element for buzzer sound
      const buzzerAudio = new Audio("audio/buzzer.mp3");
      buzzerAudio.volume = 0.7; // Set volume to 70%

      // Play the buzzer sound
      buzzerAudio.play().catch((error) => {
        console.log("Could not play buzzer sound:", error);
      });
    },

    // Play win sound when game completes
    playWinSound() {
      // Create audio element for win sound
      const winAudio = new Audio("audio/win.mp3");
      winAudio.volume = 0.8; // Set volume to 80%

      // Play the win sound
      winAudio.play().catch((error) => {
        console.log("Could not play win sound:", error);
      });
    },

    // Animate score counting
    animateScore(teamId, startScore, endScore, duration = 3000) {
      const startTime = Date.now();
      const scoreDifference = endScore - startScore;
      let lastPlayedScore = startScore;
      let pointCounter = 0; // Track which point we're on

      // Add visual highlight to the score element
      this.$nextTick(() => {
        const scoreElement = document.querySelector(
          `[x-text="teamScores[${teamId}] || 0"]`
        );
        if (scoreElement) {
          scoreElement.classList.add("animating");
        }
      });

      const updateScore = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Use easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentScore = Math.round(
          startScore + scoreDifference * easeOutQuart
        );

        this.teamScores[teamId] = currentScore;

        // Play sound when score increases
        if (currentScore > lastPlayedScore) {
          pointCounter++; // Increment point counter
          this.playPointSound(pointCounter);
          lastPlayedScore = currentScore;
        }

        if (progress < 1) {
          requestAnimationFrame(updateScore);
        } else {
          // Remove highlight when animation completes
          this.$nextTick(() => {
            const scoreElement = document.querySelector(
              `[x-text="teamScores[${teamId}] || 0"]`
            );
            if (scoreElement) {
              scoreElement.classList.remove("animating");
            }
          });
        }
      };

      updateScore();
    },

    // End round and calculate score
    endRound() {
      if (!this.timerRunning) return;

      this.roundScore = this.nextWordClicks - this.previousWordClicks;

      // Get the current score before adding new points
      const currentScore = this.teamScores[this.currentTeam];
      const newScore = currentScore + this.roundScore;

      this.stopTimer();

      // Check if we've reached the word limit after ending the round
      const maxWords =
        this.gameSettings.language === "both"
          ? this.combinedWords.length
          : this.gameSettings.language === "dutch"
          ? this.dutchWords.length
          : this.englishWords.length;

      if (
        this.currentWordIndex >= this.gameSettings.words ||
        this.currentWordIndex >= maxWords
      ) {
        // Game is complete - all words have been used
        // Add the final round's score before ending the game
        this.teamScores[this.currentTeam] = newScore;

        // Play win sound
        this.playWinSound();
        this.currentScreen = "gameComplete";
      } else {
        // Immediately switch to next team
        this.nextRound();

        // Start the score animation for the previous team during the next team's turn
        setTimeout(() => {
          this.animateScore(
            this.currentTeam - 1 || this.gameSettings.teams,
            currentScore,
            newScore,
            3000
          );
        }, 500); // Small delay to let the team switch happen first
      }
    },

    // Move to next round
    nextRound() {
      this.timerRunning = false;
      this.currentRound++;
      // Calculate which team should play in this round
      this.currentTeam =
        ((this.currentRound - 1) % this.gameSettings.teams) + 1;

      // Advance to the next word for the new round
      this.currentWordIndex++;

      // Check if we've reached the word limit
      const maxWords =
        this.gameSettings.language === "both"
          ? this.combinedWords.length
          : this.gameSettings.language === "dutch"
          ? this.dutchWords.length
          : this.englishWords.length;

      if (
        this.currentWordIndex >= this.gameSettings.words ||
        this.currentWordIndex >= maxWords
      ) {
        // Game is complete - all words have been used
        this.playWinSound();
        this.currentScreen = "gameComplete";
      }
    },

    // Stop timer
    stopTimer() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
      this.timerRunning = false;
    },

    // Go back to start screen
    goBackToStart() {
      this.stopTimer();
      this.currentScreen = "start";
    },

    // Get timer progress style
    get timerProgressStyle() {
      const progress = ((60 - this.timeRemaining) / 60) * 360;
      return {
        "--progress": `${progress}deg`,
      };
    },

    // Get current team color
    get currentTeamColor() {
      return {
        backgroundColor: this.teamColors[this.currentTeam - 1],
      };
    },

    // Get current team style
    get currentTeamStyle() {
      return {
        borderColor: this.teamColors[this.currentTeam - 1],
        boxShadow: `0 15px 35px ${this.teamColors[this.currentTeam - 1]}40`,
      };
    },

    // Check if it's time to show the start round button
    get shouldShowStartRound() {
      return !this.timerRunning;
    },

    // Check if the game is a draw
    isDraw() {
      const scores = Object.values(this.teamScores);
      const maxScore = Math.max(...scores);
      const teamsWithMaxScore = scores.filter(
        (score) => score === maxScore
      ).length;
      return teamsWithMaxScore > 1;
    },

    // Get winning team
    getWinningTeam() {
      let winningTeam = 1;
      let highestScore = this.teamScores[1];

      for (let team = 2; team <= this.gameSettings.teams; team++) {
        if (this.teamScores[team] > highestScore) {
          highestScore = this.teamScores[team];
          winningTeam = team;
        }
      }

      return { team: winningTeam, score: highestScore };
    },

    // Initialize the component
    init() {
      // Add some initial animations
      this.$nextTick(() => {
        const titleWords = document.querySelectorAll(".title-word");
        titleWords.forEach((word, index) => {
          setTimeout(() => {
            word.style.opacity = "1";
            word.style.transform = "translateY(0)";
          }, index * 200);
        });
      });
    },
  };
}

// Add some CSS for initial animations
document.addEventListener("DOMContentLoaded", function () {
  // Add initial animation styles
  const style = document.createElement("style");
  style.textContent = `
        .title-word {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .start-content {
            opacity: 0;
            transform: translateY(30px);
            animation: slideIn 0.8s ease-out forwards;
        }
        
        @keyframes slideIn {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
  document.head.appendChild(style);
});
