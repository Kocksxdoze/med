const express = require("express");
const {
  config,
  Client,
  Diagnostic,
  Lab,
  Offer,
  Conclusion,
} = require("../../db/db.js");

const router = express.Router();

router.get("/client/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const client = await Client.findOne({
      where: { id },
      include: [
        {
          model: Lab,
          as: "labs",
          attributes: ["id", "name", "price", "about", "analise", "ready"],
        },
        {
          model: Offer,
          as: "offers",
          attributes: ["id", "name", "sum", "doctorId"],
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

    !client
      ? res.status(404).json({ message: "Clients is not defined" })
      : res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ message: error });
    console.log("Error" + error);
  }
});

module.exports = router;
