const express = require("express");
const { config, Doctor } = require("../../db/db.js");

const router = express.Router();

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await Doctor.findOne({ where: { id } });
    doctor
      ? await doctor.destroy()
      : res.status(404).json({ message: `No doctor found with id ${id}` });

    res.status(200).json({
      message: `Doctor with username ${doctor.username} deleted successfuly`,
    });
  } catch (error) {
    res.status(500).json({ message: error });
    console.log("Error" + error);
  }
});

module.exports = router;
