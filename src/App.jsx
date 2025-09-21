import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
  const [gamesTurn, setGameTurn] = useState([]);
  const [activePlayerSymbol, setActivePlayerSymbol] = useState("X");

  function handleTurn(rowIndex, colIndex) {
    setActivePlayerSymbol((prevActivePlayerSymbol) => {
      return prevActivePlayerSymbol === "X" ? "O" : "X";
    });
    setGameTurn((prevTurns) => {
      let currentPlayer = "X";

      if (prevTurns[0]?.player === "X") {
        currentPlayer = "O";
      }

      const updatedTurns = [
        {
          square: {
            row: rowIndex,
            col: colIndex,
          },
          player: currentPlayer,
          ...prevTurns,
        },
      ];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            isActive={activePlayerSymbol === "X"}
          />
          <Player
            name="Player 2"
            symbol="O"
            isActive={activePlayerSymbol === "O"}
          />
        </ol>
        <GameBoard handleTurn={handleTurn} gamesTurns={gamesTurn} />
      </div>
      LOG
    </main>
  );
}

export default App;
