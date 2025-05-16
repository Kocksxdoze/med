const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Lab = sequelize.define("Lab", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    about: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    table: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    analise: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ready: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
  });
  Lab.associate = (models) => {
    Lab.belongsTo(models.Client, {
      foreignKey: "clientId",
      as: "clients",
    });
  };

  return Lab;
};
