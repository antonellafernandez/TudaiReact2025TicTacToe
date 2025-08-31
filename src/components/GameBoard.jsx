// GameBoard.jsx
export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board" className="flex flex-col items-center justify-between w-full mt-10 gap-5">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className="flex gap-5">
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}

                  className="w-30 h-30 bg-gray-400 flex items-center justify-center text-6xl font-black text-gray-800"
                >
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
