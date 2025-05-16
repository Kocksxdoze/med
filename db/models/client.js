const { DataTypes, INTEGER } = require("sequelize");

module.exports = (sequelize) => {
  const Client = sequelize.define("Client", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    homePhone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sex: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dateBirth: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    payment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    republic: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    street: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    addres: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    passportSeries: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    passportNum: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    passportGiver: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pinfl: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    socialPlace: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    work: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    debt: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    balance: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    discount: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    benefitCategory: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    navigation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    doctor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    doctorId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    base: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "client",
    },
  });

  Client.associate = (models) => {
    Client.belongsTo(models.Cabinet, {
      foreignKey: "clientId",
      as: "cabinet",
    });

    Client.hasMany(models.Lab, {
      foreignKey: "clientId",
      as: "labs",
    });

    Client.hasMany(models.Diagnostic, {
      foreignKey: "clientId",
      as: "diagnostics",
    });

    Client.hasMany(models.Offer, {
      foreignKey: "clientId",
      as: "offers",
    });
  };

  return Client;
};
