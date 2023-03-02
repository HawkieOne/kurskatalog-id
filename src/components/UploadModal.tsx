import { AiOutlineCloseCircle } from "react-icons/ai";
import Modal from "react-modal";
import { useRecoilValue } from "recoil";
import { darkMode } from "../atoms/atoms";
import FileInput from "../pages/builder/FileInput";
import { TextVariants } from "../shared/constants";
import { validateJSON } from "../shared/functions";
import { Preset } from "../shared/interfaces";
import Button from "./Button";
import Text from "./Text";
import Title from "./Title";

interface UploadModalProps {
  isOpen: boolean;
  onOpen?: () => void;
  onCancel: () => void;
  onSuccess: () => void;
  onFileUpload: (preset: Preset) => void;
  value: Preset | undefined;
}
export default function UploadModal({
  isOpen,
  onOpen,
  onCancel,
  onSuccess,
  onFileUpload,
  value,
}: UploadModalProps) {
  const isDarkModeOn = useRecoilValue(darkMode);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      padding: "2%",
      transform: "translate(-50%, -50%)",
      backgroundColor: isDarkModeOn ? "#374151" : "#FFFFFF"
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onOpen}
      contentLabel="Example Modal"
      style={customStyles}
      appElement={document.getElementById("root") || undefined}
      portalClassName={`${isDarkModeOn ? 'dark' : ""}`}
    >
      <div
        className="btn btn-ghost absolute right-2 top-2 cursor-pointer z-50
                bg-white dark:bg-darkMode dark:text-white text-onyx"
        onClick={onCancel}
      >
        <AiOutlineCloseCircle size="1.5em" />
      </div>
      <div className="h-full flex flex-col items-start p-4 space-y-8 relative dark:text-white">
        <Title>Ladda upp plan</Title>
        <Text size={TextVariants.small}>Detta kommer ersätta den nuvarnade mallen</Text>
        <FileInput
          onUpload={onFileUpload}
          validFormat=".json"
          validateFunction={validateJSON}
        />
        <div className="w-full flex justify-between items-center">
          <button
            onClick={onCancel}
            className="btn btn-link no-underline text-red-500 dark:text-white"
          >
            Avbryt
          </button>
          <Button
            text="Välj plan"
            onClick={onSuccess}
            disabled={!value || (value && !value.name.endsWith(".json"))}
          />
        </div>
      </div>
    </Modal>
  );
}
