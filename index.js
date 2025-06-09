require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const config = require("./db/db.js");
const cors = require("cors");
const { login, profile, register } = require("./auth/auth.js");
const clientCreate = require("./auth/clientRegister.js");
const doctorUpdating = require("./lib/users/doctorUpdating.js");
const clientUpdating = require("./lib/users/clientUpdating.js");
const fetchDoctors = require("./lib/users/getDoctors.js");
const fetchClients = require("./lib/users/getClients.js");
const fetchClient = require("./lib/users/getClietnById.js");
const doctorDeleting = require("./lib/users/deleteDoctor.js");
const clientDeleting = require("./lib/users/deleteClient.js");
const createReport = require("./lib/reps/createReport.js");
const updateReport = require("./lib/reps/updateReport.js");
const deleteReport = require("./lib/reps/deleteReport.js");
const { getReports, getReportById } = require("./lib/reps/getReports.js");
const createCash = require("./lib/cashbox/createCash.js");
const updateCash = require("./lib/cashbox/updateCash.js");
const deleteCash = require("./lib/cashbox/deleteCash.js");
const { getCashById, getCash } = require("./lib/cashbox/getCash.js");
const admin = require("./lib/admin.js");

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

const {
  createBase,
  updateBase,
  deleteBase,
  getBaseById,
  getBases,
} = require("./lib/fillial/baseHandle.js");

const createRep = require("./lib/repsTo/createReps.js");

const {
  createLab,
  updateLab,
  deleteLab,
  getLabs,
  getLabById,
} = require("./lib/labHandler/index.js");

const {
  createDiagnostic,
  updateDiagnostic,
  deleteDiagnostic,
  getDiagnostics,
  getDiagnosticById,
} = require("./lib/diagnosticHandler/diagnosticHandler.js");

const {
  createCabinet,
  updateCabinet,
  deleteCabinet,
  getCabinets,
  getCabinetById,
} = require("./lib/cabinet/cabinetHandler.js");

const {
  createPlaner,
  updatePlaner,
  deletePlaner,
  getPlaners,
  getPlanerById,
} = require("./lib/planerHandler/planerHandler.js");

const {
  createAppointment,
  deleteAppointment,
  updateAppointment,
  getAppointment,
  getAppointmentById,
} = require("./lib/appointment/handle.js");
const {
  createAppOffer,
  updateAppOffer,
  deleteAppOffer,
  getAppOffer,
  getAppOfferById,
} = require("./lib/appointment/offers.js");
const {
  createType,
  updateType,
  deleteType,
  getType,
  getTypeById,
} = require("./lib/appointment/types.js");
const {
  createBenefit,
  updateBenefit,
  deleteBenefit,
  getBenefit,
  getBenefitById,
} = require("./lib/appointment/benefits.js");

const {
  createConclusion,
  updateConclusion,
  deleteConclusion,
  getConclusion,
  getConclusionById,
} = require("./lib/conc/concs.js");

const {
  createLabCategory,
  updateLabCategory,
  deleteLabCategory,
  getLabCategories,
  getLabCategoryById,
} = require("./lib/labHandler/category.js");

const {
  createDiaCategory,
  updateDiaCategory,
  deleteDiaCategory,
  getDiaCategories,
  getDiaCategoryById,
} = require("./lib/diagnosticHandler/diaCateg.js");

const app = express();
const port = process.env.PORT || process.env.PORT + 1;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

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
app.use(fetchClient);

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

app.get("/offer-categories", getLabCategories);

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

// reps handler
app.post("/rep/new", createRep);

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
app.post("/cash/new", createCash);
app.put("/cash/edit/:id", updateCash);
app.delete("cash/delete/:id", deleteCash);
app.get("/cash/:id", getCashById);
app.get("/cashbox", getCash);

// base handler
app.post("/base/new", createBase);
app.put("/base/edit/:id", updateBase);
app.delete("/base/delete/:id", deleteBase);
app.get("/base/:id", getBaseById);
app.get("/bases", getBases);

// lab handler
app.post("/lab/new", createLab);
app.put("/lab/update/:id", updateLab);
app.delete("/lab/delete/:id", deleteLab);
app.get("/labs", getLabs);
app.get("/lab/:id", getLabById);

app.post("/lab-category/new", createLabCategory);
app.put("/lab-category/update/:id", updateLabCategory);
app.delete("/lab-category/delete/:id", deleteLabCategory);
app.get("/lab-categories", getLabCategories);
app.get("/lab-category/:id", getLabCategoryById);

// diagnostic handler
app.post("/dia/new", createDiagnostic);
app.put("/dia/update/:id", updateDiagnostic);
app.delete("/dia/delete/:id", deleteDiagnostic);
app.get("/dias", getDiagnostics);
app.get("/dia/:id", getDiagnosticById);

app.post("/dia-category/new", createDiaCategory);
app.put("/dia-category/update/:id", updateDiaCategory);
app.delete("/dia-category/delete/:id", deleteDiaCategory);
app.get("/dia-categories", getDiaCategories);
app.get("/dia-category/:id", getDiaCategoryById);

// cabinet handler
app.post("/cabinet/new", createCabinet);
app.delete("/cabinet/delete/:id", deleteCabinet);
app.put("/cabinet/update/:id", updateCabinet);
app.get("/cabinets", getCabinets);
app.get("/cabinet/:id", getCabinetById);

// planer handler
app.post("/planer/new", createPlaner);
app.delete("/planer/delete/:id", deletePlaner);
app.put("/planer/update/:id", updatePlaner);
app.get("/planers", getPlaners);
app.get("/planer/:id", getPlanerById);

// appointment helper
app.post("/app/new", createAppointment);
app.post("/appo/new", createAppOffer);
app.post("/type/new", createType);
app.post("/benefit/new", createBenefit);

app.delete("/app/delete/:id", deleteAppointment);
app.delete("/appo/delete/:id", deleteAppOffer);
app.delete("/type/delete/:id", deleteType);
app.delete("/benefit/delete/:id", deleteBenefit);

app.put("/app/update/:id", updateAppointment);
app.put("/appo/update/:id", updateAppOffer);
app.put("/type/update/:id", updateType);
app.put("/benefit/update/:id", updateBenefit);

app.get("/apps", getAppointment);
app.get("/appos", getAppOffer);
app.get("/types", getType);
app.get("/benefits", getBenefit);

app.get("/app/:id", getAppointmentById);
app.get("/appo/:id", getAppOfferById);
app.get("/type/:id", getTypeById);
app.get("/benefit/:id", getBenefitById);

// conclusion handler
app.post("/conc/new", createConclusion);
app.put("/conc/edit/:id", updateConclusion);
app.delete("/conc/delete/:id", deleteConclusion);
app.get("/concs", getConclusion);
app.get("/conc/:id", getConclusionById);

app.listen(port, "0.0.0.0", () => {
  console.log(`Server started on port ${port}`);
});
