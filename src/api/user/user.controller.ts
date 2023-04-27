import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import {
  createUser,
  deleteUser,
  getAllUserById,
  getAllUsers,
  login,
  updateUserById,
} from "./user.service";
import jwt from "jsonwebtoken";

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
    const { name, email } = req.body;
    const encPassword = await bcrypt.hash(req.body.password, 10);
    const user = await createUser({ ...req.body, password: encPassword });

    //config jwt
    const token = jwt.sign({ id: user.id }, "juanDiego", {
      expiresIn: 60 * 60 * 1,
    });

    res
      .status(201)
      .json({ message: "created user", data: { name, email }, token });
  } catch (error) {
    next(error);
  }
};

export const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const user = await login(email);

    if (!user) {
      throw new Error("email or password invalid");
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw new Error("email or password invalid");
    }

    const { id, name } = user;

    const token = jwt.sign({ id: id }, "juanDiego", {
      expiresIn: 60 * 60 * 1,
    });
    res
      .status(200)
      .json({ message: "user LOGIN", data: { name, email }, token });
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
