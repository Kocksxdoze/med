const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Report = sequelize.define("Report", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });
  Report.associate = (models) => {
    Report.hasMany(models.ReportsTo, {
      foreignKey: "reportId",
      as: "reportsTo",
    });
  };

  return Report;
};
