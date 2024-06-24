import Run from "../models/runs.js";

const createRun = async (req, res) => {
  try {
    const run = await Run.create(req.body);
    res.status(201).json(run);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getRun = async (req, res) => {
  try {
    const run = await Run.findByPk(req.params.id);
    if (user) {
      res.status(200).json(run);
    } else {
      res.status(404).json({ message: "No se ha encontrado la actividad" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllRuns = async (req, res) => {
  try {
    const runs = await Run.findAll();
    res.status(200).json(runs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateRun = async (req, res) => {
  try {
    const run = await Run.findByPk(req.params.id);
    if (user) {
      await user.update(req.body);
      res.status(200).json(run);
    } else {
      res.status(404).json({ message: "Run not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteRun = async (req, res) => {
  try {
    const run = await Run.findByPk(req.params.id);
    if (run) {
      await run.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: "Run not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default {
  createRun,
  getRun,
  getAllRuns,
  updateRun,
  deleteRun,
};
