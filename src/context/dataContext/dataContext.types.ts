import React from "react";
import { Action, Quiz, State } from "../../reducer/dataReducer.types";

export type DataContextProviderProps = {
  children: React.ReactNode;
};

export type DataContextProps = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export type FetchAllQuizzes = {
  success: string;
  allQuizzes: Quiz[];
};
