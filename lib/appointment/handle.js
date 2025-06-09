const { config, Appointment } = require("../../db/db.js");

const createAppointment = async (req, res) => {
  try {
    const {
      date,
      surname,
      name,
      lastName,
      birthDate,
      phoneNumber,
      sex,
      benefit,
      status,
      type,
      timeStart,
      duration,
      timeEnd,
      doctor,
      offer,
      desc,
    } = req.body;

    const appointment = await Appointment.create({
      date,
      surname,
      name,
      lastName,
      birthDate,
      phoneNumber,
      sex,
      benefit,
      status,
      type,
      timeStart,
      duration,
      timeEnd,
      doctor,
      offer,
      desc,
    });

    res.status(200).json(appointment);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await Appointment.findOne({ where: { id } });

    !item
      ? res.status(404).json({ message: `Item with id ${id} not found` })
      : await item.destroy();
    res.status(200).json(`Deleted ${item}`);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const updateAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      date,
      surname,
      name,
      lastName,
      birthDate,
      phoneNumber,
      sex,
      benefit,
      status,
      type,
      timeStart,
      duration,
      timeEnd,
      doctor,
      offer,
      desc,
    } = req.body;

    const item = await Appointment.findOne({ where: { id } });

    !item
      ? res.status(404).json({ message: `Item with id ${id} not found` })
      : await item.update({
          date,
          surname,
          name,
          lastName,
          birthDate,
          phoneNumber,
          sex,
          benefit,
          status,
          type,
          timeStart,
          duration,
          timeEnd,
          doctor,
          offer,
          desc,
        });
    res.status(200).json(`Updated ${item}`);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const getAppointmentById = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await Appointment.findOne({ where: { id } });

    !item
      ? res.status(404).json({ message: `Item with id ${id} not found` })
      : res.status(200).json(item);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const getAppointment = async (req, res) => {
  try {
    const item = await Appointment.findAll();

    !item
      ? res.status(404).json({ message: `Item with id ${id} not found` })
      : res.status(200).json(item);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createAppointment,
  deleteAppointment,
  updateAppointment,
  getAppointmentById,
  getAppointment,
};
