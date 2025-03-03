const { config, Report } = require("../../db/db.js");

const deleteReport = async (req, res) => {
  try {
    const { id } = req.params;

    const report = await Report.findOne({ where: { id } });

    !report
      ? res.status(404).json({ message: `Report with id ${id} not found` })
      : await report.destroy();

    res
      .status(200)
      .json({ message: `report with id ${id} deleted successfuly` });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

module.exports = deleteReport;
