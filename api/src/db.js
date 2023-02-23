require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  EXTERNAL_DB_URL,
  DATABASE,
  USERNAME,
  PASSWORD,
  HOST,
} = process.env;

// const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
//   {
//     logging: false, // set to console.log to see the raw SQL queries
//     native: false, // lets Sequelize know we can use pg-native for ~30% more speed
//   }
// );

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CONFIG PARA DEPLOY
const sequelize = DATABASE
  ? new Sequelize(DATABASE, USERNAME, PASSWORD, {
      host: HOST,
      dialect: "postgres",
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    })
  : new Sequelize(`${EXTERNAL_DB_URL}?ssl=true`, {
      // logging: false, // set to console.log to see the raw SQL queries
      // native: false, // lets Sequelize know we can use pg-native for ~30% more speed
      dialect: "postgres",
      protocol: "postgres",
      dialectOptions: {},
    });

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FIN DE CONFIG PARA DEPLOY

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const {
  User,
  Invoices,
  Product,
  Invoices_Products,
  Store,
  Favorite,
  Comments,
  Daycare,
  Walker,
} = sequelize.models;

Invoices.belongsToMany(Product, { through: Invoices_Products });
Product.belongsToMany(Invoices, { through: Invoices_Products });

User.belongsToMany(Product, { through: Favorite });
Product.belongsToMany(User, { through: Favorite });

User.hasMany(Invoices);
Invoices.belongsTo(User);

Store.hasMany(Product);
Product.belongsTo(Store);

User.hasOne(Daycare);
Daycare.belongsTo(User);

User.hasOne(Walker);
Walker.belongsTo(User);

User.hasMany(Comments);
Comments.belongsTo(User);
Product.hasMany(Comments);
Comments.belongsTo(Product);

// modelos de filtros

const Brands = require("./models/FilterModels/Brands.js");
const Breeds = require("./models/FilterModels/Breeds.js");
const Species = require("./models/FilterModels/Species.js");
const Colors = require("./models/FilterModels/Colors.js");
Brands(sequelize);
Breeds(sequelize);
Species(sequelize);
Colors(sequelize);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
