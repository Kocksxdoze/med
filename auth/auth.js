require("dotenv").config();
const { config, Doctor } = require("../db/db.js");
const jwt = require("jsonwebtoken");

async function login(req, res) {
  const { username, password } = req.body;
  console.log(username, password);
  const doctor = await Doctor.findOne({ where: { username } });
  if (!doctor) {
    return res.status(401).json({ error: "Invalid username" });
  }

  const isValidPassword = await doctor.comparePassword(password);

  if (!isValidPassword) {
    return res.status(401).json({ error: "Invalid password" });
  }
  const secretKey = process.env.SECRET_KEY;

  const token = jwt.sign(
    {
      id: doctor.id,
      username: doctor.username,
      name: doctor.name,
      surname: doctor.surname,
      phoneNumber: doctor.phoneNumber,
      email: doctor.email,
      street: doctor.street,
      job: doctor.job,
      profession: doctor.profession,
      user: doctor.user,
      dateBirth: doctor.dateBirth,
      role: doctor.role,
    },
    secretKey,
    {
      expiresIn: "1d",
    }
  );

  res.json({ token, doctor });
}

async function register(req, res) {
  try {
    const {
      username,
      password,
      name,
      surname,
      phoneNubmer,
      email,
      street,
      job,
      profession,
      user,
      dateBirth,
      role,
    } = req.body;
    console.log("username", username);
    const doctor = await Doctor.create({
      username,
      password,
      name,
      surname,
      phoneNubmer,
      email,
      street,
      job,
      profession,
      user,
      dateBirth,
      role,
    });
    res.json({ doctor });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function profile(req, res) {
  const { id } = req.params;
  const doctor = await Doctor.findOne({
    where: {
      id: id,
    },
  });
  res.send({ doctor });
}

module.exports = { login, register, profile };
