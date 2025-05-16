const { DataTypes } = require("sequelize");

module.exports = (sequlize) => {
  const Cabinet = sequlize.define("Cabinet", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });
  Cabinet.associate = (models) => {
    Cabinet.hasMany(models.Client, {
      foregnKey: "clientId",
      as: "clients",
    });
  };
  return Cabinet;
};
