import { ReactNode } from "react";
import s from "./button.module.scss";
import clsx from "clsx";

type ButtonType = "fill" | "empty";

interface ButtonProps {
  children: ReactNode;
  type: ButtonType;
}

const Button = ({ children, type }: ButtonProps) => {
  return <button className={clsx(s.button, { [s.fill]: type === "fill", [s.empty]: type === "empty" })}>{children}</button>;
};

export default Button;
