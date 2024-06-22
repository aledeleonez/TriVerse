import { Router } from "express";
import triathlonController from "../controllers/triathlonsController.js";

const router = Router();

router.post("/triathlons", triathlonController.createTriathlon);
router.get("/triathlons/:id", triathlonController.getTriathlon);
router.get("/triathlons", triathlonController.getAllTriathlons);
router.put("/triathlons/:id", triathlonController.updateTriathlon);
router.delete("/triathlons/:id", triathlonController.deleteTriathlon);

export default router;
