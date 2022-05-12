import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode | ReactNode[];
  onClickHandler?: React.MouseEventHandler;
  classNames?: string;
};

function Button({ children, classNames, onClickHandler }: ButtonProps) {
  return (
    <button className={classNames} onClick={onClickHandler}>
      {children}
    </button>
  );
}

export default Button;
