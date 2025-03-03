const { config, Promocode } = require("../../db/db.js");

const createPromocode = async (req, res) => {
  try {
    const { username, type, presentage, start, expire } = req.body;

    const promo = await Promocode.create(
      username,
      type,
      presentage,
      start,
      expire
    );

    res.status(200).json(promo);
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ error: error.message });
  }
};

const updatePromo = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, type, presentage, start, expire } = req.body;

    const promo = await Promocode.findOne({ where: { id } });

    !promo
      ? res.status(404).json({ message: `Cannot find Promocode with id ${id}` })
      : await promo.update(username, type, presentage, start, expire);

    res.status(200).json(promo);
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ error: error.message });
  }
};

const deletePromo = async (req, res) => {
  try {
    const { id } = req.params;

    const promo = await Promocode.findOne({ where: { id } });

    !promo
      ? res.status(404).json({ message: `Cannot find Promocode with id ${id}` })
      : await promo.destroy();

    res.status(200).json(`Promocode with id ${id} has been deleted`);
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ error: error.message });
  }
};

const getPromocodes = async (req, res) => {
  try {
    const promo = await Promocode.findAll();

    !promo
      ? res.status(404).json({ message: "No promocodes" })
      : res.status(200).json(promo);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPromocode,
  updatePromo,
  deletePromo,
  getPromocodes,
};
