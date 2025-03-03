const { config, Cashbox } = require("../../db/db.js");

const getCash = async (req, res) => {
  try {
    const cash = await Cashbox.findAll();
    !cash
      ? res.status(404).json({ message: "Cashboxes not found" })
      : res.status(200).json(cash);
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({ error: error.message });
  }
};

const getCashById = async (req, res) => {
  try {
    const { id } = req.params;
    const cash = await Cashbox.findOne({ where: { id } });
    !cash
      ? res.status(404).json({ message: `Cashbox with id ${id} not found` })
      : res.status(200).json(cash);
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCash,
  getCashById,
};
