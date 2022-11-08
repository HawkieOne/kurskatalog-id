import React, { ChangeEvent } from "react";

interface FileInputProps {
  onUpload: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function FileInput({ onUpload } : FileInputProps) {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Ladda förinställning</span>
      </label>
      <input
        type="file"
        accept=".json"
        className="file-input file-input-bordered w-full max-w-xs bg-white file:bg-cream
                    file:border-none file:text-pink"
        onChange={onUpload}
      />
    </div>
  );
}
