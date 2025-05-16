const { config, Cabinet, Doctor } = require("../../db/db.js");

const createCabinet = async (req, res) => {
  try {
    const { date } = req.body;

    const cabinet = await Cabinet.create(req.body);

    res.status(200).json(cabinet);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

const updateCabinet = async (req, res) => {
  try {
    const { id } = req.params;
    const { date } = req.body;

    const cabinet = await Cabinet.findOne({ where: { id } });

    !cabinet
      ? res.status(404).json({ error: `cabinet with id ${id} not found` })
      : await cabinet.update(req.body);

    res.status(200).json(cabinet);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

const deleteCabinet = async (req, res) => {
  try {
    const { id } = req.params;

    const cabinet = await Cabinet.findOne({ where: { id } });

    !cabinet
      ? res.status(404).json({ error: `cabinet with id ${id} not found` })
      : await cabinet.destroy();

    res.status(200).json({ message: `cabinet with id ${id} deleted` });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

const getCabinetById = async (req, res) => {
  try {
    const { id } = req.params;

    const cabinet = await Cabinet.findOne({ where: { id } });

    !cabinet
      ? res.status(404).json({ error: `cabinet with id ${id} not found` })
      : res.status(200).json(cabinet);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

const getCabinets = async (req, res) => {
  try {
    const cabinet = await Cabinet.findAll();

    !cabinet
      ? res.status(404).json({ error: "No cabinets found" })
      : res.status(200).json(cabinet);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

module.exports = {
  createCabinet,
  updateCabinet,
  deleteCabinet,
  getCabinetById,
  getCabinets,
};
