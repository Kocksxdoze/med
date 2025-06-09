const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const DiaCategory = sequelize.define("DiaCategory", {
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
  DiaCategory.associate = (models) => {
    DiaCategory.hasMany(models.Diagnostic, {
      foreignKey: "diaId",
      as: "diagnostics",
    });
    DiaCategory.hasMany(models.Doctor, {
      foreignKey: "doctorId",
      as: "doctors",
    });
  };

  return DiaCategory;
};
