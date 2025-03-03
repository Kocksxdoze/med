const express = require("express");
const { config, Client } = require("../../db/db.js");

const router = express.Router();

router.get("/clients", async (req, res) => {
  try {
    const clients = await Client.findAll();

    !clients
      ? res.status(404).json({ message: "Clients is not defined" })
      : res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ message: error });
    console.log("Error" + error);
  }
});

module.exports = router;
