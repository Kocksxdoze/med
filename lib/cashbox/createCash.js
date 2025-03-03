const { config, Cashbox } = require("../../db/db.js");

const createCash = async (req, res) => {
  try {
    const { doctorId, clientId, sum, discount, date, payment, debt, status } =
      req.body;

    const cash = await Cashbox.create(
      doctorId,
      clientId,
      sum,
      discount,
      date,
      payment,
      debt,
      status
    );

    res.status(200).json(cash);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = createCash;
