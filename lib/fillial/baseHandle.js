const { config, Base, Doctor } = require("../../db/db.js");

const createBase = async (req, res) => {
  try {
    const { name } = req.body;

    const base = await Base.create({ name });

    res.status(200).json(base);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

const updateBase = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const base = await Base.findOne({ where: { id } });

    !base
      ? res.status(404).json({ error: `Base with id ${id} not found` })
      : await base.update({ name });

    res.status(200).json(base);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

const deleteBase = async (req, res) => {
  try {
    const { id } = req.params;

    const base = await Base.findOne({ where: { id } });

    !base
      ? res.status(404).json({ error: `Base with id ${id} not found` })
      : await base.destroy();

    res.status(200).json({ message: `Base with id ${id} deleted` });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

const getBaseById = async (req, res) => {
  try {
    const { id } = req.params;

    const base = await Base.findOne({ where: { id } });

    !base
      ? res.status(404).json({ error: `Base with id ${id} not found` })
      : res.status(200).json(base);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

const getBases = async (req, res) => {
  try {
    const base = await Base.findAll({
      include: {
        model: Doctor,
        as: "doctors",
        attributes: ["id", "name"],
      },
    });

    !base
      ? res.status(404).json({ error: "No bases found" })
      : res.status(200).json(base);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

module.exports = {
  createBase,
  updateBase,
  deleteBase,
  getBaseById,
  getBases,
};
