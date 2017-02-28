
use the_dungeon;
db.games.drop();

db.games.insert([
    {
      "tag": "1",
      "console": "Atari Sears Tele-Games Pong System",
      "year": "1975",
      "img": "http://i758.photobucket.com/albums/xx226/focus1002/ASHPik_zpsb99fb2f7.png",
      "hardwareSpec": "128k",
      "unitSales": 150000,
      "copy":"This was the system that really brought gaming into the mainstream.  Following the huge commercial success of the 'Pong' arcade machine, Christmas of 1975 saw the release of Home Pong, and the dawn of gaming in the home."
    },

    {  
      "tag": "2",
      "console": "Atari 2600",
      "year": "1977",
      "img": "http://i758.photobucket.com/albums/xx226/focus1002/ASHPik_zpsb99fb2f7.png",
      "hardwareSpec": "CPU: 1.19mhz, 128bytes RAM",
      "unitSales": 30000000,
      "copy":"Another game-changer from Atari.  The iconic 2600 was the first games console to use microprocessor based hardware along with a cartridge format, which meant that games no longer had to be hard-coded into the machine itself. It's not working? Blow on it and put it back in... There we go!"
    },

    {  
      "tag": "3",
      "console": "Nintendo Entertainment System (NES)",
      "year": "1983",
      "img": "http://i758.photobucket.com/albums/xx226/focus1002/ASHPik_zpsb99fb2f7.png",
      "hardwareSpec": "2A03 8-bit processor",
      "unitSales": 62000000,
      "copy":"The Daddy. The era changer.  This little beige box sat under millions of TV sets, spawning a generation of hardcore gamers.  Seminal games like 'Jumpman' (You may know him better as Mario), and Donkey Kong, and peripheral hardware like the 'zapper' light gun (Duck Hunt, anyone?) made the NES a stellar commercial success and cemented Nintendo's place at the top of the industry for years to come."
    },

    {  
      "tag": "4",
      "console": "Sega Master System",
      "year": "1985",
      "img": "http://i758.photobucket.com/albums/xx226/focus1002/ASHPik_zpsb99fb2f7.png",
      "hardwareSpec": "4mhz, 8kb RAM",
      "unitSales": 13000000,
      "copy":"Every generation has their schisms.  Were you a mod or a rocker? Punk or Prog? Blur or Oasis? For folks of a certain age, the big question was 'Sega or Nintendo??'.  The Master System by Sega was a big rival to the NES, offering an edgier stable of games to counter Nintendo's slightly more cutesy image.  Units moved from stores as quickly as Sonic the Hedgehog's trainers."
    },

    {  
      "tag": "5",
      "console": "Sony PlayStation",
      "year": "1994",
      "img": "http://i758.photobucket.com/albums/xx226/focus1002/ASHPik_zpsb99fb2f7.png",
      "hardwareSpec": "R3000 @ 33.86mhz, 2MB RAM",
      "unitSales": 103000000,
      "copy":"This is the moment when gaming truly came of age.  An exquisitely built machine, controller design that has endured for nearly a quarter-century and the introduction of game franchises that still thrill, excite and sell in the millions."
    },

    {  
      "tag": "6",
      "console": "Vectrex",
      "year": "1982",
      "img": "http://i972.photobucket.com/albums/ae206/alejandro_madera/Vectrex/DSCF3576.jpg",
      "hardwareSpec": "1.5mhz",
      "unitSales": 500000,
      "copy":"This was a unique machine.  Unlike it's peers, it came built with a vector monitor, rather than needing to be plugged into a TV.  The limitations of the monochrome monitor were gotten around by suppying the user with different coloured screen overlays! They just don't make 'em like that any more..."
    },

    {  
      "tag": "7",
      "console": "Sega SG-1000",
      "year": "1984",
      "img": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Sega-SG-1000-Console-Set.jpg",
      "hardwareSpec": "3.58mhz",
      "unitSales": null,
      "copy":"The older, slightly dumber brother of the Sega master system.  Build with hardware by Texas Instruments (yes, the calculator people!) This fella was launched in Japan on the same day as the Famicom, or NES.  It had no real impact on the gaming industry, but as the forerunner to the master system, it is definitely worth a mention."
    },

    {  
      "tag": "8",
      "console": "Atari 7800",
      "year": "1986",
      "img": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Atari-7800-Console-Set.jpg",
      "hardwareSpec": "1.78mhz",
      "unitSales": 3700000,
      "copy":"The 7800 pioneered some features that gamers today will recognise.  With it's joypad controller and 'high score cartridge', a ROM memory module which could save game data, Atari had a real groundbreaker here.  It was fully back-compatible with the Atari 2600, giving an excellent stable of games.  It sold nearly 4 million units until it was discontinued in 1992."
    },

    {  
      "tag": "9",
      "console": "Sega Mega-Drive (US: Genesis)",
      "year": "1988",
      "img": "https://en.wikipedia.org/wiki/Sega_Genesis#/media/File:Sega-Mega-Drive-JP-Mk1-Console-Set.jpg",
      "hardwareSpec": "7.6mhz",
      "unitSales": 30000000,
      "copy":"So we find ourselves in the heat of the console wars. The Mega-Drive's huge library of iver 900 games was a huge draw to gamers, eespecially those drawn to the  thrill of games like Night Trap and Mortal Kombat, whose content courted so much controversy that Sega created the Videogame Rating Council, predecessor to the Entertainment Software Rating Board.  We don't think that Sonic the Hedgehog cared much though."
    },

    ])
