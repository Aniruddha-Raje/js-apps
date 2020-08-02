import { Application } from "express";
import { handlers } from "./handlers";

export const routes = (app: Application) => {
  app.get("/", handlers.subscriptions);
};
