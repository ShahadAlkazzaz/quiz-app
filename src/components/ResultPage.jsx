import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const getFeedbackMessage = (percentage) => {
  if (percentage === 100) {
    return "Fantastiskt! Du fick alla rätt! ✨";
  } else if (percentage >= 80) {
    return "Bra jobbat! Du klarade det! 🌟";
  } else if (percentage >= 50) {
    return "Inte illa! Fortsätt kämpa! 💪";
  } else {
    return "Ge inte upp! Försök igen! 💡";
  }
};

const ResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { score, totalQuestions } = location.state || { score: 0, totalQuestions: 0 };

  const percentage = Math.round((score / totalQuestions) * 100);
  const feedbackMessage = getFeedbackMessage(percentage);

  return (
    <div
      className="flex flex-col items-center justify-center h-screen px-4 text-center"
      style={{
        background: "linear-gradient(to top, #3D416E, #000000)",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Progress-bar */}
      <div
        className="w-4/5 h-4 rounded-full mb-6 overflow-hidden"
        style={{
          background: "rgba(255, 255, 255, 0.2)",
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: "100%",
            background: `linear-gradient(to right, #4caf50, ${
              percentage > 50 ? "#FFC107" : "#FF5722"
            })`,
            transition: "width 0.5s ease",
          }}
        ></div>
      </div>
      <p className="text-lg font-bold mb-4">{percentage}% rätt!</p>

      {/* Feedback text */}
      <h1
        className="text-4xl font-bold mb-4 drop-shadow-lg"
        style={{
          animation: "zoomIn 0.5s ease",
        }}
      >
        {feedbackMessage}
      </h1>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          className="  bg-accent text-black font-semibold py-3 px-6 rounded-full hover:bg-secondary hover:text-primary transition duration-300 shadow-md"
          onClick={() => navigate("/quiz")}
        >
          Spela om
        </button>
        <button
          className="bg-orange-500 text-black font-semibold py-3 px-6 rounded-full hover:bg-orange-700 transition duration-300 shadow-md"
          onClick={() => navigate("/")}
        >
          Tillbaka till Start
        </button>
      </div>


    </div>
  );
};

export default ResultPage;
