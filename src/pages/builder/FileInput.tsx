import { ChangeEvent, useState } from "react";
import Text from "../../components/Text";
import { TextVariants } from "../../shared/constants";
import { getJsonFromFile } from "../../shared/functions";
import { Preset } from "../../shared/interfaces";

interface FileInputProps {
  validFormat: string;
  onUpload: (preset: Preset) => void;
  validateFunction?: (preset: Preset) => Preset | false;
}

export default function FileInput({
  validFormat,
  onUpload,
  validateFunction,
}: FileInputProps) {
  const [errorText, setErrorText] = useState("");
  return (
    <div className="form-control w-full max-w-xs space-y-2 text-onyx">
      <Text size={TextVariants.small}>Ladda upp mall</Text>
      <form className="w-full flex items-center">
        <div className="h-6">
        </div>
        <label className="block w-full">
          <input type="file" accept={validFormat}
            className={`block w-full text-sm text-onyx font-semibold cursor-pointer 
              outline-2 border ${errorText ? "border-pink" : "border-darkGrey"}
              file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 rounded-md
              file:text-sm file:font-semibold file:bg-darkGrey file:text-white hover:file:bg-lightSeaGreen`}
            onChange={async (e: ChangeEvent<HTMLInputElement>) => {
              const files = e.target.files;
              if (files?.length === 0) {
                setErrorText("");
              } else if (files?.item(0)?.name.endsWith(validFormat)) {
                const file = e.target.files?.item(0);
                if (file) {
                  const json = await getJsonFromFile(file);
                  if (validateFunction) {
                    const validation = validateFunction(json);
                    if (validation) {
                      onUpload(json);
                      setErrorText("");
                    } else {
                      setErrorText("Den valda filen följer inte rätt format");
                    }
                  } else {
                    onUpload(json);
                    setErrorText("");
                  }
                } else {
                  setErrorText("Uppladdning misslyckades");
                }
              } else {
                setErrorText("Ogiltigt filformat");
              }
            }}
          />
        </label>
      </form>
      <div className="h-6">
        <Text color="text-pink" size={TextVariants.small}>{errorText}</Text>
      </div>
    </div>
  );
}
