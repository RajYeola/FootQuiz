import { Link } from "react-router-dom";
import { QuizCardProps } from "./QuizCard.types";

const QuizCard = ({ ...props }: QuizCardProps) => {
  const { id, name, description, imageURL } = props;

  return (
    <div className="question-card bg-secondary m-4" key={id}>
      <img src={imageURL} alt={name} className="card-image object-cover" />
      <h2 className="text-xl font-bold mt-4 ml-4 mb-2">{name}</h2>
      <p className="ml-4 pb-4 color-secondary">{description}</p>
      <Link to={`/${id}`}>
        <button className="play-btn px-2 py-1 mb-4 ml-4 rounded-md">
          Play
        </button>
      </Link>
    </div>
  );
};

export default QuizCard;
