import React, { ChangeEvent, useState } from "react";
import { validateJSON } from "../../shared/functions";
import Text from "../Text";

interface FileInputProps {
  acceptedFormat: string;
  onUpload: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function FileInput({ acceptedFormat, onUpload } : FileInputProps) {

  const [errorText, setErrorText] = useState("");
  return (
    <div className="form-control w-full max-w-xs space-y-2 text-onyx">
      <label className="label">
        <span className="label-text text-onyx">Ladda förinställning</span>
      </label>
      <input
        type="file"
        accept={acceptedFormat}
        className="file-input file-input-bordered w-full max-w-xs bg-white file:bg-cream
                    file:border-none file:text-pink"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const files = e.target.files;
          if (files?.length === 0) {
            setErrorText("");
          } else if (files?.item(0)?.name.endsWith(acceptedFormat)) {
            const file = e.target.files?.item(0);
            if (file) {
              const validation = validateJSON(file);
              if (validation.errors) {
                setErrorText("The JSON have incorrect format")
              } else {
                onUpload(e);
                setErrorText("");
              }
            } else {
              setErrorText("Something went wrong uploading the files")
            }
          } else {
            setErrorText("Invalid file format")
          }
        }}
      />
      <div className="h-6">
        <Text color="text-pink">{errorText}</Text>
      </div>
    </div>
  );
}
