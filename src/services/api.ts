import { gameDataSet } from "../types/types";

export const getData = (): Promise<gameDataSet[]> => {
  return fetch("data.json", {
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json());
};
