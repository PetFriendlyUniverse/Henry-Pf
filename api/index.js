const server = require("./src/app.js");
const { conn } = require("./src/db.js");
require("dotenv").config();

const port = process.env.port || 3001;

conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log("%s listening at 3001");
  });
});
