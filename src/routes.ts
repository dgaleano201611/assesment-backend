import { Application } from "express";

import healthcheck from "./api/healthcheck";
import users from "./api/user";
import favs from "./api/favs";
import listFavs from "./api/listFavs";
import authLocal from "./auth/local";

const routes = (app: Application): void => {
  app.use("/api/healthcheck", healthcheck);
  app.use("/api/users", users);
  app.use("/api/favs", favs);
  app.use("/api/list-favs", listFavs);
  app.use("/auth/local", authLocal);
};
export default routes;
