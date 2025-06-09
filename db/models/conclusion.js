const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Conclusion = sequelize.define("Conclusion", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Conclusion.associate = (models) => {
    Conclusion.belongsTo(models.Client, {
      foreignKey: "clientId",
      as: "clients",
    });
  };

  return Conclusion;
};
