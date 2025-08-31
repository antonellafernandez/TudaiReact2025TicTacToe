// SurrenderButton.jsx
export default function SurrenderButton({ onSurrender, disabled }) {
    return (
        <button
            onClick={onSurrender}
            disabled={disabled}
            className={`mt-10 text-2xl p-2 rounded transition-all duration-200
                  ${disabled ? 'bg-gray-600 cursor-not-allowed text-gray-900' : 'bg-red-500 hover:bg-red-600 text-gray-50'}`}
        >
            Surrender
        </button>
    );
}
