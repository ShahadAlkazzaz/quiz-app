import React from "react";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-dark px-4 text-center">
      <h1 className="text-5xl font-bold text-accent mb-6 drop-shadow-lg">
        Välkommen till Quiz-appen
      </h1>
      <p className="text-lg text-secondary mb-6 drop-shadow-sm">
        Testa din kunskap med vårt spännande quiz! Klicka på knappen nedan för att börja.
      </p>
      <button
        className="bg-accent text-black font-semibold py-3 px-6 rounded-full hover:bg-secondary hover:text-primary transition duration-300 shadow-md"
        onClick={() => navigate("/quiz")}
      >
        Börja Quiz
      </button>
    </div>
  );
};

export default StartPage;
