import Cycling from "../models/cyclings.js";

const createCycling = async (req, res) => {
  try {
    const cycling = await Cycling.create(req.body);
    res.status(201).json(cycling);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getCycling = async (req, res) => {
  try {
    const cycling = await Cycling.findByPk(req.params.id);
    if (cycling) {
      res.status(200).json(cycling);
    } else {
      res.status(404).json({ message: "Cycling not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllCyclings = async (req, res) => {
  try {
    const cyclings = await Cycling.findAll();
    res.status(200).json(cyclings);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateCycling = async (req, res) => {
  try {
    const cycling = await Cycling.findByPk(req.params.id);
    if (user) {
      await user.update(req.body);
      res.status(200).json(cycling);
    } else {
      res.status(404).json({ message: "Cycling not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteCycling = async (req, res) => {
  try {
    const cycling = await Cycling.findByPk(req.params.id);
    if (cycling) {
      await cycling.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: "Cycling not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default {
  createCycling,
  getCycling,
  getAllCyclings,
  updateCycling,
  deleteCycling,
};
