const { config, Type } = require("../../db/db.js");

const createType = async (req, res) => {
  try {
    const { name, desc } = req.body;

    const type = await Type.create({
      name,
      desc,
    });

    res.status(200).json(type);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const deleteType = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await Type.findOne({ where: { id } });

    !item
      ? res.status(404).json({ message: `Item with id ${id} not found` })
      : await item.destroy();
    res.status(200).json(`Deleted ${item}`);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const updateType = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, desc } = req.body;

    const item = await Type.findOne({ where: { id } });

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

const getTypeById = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await Type.findOne({ where: { id } });

    !item
      ? res.status(404).json({ message: `Item with id ${id} not found` })
      : res.status(200).json(item);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const getType = async (req, res) => {
  try {
    const item = await Type.findAll();

    !item
      ? res.status(404).json({ message: `Item with id ${id} not found` })
      : res.status(200).json(item);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createType,
  deleteType,
  updateType,
  getTypeById,
  getType,
};
