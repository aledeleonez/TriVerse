// controllers/triathlonController.js
import Triathlons from "../models/triathlons.js";
import Users from "../models/users.js";

const createTriathlon = async (req, res) => {
  try {
    const triathlon = await Triathlons.create(req.body);
    res.status(201).json(triathlon);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getTriathlon = async (req, res) => {
  try {
    const triathlon = await Triathlons.findByPk(req.params.id, {
      include: Users,
    });
    if (triathlon) {
      res.status(200).json(triathlon);
    } else {
      res.status(404).json({ message: "Triathlon not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllTriathlons = async (req, res) => {
  try {
    const triathlons = await Triathlons.findAll({ include: Users });
    res.status(200).json(triathlons);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllTriathlonsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const triathlons = await Triathlons.findAll({ where: { userId } });
    res.status(200).json(triathlons);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateTriathlon = async (req, res) => {
  try {
    const triathlon = await Triathlons.findByPk(req.params.id);
    if (triathlon) {
      await triathlon.update(req.body);
      res.status(200).json(triathlon);
    } else {
      res.status(404).json({ message: "Triathlon not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteTriathlon = async (req, res) => {
  try {
    const triathlon = await Triathlons.findByPk(req.params.id);
    if (triathlon) {
      await triathlon.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: "Triathlon not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default {
  createTriathlon,
  getTriathlon,
  getAllTriathlons,
  getAllTriathlonsByUserId,
  updateTriathlon,
  deleteTriathlon,
};
