import { Request, Response, NextFunction } from "express";
import {
  createUser,
  deleteUser,
  getAllUserById,
  getAllUsers,
  updateUserById,
} from "./user.service";

export const findAllUsersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await getAllUsers();
    res.status(200).json({ message: "users found", data: users });
  } catch (error) {
    next(error);
  }
};

export const findUserByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const user = await getAllUserById(id);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    res.status(200).json({ message: "user found", data: user });
  } catch (error) {
    next(error);
  }
};

export const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json({ message: "created user", data: user });
  } catch (error) {
    next(error);
  }
};

export const updateUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const user = await updateUserById(id, req.body);
    res.status(200).json({ message: "updated user", data: user });
  } catch (error) {
    next(error);
  }
};

export const deleteUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const user = await deleteUser(id);
    res.status(200).json({ message: "deleted user", data: user });
  } catch (error) {
    next(error);
  }
};
