// ============================
// PREMIUM TRAVEL DATA
// ============================

// ---- CONTACT INFO ----
export const contactInfo = {
  email: "hello@rajasthangauravtravels.com",
  phone: "+91 8854913030",
  whatsapp: "https://wa.link/qgyq0g",
  address: "302, Royal Tower, MI Road, Jaipur, Rajasthan 302001",
  social: {
    facebook: "https://www.facebook.com/people/Rajasthan-Gaurav-Travels/pfbid0MdUMLYegpyucCnJezP9c2yNEAS6xNuU3gR9ktnXH1n4JKPgpoyL5DhQmBtqmrYZBl/",
    instagram: "https://www.instagram.com/rajasthangauravtravels/?hl=en",
    youtube: "https://www.youtube.com/channel/UC_YNcaAoNbzJG6C0wfGQ5-w",
    twitter: "#"
  }
};

// ---- ABOUT US ----
export const aboutUs = {
  title: "Welcome to Rajasthan Gaurav Travels",
  description: "Explore Rajasthan's wonders with us! Immerse yourself in the rich culture, heritage, and hospitality of the desert state on our curated tours. Let us take care of the details while you make memories to last a lifetime.",
  stats: [
    { icon: "✈️", count: 5000, label: "Happy Travelers", suffix: "+" },
    { icon: "🗺️", count: 500, label: "Tour Packages", suffix: "+" },
    { icon: "🏙️", count: 100, label: "Destinations", suffix: "+" },
    { icon: "⭐", count: 4.9, label: "Rating", suffix: "/5" }
  ],
  mission: {
    title: "Our Mission",
    text: "Our mission is to deliver exceptional travel experiences that inspire and connect people. We aim to make travel accessible and enjoyable for everyone by providing personalized services, innovative solutions, and unparalleled customer support. We believe in sustainable tourism and strive to promote responsible travel practices. We work closely with local communities to ensure that our tours benefit the people and places we visit."
  },
  images: [
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
    "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=800&q=80",
    "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
    "https://images.unsplash.com/photo-1564507592806-6dcdb7ced5e1?w=800&q=80"
  ]
};

