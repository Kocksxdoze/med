const express = require("express");
const { config, Client } = require("../../db/db.js");

const router = express.Router();

router.get("/client/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const client = await Client.findOne({ where: { id } });

    !client
      ? res.status(404).json({ message: "Clients is not defined" })
      : res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ message: error });
    console.log("Error" + error);
  }
});

module.exports = router;
