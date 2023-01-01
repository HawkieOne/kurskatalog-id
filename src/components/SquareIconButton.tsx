import React from "react";
import { TextVariants } from "../shared/constants";
import Text from "./Text";

interface IconButtonProps {
  icon: React.ReactNode;
  text?: string;
  onClick: () => void;
}

export default function SquareIconButton({
  icon,
  text,
  onClick,
}: IconButtonProps) {
  return (
    <div
      className={`h-full aspect-square bg-darkGrey text-whiteBackground rounded-lg shadow-md
      relative cursor-pointer p-4 hover:text-darkGrey flex flex-col justify-evenly items-center 
      hover:bg-boneGrey`}
      onClick={onClick}
    >
      {icon}
      {text && <Text size={TextVariants.large}>{text}</Text>}
    </div>
  );
}
