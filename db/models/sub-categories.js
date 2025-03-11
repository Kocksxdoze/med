const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const SubCategory = sequelize.define("SubCategory", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Categories",
        key: "id",
      },
    },
  });

  SubCategory.associate = (models) => {
    SubCategory.belongsTo(models.Categories, {
      foreignKey: "categoryId",
      as: "category",
    });

    SubCategory.hasMany(models.Offer, {
      foreignKey: "subCategoryId",
      as: "offers",
    });
  };

  return SubCategory;
};
