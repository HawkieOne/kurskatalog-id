import Modal from "react-modal";
import { useRecoilValue } from "recoil";
import { darkMode } from "../atoms/atoms";
import { TextVariants } from "../shared/constants";
import Button from "./Button";
import OutlineButton from "./OutlineButton";
import Text from "./Text";

interface ModalProps {
  text: string;
  subtext: string;
  isOpen: boolean;
  onOpen?: () => void;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function ConfirmationModal({
  text,
  subtext,
  isOpen,
  onOpen,
  onCancel,
  onConfirm,
}: ModalProps) {
  const isDarkModeOn = useRecoilValue(darkMode);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "2%",
      backgroundColor: isDarkModeOn ? "#374151" : "#FFFFFF",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onOpen}
      contentLabel="Custom Course Modal"
      style={customStyles}
      appElement={document.getElementById("root") || undefined}
      portalClassName={`${isDarkModeOn ? "dark" : ""}`}
    >
      <div className="flex flex-col space-y-6 bg-white dark:bg-darkMode dark:text-white text-onyx">
        <div className="flex flex-col space-y-2">
          <Text size={TextVariants.large}>{text}</Text>
          <Text size={TextVariants.small}>{subtext}</Text>
        </div>
        <div className="flex justify-between">
          <button
            onClick={onCancel}
            className="btn btn-link no-underline text-red-500 dark:text-white"
          >
            Avbryt
          </button>
          <Button text="Bekräfta" onClick={() => onConfirm()} />
        </div>
      </div>
    </Modal>
  );
}
