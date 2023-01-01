interface ButtonProps {
    text: string;
    onClick: () => void;
    disabled?: boolean;
  }

export default function Button({ text, onClick, disabled = false } : ButtonProps) {
  return (
    <button className="btn btn-accent bg-darkGrey text-whiteBackground border-none 
    hover:bg-lightSeaGreen shadow-md"
    disabled={disabled}
    onClick={onClick}>
        {text}
    </button>
  );
}
