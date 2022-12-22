import React from "react";
import { useNavigate } from "react-router-dom";
import { TextVariants } from "../shared/constants";
import { AllowedBgColors, AllowedTextColors } from "../shared/interfaces";
import Text from "./Text";

interface IconButtonProps {
  icon: React.ReactNode;
  text?: string;
  size: string;
  to: string;
  bgColor?: AllowedBgColors;
  hoverBgColor?: AllowedBgColors;
  textColor?: AllowedTextColors;
  goBack?: boolean;
}

export default function IconButton({
  icon,
  text,
  size,
  to,
  bgColor,
  hoverBgColor,
  textColor,
  goBack,
}: IconButtonProps) {
  const navigate = useNavigate();
  return (
    <div
      className={`${bgColor} text-lightGreen ${textColor} rounded-lg shadow-md group hover:${hoverBgColor}
      relative space-y-4 cursor-pointer`}
    >
      <div
        onClick={() => (goBack ? navigate(-1) : navigate(to))}
        className={`${size === "large" ? "h-64 w-64 relative " : "h-full "} p-2 flex flex-col justify-evenly items-center`}
      >
        <div className="group-hover:text-whiteBackground">{icon}</div>
        {text && <Text size={TextVariants.large} hoverColor="text-whiteBackground">{text}</Text>}
      </div>
    </div>
  );
}
