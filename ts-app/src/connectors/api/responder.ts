import { Response } from "express";
import util from "util";
import { ResponderFunc } from "adapters/controllers/models/responder";

export const apiResponder: ResponderFunc = (res: Response) => ({
  success: (data?: any) => (data ? res.json(data) : res.end()),
  error: (error: Error, statusCode = 400) =>
    res
      .status(statusCode)
      .end(`Failure with status: ${util.inspect(error.message)}`)
});
