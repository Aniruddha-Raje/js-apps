import { Response } from "express";

export const asMock = (theMock: (...args: any[]) => any) =>
  theMock as jest.Mock;

export const createMockResponse = (options = {}) => {
  const res: Partial<Response> = {
    send: jest.fn(),
    end: jest.fn(),
    json: jest.fn(),
    ...options
  };
  res.status = jest.fn().mockReturnValue(res);
  return res as Response;
};

export const createMockRequest = (body?) =>
  ({
    body: { ...body }
  } as Request);
