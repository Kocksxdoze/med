const express = require("express");
const {
  config,
  Client,
  Lab,
  Diagnostic,
  Conclusion,
  Offer,
} = require("../../db/db.js");

const router = express.Router();

router.get("/clients", async (req, res) => {
  try {
    const clients = await Client.findAll({
      include: [
        {
          model: Lab,
          as: "labs",
          attributes: ["id", "name", "price", "about", "analise", "ready"],
        },
        {
          model: Offer,
          as: "offers",
          attributes: ["id", "name", "sum", "about", "doctorId"],
        },
        {
          model: Diagnostic,
          as: "diagnostics",
          attributes: ["id", "name", "price", "about", "analise", "ready"],
        },
        {
          model: Conclusion,
          as: "conclusions",
          attributes: ["id", "desc"],
        },
      ],
    });

    !clients
      ? res.status(404).json({ message: "Clients is not defined" })
      : res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ message: error });
    console.log("Error" + error);
  }
});

module.exports = router;
