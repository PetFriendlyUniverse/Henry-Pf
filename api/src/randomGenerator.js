const store = require("./controllers/storeControllers");
const products = require("./controllers/productsControllers");

const generator = () => {
  const species = {
    1: "pegeLagarto",
    2: "perro",
    3: "perroGrand",
    4: "cocodrilo",
  };
  setTimeout(async () => {
    for (let i = 1; i <= 15; i++) {
      await store.createStore(`Store ${i}`, `Store location ${i}`);
      for (let s = 1; s <= 20; s++) {
        let description = `Una descripción apropiada para este producto`;
        let randPrice = Math.floor(Math.random() * 200 + 51);
        let stock = Math.floor(Math.random() * 200 + 51);
        let specie = species[Math.ceil(Math.random() * 4)];
        await products.createProduct({
          name: `Product ${i}${s}`,
          price: randPrice,
          description: description,
          stock: stock,
          specie: specie,
          breed: `breed${s}`,
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
