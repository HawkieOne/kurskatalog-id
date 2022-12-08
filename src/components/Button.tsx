interface ButtonProps {
    text: string;
    onClick: () => void;
  }

export default function Button({ text, onClick } : ButtonProps) {
  return (
    <button className="btn btn-accent bg-cream text-onyx border-pink 
    hover:bg-onyx hover:text-white hover:border-pink" 
    onClick={onClick}>
        {text}
    </button>
  );
}
