import { Router } from "express";
import usersController from "../controllers/usersController.js";

const router = Router();

router.post("/users", usersController.createUser);
router.get("/users/:id", usersController.getUser);
router.get("/users", usersController.getAllUsers);
router.put("/users/:id", usersController.updateUser);
router.delete("/users/:id", usersController.deleteUser);

export default router;
