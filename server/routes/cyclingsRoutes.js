import { Router } from "express";
import cyclingsController from "../controllers/cyclingsController.js";

const router = Router();

router.post("/cyclings", cyclingsController.createCycling);
router.get("/cyclings/:id", cyclingsController.getCycling);
router.get("/cyclings", cyclingsController.getAllCyclings);
router.put("/cyclings/:id", cyclingsController.updateCycling);
router.delete("/cyclings/:id", cyclingsController.deleteCycling);

export default router;
