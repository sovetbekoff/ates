import { FC } from "react";
import { ButtonHTMLAttributes } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  className?: string;
  bg?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<IButton> = ({ children, className, bg, onClick }: IButton) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bg }}
      className={`button ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
