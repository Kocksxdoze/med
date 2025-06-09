const { config, Conclusion } = require("../../db/db.js");

const createConclusion = async (req, res) => {
  try {
    const { desc, clientId } = req.body;

    const conclusion = await Conclusion.create({
      desc,
      clientId,
    });

    res.status(200).json(conclusion);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const deleteConclusion = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await Conclusion.findOne({ where: { id } });

    !item
      ? res.status(404).json({ message: `Item with id ${id} not found` })
      : await item.destroy();
    res.status(200).json(`Deleted ${item}`);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const updateConclusion = async (req, res) => {
  try {
    const { id } = req.params;
    const { desc } = req.body;

    const item = await Conclusion.findOne({ where: { id } });

    !item
      ? res.status(404).json({ message: `Item with id ${id} not found` })
      : await item.update({
          desc,
        });
    res.status(200).json(`Updated ${item}`);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const getConclusionById = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await Conclusion.findOne({ where: { id } });

    !item
      ? res.status(404).json({ message: `Item with id ${id} not found` })
      : res.status(200).json(item);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const getConclusion = async (req, res) => {
  try {
    const item = await Conclusion.findAll();

    !item
      ? res.status(404).json({ message: `Item with id ${id} not found` })
      : res.status(200).json(item);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createConclusion,
  deleteConclusion,
  updateConclusion,
  getConclusionById,
  getConclusion,
};
