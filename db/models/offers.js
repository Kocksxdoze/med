const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Offer = sequelize.define("Offer", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sum: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return Offer;
};
