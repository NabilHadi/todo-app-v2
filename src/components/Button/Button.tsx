type ButtonProps = {
  name: string;
  onClickHandler?: React.MouseEventHandler;
  classNames?: string;
};

function Button({ name, classNames, onClickHandler }: ButtonProps) {
  return (
    <button className={classNames} onClick={onClickHandler}>
      {name}
    </button>
  );
}

export default Button;
