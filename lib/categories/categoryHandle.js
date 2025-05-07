const {
  config,
  Categories,
  SubCategory,
  Offer,
  Doctor,
} = require("../../db/db.js");

const createCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;

    const category = await Categories.create({ categoryName });
    res.json(category);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

const editCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { categoryName, subCategoriesId } = req.body;

    const category = await Categories.findOne({ where: { id } });

    if (category) {
      await category.update(categoryName, subCategoriesId);
      res.status(200).json({ category });
    } else {
      res.status(404).json({ message: `No Category with id ${id} ` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Categories.findOne({ where: { id } });

    if (category) {
      await category.destroy();
      res
        .status(200)
        .json({ message: `Category deleted successfuly \ ${category}` });
    } else {
      res.status(404).json({ message: `No Category with id ${id} ` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Categories.findOne({ where: { id } });

    !category
      ? res.status(404).json({ message: `No category with id ${id}` })
      : res.status(200).json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await Categories.findAll({
      include: [
        {
          model: SubCategory,
          as: "subcategories",
          attributes: ["id", "name"],
          include: [
            {
              model: Offer,
              as: "offers",
              attributes: ["id", "name", "sum", "doctorId"],
            },
          ],
        },
      ],
    });

    res.json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCategory,
  editCategory,
  deleteCategory,
  getCategoryById,
  getCategories,
};
