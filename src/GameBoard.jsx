import { useState } from "react";
import Square from "./Square";
import CalculateWinner from "./CalculateWinner";

const GameBoard = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [moves, setMoves] = useState([]);

  function handleClick(i) {
    if (squares[i] || CalculateWinner(squares)) {
      return;
    }
    const nextSquares = [...squares];
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    let move = `${nextSquares[i]} played at ${i + 1}`;
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    setMoves([...moves, move]);
  }
  let status;
  if (!squares.includes(null)) {
    status = ` Game Draw`;
  }
  const winner = CalculateWinner(squares);

  if (winner) {
    status = `Congratulations "${winner}" Won`;
  } else {
    status = "Turn of:   " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="game">
        <div className="status">{status}</div>
        <div className="gameboard-moves">
          <div className="game-board">
            <div className="board-row">
              <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
              <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
              <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>

            <div className="board-row">
              <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
              <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
              <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>

            <div className="board-row">
              <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
              <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
              <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
          </div>
          <div className="moves">
            {moves.map((move, index) => (
              <p key={index}>{move}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GameBoard;
