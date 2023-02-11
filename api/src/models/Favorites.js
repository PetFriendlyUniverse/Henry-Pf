const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Favorites", {}, { timestamps: false });
};
