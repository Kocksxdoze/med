const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Palate = sequelize.define("Palate", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    palataNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    floor: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    palateType: {
      type: DataTypes.BOOLEAN,
    },
  });
};
