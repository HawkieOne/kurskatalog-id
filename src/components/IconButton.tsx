import React from "react";
import { Link } from "react-router-dom";
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
}

export default function IconButton({
  icon,
  text,
  size,
  to,
  bgColor,
  hoverBgColor,
  textColor,

}: IconButtonProps) {

  return (
    <div
      className={`bg-cream ${bgColor} text-pink ${textColor} rounded-lg shadow-md group hover:${hoverBgColor}
      relative space-y-4`}
    >
      {size === "small" && (
        <Link
          to={to}
          className="h-12 w-12 p-1 flex flex-col justify-evenly items-center"
        >
          <div className="group-hover:text-onyx">{icon}</div>
          {text && <Text size={TextVariant.large}>{text}</Text>}
        </Link>
      )}
      {size === "medium" && (
        <Link
          to={to}
          className="h-48 w-48 p-2 flex flex-col justify-evenly items-center"
        >
          <div className="group-hover:text-onyx">{icon}</div>
          {text && <Text size={TextVariant.large}>{text}</Text>}
        </Link>
      )}
      {size === "large" && (
        <div
          className={`h-64 w-64 relative flex flex-col`}
        >
          <Link
            to={to}
            className="h-full p-2 flex flex-col justify-evenly items-center"
          >
            <div className="group-hover:text-onyx">{icon}</div>
            {text && <Text size={TextVariant.large}>{text}</Text>}
          </Link>
        </div>
      )}
    </div>
  );
}
