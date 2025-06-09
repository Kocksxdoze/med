const { config, Diagnostic, Doctor } = require("../../db/db.js");

const createDiagnostic = async (req, res) => {
  try {
    const { name, price, about, analise, table, clientId, labId } = req.body;

    const diagnostic = await Diagnostic.create(req.body);

    res.status(200).json(diagnostic);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

const updateDiagnostic = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, about, analise, ready, table } = req.body;

    const diagnostic = await Diagnostic.findOne({ where: { id } });

    !diagnostic
      ? res.status(404).json({ error: `Diagnostic with id ${id} not found` })
      : await diagnostic.update(req.body);

    res.status(200).json(Diagnostic);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

const deleteDiagnostic = async (req, res) => {
  try {
    const { id } = req.params;

    const diagnostic = await Diagnostic.findOne({ where: { id } });

    !diagnostic
      ? res.status(404).json({ error: `Diagnostic with id ${id} not found` })
      : await diagnostic.destroy();

    res.status(200).json({ message: `Diagnostic with id ${id} deleted` });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

const getDiagnosticById = async (req, res) => {
  try {
    const { id } = req.params;

    const diagnostic = await Diagnostic.findOne({ where: { id } });

    !diagnostic
      ? res.status(404).json({ error: `Diagnostic with id ${id} not found` })
      : res.status(200).json(diagnostic);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

const getDiagnostics = async (req, res) => {
  try {
    const diagnostic = await Diagnostic.findAll();

    !diagnostic
      ? res.status(404).json({ error: "No Diagnostics found" })
      : res.status(200).json(diagnostic);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error:", error);
  }
};

module.exports = {
  createDiagnostic,
  updateDiagnostic,
  deleteDiagnostic,
  getDiagnosticById,
  getDiagnostics,
};
