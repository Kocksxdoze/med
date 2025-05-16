const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Planer = sequelize.define("Planer", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  Planer.associate = (models) => {
    Planer.hasMany(models.Palate, {
      foreignKey: "palateId",
      as: "palates",
    });
  };
  return Planer;
};
