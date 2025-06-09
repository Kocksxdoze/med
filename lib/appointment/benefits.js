const { config, Benefit } = require("../../db/db.js");

const createBenefit = async (req, res) => {
  try {
    const { name, desc } = req.body;

    const benefit = await Benefit.create({
      name,
      desc,
    });

    res.status(200).json(benefit);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const deleteBenefit = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await Benefit.findOne({ where: { id } });

    !item
      ? res.status(404).json({ message: `Item with id ${id} not found` })
      : await item.destroy();
    res.status(200).json(`Deleted ${item}`);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const updateBenefit = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, desc } = req.body;

    const item = await Benefit.findOne({ where: { id } });

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

const getBenefitById = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await Benefit.findOne({ where: { id } });

    !item
      ? res.status(404).json({ message: `Item with id ${id} not found` })
      : res.status(200).json(item);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const getBenefit = async (req, res) => {
  try {
    const item = await Benefit.findAll();

    !item
      ? res.status(404).json({ message: `Item with id ${id} not found` })
      : res.status(200).json(item);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBenefit,
  deleteBenefit,
  updateBenefit,
  getBenefitById,
  getBenefit,
};
