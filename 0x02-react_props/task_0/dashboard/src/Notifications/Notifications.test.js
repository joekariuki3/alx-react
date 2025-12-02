import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Notifications from "./Notifications";

describe("Notifications", () => {
  it("Notification renders without crashing", () => {
    render(<Notifications />);
  });

  it("Notifications renders with three list items", () => {
    render(<Notifications displayDrawer={true} />);
    const listElement = screen.getByRole("list");
    expect(listElement.children.length).toBe(3);
  });

  it("Notification renders with a text 'Here is the list of notifications'", () => {
    render(<Notifications displayDrawer={true} />);
    const paragraphElement = screen.getByText(
      "Here is the list of notifications"
    );
    expect(paragraphElement).toBeInTheDocument();
  });

  it("renders NotificationItem component", () => {
    render(<Notifications displayDrawer={true} />);
    const listElement = screen.getByRole("list");
    expect(listElement.children.length).toBe(3);
  });

  it("renders NotificationItem component and first child shows correct text content", () => {
    render(<Notifications displayDrawer={true} />);
    const firstListItemElement = screen.getByText("New course available");
    expect(firstListItemElement).toBeInTheDocument();
  });

  it("renders a div with class menuItem when property displayDrawer is false", () => {
    render(<Notifications />); // displayDrawer prop is false by default
    const menuElement = screen.getByText("Your notifications");
    expect(menuElement).toBeInTheDocument();
    expect(menuElement.parentElement).toHaveClass("menuItem");
  });

  it("does not renders a div with class Notifications when property displayDrawer is false", () => {
    render(<Notifications />); // displayDrawer prop is false by default
    const menuElement = screen.queryByText("Here is the list of notifications");
    expect(menuElement).toBe(null);
  });

  it("renders a div with class menuItem when property displayDrawer is true", () => {
    render(<Notifications displayDrawer={true} />);
    const menuElement = screen.getByText("Your notifications");
    expect(menuElement).toBeInTheDocument();
    expect(menuElement.parentElement).toHaveClass("menuItem");
  });

  it("renders a div with class Notifications when property displayDrawer is true", () => {
    render(<Notifications displayDrawer={true} />);
    const menuElement = screen.queryByText("Here is the list of notifications");
    expect(menuElement).toBeInTheDocument();
    expect(menuElement.parentElement).toHaveClass("Notifications");
  });
});
