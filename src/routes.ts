import { Application } from "express";

import healthcheck from "./api/healthcheck";
import users from "./api/user";
import favs from "./api/favs";

const routes = (app: Application): void => {
  app.use("/api/healthcheck", healthcheck);
  app.use("/api/users", users);
  app.use("/api/favs", favs);
};
export default routes;
