const { config, Report } = require("../../db/db.js");

const createReport = async (req, res) => {
  try {
    const {
      name,
      reportCategory,
      desc,
      doctorId,
      createdAt,
      deletedAt,
      updatedAt,
    } = req.body;

    const report = await Report.create(
      name,
      reportCategory,
      desc,
      doctorId,
      createdAt,
      deletedAt,
      updatedAt
    );

    res.status(200).json(report);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = createReport;
