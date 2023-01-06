import { ChangeEvent } from "react";

interface CheckboxProps {
  value: boolean;
  label: string;
  onChange: (state: boolean) => void;
}

export default function Checkbox({ value, label, onChange }: CheckboxProps) {
  return (
    <div className="form-control">
      <label className="cursor-pointer label space-x-2">
        <span className="label-text text-onyx">{label}</span>
        <input
          type="checkbox"
          checked={value}
          className="checkbox checkbox-success rounded-md"
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.currentTarget.checked)}
        />
      </label>
    </div>
  );
}
