import render from "react-native-web/dist/cjs/exports/render";
import Home from "../screens/Home";

describe("Home screen", () => {
  it("renders", () => {
    render(<Home />);
  });

  test("should render logout button", () => {
    const button = screen.getByTestId("home-logout-btn");
    it("renders", () => {
      render(button);
    });

    test("should render username", () => {
      const text = screen.getByTestId("welcome-home-user-text");
      expect(text).toHaveTextContent("username");
    });
  });
});
