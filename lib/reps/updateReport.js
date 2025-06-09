const { config, Report } = require("../../db/db.js");

const updateReport = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const report = await Report.findOne({ where: { id } });

    if (!report) {
      res.status(404).json({ message: `Report with id ${id} not defined` });
    } else {
      await report.update({ name });
      res.status(200).json(report);
    }
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = updateReport;
