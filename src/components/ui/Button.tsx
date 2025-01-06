import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: React.ReactNode;
  extraClassNames?: React.ComponentProps<"div">["className"];
}
export function Button(props: ButtonProps) {
  const { children, extraClassNames = "", ...remainingProps } = props;
  return (
    <button className={`btn ${extraClassNames}`} {...remainingProps}>
      {children}
    </button>
  );
}
