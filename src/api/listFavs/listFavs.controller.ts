import { Request, Response, NextFunction } from "express";
import {
  createListFavs,
  deleteListFavsById,
  findListFavsById,
  getAllListFavs,
  updateListFavs,
} from "./listFavs.service";

export const getAllListFavsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const listFavs = await getAllListFavs();
    res.status(200).json({ message: "list favorities found", data: listFavs });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createListFavsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const listFavs = await createListFavs(req.body);
    res.status(201).json({ message: "list favs created", data: listFavs });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getListFavsByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const listFavs = await findListFavsById(id);
    res.status(200).json({ message: "list favs found", data: listFavs });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateListFavsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const listFavs = await updateListFavs(id, req.body);
    res.status(200).json({ message: "list favs updated", data: listFavs });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteListFavsByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const listFavs = await deleteListFavsById(id);
    res.status(200).json({ message: "list favs deleted", data: listFavs });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
