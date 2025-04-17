// data.js: Contiene la lista de 44 coches JDM de GTA V con enlaces a imágenes placeholder
const cars = [
    {
        name: "Albany Buccaneer",
        category: "Muscle",
        price: "$29,000",
        custom: "390,000",
        img: "https://i.ibb.co/zT7RZrBZ/Albany-Buccaneer.webp"
    },
    {
        name: "Vapid Chino",
        category: "Muscle",
        price: "$225,000",
        custom: "$180,000",
        img: "https://i.ibb.co/Hkp6MvZ/Vapid-Chino.webp"
    },
    {
        name: "Albany Primo",
        category: "Sedans",
        price: "$9,000",
        custom: "$400,000",
        img: "https://i.ibb.co/8gqhZmXn/Albany-Primo.webp"
    },
    {
        name: "Declasse Moonbeam",
        category: "Muscle",
        price: "$32,500",
        custom: "$370,000",
        img: "https://i.ibb.co/hJcg6pT5/Declasse-Moonbeam.webp"
    },
    {
        name: "Willard Faction",
        category: "Muscle",
        price: "$36,000",
        custom: "Custom $335,000<br>Donk $695,000",
        img: "https://i.ibb.co/bjfzmHhK/Willard-Faction.webp"
    },
    {
        name: "Declasse Voodoo",
        category: "Muscle",
        price: "$5,500",
        custom: "$420,000",
        img: "https://i.ibb.co/sp4k12Cb/Declasse-Voodoo.webp"
    },
    {
        name: "Dundreary Virgo Classic",
        category: "Muscle",
        price: "$30,000",
        custom: "$240,000",
        img: "https://i.ibb.co/Hfc2V1gc/Dundreary-Virgo-Classic.webp"
    },
    {
        name: "Vapid Slamvan",
        category: "Muscle",
        price: "$49,500",
        custom: "$394,250",
        img: "https://i.ibb.co/2Yf5jPY0/Vapid-Slamvan.webp"
    },
    {
        name: "Vapid Minivan",
        category: "Vans",
        price: "$30,000",
        custom: "$330,000",
        img: "https://i.ibb.co/PZCqzK3z/Vapid-Minivan.webp"
    },
    {
        name: "Declasse Sabre Turbo",
        category: "Muscle",
        price: "$15,000",
        custom: "$490,000",
        img: "https://i.ibb.co/bgqjH77n/Declasse-Sabre-Turbo.webp"
    },
    {
        name: "Declasse Tornado",
        category: "Sports Classics",
        price: "$30,000",
        custom: "$375,000",
        img: "https://i.ibb.co/dw1zHvPN/Declasse-Tornado.webp"
    },
    {
        name: "Vapid Peyote",
        category: "Bolide",
        price: "$38,000",
        custom: "$620,000",
        img: "https://i.ibb.co/WW4bQ54w/Vapid-Peyote.webp"
    },
    {
        name: "Benefactor Glendale",
        category: "Sedans",
        price: "$200,000",
        custom: "$520,000",
        img: "https://i.ibb.co/gMcCTrPV/Benefactor-Glendale.webp"
    },
    {
        name: "Albany Manana",
        category: "Sport Classic",
        price: "$10,000",
        custom: "$925,000",
        img: "https://i.ibb.co/tpJLGv8D/Albany-Manana.webp"
    },





    {
        name: "Albany Buccaneer",
        category: "Muscle",
        price: "$29,000",
        custom: "390,000",
        img: "https://i.ibb.co/zT7RZrBZ/Albany-Buccaneer.webp"
    },
    {
        name: "Vapid Chino",
        category: "Muscle",
        price: "$225,000",
        custom: "$180,000",
        img: "https://i.ibb.co/Hkp6MvZ/Vapid-Chino.webp"
    },
    {
        name: "Albany Primo",
        category: "Sedans",
        price: "$9,000",
        custom: "$400,000",
        img: "https://i.ibb.co/8gqhZmXn/Albany-Primo.webp"
    },
    {
        name: "Declasse Moonbeam",
        category: "Muscle",
        price: "$32,500",
        custom: "$370,000",
        img: "https://i.ibb.co/hJcg6pT5/Declasse-Moonbeam.webp"
    },
    {
        name: "Willard Faction",
        category: "Muscle",
        price: "$36,000",
        custom: "Custom $335,000<br>Donk $695,000",
        img: "https://i.ibb.co/bjfzmHhK/Willard-Faction.webp"
    },
    {
        name: "Declasse Voodoo",
        category: "Muscle",
        price: "$5,500",
        custom: "$420,000",
        img: "https://i.ibb.co/sp4k12Cb/Declasse-Voodoo.webp"
    },
    {
        name: "Dundreary Virgo Classic",
        category: "Muscle",
        price: "$30,000",
        custom: "$240,000",
        img: "https://i.ibb.co/Hfc2V1gc/Dundreary-Virgo-Classic.webp"
    },
    {
        name: "Vapid Slamvan",
        category: "Muscle",
        price: "$49,500",
        custom: "$394,250",
        img: "https://i.ibb.co/2Yf5jPY0/Vapid-Slamvan.webp"
    },
    {
        name: "Vapid Minivan",
        category: "Vans",
        price: "$30,000",
        custom: "$330,000",
        img: "https://i.ibb.co/PZCqzK3z/Vapid-Minivan.webp"
    },
    {
        name: "Declasse Sabre Turbo",
        category: "Muscle",
        price: "$15,000",
        custom: "$490,000",
        img: "https://i.ibb.co/bgqjH77n/Declasse-Sabre-Turbo.webp"
    },
    {
        name: "Declasse Tornado",
        category: "Sports Classics",
        price: "$30,000",
        custom: "$375,000",
        img: "https://i.ibb.co/dw1zHvPN/Declasse-Tornado.webp"
    },
    {
        name: "Vapid Peyote",
        category: "Bolide",
        price: "$38,000",
        custom: "$620,000",
        img: "https://i.ibb.co/WW4bQ54w/Vapid-Peyote.webp"
    },
    {
        name: "Benefactor Glendale",
        category: "Sedans",
        price: "$200,000",
        custom: "$520,000",
        img: "https://i.ibb.co/gMcCTrPV/Benefactor-Glendale.webp"
    },
    {
        name: "Albany Manana",
        category: "Sport Classic",
        price: "$10,000",
        custom: "$925,000",
        img: "https://i.ibb.co/tpJLGv8D/Albany-Manana.webp"
    },
  ];
  