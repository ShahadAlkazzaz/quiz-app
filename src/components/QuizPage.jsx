import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const QuizPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    fetch("/questions.json")
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);

  useEffect(() => {
    if (location.state?.reset) {
      setCurrentQuestion(0);
      setScore(0);
      setFeedback("");
      setTimer(10);
    }
  }, [location.state]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else {
      handleNextQuestion();
    }
  }, [timer]);

  const handleAnswer = (option) => {
    const correctAnswer = questions[currentQuestion]?.svar;

    if (option === correctAnswer) {
      setScore((prevScore) => prevScore + 1);
      setFeedback("Rätt!");
    } else {
      setFeedback("Fel!");
    }

    setTimeout(() => {
      setFeedback("");
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion((prev) => prev + 1);
        setTimer(10);
      } else {
        navigate("/result", {
          state: { score: score + (option === correctAnswer ? 1 : 0), totalQuestions: questions.length },
        });
      }
    }, 2000);
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
      setTimer(10);
    } else {
      navigate("/result", { state: { score, totalQuestions: questions.length } });
    }
  };


  const getProgressBarColor = () => {
    if (timer > 7) {
      return "#99D1F8";
    } else if (timer > 3) {
      return "#F3C48B";
    } else {
      return "#FF6600";
    }
  };

  if (questions.length === 0) {
    return <div>Laddar frågor...</div>;
  }

  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={{
        background: "linear-gradient(to top, #3D416E, #000000)",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Timer text */}
      <p
        className="text-center text-xl font-bold"
        style={{ marginBottom: "10px", color: getProgressBarColor() }}
      >
        Tid kvar: {timer} sekunder
      </p>

      {/* Progress-bar acting as a timer */}
      <div
        style={{
          width: "90%",
          maxWidth: "500px",
          height: "10px",
          background: "#555",
          borderRadius: "5px",
          overflow: "hidden",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            width: `${(timer / 10) * 100}%`,
            height: "100%",
            background: getProgressBarColor(),
            transition: "width 0.2s linear, background-color 0.2s linear",
          }}
        ></div>
      </div>

      <div
        className="rounded-lg p-8 shadow-lg"
        style={{
          background: "linear-gradient(to bottom, #3D416E, #000000)",
          border: "2px solid #99D1F8",
          boxShadow: "0 0 15px #99D1F8",
          width: "90%",
          maxWidth: "500px",
        }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Fråga {currentQuestion + 1}/{questions.length}
        </h2>
        <p className="text-lg mb-4 text-center">{questions[currentQuestion]?.fråga}</p>
        <div className="flex flex-col gap-4">
          {questions[currentQuestion]?.alternativ.map((option, index) => (
            <button
              key={index}
              className="py-2 px-4 rounded-full font-bold"
              style={{
                background: "linear-gradient(to bottom, #3D416E, #000000)",
                border: "2px solid #99D1F8",
                color: "#99D1F8",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.1)";
                e.target.style.boxShadow = "0 0 15px #F3C48B";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "0 0 5px rgba(243, 196, 139, 0.8)";
              }}
              onClick={() => handleAnswer(option)}
              disabled={feedback !== ""}
            >
              {option}
            </button>
          ))}
        </div>
        {feedback && (
          <p
            className="mt-4 text-lg text-center font-extrabold"
            style={{ color: feedback === "Rätt!" ? "#22ea72" : "#ff0000" }}
          >
            {feedback}
          </p>
        )}
      </div>
      <button
        className="mt-8 bg-accent text-black font-semibold py-3 px-6 rounded-full hover:bg-secondary  transition duration-300 shadow-md"
        onClick={() => navigate("/")}
      >
        Tillbaka till Start
      </button>
    </div>
  );
};

export default QuizPage;
