import React from "react";
import { IoInformationCircleSharp } from "react-icons/io5";
import { useParams } from "react-router";
import { useData } from "../../../context/dataContext/dataContext";

type RulesCardProps = {
  setStartQuiz: React.Dispatch<React.SetStateAction<boolean>>;
};

const RulesCard = ({ setStartQuiz }: RulesCardProps) => {
  const { quizID } = useParams();
  const data = useData();
  const currentQuiz = data?.state.quizData?.find(({ _id }) => _id === quizID);
  const quizName = currentQuiz?.quizName;

  return (
    <div className="view-container">
      <div className="rules-card-container rounded-2xl bg-secondary mx-auto flex flex-col w-4/5 md:w-2/6 p-4 md:p-8 mt-24 md:mt-40">
        <h2 className="text-2xl md:text-3xl pb-2 font-bold text-center color-secondary">
          {quizName}
        </h2>
        <div>
          <div className="flex py-1 md:py-2">
            <div>
              <IoInformationCircleSharp className="mr-2 md:text-xl" />
            </div>
            <span>The quiz contains a total of 5 questions</span>
          </div>
          <div className="flex py-1 md:py-2">
            <div>
              <IoInformationCircleSharp className="mr-2 md:text-xl" />
            </div>
            <span>
              10 points for every{" "}
              <strong style={{ color: "#52a552" }} className="uppercase">
                correct answer
              </strong>{" "}
              and 5 negative points for every{" "}
              <strong style={{ color: "#b91c1c" }} className="uppercase">
                wrong answer
              </strong>
            </span>
          </div>
          <div className="flex py-1 md:py-2">
            <div>
              <IoInformationCircleSharp className="mr-2 md:text-xl" />
            </div>
            <span>You cannot skip any question!</span>
          </div>
        </div>
        <button
          onClick={() => setStartQuiz(true)}
          className="rounded-md start-btn  py-1 w-full uppercase tracking-wider mt-2 md:mt-4"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default RulesCard;
