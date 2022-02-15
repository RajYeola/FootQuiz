import "./Result.css";
import QuestionContainer from "./components/QuestionContainer";
import { useData } from "../../context/dataContext/dataContext";
import { DataContextProps } from "../../context/dataContext/dataContext.types";

const Result = () => {
  const {
    state: { currentQuiz, score },
  } = useData() as DataContextProps;

  return (
    <div>
      <div className="view-container pt-6 md:pt-10">
        <div className="w-4/5 md:w-2/5 mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold color-secondary text-center">
            {currentQuiz?.quizName}
          </h1>
          <h2 className="text-base md:text-lg text-center pt-2 md:pt-4">
            Final Score: {score}/50
          </h2>
        </div>
        <QuestionContainer />
      </div>
    </div>
  );
};

export default Result;
