const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Comments",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      content: {
        type: DataTypes.STRING,
        validate: {
          len: [10, 255],
        },
      },
    }

    // {
    //   timestamps: true,
    //   createdAt: true,
    //   updatedAt: false,
    // }
  );
};
