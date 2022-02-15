import { useEffect } from "react";
import { useData } from "../../context/dataContext/dataContext";
import QuizCard from "./components/QuizCard";
import "./Home.css";

const Home = () => {
  const data = useData();
  const quizData = data?.state.quizData;
  const dispatch = data?.dispatch;

  useEffect(() => dispatch && dispatch({ type: "RESET_QUIZ" }), [dispatch]);

  return (
    <div className="view-container pt-2 flex flex-wrap">
      {quizData?.map(({ _id, quizName, description, image }) => (
        <QuizCard
          id={_id}
          name={quizName}
          description={description}
          imageURL={image}
        />
      ))}
    </div>
  );
};

export default Home;
