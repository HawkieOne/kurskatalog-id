interface TextInputProps {
  value: string;
  onChange: (newValue: string) => void;
  placeholder?: string;
}

export default function TextInput({
  value,
  onChange,
  placeholder,
}: TextInputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder ? placeholder : ""}
      className="input input-bordered w-full bg-whiteBackground text-onyx"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
