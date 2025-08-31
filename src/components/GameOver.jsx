// GameOver.jsx
export default function GameOver({ winner, onRestart }) {
  return (
    <div
      id="game-over"
      className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center 
      bg-gray-800 opacity-95 rounded shadow-[0_0_20px_rgba(0,0,0,0.5)] animate-jump-in animate-once animate-duration-300 gap-10">

      <h2 className="text-6xl font-black text-center text-cyan-500">Game Over!</h2>
      {winner && <p className="text-2xl text-center text-gray-50">{winner} won!</p>}
      {!winner && <p className="text-2xl text-center text-gray-50">It&apos;s a draw!</p>}

      <p>
        <button
          onClick={onRestart}
          className="text-2xl bg-none border-2 border-cyan-500
                    text-cyan-500 p-2 rounded cursor-pointer 
                      transition-all duration-200 shadow-[0_0_8px_rgba(0,206,255,0.4)]
                    hover:bg-cyan-500 hover:text-gray-800
                      hover:scale-110 hover:shadow-[0_0_20px_rgba(0,206,255,0.8)]">
          Rematch!
        </button>
      </p>

    </div>
  );
}
