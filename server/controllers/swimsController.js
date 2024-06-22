import Swims from "../models/swims.js";
import Triathlons from "../models/triathlons.js";

const createSwim = async (req, res) => {
  try {
    const swim = await Swims.create(req.body);
    res.status(201).json(swim);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getSwim = async (req, res) => {
  try {
    const swim = await Swims.findByPk(req.params.id, { include: Triathlons });
    if (swim) {
      res.status(200).json(swim);
    } else {
      res.status(404).json({ message: "Swim not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllSwims = async (req, res) => {
  try {
    const swims = await Swims.findAll({ include: Triathlons });
    res.status(200).json(swims);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateSwim = async (req, res) => {
  try {
    const swim = await Swims.findByPk(req.params.id);
    if (swim) {
      await swim.update(req.body);
      res.status(200).json(swim);
    } else {
      res.status(404).json({ message: "Swim not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteSwim = async (req, res) => {
  try {
    const swim = await Swims.findByPk(req.params.id);
    if (swim) {
      await swim.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: "Swim not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default {
  createSwim,
  getSwim,
  getAllSwims,
  updateSwim,
  deleteSwim,
};
