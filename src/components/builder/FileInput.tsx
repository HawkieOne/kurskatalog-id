import { ChangeEvent, useState } from "react";
import { getJsonFromFile } from "../../shared/functions";
import { Preset } from "../../shared/interfaces";

interface FileInputProps {
  acceptedFormat: string;
  onUpload: (preset: Preset) => void;
  validateFunction?: (preset: Preset) => Preset | false;
}

export default function FileInput({
  acceptedFormat,
  onUpload,
  validateFunction,
}: FileInputProps) {
  const [errorText, setErrorText] = useState("");
  const [successText, setSuccessText] = useState("");
  return (
    <div className="form-control w-full max-w-xs space-y-2 text-onyx">
      <label className="label p-0">
        <span className="label-text text-onyx">Ladda upp mall</span>
      </label>
      <input
        type="file"
        accept={acceptedFormat}
        className="file-input file-input-bordered w-full max-w-xs bg-white file:bg-cream
                    file:border-none file:text-pink"
        onChange={async (e: ChangeEvent<HTMLInputElement>) => {
          const files = e.target.files;
          if (files?.length === 0) {
            setErrorText("");
          } else if (files?.item(0)?.name.endsWith(acceptedFormat)) {
            const file = e.target.files?.item(0);
            if (file) {
              const json = await getJsonFromFile(file);
              if (validateFunction) {
                const validation = validateFunction(json);
                if (validation) {
                  onUpload(json);
                  setErrorText("");
                  setSuccessText("Mall är uppladdad");
                } else {
                  setErrorText("Mall har felaktigt format");
                  setSuccessText("");
                }
              } else {
                onUpload(json);
                setErrorText("");
                setSuccessText("");
              }
            } else {
              setErrorText("Någonting gick fel när mallen laddades upp");
              setSuccessText("");
            }
          } else {
            setErrorText("Ogiltigt filformat");
            setSuccessText("");
          }
        }}
      />
      <label className="label p-0">
        <span className={`label-text-alt ${successText !== "" ? "text-emerald-600" : "text-pink"}`}>{showNotificationText(errorText, successText)}</span>
      </label>
    </div>
  );
}
 
const showNotificationText = (errorText: string, successText: string) => {
  if (errorText === "") {
    return successText;
  }
  return errorText;
}
