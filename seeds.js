use the_dungeon;

db.games.insert([
//   { 
//     title: "Tennis for Two",
//     developers: "William Higinbotham",
//     image: "https://www.google.co.uk/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwizpOLYxabSAhVEshQKHcyaAu4QjRwIBw&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Ds2E9iSQfGdg&psig=AFQjCNGPXhQ1IMt6SN9cKtcXPq8Ex9fwHw&ust=1487950491795321",
//     music: "n/a",
//     catagory: "Sports",
//     player_perspective: "Oscilloscopt",
//     game_modes: "n/a",
//     initial_release: "1958",
//     popularity: "Exhibited and forgotten",
//     platforms: "Analogue computer",
//     game_size: "11kB",
//     description: ""
//   },
//   {
//     title: "Sonic the Hedgehog",
//     developers: "Saga",
//     image: "https://pbs.twimg.com/profile_images/686613263811907584/Ni3AWru_.png",
//     music: "n/a",
//     catagory: "Adventure/Racing",
//     player_perspective: "n/a",
//     game_modes: "n/a",
//     initial_release: "1991",
//     popularity: "Over 15 million sold",
//     platforms: "Saga Genesis",
//     game_size: "512kB",
//     description: ""
//   },
//   {
//     title: "",
//     developers: "",
//     image: "",
//     music: "",
//     catagory: "",
//     player_perspective: "",
//     game_modes: "",
//     initial_release: "",
//     popularity: "",
//     platforms: "",
//     game_size: "",
//     description: ""
//   },
//   {
//     title: "",
//     developers: "",
//     image: "",
//     music: "",
//     catagory: "",
//     player_perspective: "",
//     game_modes: "",
//     initial_release: "",
//     popularity: "",
//     platforms: "",
//     game_size: "",
//     description: ""
//   }
// ]);

db.platforms.insert([
  {
    name: "Genesis, Mega Drive",
    manufacturor: "Saga",
    image: "",
    logo: "",
    release_date: "1988",
    original_price: "£189",
    description: ""
  },
  {
    name: "Magnavox Odyssey",
    manufacturor: "Magnavox",
    image: "",
    logo: "",
    release_date: "1972",
    original_price: "US$99 (equivalent to $566.83 in 2016",
    description: ""
  },
  {
    name: "Atari 2600",
    manufacturor: "Atari",
    image: "",
    logo: "",
    release_date: "1977",
    original_price: "US$199 (equivalent to $786.49 in 2016)",
    description: ""
  },
  {
    name: "ZX Spectrum 48k",
    manufacturor: "Timex Corporation",
    image: "",
    logo: "",
    release_date: "1982",
    original_price: "n/a",
    description: ""
  },
  {
    name: "Nintendo Entertainment System",
    manufacturor: "Nintendo",
    image: "",
    logo: "",
    release_date: "1983",
    original_price: "$299 (US Deluxe Set)",
    description: ""
  },
  {
    name: "Commodore Amiga 500",
    manufacturor: "Commodore International",
    image: "",
    logo: "",
    release_date: "1987",
    original_price: "$699 ($1500 2017 equivalent",
    description: ""
  },
  {
    name: "",
    manufacturor: "",
    image: "",
    logo: "",
    release_date: "",
    original_price: "",
    description: ""
  }
]);