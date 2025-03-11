require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const config = require("./db/db.js");
const { login, profile, register } = require("./auth/auth.js");
const clientCreate = require("./auth/clientRegister.js");
const doctorUpdating = require("./lib/users/doctorUpdating.js");
const clientUpdating = require("./lib/users/clientUpdating.js");
const fetchDoctors = require("./lib/users/getDoctors.js");
const fetchClients = require("./lib/users/getClients.js");
const doctorDeleting = require("./lib/users/deleteDoctor.js");
const clientDeleting = require("./lib/users/deleteClient.js");
const createReport = require("./lib/reps/createReport.js");
const updateReport = require("./lib/reps/updateReport.js");
const deleteReport = require("./lib/reps/deleteReport.js");
const { getReports, getReportById } = require("./lib/reps/getReports.js");

const {
  createCategory,
  editCategory,
  deleteCategory,
  getCategoryById,
  getCategories,
} = require("./lib/categories/categoryHandle.js");

const {
  subCreate,
  subUpdate,
  subDelete,
  SubGet,
  SubGetById,
} = require("./lib/categories/subCategoryHandle.js");

const {
  createOffer,
  updateOffer,
  deleteOffer,
  getOfferById,
  getOffers,
} = require("./lib/offers/offerHandle.js");

const {
  createPromocode,
  updatePromo,
  deletePromo,
  getPromocodes,
} = require("./lib/promo/promocode.js");

const {
  createBooking,
  updateBooking,
  deleteBooking,
  getBookingById,
  getBooking,
} = require("./lib/booking/BookingHandle.js");

const {
  createPalate,
  updatePalate,
  deletePalate,
  getPalateById,
  getPalates,
} = require("./lib/palates/palatesHandle.js");

const app = express();
const port = process.env.PORT;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// auth
app.post("/login", login);
app.post("/register", register);
app.get("/profile/:id", profile);
app.use("/client", clientCreate);

// update users
app.use("/doctor/edit", doctorUpdating);
app.use("/client/edit", clientUpdating);

// delete users
app.use("/doctor/delete", doctorDeleting);
app.use("/client/delete", clientDeleting);

// get users
app.use(fetchDoctors);
app.use(fetchClients);

// categories handler
app.post("/category/new", createCategory);
app.put("/category/edit/:id", editCategory);
app.delete("/category/delete/:id", deleteCategory);
app.get("/category/:id", getCategoryById);
app.get("/categories", getCategories);

// sub-categories handler
app.post("/sub/new", subCreate);
app.put("/sub/edit/:id", subUpdate);
app.delete("/sub/delete/:id", subDelete);
app.get("/sub/:id", SubGetById);
app.get("/sub", SubGet);

// offers handler
app.post("/offer/new", createOffer);
app.put("/offer/update/:id", updateOffer);
app.delete("/offer/delete/:id", deleteOffer);
app.get("/offer/:id", getOfferById);
app.get("/offers", getOffers);

// promo handler
app.post("/promo/create", createPromocode);
app.put("/promo/edit/:id", updatePromo);
app.delete("/promo/delete/:id", deletePromo);
app.get("/promocodes", getPromocodes);

// report handler
app.post("/report/create", createReport);
app.put("/report/edit/:id", updateReport);
app.delete("/report/delete/:id", deleteReport);
app.get("/reports", getReports);
app.get("/report/:id", getReportById);

// booking handler
app.post("/booking/new", createBooking);
app.put("/booking/edit/:id", updateBooking);
app.delete("/booking/delete/:id", deleteBooking);
app.get("/book/:id", getBookingById);
app.get("/bookings", getBooking);

//palates handler
app.post("/palate/new", createPalate);
app.put("/palate/edit/:id", updatePalate);
app.delete("/palate/delete/:id", deletePalate);
app.get("/palate/:id", getPalateById);
app.get("/palates", getPalates);

// cashbox handler

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
