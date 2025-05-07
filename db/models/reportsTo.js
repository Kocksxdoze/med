const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const ReportsTo = sequelize.define("ReportsTo", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reportCategory: {
      type: DataTypes.STRING,
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
  ReportsTo.associate = (models) => {
    ReportsTo.belongsTo(models.Report, {
      foreignKey: "reportId",
      as: "reports",
    });
  };

  return ReportsTo;
};
