import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/shared/button/Button";
import { Input } from "../../components/shared/input";
import styles from "./style.module.scss";

export const StartPage = () => {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState("");

  return (
    <div className={styles.container}>
      <h1>Wordcloud game</h1>
      <Input
        placeholder="Enter your nickname here..."
        value={nickname}
        onChange={(v) => setNickname(v.target.value)}
      />
      <Button onClick={() => navigate("/game", { state: { nickname } })}>
        play
      </Button>
    </div>
  );
};
