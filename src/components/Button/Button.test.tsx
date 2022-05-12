import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button", () => {
  it("should render correct button name", () => {
    render(<Button name="test" />);
    expect(screen.getByRole("button", { name: "test" })).toBeInTheDocument();
  });
  it("should correct button classes", () => {
    render(<Button name="test" classNames="helloWorld" />);
    expect(screen.getByRole("button", { name: "test" })).toHaveClass(
      "helloWorld"
    );
  });
  it("should call onClickHandler when clicked", () => {
    const onClickHandler = jest.fn();
    render(<Button name="test" onClickHandler={onClickHandler} />);
    const button = screen.getByRole("button", { name: "test" });
    userEvent.dblClick(button);
    expect(onClickHandler).toHaveBeenCalledTimes(2);
  });
});
