import { Request, Response } from "express";
import { apiResponder } from "./responder";

export const handlers = {
  subscriptions: (res: Response) =>
    console.log("this will be the subscriptions controller")
  // subscriptionsController(apiResponder(res)).listSubscriptions(),
};
