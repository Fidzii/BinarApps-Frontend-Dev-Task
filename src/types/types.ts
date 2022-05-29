export enum TextBoxState {
  SELECTED = "selected",
  GOOD = "good",
  BAD = "bad",
}

export interface gameDataSet {
  question: string;
  all_words: string[];
  good_words: string[];
}

export interface gameDataObject {
  question: string;
  all_words: gameWordObject[];
  good_words: string[];
}

interface gameWordObject {
  value: string;
  state: TextBoxState | undefined;
  isGood: boolean;
}

export interface locationFinalState {
  nickname: string;
  score: number;
}
