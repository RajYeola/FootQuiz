import { Action, Quiz, State } from "./dataReducer.types";

export const initialState: State = {
  quizData: null,
  currentQuiz: null,
  score: 0,
  currentQuestionNumber: 1,
  isOptionClickEnabled: true,
};

export const dataReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_QUIZ_DATA":
      return { ...state, quizData: action.payload };

    case "SET_CURRENT_QUIZ":
      return { ...state, currentQuiz: action.payload };

    case "UPDATE_SCORE":
      return { ...state, score: state.score + action.payload };

    case "SELECTED_OPTION_ID":
      const currentQuizQuestions = state.currentQuiz?.questions.map(
        (question) =>
          question._id === action.payload.currentQuestionID
            ? { ...question, selectedOptionID: action.payload.selectedOptionID }
            : { ...question }
      );

      return {
        ...state,
        currentQuiz: {
          ...state.currentQuiz,
          questions: currentQuizQuestions,
        } as Quiz,
      };

    case "RESET_QUIZ":
      return { ...state, score: 0, currentQuestionNumber: 1 };

    case "INCREMENT_QUESTION_NUMBER":
      return {
        ...state,
        currentQuestionNumber: state.currentQuestionNumber + 1,
      };

    case "ENABLE_CLICK":
      return { ...state, isOptionClickEnabled: true };

    case "DISABLE_CLICK":
      return { ...state, isOptionClickEnabled: false };

    default:
      return state;
  }
};
