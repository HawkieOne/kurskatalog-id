import Modal from "react-modal";
import { FontVariants, TextVariants } from "../shared/constants";
import Button from "./Button";
import OutlineButton from "./OutlineButton";
import Text from "./Text";

interface ModalProps {
  text: string;
  isOpen: boolean;
  onOpen?: () => void;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function ConfirmationModal({
  text,
  isOpen,
  onOpen,
  onCancel,
  onConfirm,
}: ModalProps) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "2%",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onOpen}
      contentLabel="Custom Course Modal"
      style={customStyles}
      appElement={document.getElementById("root") || undefined}
    >
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <Text size={TextVariants.large}>{text}</Text>
          <Text size={TextVariants.small}>All data kopplad till detta år kommer försvinna</Text>
        </div>
        <div className="flex justify-between">
          <OutlineButton text="Avbryt" onClick={onCancel} />
          <Button text="Bekräfta" onClick={() => onConfirm()} />
        </div>
      </div>
    </Modal>
  );
}
