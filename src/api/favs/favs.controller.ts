import { Request, Response, NextFunction } from "express";
import {
  createFav,
  deleteFav,
  getAllFavs,
  getFavById,
  updateFav,
} from "./favs.service";

export const findAllfavsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const favs = await getAllFavs();
    res.status(200).json({ message: "favs found", data: favs });
  } catch (error) {
    next(error);
  }
};

export const findFavByidController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const fav = await getFavById(id);
    res.status(200).json({ message: "fav found", data: fav });
  } catch (error) {
    next(error);
  }
};

export const createFavController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const fav = await createFav(req.body);
    res.status(201).json({ message: "created fav", data: fav });
  } catch (error) {
    next(error);
  }
};

export const updateFavByidController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const fav = await updateFav(id, req.body);
    res.status(200).json({ message: "fav updated", data: fav });
  } catch (error) {
    next(error);
  }
};

export const deleteFavController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const fav = await deleteFav(id);
    res.status(200).json({ message: "deleted fav", data: fav });
  } catch (error) {
    next(error);
  }
};
