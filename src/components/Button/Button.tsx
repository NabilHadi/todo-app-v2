import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode | ReactNode[];
  onClickHandler?: React.MouseEventHandler;
  className?: string;
  otherProps?: React.ComponentPropsWithoutRef<"button"> &
    Record<string, string>;
};

function Button({
  children,
  className,
  onClickHandler,
  otherProps,
}: ButtonProps) {
  return (
    <button
      className={"clickable " + className}
      onClick={onClickHandler}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
