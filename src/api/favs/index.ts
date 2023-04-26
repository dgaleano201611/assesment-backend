import { Router } from "express";
import { findAllUsersController } from "../user/user.controller";
import {
  createFavController,
  deleteFavController,
  findFavByidController,
  updateFavByidController,
} from "./favs.controller";

const router = Router();

router.get("/", findAllUsersController);
router.get("/:id", findFavByidController);
router.post("/", createFavController);
router.put("/:id", updateFavByidController);
router.delete("/:id", deleteFavController);

export default router;
