import { Request, Response, NextFunction } from "express";
import { veryfyToken } from "../auth/auth.service";
import { AuthUser } from "../auth/auth.types";

export const auth = async (
  req: Request & AuthUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error("tu sesion expiró");
    }

    const [_, token] = authorization.split(" ");
    if (!token) {
      throw new Error("tu sesion expiró");
    }

    const { id } = veryfyToken(token) as { id: string };
    req.user = id;
    
    next();
  } catch (error: any) {
    res.status(401).json({ message: "Token invalido" });
  }
};
