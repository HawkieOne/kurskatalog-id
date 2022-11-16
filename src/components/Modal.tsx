import { ChangeEvent } from "react";
import Modal from "react-modal";
import { Preset } from "../shared/interfaces";
import FileInput from "./builder/FileInput";
import Title from "./Title";

interface ModalProps {
  isOpen: boolean;
  onOpen?: () => void;
  onCancel: () => void;
  onSuccess: () => void;
  onFileUpload: (e: ChangeEvent<HTMLInputElement>) => void;
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
        className="btn btn-ghost btn-sm btn-circle absolute right-2 top-2 cursor-pointer"
        onClick={onCancel}
      >
        ✕
      </div>
      <div className="h-full flex flex-col items-start p-4 space-y-8 relative">
        <Title>Ladda upp mall</Title>
        <FileInput onUpload={onFileUpload} acceptedFormat=".json" />
        <div className="self-end space-x-4">
          <button
            onClick={onCancel}
            className="btn btn-link no-underline text-red-500"
          >
            Cancel
          </button>np
          <button
            onClick={onSuccess}
            className="btn bg-cream text-onyx hover:bg-creamDark border-none"
            disabled={!value || (value && !value.name.endsWith(".json"))}
          >
            Välj mall
          </button>
        </div>
      </div>
    </Modal>
  );
}
