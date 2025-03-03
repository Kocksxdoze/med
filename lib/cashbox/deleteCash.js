const { config, Cashbox } = require("../../db/db.js");

const deleteCash = async (req, res) => {
  try {
    const { id } = req.params;

    const cash = await Cashbox.findOne({ where: { id } });

    if (!cash) {
      res.status(404).json({ message: `Cashbox with id ${id} not found` });
    } else {
      await cash.destroy();
      res.status(200).json({ message: `Cashbox with id ${id} deleted` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};
