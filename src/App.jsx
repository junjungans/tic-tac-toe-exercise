import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Logs from "./components/Logs";

function setActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns[0]?.player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [gamesTurns, setGameTurn] = useState([]);
  const activePlayer = setActivePlayer(gamesTurns);

  function handleTurn(rowIndex, colIndex) {
    setGameTurn((prevTurns) => {
      const activePlayer = setActivePlayer(prevTurns);

      const updatedTurns = [
        {
          square: {
            row: rowIndex,
            col: colIndex,
          },
          player: activePlayer,
        },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard handleTurn={handleTurn} gamesTurns={gamesTurns} />
      </div>
      <Logs turns={gamesTurns} />
    </main>
  );
}

export default App;
