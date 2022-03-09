interface Props {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const BtnLocation: React.FC<Props> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
