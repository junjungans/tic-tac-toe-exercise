const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ handleTurn, gamesTurns }) {
  //   const [gameBoard, setGameBoard] = useState(intialGameBoard);

  //   const onClickHandler = (rowIndex, colIndex) => {
  //     setGameBoard((prevGameBoard) => {
  //         const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
  //         updatedGameBoard[rowIndex][colIndex] = currentSymbol;
  //         return updatedGameBoard;
  //     })
  //     handleTurn();
  //   }

  let gameBoard = initialGameBoard;

  gamesTurns?.forEach((turn) => {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  });

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleTurn(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
