import { register } from "../user";
import { verifyPassword } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    const username = "username";
    const password = "pass";
    const result = register(username, password);
    await expect(result).resolves.toEqual({ name: "ABC" });
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    const username = "username";
    const password = "pass";
    verifyPassword.mockReturnValue(false);
    const result = register(username, password);
    await expect(result).rejects.toEqual(
      new Error("wrong username or password")
    );
  });
});
