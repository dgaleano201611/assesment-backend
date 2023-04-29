import { Router } from "express";
import { auth } from "../../middleware/auth";
import {
  createListFavsController,
  deleteListFavsByIdController,
  getAllListFavsController,
  getListFavsByIdController,
  updateListFavsController,
} from "./listFavs.controller";

const router = Router();

router.get("/", auth, getAllListFavsController);
router.post("/", auth, createListFavsController);
router.get("/:id", auth, getListFavsByIdController);
router.put("/:id", auth, updateListFavsController);
router.delete("/:id", auth, deleteListFavsByIdController);

export default router;
