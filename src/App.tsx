import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login/Login";
import Quiz from "./pages/Quiz/Quiz";
import Result from "./pages/Result/Result";
import PrivateRoute from "./utils/PrivateRoute";
import Signup from "./pages/Auth/Signup/Signup";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <PrivateRoute path="/:quizID" element={<Quiz />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
