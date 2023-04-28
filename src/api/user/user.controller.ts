import { Request, Response, NextFunction } from "express";
import {
  deleteUser,
  getAllUsers,
  getUserById,
  updateUserById,
} from "./user.service";
import { AuthUser } from "../../auth/auth.types";
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
    const user = await getUserById(id);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    res.status(200).json({ message: "user found", data: user });
  } catch (error) {
    next(error);
  }
};

export const updateUserController = async (
  req: AuthUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.user ? req.user : "";
    const user = await getUserById(id);

    const userUpdated = await updateUserById(id, {
      ...req.body,
      password: user?.password,
    });

    res.status(200).json({ message: "updated user", data: userUpdated });
  } catch (error: any) {
    res.status(500).json({ message: "pailas" });
  }
};

export const deleteUserController = async (
  req: AuthUser & Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    console.log("id es: ", id);

    const user = await deleteUser(id);
    res.status(200).json({ message: "deleted user", data: user });
  } catch (error) {
    next(error);
  }
};
