import { apiResponder } from "./responder";
import { createMockResponse } from "../../test/helpers";

describe("responder", () => {
  const responseMock = createMockResponse();

  describe("success()", () => {
    describe("with no data", () => {
      it("ends the response", () => {
        apiResponder(responseMock).success();
        expect(responseMock.end).toBeCalled();
      });
    });

    describe("with data", () => {
      it("responds with the data as json", () => {
        const data = { the: "data" };
        apiResponder(responseMock).success(data);
        expect(responseMock.json).toBeCalledWith(data);
      });
    });

    describe("error()", () => {
      const errorMessage = "the error";
      const errorArg = new Error(errorMessage);

      it("ends the response with the error", () => {
        apiResponder(responseMock).error(errorArg);
        expect(responseMock.end).toHaveBeenCalledWith(
          expect.stringContaining(errorMessage)
        );
      });

      describe("with a status code", () => {
        const expectedStatusCode = 42;

        it("adds the status code to the response", () => {
          apiResponder(responseMock).error(errorArg, expectedStatusCode);
          expect(responseMock.status).toHaveBeenCalledWith(expectedStatusCode);
        });
      });
    });
  });
});
