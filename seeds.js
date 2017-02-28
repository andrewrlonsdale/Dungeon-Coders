
use the_dungeon;
db.games.drop();
db.games.insert([{
    "tag": "1",
    "name": "Magnavox Odyssey",
    "year": "1972",
    "img": "./images/platforms/magnavox_odessey.jpg",
    "details": "40 transistors and 40 diodes",
    "unitSales": "350,000",
    "desc":"Designed by German-American engineer Ralph Baer, pictured here with a prototype, the Magnavox Odyssey was the first commercial home video game console. Capable of displaying just three moving objects at once, the machine came with coloured overlays to place on the screen, thereby creating various play areas. Instead of microchips, the analog architecture consisted of 40 transistors and 40 diodes, while games came on printed circuit boards. This primitive set-up was enough to create a simple Table Tennis sim that would inspire the Atari classic, Pong."
  },
  {
    "tag": "1.1",
    "name": "Table Tennis",
    "year": "1972",
    "details": "Sports",
    "unitSales": "4 Million",
    "desc": "The forerunner to Pong! The console even came with a vinyl overlay to make it look like real tennis.  A more innocent time!",
    "img":"./images/games/magnavox_tennis.png",
    "vid":"https://www.youtube.com/watch?v=bfmL6l128JU"
  },
  {
    "tag": "2",
    "name": "Atari Sears Tele-Games Pong System",
    "year": "1975",
    "img": "./images/platforms/pong.png",
    "details": "128k",
    "unitSales": 150000,
    "desc":"This was the system that really brought gaming into the mainstream.  Following the huge commercial success of the 'Pong' arcade machine, Christmas of 1975 saw the release of Home Pong, and the dawn of gaming in the home."
  },
  {
    "tag": "2.1",
    "name": "Pong",
    "year": "1975",
    "details": "n/a",
    "unitSales": "n/a",
    "Desc": "And here's the real thing... An arcade in your living room.",
    "img":"./images/games/pong.png",
    "vid":"https://www.youtube.com/watch?v=it0sf4CMDeM"
  },
  {  
    "tag": "3",
    "name": "Atari 2600",
    "year": "1977",
    "img": "./images/platforms/atari2600.png",
    "details": "CPU: 1.19mhz, 128bytes RAM",
    "unitSales": 30000000,
    "desc":"Another game-changer from Atari.  The iconic 2600 was the first games console to use microprocessor based hardware along with a cartridge format, which meant that games no longer had to be hard-coded into the machine itself. It's not working? Blow on it and put it back in... There we go!"
  },
  {
    "tag": "3.1",
    "name": "Pacman",
    "year": "1977",
    "details": "n/a",
    "unitSales": "n/a",
    "Details": "Another arcade classic now playable in the home. The difference between Pacman and Ms Pacman? She has a bow in hair...",
    "img":"./images/games/pacman.png",
    "vid":"https://www.youtube.com/watch?v=HL2p2ANFlQ4"
  },
  {  
    "tag": "4",
    "name": "Vectrex",
    "year": "1982",
    "img": "./images/games/vectrex.png",
    "details": "1.5mhz",
    "unitSales": 500000,
    "desc":"This was a unique machine.  Unlike it's peers, it came built with a vector monitor, rather than needing to be plugged into a TV.  The limitations of the monochrome monitor were gotten around by suppying the user with different coloured screen overlays! They just don't make 'em like that any more..."
  },
  {
    "tag": "4.1",
    "name": "Space Wars",
    "year": "1982",
    "details": "n/a",
    "unitSales": "n/a",
    "desc": "Epic space battles! Now there was another space-shenanigans epic in 1977, sounded a lot like Space Wars...",
    "img":"./images/games/spacewars.png",
    "vid":"https://www.youtube.com/watch?v=w2mb-ENbxxg"
  },
  {
    "tag": "5",
    "name": "ZX Spectrum 48k",
    "year": "1982",
    "img": "./images/platforms/zx_spectrum.jpg",
    "details": "3.5mhz",
    "unitSales": 5000000,
    "desc":"Named the Spectrum due to its generous palette of eight colours, Sinclair’s follow up to the ZX81 was a legend of the 8bit era. Cheaper than the BBC Micro and Commodore 64, the machine (OK, it’s a computer, but we all know everyone used it as a games console) introduced a generation to both video games and programming, kickstarting the UK games industry. Its audio-visual performance was inferior to C64, but many of the decade’s finest games (Jet Set Willy, Lords of Midnight, The Hobbit) were made for the Speccy first. Developers still speak of it with misty-eyed nostalgia."
  },
  {
    "tag": "5.1",
    "name": "Elite",
    "year": "1982",
    "details": "n/a",
    "unitSales": "n/a",
    "desc": "Elite was something of a groundbreaker.  It featured a fully explorable procedurally generated universe for gamers to get lost in.  Think 'No Man's Sky' without all the hype and disappointment.",
    "img":"./images/games/elite.png",
    "vid":"https://www.youtube.com/watch?v=batwiJmqZoE"
  },
  { 
    "tag": "6",
    "name": "Nintendo Entertainment System (NES)",
    "year": "1983",
    "img": "./images/platforms/nintendo_entertainment_system.jpg",
    "details": "2A03 8-bit processor",
    "unitSales": 62000000,
    "desc":"The Daddy. The era changer.  This little beige box sat under millions of TV sets, spawning a generation of hardcore gamers.  Seminal games like 'Jumpman' (You may know him better as Mario), and Donkey Kong, and peripheral hardware like the 'zapper' light gun (Duck Hunt, anyone?) made the NES a stellar commercial success and cemented Nintendo's place at the top of the industry for years to come."
  },
  {
    "tag": "6.1",
    "name": "Super Mario Bros",
    "year": "1983",
    "details": "n/a",
    "unitSales": "n/a",
    "desc": "*The* video game, basically.  Defined the platform genre, and has been the cornerstone of the Nintendo stable for a quarter century.  Mario is the daddy.",
    "img":"./images/games/mario.png",
    "vid":"https://www.youtube.com/watch?v=Aw4JccvxU-s"
  },
  {  
    "tag": "7",
    "name": "Sega SG-1000",
    "year": "1984",
    "img": "./images/platforms/sg100.png",
    "details": "3.58mhz",
    "unitSales": 0,
    "desc":"The older, slightly dumber brother of the Sega master system.  Build with hardware by Texas Instruments (yes, the calculator people!) This fella was launched in Japan on the same day as the Famicom, or NES.  It had no real impact on the gaming industry, but as the forerunner to the master system, it is definitely worth a mention."
  },
  {
    "tag": "7.1",
    "name": "Wonder Boy",
    "year": "1984",
    "details": "n/a",
    "unitSales": "n/a",
    "desc": "A little-remembered platformer on an almost forgotten console. Some loved it though!",
    "img":"./images/games/wonderboy.png",
    "vid":"https://www.youtube.com/watch?v=mrVhYC-4rns"
  },
  {  
    "tag": "8",
    "name": "Sega Master System",
    "year": "1985",
    "img": "./images/platforms/master_system.png",
    "details": "4mhz, 8kb RAM",
    "unitSales": 13000000,
    "desc":"Every generation has their schisms.  Were you a mod or a rocker? Punk or Prog? Blur or Oasis? For folks of a certain age, the big question was 'Sega or Nintendo??'.  The Master System by Sega was a big rival to the NES, offering an edgier stable of games to counter Nintendo's slightly more cutesy image.  Units moved from stores as quickly as Sonic the Hedgehog's trainers."
  },
  {
    "tag": "8.1",
    "name": "Sonic The Hedgehog",
    "year": "1985",
    "details": "n/a",
    "unitSales": "n/a",
    "desc": "Everyone's favourite hyperactive hedgehog!",
    "img":"./images/games/sonic.png",
    "vid":"https://www.youtube.com/watch?v=TP4UXvIZdBo"
  },
  {  
    "tag": "9",
    "name": "Atari 7800",
    "year": "1986",
    "img": "./images/platforms/atari7800.png",
    "details": "1.78mhz",
    "unitSales": 3700000,
    "desc":"The 7800 pioneered some features that gamers today will recognise.  With it's joypad controller and 'high score cartridge', a ROM memory module which could save game data, Atari had a real groundbreaker here.  It was fully back-compatible with the Atari 2600, giving an excellent stable of games.  It sold nearly 4 million units until it was discontinued in 1992."
  },
  {
    "tag": "9.1",
    "name": "Asteroids",
    "year": "1986",
    "details": "n/a",
    "unitSales": "n/a",
    "desc": "Another arcade regular makes its way into the home.",
    "img":"./images/games/asteroids.png",
    "vid":"https://www.youtube.com/watch?v=cZfsnA7dAHI"
  },
  {
    "tag": "10",
    "name": "Commodore Amiga 500",
    "year": "1987",
    "img": "./images/platforms/amiga500.png",
    "details": "Motorola 68000 microprocessor at 7.14 MHz with 512 KB of RAM",
    "unitSales": 4850000,
    "desc":"In the early 80s, Atari employee Jay Miner began working on an ambitious computer design, codenamed Lorraine, eventually setting up a new company, Amiga Inc, to explore the idea. Running a Motorola 68000 microprocessor at 7.14 MHz with 512 KB of RAM, it was monstrously powerful, and Commodore spotted its potential, buying out the IP. The Amiga went on to became a games behemoth, boasting titles like Lemmings, Cannon Fodder and Monkey Island as well as supporting the famed demo scene, where hardcore indie coders pushed the tech to its limits."
  },
  {
    "tag": "10.1",
    "name": "Another World",
    "year": "1987",
    "details": "n/a",
    "unitSales": "n/a",
    "desc": "This was a really extraordinary game.  Years ahead of its time, it showed the capabilities of the amiga system. Even then, PC gamers were a different breed...",
    "pic":"./images/games/anotherworld.png",
    "vid":"https://www.youtube.com/watch?v=1j4gO9sR7zs"
  },
  {  
    "tag": "11",
    "name": "Sega Mega-Drive (US: Genesis)",
    "year": "1988",
    "img": "./images/platforms/megadrive.png",
    "details": "7.6mhz",
    "unitSales": 30000000,
    "desc":"So we find ourselves in the heat of the console wars. The Mega-Drive's huge library of iver 900 games was a huge draw to gamers, eespecially those drawn to the  thrill of games like Night Trap and Mortal Kombat, whose content courted so much controversy that Sega created the Videogame Rating Council, predecessor to the Entertainment Software Rating Board.  We don't think that Sonic the Hedgehog cared much though."
  },
  {
    "tag": "11.1",
    "name": "Streets of Rage",
    "year": "1988",
    "details": "n/a",
    "unitSales": "n/a",
    "Details": "Classic of the beat-em-up genre and one of the games discussed in the video game violence debate. Won't somebody think of the children?!",
    "pic":"./images/games/sor.png",
    "vid":"https://www.youtube.com/watch?v=_ty6HjrDXpU"
  },
  {  
    "tag": "12",
    "name": "Atari Jaguar",
    "year": "1994",
    "img": "./images/platforms/jaguar.png",
    "details": "26.59mhz",
    "unitSales": 250000,
    "desc":"The guys at Atari may have overstreched themselves with the Jaguar.  Marketed as the first '64-bit' console while competing with the wildly popular 16-bit machines from Nintendo and Sega, the Jaguar utilised a multi chip architecture that, while capable of rendering excellent graphics and framerates, was very difficult for developers to work with, resulting in a slightly bare library of games.  This was sadly where Atari bowed out of the 'premier league' of consoles."
  },
  {
    "tag": "12.1",
    "name": "Doom",
    "year": "1994",
    "details": "n/a",
    "unitSales": "n/a",
    "desc": "Gory as hell! The seminal first person shooter. Multi platform, but the Jaguar did it justice.",
    "pic":"./images/games/doom.png",
    "vid":"https://www.youtube.com/watch?v=jP2jI0BVG0w"
  },
  {  
    "tag": "13",
    "name": "Sony PlayStation",
    "year": "1994",
    "img": "./images/platforms/PS.png",
    "details": "R3000 @ 33.86mhz, 2MB RAM",
    "unitSales": 103000000,
    "desc":"This is the moment when gaming truly came of age.  An exquisitely built machine, controller design that has endured for nearly a quarter-century and the introduction of game franchises that still thrill, excite and sell in the millions."
  },
  {
    "tag": "13.1",
    "name": "Wipeout",
    "year": "1994",
    "details": "n/a",
    "unitSales": "n/a",
    "Details": "Racing game with graphics and gameplay that blew people away.  This game shipped with the original console.",
    "pic":"./images/games/wipeout.png",
    "vid":"https://www.youtube.com/watch?v=ukOU1FpKTOM"
  },
  {  
    "tag": "14",
    "name": "Nintendo 64",
    "year": "1996",
    "img": "./images/platforms/N64.png",
    "details": "93.59mhz",
    "unitSales": 33000000,
    "desc":"What a way to end the cartridge era. Launched with the games Super Mario 64 and Pilotwings 64, the N64 was a runaway sucess and remains the 9th highest selling console of all time. It did not have the largest selection of games, but boy, what games.  Mario 64 and Zelda: Ocarina Of Time are still regarded as among the best games ever made, and GoldenEye 007 was a seminal title in the shooter genre. ed. - One of these glorious machines still has pride of place beneath my TV, 20 years on!"
  },
  {
    "tag": "14.1",
    "name": "Goldeneye 007",
    "year": "1996",
    "details": "n/a",
    "unitSales": "n/a",
    "desc": "It's a movie spin off, it won't be much good, right? Wrong. Still one of the best first person shooters ever made.",
    "pic":"./images/games/goldeneye.png",
    "vid":"https://www.youtube.com/watch?v=Bj1z7F5BkyM"
  },
  {  
    "tag": "15",
    "name": "Sega Dreamcast",
    "year": "1998",
    "img": "./images/platforms/dreamcast.png",
    "details": "200mhz",
    "unitSales": 9130000,
    "desc":"The dreamcast is one of those pieces of tech that found themselves, like the betamax and minidisc, slightly ahead of their time.  There was limited support for third party software publishers which resulted in a limited library of games, but this console featured innovations like a modem to enable online play."
  },
  {
    "tag": "15.1",
    "name": "Crazy Taxi",
    "year": "1998",
    "details": "n/a",
    "unitSales": "n/a",
    "desc": "An irreverent driving sim.  Great fun!",
    "pic":"./images/games/crazytaxi.png",
    "vid":"https://www.youtube.com/watch?v=YhsE6qdQr1g"
  },
  {
    "tag": "16",
    "name": "PlayStation 2",
    "year": "2000",
    "img": "./images/platforms/PS2.png",
    "details": "3GHz",
    "unitSales": 155000000,
    "desc":"The PS2 was quite simply a behemoth.  It still remains the highest-selling console of all time, with a staggering 155,000,000 units shipped to date.  Add to that the 4000 strong game library, and total of 1.5 BILLION games sold, and you have an era defining console.  Titles like the Grand Theft Auto and Metal Gear Solid franchises mean that gamers are still firing up their PS2s to this day."
  },
  {
    "tag": "16.1",
    "name": "Grand Theft Auto: San Andreas",
    "year": "2000",
    "details": "n/a",
    "unitSales": "n/a",
    "Details": "Rockstar broke the mould with this extraordinary game.  Totally open world, fantastically realised characters and dark humour. An absolute classic.",
    "pic":"./images/games/gtasa.png",
    "vid":"https://www.youtube.com/watch?v=u_CbHrBbHNQ"
  },
  {  
    "tag": "17",
    "console": "Nintendo GameCube",
    "year": "2001",
    "img": "./images/platforms/gamecube.png",
    "hardwareSpec": "162mhz",
    "unitSales": 22000000,
    "desc":"With the GameCube, Nintendo release their first disc-medium console (fun fact: also the first Nintendo console not to be accompanied by a Mario title upon launch).  The main innovaation of the GameCube was the ability to connect it to a gameboy advance and use the hand held console as s secondary screen and controller. Not Nintendo's most sucessful console, shipping a relativley low 22 million, but a couple of notable Mario and Zelda titles make this console fondly remembered by  its fans."
  },
  {
    "tag": "17.1",
    "name": "Metroid Prime",
    "Details": "A remake of the classic space adventure game.  Lauded by critics",
    "pic":"./images/platforms/metroid.png",
    "vid":"https://www.youtube.com/watch?v=RwhS76r0OqE"
  },
  {
    "tag": "18",
    "console": "Xbox 360",
    "year": "2005",
    "img": "./images/platforms/xbox360.png",
    "hardwareSpec": "3.2GHz",
    "unitSales": 80000000,
    "desc":"The original Xbox was a fascinating statement of intent from Microsoft, but the 360 was the company’s masterpiece. Its Xbox Live multiplayer gaming service was brilliantly implemented allowing easy online play, and the addition of meta-mechanisms such as the GamerScore and Achievement points inspired players to spend longer exploring and perfecting games. Although blighted by the infamous ‘Red Ring of Death’ fault, a range of component faults that bricked thousands of machines, the 360 was a huge success, popularising the notion of the connected console and shifting 80m units."
  },
  {
    "tag": "18.1",
    "name": "Fallout 3",
    "Details": "Life in a post-apocalyptic wastlend with a retro 50s feel. Cross platform, loved by Xbox and PS fans alike.",
    "pic":"./images/platforms/fallout3.png",
    "vid":"https://www.youtube.com/watch?v=pAN0ByjSsV4"
  },  
  {
    "tag": "19",
    "console": "PlayStation 3",
    "year": "2005",
    "img": "./images/platforms/ps3.png",
    "hardwareSpec": "3.2GHz",
    "unitSales": 84000000,
    "desc":"The PS3 was released in Japan and North America in November, 2006 and in Europe and Australia in March, 2007.  When released, it was the world's most sophisticated video game console to date. The successor of the most popular gaming system ever, the PlayStation 2, the PS3 quickly became the system to beat with its superior graphics, motion-sensing controller, network capabilities, and stellar lineup of games. Sony decided to market two versions of the PS3. One had a 60GB hard drive, WiFi wireless internet, and the ability to read various flash ram cards. The lower cost version features a 20GB drive, and does not have the aforementioned options. Both systems were otherwise the same. Both cost significantly more than prior competition."
  },
  {
    "tag": "19.1",
    "name": "Skyrim",
    "Details": "A Bethesda pick for the PS and XB? Well I'm biased, sue me.  Skyrim was a fantastic, glitch ridden masterpiece which pushed the hardware to it's very limits.",
    "pic":"./images/platforms/skyrim.png",
    "vid":"https://www.youtube.com/watch?v=PjqsYzBrP-M"
  }, 
  {
    "tag": "20",
    "console": "Nintendo Wii",
    "year": "2006",
    "img": "./images/platforms/wii.png",
    "hardwareSpec": "729MHz",
    "unitSales": 101630000,
    "desc":"After the underperforming N64 and GameCube, expectations for the Wii were low. But then at the 2005 Tokyo Game Show, Nintendo revealed the machine’s innovative motion controller, the Wii Remote, providing a new kind of intuitive physical interaction. Designers Ken’ichiro Ashida and Shigeru Miyamoto were inspired by mobile phones and remote control devices, and the team spent two years getting the wireless technology just right. The main aim with the Wii, they claimed, was to make a console that mums would play. It sold 100m units."
  },
  {
    "tag": "20.1",
    "name": "Wii Sports",
    "Details": "Wii Sports shipped with the console, in order to showcase the new-fangled motion sensor controller (Wiimote). Brough gaming to a whole new demographic.",
    "pic": "./images/platforms/wiisports.png",
    "vid":"https://www.youtube.com/watch?v=Ftyg6Sej3Kc"
  }, 
  {
    "tag": "21",
    "console": "XboxOne",
    "year": "2013",
    "img": "./images/platforms/xbone.png",
    "hardwareSpec": "3.2GHz",
    "unitSales": 4000000,
    "desc":" Announced in May 2013, this is the successor to the Xbox 360 and the third console in the Xbox family, and was released in North America, Europe (in some countries), Australia, and Brazil in November 2013, and in Japan, China, and other European countries in September 2014. It is the first Xbox game console to be released in China, specifically in the Shanghai Free-Trade Zone. Microsoft marketed the device as an 'all-in-one entertainment system' The Xbox One mainly competes against consoles such as Sonys PlayStation 4 and Nintendo's Wii U as part of the eighth generation of video game consoles."
  },
  {
    "tag": "21.1",
    "name": "Battlefield 1",
    "Details": "Possibly the technical zenith of the FPS. Amazing graphics and sound design take you to the trenches of WW1.",
    "pic": "./images/platforms/battlefield1.png",
    "vid":"https://www.youtube.com/watch?v=c7nRTF2SowQ"
  }, 
  {
    "tag": "22",
    "console": "PlayStation 4",
    "year": "2013",
    "img": "./images/platforms/ps4.png",
    "hardwareSpec": "729MHz",
    "unitSales": 101630000,
    "desc":"In late 2013 the world was treated to the release of the next generation in gaming consoles. The two main contenders of the console wars were, of course, Sony’s PlayStation 4 and Microsoft’s Xbox One. Sony’s PlayStation 4 has many new and advanced characteristics, as well as being packed to the brim with cutting-edge technology."
  },
  {
    "tag": "21.1",
    "name": "Uncharted 4",
    "Details": "An action adventure romp around the world with wisecracking protagonist Nathan Drake. Jaw dropping setting and action and a beautifully paced story.  Even a reference to an earlier Naughty Dog game for the long time fans.",
    "pic": "./images/platforms/uc4.png",
    "vid":"https://www.youtube.com/watch?v=hh5HV4iic1Y"
  }, 
  {
    "tag": "23",
    "console": "Nintendo Switch",
    "year": "2017",
    "img": "./images/platforms/nintendoswitch.png",
    "hardwareSpec": "3.2GHz",
    "unitSales": "In progress!",
    "desc":"The new kid on the block.  Hard to say yet what it will be like, but the portability an changable format are looking like a real innovation.  Plus, a new Zelda game!  We wait with bated breath."
  },
  {
    "tag": "21.1",
    "name": "The Legend Of Zelda: Breath Of The Wild",
    "Details": "Nintendo are back, it seems.  We rejoin Link after nearly 30 years of first meeting him.  He's aged well, don't you think?",
    "pic": "./images/platforms/botw.png",
    "vid":"https://www.youtube.com/watch?v=zw47_q9wbBE"
}])
