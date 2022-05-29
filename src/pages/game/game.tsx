import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TextBox } from "../../components/game";
import { Button } from "../../components/shared/button/Button";
import { getData } from "../../services/api";
import { gameDataObject, gameDataSet, TextBoxState } from "../../types/types";
import { getRandomNumber, shuffleArray } from "../../utils/utils";
import styles from "./style.module.scss";

export const GamePage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const fetchedData = useRef<gameDataSet[] | null>(null);
  const [isLoading, setLoading] = useState(true);

  const [gameData, setGameData] = useState<gameDataObject | null>(null);

  const [isFinished, setFinished] = useState(false);
  const gamePoints = useRef(0);

  useEffect(() => {
    (async () => {
      try {
        const output = await getData();
        fetchedData.current = output;
        prepareGameData(output);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log("Something went wrong 🤪", error);
      }
    })();
  }, []);

  function prepareGameData(fetchedData: gameDataSet[]) {
    if (!fetchedData || fetchedData.length < 1) return [];
    const questionId = getRandomNumber(0, fetchedData.length - 1);
    const selectedQuestion = fetchedData[questionId];

    const processedWords = selectedQuestion.all_words.map((word) => ({
      value: word,
      state: undefined,
      isGood: selectedQuestion.good_words.includes(word),
    }));

    setGameData({
      ...selectedQuestion,
      all_words: shuffleArray(processedWords),
    });
  }

  return (
    <>
      {isLoading || !gameData ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>{gameData?.question}</h2>
          <div className={styles.boxContainer}>
            {gameData?.all_words.map((v, index) => (
              <TextBox
                {...v}
                key={v.value}
                onClick={() => {
                  const currentWordState = gameData.all_words[index].state;
                  const arrayCopy = { ...gameData };
                  arrayCopy.all_words[index].state =
                    currentWordState === TextBoxState.BAD ||
                    currentWordState === TextBoxState.GOOD
                      ? currentWordState
                      : currentWordState === undefined
                      ? TextBoxState.SELECTED
                      : undefined;

                  setGameData({ ...arrayCopy } as gameDataObject);
                }}
              />
            ))}
          </div>
          {isFinished ? (
            <Button
              onClick={() =>
                navigate("/score", {
                  state: { ...(state as object), score: gamePoints.current },
                })
              }
            >
              finish game
            </Button>
          ) : (
            <Button
              onClick={() => {
                const all_words = gameData.all_words.map((obj) => {
                  const isSelected = obj.state === TextBoxState.SELECTED;

                  if (isSelected) {
                    obj.isGood
                      ? (gamePoints.current += 2)
                      : gamePoints.current--;
                    return {
                      ...obj,
                      state: obj.isGood ? TextBoxState.GOOD : TextBoxState.BAD,
                    };
                  }
                  obj.isGood && gamePoints.current--;
                  return obj;
                });

                setGameData({ ...gameData, all_words });
                setFinished(true);
              }}
            >
              check answers
            </Button>
          )}
        </>
      )}
    </>
  );
};
