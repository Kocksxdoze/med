const { config, Planer } = require("../../db/db.js");

const createPlaner = async (req, res) => {
  try {
    const { date } = req.body;

    const planer = await Planer.create(req.body);

    res.status(200).json(planer);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

const updatePlaner = async (req, res) => {
  try {
    const { id } = req.params;
    const { date } = req.body;

    const planer = await Planer.findOne({ where: { id } });

    !planer
      ? res.status(404).json({ error: `planer with id ${id} not found` })
      : await planer.update(req.body);

    res.status(200).json(planer);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

const deletePlaner = async (req, res) => {
  try {
    const { id } = req.params;

    const planer = await Planer.findOne({ where: { id } });

    !planer
      ? res.status(404).json({ error: `planer with id ${id} not found` })
      : await planer.destroy();

    res.status(200).json({ message: `planer with id ${id} deleted` });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

const getPlanerById = async (req, res) => {
  try {
    const { id } = req.params;

    const planer = await Planer.findOne({
      where: { id },
      include: [
        {
          model: Palate,
          as: "palate",
          attributes: ["id", "palate", "floor", "palateType"],
        },
      ],
    });

    !planer
      ? res.status(404).json({ error: `planer with id ${id} not found` })
      : res.status(200).json(planer);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

const getPlaners = async (req, res) => {
  try {
    const planer = await Planer.findAll({
      include: [
        {
          model: Palate,
          as: "palate",
          attributes: ["id", "palate", "floor", "palateType"],
        },
      ],
    });

    !planer
      ? res.status(404).json({ error: "No planers found" })
      : res.status(200).json(planer);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

module.exports = {
  createPlaner,
  updatePlaner,
  deletePlaner,
  getPlanerById,
  getPlaners,
};
