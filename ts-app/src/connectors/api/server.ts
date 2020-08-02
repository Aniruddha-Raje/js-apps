import express, { Application } from "express";
import { routes } from "./routes";

export const createServer = (): Application => {
  const app: Application = express();

  routes(app);
  return app;
};
