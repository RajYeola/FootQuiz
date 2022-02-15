import { useParams } from "react-router";
import { useData } from "../../../context/dataContext/dataContext";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Quiz } from "../../../reducer/dataReducer.types";
import { DataContextProps } from "../../../context/dataContext/dataContext.types";

const QuestionCard = () => {
  const { quizID } = useParams();
  const {
    state: { score, quizData, isOptionClickEnabled, currentQuestionNumber },
    dispatch,
  } = useData() as DataContextProps;
  let currentQuiz = quizData?.find(({ _id }) => _id === quizID);
  const currentQuestion = currentQuiz?.questions[currentQuestionNumber - 1];
  const [selectedOptionID, setSelectedOptionID] = useState<string>("");

  useEffect(() => {
    dispatch &&
      dispatch({ type: "SET_CURRENT_QUIZ", payload: currentQuiz as Quiz });
  }, [currentQuiz, dispatch]);

  const navigate = useNavigate();

  return (
    <div className="view-container">
      <div className="question-card-container bg-secondary rounded-2xl w-4/5 md:w-2/5 mx-auto p-4 md:p-8 mt-24 md:mt-40">
        <h1 className="text-2xl md:text-3xl font-bold color-secondary text-center">
          {currentQuiz?.quizName}
        </h1>
        <div className="flex justify-between  mt-2 mb-4 md:my-4">
          <p>Question: {currentQuestionNumber}</p>
          <p>Score: {score}</p>
        </div>

        <div key={currentQuestion?._id}>
          <h3 className="text-lg md:text-xl mb-2">
            {currentQuestion?.question}
          </h3>
          <div className="flex flex-col text-base">
            {currentQuestion?.options.map(
              ({ _id: optionID, text, isRight }) => (
                <button
                  className="bg-primary my-1 md:my-2 rounded-lg py-2 rules-card-container px-2"
                  key={optionID}
                  disabled={!isOptionClickEnabled}
                  onClick={() => {
                    setSelectedOptionID(optionID);
                    dispatch && dispatch({ type: "DISABLE_CLICK" });
                    dispatch &&
                      dispatch({
                        type: "SELECTED_OPTION_ID",
                        payload: {
                          selectedOptionID: optionID,
                          currentQuestionID: currentQuestion._id,
                        },
                      });
                    setTimeout(() => {
                      dispatch &&
                        dispatch({
                          type: "UPDATE_SCORE",
                          payload: isRight
                            ? currentQuestion?.points
                            : currentQuestion.negativePoints,
                        });
                      currentQuestionNumber === currentQuiz?.questions.length
                        ? navigate("/result")
                        : dispatch &&
                          dispatch({ type: "INCREMENT_QUESTION_NUMBER" });
                      dispatch && dispatch({ type: "ENABLE_CLICK" });
                    }, 2000);
                  }}
                  style={{
                    backgroundColor: `${
                      !isOptionClickEnabled
                        ? isRight
                          ? "#52a552"
                          : selectedOptionID === optionID
                          ? isRight
                            ? "#52a552"
                            : "#b91c1c"
                          : ""
                        : ""
                    }`,
                  }}
                >
                  {text}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