// ---- POPULAR DESTINATIONS ----
export const popularDestinations = [
  {
    id: "rajasthan",
    name: "Rajasthan",
    tagline: "Land of Kings",
    image: "/destinations/rajasthan.png",
    rating: 4.8,
    reviewCount: 2450,
    startingPrice: 12999,
    duration: "4N/5D",
    featured: true,
    description: "Experience the royal grandeur of Rajasthan with our meticulously crafted tour. From the pink-hued streets of Jaipur to the majestic lakes of Udaipur, this journey takes you through the architectural marvels, vibrant bazaars, and rich heritage of the 'Land of Kings'.",
    highlights: ["Amer Fort Elephant Ride", "City Palace Udaipur", "Hawa Mahal Visit", "Traditional Rajasthani Dinner", "Desert Safari in Jaisalmer"],
    inclusions: ["4 Nights 4-Star Hotel Accommodation", "Daily Breakfast & Dinner", "AC Transport for Sightseeing", "English-speaking Guide", "Airport Pick/Drop"],
    exclusions: ["Flight Tickets", "Monument Entry Fees", "Personal Expenses", "Travel Insurance"],
    itinerary: [
      { day: 1, title: "Arrival in Jaipur", desc: "Arrive in the Pink City. Check-in to your heritage hotel and spend the evening exploring local bazaars." },
      { day: 2, title: "Jaipur Sightseeing", desc: "Visit Amer Fort, Hawa Mahal, City Palace, and Jantar Mantar. Evening at Chokhi Dhani." },
      { day: 3, title: "Jaipur to Jodhpur", desc: "Drive to the Blue City. Visit the majestic Mehrangarh Fort and Jaswant Thada." },
      { day: 4, title: "Jodhpur to Udaipur", desc: "Drive to the City of Lakes. En route visit Ranakpur Jain Temples. Evening boat ride on Lake Pichola." },
      { day: 5, title: "Departure", desc: "Morning visit to City Palace Udaipur and Jagdish Temple before transfer to the airport." }
    ],
    categories: {
      spiritual: [
        { id: "raj_spir_1", name: "Khatu Shyam Ji Darshan", image: "/destinations/khatushyam.png", price: 2999, duration: "1N/2D", desc: "Seek blessings at the highly revered Khatu Shyam Ji temple. Includes VIP darshan, accommodation, and transport from Jaipur." },
        { id: "raj_spir_2", name: "Salasar Balaji Yatra", image: "/destinations/salasar.png", price: 3499, duration: "1N/2D", desc: "A spiritual journey to the holy shrine of Salasar Balaji in Churu district. Special aarti arrangement and stay included." },
        { id: "raj_spir_3", name: "Pushkar Brahma Temple", image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=600&q=80", price: 4500, duration: "2N/3D", desc: "Visit the world's only Brahma Temple and take a holy dip in the Pushkar Lake." }
      ],
      honeymoon: [
        { id: "raj_honey_1", name: "Udaipur Romantic Getaway", image: "https://images.unsplash.com/photo-1615836245337-f58942205565?w=600&q=80", price: 18999, duration: "3N/4D", desc: "Stay in a heritage lake-facing property. Includes a private sunset boat ride on Lake Pichola and romantic candlelit dinner." },
        { id: "raj_honey_2", name: "Jaisalmer Desert Romance", image: "https://images.unsplash.com/photo-1549472624-a21ea41e0649?w=600&q=80", price: 15999, duration: "2N/3D", desc: "Luxury tent stay in the Thar desert. Private jeep safari, cultural dance night, and stargazing." }
      ],
      places: [
        { id: "raj_place_1", name: "Jaipur", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80", price: 5999, duration: "2N/3D", desc: "The Pink City, famous for Hawa Mahal, Amer Fort, and vibrant textiles." },
        { id: "raj_place_2", name: "Jodhpur", image: "https://images.unsplash.com/photo-1589136149959-19fc7d18ce52?w=600&q=80", price: 6500, duration: "2N/3D", desc: "The Blue City, home to the majestic Mehrangarh Fort." },
        { id: "raj_place_3", name: "Mount Abu", image: "https://images.unsplash.com/photo-1628126235206-5260b9ea6441?w=600&q=80", price: 7999, duration: "3N/4D", desc: "Rajasthan's only hill station, known for Dilwara Temples and Nakki Lake." }
      ],
      packages: [
        { id: "raj_pack_1", name: "Golden Triangle Rajasthan", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80", price: 24999, duration: "7N/8D", desc: "Comprehensive tour covering Jaipur, Jodhpur, Udaipur, and Jaisalmer." },
        { id: "raj_pack_2", name: "Mewar Heritage Tour", image: "https://images.unsplash.com/photo-1555502693-e028b1236173?w=600&q=80", price: 16999, duration: "5N/6D", desc: "Deep dive into the history of Udaipur, Chittorgarh, and Kumbhalgarh." }
      ]
    }
  },
  {
    id: "kashmir",
    name: "Kashmir",
    tagline: "Paradise on Earth",
    image: "/destinations/kashmir.png",
    rating: 4.9,
    reviewCount: 1890,
    startingPrice: 18999,
    duration: "5N/6D",
    featured: true,
    description: "Discover the breathtaking beauty of Kashmir. Glide along the serene waters of Dal Lake in a traditional Shikara, witness the snow-capped peaks of Gulmarg, and walk through the lush valleys of Pahalgam.",
    highlights: ["Shikara Ride on Dal Lake", "Gondola Ride in Gulmarg", "Mughal Gardens Tour", "Pahalgam Valley Trek", "Houseboat Stay"],
    inclusions: ["1 Night Houseboat Stay", "4 Nights Premium Hotel Stay", "Breakfast & Dinner", "Shikara Ride", "AC Sedan Transfers"],
    exclusions: ["Airfare", "Gondola Tickets", "Pony Rides", "Lunch"],
    itinerary: [
      { day: 1, title: "Welcome to Srinagar", desc: "Arrive at Srinagar airport. Transfer to a premium Houseboat. Evening romantic Shikara ride on Dal Lake." },
      { day: 2, title: "Srinagar Sightseeing", desc: "Visit the famous Mughal Gardens. Explore the old city." },
      { day: 3, title: "Excursion to Gulmarg", desc: "Full day trip to the 'Meadow of Flowers'. Enjoy the scenic Gondola cable car ride." },
      { day: 4, title: "Excursion to Pahalgam", desc: "Drive to the 'Valley of Shepherds' through saffron fields and pine forests." },
      { day: 5, title: "Sonamarg Day Trip", desc: "Visit the 'Meadow of Gold'. Enjoy breathtaking views of glaciers." },
      { day: 6, title: "Farewell", desc: "Morning at leisure. Transfer to Srinagar airport." }
    ],
    categories: {
      spiritual: [
        { id: "kas_spir_1", name: "Amarnath Yatra Helicopter", image: "https://images.unsplash.com/photo-1623910271387-578d6de48a80?w=600&q=80", price: 14999, duration: "3N/4D", desc: "Holy pilgrimage to the Amarnath cave with helicopter tickets from Baltal." },
        { id: "kas_spir_2", name: "Mata Vaishno Devi", image: "https://images.unsplash.com/photo-1627885060193-27cbfbbdf2db?w=600&q=80", price: 8999, duration: "2N/3D", desc: "Darshan of Mata Vaishno Devi. Includes Katra hotel stay and helicopter ride." }
      ],
      honeymoon: [
        { id: "kas_honey_1", name: "Romantic Dal Lake", image: "https://images.unsplash.com/photo-1597074866923-dc0589150458?w=600&q=80", price: 21999, duration: "4N/5D", desc: "Premium houseboat stay, floral bed decoration, candlelit dinner, and private shikara ride." },
        { id: "kas_honey_2", name: "Gulmarg Snow Romance", image: "https://images.unsplash.com/photo-1610488339178-5712e0324835?w=600&q=80", price: 25999, duration: "4N/5D", desc: "Stay in a luxury resort in Gulmarg with snow activities and a private Gondola cabin." }
      ],
      places: [
        { id: "kas_place_1", name: "Srinagar", image: "https://images.unsplash.com/photo-1582239333333-e18e1efd211b?w=600&q=80", price: 9999, duration: "2N/3D", desc: "The summer capital, known for lakes, gardens, and houseboats." },
        { id: "kas_place_2", name: "Gulmarg", image: "https://images.unsplash.com/photo-1558231908-1f5b08df1b53?w=600&q=80", price: 11999, duration: "2N/3D", desc: "A premier ski destination and home to the world's highest gondola." },
        { id: "kas_place_3", name: "Pahalgam", image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=600&q=80", price: 10500, duration: "2N/3D", desc: "Beautiful valley known for the Betaab Valley and Aru Valley." }
      ],
      packages: [
        { id: "kas_pack_1", name: "Kashmir Grand Tour", image: "/destinations/kashmir.png", price: 28999, duration: "7N/8D", desc: "Explore Srinagar, Gulmarg, Pahalgam, and Sonamarg in one epic journey." }
      ]
    }
  },
  {
    id: "goa",
    name: "Goa",
    tagline: "Beach Paradise",
    image: "/destinations/goa.png",
    rating: 4.7,
    reviewCount: 3120,
    startingPrice: 9999,
    duration: "3N/4D",
    featured: false,
    description: "Unwind on the sun-kissed beaches of Goa. This perfect blend of Indian and Portuguese cultures offers something for everyone—from thrilling water sports and vibrant nightlife to historic churches.",
    highlights: ["Baga & Calangute Beach", "Basilica of Bom Jesus", "Dudhsagar Waterfalls Trek", "Sunset Cruise on Mandovi River", "Spice Plantation Tour"],
    inclusions: ["3 Nights Resort Accommodation", "Daily Breakfast", "Airport Transfers", "Half-day North Goa Tour", "Sunset Cruise Ticket"],
    exclusions: ["Flights", "Water Sports", "Meals not specified", "Personal Expenses"],
    itinerary: [
      { day: 1, title: "Arrival in Goa", desc: "Welcome to Goa! Transfer to your beach resort. Spend the evening relaxing by the sea." },
      { day: 2, title: "North Goa Tour", desc: "Visit Aguada Fort, Calangute, Baga, and Anjuna beaches. Enjoy thrilling water sports." },
      { day: 3, title: "South Goa & Cruise", desc: "Explore Old Goa churches, Mangueshi Temple. Evening sunset cruise on Mandovi River." },
      { day: 4, title: "Departure", desc: "Morning at leisure. Check-out and transfer to the airport." }
    ],
    categories: {
      spiritual: [
        { id: "goa_spir_1", name: "Old Goa Church Tour", image: "https://images.unsplash.com/photo-1614081691316-2495b28d7d91?w=600&q=80", price: 3999, duration: "1N/2D", desc: "Visit Basilica of Bom Jesus, Se Cathedral, and Church of St. Francis of Assisi." },
        { id: "goa_spir_2", name: "Temple Tour of Ponda", image: "https://images.unsplash.com/photo-1596489389975-f823a07ce31f?w=600&q=80", price: 4500, duration: "1N/2D", desc: "Explore Mangueshi Temple, Shanta Durga Temple, and nearby spice plantations." }
      ],
      honeymoon: [
        { id: "goa_honey_1", name: "South Goa Luxury Escape", image: "https://images.unsplash.com/photo-1528659134988-cb7328bf7a53?w=600&q=80", price: 24999, duration: "4N/5D", desc: "Stay in a 5-star beachfront resort in South Goa. Includes couples spa and private beach dinner." }
      ],
      places: [
        { id: "goa_place_1", name: "North Goa Beaches", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80", price: 8999, duration: "2N/3D", desc: "Baga, Calangute, and Anjuna for parties and water sports." },
        { id: "goa_place_2", name: "Dudhsagar Falls", image: "https://images.unsplash.com/photo-1574768395568-154dfc2e92c2?w=600&q=80", price: 5500, duration: "1 Day Trip", desc: "Majestic 4-tiered waterfall in the Bhagwan Mahaveer Sanctuary." }
      ],
      packages: [
        { id: "goa_pack_1", name: "Ultimate Goa Party Tour", image: "https://images.unsplash.com/photo-1516681467439-d3bd209cc5b1?w=600&q=80", price: 15999, duration: "4N/5D", desc: "Includes VIP club entries, yacht party, and luxury villa stay." }
      ]
    }
  },
  {
    id: "kerala",
    name: "Kerala",
    tagline: "God's Own Country",
    image: "/destinations/kerala.png",
    rating: 4.8,
    reviewCount: 2100,
    startingPrice: 15999,
    duration: "5N/6D",
    featured: true,
    description: "Journey through 'God's Own Country', where rolling tea gardens of Munnar meet the tranquil backwaters of Alleppey. Experience authentic Ayurveda and spot wildlife in Periyar.",
    highlights: ["Munnar Tea Gardens", "Periyar Wildlife Sanctuary", "Alleppey Houseboat Stay", "Kathakali Performance", "Kochi Fort Exploration"],
    inclusions: ["5 Nights Accommodation (1 on Houseboat)", "All Meals on Houseboat", "Daily Breakfast at Hotels", "Private AC Cab", "Sightseeing Tours"],
    exclusions: ["Airfare", "Entry Tickets", "Ayurvedic Massages", "Any extra meals"],
    itinerary: [
      { day: 1, title: "Arrival at Kochi & Drive to Munnar", desc: "Arrive at Kochi and enjoy a scenic drive to Munnar. En route visit Cheeyappara Waterfalls." },
      { day: 2, title: "Munnar Sightseeing", desc: "Visit Eravikulam National Park, Mattupetty Dam, Echo Point, and sprawling Tea Estates." },
      { day: 3, title: "Munnar to Thekkady", desc: "Drive to Thekkady. Afternoon boat ride at Periyar Lake to spot wildlife." },
      { day: 4, title: "Thekkady to Alleppey", desc: "Proceed to Alleppey. Check into a traditional houseboat. Cruise through the backwaters." },
      { day: 5, title: "Alleppey to Kochi", desc: "Morning check-out. Drive to Kochi. Visit Fort Kochi and Chinese Fishing Nets." },
      { day: 6, title: "Departure", desc: "Transfer to Kochi airport for your return flight." }
    ],
    categories: {
      spiritual: [
        { id: "ker_spir_1", name: "Sree Padmanabhaswamy Temple", image: "https://images.unsplash.com/photo-1627885060193-27cbfbbdf2db?w=600&q=80", price: 4999, duration: "1N/2D", desc: "Visit the richest temple in the world in Trivandrum. Special darshan included." }
      ],
      honeymoon: [
        { id: "ker_honey_1", name: "Munnar Treehouse Romance", image: "https://images.unsplash.com/photo-1596489389975-f823a07ce31f?w=600&q=80", price: 28999, duration: "3N/4D", desc: "Stay in an exclusive treehouse surrounded by nature. Couple's ayurvedic massage included." },
        { id: "ker_honey_2", name: "Kumarakom Private Houseboat", image: "/destinations/kerala.png", price: 22999, duration: "2N/3D", desc: "Ultra-luxury private AC houseboat for couples with a personal chef." }
      ],
      places: [
        { id: "ker_place_1", name: "Munnar", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80", price: 8999, duration: "2N/3D", desc: "Famous for its endless tea estates and cool climate." },
        { id: "ker_place_2", name: "Alleppey", image: "https://images.unsplash.com/photo-1593693397690-362bb9a1153a?w=600&q=80", price: 11999, duration: "2N/3D", desc: "The Venice of the East, famous for backwater cruising." }
      ],
      packages: [
        { id: "ker_pack_1", name: "Kerala Ayurveda Retreat", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80", price: 35999, duration: "7N/8D", desc: "Complete rejuvenation with daily authentic Ayurvedic treatments in a wellness resort." }
      ]
    }
  },
  {
    id: "sikkim",
    name: "Sikkim",
    tagline: "Himalayan Wonderland",
    image: "/destinations/sikkim.png",
    rating: 4.9,
    reviewCount: 1560,
    startingPrice: 22999,
    duration: "6N/7D",
    featured: false,
    description: "Explore the mystical land of Sikkim, nestled in the Himalayas. From the vibrant monasteries in Gangtok to the frozen beauty of Tsomgo Lake, this state offers stunning vistas of Mt. Kanchenjunga.",
    highlights: ["Tsomgo Lake & Baba Mandir", "Nathula Pass Excursion", "Rumtek Monastery", "Yumthang Valley", "Pelling Sky Walk"],
    inclusions: ["6 Nights Premium Stay", "Breakfast & Dinner", "Dedicated SUV for Sightseeing", "All Inner Line Permits", "Airport Transfers"],
    exclusions: ["Flights/Trains", "Nathula Pass Entry", "Lunch", "Personal Expenses"],
    itinerary: [
      { day: 1, title: "Arrival in Gangtok", desc: "Arrive at Bagdogra/NJP and transfer to Gangtok. Evening free to explore MG Marg." },
      { day: 2, title: "Tsomgo Lake Excursion", desc: "Day trip to the glacial Tsomgo Lake and the sacred Baba Harbhajan Singh Mandir." },
      { day: 3, title: "Gangtok to Lachung", desc: "Drive to North Sikkim. En route visit Seven Sisters Waterfall. Overnight in Lachung." },
      { day: 4, title: "Yumthang Valley", desc: "Morning excursion to Yumthang Valley. Afternoon return drive to Gangtok." },
      { day: 5, title: "Gangtok to Pelling", desc: "Transfer to Pelling. En route visit Buddha Park at Ravangla." },
      { day: 6, title: "Pelling Sightseeing", desc: "Visit Pemayangtse Monastery, Rabdentse Ruins, and the glass Sky Walk." },
      { day: 7, title: "Departure", desc: "Morning check-out and transfer to Bagdogra/NJP." }
    ],
    categories: {
      spiritual: [
        { id: "sik_spir_1", name: "Monastery Tour of Sikkim", image: "https://images.unsplash.com/photo-1544015759-236b2f679780?w=600&q=80", price: 12999, duration: "3N/4D", desc: "Visit Rumtek, Pemayangtse, and Enchey monasteries to experience Tibetan Buddhism." }
      ],
      honeymoon: [
        { id: "sik_honey_1", name: "Romantic Gangtok & Pelling", image: "https://images.unsplash.com/photo-1627885060193-27cbfbbdf2db?w=600&q=80", price: 26999, duration: "5N/6D", desc: "Luxury suite stays with Kanchenjunga views, private bonfires, and romantic dinners." }
      ],
      places: [
        { id: "sik_place_1", name: "North Sikkim (Lachung)", image: "https://images.unsplash.com/photo-1589136149959-19fc7d18ce52?w=600&q=80", price: 14999, duration: "3N/4D", desc: "Explore Yumthang Valley and Zero Point." },
        { id: "sik_place_2", name: "Gangtok", image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=600&q=80", price: 9999, duration: "3N/4D", desc: "The vibrant capital with great food, shopping, and views." }
      ],
      packages: [
        { id: "sik_pack_1", name: "Sikkim Explorer Package", image: "/destinations/sikkim.png", price: 32999, duration: "8N/9D", desc: "Complete coverage of East, West, and North Sikkim." }
      ]
    }
  },
  {
    id: "himachal",
    name: "Himachal Pradesh",
    tagline: "Dev Bhoomi",
    image: "/destinations/himachal.png",
    rating: 4.7,
    reviewCount: 2780,
    startingPrice: 11999,
    duration: "4N/5D",
    featured: false,
    description: "Escape to the 'Dev Bhoomi' (Land of Gods). Himachal Pradesh enchants with its pine-clad valleys, snow-draped mountains, and gushing rivers. Perfect for honeymooners and adventure seekers.",
    highlights: ["Rohtang Pass Excursion", "Solang Valley Adventure", "Hadimba Temple", "Shimla Mall Road", "Kufri Snow Point"],
    inclusions: ["4 Nights Hotel Stay", "Breakfast & Dinner", "Volvo Bus Tickets", "Local Sightseeing by Private Cab", "Taxes"],
    exclusions: ["Adventure Sports Fees", "Rohtang Permit", "Lunches", "Tips & Porterage"],
    itinerary: [
      { day: 1, title: "Delhi to Manali", desc: "Overnight Volvo bus journey from Delhi to Manali." },
      { day: 2, title: "Manali Local Sightseeing", desc: "Arrive in Manali. Visit Hadimba Temple, Vashisht Hot Springs, and Mall Road." },
      { day: 3, title: "Solang Valley / Rohtang", desc: "Full day excursion to Solang Valley for adventure sports or Rohtang Pass." },
      { day: 4, title: "Kullu & Naggar Castle", desc: "Day trip to Kullu Valley. Visit shawl factories and the historic Naggar Castle." },
      { day: 5, title: "Departure", desc: "Morning at leisure for shopping. Evening Volvo bus back to Delhi." }
    ],
    categories: {
      spiritual: [
        { id: "him_spir_1", name: "Jwala Ji & Kangra Temples", image: "https://images.unsplash.com/photo-1627885060193-27cbfbbdf2db?w=600&q=80", price: 8999, duration: "2N/3D", desc: "Visit the highly revered Shaktipeeths in Kangra Valley." },
        { id: "him_spir_2", name: "Baijnath Shiva Temple", image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=600&q=80", price: 4500, duration: "1N/2D", desc: "Explore the ancient and majestic stone architecture of the 13th-century Lord Shiva temple." },
        { id: "him_spir_3", name: "Chamunda Devi Darshan", image: "https://images.unsplash.com/photo-1596489389975-f823a07ce31f?w=600&q=80", price: 3999, duration: "1 Day Trip", desc: "Seek blessings at the famous Chamunda Devi temple by the Baner River." },
        { id: "him_spir_4", name: "Naina Devi & Chintpurni", image: "https://images.unsplash.com/photo-1582239333333-e18e1efd211b?w=600&q=80", price: 6500, duration: "2N/3D", desc: "Spiritual tour covering two of the most significant Shaktipeeths in Himachal." }
      ],
      honeymoon: [
        { id: "him_honey_1", name: "Manali Snow Romance", image: "https://images.unsplash.com/photo-1610488339178-5712e0324835?w=600&q=80", price: 18999, duration: "4N/5D", desc: "Luxury boutique resort stay, candlelit dinner, and couple's snow activities in Solang." },
        { id: "him_honey_2", name: "Shimla Heritage Honeymoon", image: "https://images.unsplash.com/photo-1596489389975-f823a07ce31f?w=600&q=80", price: 16999, duration: "3N/4D", desc: "Stay in a British-era heritage property with breathtaking valley views." },
        { id: "him_honey_3", name: "Dalhousie Romantic Escape", image: "https://images.unsplash.com/photo-1549472624-a21ea41e0649?w=600&q=80", price: 17500, duration: "3N/4D", desc: "Walk through pine-clad valleys and visit Khajjiar (Mini Switzerland) with your loved one." },
        { id: "him_honey_4", name: "Kasauli Quiet Retreat", image: "https://images.unsplash.com/photo-1528659134988-cb7328bf7a53?w=600&q=80", price: 14999, duration: "2N/3D", desc: "A peaceful weekend getaway in the charming, quiet hills of Kasauli." }
      ],
      places: [
        { id: "him_place_1", name: "Spiti Valley", image: "https://images.unsplash.com/photo-1549472624-a21ea41e0649?w=600&q=80", price: 21999, duration: "6N/7D", desc: "The cold desert mountain valley known for Key Monastery and Chandratal Lake." },
        { id: "him_place_2", name: "Dharamshala & McLeod Ganj", image: "https://images.unsplash.com/photo-1582239333333-e18e1efd211b?w=600&q=80", price: 15999, duration: "4N/5D", desc: "Little Lhasa, home to the Dalai Lama, Tibetan culture, and serene monasteries." },
        { id: "him_place_3", name: "Kasol & Kheerganga", image: "/destinations/kasol.png", price: 8999, duration: "3N/4D", desc: "The Amsterdam of India. Perfect for trekkers, cafes, and the beautiful Parvati River." },
        { id: "him_place_4", name: "Bir Billing", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80", price: 9500, duration: "2N/3D", desc: "The Paragliding capital of India. Thrilling adventure and peaceful Tibetan colonies." },
        { id: "him_place_5", name: "Palampur Tea Gardens", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80", price: 10500, duration: "2N/3D", desc: "Lush green tea estates set against the majestic Dhauladhar mountain range." }
      ],
      packages: [
        { id: "him_pack_1", name: "Himachal Grand Tour", image: "/destinations/himachal.png", price: 29999, duration: "8N/9D", desc: "Covers Shimla, Kullu, Manali, Dharamshala, and Dalhousie." },
        { id: "him_pack_2", name: "Spiti Circuit Adventure", image: "https://images.unsplash.com/photo-1549472624-a21ea41e0649?w=600&q=80", price: 34999, duration: "9N/10D", desc: "Complete Spiti circuit including Kinnaur, Nako, Tabo, Kaza, and Chandratal." },
        { id: "him_pack_3", name: "Shimla-Manali Volvo Package", image: "https://images.unsplash.com/photo-1610488339178-5712e0324835?w=600&q=80", price: 21999, duration: "5N/6D", desc: "The classic romantic and family getaway package starting from Delhi." }
      ]
    }
  },
  {
    id: "up",
    name: "Uttar Pradesh",
    tagline: "Heritage & Spirituality",
    image: "/destinations/up.png",
    rating: 4.8,
    reviewCount: 980,
    startingPrice: 24999,
    duration: "5N/6D",
    featured: false,
    description: "Immerse yourself in the cultural heartland of India. Uttar Pradesh offers an unparalleled journey through time, featuring the architectural magnificence of the Taj Mahal in Agra, and the deep spiritual resonance of Varanasi's ghats.",
    highlights: ["Sunrise at Taj Mahal", "Varanasi Evening Aarti", "Agra Fort & Fatehpur Sikri", "Sarnath Buddhist Stupas", "Lucknow Culinary Tour"],
    inclusions: ["5 Nights Premium Accommodation", "Daily Breakfast", "Private AC Vehicle for Tour", "Local English Speaking Guides", "Boat Ride in Varanasi"],
    exclusions: ["Airfare/Train Fare", "Monument Entrance Fees", "Lunches & Dinners", "Camera Fees"],
    itinerary: [
      { day: 1, title: "Arrival in Lucknow", desc: "Arrive in the City of Nawabs. Evening culinary tour in Aminabad." },
      { day: 2, title: "Lucknow to Varanasi", desc: "Drive to Varanasi. Evening witness the grand Ganga Aarti at Dashashwamedh Ghat." },
      { day: 3, title: "Varanasi & Sarnath", desc: "Early morning boat ride on the Ganges. Visit Kashi Vishwanath Temple and Sarnath." },
      { day: 4, title: "Varanasi to Agra", desc: "Take a day train or flight to Agra. Check into the hotel and rest." },
      { day: 5, title: "Agra Sightseeing", desc: "Sunrise visit to the iconic Taj Mahal. Later explore Agra Fort and Itmad-ud-Daula." },
      { day: 6, title: "Fatehpur Sikri & Departure", desc: "Visit the ghost city of Fatehpur Sikri before transferring to Delhi for departure." }
    ],
    categories: {
      spiritual: [
        { id: "up_spir_1", name: "Kashi Darshan", image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=600&q=80", price: 7999, duration: "2N/3D", desc: "VIP darshan at Kashi Vishwanath, special Ganga Aarti viewing, and boat ride." },
        { id: "up_spir_2", name: "Mathura Vrindavan Yatra", image: "https://images.unsplash.com/photo-1627885060193-27cbfbbdf2db?w=600&q=80", price: 6500, duration: "1N/2D", desc: "Visit Banke Bihari Temple, Prem Mandir, and Krishna Janmabhoomi." },
        { id: "up_spir_3", name: "Ayodhya Ram Mandir", image: "https://images.unsplash.com/photo-1582239333333-e18e1efd211b?w=600&q=80", price: 8999, duration: "2N/3D", desc: "Darshan at the grand Ram Janmabhoomi temple and Saryu River Aarti." }
      ],
      honeymoon: [
        { id: "up_honey_1", name: "Taj Mahal Luxury Getaway", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80", price: 29999, duration: "2N/3D", desc: "Stay at a 5-star hotel with a direct view of the Taj Mahal. Private couple's photoshoot included." }
      ],
      places: [
        { id: "up_place_1", name: "Agra", image: "/destinations/up.png", price: 5999, duration: "1N/2D", desc: "Home to the Taj Mahal and Agra Fort." },
        { id: "up_place_2", name: "Varanasi", image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=600&q=80", price: 7500, duration: "2N/3D", desc: "The spiritual capital of India." }
      ],
      packages: [
        { id: "up_pack_1", name: "UP Heritage Circuit", image: "/destinations/up.png", price: 32999, duration: "7N/8D", desc: "Agra, Lucknow, Ayodhya, and Varanasi comprehensive tour." }
      ]
    }
  },
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    tagline: "Land of the Gods",
    image: "/destinations/uttarakhand.png",
    rating: 4.6,
    reviewCount: 1920,
    startingPrice: 10999,
    duration: "3N/4D",
    featured: false,
    description: "Experience the serenity of the 'Land of the Gods'. Uttarakhand combines the spiritual aura of Rishikesh and Haridwar with the scenic beauty of Nainital and Mussoorie.",
    highlights: ["Ganga Aarti in Rishikesh", "River Rafting & Camping", "Neelkanth Mahadev Temple", "Nainital Lake Boating", "Jim Corbett Safari"],
    inclusions: ["3 Nights Accommodation (1 Night Camp)", "Breakfast & Dinner", "Rafting in Rishikesh (16km)", "AC Vehicle for Transfers", "All Taxes"],
    exclusions: ["Flights/Trains", "Corbett Jeep Safari", "Adventure Activities", "Personal Expenses"],
    itinerary: [
      { day: 1, title: "Delhi to Rishikesh", desc: "Drive from Delhi. Check into a riverside camp. Evening enjoy bonfire and music." },
      { day: 2, title: "Adventure & Spirituality", desc: "Morning river rafting session. Afternoon visit Laxman Jhula and Parmarth Niketan for Aarti." },
      { day: 3, title: "Rishikesh to Mussoorie", desc: "Drive to the 'Queen of Hills'. Visit Kempty Falls and stroll along the Camel's Back Road." },
      { day: 4, title: "Departure", desc: "Morning at leisure. Drive back to Delhi with peaceful memories." }
    ],
    categories: {
      spiritual: [
        { id: "uk_spir_1", name: "Chardham Yatra", image: "https://images.unsplash.com/photo-1627885060193-27cbfbbdf2db?w=600&q=80", price: 35000, duration: "11N/12D", desc: "Complete pilgrimage to Kedarnath, Badrinath, Gangotri, and Yamunotri." },
        { id: "uk_spir_2", name: "Kedarnath Helicopter Darshan", image: "https://images.unsplash.com/photo-1623910271387-578d6de48a80?w=600&q=80", price: 18999, duration: "2N/3D", desc: "Fly directly to Kedarnath from Phata. Includes VIP darshan and overnight stay." },
        { id: "uk_spir_3", name: "Haridwar & Rishikesh", image: "/destinations/uttarakhand.png", price: 6500, duration: "2N/3D", desc: "Attend the Ganga Aarti at Har Ki Pauri and Parmarth Niketan." }
      ],
      honeymoon: [
        { id: "uk_honey_1", name: "Nainital Romantic Boat Ride", image: "https://images.unsplash.com/photo-1596489389975-f823a07ce31f?w=600&q=80", price: 15999, duration: "3N/4D", desc: "Stay in a lakeview resort. Includes a private boat ride on Naini Lake and a romantic dinner." },
        { id: "uk_honey_2", name: "Auli Snow Honeymoon", image: "https://images.unsplash.com/photo-1610488339178-5712e0324835?w=600&q=80", price: 21999, duration: "4N/5D", desc: "Experience Switzerland in India with a stay at a luxury ski resort in Auli." }
      ],
      places: [
        { id: "uk_place_1", name: "Jim Corbett National Park", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80", price: 12999, duration: "2N/3D", desc: "India's oldest national park, famous for Bengal Tigers." },
        { id: "uk_place_2", name: "Mussoorie", image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=600&q=80", price: 9500, duration: "2N/3D", desc: "The Queen of Hills, perfect for a quick weekend getaway." }
      ],
      packages: [
        { id: "uk_pack_1", name: "Uttarakhand Hill Station Tour", image: "https://images.unsplash.com/photo-1589136149959-19fc7d18ce52?w=600&q=80", price: 24999, duration: "6N/7D", desc: "Covers Nainital, Ranikhet, Almora, and Mukteshwar." }
      ]
    }
  },
  {
    id: "maharashtra",
    name: "Maharashtra",
    tagline: "Vibrant & Dynamic",
    image: "/destinations/maharashtra.png",
    rating: 4.7,
    reviewCount: 4200,
    startingPrice: 14999,
    duration: "4N/5D",
    featured: false,
    description: "From the bustling streets of Mumbai to the serene hill stations of Lonavala and Mahabaleshwar, Maharashtra offers a rich tapestry of history, culture, and nature.",
    highlights: ["Gateway of India", "Elephanta Caves", "Lonavala Tiger Point", "Mahabaleshwar Strawberries", "Ajanta Ellora Caves"],
    inclusions: ["4 Nights Hotel Accommodation", "Daily Breakfast", "AC Sedan Transfers", "Elephanta Ferry Tickets", "Toll & Parking"],
    exclusions: ["Airfare/Train", "Meals other than Breakfast", "Entry Tickets", "Personal Expenses"],
    itinerary: [
      { day: 1, title: "Arrival in Mumbai", desc: "Arrive in the city of dreams. Visit Gateway of India, Marine Drive, and Colaba." },
      { day: 2, title: "Elephanta Caves", desc: "Morning ferry to Elephanta Caves. Afternoon drive to Lonavala." },
      { day: 3, title: "Lonavala & Khandala", desc: "Explore Tiger Point, Bhushi Dam, and Karla Caves. Enjoy the pleasant weather." },
      { day: 4, title: "Mahabaleshwar Excursion", desc: "Drive to Mahabaleshwar. Visit Mapro Garden and Arthur's Seat." },
      { day: 5, title: "Departure", desc: "Drive back to Mumbai for your onward journey." }
    ],
    categories: {
      spiritual: [
        { id: "mah_spir_1", name: "Shirdi Sai Baba Yatra", image: "https://images.unsplash.com/photo-1627885060193-27cbfbbdf2db?w=600&q=80", price: 5500, duration: "1N/2D", desc: "Special VIP darshan at Shirdi Sai Baba Temple. Includes AC transport from Mumbai." },
        { id: "mah_spir_2", name: "Trimbakeshwar Jyotirlinga", image: "https://images.unsplash.com/photo-1596489389975-f823a07ce31f?w=600&q=80", price: 4999, duration: "1N/2D", desc: "Visit one of the 12 Jyotirlingas in Nashik." },
        { id: "mah_spir_3", name: "Siddhivinayak & Mahalakshmi", image: "/destinations/maharashtra.png", price: 2999, duration: "1 Day Trip", desc: "Guided spiritual tour in Mumbai covering the most famous temples." }
      ],
      honeymoon: [
        { id: "mah_honey_1", name: "Lonavala Private Villa", image: "https://images.unsplash.com/photo-1528659134988-cb7328bf7a53?w=600&q=80", price: 21999, duration: "2N/3D", desc: "Stay in a luxury villa with a private pool in Lonavala. Perfect romantic escape." },
        { id: "mah_honey_2", name: "Mahabaleshwar Romance", image: "https://images.unsplash.com/photo-1596489389975-f823a07ce31f?w=600&q=80", price: 18999, duration: "3N/4D", desc: "Enjoy strawberry picking, Venna Lake boat ride, and cozy weather." }
      ],
      places: [
        { id: "mah_place_1", name: "Mumbai", image: "/destinations/maharashtra.png", price: 7999, duration: "2N/3D", desc: "The financial capital, known for Bollywood, Marine Drive, and street food." },
        { id: "mah_place_2", name: "Ajanta & Ellora (Aurangabad)", image: "https://images.unsplash.com/photo-1582239333333-e18e1efd211b?w=600&q=80", price: 12999, duration: "3N/4D", desc: "UNESCO World Heritage site featuring ancient rock-cut caves." }
      ],
      packages: [
        { id: "mah_pack_1", name: "Maharashtra Highlights", image: "/destinations/maharashtra.png", price: 28999, duration: "6N/7D", desc: "Covers Mumbai, Lonavala, Pune, and Mahabaleshwar." }
      ]
    }
  },
  {
    id: "karnataka",
    name: "Karnataka",
    tagline: "One State, Many Worlds",
    image: "/destinations/karnataka.png",
    rating: 4.8,
    reviewCount: 1650,
    startingPrice: 17999,
    duration: "5N/6D",
    featured: false,
    description: "Discover the magic of Karnataka, from the high-tech hub of Bangalore and the royal palaces of Mysore to the ancient ruins of Hampi and the coffee estates of Coorg.",
    highlights: ["Mysore Palace Illumination", "Hampi Stone Chariot", "Coorg Coffee Plantations", "Jog Falls View", "Bangalore City Tour"],
    inclusions: ["5 Nights Premium Hotel Stay", "Breakfast & Dinner", "Private AC SUV", "Mysore Palace Entry Ticket", "English Speaking Driver"],
    exclusions: ["Airfare/Train", "Safari Tickets", "Lunches", "Tips and Porterage"],
    itinerary: [
      { day: 1, title: "Arrival in Bangalore", desc: "Arrive in the Garden City. Visit Lalbagh Botanical Garden and Vidhana Soudha." },
      { day: 2, title: "Bangalore to Mysore", desc: "Drive to the Royal City. Visit Srirangapatna en route. Evening Mysore Palace illumination." },
      { day: 3, title: "Mysore to Coorg", desc: "Drive to the Scotland of India. Visit Chamundi Hills before leaving. Relax in Coorg." },
      { day: 4, title: "Coorg Sightseeing", desc: "Visit Abbey Falls, Raja's Seat, and Dubare Elephant Camp." },
      { day: 5, title: "Coorg to Hassan / Hampi", desc: "Drive towards heritage sites. Stop at Belur and Halebidu temples." },
      { day: 6, title: "Departure", desc: "Drive back to Bangalore for your onward journey." }
    ],
    categories: {
      spiritual: [
        { id: "kar_spir_1", name: "Murdeshwar & Gokarna", image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=600&q=80", price: 11999, duration: "3N/4D", desc: "Visit the massive Shiva statue at Murdeshwar and the revered Mahabaleshwar temple in Gokarna." },
        { id: "kar_spir_2", name: "Udupi Sri Krishna Darshan", image: "https://images.unsplash.com/photo-1627885060193-27cbfbbdf2db?w=600&q=80", price: 6500, duration: "1N/2D", desc: "Spiritual tour of Udupi Matha and nearby beautiful beaches." },
        { id: "kar_spir_3", name: "Belur & Halebidu", image: "https://images.unsplash.com/photo-1582239333333-e18e1efd211b?w=600&q=80", price: 5500, duration: "1 Day Trip", desc: "Explore the intricate ancient Hoysala temple architecture." }
      ],
      honeymoon: [
        { id: "kar_honey_1", name: "Coorg Coffee Estate Romance", image: "https://images.unsplash.com/photo-1596489389975-f823a07ce31f?w=600&q=80", price: 23999, duration: "3N/4D", desc: "Stay in a luxury plantation resort with private jacuzzi and candlelit dinner." },
        { id: "kar_honey_2", name: "Kabini Wildlife Luxury", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80", price: 34999, duration: "2N/3D", desc: "Premium river-facing lodge stay with two exclusive jeep safaris included." }
      ],
      places: [
        { id: "kar_place_1", name: "Hampi", image: "/destinations/karnataka.png", price: 14999, duration: "2N/3D", desc: "UNESCO World Heritage site known for its majestic ancient ruins." },
        { id: "kar_place_2", name: "Mysore", image: "https://images.unsplash.com/photo-1589136149959-19fc7d18ce52?w=600&q=80", price: 8999, duration: "2N/3D", desc: "The cultural capital famous for the Mysore Palace and silk." }
      ],
      packages: [
        { id: "kar_pack_1", name: "Karnataka Heritage & Nature", image: "/destinations/karnataka.png", price: 35999, duration: "7N/8D", desc: "Bangalore, Mysore, Kabini, and Coorg complete circuit." }
      ]
    }
  }
];

// ---- TRENDING TOUR PACKAGES ----
export const trendingPackages = [
  {
    id: "golden-triangle",
    name: "Golden Triangle Tour",
    image: "https://images.unsplash.com/photo-1564507592806-6dcdb7ced5e1?w=800&q=80",
    rating: 4.9,
    reviewCount: 1240,
    price: 14999,
    originalPrice: 19999,
    duration: "5N/6D",
    hotelStars: 4,
    mealsIncluded: true,
    transportType: "AC Car",
    discount: 25,
    highlights: ["Delhi", "Agra", "Jaipur"],
    category: "bestseller"
  },
  {
    id: "royal-rajasthan",
    name: "Royal Rajasthan Tour",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
    rating: 4.8,
    reviewCount: 890,
    price: 24999,
    originalPrice: 34999,
    duration: "7N/8D",
    hotelStars: 4,
    mealsIncluded: true,
    transportType: "AC Car",
    discount: 28,
    highlights: ["Jaipur", "Jodhpur", "Udaipur", "Jaisalmer"],
    category: "trending"
  },
  {
    id: "kashmir-paradise",
    name: "Kashmir Paradise Tour",
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150458?w=800&q=80",
    rating: 4.9,
    reviewCount: 670,
    price: 18999,
    originalPrice: 24999,
    duration: "5N/6D",
    hotelStars: 4,
    mealsIncluded: true,
    transportType: "AC Car",
    discount: 24,
    highlights: ["Srinagar", "Gulmarg", "Pahalgam", "Sonamarg"],
    category: "trending"
  },
  {
    id: "goa-beaches",
    name: "Goa Beach Holiday",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
    rating: 4.7,
    reviewCount: 1560,
    price: 9999,
    originalPrice: 14999,
    duration: "3N/4D",
    hotelStars: 3,
    mealsIncluded: false,
    transportType: "AC Car",
    discount: 33,
    highlights: ["North Goa", "South Goa", "Old Goa"],
    category: "bestseller"
  },
  {
    id: "kerala-backwaters",
    name: "Kerala Backwaters",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
    rating: 4.8,
    reviewCount: 780,
    price: 16999,
    originalPrice: 22999,
    duration: "5N/6D",
    hotelStars: 4,
    mealsIncluded: true,
    transportType: "AC Car",
    discount: 26,
    highlights: ["Munnar", "Alleppey", "Kochi", "Thekkady"],
    category: "trending"
  },
  {
    id: "ladakh-adventure",
    name: "Ladakh Adventure",
    image: "https://images.unsplash.com/photo-1626015365107-71ea3f3d4e1d?w=800&q=80",
    rating: 4.9,
    reviewCount: 450,
    price: 22999,
    originalPrice: 29999,
    duration: "6N/7D",
    hotelStars: 3,
    mealsIncluded: true,
    transportType: "AC Car",
    discount: 23,
    highlights: ["Leh", "Pangong Lake", "Nubra Valley", "Khardung La"],
    category: "bestseller"
  }
];

// ---- EXPERIENCES ----
export const experiences = [
  { id: "adventure", name: "Adventure", icon: "🏔️", image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=600&q=80", count: 45 },
  { id: "honeymoon", name: "Honeymoon", icon: "💑", image: "https://images.unsplash.com/photo-1439130490301-25e322d88054?w=600&q=80", count: 32 },
  { id: "family", name: "Family", icon: "👨‍👩‍👧‍👦", image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80", count: 58 },
  { id: "wildlife", name: "Wildlife", icon: "🐯", image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&q=80", count: 24 },
  { id: "luxury", name: "Luxury", icon: "👑", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80", count: 18 },
  { id: "religious", name: "Religious", icon: "🙏", image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80", count: 36 },
  { id: "road-trips", name: "Road Trips", icon: "🚗", image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80", count: 28 },
  { id: "weekend", name: "Weekend Getaways", icon: "🏖️", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80", count: 42 }
];

// ---- WHY CHOOSE US ----
export const whyChooseUs = [
  { icon: "💰", title: "Best Price Guarantee", description: "We offer the most competitive prices with no hidden charges. Found cheaper? We'll match it." },
  { icon: "📞", title: "24/7 Support", description: "Round-the-clock assistance whenever you need it. Our team is always just a call away." },
  { icon: "🏨", title: "Verified Hotels", description: "Every hotel is personally inspected and verified to meet our quality standards." },
  { icon: "🧭", title: "Local Guides", description: "Experienced local guides who know every hidden gem and share authentic stories." },
  { icon: "🔒", title: "Secure Booking", description: "Your payments and personal data are protected with bank-grade encryption." },
  { icon: "✨", title: "Custom Packages", description: "Tailor-made itineraries designed around your preferences, budget, and schedule." }
];

// ---- TESTIMONIALS ----
export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, India",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Absolutely incredible experience! The Rajasthan tour was meticulously planned. Every hotel, every guide, every moment was perfect. This team truly goes above and beyond.",
    tour: "Royal Rajasthan Tour"
  },
  {
    id: 2,
    name: "Rahul Mehta",
    location: "Delhi, India",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "Our Kashmir trip was a dream come true. The houseboat stay, the shikara ride, the snow-capped mountains — everything was arranged seamlessly. Highly recommended!",
    tour: "Kashmir Paradise Tour"
  },
  {
    id: 3,
    name: "Ananya Patel",
    location: "Bengaluru, India",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "The Kerala backwaters experience was magical. The houseboat was luxurious, the food was authentic, and the team handled every detail. Will definitely book again!",
    tour: "Kerala Backwaters"
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Jaipur, India",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 4,
    text: "The Ladakh adventure trip was one of the best decisions of my life. Challenging yet rewarding. The guides were knowledgeable and the accommodations were comfortable.",
    tour: "Ladakh Adventure"
  },
  {
    id: 5,
    name: "Sneha Gupta",
    location: "Pune, India",
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    rating: 5,
    text: "Our honeymoon in Goa was absolutely perfect! The private beach resort, the sunset cruise — every moment was romantic. Thank you for making it so special!",
    tour: "Goa Beach Holiday"
  }
];

// ---- GALLERY IMAGES ----
export const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80", location: "Taj Mahal, Agra", tall: true },
  { id: 2, src: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80", location: "Hawa Mahal, Jaipur", tall: false },
  { id: 3, src: "https://images.unsplash.com/photo-1597074866923-dc0589150458?w=600&q=80", location: "Dal Lake, Kashmir", tall: true },
  { id: 4, src: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80", location: "Beaches of Goa", tall: false },
  { id: 5, src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80", location: "Backwaters, Kerala", tall: false },
  { id: 6, src: "https://images.unsplash.com/photo-1626015365107-71ea3f3d4e1d?w=600&q=80", location: "Pangong Lake, Ladakh", tall: true },
  { id: 7, src: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80", location: "Varanasi Ghats", tall: false },
  { id: 8, src: "https://images.unsplash.com/photo-1564507592806-6dcdb7ced5e1?w=600&q=80", location: "India Gate, Delhi", tall: false },
  { id: 9, src: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80", location: "Humayun's Tomb, Delhi", tall: true },
  { id: 10, src: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=600&q=80", location: "Jodhpur, The Blue City", tall: false },
  { id: 11, src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80", location: "Rishikesh, Uttarakhand", tall: false },
  { id: 12, src: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80", location: "Mumbai Skyline", tall: true }
];

// ---- BLOG POSTS ----
export const blogPosts = [
  {
    id: 1,
    title: "10 Hidden Gems in Rajasthan You Must Visit",
    excerpt: "Beyond the popular tourist spots, Rajasthan hides some incredible treasures that most travelers miss. Discover these secret destinations...",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80",
    category: "Destinations",
    date: "Jul 15, 2026",
    author: { name: "Travel Desk", avatar: "https://randomuser.me/api/portraits/men/11.jpg" },
    readTime: "5 min"
  },
  {
    id: 2,
    title: "The Ultimate Kashmir Travel Guide 2026",
    excerpt: "Everything you need to know about planning your dream Kashmir trip — from the best time to visit to must-try local cuisines...",
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150458?w=600&q=80",
    category: "Guides",
    date: "Jul 10, 2026",
    author: { name: "Explorer Team", avatar: "https://randomuser.me/api/portraits/women/45.jpg" },
    readTime: "8 min"
  },
  {
    id: 3,
    title: "Budget Travel: How to Explore India Under ₹15,000",
    excerpt: "Traveling India doesn't have to break the bank. Here are our top tips for experiencing incredible India on a budget...",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80",
    category: "Tips",
    date: "Jul 5, 2026",
    author: { name: "Budget Guru", avatar: "https://randomuser.me/api/portraits/men/36.jpg" },
    readTime: "6 min"
  }
];

// ---- FAQ ----
export const faqItems = [
  {
    question: "How do I book a tour package?",
    answer: "Booking is simple! Browse our tour packages, select your preferred one, fill in your details, and our travel expert will contact you within 30 minutes to finalize your booking. You can also call us directly or chat on WhatsApp."
  },
  {
    question: "Can I customize a tour package?",
    answer: "Absolutely! We specialize in tailor-made itineraries. Tell us your preferences, budget, dates, and group size, and we'll craft a personalized tour just for you. Custom packages can be requested via our contact form or WhatsApp."
  },
  {
    question: "What is included in the tour price?",
    answer: "Our tour packages typically include accommodation, meals (as specified), local transportation, sightseeing, guide services, and all applicable taxes. Specific inclusions and exclusions are listed on each package detail page."
  },
  {
    question: "What is the cancellation policy?",
    answer: "Free cancellation is available up to 7 days before the trip start date. Cancellations within 3-7 days incur a 25% charge, and within 72 hours, a 50% charge applies. Full refunds are processed within 5-7 business days."
  },
  {
    question: "Do you offer group discounts?",
    answer: "Yes! We offer special pricing for groups of 10 or more travelers. The discount varies based on the destination, season, and group size. Contact our sales team for a customized group quote."
  },
  {
    question: "Is travel insurance included?",
    answer: "Basic travel assistance is included with all packages. We also offer comprehensive travel insurance as an add-on at affordable rates, covering medical emergencies, trip cancellations, and baggage loss."
  }
];

// ---- SERVICES ----
export const services = [
  { id: "travel-booking", icon: "🚗", title: "Travel Booking", description: "Unlock India's Wonders with Our Exclusive Rental Services." },
  { id: "raj-darshan", icon: "🏰", title: "Raj Darshan", description: "Go deep into the land of the Rajputs. Explore majestic forts and palaces." },
  { id: "luxury-car", icon: "🚘", title: "Luxury Car Rentals", description: "Choose from Sedans, SUVs, and High-End Vehicles." },
  { id: "bus-rental", icon: "🚌", title: "Group Travel: Bus Rentals", description: "Comfortable Standard Buses and Luxurious Coaches." },
  { id: "tempo-traveller", icon: "🚐", title: "Tempo Traveller Rentals", description: "Premium Tempo Travellers with reclining seats." }
];

// ---- DESTINATIONS (DETAILED — used for individual pages) ----
export const destinations = [
  {
    id: "jaipur",
    name: "Jaipur",
    title: "Journey Through Jaipur",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&q=80",
    category: "Rajasthan Tours",
    rating: 4.8,
    reviewCount: 2340,
    startingPrice: 12999,
    duration: "3N/4D",
    description: "When you think of Jaipur, India, what springs to mind? A city where history breathes through every archway, and the streets are bathed in the warm glow of pink.",
    longDescription: "Welcome to Jaipur, the gem of Rajasthan — a place where time stands still to tell stories of royalty and tradition. With its iconic pink-hued buildings, a symbol of hospitality and warmth, Jaipur invites you to embark on an unforgettable journey.",
    highlights: [
      { name: "City Palace", desc: "An architectural marvel combining the best of Rajasthani and Mughal influences." },
      { name: "Hawa Mahal", desc: "A stunning architectural marvel that captivates with its intricate design." },
      { name: "Jal Mahal", desc: "A stunning marvel nestled amidst the serene waters of Man Sagar Lake." }
    ],
    itinerary: [
      { day: 1, title: "Arrival & City Orientation", description: "Arrive in Jaipur, check-in to your hotel. Evening visit to Birla Temple and local market exploration." },
      { day: 2, title: "Forts & Palaces", description: "Visit Amber Fort, Jaigarh Fort, City Palace, Hawa Mahal, and Jantar Mantar." },
      { day: 3, title: "Culture & Shopping", description: "Explore Albert Hall Museum, Nahargarh Fort, and the colorful bazaars of Jaipur." },
      { day: 4, title: "Departure", description: "Breakfast at hotel. Visit Jal Mahal and depart with beautiful memories." }
    ],
    included: ["3-star hotel accommodation", "Daily breakfast", "AC car transportation", "English-speaking guide", "All sightseeing as per itinerary", "GST and applicable taxes"],
    excluded: ["Airfare/train fare", "Personal expenses", "Entry fees to monuments", "Lunch and dinner", "Tips and gratuities"],
    gallery: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80"
    ],
    features: ["Hotels", "Meals", "Sightseeing", "Transfer"]
  },
  {
    id: "jodhpur",
    name: "Jodhpur",
    title: "Discover the Blue City",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=1200&q=80",
    category: "Rajasthan Tours",
    rating: 4.7,
    reviewCount: 1560,
    startingPrice: 11999,
    duration: "2N/3D",
    description: "Rajasthan's second-largest city is a captivating blend of history and modernity, with blue-washed buildings and majestic forts.",
    longDescription: "Known as the Blue City of India, Jodhpur offers a harmonious mix of age-old traditions and contemporary charm, with vibrant alleys washed in the signature shades of blue.",
    highlights: [
      { name: "Mehrangarh Fort", desc: "Looming over the Blue City on a 125m hill with stunning panoramic views." },
      { name: "Jaswant Thada", desc: "An ornate marble cenotaph built in memory of Maharaja Jaswant Singh II." },
      { name: "Umaid Bhawan Palace", desc: "One of the largest private residences in the world." }
    ],
    itinerary: [
      { day: 1, title: "Arrival & Fort Visit", description: "Arrive in Jodhpur. Visit Mehrangarh Fort and Jaswant Thada." },
      { day: 2, title: "City Exploration", description: "Visit Umaid Bhawan Palace, Clock Tower, and local markets." },
      { day: 3, title: "Departure", description: "Morning visit to Mandore Gardens. Depart." }
    ],
    included: ["Hotel accommodation", "Daily breakfast", "AC car", "Guide"],
    excluded: ["Airfare", "Personal expenses", "Entry fees"],
    gallery: [
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=600&q=80"
    ],
    features: ["Hotels", "Meals", "Sightseeing", "Transfer"]
  },
  {
    id: "udaipur",
    name: "Udaipur",
    title: "Royal Udaipur Awaits",
    image: "https://images.unsplash.com/photo-1602301100442-41f2bfe6e48d?w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1602301100442-41f2bfe6e48d?w=1200&q=80",
    category: "Rajasthan Tours",
    rating: 4.9,
    reviewCount: 2100,
    startingPrice: 14999,
    duration: "3N/4D",
    description: "Often called the 'Venice of the East,' Udaipur captivates visitors with its stunning lakes and magnificent palaces.",
    longDescription: "Known as the 'City of Lakes,' Udaipur offers a mesmerizing mix of serene waters, magnificent palaces, and a rich cultural heritage.",
    highlights: [
      { name: "City Palace", desc: "The grand City Palace overlooking Lake Pichola." },
      { name: "Lake Pichola", desc: "Enjoy a serene boat ride on crystal waters." },
      { name: "Jagdish Temple", desc: "An ancient Hindu temple known for beautiful carvings." }
    ],
    itinerary: [
      { day: 1, title: "Arrival", description: "Arrive in Udaipur. Evening boat ride on Lake Pichola." },
      { day: 2, title: "Palace Tour", description: "Visit City Palace, Saheliyon Ki Bari, and Fateh Sagar Lake." },
      { day: 3, title: "Culture Day", description: "Explore Jagdish Temple and local arts." },
      { day: 4, title: "Departure", description: "Morning free. Depart." }
    ],
    included: ["Hotel", "Breakfast", "AC car", "Guide", "Boat ride"],
    excluded: ["Airfare", "Personal expenses", "Entry fees"],
    gallery: ["https://images.unsplash.com/photo-1602301100442-41f2bfe6e48d?w=600&q=80"],
    features: ["Hotels", "Meals", "Sightseeing", "Transfer"]
  },
  {
    id: "jaisalmer",
    name: "Jaisalmer",
    title: "Golden Desert Adventure",
    image: "https://images.unsplash.com/photo-1621427640263-ba9d4865c5b6?w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1621427640263-ba9d4865c5b6?w=1200&q=80",
    category: "Rajasthan Tours",
    rating: 4.8,
    reviewCount: 1890,
    startingPrice: 13999,
    duration: "3N/4D",
    description: "Nestled in the heart of the Thar Desert, Jaisalmer is dominated by a remarkable, still-inhabited golden fort.",
    longDescription: "Jaisalmer offers more than just historic forts and vast deserts. Discover its hidden gems and experience the true spirit of this golden marvel.",
    highlights: [
      { name: "Sonar Quila", desc: "UNESCO World Heritage Site — the Golden Fort." },
      { name: "Sam Sand Dunes", desc: "Magical desert safari on golden sand dunes." },
      { name: "Patwon Ki Haveli", desc: "A cluster of five grand havelis." }
    ],
    itinerary: [
      { day: 1, title: "Arrival", description: "Arrive in Jaisalmer. Visit the Golden Fort." },
      { day: 2, title: "Desert Safari", description: "Morning city tour, evening desert safari with camping." },
      { day: 3, title: "Havelis & Culture", description: "Visit Patwon Ki Haveli and local culture." },
      { day: 4, title: "Departure", description: "Depart with memories." }
    ],
    included: ["Hotel + Desert Camp", "Breakfast", "AC car", "Safari"],
    excluded: ["Airfare", "Personal expenses"],
    gallery: ["https://images.unsplash.com/photo-1621427640263-ba9d4865c5b6?w=600&q=80"],
    features: ["Hotels", "Meals", "Sightseeing", "Transfer"]
  }
];

// ---- OFFERS ----
export const offers = [
  { id: 1, title: "Grab UPTO 25% OFF on Rajasthan Tours", description: "Book now to save more.", code: "RAJTRIP25", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80" },
  { id: 2, title: "Honeymoon Packages starting @ ₹9,999", description: "Make it memorable.", code: "HONEYMOON10", image: "https://images.unsplash.com/photo-1439130490301-25e322d88054?w=800&q=80" },
  { id: 3, title: "Spiritual Tours with 15% OFF", description: "Exclusive spiritual discounts.", code: "SPIRITUAL15", image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80" }
];

// ---- CITIES LIST ----
export const rajasthanCities = [
  "Jaipur", "Jodhpur", "Udaipur", "Jaisalmer", "Mount Abu",
  "Pushkar", "Ranthambore", "Bikaner", "Ajmer", "Chittorgarh",
  "Kota", "Alwar", "Bharatpur", "Bundi", "Mandawa",
  "Sawai Madhopur", "Kumbhalgarh", "Nathdwara", "Salasar", "Khatu"
];
