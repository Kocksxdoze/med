const { config, Report, ReportsTo } = require("../../db/db.js");

const getReports = async (req, res) => {
  try {
    const report = await Report.findAll({
      include: {
        model: ReportsTo,
        as: "reportsTo",
        attributes: ["id", "name", "desc"],
      },
    });

    !report
      ? res.status(404).json({ message: "Reports not found" })
      : res.status(200).json(report);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const getReportById = async (req, res) => {
  try {
    const { id } = req.params;

    const report = await Report.findOne({
      where: { id },
      include: {
        model: ReportsTo,
        as: "reportsTo",
        attributes: ["id", "name", "desc"],
      },
    });

    !report
      ? res.status(404).json({ message: `Report with id ${id} not found` })
      : res.status(200).json(report);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getReports, getReportById };
