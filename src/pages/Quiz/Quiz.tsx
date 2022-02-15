import { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import RulesCard from "./components/RulesCard";
import "./Quiz.css";

const Quiz = () => {
  const [startQuiz, setStartQuiz] = useState<boolean>(false);

  return (
    <div>
      {!startQuiz && <RulesCard setStartQuiz={setStartQuiz} />}
      {startQuiz && <QuestionCard />}
    </div>
  );
};

export default Quiz;
