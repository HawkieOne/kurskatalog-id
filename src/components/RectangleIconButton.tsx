import React from "react";
import { TextVariants } from "../shared/constants";
import Text from "./Text";

interface IconButtonProps {
  icon: React.ReactNode;
  text?: string;
  onClick: () => void;
}

export default function RectangleIconButton({
  icon,
  text,
  onClick,
}: IconButtonProps) {
  return (
    <div
      className={`w-full bg-darkGrey text-whiteBackground rounded-lg shadow-md group
      relative cursor-pointer px-4 py-2 hover:text-darkGrey flex 
      space-x-4 items-center hover:bg-boneGrey`}
      onClick={onClick}
    >
      {icon}
      {text && <Text size={TextVariants.large}>{text}</Text>}
    </div>
  );
}
