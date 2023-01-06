import { ChangeEvent, createRef, useState } from "react";
import { toast } from "react-toastify";
import Text from "../../components/Text";
import { TextVariants } from "../../shared/constants";
import { getJsonFromFile } from "../../shared/functions";
import { Preset } from "../../shared/interfaces";
import { AiOutlineUpload } from "react-icons/ai";

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
  const fileRef = createRef<HTMLInputElement>();
  const [errorText, setErrorText] = useState("");
  const [successText, setSuccessText] = useState("");
  return (
    <div className="form-control w-full max-w-xs space-y-2 text-onyx">
      <form className="w-full flex items-center">
        <div className="h-6"></div>
        <label className="block w-full">
          <button
            type="button"
            id="loadFile"
            value="Ladda upp"
            onClick={() => fileRef.current?.click()}
            className="w-full relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden 
               font-medium text-pink transition duration-500 ease-out border-none 
              rounded shadow-md group text-lg"
          >
            <span
              className="absolute inset-0 flex items-center justify-center w-full h-full text-whiteBackground duration-500 
                     -translate-x-full bg-lightSeaGreen group-hover:translate-x-0 ease"
            >
              <AiOutlineUpload size="1.5em" />
            </span>
            <span
              className="absolute flex items-center justify-center w-full h-full text-whiteBackground bg-darkGrey
                       transition-all duration-500 transform group-hover:translate-x-full ease"
            >
              Ladda upp plan
            </span>
            <span className="relative invisible">Send</span>
          </button>

          <input
            type="file"
            accept={validFormat}
            ref={fileRef}
            className="hidden"
            id="file"
            name="file"
            onChange={async (e: ChangeEvent<HTMLInputElement>) => {
              const files = e.target.files;
              if (files?.length === 0) {
                setErrorText("");
                setSuccessText("");
              } else if (files?.item(0)?.name.endsWith(validFormat)) {
                const file = e.target.files?.item(0);
                if (file) {
                  const json = await getJsonFromFile(file);
                  if (validateFunction) {
                    const validation = validateFunction(json);
                    if (validation) {
                      onUpload(json);
                      setErrorText("");
                      setSuccessText(file.name + " är uppladdad");
                      toast.success(file.name + " is uploaded")
                    } else {
                      setErrorText(file.name + " har inte rätt format");
                      setSuccessText("");
                    }
                  } else {
                    onUpload(json);
                    setErrorText("");
                    setSuccessText("");
                  }
                } else {
                  setErrorText("Uppladdning misslyckades");
                  setSuccessText("");
                }
              } else {
                setErrorText("Ogiltigt filformat");
                setSuccessText("");
              }
            }}
          />
        </label>
      </form>
      <div
        className={`${errorText !== "" ? "text-pink" : "text-green-500"}`}
      >
        {errorText !== "" ? (
          <Text size={TextVariants.small}>{errorText}</Text>
        ) : (
          <Text size={TextVariants.small}>{successText}</Text>
        )}
      </div>
    </div>
  );
}
