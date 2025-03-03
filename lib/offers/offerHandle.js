const { config, Offer } = require("../../db/db.js");

const createOffer = async (req, res) => {
  try {
    const { name, sum } = req.body;

    const offer = await Offer.create(name, sum);

    res.status(200).json(offer);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const updateOffer = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, sum } = req.body;

    const offer = await Offer.findOne({ where: { id } });

    !offer
      ? res.status(404).json({ message: `No offers with id ${id}` })
      : await offer.update(name, sum);

    res.status(200).json(offer);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const deleteOffer = async () => {
  try {
    const { id } = req.params;

    const offer = await offer.findOne({ where: { id } });

    !offer
      ? res.status(404).json({ message: `No offers with id ${id}` })
      : await offer.destroy();

    res.status(200).json({ message: `Deleted: ${offer}` });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const getOffers = async (req, res) => {
  try {
    const offer = await Offer.findAll();

    !offer
      ? res.status(404).json({ message: "No offers found" })
      : res.status(200).json(offer);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const getOfferById = async (req, res) => {
  try {
    const { id } = req.params;

    const offer = await Offer.findOne({ where: { id } });

    !offer
      ? res.status(404).json({ message: `Offer with id ${id} is not defined` })
      : res.status(200).json(offer);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createOffer,
  updateOffer,
  deleteOffer,
  getOffers,
  getOfferById,
};
