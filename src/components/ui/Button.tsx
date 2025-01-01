import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: React.ReactNode;
  extraClassNames?: string;
}
export function Button(props: ButtonProps) {
  const { children, extraClassNames = "" } = props;
  return (
    <button className={`btn ${extraClassNames}`} {...props}>
      {children}
    </button>
  );
}
