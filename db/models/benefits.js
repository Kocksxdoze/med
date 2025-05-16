const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Benefit = sequelize.define("Benefit", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  return Benefit;
};
