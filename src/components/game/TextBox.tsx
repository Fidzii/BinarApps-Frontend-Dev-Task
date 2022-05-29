import React, { FC, HTMLAttributes } from "react";
import { TextBoxState } from "../../types/types";
import styles from "./style.module.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {
  state?: TextBoxState;
  value: string;
}

export const TextBox: FC<Props> = ({ state, onClick, value }) => {
  return (
    <div
      className={`${styles.box} 
    ${state ? styles[state] : ""}
    
    `}
      onClick={onClick}
    >
      <span>{value}</span>
    </div>
  );
};
