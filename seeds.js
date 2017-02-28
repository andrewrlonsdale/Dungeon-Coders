
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
      "tag": "1",
      "console": "Atari Sears Tele-Games Pong System",
      "year": "1975",
      "img": "http://i758.photobucket.com/albums/xx226/focus1002/ASHPik_zpsb99fb2f7.png",
      "hardwareSpec": "128k",
      "unitSales": 150000,
      "desc":"This was the system that really brought gaming into the mainstream.  Following the huge commercial success of the 'Pong' arcade machine, Christmas of 1975 saw the release of Home Pong, and the dawn of gaming in the home."
    },

    {  
      "tag": "2",
      "console": "Atari 2600",
      "year": "1977",
      "img": "http://i758.photobucket.com/albums/xx226/focus1002/ASHPik_zpsb99fb2f7.png",
      "hardwareSpec": "CPU: 1.19mhz, 128bytes RAM",
      "unitSales": 30000000,
      "desc":"Another game-changer from Atari.  The iconic 2600 was the first games console to use microprocessor based hardware along with a cartridge format, which meant that games no longer had to be hard-coded into the machine itself. It's not working? Blow on it and put it back in... There we go!"
    },

    {  
      "tag": "3",
      "console": "Nintendo Entertainment System (NES)",
      "year": "1983",
      "img": "http://i758.photobucket.com/albums/xx226/focus1002/ASHPik_zpsb99fb2f7.png",
      "hardwareSpec": "2A03 8-bit processor",
      "unitSales": 62000000,
      "desc":"The Daddy. The era changer.  This little beige box sat under millions of TV sets, spawning a generation of hardcore gamers.  Seminal games like 'Jumpman' (You may know him better as Mario), and Donkey Kong, and peripheral hardware like the 'zapper' light gun (Duck Hunt, anyone?) made the NES a stellar commercial success and cemented Nintendo's place at the top of the industry for years to come."
    },

    {  
      "tag": "4",
      "console": "Sega Master System",
      "year": "1985",
      "img": "http://i758.photobucket.com/albums/xx226/focus1002/ASHPik_zpsb99fb2f7.png",
      "hardwareSpec": "4mhz, 8kb RAM",
      "unitSales": 13000000,
      "desc":"Every generation has their schisms.  Were you a mod or a rocker? Punk or Prog? Blur or Oasis? For folks of a certain age, the big question was 'Sega or Nintendo??'.  The Master System by Sega was a big rival to the NES, offering an edgier stable of games to counter Nintendo's slightly more cutesy image.  Units moved from stores as quickly as Sonic the Hedgehog's trainers."
    },

    {  
      "tag": "5",
      "console": "Sony PlayStation",
      "year": "1994",
      "img": "http://i758.photobucket.com/albums/xx226/focus1002/ASHPik_zpsb99fb2f7.png",
      "hardwareSpec": "R3000 @ 33.86mhz, 2MB RAM",
      "unitSales": 103000000,
      "desc":"This is the moment when gaming truly came of age.  An exquisitely built machine, controller design that has endured for nearly a quarter-century and the introduction of game franchises that still thrill, excite and sell in the millions."
    },

    {  
      "tag": "6",
      "console": "Vectrex",
      "year": "1982",
      "img": "http://i972.photobucket.com/albums/ae206/alejandro_madera/Vectrex/DSCF3576.jpg",
      "hardwareSpec": "1.5mhz",
      "unitSales": 500000,
      "desc":"This was a unique machine.  Unlike it's peers, it came built with a vector monitor, rather than needing to be plugged into a TV.  The limitations of the monochrome monitor were gotten around by suppying the user with different coloured screen overlays! They just don't make 'em like that any more..."
    },

    {  
      "tag": "7",
      "console": "Sega SG-1000",
      "year": "1984",
      "img": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Sega-SG-1000-Console-Set.jpg",
      "hardwareSpec": "3.58mhz",
      "unitSales": null,
      "desc":"The older, slightly dumber brother of the Sega master system.  Build with hardware by Texas Instruments (yes, the calculator people!) This fella was launched in Japan on the same day as the Famicom, or NES.  It had no real impact on the gaming industry, but as the forerunner to the master system, it is definitely worth a mention."
    },

    {  
      "tag": "8",
      "console": "Atari 7800",
      "year": "1986",
      "img": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Atari-7800-Console-Set.jpg",
      "hardwareSpec": "1.78mhz",
      "unitSales": 3700000,
      "desc":"The 7800 pioneered some features that gamers today will recognise.  With it's joypad controller and 'high score cartridge', a ROM memory module which could save game data, Atari had a real groundbreaker here.  It was fully back-compatible with the Atari 2600, giving an excellent stable of games.  It sold nearly 4 million units until it was discontinued in 1992."
    },

    {  
      "tag": "9",
      "console": "Sega Mega-Drive (US: Genesis)",
      "year": "1988",
      "img": "https://en.wikipedia.org/wiki/Sega_Genesis#/media/File:Sega-Mega-Drive-JP-Mk1-Console-Set.jpg",
      "hardwareSpec": "7.6mhz",
      "unitSales": 30000000,
      "desc":"So we find ourselves in the heat of the console wars. The Mega-Drive's huge library of iver 900 games was a huge draw to gamers, eespecially those drawn to the  thrill of games like Night Trap and Mortal Kombat, whose content courted so much controversy that Sega created the Videogame Rating Council, predecessor to the Entertainment Software Rating Board.  We don't think that Sonic the Hedgehog cared much though."
    },

    {  
      "tag": "10",
      "console": "Atari Jaguar",
      "year": "1994",
      "img": "https://en.wikipedia.org/wiki/Atari_Jaguar#/media/File:Atari-Jaguar-Console-Set.jpg",
      "hardwareSpec": "26.59mhz",
      "unitSales": 250000,
      "desc":"The guys at Atari may have overstreched themselves with the Jaguar.  Marketed as the first '64-bit' console while competing with the wildly popular 16-bit machines from Nintendo and Sega, the Jaguar utilised a multi chip architecture that, while capable of rendering excellent graphics and framerates, was very difficult for developers to work with, resulting in a slightly bare library of games.  This was sadly where Atari bowed out of the 'premier league' of consoles."
    },

    {  
      "tag": "11",
      "console": "Nintendo 64",
      "year": "1996",
      "img": "",
      "img": "https://en.wikipedia.org/wiki/Nintendo_64#/media/File:Nintendo-64-wController-L.jpg",
      "hardwareSpec": "93.59mhz",
      "unitSales": 33000000,
      "desc":"What a way to end the cartridge era. Launched with the games Super Mario 64 and Pilotwings 64, the N64 was a runaway sucess and remains the 9th highest selling console of all time. It did not have the largest selection of games, but boy, what games.  Mario 64 and Zelda: Ocarina Of Time are still regarded as among the best games ever made, and GoldenEye 007 was a seminal title in the shooter genre. [ed. - One of these glorious machines still has pride of place beneath my TV, 20 years on!] "
    },

    {  
      "tag": "12",
      "console": "Sega Dreamcast",
      "year": "1998",
      "img": "hhttps://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Dreamcast-Console-Set.png/1280px-Dreamcast-Console-Set.png",
      "hardwareSpec": "200mhz",
      "unitSales": 9130000,
      "desc":""
    },

    ])
