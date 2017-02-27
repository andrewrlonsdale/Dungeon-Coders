
use the_dungeon;
db.games.drop();

// db.games.insert([
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

// db.platforms.insert([
//   {
//     name: "Genesis/Mega Drive",
//     manufacturor: "Saga",
//     image: "",
//     logo: "",
//     release_date: "1988",
//     original_price: "$189",
//     description: ""
//   },
//   {
//     name: "Magnavox Odyssey",
//     manufacturor: "Magnavox",
//     image: "",
//     logo: "",
//     release_date: "1972",
//     original_price: "US$99 (equivalent to $566.83 in 2016",
//     description: ""
//   },
//   {
//     name: "Atari 2600",
//     manufacturor: "Atari",
//     image: "",
//     logo: "",
//     release_date: "1977",
//     original_price: "US$199 (equivalent to $786.49 in 2016)",
//     description: ""
//   },
//   {
//     name: "ZX Spectrum 48k",
//     manufacturor: "Timex Corporation",
//     image: "",
//     logo: "",
//     release_date: "1982",
//     original_price: "n/a",
//     description: ""
//   },
//   {
//     name: "Nintendo Entertainment System",
//     manufacturor: "Nintendo",
//     image: "",
//     logo: "",
//     release_date: "1983",
//     original_price: "$299 (US Deluxe Set)",
//     description: ""
//   },
//   {
//     name: "Commodore Amiga 500",
//     manufacturor: "Commodore International",
//     image: "",
//     logo: "",
//     release_date: "1987",
//     original_price: "$699 ($1500 2017 equivalent",
//     description: ""
//   },
//   {
//     name: "",
//     manufacturor: "",
//     image: "",
//     logo: "",
//     release_date: "",
//     original_price: "",
//     description: ""
//   },
//   {
//     name: "PlayStation",
//     manufacturor: "Sony",
//     image: "",
//     logo: "",
//     release_date: "1994(",
//     original_price: "$299",
//     description: ""
//   },
//   {
//     name: "Dreamcast",
//     manufacturor: "Sega",
//     image: "",
//     logo: "",
//     release_date: "1999(",
//     original_price: "$199",
//     description: ""
//   },
//   {
//     name: "Xbox 360",
//     manufacturor: "Microsoft",
//     image: "",
//     logo: "",
//     release_date: "2005(",
//     original_price: "$299(core) $399(premium)",
//     description: ""
//   },
//   {
//     name: "Wii",
//     manufacturor: "Nintendo",
//     image: "",
//     logo: "",
//     release_date: "2006(",
//     original_price: "$249",
//     description: ""
//   }
// ]);

db.games.insert([
    {
      "console": "Atari Sears Tele-Games Pong System",
      "year": "1975",
      "img": "http://i758.photobucket.com/albums/xx226/focus1002/ASHPik_zpsb99fb2f7.png",
      "hardwareSpec": "128k",
      "unitSales": "",
      "copy":"This was the system that really brought gaming into the mainstream.  Following the huge commercial success of the 'Pong' arcade machine, Christmas of 1975 saw the release of Home Pong, and the dawn of gaming in the home."
    },

    {  
      "console": "Atari 2600",
      "year": "1977",
      // "img": "/images/...",
      "hardwareSpec": "CPU: 1.19mhz, 128bytes RAM",
      "unitSales": "",
      "copy":"Another game-changer from Atari.  The iconic 2600 was the first games console to use microprocessor based hardware along with a cartridge format, which meant that games no longer had to be hard-coded into the machine itself. It's not working? Blow on it and put it back in... There we go!"
    },

    {  
      "console": "Nintendo Entertainment System (NES)",
      "year": "1983",
      // "img": "/images/...",
      "hardwareSpec": "2A03 8-bit processor",
      "unitSales": "62,000,000",
      "copy":"The Daddy. The era changer.  This little beige box sat under millions of TV sets, spawning a generation of hardcore gamers.  Seminal games like 'Jumpman' (You may know him better as Mario), and Donkey Kong, and peripheral hardware like the 'zapper' light gun (Duck Hunt, anyone?) made the NES a stellar commercial success and cemented Nintendo's place at the top of the industry for years to come."
    },

    {  
      "console": "Sega Master System",
      "year": "1985",
      // "img": "/images/...",
      "hardwareSpec": "4mhz, 8kb RAM",
      "unitSales": "~13,000,000",
      "copy":"Every generation has their schisms.  Were you a mod or a rocker? Punk or Prog? Blur or Oasis? For folks of a certain age, the big question was 'Sega or Nintendo??'.  The Master System by Sega was a big rival to the NES, offering an edgier stable of games to counter Nintendo's slightly more cutesy image.  Units moved from stores as quickly as Sonic the Hedgehog's trainers."
    },

    {  
      "console": "Sony PlayStation",
      "year": "1994",
      // "img": "/images/...",
      "hardwareSpec": "R3000 @ 33.86mhz, 2MB RAM",
      "unitSales": "~103,000,000",
      "copy":"This is the moment when gaming truly came of age.  An exquisitely built machine, controller design that has endured for nearly a quarter-century and the introduction of game franchises that still thrill, excite and sell in the millions."
    },

    ])
