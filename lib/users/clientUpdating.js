const express = require("express");
const { config, Client } = require("../../db/db.js");

const router = express.Router();

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

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
      address,
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
      role,
    } = req.body;

    const client = Client.findOne({ where: { id } });

    if (!client) {
      res.status(404).json({ "Client is't definet": client });
    }

    await client.update(
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
      address,
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
      role
    );

    res.json({ message: "Client successfuly updated", client });
  } catch (error) {
    console.log("Error" + error);
    res.status(500).json({ error: error });
  }
});

module.exports = router;
