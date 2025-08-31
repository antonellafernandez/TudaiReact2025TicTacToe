// Player.jsx
import { useState } from 'react';

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    const value = event.target.value;

    if (value.length <= 8) {
      setPlayerName(value);
    }
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // let btnCaption = 'Edit';

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange}
        className="w-full bg-cyan-500 text-transparent bg-clip-text text-center
        animate-pulse animate-infinite animate-duration-[2000ms] animate-delay-0 animate-ease-linear" />
    );
    // btnCaption = 'Save';
  }

  return (
    <li className={`relative flex items-center justify-between w-1/2 p-2 border-2 border-cyan-500/0 
    ${isActive ? 'border-cyan-500/100 animate-[pulseBorder_2s_infinite_ease-in-out]' : undefined}`}>
      <span className="flex items-center justify-between text-center w-3/4 font-extrabold">
        <span className="w-2/4">{editablePlayerName}</span>
        <span className="w-1/4">{symbol}</span>
      </span>

      <button onClick={handleEditClick} className="text-cyan-600 hover:text-cyan-300 w-1/4 text-center">{isEditing ? 'Save' : 'Edit'}</button>
    </li >
  );
}
