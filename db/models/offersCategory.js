const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const OffersCategory = sequelize.define("OffersCategory", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    about: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sum: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  OffersCategory.associate = (models) => {
    OffersCategory.hasMany(models.Offer, {
      foreignKey: "offerId",
      as: "offers",
    });
    OffersCategory.hasMany(models.Doctor, {
      foreignKey: "doctorId",
      as: "doctors",
    });
  };

  return OffersCategory;
};
