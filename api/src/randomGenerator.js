const store = require("./controllers/storeControllers");
const products = require("./controllers/productsControllers");

const generator = () => {
  const species = {
    1: "pegeLagarto",
    2: "perro",
    3: "tuki",
    4: "cocodrilo",
  };
  const brands = {
    1: "pedigree",
    2: "tukineta",
    3: "wiskas",
    4: "lacoste",
  };
  setTimeout(async () => {
    for (let i = 1; i <= 1; i++) {
      await store.createStore(`Store ${i}`, `Store location ${i}`);
      for (let s = 1; s <= 5; s++) {
        let description = `Una descripción apropiada para este producto`;
        let randPrice = Math.floor(Math.random() * 200 + 51);
        let stock = Math.floor(Math.random() * 200 + 51);
        let specie = species[Math.ceil(Math.random() * 4)];
        let brand = brands[Math.ceil(Math.random() * 4)];
        await products.createProduct({
          name: `Product ${i}${s}`,
          img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/674/580/products/dog-selection-perro-adulto1-6728d5f43d66da7c2d16252425172286-640-0.jpg",
          price: randPrice,
          description: description,
          stock: stock,
          specie: specie,
          breed: `breed${s}`,
          brand: brand,
          storeId: i,
        });
      }
    }
  }, 1000);
};

module.exports = { generator };

// {
// 	"name": "Producto de Prueba",
// 	"price": 25,
// 	"description": "una descripción apropiada",
// 	"stock": 35,
// 	"specie": "pegeLag",
// 	"breed": "volador",
// 	"storeId": 1
// }
