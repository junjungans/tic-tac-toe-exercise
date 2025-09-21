import { useState } from "react";

const intialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ handleTurn, currentSymbol }) {
  const [gameBoard, setGameBoard] = useState(intialGameBoard);

  const onClickHandler = (rowIndex, colIndex) => {
    setGameBoard((prevGameBoard) => {
        const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
        updatedGameBoard[rowIndex][colIndex] = currentSymbol;
        return updatedGameBoard;
    })
    handleTurn();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onClickHandler(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
