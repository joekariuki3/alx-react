import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("renders Notification component that has a paragraph 'Here is the list of notifications' text ", () => {
    render(<App />);
    const notificationParagraphElement = screen.getByText(
      "Here is the list of notifications"
    );
    expect(notificationParagraphElement).toBeInTheDocument();
  });

  it("renders Header component that has a header element with class App-header", () => {
    render(<App />);
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveClass("App-header");
  });

  it("renders Login component with a paragraph 'Login to access the full dashboard' text ", () => {
    render(<App />);
    const LoginParagraphElement = screen.getByText(
      "Login to access the full dashboard"
    );
    expect(LoginParagraphElement).toBeInTheDocument();
  });

  it("renders Footer component with a footer element that has a class App-footer", () => {
    render(<App />);

    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveClass("App-footer");
  });
});
