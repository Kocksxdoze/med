require("dotenv").config();
const Sequelize = require("sequelize");

const config = new Sequelize("med", "root", "", {
  host: "127.0.0.1",
  port: 3500,
  dialect: "mysql",
});

const ClientModule = require("./models/client.js");
const Client = ClientModule(config);

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
const Promocode = PromocodeModule(config);

const ReportModule = require("./models/report.js");
const Report = ReportModule(config);

const BookingModule = require("./models/booking.js");
const Booking = BookingModule(config);

const PalatesModule = require("./models/palates.js");
const Palates = PalatesModule(config);

// const BaseModule = require("./models/base.js");
// const Base = BaseModule(config);

const models = {
  Doctor: require("./models/doctors.js")(config, Sequelize.DataTypes),
  Categories: require("./models/categories.js")(config, Sequelize.DataTypes),
  SubCategory: require("./models/sub-categories.js")(
    config,
    Sequelize.DataTypes
  ),
  Offer: require("./models/offers.js")(config, Sequelize.DataTypes),
  Base: require("./models/base.js")(config, Sequelize.DataTypes),
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

config
  .query("SET FOREIGN_KEY_CHECKS = 0", { raw: true })
  .then(() => {
    return config.sync({ force: false });
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
  Client,
  Promocode,
  Cashbox,
  Report,
  Booking,
  Palates,
  ...models,
};
