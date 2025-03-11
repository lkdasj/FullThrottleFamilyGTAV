// data.js: Contiene la lista de 44 coches JDM de GTA V con enlaces a imágenes placeholder
const cars = [
    {
      name: "Karin 190z",
      category: "Sports Classics",
      price: "$900,000",
      basedOn: "Datsun 240Z/Nissan Fairlady Z/Nissan S30, Toyota 2000GT",
      img: "https://i.ibb.co/602TTzfj/190z.webp"
    },
    {
      name: "Karin Asterope",
      category: "Sedans",
      price: "$26,000",
      basedOn: "Toyota Camry/Toyota Aurion",
      img: "https://i.ibb.co/7dL4xssQ/sterope.webp"
    },
    {
      name: "Karin BeeJay XL",
      category: "SUVs",
      price: "$27,000",
      basedOn: "Toyota FJ Cruiser",
      img: "https://i.ibb.co/Ftvhnww/Karin-Bee-Jay-XL.webp"
    },
    {
      name: "Dinka Blista",
      category: "Compacts",
      price: "$0 N/A",
      basedOn: "Honda Civic/Volkswagen Golf",
      img: "https://i.ibb.co/8kdcncv/Dinka-Blista.webp"
    },
    {
      name: "Dinka Blista Compact",
      category: "Sports",
      price: "$42,000",
      basedOn: "Honda CRX",
      img: "https://i.ibb.co/5gKSpj6M/Dinka-Blista-Compact.webp"
    },
    {
      name: "Dinka Blista Kanjo",
      category: "Compacts",
      price: "$580,000",
      basedOn: "Honda Civic Type R EK9 and other 1990 Honda cars",
      img: "https://i.ibb.co/b59BYtf7/Dinka-Blista-Kanjo.webp"
    },
    {
      name: "Karin Calico GTF",
      category: "Sports, Tuners",
      price: "$1,995,000",
      basedOn: "Toyota Celica",
      img: "https://i.ibb.co/JFpPHwTt/Karin-Calico-GTF.webp"
    },
    {
      name: "Karin Dilettante",
      category: "Compacts",
      price: "$25,000",
      basedOn: "Toyota Prius",
      img: "https://i.ibb.co/ks4hWkHd/Karin-Dilettante.webp"
    },
    {
      name: "Annis Elegy Retro Custom",
      category: "Sports",
      price: "$904,000",
      basedOn: "Nissan Skyline GT-R",
      img: "https://i.ibb.co/kgvKC0NL/Annis-Elegy-Retro-Custom.webp"
    },
    {
      name: "Annis Elegy RH8",
      category: "Sports",
      price: "$95,000",
      basedOn: "Nissan GTR R35",
      img: "https://i.ibb.co/p6HXc6Hp/Annis-Elegy-RH8.webp"
    },
    {
      name: "Emperor ETR1",
      category: "Super",
      price: "$1,995,000",
      basedOn: "Toyota 86/R&D Sport Subaru BRZ GT300, Toyota FT-1 Concept, Gazoo Racing Lexus LFA, Nissan GT-R Nismo GT3",
      img: "https://i.ibb.co/M4sMRK1/Emperor-ETR1.webp"
    },
    {
      name: "Annis Euros",
      category: "Sports, Tuners",
      price: "$1,800,000",
      basedOn: "Nissan 350Z and Nissan 370Z",
      img: "https://i.ibb.co/1GtpzYyX/Annis-Euros.webp"
    },
    {
      name: "Karin Futo",
      category: "Sports",
      price: "$9,000",
      basedOn: "Toyota AE86 Levin",
      img: "https://i.ibb.co/Swn2cDkP/Karin-Futo.webp"
    },
    {
      name: "Karin Futo GTX",
      category: "Sports, Tuners",
      price: "$1,590,000",
      basedOn: "Toyota Sprinter Trueno AE86",
      img: "https://i.ibb.co/8D2mLBbc/Karin-Futo-GTX.webp"
    },
    {
      name: "Emperor Habanero",
      category: "SUVs",
      price: "$42,000",
      basedOn: "2003-2008 Lexus RX, and 2009-2015 Toyota Venza",
      img: "https://i.ibb.co/PvNYzqrn/Emperor-Habanero.webp"
    },
    {
      name: "Annis Hellion",
      category: "Off-Road",
      price: "$835,000",
      basedOn: "Nissan Patrol Safari Y6, Jeep Cherokee (XJ)",
      img: "https://i.ibb.co/d0LskTkz/Annis-Hellion.webp"
    },
    {
      name: "Karin Intruder",
      category: "Sedans",
      price: "$16,000",
      basedOn: "Infiniti Q45/I30",
      img: "https://i.ibb.co/CpJknVLh/Karin-Intruder.webp"
    },
    {
      name: "Dinka Jester",
      category: "Sports",
      price: "$240,000",
      basedOn: "Acura NSX Concept, McLaren MP4-12C",
      img: "https://i.ibb.co/mrHyvx0W/Dinka-Jester.webp"
    },
    {
      name: "Dinka Jester (Racecar)",
      category: "Sports",
      price: "$350,000",
      basedOn: "Acura NSX Concept, McLaren MP4-12C",
      img: "https://i.ibb.co/RppXSD7T/Dinka-Jester-Racecar.webp"
    },
    {
      name: "Dinka Jester Classic",
      category: "Sports",
      price: "$790,000",
      basedOn: "Toyota Supra JZA80 (Mk IV)",
      img: "https://i.ibb.co/nNQFf8Wg/Dinka-Jester-Classic.webp"
    },
    {
      name: "Dinka Jester RR",
      category: "Sports, Tuners",
      price: "$1,970,000",
      basedOn: "Toyota Supra",
      img: "https://i.ibb.co/23YtGfqQ/Dinka-Jester-RR.webp"
    },
    {
      name: "Dinka Kanjo SJ",
      category: "Coupes, Tuners",
      price: "$1,370,000",
      basedOn: "Honda Civic Coupe Gen V",
      img: "https://i.ibb.co/kgH7WT1d/Dinka-Kanjo-SJ.webp"
    },
    {
      name: "Karin Kuruma",
      category: "Sports",
      price: "$126,350",
      basedOn: "Mitsubishi Lancer Evo X, 2015 Subaru WRX STi",
      img: "https://i.ibb.co/B0gvgrw/Karin-Kuruma.webp"
    },
    {
      name: "Maibatsu Penumbra",
      category: "Sports",
      price: "$24,000",
      basedOn: "Mitsubishi Eclipse, Audi TT",
      img: "https://i.ibb.co/jPYpC8Yk/Maibatsu-Penumbra.webp"
    },
    {
      name: "Maibatsu Penumbra FF",
      category: "Sports",
      price: "$1,380,000",
      basedOn: "2nd Generation Mitsubishi Eclipse & 2nd Generation Eagle Talon",
      img: "https://i.ibb.co/xqtS8W03/Maibatsu-Penumbra-FF.webp"
    },
    {
      name: "Dinka Postlude",
      category: "Coupes, Tuners",
      price: "$1,310,000",
      basedOn: "Honda Prelude Gen I",
      img: "https://i.ibb.co/bM5kyVt8/Dinka-Postlude.webp"
    },
    {
      name: "Karin Previon",
      category: "Coupes, Tuners",
      price: "$1,490,000",
      basedOn: "Lexus SC 300 (Z30), Toyota Soarer (Z30), 4th-gen Honda Prelude (BA/BB)",
      img: "https://i.ibb.co/6cfyKPy1/Karin-Previon.webp"
    },
    {
      name: "Annis RE-7B",
      category: "Super",
      price: "$2,475,000",
      basedOn: "Nissan R390 GT1, Mazda 787B, Aquila CR-1, Memo Rojas BMW, 2014 Audi R18 e-tron Quattro",
      img: "https://i.ibb.co/GfxVwdPT/Annis-RE-7-B.webp"
    },
    {
      name: "Karin Rebel",
      category: "Off-Road",
      price: "$22,000",
      basedOn: "Toyota Hilux",
      img: "https://i.ibb.co/9mFsmsYv/Karin-Rebel.webp"
    },
    {
      name: "Annis Remus",
      category: "Sports, Tuners",
      price: "$1,370,000",
      basedOn: "Nissan Silvia S13",
      img: "https://i.ibb.co/mV3gDzv1/Annis-Remus.webp"
    },
    {
      name: "Dinka RT3000",
      category: "Sports, Tuners",
      price: "$1,715,000",
      basedOn: "Honda S2000",
      img: "https://i.ibb.co/5gVcd405/Dinka-RT3000.webp"
    },
    {
      name: "Annis S80RR",
      category: "Super",
      price: "$2,575,000",
      basedOn: "Nissan R90C, Jaguar XJR-9",
      img: "https://i.ibb.co/WvMJTrh2/Annis-S80-RR.webp"
    },
    {
      name: "Annis Savestra",
      category: "Sports Classics",
      price: "$990,000",
      basedOn: "Series II-III Mazda Savanna/RX3 Nissan Skyline C110, 1972-1974 Mitsubishi Galant GTO 1970-1974 Toyota Corolla",
      img: "https://i.ibb.co/b5Vh5v3b/Annis-Savestra.webp"
    },
    {
      name: "Zirconium Stratum",
      category: "Sedans",
      price: "$10,000",
      basedOn: "Honda Accord station wagon",
      img: "https://i.ibb.co/wGnv1hG/Zirconium-Stratum.webp"
    },
    {
      name: "Dinka Sugoi",
      category: "Sports",
      price: "$1,224,000",
      basedOn: "Honda Civic Type R FK8",
      img: "https://i.ibb.co/k2fLrDKw/Dinka-Sugoi.webp"
    },
    {
      name: "Karin Sultan",
      category: "Sports",
      price: "$12,000",
      basedOn: "Lexus IS, Mitsubishi Lancer Evo VI, Subaru Impreza",
      img: "https://i.ibb.co/DDn2zzYw/Karin-Sultan.webp"
    },
    {
      name: "Karin Sultan Classic",
      category: "Sports",
      price: "$1,718,000",
      basedOn: "Subaru Impreza GC8 and Mitsubishi Lancer Evolution I",
      img: "https://i.ibb.co/nsGYRwwB/Karin-Sultan-Classic.webp"
    },
    {
      name: "Karin Sultan RS",
      category: "Super",
      price: "$795,000",
      basedOn: "Lexus IS, Mitsubishi Lancer Evo VI, Subaru Impreza",
      img: "https://i.ibb.co/pj6PKnYn/Karin-Sultan-RS.webp"
    },
    {
      name: "Karin Sultan RS Classic",
      category: "Sports, Tuners",
      price: "$1,789,000",
      basedOn: "Subaru Impreza 22B STI",
      img: "https://i.ibb.co/m5Wt3s7K/Karin-Sultan-RS-Classic.webp"
    },
    {
      name: "Emperor Vectre",
      category: "Sports, Tuners",
      price: "$1,785,000",
      basedOn: "Lexus RC F",
      img: "https://i.ibb.co/67q5gtSv/Emperor-Vectre.webp"
    },
    {
      name: "Vulcar Warrener",
      category: "Sedans",
      price: "$120,000",
      basedOn: "Nissan Skyline GTR KGC10, Datsun 510, Toyota Corolla KE70",
      img: "https://i.ibb.co/sdkfY0pn/Vulcar-Warrener.webp"
    },
    {
      name: "Vulcar Warrener HKR",
      category: "Sedans, Tuners",
      price: "$1,260,000",
      basedOn: "1974 Nissan/Datsun Sunny \"Hakotora\"",
      img: "https://i.ibb.co/YT1Yc1j3/Vulcar-Warrener-HKR.webp"
    },
    {
      name: "Annis ZR350",
      category: "Sports, Tuners",
      price: "$1,615,000",
      basedOn: "1992-2002 Mazda RX-7 (FD)",
      img: "https://i.ibb.co/4g72nXmr/Annis-ZR350.webp"
    },
    {
      name: "Annis ZR380 (Arena)",
      category: "Sports",
      price: "$2,138,640",
      basedOn: "Nissan 350Z, Nissan 370Z, Porsche 935",
      img: "https://i.ibb.co/HL8tKFx8/Annis-ZR380-Arena.webp"
    },
    {
      name: "Jester RR ancho",
      category: "Sports, Tuners",
      price: "$2,290,000",
      basedOn: "Toyota Supra",
      img: "https://i.ibb.co/kgLwMfs7/Jester-RR-ancho.webp"
    }
  ];
  