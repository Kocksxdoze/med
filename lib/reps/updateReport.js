const { config, Report } = require("../../db/db.js");

const updateReport = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      reportCategory,
      desc,
      doctorId,
      createdAt,
      deletedAt,
      updatedAt,
    } = req.body;

    const report = await Report.findOne({ where: { id } });

    if (!report) {
      res.status(404).json({ message: `Report with id ${id} not defined` });
    } else {
      await report.update(
        name,
        reportCategory,
        desc,
        doctorId,
        createdAt,
        deletedAt,
        updatedAt
      );
      res.status(200).json(report);
    }
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = updateReport;
