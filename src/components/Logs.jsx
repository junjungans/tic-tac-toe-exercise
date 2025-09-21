export default function Logs({turns}) {
    console.log(turns);
    console.log(turns?.length);
  return (
    <ol id="log">
      {turns?.map((turn) => (
        <li key={`${turn.square.row},${turn.square.col}`}>
          {turn.player} selected {turn.square.row} , {turn.square.col}
        </li>
      ))}
    </ol>
  );
}
