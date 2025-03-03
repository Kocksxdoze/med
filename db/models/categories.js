const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Categories = sequelize.define("Categories", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subCategoriesId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
  return Categories;
};
