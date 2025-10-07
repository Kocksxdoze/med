require("dotenv").config();
const Sequelize = require("sequelize");

const config = new Sequelize("meds", "root", "", {
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
const Appointment = AppointmentModule(config);

const AppOfferModule = require("./models/appOffers.js");
const AppOffer = AppOfferModule(config);

// const BenefitModule = require("./models/benefits.js");
// const Benefit = BenefitModule(config);

const TypeModule = require("./models/types.js");
const Type = TypeModule(config);

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
  OffersCategory: require("./models/offersCategory.js")(
    config,
    Sequelize.DataTypes
  ),
  Base: require("./models/base.js")(config, Sequelize.DataTypes),
  Palate: require("./models/palates.js")(config, Sequelize.DataTypes),
  Report: require("./models/report.js")(config, Sequelize.DataTypes),
  ReportsTo: require("./models/reportsTo.js")(config, Sequelize.DataTypes),
  Lab: require("./models/lab.js")(config, Sequelize.DataTypes),
  LabCategory: require("./models/labCategory.js")(config, Sequelize.DataTypes),
  Diagnostic: require("./models/diagnostic.js")(config, Sequelize.DataTypes),
  DiaCategory: require("./models/diaCategory.js")(config, Sequelize.DataTypes),
  Planer: require("./models/planer.js")(config, Sequelize.DataTypes),
  Cabinet: require("./models/cabinet.js")(config, Sequelize.DataTypes),
  Conclusion: require("./models/conclusion.js")(config, Sequelize.DataTypes),
  Benefit: require("./models/benefits.js")(config, Sequelize.DataTypes),
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

config
  .query("SET FOREIGN_KEY_CHECKS = 0")
  .then(() => {
    return config.sync({ force: true, logging: console.log });
  })
  .then(() => {
    console.log('Database and tables synced with "SET FOREIGN_KEY_CHECKS = 0"');
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });
config
  .getQueryInterface()
  .showAllTables()
  .then((tables) => {
    console.log("Созданные таблицы:", tables);
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
  Promocode,
  Cashbox,
  Booking,
  Appointment,
  AppOffer,
  Type,
  ...models,
};
