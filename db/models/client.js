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
      unique: true,
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
      type: DataTypes.DATE,
      allowNull: true,
    },
    payment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    republic: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addres: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    passportSeries: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    passportNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    passportGiver: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pinfl: {
      type: DataTypes.BIGINT,
      allowNull: false,
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
      allowNull: false,
    },
    benefitCategory: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    navigation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    doctor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    doctorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
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

  return Client;
};
