import { Router } from "express";
import { auth } from "../../middleware/auth";
import {
  deleteUserController,
  findAllUsersController,
  findUserByIdController,
  updateUserController,
} from "./user.controller";

const router = Router();

router.get("/", auth, findAllUsersController);
router.get("/:id", auth, findUserByIdController);
router.put("/", auth, updateUserController);
router.delete("/:id", auth, deleteUserController);

export default router;
