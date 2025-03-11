const { config, Booking } = require("../../db/db.js");

const createBooking = async (req, res) => {
  try {
    const { name, palateId, bookingDays, doctorId, clientId } = req.body;

    const booking = await Booking.create({
      name,
      palateId,
      bookingDays,
      doctorId,
      clientId,
    });

    res.status(200).json(booking);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await Booking.findOne({ where: { id } });

    !item
      ? res.status(404).json({ message: `Item with id ${id} not found` })
      : await item.destroy();
    res.status(200).json(`Deleted ${item}`);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const updateBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, palateId, bookingDays, doctorId, clientId } = req.body;

    const item = await Booking.findOne({ where: { id } });

    !item
      ? res.status(404).json({ message: `Item with id ${id} not found` })
      : await item.update({ name, palateId, bookingDays, doctorId, clientId });
    res.status(200).json(`Updated ${item}`);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const getBookingById = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await Booking.findOne({ where: { id } });

    !item
      ? res.status(404).json({ message: `Item with id ${id} not found` })
      : res.status(200).json(item);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const getBooking = async (req, res) => {
  try {
    const item = await Booking.findAll();

    !item
      ? res.status(404).json({ message: `Item with id ${id} not found` })
      : res.status(200).json(item);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBooking,
  deleteBooking,
  updateBooking,
  getBookingById,
  getBooking,
};
