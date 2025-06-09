const { config, DiaCategory, Doctor } = require("../../db/db.js");

const createDiaCategory = async (req, res) => {
  try {
    const { name, about, sum } = req.body;

    const lab = await DiaCategory.create({ name, about, sum });

    res.status(200).json(lab);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

const updateDiaCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, about, sum } = req.body;

    const lab = await DiaCategory.findOne({ where: { id } });

    !lab
      ? res.status(404).json({ error: `DiaCategory with id ${id} not found` })
      : await lab.update({ name, about, sum });

    res.status(200).json(lab);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

const deleteDiaCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const lab = await DiaCategory.findOne({ where: { id } });

    !lab
      ? res.status(404).json({ error: `DiaCategory with id ${id} not found` })
      : await lab.destroy();

    res.status(200).json({ message: `DiaCategory with id ${id} deleted` });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

const getDiaCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    const lab = await DiaCategory.findOne({ where: { id } });

    !lab
      ? res.status(404).json({ error: `DiaCategory with id ${id} not found` })
      : res.status(200).json(lab);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

const getDiaCategories = async (req, res) => {
  try {
    const lab = await DiaCategory.findAll();

    !lab
      ? res.status(404).json({ error: "No DiaCategorys found" })
      : res.status(200).json(lab);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

module.exports = {
  createDiaCategory,
  updateDiaCategory,
  deleteDiaCategory,
  getDiaCategoryById,
  getDiaCategories,
};
