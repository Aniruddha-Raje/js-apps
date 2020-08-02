import { createServer } from "./server";
import { routes } from "./routes";
import express from "express";
import { asMock } from "../../test/helpers";

jest.mock("express");
jest.mock("./routes");

asMock(express).mockImplementation(() => ({
  use: jest.fn()
}));

describe("createServer", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("configures the routes", () => {
    createServer();
    expect(routes).toHaveBeenCalled();
  });
});
