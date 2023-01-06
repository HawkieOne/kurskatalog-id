import { AiOutlineCloseCircle } from "react-icons/ai";
import Modal from "react-modal";
import FileInput from "../pages/builder/FileInput";
import { validateJSON } from "../shared/functions";
import { Preset } from "../shared/interfaces";
import Button from "./Button";
import Title from "./Title";

interface ModalProps {
  isOpen: boolean;
  onOpen?: () => void;
  onCancel: () => void;
  onSuccess: () => void;
  onFileUpload: (preset: Preset) => void;
  value: Preset | undefined;
}
export default function ModalWindow({
  isOpen,
  onOpen,
  onCancel,
  onSuccess,
  onFileUpload,
  value,
}: ModalProps) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      padding: "2%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onOpen}
      contentLabel="Example Modal"
      style={customStyles}
    >
      <div
        className="btn btn-ghost absolute right-2 top-2 cursor-pointer hover:bg-slate-100 "
        onClick={onCancel}
      >
        <AiOutlineCloseCircle size="1.5em" />
      </div>
      <div className="h-full flex flex-col items-start p-4 space-y-8 relative">
        <Title>Ladda upp mall</Title>
        <FileInput
          onUpload={onFileUpload}
          validFormat=".json"
          validateFunction={validateJSON}
        />
        <div className="self-end space-x-4">
          <button
            onClick={onCancel}
            className="btn btn-link no-underline text-red-500"
          >
            Cancel
          </button>
          <Button 
            text="Välj mall"
            onClick={onSuccess}
            disabled={!value || (value && !value.name.endsWith(".json"))}
          />
        </div>
      </div>
    </Modal>
  );
}
