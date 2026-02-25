import { login } from "./login";

const mockAlert = jest.fn();

jest.mock("./login", () => ({
  login: () => mockAlert("Welcome to the login service!"),
}));
describe("login", () => {
  it("Send a message", () => {
    login("test@example.com", "password123");
    expect(mockAlert).toHaveBeenCalledWith('Welcome to the login service, test@example.com, your password is password123');
  })
});

