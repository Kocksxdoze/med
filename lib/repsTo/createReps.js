const { config, ReportsTo, Report } = require("../../db/db.js");

const createReps = async (req, res) => {
  try {
    const { name, reportCategory, reportId } = req.body;

    const repTo = await ReportsTo.create(req.body);
    const report = await Report.findOne({ where: { id: reportId } });

    res.status(200).send({ repTo, report });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

module.exports = createReps;
