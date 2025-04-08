import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  function handleEditClick() {
    // setIsEditing(!isEditing)
    // setIsEditing(!isEditing)
    // 在想变state 的时候要用function 因为他只是schedule一个change，假如想这样一个component里变两次，它两次schedule的都是从false变成true因为它压根没在第六行立刻变成true所以滴起航就不会变成false
    setIsEditing((editing) => !editing);

    // setIsEditing(editing=>!editing);
    // 这样用function他就是立刻变，这就是规定，老师说记下来
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  //   let btnCaption = "Edit";

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    // btnCaption = "Save";
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}> {isEditing ? "Save" : "Edit"} </button>
    </li>
  );
}
