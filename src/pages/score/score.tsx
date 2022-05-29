import React from "react";
import { useLocation } from "react-router-dom";
import { locationFinalState } from "../../types/types";
import styles from "./style.module.scss";

export const ScorePage = () => {
  const { state } = useLocation();

  const { nickname = "", score = 0 } = state as locationFinalState;

  return (
    <div className={styles.container}>
      <h2>
        Congratulations, <span className={styles.nickname}>{nickname}</span>!
      </h2>
      <h2>Your score:</h2>
      <h2 className={styles.blue}>{score} points</h2>
    </div>
  );
};
