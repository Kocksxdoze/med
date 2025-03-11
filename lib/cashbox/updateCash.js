const { config, Cashbox } = require("../../db/db.js");

const updateCash = async (req, res) => {
  try {
    const { id } = req.params;
    const { doctorId, clientId, sum, discount, date, payment, debt, status } =
      req.body;

    const cash = await Cashbox.findOne({ where: { id } });

    if (!cash) {
      res.status(404).json({ message: `Cashbox with id ${id} not found` });
    } else {
      await cash.update({
        doctorId,
        clientId,
        sum,
        discount,
        date,
        payment,
        debt,
        status,
      });
      res.status(200).json(cash);
    }
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};
