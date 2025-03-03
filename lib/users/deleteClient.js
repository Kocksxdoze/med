const express = require("express");
const { config, Client } = require("../../db/db.js");

const router = express.Router();

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findOne({ where: { id } });
    client
      ? await client.destroy()
      : res.status(404).json({ message: `No client found with id ${id}` });

    res.status(200).json({
      message: `Client with username ${client.name} deleted successfuly`,
    });
  } catch (error) {
    res.status(500).json({ message: error });
    console.log("Error" + error);
  }
});

module.exports = router;
