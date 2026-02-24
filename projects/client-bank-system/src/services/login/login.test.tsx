import { login } from "./login";

const mockAlert = jest.fn();

jest.mock("./login", () => ({
  login: () => mockAlert("Welcome to the login service!"),
}));
describe("login", () => {
  it("Send a message", () => {
    login();
    expect(mockAlert).toHaveBeenCalledWith('Welcome to the login service!');
  })
});

