// const store = require("./controllers/storeControllers");
// const products = require("./controllers/productsControllers");
const { TIME_GENERATOR } = process.env;
const {
  Product,
  Store,
  Daycare,
  Walker,
  Brands,
  Breeds,
  Species,
  User,
  Review,
} = require("../src/db");

const generator = () => {
  const species = {
    1: "Perros",
    2: "Gatos",
  };
  const brands = {
    1: "Pedigree",
    2: "Royal Canin",
    3: "Wiskas",
    4: "Pro Plan",
    5: "Eukanuba",
    6: "Sabrocitos",
    7: "Balanced",
    8: "Excellent",
    9: "Fawna",
    10: "Old Prince",
    11: "Vital",
    12: "Chow",
    13: "Agility",
  };
  const colors = {
    1: "blanco",
    2: "negro",
    3: "amarillo",
    4: "marrón",
  };
  const sizes = {
    1: "chico",
    2: "mediano",
    3: "grande",
  };
  const imgs = {
    1: "https://www.pedigree.com.ar/cdn-cgi/image/width%3D410%2Cformat%3Dauto%2Cq%3D90/sites/g/files/fnmzdf1506/files/2022-10/7797453973489-product-image-1.png",
    2: "https://d3ugyf2ht6aenh.cloudfront.net/stores/979/500/products/royal-gato-urinary-care1-c07ed7872f79588f8816376908403393-640-0.webp",
    3: "https://www.revistaneo.com/sites/default/files/2022-08/salmon.png",
    4: "https://maxipet.com.ar/wp-content/uploads/2020/08/pro-plan-cach-gde.png",
    5: "https://ss-static-01.esmsv.com/id/69550/productos/obtenerimagen/?id=811&useDensity=false&width=1280&height=720&tipoEscala=contain",
    6: "https://www.metrive.com.ar/images/mascotas/Metrive-Sabrositos-pack-mix.png",
    7: "https://kangoopet.com.ar/wp-content/uploads/2019/12/Balance_FTE_15kg-768x1055-1-600x824.png",
    8: "https://www.timberline.com.ar/3253-medium_default/excellent-dog-adulto-chicken-rice-x-20-kg.jpg",
    9: "https://fawna.com.ar/wp-content/uploads/2021/05/FAWNA_gato_esterilizado-777x1024.png",
    10: "https://www.canrock.com.ar/9012-thickbox_default/old-prince-original-recipe-203kg.jpg",
    11: "https://d22fxaf9t8d39k.cloudfront.net/1d848048c0a6b6efba5d4ed2b6b30891d1dc20d9ce65f1e42673c4f179705797176330.png",
    12: "https://mascotaselmolino.com.ar/8343-thickbox_default/cat-chow-gatitos.jpg",
    13: "https://animall.com.ar/5604/agility-perro-adulto-medianos-y-grandes-x-20-kg.jpg",
  };

  const razas = [
    "Pastor Alemán",
    "Golden Retriever",
    "Labrador Retriever",
    "Caniche",
    "Bulldog",
    "Beagle",
    "Rottweiler",
    "Yorkshire Terrier",
    "Dachshund",
    "Boxer",
    "Doberman Pinscher",
    "Husky Siberiano",
    "Cocker Spaniel",
    "Chihuahua",
    "Shih Tzu",
    "Australian Shepherd",
    "Pug",
    "Gran Danés",
    "Shiba Inu",
    "Maltés",
  ];

  const flavors = [
    "Carne y Pavo",
    "Pollo y Cordero",
    "Pescado y Cerdo",
    "Pavo y Salmón",
    "Cordero y Pato",
    "Cerdo y Venado",
    "Pescado y Conejo",
    "Pollo y Quail",
    "Pavo y Pheasant",
    "Cordero y Bisonte",
    "Cerdo y Kanguro",
    "Pescado y Wild Boar",
    "Pollo y Buffalo",
    "Pavo y Fruit",
    "Cordero y Vegetables",
    "Cerdo y Cheese",
    "Pescado y Yogurt",
    "Pollo y Carne",
    "Pavo y Pescado",
    "Cordero y Cerdo",
    "Cerdo y Pavo",
  ];

  const personas = [
    {
      name: "Juan",
      lastname: "Pérez",
      mail: "juan.perez@example.com",
      password: "contraseña1",
      store: true,
    },
    {
      name: "María",
      lastname: "González",
      mail: "maria.gonzalez@example.com",
      password: "contraseña2",
      store: true,
    },
    {
      name: "Pedro",
      lastname: "Ramírez",
      mail: "pedro.ramirez@example.com",
      password: "contraseña3",
      store: true,
    },
    {
      name: "Ana",
      lastname: "Sánchez",
      mail: "ana.sanchez@example.com",
      password: "contraseña4",
      store: true,
    },
    {
      name: "Carlos",
      lastname: "Gómez",
      mail: "carlos.gomez@example.com",
      password: "contraseña5",
      store: true,
    },
    {
      name: "Laura",
      lastname: "Hernández",
      mail: "laura.hernandez@example.com",
      password: "contraseña6",
      store: true,
    },
    {
      name: "Javier",
      lastname: "López",
      mail: "javier.lopez@example.com",
      password: "contraseña7",
      store: true,
    },
    {
      name: "Sara",
      lastname: "Torres",
      mail: "sara.torres@example.com",
      password: "contraseña8",
      store: true,
    },
    {
      name: "Antonio",
      lastname: "Díaz",
      mail: "antonio.diaz@example.com",
      password: "contraseña9",
      store: true,
    },
    {
      name: "Elena",
      lastname: "Martínez",
      mail: "elena.martinez@example.com",
      password: "contraseña10",
      store: true,
    },
    //-----------------------------------------------
  ];

  const paseadores = [
    {
      name: "Ricardo",
      lastname: "Artura",
      mail: "ricardo.artura@example.com",
      walker: true,
      img: "https://municipalidadsalta.gob.ar/wp-content/uploads/2019/05/paseadoresperros.jpg",
      price_hour: Math.floor(Math.random() * (250 - 50 + 1)) + 50,
      province: "Buenos Aires",
    },
    {
      name: "Josefina",
      lastname: "Gonzalez",
      mail: "josefina.gonzalez@example.com",
      walker: true,
      img: "https://municipalidadsalta.gob.ar/wp-content/uploads/2019/05/paseadoresperros.jpg",
      price_hour: Math.floor(Math.random() * (250 - 50 + 1)) + 50,
      province: "Buenos Aires",
    },
    {
      name: "Alvaro",
      lastname: "Catucci",
      mail: "alvaro.catucci@example.com",
      walker: true,
      img: "https://municipalidadsalta.gob.ar/wp-content/uploads/2019/05/paseadoresperros.jpg",
      province: "Mendoza",
      price_hour: Math.floor(Math.random() * (250 - 50 + 1)) + 50,
    },
    {
      name: "Ana",
      lastname: "Gillatti",
      mail: "ana.gillatti@example.com",
      walker: true,
      img: "https://municipalidadsalta.gob.ar/wp-content/uploads/2019/05/paseadoresperros.jpg",
      province: "Salta",
      price_hour: Math.floor(Math.random() * (250 - 50 + 1)) + 50,
    },

    {
      name: "Carlos",
      lastname: "Bonnardel",
      mail: "carlos.bonnardel@example.com",
      walker: true,
      img: "https://municipalidadsalta.gob.ar/wp-content/uploads/2019/05/paseadoresperros.jpg",
      province: "Santa Fe",
      price_hour: Math.floor(Math.random() * (250 - 50 + 1)) + 50,
    },
    {
      name: "Stefania",
      lastname: "Schurer",
      mail: "stefania.schurer@example.com",
      walker: true,
      img: "https://municipalidadsalta.gob.ar/wp-content/uploads/2019/05/paseadoresperros.jpg",
      province: "Tucumán",
      price_hour: Math.floor(Math.random() * (250 - 50 + 1)) + 50,
    },
    {
      name: "Ernesto",
      lastname: "Coletto",
      mail: "ernesto.coletto@example.com",
      walker: true,
      img: "https://municipalidadsalta.gob.ar/wp-content/uploads/2019/05/paseadoresperros.jpg",
      province: "Chubut",
      price_hour: Math.floor(Math.random() * (250 - 50 + 1)) + 50,
    },
    {
      name: "Antonia",
      lastname: "Ugarte",
      mail: "antonia.ugarte@example.com",
      walker: true,
      img: "https://municipalidadsalta.gob.ar/wp-content/uploads/2019/05/paseadoresperros.jpg",
      province: "Tucumán",
      price_hour: Math.floor(Math.random() * (250 - 50 + 1)) + 50,
    },
    {
      name: "Angelica",
      lastname: "Gimenez",
      mail: "angelica.gimenez@example.com",
      walker: true,
      img: "https://municipalidadsalta.gob.ar/wp-content/uploads/2019/05/paseadoresperros.jpg",
      province: "Misiones",
      price_hour: Math.floor(Math.random() * (250 - 50 + 1)) + 50,
    },
    {
      name: "Lucía",
      lastname: "Martínez",
      mail: "lucia.martinez@example.com",
      walker: true,
      img: "https://municipalidadsalta.gob.ar/wp-content/uploads/2019/05/paseadoresperros.jpg",
      province: "Córdoba",
      price_hour: Math.floor(Math.random() * (250 - 50 + 1)) + 50,
    },
    {
      name: "Federico",
      lastname: "Gómez",
      mail: "federico.gomez@example.com",
      walker: true,
      img: "https://municipalidadsalta.gob.ar/wp-content/uploads/2019/05/paseadoresperros.jpg",
      price_hour: Math.floor(Math.random() * (250 - 50 + 1)) + 50,
      province: "Buenos Aires",
    },
    {
      name: "Laura",
      lastname: "López",
      mail: "laura.lopez@example.com",
      walker: true,
      img: "https://municipalidadsalta.gob.ar/wp-content/uploads/2019/05/paseadoresperros.jpg",
      province: "Mendoza",
      price_hour: Math.floor(Math.random() * (250 - 50 + 1)) + 50,
    },
    {
      name: "Joaquín",
      lastname: "García",
      mail: "joaquin.garcia@example.com",
      walker: true,
      img: "https://municipalidadsalta.gob.ar/wp-content/uploads/2019/05/paseadoresperros.jpg",
      price_hour: Math.floor(Math.random() * (250 - 50 + 1)) + 50,
      province: "Buenos Aires",
    },
    {
      name: "Mariana",
      lastname: "Gutiérrez",
      mail: "mariana.gutierrez@example.com",
      walker: true,
      img: "https://municipalidadsalta.gob.ar/wp-content/uploads/2019/05/paseadoresperros.jpg",
      province: "Córdoba",
      price_hour: Math.floor(Math.random() * (250 - 50 + 1)) + 50,
    },
    {
      name: "Ramiro",
      lastname: "Ramírez",
      mail: "ramiro.ramirez@example.com",
      walker: true,
      img: "https://municipalidadsalta.gob.ar/wp-content/uploads/2019/05/paseadoresperros.jpg",
      price_hour: Math.floor(Math.random() * (250 - 50 + 1)) + 50,
      province: "Buenos Aires",
    },
    {
      name: "Camila",
      lastname: "Castro",
      mail: "camila.castro@example.com",
      walker: true,
      img: "https://municipalidadsalta.gob.ar/wp-content/uploads/2019/05/paseadoresperros.jpg",
      province: "Mendoza",
      price_hour: Math.floor(Math.random() * (250 - 50 + 1)) + 50,
    },
    {
      name: "Facundo",
      lastname: "Fernández",
      mail: "facundo.fernandez@example.com",
      walker: true,
      img: "https://municipalidadsalta.gob.ar/wp-content/uploads/2019/05/paseadoresperros.jpg",
      price_hour: Math.floor(Math.random() * (250 - 50 + 1)) + 50,
      province: "Buenos Aires",
    },
    {
      name: "María",
      lastname: "Sánchez",
      mail: "maria.sanchez@example.com",
      walker: true,
      img: "https://municipalidadsalta.gob.ar/wp-content/uploads/2019/05/paseadoresperros.jpg",
      province: "Mendoza",
      price_hour: Math.floor(Math.random() * (250 - 50 + 1)) + 50,
    },
  ];

  const guarderias = [
    {
      name: "Paraiso",
      mail: "paraiso@example.com",
      daycare: true,
      img: "https://www.mitiendademascotas.com/web/angostura/wp-content/uploads/sites/12/2017/07/Apertura2.jpg",
      province: "Buenos Aires",
      price_hour: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
      price_day: Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,
    },
    {
      name: "Paraiso1",
      mail: "paraiso2@example.com",
      daycare: true,
      img: "https://www.mitiendademascotas.com/web/angostura/wp-content/uploads/sites/12/2017/07/Apertura2.jpg",
      province: "Buenos Aires",
      price_hour: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
      price_day: Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,
    },
    {
      name: "Paraiso2",
      mail: "paraiso1@example.com",
      daycare: true,
      img: "https://www.mitiendademascotas.com/web/angostura/wp-content/uploads/sites/12/2017/07/Apertura2.jpg",
      province: "Buenos Aires",
      price_hour: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
      price_day: Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,
    },
    {
      name: "Altar de Perros",
      mail: "altardeperros@example.com",
      daycare: true,
      img: "https://www.mitiendademascotas.com/web/angostura/wp-content/uploads/sites/12/2017/07/Apertura2.jpg",
      province: "Cordoba",
      price_hour: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
      price_day: Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,
    },
    {
      name: "Fondo de Bikini",
      mail: "fondodebikini@example.com",
      daycare: true,
      img: "https://www.mitiendademascotas.com/web/angostura/wp-content/uploads/sites/12/2017/07/Apertura2.jpg",
      province: "Mendoza",
      price_hour: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
      price_day: Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,
    },
    {
      name: "Mar Profundo",
      mail: "marprofundo@example.com",
      daycare: true,
      img: "https://www.mitiendademascotas.com/web/angostura/wp-content/uploads/sites/12/2017/07/Apertura2.jpg",
      province: "Mendoza",
      price_hour: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
      price_day: Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,
    },
    {
      name: "Montana Rusa",
      mail: "montanarusa@example.com",
      daycare: true,
      img: "https://www.mitiendademascotas.com/web/angostura/wp-content/uploads/sites/12/2017/07/Apertura2.jpg",
      province: "Santa Fe",
      price_hour: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
      price_day: Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,
    },
    {
      name: "Espacio Abierto",
      mail: "espacioabierto@example.com",
      daycare: true,
      img: "https://www.mitiendademascotas.com/web/angostura/wp-content/uploads/sites/12/2017/07/Apertura2.jpg",
      province: "Buenos Aires",
      price_hour: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
      price_day: Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,
    },
    {
      name: "Ventana al Jardin",
      mail: "ventanaaljardin@example.com",
      daycare: true,
      img: "https://www.mitiendademascotas.com/web/angostura/wp-content/uploads/sites/12/2017/07/Apertura2.jpg",
      province: "Chubut",
      price_hour: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
      price_day: Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,
    },
    {
      name: "Parque de Juegos",
      mail: "parquedejuegos@example.com",
      daycare: true,
      img: "https://www.mitiendademascotas.com/web/angostura/wp-content/uploads/sites/12/2017/07/Apertura2.jpg",
      province: "Tucumán",
      price_hour: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
      price_day: Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,
    },
    {
      name: "La Casita",
      mail: "lacasita@example.com",
      daycare: true,
      img: "https://www.mitiendademascotas.com/web/angostura/wp-content/uploads/sites/12/2017/07/Apertura2.jpg",
      province: "Cordoba",
      price_hour: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
      price_day: Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,
    },
    {
      name: "Pequeños Exploradores",
      mail: "pequenosexploradores@example.com",
      daycare: true,
      img: "https://www.mitiendademascotas.com/web/angostura/wp-content/uploads/sites/12/2017/07/Apertura2.jpg",
      province: "Santa Fe",
      price_hour: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
      price_day: Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,
    },
    {
      name: "Mi Jardincito",
      mail: "mijardincito@example.com",
      daycare: true,
      img: "https://www.mitiendademascotas.com/web/angostura/wp-content/uploads/sites/12/2017/07/Apertura2.jpg",
      province: "Tucumán",
      price_hour: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
      price_day: Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,
    },
    {
      name: "El Arco Iris",
      mail: "elarcoiris@example.com",
      daycare: true,
      img: "https://www.mitiendademascotas.com/web/angostura/wp-content/uploads/sites/12/2017/07/Apertura2.jpg",
      province: "Mendoza",
      price_hour: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
      price_day: Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,
    },
    {
      name: "Los Patitos",
      mail: "lospatitos@example.com",
      daycare: true,
      img: "https://www.mitiendademascotas.com/web/angostura/wp-content/uploads/sites/12/2017/07/Apertura2.jpg",
      province: "Neuquen",
      price_hour: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
      price_day: Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,
    },
    {
      name: "La Cigüeña",
      mail: "laciguena@example.com",
      daycare: true,
      img: "https://www.mitiendademascotas.com/web/angostura/wp-content/uploads/sites/12/2017/07/Apertura2.jpg",
      province: "Chaco",
      price_hour: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
      price_day: Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,
    },

    {
      name: "Las Abejitas",
      mail: "lasabejitas@example.com",
      daycare: true,
      img: "https://www.mitiendademascotas.com/web/angostura/wp-content/uploads/sites/12/2017/07/Apertura2.jpg",
      province: "Entre Ríos",
      price_hour: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
      price_day: Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,
    },
    {
      name: "Los Changuitos",
      mail: "loschanguitos@example.com",
      daycare: true,
      img: "https://www.mitiendademascotas.com/web/angostura/wp-content/uploads/sites/12/2017/07/Apertura2.jpg",
      province: "Misiones",
      price_hour: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
      price_day: Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,
    },
    {
      name: "El Hormiguero",
      mail: "elhormiguero@example.com",
      daycare: true,
      img: "https://www.mitiendademascotas.com/web/angostura/wp-content/uploads/sites/12/2017/07/Apertura2.jpg",
      province: "San Juan",
      price_hour: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
      price_day: Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,
    },
    {
      name: "El Árbol de la Vida",
      mail: "elarboldelavida@example.com",
      daycare: true,
      img: "https://www.mitiendademascotas.com/web/angostura/wp-content/uploads/sites/12/2017/07/Apertura2.jpg",
      province: "San Luis",
      price_hour: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
      price_day: Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,
    },
    {
      name: "El Refugio",
      mail: "refugio@example.com",
      daycare: true,
      img: "https://www.mitiendademascotas.com/web/angostura/wp-content/uploads/sites/12/2017/07/Apertura2.jpg",
      province: "Santa Fe",
      price_hour: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
      price_day: Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,
    },
    {
      name: "Colitas Contentas",
      mail: "colitas@example.com",
      daycare: true,
      img: "https://www.mitiendademascotas.com/web/angostura/wp-content/uploads/sites/12/2017/07/Apertura2.jpg",
      province: "Chaco",
      price_hour: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
      price_day: Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,
    },

    {
      name: "Gatitos del Sol",
      mail: "gatitos@example.com",
      daycare: true,
      img: "https://www.mitiendademascotas.com/web/angostura/wp-content/uploads/sites/12/2017/07/Apertura2.jpg",
      province: "Tucumán",
      price_hour: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
      price_day: Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,
    },
    {
      name: "El Bosque de los Lobos",
      mail: "lobos@example.com",
      daycare: true,
      img: "https://www.mitiendademascotas.com/web/angostura/wp-content/uploads/sites/12/2017/07/Apertura2.jpg",
      province: "Neuquen",
      price_hour: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
      price_day: Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,
    },
    {
      name: "Las Huellitas",
      mail: "huellitas@example.com",
      daycare: true,
      img: "https://www.mitiendademascotas.com/web/angostura/wp-content/uploads/sites/12/2017/07/Apertura2.jpg",
      province: "Entre Rios",
      price_hour: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
      price_day: Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,
    },
    {
      name: "El Nido de las Águilas",
      mail: "aguilas@example.com",
      daycare: true,
      img: "https://www.mitiendademascotas.com/web/angostura/wp-content/uploads/sites/12/2017/07/Apertura2.jpg",
      province: "Jujuy",
      price_hour: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
      price_day: Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,
    },

    {
      name: "La Madriguera",
      mail: "madriguera@example.com",
      daycare: true,
      img: "https://www.mitiendademascotas.com/web/angostura/wp-content/uploads/sites/12/2017/07/Apertura2.jpg",
      province: "Salta",
      price_hour: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
      price_day: Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,
    },

    {
      name: "Patas de Amor",
      mail: "patasamor@example.com",
      daycare: true,
      img: "https://www.mitiendademascotas.com/web/angostura/wp-content/uploads/sites/12/2017/07/Apertura2.jpg",
      province: "San Juan",
      price_hour: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
      price_day: Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,
    },
    {
      name: "El Jardín de los Ositos",
      mail: "ositos@example.com",
      daycare: true,
      img: "https://www.mitiendademascotas.com/web/angostura/wp-content/uploads/sites/12/2017/07/Apertura2.jpg",
      province: "La Pampa",
      price_hour: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
      price_day: Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,
    },
    {
      name: "La Guarida del Tigre",
      mail: "tigre@example.com",
      daycare: true,
      img: "https://www.mitiendademascotas.com/web/angostura/wp-content/uploads/sites/12/2017/07/Apertura2.jpg",
      province: "Formosa",
      price_hour: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
      price_day: Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,
    },
  ];

  const comment40 = [
    "El alimento que compré para mi perro es de excelente calidad. Le ha sentado muy bien y ha mejorado su salud notablemente. Definitivamente volveré a comprar aquí",

    "Los juguetes para gatos que compré son divertidos y duraderos. Mi gato ha estado jugando con ellos durante horas y siguen en perfecto estado",

    "El collar que compré para mi perro es muy resistente y se ve muy bien en él. Además, la selección de colores y estilos en la API es increíble",

    "Compré una caja de arena para mi gato y ha sido una gran adición a su rutina diaria. Es fácil de limpiar y el tamaño es perfecto para mi gato",

    "Los productos para el cuidado dental de mi perro han sido muy efectivos. He notado una gran mejoría en sus dientes y encías desde que empecé a usarlos",

    "La cama que compré para mi perro es muy cómoda y de alta calidad. Ha sido un gran cambio en su descanso diario",

    "Compré una caseta para mi perro y ha sido una gran inversión. Es resistente al clima y se ve muy bien en mi jardín",

    "La comida para mi gato es de alta calidad y se nota en su salud y apariencia. Además, la selección de marcas y sabores es excelente",

    "Los productos para la higiene de mi perro son muy efectivos. Han ayudado a mantener su pelaje brillante y saludable",

    "Los accesorios para la jaula de mi pájaro son de alta calidad y han sido muy útiles en su cuidado diario. Definitivamente recomiendo esta API para los dueños de aves",

    "Compré un comedero automático para mi gato y ha sido una gran adición a su alimentación diaria. Es fácil de programar y me da tranquilidad saber que siempre tendrá comida disponible",

    "La caja transportadora que compré para mi perro es muy resistente y segura. Ha sido muy útil para llevarlo al veterinario y en viajes largos",

    "Los productos de limpieza para mi acuario son muy efectivos y me han ayudado a mantener un ambiente saludable para mis peces. La API tiene una gran selección de productos para acuarios",

    "La ropa para mi perro es de alta calidad y se ve muy bien en él. Además, la selección de diseños y tallas en la API es excelente",

    "Compré un rascador para mi gato y ha sido un éxito total. Le encanta usarlo y ha dejado de arañar mis muebles. La calidad del producto es excelente",

    "Los productos para el cuidado de las uñas de mi perro son muy efectivos. Han sido muy útiles para mantener sus uñas saludables y evitar daños en mis muebles y pisos",

    "Compré un bebedero automático para mi perro y ha sido muy conveniente. Es fácil de limpiar y me da tranquilidad saber que siempre tendrá agua fresca disponible",

    "La comida para mi periquito es de alta calidad y él la disfruta mucho. La API tiene una gran selección de alimentos y accesorios para aves",

    "Compré una correa retráctil para mi perro y ha sido muy útil para caminar con él en diferentes lugares. La calidad del producto es excelente y es muy fácil de usar",

    "Los productos para el cuidado de la piel de mi perro son muy efectivos. Han ayudado a tratar sus problemas de piel y a mantenerla saludable",
    "Compré un arnés para mi perro y ha sido una gran adición a nuestras caminatas diarias. Es cómodo para él y me da tranquilidad saber que está seguro",

    "Los productos para el cuidado de los oídos de mi perro son muy efectivos. Han ayudado a prevenir infecciones y mantener sus oídos saludables",

    "Compré un kit de juguetes para mi perro y ha sido una gran inversión. Los juguetes son resistentes y divertidos para él. La variedad de juguetes en la API es excelente",

    "La comida para mi gato es de alta calidad y le ha ayudado a mantener un peso saludable. La API tiene una gran selección de alimentos para gatos de diferentes edades y necesidades",
    "Compré una jaula para mi hámster y ha sido perfecta para él. Es espaciosa y segura. La API tiene una gran selección de jaulas y accesorios para roedores",

    "Los productos para el cuidado de los ojos de mi perro son muy efectivos. Han ayudado a prevenir problemas oculares y mantener sus ojos saludables",

    "Compré una casa para mi conejo y ha sido perfecta para él. Es espaciosa y fácil de limpiar. La API tiene una gran selección de casas y accesorios para conejos",

    "La comida para mi perro es de alta calidad y él la disfruta mucho. La API tiene una gran selección de marcas y sabores para elegir",

    "Compré un bebedero automático para mi gato y ha sido muy conveniente. Es fácil de usar y me da tranquilidad saber que siempre tendrá agua fresca disponible",

    "Los productos para el cuidado de los dientes de mi gato son muy efectivos. Han ayudado a prevenir problemas dentales y mantener sus dientes saludables",
    "Compré una cama ortopédica para mi perro mayor y ha sido una gran ayuda para su comodidad. La cama es resistente y duradera, y ha ayudado a aliviar su dolor en las articulaciones",

    "Los productos para el cuidado del pelaje de mi gato son muy efectivos. Han ayudado a mantener su pelaje brillante y saludable, y reducir la formación de bolas de pelo",

    "Compré un transportín para mi gato y ha sido muy práctico para nuestras visitas al veterinario. Es seguro y cómodo para él",

    "La comida para mi hámster es de alta calidad y él la disfruta mucho. La API tiene una gran selección de alimentos y accesorios para roedores",

    "Compré un collar de identificación para mi perro y me da tranquilidad saber que, en caso de pérdida, podrá ser identificado fácilmente. La calidad del collar es excelente",

    "Los productos para el cuidado de los huesos y articulaciones de mi perro son muy efectivos. Han ayudado a mantener sus huesos y articulaciones saludables, especialmente en su etapa adulta",

    "Compré un juguete interactivo para mi gato y ha sido muy divertido para él. La calidad del producto es excelente y lo mantiene activo y estimulado",

    "La comida para mi conejo es de alta calidad y él la disfruta mucho. La API tiene una gran selección de alimentos y accesorios para conejos",

    "Compré un dispensador automático de golosinas para mi perro y ha sido una gran adición a nuestra rutina diaria. Es fácil de programar y le da una golosina a mi perro en momentos específicos del día",

    "Los productos para el cuidado de las patas de mi perro son muy efectivos. Han ayudado a mantener sus patas saludables y prevenir problemas como agrietamientos o infecciones",
  ];

  setTimeout(async () => {
    const storesToCreate = [];
    const productsToCreate = [];

    for (let i = 1; i <= 10; i++) {
      storesToCreate.push({
        UserId: i,
        name: `Tienda ${i}`,
        phone: 1234567890,
        province: `Provincia ${i}`,
        locality: `Localidad ${i}`,
        streets: `Calles ${i}`,
        description: `Descripcion ${i}`,
      });

      for (let s = 1; s <= 20; s++) {
        let description = `Una descripción apropiada para este producto`;
        let price = Math.floor(Math.random() * 200 + 51) * 50;
        let stock = Math.ceil(Math.random() * 15);
        let specie = species[Math.ceil(Math.random() * 2)];
        let indexBrandImg = Math.ceil(Math.random() * 13);
        let brand = brands[indexBrandImg];
        let img = imgs[indexBrandImg];
        let color = colors[Math.ceil(Math.random() * 4)];
        let size = sizes[Math.ceil(Math.random() * 3)];
        let weight = Math.ceil(Math.random() * 3) * 5 + 5;
        let breed = razas[Math.floor(Math.random() * 20)];

        productsToCreate.push({
          name: `Alimento ${brand} de ${flavors[s]}`,
          img: [img],
          price,
          description,
          stock,
          specie,
          breed,
          brand,
          StoreId: i,
          color,
          size,
          weight,
        });
      }
    }
    await User.bulkCreate(personas);
    await Store.bulkCreate(storesToCreate);
    await Daycare.bulkCreate(guarderias);
    await Walker.bulkCreate(paseadores);

    const brandObj = [];
    for (const i in brands) {
      brandObj.push({
        id: brands[i],
      });
    }

    const razasObj = [];
    for (const i in razas) {
      razasObj.push({
        id: razas[i],
      });
    }
    const speciesObj = [];
    for (const i in species) {
      speciesObj.push({
        id: species[i],
      });
    }
    Brands.bulkCreate(brandObj);
    Breeds.bulkCreate(razasObj);
    Species.bulkCreate(speciesObj);

    await Product.bulkCreate(productsToCreate);

    // ------------------------- Reviews ----------------------------- //

    const high = {
      1: 5,
      2: 5,
      3: 4,
      4: 4,
      5: 4,
      6: 5,
      7: 5,
      8: 5,
      9: 5,
      10: 5,
    };
    const half = {
      1: 2,
      2: 2,
      3: 3,
      4: 3,
      5: 3,
      6: 4,
      7: 4,
      8: 5,
      9: 5,
      10: 5,
    };
    const normal = {
      1: 1,
      2: 2,
      3: 2,
      4: 3,
      5: 3,
      6: 4,
      7: 4,
      8: 5,
      9: 5,
      10: 5,
    };
    const randomQualification = {
      1: high,
      2: half,
      3: normal,
    };
    const dis = Math.ceil(Math.random() * 3);
    const sup = Math.ceil(Math.random() * 3);
    const qual = Math.floor(dis > sup ? dis : sup);

    const reviewsToCreate = [];
    for (let i = 1; i <= 20; i++) {
      reviewsToCreate.push({
        UserId: Math.ceil(i / 2),
        ProductId: i,
        comment:
          "Compré un comedero automático para mi gato y ha sido una gran adición a su alimentación diaria. Es fácil de programar y me da tranquilidad saber que siempre tendrá comida disponible",
        qualification: randomQualification[qual][Math.ceil(Math.random() * 10)],
        dispatchtime: randomQualification[dis][Math.ceil(Math.random() * 10)],
        support: randomQualification[sup][Math.ceil(Math.random() * 10)],
      });
      reviewsToCreate.push({
        UserId: Math.ceil(i / 2),
        ProductId: i,
        comment:
          "Los productos para el cuidado de la piel de mi perro son muy efectivos. Han ayudado a tratar sus problemas de piel y a mantenerla saludable",
        qualification: randomQualification[qual][Math.ceil(Math.random() * 10)],
        dispatchtime: randomQualification[dis][Math.ceil(Math.random() * 10)],
        support: randomQualification[sup][Math.ceil(Math.random() * 10)],
      });
    }
    await Review.bulkCreate(reviewsToCreate);
    // ------------------------- Reviews ----------------------------- //
    console.log("Datos generados exitosamente");
  }, TIME_GENERATOR || 10);
};

module.exports = { generator };
