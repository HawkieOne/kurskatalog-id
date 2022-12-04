import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextVariant } from "../shared/constants";
import { AllowedBgColors, AllowedTextColors } from "../shared/interfaces";
import Text from "./Text";

interface IconButtonProps {
  icon: React.ReactNode;
  text?: string;
  size: "small" | "medium" | "large";
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
      className={`bg-cream ${bgColor} text-pink ${textColor} rounded-lg shadow-md group hover:${hoverBgColor}
      relative space-y-4`}
    >
      {size === "small" && (
        <div
          onClick={() => (goBack ? navigate(-1) : navigate(to))}
          className="h-full p-2 flex flex-col justify-evenly items-center"
        >
          <div className="group-hover:text-onyx">{icon}</div>
          {text && <Text size={TextVariant.large}>{text}</Text>}
        </div>
      )}
      {size === "medium" && (
        <div
          onClick={() => (goBack ? navigate(-1) : navigate(to))}
          className="h-full p-2 flex flex-col justify-evenly items-center"
        >
          <div className="group-hover:text-onyx">{icon}</div>
          {text && <Text size={TextVariant.large}>{text}</Text>}
        </div>
      )}
      {size === "large" && (
        <div className={`h-64 w-64 relative flex flex-col`}>
          <div
            onClick={() => (goBack ? navigate(-1) : navigate(to))}
            className="h-full p-2 flex flex-col justify-evenly items-center"
          >
            <div className="group-hover:text-onyx">{icon}</div>
            {text && <Text size={TextVariant.large}>{text}</Text>}
          </div>
        </div>
      )}
    </div>
  );
}
