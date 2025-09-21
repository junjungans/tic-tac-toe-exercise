import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react"

function App() {
  const [activePlayerSymbol, setActivePlayerSymbol] = useState('X');

  function handleTurn() {
    setActivePlayerSymbol((prevActivePlayerSymbol) => {
      return prevActivePlayerSymbol === 'X' ? 'O' : 'X'
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayerSymbol === 'X'}/>
          <Player name="Player 2" symbol="O" isActive={activePlayerSymbol === 'O'}/>
        </ol>
          <GameBoard handleTurn={handleTurn} currentSymbol={activePlayerSymbol}/>
      </div>
      LOG
    </main>
  )
}

export default App
