const cars = [
    // Pegassi
    { 
        name: "Pegassi Infernus", 
        category: "Super", 
        price: "$440,000", 
        basedOn: "Lamborghini Murciélago, Diablo, Pagani Zonda, Spyker C8", 
        img: "https://i.ibb.co/wFX68XgR/Pegassi-Infernus.webp" 
    },
    { 
        name: "Pegassi Monroe", 
        category: "Sports Classic", 
        price: "$490,000", 
        basedOn: "Lamborghini Miura, Ford GT40", 
        img: "https://i.ibb.co/C3wZfHrZ/Pegassi-Monroe.webp" 
    },
    { 
        name: "Pegassi Vacca", 
        category: "Super", 
        price: "$240,000", 
        basedOn: "Lamborghini Gallardo, Aventador LP 700-4", 
        img: "https://i.ibb.co/j9cBR9v9/Pegassi-Vacca.webp" 
    },
    { 
        name: "Pegassi Zentorno", 
        category: "Super", 
        price: "$725,000", 
        basedOn: "Lamborghini Sesto Elemento, Veneno", 
        img: "https://i.ibb.co/JWynJ5BC/Pegassi-Zentorno.webp" 
    },
    { 
        name: "Pegassi Osiris", 
        category: "Super", 
        price: "$1,950,000", 
        basedOn: "Pagani Huayra, Ferrari LaFerrari", 
        img: "https://i.ibb.co/ym6sMSDR/Pegassi-Osiris.webp" 
    },
    { 
        name: "Pegassi Reaper", 
        category: "Super", 
        price: "$1,595,000", 
        basedOn: "W Motors Lykan HyperSport", 
        img: "https://i.ibb.co/gZ5HbXkb/Pegassi-Reaper.webp" 
    },
    { 
        name: "Pegassi Tempesta", 
        category: "Super", 
        price: "$1,329,000", 
        basedOn: "Lamborghini Huracán, Lotus Esprit Concept", 
        img: "https://i.ibb.co/Vd086n8/Pegassi-Tempesta.webp" 
    },
    { 
        name: "Pegassi Infernus Classic", 
        category: "Sports Classic", 
        price: "$915,000", 
        basedOn: "Lamborghini Diablo", 
        img: "https://i.ibb.co/93zSwZRt/Pegassi-Infernus-Classic.webp" 
    },
    { 
        name: "Pegassi Torero", 
        category: "Sports Classic", 
        price: "$998,000", 
        basedOn: "Lamborghini Countach 25th Anniversary", 
        img: "https://i.ibb.co/fd3d825H/Pegassi-Torero.webp" 
    },
    { 
        name: "Pegassi Tezeract", 
        category: "Super Electric", 
        price: "$2,825,000", 
        basedOn: "Lamborghini Terzo Millennio, SRT Tomahawk, Aventador SV", 
        img: "https://i.ibb.co/xtbRrYMh/Pegassi-Tezeract.webp" 
    },
    { 
        name: "Pegassi Toros", 
        category: "SUV", 
        price: "$498,000", 
        basedOn: "Lamborghini Urus", 
        img: "https://i.ibb.co/HTLkZhk4/Pegassi-Toros.webp" 
    },
    { 
        name: "Pegassi Zorrusso", 
        category: "Super", 
        price: "$1,925,000", 
        basedOn: "Italdesign Zerouno", 
        img: "https://i.ibb.co/cc47wpK7/Pegassi-Zorrusso.webp" 
    },
    { 
        name: "Pegassi Toreador", 
        category: "Sports Classic", 
        price: "$4,250,000", 
        basedOn: "Lamborghini Marzal", 
        img: "https://i.ibb.co/jqh35NW/Pegassi-Toreador.webp" 
    },
    { 
        name: "Pegassi Ignus", 
        category: "Super", 
        price: "$2,765,000", 
        basedOn: "Lamborghini Sián FKP 37", 
        img: "https://i.ibb.co/hx6P3g4C/Pegassi-Ignus.webp" 
    },
    { 
        name: "Pegassi Ignus Armado", 
        category: "Super Armored", 
        price: "$4,500,000", 
        basedOn: "Lamborghini Sián FKP 37", 
        img: "https://i.ibb.co/5NcH3fR/Pegassi-Ignus-Armado.webp" 
    },
    { 
        name: "Pegassi Torero XO", 
        category: "Super", 
        price: "$2,890,000", 
        basedOn: "Lamborghini Countach LPI 800-4", 
        img: "https://i.ibb.co/6R6zSVZ1/Pegassi-Torero-XO.webp" 
    },
    
    // Grotti
    { 
        name: "Grotti Carbonizzare", 
        category: "GT", 
        price: "$195,000", 
        basedOn: "Ferrari F12, Aston Martin V12 Zagato", 
        img: "https://i.ibb.co/99ywddWB/Grotti-Carbonizzare.webp" 
    },
    { 
        name: "Grotti Cheetah", 
        category: "Super", 
        price: "$0 ?", 
        basedOn: "Ferrari Enzo, GTA Spano, Pagani Zonda", 
        img: "https://i.ibb.co/Xf2KDdMj/Grotti-Cheetah.webp" 
    },
    { 
        name: "Grotti Stinger", 
        category: "Classic GT Convertible", 
        price: "$1,000,000", 
        basedOn: "Ferrari 250 GT California Spyder, Ferrari 275 GTS/4 NART", 
        img: "https://i.ibb.co/B2QR63PJ/Grotti-Stinger.webp" 
    },
    { 
        name: "Grotti Stinger GT", 
        category: "Classic GT", 
        price: "$875,000", 
        basedOn: "Ferrari 250 GTO, Ferrari 330 GTO", 
        img: "https://i.ibb.co/hFVcNZYS/Grotti-Stinger-GT.webp" 
    },
    { 
        name: "Grotti Turismo R", 
        category: "Super", 
        price: "$0 - $500,000", 
        basedOn: "Ferrari LaFerrari, Faralli & Mazzanti Evantra", 
        img: "https://i.ibb.co/zVyYYpXr/Grotti-Turismo-R.webp" 
    },
    { 
        name: "Grotti Bestia GTS", 
        category: "GT", 
        price: "$610,000", 
        basedOn: "Ferrari FF, Ferrari GTC4Lusso", 
        img: "https://i.ibb.co/Kz0SZgj6/Grotti-Bestia-GTS.webp" 
    },
    { 
        name: "Grotti X80 Proto", 
        category: "Super Prototype", 
        price: "$2,700,000", 
        basedOn: "Ferrari F80 Concept", 
        img: "https://i.ibb.co/Z6k64Q8L/Grotti-X80-Proto.webp" 
    },
    { 
        name: "Grotti Brioso R/A", 
        category: "Compact", 
        price: "$155,000", 
        basedOn: "Fiat 500 Abarth, Abarth 500 Assetto Corse", 
        img: "https://i.ibb.co/LXcgKFsd/Grotti-Brioso-RA.webp" 
    },
    { 
        name: "Grotti Turismo Classic", 
        category: "Sports Classic", 
        price: "$705,000", 
        basedOn: "Ferrari F40, Ferrari Testarossa", 
        img: "https://i.ibb.co/m5fNJvxm/Grotti-Turismo-Classic.webp" 
    },
    { 
        name: "Grotti Cheetah Classic", 
        category: "Sports Classic", 
        price: "$865,000", 
        basedOn: "Ferrari Testarossa, Ferrari 328 GTB/GTS", 
        img: "https://i.ibb.co/Jw11SGKZ/Grotti-Cheetah-Classic.webp" 
    },
    { 
        name: "Grotti Visione", 
        category: "Super", 
        price: "$2,250,000", 
        basedOn: "Ferrari Xezri Competizione, McLaren P1 GTR", 
        img: "https://i.ibb.co/HDHxVFxD/Grotti-Visione.webp" 
    },
    { 
        name: "Grotti Vigilante", 
        category: "Super Modified", 
        price: "$3,750,000", 
        basedOn: "Batmóvil (varias versiones)", 
        img: "https://i.ibb.co/zWKjRvkZ/Grotti-Vigilante.webp" 
    },
    { 
        name: "Grotti GT500", 
        category: "Sports Classic", 
        price: "$785,000", 
        basedOn: "Ferrari 250 GT SWB, BMW 507", 
        img: "https://i.ibb.co/fd9279vf/Grotti-GT500.webp" 
    },
    { 
        name: "Grotti Itali GTO", 
        category: "GT", 
        price: "$2,380,000", 
        basedOn: "Ferrari 812 Superfast", 
        img: "https://i.ibb.co/Z6hjxNS0/Grotti-Itali-GTO.webp" 
    },
    { 
        name: "Grotti Furia", 
        category: "Super", 
        price: "$2,740,000", 
        basedOn: "Pininfarina Battista", 
        img: "https://i.ibb.co/TDBFFVsK/Grotti-Furia.webp" 
    },
    { 
        name: "Grotti Brioso 300", 
        category: "Classic Compact", 
        price: "$610,000", 
        basedOn: "Fiat 500", 
        img: "https://i.ibb.co/MyvHwjyL/Grotti-Brioso-300.webp" 
    },
    { 
        name: "Grotti Brioso 300 (Ancho)", 
        category: "Classic Compact Widebody", 
        price: "$585,000", 
        basedOn: "Fiat Abarth TCR 1000 Berlina Corsa", 
        img: "https://i.ibb.co/wrNmCYgV/Grotti-Brioso-300-Ancho.webp" 
    },
    { 
        name: "Grotti Itali RSX", 
        category: "Super", 
        price: "$3,465,000", 
        basedOn: "Ferrari SF90 Stradale, Ferrari F8 Tributo", 
        img: "https://i.ibb.co/Vch2dkhw/Grotti-Itali-RSX.webp" 
    },
    { 
        name: "Grotti Itali GTO Stinger TT", 
        category: "GT", 
        price: "$2,380,000", 
        basedOn: "Ferrari Roma", 
        img: "https://i.ibb.co/v4MnMdvc/Grotti-Itali-GTO-Stinger-TT.webp" 
    },
    { 
        name: "Grotti Turismo Omaggio", 
        category: "Sports", 
        price: "$2,845,000", 
        basedOn: "Ferrari F8 Tributo", 
        img: "https://i.ibb.co/Y4XfYN1P/Grotti-Turismo-Omaggio.webp" 
    }
];
