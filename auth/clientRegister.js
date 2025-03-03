const express = require("express");
const { config, Client } = require("../db/db.js");

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const {
      name,
      surname,
      lastName,
      phoneNumber,
      homePhone,
      sex,
      dateBirth,
      payment,
      republic,
      region,
      addres,
      passportSeries,
      passportNum,
      passportGiver,
      pinfl,
      socialPlace,
      work,
      debt,
      discount,
      benefitCategory,
      navigation,
      doctor,
      doctorId,
    } = req.body;

    const client = await Client.create({
      name,
      surname,
      lastName,
      phoneNumber,
      homePhone,
      sex,
      dateBirth,
      payment,
      republic,
      region,
      addres,
      passportSeries,
      passportNum,
      passportGiver,
      pinfl,
      socialPlace,
      work,
      debt,
      discount,
      benefitCategory,
      navigation,
      doctor,
      doctorId,
    });

    res.status(200).json({ client });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Error", error.message);
  }
});

module.exports = router;
