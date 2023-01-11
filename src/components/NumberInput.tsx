import React from "react";

interface NumberInputProps {
    value: number | undefined;
    onChange: (newValue: number) => void;
    placeholder: string;
    min: number;
    max: number;
}

export default function NumberInput({ value, onChange, placeholder, min, max } : NumberInputProps) {
  return (
    <input
      type="number"
      placeholder={placeholder}
      className="input input-bordered w-full bg-whiteBackground text-onyx"
      value={value}
      min={min}
      max={max}
      onChange={((e) => onChange(parseInt(e.target.value)))}
    />
  );
}
