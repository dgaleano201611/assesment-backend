import { PrismaClient, User } from "@prisma/client";

interface Input {
  name: string;
  email: string;
  password: string;
}

const prisma = new PrismaClient();

export const getAllUsers = () => {
  return prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      favs: {
        select: {
          name: true,
          title: true,
          link: true,
        },
      },
    },
  });
};

export const getAllUserById = (id: string) => {
  return prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      favs: {
        select: {
          name: true,
          title: true,
          link: true,
        },
      },
    },
  });
};

export const createUser = (input: Input) => {
  const { name, email, password } = input;
  return prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
};

export const updateUserById = (id: string, input: Input) => {
  const { name, email, password } = input;
  return prisma.user.update({
    where: {
      id: id,
    },
    data: {
      name,
      email,
      password,
    },
  });
};

export const deleteUser = (id: string) => {
  return prisma.user.delete({
    where: {
      id: id,
    },
  });
};

export const login = (email: string) => {
  return prisma.user.findUnique({
    where: {
      email: email,
    },
  });
};
