import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import { createUser } from "../../api/user/user.service";
import { login } from "../auth.service";
import { singToken } from "../auth.service";

export const singupController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email } = req.body;
    const encPassword = await bcrypt.hash(req.body.password, 10);
    const user = await createUser({ ...req.body, password: encPassword });

    //config jwt

    const token = singToken({ id: user.id });

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

    const token = singToken({ id: id });
    res
      .status(200)
      .json({ message: "user LOGIN", data: { name, email }, token });
  } catch (error) {
    next(error);
  }
};
