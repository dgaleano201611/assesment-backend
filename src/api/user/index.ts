import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  findAllUsersController,
  findUserByIdController,
  updateUserController,
} from "./user.controller";

const router = Router();

router.get("/", findAllUsersController);
router.get("/:id", findUserByIdController);
router.post("/", createUserController);
router.put("/:id", updateUserController);
router.delete("/:id", deleteUserController);

export default router;
