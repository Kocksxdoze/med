const { config, SubCategory, Offer } = require("../../db/db.js");

const subCreate = async (req, res) => {
  const { name, doctorId, categoryId } = req.body;

  const sub = await SubCategory.create({ name, doctorId, categoryId });
  res.status(200).json(sub);
  try {
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const subDelete = async (req, res) => {
  try {
    const { id } = req.params;

    const sub = await SubCategory.findOne({ where: { id } });

    !sub
      ? res.status(404).json({ message: `No SubCategory with id ${id}` })
      : await sub.destroy();

    res.status(200).json({ message: `Deleted: ${sub}` });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const subUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, doctorId, offerId } = req.body;

    const sub = await SubCategory.findOne({ where: { id } });

    if (sub) {
      await sub.update(name, doctorId, offerId);
      res.status(200).json({ message: `Updated fields ${sub}` });
    } else {
      res.status(404).json({ message: `No SubCategory with id ${id}` });
    }
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const SubGet = async (req, res) => {
  try {
    const sub = await SubCategory.findAll({
      include: {
        model: Offer,
        as: "offers",
        attributes: ["id", "name", "sum", "doctorId"],
      },
    });

    !sub
      ? res.status(404).json({ message: "No SubCategories find" })
      : res.status(200).json(sub);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const SubGetById = async (req, res) => {
  try {
    const { id } = req.params;

    const sub = await SubCategory.findOne({ where: { id } });

    !sub
      ? res
          .status(404)
          .json({ message: `SubCategory with id ${id} is not defined` })
      : res.status(200).json(sub);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  subCreate,
  subUpdate,
  subDelete,
  SubGetById,
  SubGet,
};
