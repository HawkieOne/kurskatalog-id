interface ButtonProps {
    text: string;
    onClick: () => void;
  }

export default function Button({ text, onClick } : ButtonProps) {
  return (
    <button className="btn btn-accent bg-darkGrey text-whiteBackground border-none 
    hover:bg-lightSeaGreen shadow-md"
    onClick={onClick}>
        {text}
    </button>
  );
}
