const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Promocode = sequelize.define("Promocode", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    type: {
      type: DataTypes.STRING,
    },
    presentage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    expire: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });

  return Promocode;
};
