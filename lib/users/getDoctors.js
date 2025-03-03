const express = require("express");
const { config, Doctor } = require("../../db/db.js");

const router = express.Router();

router.get("/doctors", async (req, res) => {
  try {
    const doctors = await Doctor.findAll();
    !doctors
      ? res.status(404).json({ message: "Doctors is not defined" })
      : res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ message: error });
    console.log("Error" + error);
  }
});

module.exports = router;
