const { config, Palate } = require("../../db/db.js");

const createPalate = async (req, res) => {
  try {
    const { palate, floor, clientId, palateType } = req.body;

    const palateX = await Palate.create({
      palate,
      floor,
      clientId,
      palateType,
    });

    palateX
      ? res.status(200).json(palateX)
      : res.status(400).json({ error: "Failed to create Palate" });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

const updatePalate = async (req, res) => {
  try {
    const { id } = req.params;
    const { palate, floor, clientId, palateType } = req.body;

    const palateX = await Palate.findOne({ where: { id } });

    !palateX
      ? res.status(404).json({ error: `Palate with id ${id} not found` })
      : await palateX.update({ palate, floor, clientId, palateType });

    res.status(200).json(palateX);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const deletePalate = async (req, res) => {
  try {
    const { id } = req.params;

    const palate = await Palate.findOne({ where: { id } });

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

    const palate = await Palate.findOne({ where: { id } });

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
    const palate = await Palate.findAll();

    !palate
      ? res.status(404).json({ error: "Palate not found" })
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
