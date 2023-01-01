import React from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import ReactModal from "react-modal";
import Text from "../../components/Text";
import Title from "../../components/Title";
import { FontVariants } from "../../shared/constants";

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
}

export default function KeyboardShortcutsModal({
  isOpen,
  onCloseModal,
}: KeyboardShortcutsModalProps) {
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
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="text-onyx p-8 space-y-8">
        <Title>Keyboard shortcuts</Title>
        <div className="grid grid-cols-2 gap-6 mt-2">
          <Text>Open course drawer</Text>
          <Text font={FontVariants.bold}>Alt + C</Text>
          <Text>Open course drawer</Text>
          <Text font={FontVariants.bold}>Alt + A</Text>
        </div>
      </div>
      <div
        className="btn btn-ghost absolute right-2 top-2"
        onClick={onCloseModal}
      >
        <AiOutlineCloseSquare size="2em" />
      </div>
    </ReactModal>
  );
}
