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
    "Me encanta comprar en esta tienda web de alimentos para mascotas. La página es fácil de navegar y siempre tienen una gran selección de alimentos de alta calidad",

    "La entrega es rápida y eficiente. Siempre recibo mis productos a tiempo y en perfectas condiciones",

    "Me gusta que esta tienda web ofrezca una suscripción mensual para los alimentos de mi mascota. Me ahorra tiempo y dinero, y siempre tengo lo que necesito en casa",

    "El servicio al cliente es excepcional. Siempre me ayudan con cualquier pregunta o problema que tenga, y siempre están dispuestos a hacer lo necesario para asegurarse de que estoy satisfecho",

    "La tienda web tiene una gran variedad de alimentos para mascotas, incluyendo opciones orgánicas y naturales. Me siento seguro al comprar aquí sabiendo que estoy alimentando a mi mascota con lo mejor",

    "Me gusta que la tienda web tenga información detallada sobre los ingredientes en cada alimento para mascotas. Me da confianza saber exactamente lo que estoy alimentando a mi mascota",

    "Los precios en esta tienda web son competitivos y asequibles. Siempre puedo encontrar lo que necesito sin gastar demasiado dinero",

    "Me encanta que la tienda web ofrezca opciones de envío gratis en compras superiores a un cierto monto. Me ahorra dinero y me hace sentir valorado como cliente",

    "La tienda web tiene una gran cantidad de comentarios y reseñas de clientes, lo que me ayuda a tomar una decisión informada sobre qué alimento comprar para mi mascota",

    "He comprado en esta tienda web varias veces y siempre he tenido una excelente experiencia. Recomiendo esta tienda a cualquier persona que esté buscando alimentos de alta calidad para su mascota",
    "Esta tienda de alimentos para perros y gatos tiene una gran variedad de opciones de alimentos de alta calidad. Siempre puedo encontrar lo que necesito para alimentar a mi mascota de manera saludable",

    "El servicio al cliente es excelente en esta tienda. Siempre son amables y están dispuestos a ayudar con cualquier pregunta que tenga sobre los alimentos para mi mascota",

    "Me gusta que esta tienda tenga opciones de alimentos orgánicos y naturales para perros y gatos. Me siento bien sabiendo que estoy alimentando a mi mascota con ingredientes saludables y de alta calidad",

    "La tienda tiene una amplia selección de alimentos para perros y gatos de todas las edades y tamaños. Puedo encontrar fácilmente lo que necesito para mi cachorro o mi gato anciano",

    "La tienda ofrece opciones de entrega programada, lo que me permite recibir mis alimentos para mascotas en el momento que mejor me convenga. Siempre llegan en perfectas condiciones",

    "La tienda ofrece una política de devolución excelente. Nunca he tenido problemas para devolver un producto si no estaba satisfecho con él",

    "Me gusta que la tienda tenga opciones de suscripción mensual para los alimentos de mi mascota. Es conveniente y me ahorra tiempo y dinero",

    "La tienda ofrece precios competitivos y asequibles. Nunca tengo que preocuparme por gastar demasiado dinero en los alimentos para mi mascota",

    "La tienda tiene una sección de preguntas frecuentes muy útil que responde a cualquier pregunta que pueda tener sobre los alimentos para mascotas",

    "La tienda tiene una excelente selección de alimentos para perros y gatos de marcas confiables. Siempre puedo encontrar lo que necesito para alimentar a mi mascota de manera saludable y feliz",
    "La tienda web es fácil de navegar y encontrar lo que necesito para mi perro o gato. Me encanta la organización y la claridad en la presentación de los productos",

    "La tienda ofrece una amplia selección de alimentos para perros y gatos, incluyendo opciones para mascotas con necesidades especiales de alimentación. Me siento seguro sabiendo que puedo encontrar lo que necesito para mi mascota aquí",

    "La tienda ofrece envío gratuito en pedidos superiores a una cantidad específica, lo cual es una gran ventaja. Me ahorra dinero en gastos de envío",

    "Los productos en esta tienda son de alta calidad y estoy seguro de que estoy comprando alimentos saludables para mi mascota. Nunca he tenido problemas de salud o digestivos con los alimentos que he comprado aquí",

    "Me gusta que la tienda ofrezca información nutricional detallada para cada producto, lo que me permite tomar decisiones informadas sobre la alimentación de mi mascota",

    "La tienda tiene un excelente sistema de comentarios y calificaciones de los productos, lo que me ayuda a decidir qué productos comprar. Me gusta leer las opiniones de otros propietarios de mascotas antes de tomar una decisión de compra",

    "El servicio al cliente en esta tienda es excepcional. Siempre son rápidos para responder y solucionar cualquier problema que pueda tener con mi pedido o producto",

    "Me gusta que la tienda ofrezca opciones de alimentos frescos y refrigerados para perros y gatos. Es una gran opción para aquellos que quieren alimentar a sus mascotas con alimentos frescos y naturales",

    "La tienda ofrece una garantía de satisfacción del cliente. Si no estoy satisfecho con un producto, puedo devolverlo sin problemas",

    "La tienda tiene promociones y ofertas especiales de forma regular, lo que me permite ahorrar dinero en alimentos para mi mascota. Me encanta aprovechar las ofertas y promociones especiales que ofrecen",
    "Estoy muy contento con los alimentos para perros y gatos que he comprado en esta tienda. Mi mascota ha mostrado una mejoría en su salud y energía desde que cambié a estos alimentos de alta calidad",

    "Me gusta que la tienda tenga opciones de alimentos para perros y gatos sin granos y sin gluten. Me siento bien sabiendo que estoy alimentando a mi mascota con alimentos saludables y naturales",

    "La tienda ofrece opciones de alimentos húmedos y secos para perros y gatos, lo que me permite encontrar lo que mi mascota necesita y prefiere",

    "Los alimentos de esta tienda tienen una buena relación calidad-precio. Estoy contento de haber encontrado una tienda donde puedo comprar alimentos de alta calidad para mi mascota a precios razonables",

    "La tienda ofrece opciones de alimentos para perros y gatos de diferentes edades y tamaños. Es fácil encontrar lo que mi mascota necesita y asegurarme de que esté recibiendo una nutrición adecuada",

    "Los ingredientes de los alimentos para perros y gatos que he comprado en esta tienda son de alta calidad y no contienen subproductos. Me gusta saber que estoy comprando alimentos de calidad para mi mascota",

    "La tienda tiene opciones de alimentos para perros y gatos con necesidades especiales de salud, como alimentos para mascotas con alergias o intolerancias alimentarias",

    "Los alimentos para perros y gatos de esta tienda son fáciles de digerir. Mi mascota no ha tenido problemas digestivos desde que cambiamos a estos alimentos de alta calidad",

    "La tienda ofrece opciones de alimentos orgánicos y naturales para perros y gatos. Me siento bien sabiendo que estoy alimentando a mi mascota con alimentos saludables y de alta calidad",

    "La tienda tiene opciones de alimentos de marcas de confianza y populares. Me gusta saber que estoy comprando alimentos de calidad para mi mascota de marcas que tienen una buena reputación en la industria",
  ];

  const stores20 = [
    " PetCity",
    "Animal World",
    "Paws & Claws",
    "Pet Depot",
    "Pet Palace",
    "Pet Emporium",
    "Furry Friends",
    "Pet Junction",
    "The Pet Spot",
    "Critter Corner",
    "Pet Haven",
    "Creature Comforts",
    "Pet Central",
    "The Animal House",
    "Pet Universe",
    "Pet Perfection",
    "Pet Parade",
    "Bark Avenue",
    "The Pet Pantry",
    "Four Paws Junction",
  ];

  const localidades10 = [
    "Buenos Aires: Ciudad Autónoma de Buenos Aires (CABA)",
    "La Plata: Buenos Aires",
    "Rosario: Santa Fe",
    "Mendoza: Mendoza",
    "San Miguel de Tucumán: Tucumán",
    "Salta: Salta",
    "Mar del Plata: Buenos Aires",
    "San Juan: San Juan",
    "Resistencia: Chaco",
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
