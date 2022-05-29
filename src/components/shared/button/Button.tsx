import React, { ButtonHTMLAttributes, FC } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  // children: JSX.Element | JSX.Element[];
}

export const Button: FC<Props> = (props) => {
  return <button {...props}>{props.children}</button>;
};
