const { config, Palates } = require("../../db/db.js");

const createPalate = async (req, res) => {
  try {
    const { palateNumber, floor, clientId, palateType } = req.body;

    const palate = await Palates.create({
      palateNumber,
      floor,
      clientId,
      palateType,
    });

    palate
      ? res.status(200).json(palate)
      : res.status(400).json({ error: "Failed to create Palate" });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

const updatePalate = async (req, res) => {
  try {
    const { id } = req.params;
    const { palateNumber, floor, clientId, palateType } = req.body;

    const palate = await Palates.findOne({ where: { id } });

    !palate
      ? res.status(404).json({ error: `Palate with id ${id} not found` })
      : await palate.update({ palateNumber, floor, clientId, palateType });

    res.status(200).json(palate);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const deletePalate = async (req, res) => {
  try {
    const { id } = req.params;

    const palate = await Palates.findOne({ where: { id } });

    !palate
      ? res.status(404).json({ error: `Palate with id ${id} not found` })
      : await palate.destroy();

    res.status(200).json({ message: `Palate ${palate} destroyed` });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

const getPalateById = async (req, res) => {
  try {
    const { id } = req.params;

    const palate = await Palates.findOne({ where: { id } });

    !palate
      ? res.status(404).json({ error: `Palate with id ${id} not found` })
      : res.status(200).json(palate);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

const getPalates = async (req, res) => {
  try {
    const palate = await Palates.findAll();

    !palate
      ? res.status(404).json({ error: "Palates not found" })
      : res.status(200).json(palate);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

module.exports = {
  createPalate,
  updatePalate,
  deletePalate,
  getPalateById,
  getPalates,
};
