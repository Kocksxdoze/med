const { config, LabCategory, Doctor } = require("../../db/db.js");

const createLabCategory = async (req, res) => {
  try {
    const { name, about, sum } = req.body;

    const lab = await LabCategory.create({ name, about, sum });

    res.status(200).json(lab);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

const updateLabCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, about, sum } = req.body;

    const lab = await LabCategory.findOne({ where: { id } });

    !lab
      ? res.status(404).json({ error: `LabCategory with id ${id} not found` })
      : await lab.update({ name, about, sum });

    res.status(200).json(lab);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

const deleteLabCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const lab = await LabCategory.findOne({ where: { id } });

    !lab
      ? res.status(404).json({ error: `LabCategory with id ${id} not found` })
      : await lab.destroy();

    res.status(200).json({ message: `LabCategory with id ${id} deleted` });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

const getLabCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    const lab = await LabCategory.findOne({ where: { id } });

    !lab
      ? res.status(404).json({ error: `LabCategory with id ${id} not found` })
      : res.status(200).json(lab);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

const getLabCategories = async (req, res) => {
  try {
    const lab = await LabCategory.findAll();

    !lab
      ? res.status(404).json({ error: "No LabCategorys found" })
      : res.status(200).json(lab);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

module.exports = {
  createLabCategory,
  updateLabCategory,
  deleteLabCategory,
  getLabCategoryById,
  getLabCategories,
};
