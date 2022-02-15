import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { dataReducer, initialState } from "../../reducer/dataReducer";
import {
  DataContextProps,
  DataContextProviderProps,
  FetchAllQuizzes,
} from "./dataContext.types";

const DataContext = createContext<DataContextProps | null>(null);

const DataContextProvider = ({ children }: DataContextProviderProps) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    (async () => {
      const quizzes = await axios.get<FetchAllQuizzes>(
        "https://footquiz-api.herokuapp.com/quiz"
      );
      dispatch({ type: "SET_QUIZ_DATA", payload: quizzes.data.allQuizzes });
    })();
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};

export default DataContextProvider;
