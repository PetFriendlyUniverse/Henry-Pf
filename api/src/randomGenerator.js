// const store = require("./controllers/storeControllers");
// const products = require("./controllers/productsControllers");
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
      province: "Buenos Aires",
    },
    {
      name: "Josefina",
      lastname: "Gonzalez",
      mail: "josefina.gonzalez@example.com",
      walker: true,
      province: "Buenos Aires",
    },
    {
      name: "Alvaro",
      lastname: "Catucci",
      mail: "alvaro.catucci@example.com",
      walker: true,
      province: "Mendoza",
    },
    {
      name: "Ana",
      lastname: "Gillatti",
      mail: "ana.gillatti@example.com",
      walker: true,
      province: "Salta",
    },
    {
      name: "Carlos",
      lastname: "Bonnardel",
      mail: "carlos.bonnardel@example.com",
      walker: true,
      province: "Santa Fe",
    },
    {
      name: "Stefania",
      lastname: "Schurer",
      mail: "stefania.schurer@example.com",
      walker: true,
      province: "Tucuman",
    },
    {
      name: "Ernesto",
      lastname: "Coletto",
      mail: "ernesto.coletto@example.com",
      walker: true,
      province: "Chubut",
    },
    {
      name: "Antonia",
      lastname: "Ugarte",
      mail: "antonia.ugarte@example.com",
      walker: true,
      province: "Tucuman",
    },
    {
      name: "Angelica",
      lastname: "Gimenez",
      mail: "angelica.gimenez@example.com",
      walker: true,
      province: "Misiones",
    },
    {
      name: "Lucía",
      lastname: "Martínez",
      mail: "lucia.martinez@example.com",
      walker: true,
      province: "Córdoba",
    },
    {
      name: "Federico",
      lastname: "Gómez",
      mail: "federico.gomez@example.com",
      walker: true,
      province: "Buenos Aires",
    },
    {
      name: "Laura",
      lastname: "López",
      mail: "laura.lopez@example.com",
      walker: true,
      province: "Mendoza",
    },
    {
      name: "Joaquín",
      lastname: "García",
      mail: "joaquin.garcia@example.com",
      walker: true,
      province: "Buenos Aires",
    },
    {
      name: "Mariana",
      lastname: "Gutiérrez",
      mail: "mariana.gutierrez@example.com",
      walker: true,
      province: "Córdoba",
    },
    {
      name: "Ramiro",
      lastname: "Ramírez",
      mail: "ramiro.ramirez@example.com",
      walker: true,
      province: "Buenos Aires",
    },
    {
      name: "Camila",
      lastname: "Castro",
      mail: "camila.castro@example.com",
      walker: true,
      province: "Mendoza",
    },
    {
      name: "Facundo",
      lastname: "Fernández",
      mail: "facundo.fernandez@example.com",
      walker: true,
      province: "Buenos Aires",
    },
    {
      name: "María",
      lastname: "Sánchez",
      mail: "maria.sanchez@example.com",
      walker: true,
      province: "Mendoza",
    },
  ];

  const guarderias = [
    {
      name: "Paraiso",
      mail: "paraiso@example.com",
      daycare: true,
      province: "Buenos Aires",
    },
    {
      name: "Altar de Perros",
      mail: "altardeperros@example.com",
      daycare: true,
      province: "Cordoba",
    },
    {
      name: "Fondo de Bikini",
      mail: "fondodebikini@example.com",
      daycare: true,
      province: "Mendoza",
    },
    {
      name: "Mar Profundo",
      mail: "marprofundo@example.com",
      daycare: true,
      province: "Mendoza",
    },
    {
      name: "Montana Rusa",
      mail: "montanarusa@example.com",
      daycare: true,
      province: "Santa Fe",
    },
    {
      name: "Espacio Abierto",
      mail: "espacioabierto@example.com",
      daycare: true,
      province: "Buenos Aires",
    },
    {
      name: "Ventana al Jardin",
      mail: "ventanaaljardin@example.com",
      daycare: true,
      province: "Chubut",
    },
    {
      name: "Parque de Juegos",
      mail: "parquedejuegos@example.com",
      daycare: true,
      province: "Tucuman",
    },
    {
      name: "La Casita",
      mail: "lacasita@example.com",
      daycare: true,
      province: "Cordoba",
    },
    {
      name: "Pequeños Exploradores",
      mail: "pequenosexploradores@example.com",
      daycare: true,
      province: "Santa Fe",
    },
    {
      name: "Mi Jardincito",
      mail: "mijardincito@example.com",
      daycare: true,
      province: "Tucuman",
    },
    {
      name: "El Arco Iris",
      mail: "elarcoiris@example.com",
      daycare: true,
      province: "Mendoza",
    },
    {
      name: "Los Patitos",
      mail: "lospatitos@example.com",
      daycare: true,
      province: "Neuquen",
    },
    {
      name: "La Cigüeña",
      mail: "laciguena@example.com",
      daycare: true,
      province: "Chaco",
    },
    {
      name: "Las Abejitas",
      mail: "lasabejitas@example.com",
      daycare: true,
      province: "Entre Ríos",
    },
    {
      name: "Los Changuitos",
      mail: "loschanguitos@example.com",
      daycare: true,
      province: "Misiones",
    },
    {
      name: "El Hormiguero",
      mail: "elhormiguero@example.com",
      daycare: true,
      province: "San Juan",
    },
    {
      name: "El Árbol de la Vida",
      mail: "elarboldelavida@example.com",
      daycare: true,
      province: "San Luis",
    },
    {
      name: "El Refugio",
      mail: "refugio@example.com",
      daycare: true,
      province: "Santa Fe",
    },
    {
      name: "Colitas Contentas",
      mail: "colitas@example.com",
      daycare: true,
      province: "Chaco",
    },
    {
      name: "Gatitos del Sol",
      mail: "gatitos@example.com",
      daycare: true,
      province: "Tucuman",
    },
    {
      name: "El Bosque de los Lobos",
      mail: "lobos@example.com",
      daycare: true,
      province: "Neuquen",
    },
    {
      name: "Las Huellitas",
      mail: "huellitas@example.com",
      daycare: true,
      province: "Entre Rios",
    },
    {
      name: "El Nido de las Águilas",
      mail: "aguilas@example.com",
      daycare: true,
      province: "Jujuy",
    },
    {
      name: "La Madriguera",
      mail: "madriguera@example.com",
      daycare: true,
      province: "Salta",
    },
    {
      name: "Patas de Amor",
      mail: "patasamor@example.com",
      daycare: true,
      province: "San Juan",
    },
    {
      name: "El Jardín de los Ositos",
      mail: "ositos@example.com",
      daycare: true,
      province: "La Pampa",
    },
    {
      name: "La Guarida del Tigre",
      mail: "tigre@example.com",
      daycare: true,
      province: "Formosa",
    },
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
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow",
        qualification: randomQualification[qual][Math.ceil(Math.random() * 10)],
        dispatchtime: randomQualification[dis][Math.ceil(Math.random() * 10)],
        support: randomQualification[sup][Math.ceil(Math.random() * 10)],
      });
    }
    await Review.bulkCreate(reviewsToCreate);
    // ------------------------- Reviews ----------------------------- //
    console.log("Datos generados exitosamente");
  }, 5000);
};

module.exports = { generator };
