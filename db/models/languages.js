const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Language = sequelize.define("Language", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    languageName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Language;
};
