import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Input = {
  name: string;
  title: string;
  description: string;
  link: string;
};

export const getAllFavs = () => {
  return prisma.favs.findMany();
};

export const getFavById = (id: string) => {
  return prisma.favs.findUnique({
    where: {
      id: id,
    },
  });
};

export const createFav = (input: Input) => {
  const { name, title, description, link } = input;
  return prisma.favs.create({
    data: {
      name,
      title,
      description,
      link,
    },
  });
};

export const updateFav = (id: string, input: Input) => {
  const { name, title, description, link } = input;
  return prisma.favs.update({
    where: {
      id: id,
    },
    data: {
      name,
      title,
      description,
      link,
    },
  });
};

export const deleteFav = (id: string) => {
  return prisma.favs.delete({
    where: {
      id: id,
    },
  });
};
