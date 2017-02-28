
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
      "img": "https://i.guim.co.uk/img/media/cc3ce27921fa9c87f9e6dfe87e1cc19f81c3bee6/0_0_3504_2103/master/3504.jpg?w=720&q=20&auto=format&usm=12&fit=max&dpr=2&s=035d034d8428e2a99619dfd357d5a903",
      "hardwareSpec": "40 transistors and 40 diodes",
      "unitSales": "350,000",
      "copy":"Designed by German-American engineer Ralph Baer, pictured here with a prototype, the Magnavox Odyssey was the first commercial home video game console. Capable of displaying just three moving objects at once, the machine came with coloured overlays to place on the screen, thereby creating various play areas. Instead of microchips, the analog architecture consisted of 40 transistors and 40 diodes, while games came on printed circuit boards. This primitive set-up was enough to create a simple Table Tennis sim that would inspire the Atari classic, Pong."
    },

    {
      "tag": "7",
      "console": "ZX Spectrum 48k",
      "year": "1982",
      "img": "https://i.guim.co.uk/img/media/27a58dda16c71b994028141943fcee4cffafc7e9/0_16_3000_1799/master/3000.jpg?w=720&q=20&auto=format&usm=12&fit=max&dpr=2&s=4d668bb75a993bb4abe2288f77c10988",
      "hardwareSpec": "Z80 @ 3.5Hz, 16kB/48kB/128kB memory",
      "unitSales": "5,000,000",
      "copy":"Named the Spectrum due to its generous palette of eight colours, Sinclair’s follow up to the ZX81 was a legend of the 8bit era. Cheaper than the BBC Micro and Commodore 64, the machine (OK, it’s a computer, but we all know everyone used it as a games console) introduced a generation to both video games and programming, kickstarting the UK games industry. Its audio-visual performance was inferior to C64, but many of the decade’s finest games (Jet Set Willy, Lords of Midnight, The Hobbit) were made for the Speccy first. Developers still speak of it with misty-eyed nostalgia."
    },

    {
      "tag": "8",
      "console": "Commodore Amiga 500",
      "year": "1987",
      "img": "https://i.guim.co.uk/img/media/9f9067cac3d402dbef55a9e1ffb88b59be86cd2c/0_189_3920_2352/master/3920.jpg?w=720&q=20&auto=format&usm=12&fit=max&dpr=2&s=bc31a77cab74860146ca302c5ba89505",
      "hardwareSpec": "Motorola 68000 microprocessor at 7.14 MHz with 512 KB of RAM",
      "unitSales": "4,850,000",
      "copy":"In the early 80s, Atari employee Jay Miner began working on an ambitious computer design, codenamed Lorraine, eventually setting up a new company, Amiga Inc, to explore the idea. Running a Motorola 68000 microprocessor at 7.14 MHz with 512 KB of RAM, it was monstrously powerful, and Commodore spotted its potential, buying out the IP. The Amiga went on to became a games behemoth, boasting titles like Lemmings, Cannon Fodder and Monkey Island as well as supporting the famed demo scene, where hardcore indie coders pushed the tech to its limits."
    },

    {
      "tag": "9",
      "console": "Xbox 360",
      "year": "2005",
      "img": "https://i.guim.co.uk/img/media/77c90bafd57b5dc445320218f71be7a417a584d1/0_0_1610_1988/master/1610.jpg?w=720&q=20&auto=format&usm=12&fit=max&dpr=2&s=5461c653afb467e1119ec3708ddb18ac",
      "hardwareSpec": "Motorola 68000 microprocessor at 7.14 MHz with 512 KB of RAM",
      "unitSales": "80,000,000",
      "copy":"The original Xbox was a fascinating statement of intent from Microsoft, but the 360 was the company’s masterpiece. Its Xbox Live multiplayer gaming service was brilliantly implemented allowing easy online play, and the addition of meta-mechanisms such as the GamerScore and Achievement points inspired players to spend longer exploring and perfecting games. Although blighted by the infamous ‘Red Ring of Death’ fault, a range of component faults that bricked thousands of machines, the 360 was a huge success, popularising the notion of the connected console and shifting 80m units."
    },

    ])
