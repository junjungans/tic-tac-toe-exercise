import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  const onClickHandler = () => {
    setIsEditing(!isEditing);
  }

  let nameContent = <input />

  if(isEditing) {
    nameContent = <span className="player-name">{name}</span>
  }
  return (
    <li>
      <span className="player">
        {nameContent}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={onClickHandler}>{isEditing? "SAVE" : "EDIT"}</button>
    </li>
  );
}
