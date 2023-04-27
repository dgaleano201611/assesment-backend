import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  findAllUsersController,
  findUserByIdController,
  updateUserController,
  loginController,
} from "./user.controller";

const router = Router();

router.get("/", findAllUsersController);
router.get("/:id", findUserByIdController);
router.post("/", createUserController);
router.put("/:id", updateUserController);
router.delete("/:id", deleteUserController);
router.post("/login", loginController);

export default router;
