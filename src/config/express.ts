import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";

const configExpress = (app: Application): void => {
  app.use(express.json()); //poder tener body en peticiones post y put
  app.use(morgan("dev"));
  app.use(cors());
};
export default configExpress;
