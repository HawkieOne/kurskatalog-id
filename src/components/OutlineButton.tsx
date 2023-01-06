interface ButtonProps {
  text: string;
  onClick: () => void;
}

export default function OutlineButton({ text, onClick }: ButtonProps) {
  return (
    <button
      className="btn btn-outline text-pink border-pink hover:bg-pink hover:text-white
                 outline-none hover:border-none"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
