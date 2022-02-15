type Option = {
  _id: string;
  text: string;
  isRight: boolean;
};

type Question = {
  _id: string;
  question: string;
  points: number;
  negativePoints: number;
  options: Option[];
  selectedOptionID?: string;
};

export type Quiz = {
  _id: string;
  quizName: string;
  playTime: number;
  totalQuestions: number;
  totalPoints: number;
  description: string;
  image: string;
  questions: Question[];
};

export type Action =
  | { type: "SET_QUIZ_DATA"; payload: Quiz[] }
  | { type: "SET_CURRENT_QUIZ"; payload: Quiz }
  | { type: "UPDATE_SCORE"; payload: number }
  | {
      type: "SELECTED_OPTION_ID";
      payload: { selectedOptionID: string; currentQuestionID: string };
    }
  | { type: "RESET_QUIZ" }
  | { type: "INCREMENT_QUESTION_NUMBER" }
  | { type: "ENABLE_CLICK" }
  | { type: "DISABLE_CLICK" };

export type State = {
  quizData: null | Quiz[];
  score: number;
  currentQuestionNumber: number;
  isOptionClickEnabled: boolean;
  currentQuiz: null | Quiz;
};

export type reducerProps = {
  state: State;
  action: Action;
};
