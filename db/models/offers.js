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

  Offer.associate = (models) => {
    Offer.belongsTo(models.Doctor, {
      foreignKey: "doctorId",
      as: "doctor",
    });

    Offer.belongsTo(models.Client, {
      foreignKey: "offerId",
      as: "clients",
    });
  };

  return Offer;
};
