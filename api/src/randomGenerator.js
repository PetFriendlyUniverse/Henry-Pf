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
  const colors = {
    1: "white",
    2: "black",
    3: "yellow",
    4: "brown",
  };
  const sizes = {
    1: "small",
    2: "medium",
    3: "large",
  };
  const imgs = {
    1: "https://puppis.vteximg.com.br/arquivos/ids/158003-150-150/150002.png?v=635894318957130000",
    2: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/674/580/products/dog-selection-perro-adulto1-6728d5f43d66da7c2d16252425172286-640-0.jpg",
    3: "https://puppis.vteximg.com.br/arquivos/ids/190895-150-150/150047-150046.jpg?v=638064704496430000",
    4: "https://puppis.vteximg.com.br/arquivos/ids/172829-150-150/168003-1.jpg?v=637350103647730000",
    5: "https://puppis.vteximg.com.br/arquivos/ids/180531-150-150/142078--2-.png?v=637593763826630000",
  };
  setTimeout(async () => {
    for (let i = 1; i <= 10; i++) {
      await store.createStore(`Store ${i}`, `Store location ${i}`);
      for (let s = 1; s <= 30; s++) {
        let description = `Una descripción apropiada para este producto`;
        let price = Math.floor(Math.random() * 200 + 51);
        let stock = Math.ceil(Math.random() * 15);
        let specie = species[Math.ceil(Math.random() * 4)];
        let brand = brands[Math.ceil(Math.random() * 4)];
        let color = colors[Math.ceil(Math.random() * 4)];
        let img = imgs[Math.ceil(Math.random() * 5)];
        let size = sizes[Math.ceil(Math.random() * 3)];
        let weight = Math.ceil(Math.random() * 2) * 5 + 5;
        await products.createProduct({
          name: `Product ${i}${s}`,
          img,
          price,
          description,
          stock,
          specie,
          breed: `breed${i}`,
          brand,
          storeId: i,
          color,
          size,
          weight,
        });
      }
    }
  }, 5000);
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
