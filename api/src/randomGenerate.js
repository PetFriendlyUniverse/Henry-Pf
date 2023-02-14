const store = require("./controllers/storeControllers");
const products = require("./controllers/productsControllers");

// stores con index concat
//{
// 	"name":"Tienda Grosa",
// 	"location": "Ubicacion copada"
// }

// products
// {
// 	"name": "Producto de Prueba",
// 	"price": 15,
// 	"description": "una descripción apropiada",
// 	"stock": 30,
// 	"specie": "pegeLag",
// 	"breed": "volador",
// 	"storeId": 1
// }
const species = {
  1: "pegeLagarto",
  2: "perro",
  3: "perroGrandote",
  4: "cocodrilo",
}(() => {
  for (let i = 1; i < 15; i++) {
    store.createStore(`Store ${i}`, `Store location ${i}`);
    for (let s = 1; s < 20; s++) {
      let description = `Una descripción apropiada para este producto`;
      let randPrice = Math.floor(Math.random() * 200 + 51);
      let stock = Math.floor(Math.random() * 200 + 51);
      let specie = species[Math.ceil(Math.random() * 4)];
      products
        .createProduct

        // `Product ${i}${s}`,
        // randPrice,
        // description,
        // stock,
        // specie,
        // `raza ${s}`,
        ();
    }
  }
})();
// name,
//   price,
//   description,.
//   stock,.
//   specie,.
//   breed,.
//   weight,
//   color,
//   size,
//   storeId
