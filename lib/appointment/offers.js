const { config, AppOffer } = require("../../db/db.js");

const createAppOffer = async (req, res) => {
  try {
    const { name, desc } = req.body;

    const appOffer = await AppOffer.create({
      name,
      desc,
    });

    res.status(200).json(appOffer);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const deleteAppOffer = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await AppOffer.findOne({ where: { id } });

    !item
      ? res.status(404).json({ message: `Item with id ${id} not found` })
      : await item.destroy();
    res.status(200).json(`Deleted ${item}`);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const updateAppOffer = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, desc } = req.body;

    const item = await AppOffer.findOne({ where: { id } });

    !item
      ? res.status(404).json({ message: `Item with id ${id} not found` })
      : await item.update({
          name,
          desc,
        });
    res.status(200).json(`Updated ${item}`);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const getAppOfferById = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await AppOffer.findOne({ where: { id } });

    !item
      ? res.status(404).json({ message: `Item with id ${id} not found` })
      : res.status(200).json(item);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const getAppOffer = async (req, res) => {
  try {
    const item = await AppOffer.findAll();

    !item
      ? res.status(404).json({ message: `Item with id ${id} not found` })
      : res.status(200).json(item);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createAppOffer,
  deleteAppOffer,
  updateAppOffer,
  getAppOfferById,
  getAppOffer,
};
