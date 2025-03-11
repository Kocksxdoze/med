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
      allowNull: true,
    },
  });

  Categories.associate = (models) => {
    Categories.hasMany(models.SubCategory, {
      foreignKey: "categoryId",
      as: "subcategories",
    });
  };

  return Categories;
};
