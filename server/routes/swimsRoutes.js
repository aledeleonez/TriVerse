import { Router } from "express";
import swimsController from "../controllers/swimsController.js";

const router = Router();

router.post("/swims", swimsController.createSwim);
router.get("/swims/:id", swimsController.getSwim);
router.get("/swims", swimsController.getAllSwims);
router.put("/swims/:id", swimsController.updateSwim);
router.delete("/swims/:id", swimsController.deleteSwim);

export default router;
