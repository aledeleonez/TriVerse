import { Router } from "express";
import runsController from "../controllers/runsController.js";

const router = Router();

router.post("/runs", runsController.createRun);
router.get("/runs/:id", runsController.getRun);
router.get("/runs", runsController.getAllRuns);
router.put("/runs/:id", runsController.updateRun);
router.delete("/runs/:id", runsController.deleteRun);

export default router;
