require("dotenv").config();
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { PORT, FORCE_TRUE } = process.env;

const port = PORT || 3001;

conn.sync({ async: true }).then(() => {
  server.listen(port, () => {
    console.log("%s listening at 3001");
  });
});
