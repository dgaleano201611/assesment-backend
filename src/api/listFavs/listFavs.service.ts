import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllListFavs = () => {
  return prisma.listFavs.findMany({
    select: {
      name: true,
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

export const createListFavs = (input: any) => {
  return prisma.listFavs.create({
    data: {
      name: input.name,
    },
  });
};

export const findListFavsById = (id: string) => {
  return prisma.listFavs.findUnique({
    where: {
      id: id,
    },
  });
};
export const updateListFavs = (id: string, input: any) => {
  return prisma.listFavs.update({
    where: {
      id: id,
    },
    data: {
      name: input.name,
    },
  });
};

export const deleteListFavsById = (id: string) => {
  return prisma.listFavs.findUnique({
    where: {
      id: id,
    },
  });
};