const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize) => {
  const Doctor = sequelize.define("Doctor", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userAvatar: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    street: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    job: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profession: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dateBirth: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "doctor",
    },
  });

  Doctor.associate = (models) => {
    Doctor.hasMany(models.Offer, {
      foreignKey: "doctorId",
      as: "offers",
    });

    Doctor.belongsTo(models.Base, {
      foreignKey: "baseId",
      as: "bases",
    });

    Doctor.belongsTo(models.ReportsTo, {
      foreignKey: "doctorШd",
      as: "reportstos",
    });

    Doctor.belongsTo(models.LabCategory, {
      foreignKey: "doctorId2",
      as: "labcategories",
    });
    Doctor.belongsTo(models.DiaCategory, {
      foreignKey: "doctorId3",
      as: "diacategories",
    });
    Doctor.belongsTo(models.OffersCategory, {
      foreignKey: "doctorId4",
      as: "offerscategories",
    });
  };

  Doctor.beforeCreate(async (doctor) => {
    const salt = await bcrypt.genSalt(10);
    doctor.password = await bcrypt.hash(doctor.password, salt);
  });

  Doctor.prototype.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
  };

  return Doctor;
};
