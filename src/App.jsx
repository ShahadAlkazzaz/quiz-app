import React from "react";
import { Routes, Route } from "react-router-dom";
import StartPage from "./components/StartPage";
import QuizPage from "./components/QuizPage";
import ResultPage from "./components/ResultPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
};

export default App;
