import { useState } from "react";
import GameBoard from "./GameBoard";
import "./App.css";

function App() {
  const [startGame, setStartGame] = useState(false);
  const [buttonText, setButtonText] = useState("Click here to Start");

  const handleButtonClick = () => {
    setStartGame(!startGame);
    setButtonText(startGame ? "Click here to Start" : "Click here to End");
  };

  return (
    <>
      <div className="title">
        <h1>Tic Tac Toe</h1>
        <button className="start-btn" onClick={handleButtonClick}>
          {buttonText}
        </button>
      </div>

      <div className="container">
        {startGame && (
          <GameBoard onGameEnd={() => setButtonText("Click here to Start")} />
        )}
      </div>
    </>
  );
}

export default App;
