import { useData } from "../../../context/dataContext/dataContext";
import { DataContextProps } from "../../../context/dataContext/dataContext.types";

const QuestionContainer = () => {
  const {
    state: { currentQuiz },
  } = useData() as DataContextProps;

  return (
    <div>
      {currentQuiz?.questions.map(
        ({ question, options, _id, selectedOptionID }) => (
          <div
            className="question-container bg-secondary rounded-2xl my-4 md:my-8 p-4 md:p-8 w-4/5 md:w-2/5 mx-auto"
            key={_id}
          >
            {" "}
            <h3 className="text-lg md:text-xl mb-2">{question}</h3>{" "}
            <div className="flex flex-col text-base">
              {options.map(({ _id: optionID, text, isRight }) => (
                <button
                  key={optionID}
                  className="bg-primary my-1 md:my-2 rounded-lg py-2 rules-card-container px-2"
                  style={{
                    backgroundColor:
                      selectedOptionID === optionID
                        ? isRight
                          ? "#52a552"
                          : "#b91c1c"
                        : isRight
                        ? "#52a552"
                        : "",
                  }}
                >
                  {text}
                </button>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default QuestionContainer;
