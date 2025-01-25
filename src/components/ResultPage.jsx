import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { score, totalQuestions } = location.state || { score: 0, totalQuestions: 0 };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-dark px-4 text-center">
      <div className="flex items-center justify-center mb-6">
        <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg mx-2 text-black text-4xl">
          ⭐
        </div>
        <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg mx-2 text-black text-4xl">
          ⭐
        </div>
        <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg mx-2 text-black text-4xl">
          ⭐
        </div>
      </div>
      <h1 className="text-4xl font-bold text-accent mb-4 drop-shadow-lg">
        Bra jobbat!
      </h1>
      <p className="text-lg text-white mb-6">
        Du fick <span className="font-bold text-secondary">{score}</span> av{" "}
        <span className="font-bold text-secondary">{totalQuestions}</span> rätt!
      </p>
      <div className="flex gap-4">
        <button
          className="bg-accent text-black py-3 px-6 rounded-full hover:bg-secondary hover:text-primary transition duration-300 shadow-md"
          onClick={() => navigate("/quiz")}
        >
          Spela om
        </button>
        <button
          className="bg-secondary text-black py-3 px-6 rounded-full hover:bg-accent hover:text-primary transition duration-300 shadow-md"
          onClick={() => navigate("/")}
        >
          Tillbaka till Start
        </button>
      </div>
    </div>
  );
};

export default ResultPage;
