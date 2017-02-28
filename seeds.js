
use the_dungeon;
db.games.drop();

db.games.insert([
    {
      "tag": "1",
      "console": "Atari Sears Tele-Games Pong System",
      "year": "1975",
      "img": "http://i758.photobucket.com/albums/xx226/focus1002/ASHPik_zpsb99fb2f7.png",
      "hardwareSpec": "128k",
      "unitSales": "",
      "copy":"This was the system that really brought gaming into the mainstream.  Following the huge commercial success of the 'Pong' arcade machine, Christmas of 1975 saw the release of Home Pong, and the dawn of gaming in the home."
    },

    {  
      "tag": "2",
      "console": "Atari 2600",
      "year": "1977",
      "img": "http://i758.photobucket.com/albums/xx226/focus1002/ASHPik_zpsb99fb2f7.png",
      "hardwareSpec": "CPU: 1.19mhz, 128bytes RAM",
      "unitSales": "",
      "copy":"Another game-changer from Atari.  The iconic 2600 was the first games console to use microprocessor based hardware along with a cartridge format, which meant that games no longer had to be hard-coded into the machine itself. It's not working? Blow on it and put it back in... There we go!"
    },

    {  
      "tag": "3",
      "console": "Nintendo Entertainment System (NES)",
      "year": "1983",
      "img": "http://i758.photobucket.com/albums/xx226/focus1002/ASHPik_zpsb99fb2f7.png",
      "hardwareSpec": "2A03 8-bit processor",
      "unitSales": "62,000,000",
      "copy":"The Daddy. The era changer.  This little beige box sat under millions of TV sets, spawning a generation of hardcore gamers.  Seminal games like 'Jumpman' (You may know him better as Mario), and Donkey Kong, and peripheral hardware like the 'zapper' light gun (Duck Hunt, anyone?) made the NES a stellar commercial success and cemented Nintendo's place at the top of the industry for years to come."
    },

    {  
      "tag": "4",
      "console": "Sega Master System",
      "year": "1985",
      "img": "http://i758.photobucket.com/albums/xx226/focus1002/ASHPik_zpsb99fb2f7.png",
      "hardwareSpec": "4mhz, 8kb RAM",
      "unitSales": "~13,000,000",
      "copy":"Every generation has their schisms.  Were you a mod or a rocker? Punk or Prog? Blur or Oasis? For folks of a certain age, the big question was 'Sega or Nintendo??'.  The Master System by Sega was a big rival to the NES, offering an edgier stable of games to counter Nintendo's slightly more cutesy image.  Units moved from stores as quickly as Sonic the Hedgehog's trainers."
    },

    {  
      "tag": "5",
      "console": "Sony PlayStation",
      "year": "1994",
      "img": "http://i758.photobucket.com/albums/xx226/focus1002/ASHPik_zpsb99fb2f7.png",
      "hardwareSpec": "R3000 @ 33.86mhz, 2MB RAM",
      "unitSales": "~103,000,000",
      "copy":"This is the moment when gaming truly came of age.  An exquisitely built machine, controller design that has endured for nearly a quarter-century and the introduction of game franchises that still thrill, excite and sell in the millions."
    },

    {
      "tag": "6",
      "console": "Magnavox Odyssey",
      "year": "1972",
      "img": "http://i758.photobucket.com/albums/xx226/focus1002/ASHPik_zpsb99fb2f7.png",
      "hardwareSpec": "40 transistors and 40 diodes",
      "unitSales": "350,000",
      "copy":"Designed by German-American engineer Ralph Baer, pictured here with a prototype, the Magnavox Odyssey was the first commercial home video game console. Capable of displaying just three moving objects at once, the machine came with coloured overlays to place on the screen, thereby creating various play areas. Instead of microchips, the analog architecture consisted of 40 transistors and 40 diodes, while games came on printed circuit boards. This primitive set-up was enough to create a simple Table Tennis sim that would inspire the Atari classic, Pong."
    },

    {
      "tag": "7",
      "console": "ZX Spectrum 48k",
      "year": "1982",
      "img": "http://i758.photobucket.com/albums/xx226/focus1002/ASHPik_zpsb99fb2f7.png",
      "hardwareSpec": "Z80 @ 3.5Hz, 16kB/48kB/128kB memory",
      "unitSales": "5,000,000",
      "copy":"Named the Spectrum due to its generous palette of eight colours, Sinclair’s follow up to the ZX81 was a legend of the 8bit era. Cheaper than the BBC Micro and Commodore 64, the machine (OK, it’s a computer, but we all know everyone used it as a games console) introduced a generation to both video games and programming, kickstarting the UK games industry. Its audio-visual performance was inferior to C64, but many of the decade’s finest games (Jet Set Willy, Lords of Midnight, The Hobbit) were made for the Speccy first. Developers still speak of it with misty-eyed nostalgia."
    },

    {
      "tag": "8",
      "console": "Commodore Amiga 500",
      "year": "1987",
      "img": "http://i758.photobucket.com/albums/xx226/focus1002/ASHPik_zpsb99fb2f7.png",
      "hardwareSpec": "Motorola 68000 microprocessor at 7.14 MHz with 512 KB of RAM",
      "unitSales": "4,850,000",
      "copy":"In the early 80s, Atari employee Jay Miner began working on an ambitious computer design, codenamed Lorraine, eventually setting up a new company, Amiga Inc, to explore the idea. Running a Motorola 68000 microprocessor at 7.14 MHz with 512 KB of RAM, it was monstrously powerful, and Commodore spotted its potential, buying out the IP. The Amiga went on to became a games behemoth, boasting titles like Lemmings, Cannon Fodder and Monkey Island as well as supporting the famed demo scene, where hardcore indie coders pushed the tech to its limits."
    },

    {
      "tag": "9",
      "console": "Xbox 360",
      "year": "2005",
      "img": "http://i758.photobucket.com/albums/xx226/focus1002/ASHPik_zpsb99fb2f7.png",
      "hardwareSpec": "3.2GHz with 512MB of RAM",
      "unitSales": "80,000,000",
      "copy":"The original Xbox was a fascinating statement of intent from Microsoft, but the 360 was the company’s masterpiece. Its Xbox Live multiplayer gaming service was brilliantly implemented allowing easy online play, and the addition of meta-mechanisms such as the GamerScore and Achievement points inspired players to spend longer exploring and perfecting games. Although blighted by the infamous ‘Red Ring of Death’ fault, a range of component faults that bricked thousands of machines, the 360 was a huge success, popularising the notion of the connected console and shifting 80m units."
    },

    {
      "tag": "10",
      "console": "Nintendo Wii",
      "year": "2006",
      "img": "http://i758.photobucket.com/albums/xx226/focus1002/ASHPik_zpsb99fb2f7.png",
      "hardwareSpec": "729MHz, 88MB of RAM",
      "unitSales": "101,630,000",
      "copy":"After the underperforming N64 and GameCube, expectations for the Wii were low. But then at the 2005 Tokyo Game Show, Nintendo revealed the machine’s innovative motion controller, the Wii Remote, providing a new kind of intuitive physical interaction. Designers Ken’ichiro Ashida and Shigeru Miyamoto were inspired by mobile phones and remote control devices, and the team spent two years getting the wireless technology just right. The main aim with the Wii, they claimed, was to make a console that mums would play. It sold 100m units."
    },

    ])
