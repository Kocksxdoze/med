const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Palate = sequelize.define("Palate", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    palate: {
      type: DataTypes.STRING,
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
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  Palate.associate = (models) => {
    Palate.belongsTo(models.Planer, {
      foreignKey: "palateId",
      as: "planers",
    });
  };
  return Palate;
};
