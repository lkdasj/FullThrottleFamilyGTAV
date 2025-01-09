// Base de datos de vehículos Bólidos
const bolidos = [
    {
      nombre: "Vapid Blade",
      foto: "img-coches/bolidos/Vapid-Blade.png", // Poner el enlace de la imagen cuando esté disponible
      compra: "" // Poner el enlace de compra cuando esté disponible
    },
    {
      nombre: "Albany Buccaneer",
      foto: "img-coches/bolidos/Albany-Buccaneer.png",
      compra: ""
    },
    {
      nombre: "Albany Buccaneer personalizado",
      foto: "img-coches/bolidos/Albany-Buccaneer-personalizado.png",
      compra: ""
    },
    {
      nombre: "Declasse Burger Shot Stallion",
      foto: "img-coches/bolidos/Declasse-Burger-Shot-Stallion.png",
      compra: ""
    },
    {
      nombre: "Vapid Chino",
      foto: "img-coches/bolidos/Vapid-Chino.png",
      compra: ""
    },
    {
      nombre: "Vapid Chino personalizado",
      foto: "img-coches/bolidos/Vapid-Chino-personalizado.png",
      compra: ""
    },
    {
      nombre: "Invetero Coquette BlackFin",
      foto: "img-coches/bolidos/Invetero-Coquette-BlackFin.png",
      compra: ""
    },
    {
      nombre: "Vapid Dominator",
      foto: "img-coches/bolidos/Vapid-Dominator.png",
      compra: ""
    },
    {
      nombre: "Vapid Dominator GTX",
      foto: "img-coches/bolidos/Vapid-Dominator-GTX.png",
      compra: ""
    },
    {
      nombre: "Imponte Duke O'Death",
      foto: "img-coches/bolidos/Imponte-Duke-O'Death.png",
      compra: ""
    },
    {
      nombre: "Imponte Dukes",
      foto: "img-coches/bolidos/Imponte-Dukes.png",
      compra: ""
    },
    {
      nombre: "Vapid Ellie",
      foto: "img-coches/bolidos/Vapid-Ellie.png",
      compra: ""
    },
    {
      nombre: "Willard Faction",
      foto: "img-coches/bolidos/Willard-Faction.png",
      compra: ""
    },
    {
      nombre: "Willard Faction Donk personalizado",
      foto: "img-coches/bolidos/Willard-Faction-Donk-personalizado.png",
      compra: ""
    },
    {
      nombre: "Willard Faction personalizado",
      foto: "img-coches/bolidos/Willard-Faction-personalizado.png",
      compra: ""
    },
    {
      nombre: "Bravado Gauntlet",
      foto: "img-coches/bolidos/Bravado-Gauntlet.png",
      compra: ""
    },
    {
      nombre: "Albany Hermes",
      foto: "img-coches/bolidos/Albany-Hermes.png",
      compra: ""
    },
    {
      nombre: "Vapid Hotknife",
      foto: "img-coches/bolidos/Vapid-Hotknife.png",
      compra: ""
    },
    {
      nombre: "Vapid Hustler",
      foto: "img-coches/bolidos/Vapid-Hustler.png",
      compra: ""
    },
    {
      nombre: "Albany Lurcher",
      foto: "img-coches/bolidos/Albany-Lurcher.png",
      compra: ""
    },
    {
      nombre: "Declasse Moonbeam",
      foto: "img-coches/bolidos/Declasse-Moonbeam.png",
      compra: ""
    },
    {
      nombre: "Declasse Moonbeam personalizada",
      foto: "img-coches/bolidos/Declasse-Moonbeam-personalizada.png",
      compra: ""
    },
    {
      nombre: "Imponte Nightshade",
      foto: "img-coches/bolidos/Imponte-Nightshade.png",
      compra: ""
    },
    {
      nombre: "Imponte Phoenix",
      foto: "img-coches/bolidos/Imponte-Phoenix.png",
      compra: ""
    },
    {
      nombre: "Cheval Picador",
      foto: "img-coches/bolidos/Cheval-Picador.png",
      compra: ""
    },
    {
      nombre: "Vapid Pisswasser Dominator",
      foto: "img-coches/bolidos/Vapid-Pisswasser-Dominator.png",
      compra: ""
    },
    {
      nombre: "Bravado Rat-Loader",
      foto: "img-coches/bolidos/Bravado-Rat-Loader.png",
      compra: ""
    },
    {
      nombre: "Bravado Rat-Truck",
      foto: "img-coches/bolidos/Bravado-Rat-Truck.png",
      compra: ""
    },
    {
      nombre: "Bravado Redwood Gauntlet",
      foto: "img-coches/bolidos/Bravado-Redwood-Gauntlet.png",
      compra: ""
    },
    {
      nombre: "Imponte Ruiner",
      foto: "img-coches/bolidos/Imponte-Ruiner.png",
      compra: ""
    },
    {
      nombre: "Imponte Ruiner 2000",
      foto: "img-coches/bolidos/Imponte-Ruiner-2000.png",
      compra: ""
    },
    {
      nombre: "Declasse Sabre Turbo",
      foto: "img-coches/bolidos/Declasse-Sabre-Turbo.png",
      compra: ""
    },
    {
      nombre: "Declasse Sabre Turbo personalizado",
      foto: "img-coches/bolidos/Declasse-Sabre-Turbo-personalizado.png",
      compra: ""
    },
    {
      nombre: "Vapid Slamvan ",
      foto: "img-coches/bolidos/Vapid-Slamvan.png",
      compra: ""
    },
    {
      nombre: "Vapid Slamvan personalizada",
      foto: "img-coches/bolidos/Vapid-Slamvan-personalizada.png",
      compra: ""
    },
    {
      nombre: "Declasse Stallion",
      foto: "img-coches/bolidos/Declasse-Stallion.png",
      compra: ""
    },
    {
      nombre: "Declasse Tampa",
      foto: "img-coches/bolidos/Declasse-Tampa.png",
      compra: ""
    },
    {
      nombre: "Declasse Tampa armado",
      foto: "img-coches/bolidos/Declasse-Tampa-armado.png",
      compra: ""
    },
    {
      nombre: "Declasse Vigero",
      foto: "img-coches/bolidos/Declasse-Vigero.png",
      compra: ""
    },
    {
      nombre: "Albany Virgo",
      foto: "img-coches/bolidos/Albany-Virgo.png",
      compra: ""
    },
    {
      nombre: "Albany Virgo clásico",
      foto: "img-coches/bolidos/Albany-Virgo-clásico.png",
      compra: ""
    },
    {
      nombre: "Albany Virgo clásico personalizado",
      foto: "img-coches/bolidos/Albany-Virgo-clásico-personalizado.png",
      compra: ""
    },
    {
      nombre: "Declasse Voodoo",
      foto: "img-coches/bolidos/Declasse-Voodoo.png",
      compra: ""
    },
    {
      nombre: "Declasse Voodoo personalizado",
      foto: "img-coches/bolidos/Declasse-Voodoo-personalizado.png",
      compra: ""
    },
    {
      nombre: "Declasse Yosemite",
      foto: "img-coches/bolidos/Declasse-Yosemite.png",
      compra: ""
    }
  ];
  