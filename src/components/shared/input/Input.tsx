import React, { FC, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<Props> = (props) => {
  return <input type="text" {...props} />;
};
