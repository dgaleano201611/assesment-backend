import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

export type DecodedToken = {
  id: string;
};

const prisma = new PrismaClient();

export const login = (email: string) => {
  return prisma.user.findUnique({
    where: {
      email: email,
    },
  });
};

export const singToken = (payload: any) => {
  const token = jwt.sign(payload, "juanDiego", { expiresIn: 60 * 60 * 24 });

  return token;
};

export const veryfyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, "juanDiego");

    return decoded;
  } catch (error) {
    return false;
  }
};
