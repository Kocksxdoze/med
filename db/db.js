require("dotenv").config();
const Sequelize = require("sequelize");

const config = new Sequelize("med", "root", "", {
  host: "127.0.0.1",
  port: 3306,
  dialect: "mysql",
});

// const DoctorModule = require("./models/doctors.js");
// const Doctor = DoctorModule(config);

const CashboxModule = require("./models/cashbox.js");
const Cashbox = CashboxModule(config);

// const CategoriesModule = require("./models/categories.js");
// const Categories = CategoriesModule(config);

// const SubCategoryModule = require("./models/sub-categories.js");
// const SubCategory = SubCategoryModule(config);

// const OfferModule = require("./models/offers.js");
// const Offer = OfferModule(config);

const PromocodeModule = require("./models/promocode.js");
const Promocode = PromocodeModule(config, Sequelize.DataTypes);

// const ReportModule = require("./models/report.js");
// const Report = ReportModule(config);
const BookingModule = require("./models/booking.js");
const Booking = BookingModule(config);

const AppointmentModule = require("./models/appointment.js");
const Appointment = BookingModule(config);

const AppOfferModule = require("./models/appOffers.js");
const AppOffer = BookingModule(config);

const BenefitModule = require("./models/benefits.js");
const Benefit = BookingModule(config);

const TypeModule = require("./models/types.js");
const Type = BookingModule(config);

// const BaseModule = require("./models/base.js");
// const Base = BaseModule(config);

const models = {
  Doctor: require("./models/doctors.js")(config, Sequelize.DataTypes),
  Client: require("./models/client.js")(config, Sequelize.DataTypes),
  Categories: require("./models/categories.js")(config, Sequelize.DataTypes),
  SubCategory: require("./models/sub-categories.js")(
    config,
    Sequelize.DataTypes
  ),
  Offer: require("./models/offers.js")(config, Sequelize.DataTypes),
  Base: require("./models/base.js")(config, Sequelize.DataTypes),
  Palate: require("./models/palates.js")(config, Sequelize.DataTypes),
  Report: require("./models/report.js")(config, Sequelize.DataTypes),
  ReportsTo: require("./models/reportsTo.js")(config, Sequelize.DataTypes),
  Lab: require("./models/lab.js")(config, Sequelize.DataTypes),
  Diagnostic: require("./models/diagnostic.js")(config, Sequelize.DataTypes),
  Planer: require("./models/planer.js")(config, Sequelize.DataTypes),
  Cabinet: require("./models/cabinet.js")(config, Sequelize.DataTypes),
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

config
  .query("SET FOREIGN_KEY_CHECKS = 0")
  .then(() => {
    return config.sync({ alter: true });
  })
  .then(() => {
    console.log('Database and tables synced with "SET FOREIGN_KEY_CHECKS = 0"');
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });

// config
//     .authenticate()
//     .then(function (err) {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(function (err) {
//         console.log('Unable to connect to the database:', err);
//     });

module.exports = {
  config,
  Appointment,
  AppOffer,
  Benefit,
  Type,
  Promocode,
  Cashbox,
  Booking,
  ...models,
};
