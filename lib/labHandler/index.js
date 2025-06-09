const { config, Lab, Doctor } = require("../../db/db.js");

const createLab = async (req, res) => {
  try {
    const { name, price, about, analise, table, labId, clientId } = req.body;

    const lab = await Lab.create({
      name,
      price,
      about,
      analise,
      table,
      labId,
      clientId,
    });

    res.status(200).json(lab);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

const updateLab = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, about, analise, ready, table } = req.body;

    const lab = await Lab.findOne({ where: { id } });

    !lab
      ? res.status(404).json({ error: `Lab with id ${id} not found` })
      : await Lab.update({ name, price, about, analise, ready, table });

    res.status(200).json(lab);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

const deleteLab = async (req, res) => {
  try {
    const { id } = req.params;

    const lab = await Lab.findOne({ where: { id } });

    !lab
      ? res.status(404).json({ error: `Lab with id ${id} not found` })
      : await lab.destroy();

    res.status(200).json({ message: `Lab with id ${id} deleted` });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

const getLabById = async (req, res) => {
  try {
    const { id } = req.params;

    const lab = await Lab.findOne({ where: { id } });

    !lab
      ? res.status(404).json({ error: `Lab with id ${id} not found` })
      : res.status(200).json(lab);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

const getLabs = async (req, res) => {
  try {
    const lab = await Lab.findAll();

    !lab
      ? res.status(404).json({ error: "No Labs found" })
      : res.status(200).json(lab);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

module.exports = {
  createLab,
  updateLab,
  deleteLab,
  getLabById,
  getLabs,
};
