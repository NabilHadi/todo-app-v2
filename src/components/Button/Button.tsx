import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode | ReactNode[];
  onClickHandler?: React.MouseEventHandler;
  className?: string;
};

function Button({ children, className, onClickHandler }: ButtonProps) {
  return (
    <button className={className} onClick={onClickHandler}>
      {children}
    </button>
  );
}

export default Button;
