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
} = require("../db");
const {
  species,
  brands,
  colors,
  sizes,
  imgs,
  razas,
  flavors,
} = require("./data/productsData");
const { personas, paseadores, guarderias } = require("./data/usersData");
const {
  comment40,
  stores20,
  localidadesYProvincias,
} = require("./data/storesData");

const generator = () => {
  setTimeout(async () => {
    const storesToCreate = [];
    const productsToCreate = [];

    for (let i = 1; i <= 10; i++) {
      storesToCreate.push({
        UserId: i,
        name: stores20[i - 1],
        phone: 1234567890,
        province: localidadesYProvincias[i - 1][1],
        locality: localidadesYProvincias[i - 1][0],
        streets: `Calles ${i}`,
        description: `Descripcion ${i}`,
      });

      for (let s = 1; s <= 20; s++) {
        let description = `Este alimento para mascotas combina dos sabores deliciosos y nutritivos en una única mezcla equilibrada. Las proteínas de alta calidad de ambos sabores proporcionan una nutrición completa y ayudan al desarrollo muscular, mientras que los carbohidratos y grasas saludables proporcionan energía sostenida durante todo el día. Además, está enriquecido con vitaminas y minerales esenciales para una salud óptima. Los sabores se combinan en una deliciosa mezcla que tu mascota adorará. Tu mascota podrá disfrutar de los beneficios nutricionales y del sabor de dos alimentos en uno, en una dieta completa y equilibrada.`;
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
      3: 5,
      4: 5,
      5: 5,
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
    const low = {
      1: 1,
      2: 1,
      3: 1,
      4: 1,
      5: 1,
      6: 1,
      7: 2,
      8: 2,
      9: 2,
      10: 2,
    };
    const randomQualification = {
      1: high,
      2: half,
      3: low,
    };
    let dis = 1;
    let sup = 2;
    let qual = 1;

    const reviewsToCreate = [];
    for (let i = 1; i <= 20; i++) {
      reviewsToCreate.push({
        UserId: Math.ceil(i / 2),
        ProductId: i,
        comment: comment40[i - 1],
        qualification: randomQualification[qual][Math.ceil(Math.random() * 10)],
        dispatchtime: randomQualification[dis][Math.ceil(Math.random() * 10)],
        support: randomQualification[sup][Math.ceil(Math.random() * 10)],
      });
      reviewsToCreate.push({
        UserId: Math.ceil((20 - (i - 1)) / 2),
        ProductId: i,
        comment: comment40[40 - i],
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
