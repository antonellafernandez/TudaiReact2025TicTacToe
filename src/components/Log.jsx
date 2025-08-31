// Log.jsx
export default function Log({ turns }) {
  return (
    <ol id="log" className="text-gray-800">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`} className="animate-fade-right animate-once animate-duration-500 animate-ease-out">
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
}
