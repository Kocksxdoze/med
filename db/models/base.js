const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Base = sequelize.define("Base", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Base.associate = (models) => {
    Base.hasMany(models.Doctor, {
      foreignKey: "baseId",
      as: "doctors",
    });
  };
  return Base;
};
