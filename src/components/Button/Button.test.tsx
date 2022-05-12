import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button", () => {
  it("should render correct button name", () => {
    render(<Button>test</Button>);
    expect(screen.getByRole("button", { name: "test" })).toBeInTheDocument();
  });
  it("should correct button classes", () => {
    render(<Button classNames="helloWorld">test</Button>);
    expect(screen.getByRole("button", { name: "test" })).toHaveClass(
      "helloWorld"
    );
  });
  it("should call onClickHandler when clicked", () => {
    const onClickHandler = jest.fn();
    render(<Button onClickHandler={onClickHandler}>test</Button>);
    const button = screen.getByRole("button", { name: "test" });
    userEvent.dblClick(button);
    expect(onClickHandler).toHaveBeenCalledTimes(2);
  });
});
