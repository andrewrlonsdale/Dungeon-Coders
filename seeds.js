
use the_dungeon;
db.games.drop();
db.games.insert([{
    "tag": "1",
    "console": "Magnavox Odyssey",
    "year": "1972",
    "img": "./images/platforms/magnavox_odessy.jpg",
    "hardwareSpec": "40 transistors and 40 diodes",
    "unitSales": "350,000",
    "desc":"Designed by German-American engineer Ralph Baer, pictured here with a prototype, the Magnavox Odyssey was the first commercial home video game console. Capable of displaying just three moving objects at once, the machine came with coloured overlays to place on the screen, thereby creating various play areas. Instead of microchips, the analog architecture consisted of 40 transistors and 40 diodes, while games came on printed circuit boards. This primitive set-up was enough to create a simple Table Tennis sim that would inspire the Atari classic, Pong."
  },
  {
    "tag": "2",
    "console": "Atari Sears Tele-Games Pong System",
    "year": "1975",
    "img": "./images/platforms/pong.png",
    "hardwareSpec": "128k",
    "unitSales": 150000,
    "desc":"This was the system that really brought gaming into the mainstream.  Following the huge commercial success of the 'Pong' arcade machine, Christmas of 1975 saw the release of Home Pong, and the dawn of gaming in the home."
  },
  {  
    "tag": "3",
    "console": "Atari 2600",
    "year": "1977",
    "img": "",
    "hardwareSpec": "CPU: 1.19mhz, 128bytes RAM",
    "unitSales": 30000000,
    "desc":"Another game-changer from Atari.  The iconic 2600 was the first games console to use microprocessor based hardware along with a cartridge format, which meant that games no longer had to be hard-coded into the machine itself. It's not working? Blow on it and put it back in... There we go!"
  },
  {  
    "tag": "4",
    "console": "Vectrex",
    "year": "1982",
    "img": "http://i972.photobucket.com/albums/ae206/alejandro_madera/Vectrex/DSCF3576.jpg",
    "hardwareSpec": "1.5mhz",
    "unitSales": 500000,
    "desc":"This was a unique machine.  Unlike it's peers, it came built with a vector monitor, rather than needing to be plugged into a TV.  The limitations of the monochrome monitor were gotten around by suppying the user with different coloured screen overlays! They just don't make 'em like that any more..."
  },
  {
    "tag": "5",
    "console": "ZX Spectrum 48k",
    "year": "1982",
    "img": "http://i758.photobucket.com/albums/xx226/focus1002/ASHPik_zpsb99fb2f7.png",
    "hardwareSpec": "3.5mhz",
    "unitSales": 5000000,
    "desc":"Named the Spectrum due to its generous palette of eight colours, Sinclair’s follow up to the ZX81 was a legend of the 8bit era. Cheaper than the BBC Micro and Commodore 64, the machine (OK, it’s a computer, but we all know everyone used it as a games console) introduced a generation to both video games and programming, kickstarting the UK games industry. Its audio-visual performance was inferior to C64, but many of the decade’s finest games (Jet Set Willy, Lords of Midnight, The Hobbit) were made for the Speccy first. Developers still speak of it with misty-eyed nostalgia."
  },
  { 
    "tag": "6",
    "console": "Nintendo Entertainment System (NES)",
    "year": "1983",
    "img": "http://i758.photobucket.com/albums/xx226/focus1002/ASHPik_zpsb99fb2f7.png",
    "hardwareSpec": "2A03 8-bit processor",
    "unitSales": 62000000,
    "desc":"The Daddy. The era changer.  This little beige box sat under millions of TV sets, spawning a generation of hardcore gamers.  Seminal games like 'Jumpman' (You may know him better as Mario), and Donkey Kong, and peripheral hardware like the 'zapper' light gun (Duck Hunt, anyone?) made the NES a stellar commercial success and cemented Nintendo's place at the top of the industry for years to come."
  },
  {  
    "tag": "7",
    "console": "Sega Master System",
    "year": "1985",
    "img": "http://i758.photobucket.com/albums/xx226/focus1002/ASHPik_zpsb99fb2f7.png",
    "hardwareSpec": "4mhz, 8kb RAM",
    "unitSales": 13000000,
    "desc":"Every generation has their schisms.  Were you a mod or a rocker? Punk or Prog? Blur or Oasis? For folks of a certain age, the big question was 'Sega or Nintendo??'.  The Master System by Sega was a big rival to the NES, offering an edgier stable of games to counter Nintendo's slightly more cutesy image.  Units moved from stores as quickly as Sonic the Hedgehog's trainers."
  },
  {  
    "tag": "8",
    "console": "Sega SG-1000",
    "year": "1984",
    "img": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Sega-SG-1000-Console-Set.jpg",
    "hardwareSpec": "3.58mhz",
    "unitSales": 0,
    "desc":"The older, slightly dumber brother of the Sega master system.  Build with hardware by Texas Instruments (yes, the calculator people!) This fella was launched in Japan on the same day as the Famicom, or NES.  It had no real impact on the gaming industry, but as the forerunner to the master system, it is definitely worth a mention."
  },
  {  
    "tag": "9",
    "console": "Sega Master System",
    "year": "1985",
    "img": "http://i758.photobucket.com/albums/xx226/focus1002/ASHPik_zpsb99fb2f7.png",
    "hardwareSpec": "4mhz, 8kb RAM",
    "unitSales": 13000000,
    "desc":"Every generation has their schisms.  Were you a mod or a rocker? Punk or Prog? Blur or Oasis? For folks of a certain age, the big question was 'Sega or Nintendo??'.  The Master System by Sega was a big rival to the NES, offering an edgier stable of games to counter Nintendo's slightly more cutesy image.  Units moved from stores as quickly as Sonic the Hedgehog's trainers."
  },
  {  
    "tag": "10",
    "console": "Atari 7800",
    "year": "1986",
    "img": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Atari-7800-Console-Set.jpg",
    "hardwareSpec": "1.78mhz",
    "unitSales": 3700000,
    "desc":"The 7800 pioneered some features that gamers today will recognise.  With it's joypad controller and 'high score cartridge', a ROM memory module which could save game data, Atari had a real groundbreaker here.  It was fully back-compatible with the Atari 2600, giving an excellent stable of games.  It sold nearly 4 million units until it was discontinued in 1992."
  },
  {
    "tag": "11",
    "console": "Commodore Amiga 500",
    "year": "1987",
    "img": "http://i758.photobucket.com/albums/xx226/focus1002/ASHPik_zpsb99fb2f7.png",
    "hardwareSpec": "Motorola 68000 microprocessor at 7.14 MHz with 512 KB of RAM",
    "unitSales": 4850000,
    "desc":"In the early 80s, Atari employee Jay Miner began working on an ambitious computer design, codenamed Lorraine, eventually setting up a new company, Amiga Inc, to explore the idea. Running a Motorola 68000 microprocessor at 7.14 MHz with 512 KB of RAM, it was monstrously powerful, and Commodore spotted its potential, buying out the IP. The Amiga went on to became a games behemoth, boasting titles like Lemmings, Cannon Fodder and Monkey Island as well as supporting the famed demo scene, where hardcore indie coders pushed the tech to its limits."
  },
  {  
    "tag": "12",
    "console": "Sega Mega-Drive (US: Genesis)",
    "year": "1988",
    "img": "https://en.wikipedia.org/wiki/Sega_Genesis#/media/File:Sega-Mega-Drive-JP-Mk1-Console-Set.jpg",
    "hardwareSpec": "7.6mhz",
    "unitSales": 30000000,
    "desc":"So we find ourselves in the heat of the console wars. The Mega-Drive's huge library of iver 900 games was a huge draw to gamers, eespecially those drawn to the  thrill of games like Night Trap and Mortal Kombat, whose content courted so much controversy that Sega created the Videogame Rating Council, predecessor to the Entertainment Software Rating Board.  We don't think that Sonic the Hedgehog cared much though."
  },
  {  
    "tag": "13",
    "console": "Atari Jaguar",
    "year": "1994",
    "img": "https://en.wikipedia.org/wiki/Atari_Jaguar#/media/File:Atari-Jaguar-Console-Set.jpg",
    "hardwareSpec": "26.59mhz",
    "unitSales": 250000,
    "desc":"The guys at Atari may have overstreched themselves with the Jaguar.  Marketed as the first '64-bit' console while competing with the wildly popular 16-bit machines from Nintendo and Sega, the Jaguar utilised a multi chip architecture that, while capable of rendering excellent graphics and framerates, was very difficult for developers to work with, resulting in a slightly bare library of games.  This was sadly where Atari bowed out of the 'premier league' of consoles."
  },
  {  
    "tag": "14",
    "console": "Sony PlayStation",
    "year": "1994",
    "img": "http://i758.photobucket.com/albums/xx226/focus1002/ASHPik_zpsb99fb2f7.png",
    "hardwareSpec": "R3000 @ 33.86mhz, 2MB RAM",
    "unitSales": 103000000,
    "desc":"This is the moment when gaming truly came of age.  An exquisitely built machine, controller design that has endured for nearly a quarter-century and the introduction of game franchises that still thrill, excite and sell in the millions."
  },
  {  
    "tag": "15",
    "console": "Nintendo 64",
    "year": "1996",
    "img": "lksdjf",
    "img": "https://en.wikipedia.org/wiki/Nintendo_64#/media/File:Nintendo-64-wController-L.jpg",
    "hardwareSpec": "93.59mhz",
    "unitSales": 33000000,
    "desc":"What a way to end the cartridge era. Launched with the games Super Mario 64 and Pilotwings 64, the N64 was a runaway sucess and remains the 9th highest selling console of all time. It did not have the largest selection of games, but boy, what games.  Mario 64 and Zelda: Ocarina Of Time are still regarded as among the best games ever made, and GoldenEye 007 was a seminal title in the shooter genre. ed. - One of these glorious machines still has pride of place beneath my TV, 20 years on!"
  },
  {  
    "tag": "16",
    "console": "Sega Dreamcast",
    "year": "1998",
    "img": "hhttps://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Dreamcast-Console-Set.png/1280px-Dreamcast-Console-Set.png",
    "hardwareSpec": "200mhz",
    "unitSales": 9130000,
    "desc":"The dreamcast is one of those pieces of tech that found themselves, like the betamax and minidisc, slightly ahead of their time.  There was limited support for third party software publishers which resulted in a limited library of games, but this console featured innovations like a modem to enable online play."
  },
  {
    "tag": "17",
    "console": "PlayStation 2",
    "year": "2000",
    "img": "http://i758.photobucket.com/albums/xx226/focus1002/ASHPik_zpsb99fb2f7.png",
    "hardwareSpec": "3GHz",
    "unitSales": 155000000,
    "desc":"The PS2 was quite simply a behemoth.  It still remains the highest-selling console of all time, with a staggering 155,000,000 units shipped to date.  Add to that the 4000 strong game library, and total of 1.5 BILLION games sold, and you have an era defining console.  Titles like the Grand Theft Auto and Metal Gear Solid franchises mean that gamers are still firing up their PS2s to this day."
  },
  {  
    "tag": "18",
    "console": "Nintendo GameCube",
    "year": "2001",
    "img": "https://en.wikipedia.org/wiki/GameCube#/media/File:GameCube-Console-Set.png",
    "hardwareSpec": "162mhz",
    "unitSales": 22000000,
    "desc":"With the GameCube, Nintendo release their first disc-medium console (fun fact: also the first Nintendo console not to be accompanied by a Mario title upon launch).  The main innovaation of the GameCube was the ability to connect it to a gameboy advance and use the hand held console as s secondary screen and controller. Not Nintendo's most sucessful console, shipping a relativley low 22 million, but a couple of notable Mario and Zelda titles make this console fondly remembered by  its fans."
  },
  {
    "tag": "19",
    "console": "Xbox 360",
    "year": "2005",
    "img": "http://i758.photobucket.com/albums/xx226/focus1002/ASHPik_zpsb99fb2f7.png",
    "hardwareSpec": "3.2GHz",
    "unitSales": 80000000,
    "desc":"The original Xbox was a fascinating statement of intent from Microsoft, but the 360 was the company’s masterpiece. Its Xbox Live multiplayer gaming service was brilliantly implemented allowing easy online play, and the addition of meta-mechanisms such as the GamerScore and Achievement points inspired players to spend longer exploring and perfecting games. Although blighted by the infamous ‘Red Ring of Death’ fault, a range of component faults that bricked thousands of machines, the 360 was a huge success, popularising the notion of the connected console and shifting 80m units."
  },
  {
    "tag": "20",
    "console": "Nintendo Wii",
    "year": "2006",
    "img": "http://i758.photobucket.com/albums/xx226/focus1002/ASHPik_zpsb99fb2f7.png",
    "hardwareSpec": "729MHz",
    "unitSales": 101630000,
    "desc":"After the underperforming N64 and GameCube, expectations for the Wii were low. But then at the 2005 Tokyo Game Show, Nintendo revealed the machine’s innovative motion controller, the Wii Remote, providing a new kind of intuitive physical interaction. Designers Ken’ichiro Ashida and Shigeru Miyamoto were inspired by mobile phones and remote control devices, and the team spent two years getting the wireless technology just right. The main aim with the Wii, they claimed, was to make a console that mums would play. It sold 100m units."
  }])
