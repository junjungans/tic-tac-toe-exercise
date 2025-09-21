import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const onClickHandler = () => {
    setIsEditing((editing) => !editing);
  }

  const onChangeHandler = (event) => {
    setPlayerName(event.target.value);
  }

  let nameContent = <input type="text" value={playerName} onChange={onChangeHandler} required/>

  if(isEditing) {
    nameContent = <span className="player-name">{playerName}</span>
  }
  return (
    <li>
      <span className="player">
        {nameContent}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={onClickHandler}>{isEditing? "EDIT" : "SAVE"}</button>
    </li>
  );
}
