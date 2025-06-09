const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const LabCategory = sequelize.define("LabCategory", {
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
  LabCategory.associate = (models) => {
    LabCategory.hasMany(models.Lab, {
      foreignKey: "labId",
      as: "labs",
    });
    LabCategory.hasMany(models.Doctor, {
      foreignKey: "doctorId",
      as: "doctors",
    });
  };

  return LabCategory;
};
