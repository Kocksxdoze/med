const express = require("express");
const { config, Doctor } = require("../../db/db.js");
const bcrypt = require("bcrypt");

const router = express.Router();

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      username,
      password,
      name,
      surname,
      phoneNumber,
      email,
      street,
      job,
      profession,
      dateBirth,
      role,
    } = req.body;

    const doctor = await Doctor.findOne({ where: { id } });

    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }

    let updated = {
      username,
      name,
      surname,
      phoneNumber,
      email,
      street,
      job,
      profession,
      dateBirth,
      role,
    };

    if (password) {
      const salt = 10;
      updated.password = await bcrypt.hash(password, salt);
    }

    await doctor.update(updated);

    res.json({ message: "Doctor updated successfully", doctor });
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
