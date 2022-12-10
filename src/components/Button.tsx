interface ButtonProps {
    text: string;
    onClick: () => void;
  }

export default function Button({ text, onClick } : ButtonProps) {
  return (
    <button className="btn btn-accent bg-cream text-onyx border-none 
    hover:bg-creamDark shadow-md"
    onClick={onClick}>
        {text}
    </button>
  );
}
