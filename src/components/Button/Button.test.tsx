import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button", () => {
  it("should render correct button name", () => {
    render(<Button>test</Button>);
    expect(screen.getByRole("button", { name: /test/i })).toBeInTheDocument();
  });
  it("should correct button classes", () => {
    render(<Button className="helloWorld">test</Button>);
    expect(screen.getByRole("button", { name: /test/i })).toHaveClass(
      "helloWorld"
    );
  });
  it("should call onClickHandler when clicked", () => {
    const onClickHandler = jest.fn();
    render(<Button onClickHandler={onClickHandler}>test</Button>);
    const button = screen.getByRole("button", { name: /test/i });
    userEvent.dblClick(button);
    expect(onClickHandler).toHaveBeenCalledTimes(2);
  });
  it("should render correct button attributes", () => {
    render(
      <Button otherProps={{ role: "switch", "data-is-completed": "true" }}>
        test
      </Button>
    );

    const btn = screen.getByText(/test/i);
    expect(btn).toHaveAttribute("role", "switch");
    expect(btn).toHaveAttribute("data-is-completed", "true");
  });
});
