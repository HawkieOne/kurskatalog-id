import React from "react";
import { TextVariants } from "../shared/constants";
import { AllowedBgColors, AllowedTextColors } from "../shared/interfaces";
import Dropdown from "./Dropdown";
import Text from "./Text";

interface IconButtonProps {
  icon: React.ReactNode;
  text?: string;
  size: "small" | "medium" | "large";
  bgColor?: AllowedBgColors;
  hoverBgColor?: AllowedBgColors;
  textColor?: AllowedTextColors;
  options: string[];
  value: string;
  onClick: () => void;
  onChange: (option: string) => void;
}

export default function IconButtonDropdown({
  icon,
  text,
  size,
  bgColor,
  hoverBgColor,
  textColor,
  options,
  value,
  onClick,
  onChange,
}: IconButtonProps) {
  return (
    <div
      className={`bg-cream ${bgColor} text-pink ${textColor} rounded-lg shadow-md group hover:${hoverBgColor}
      relative space-y-4 cursor-pointer`}
    >
      {size === "small" && (
        <div className="h-12 w-12 p-1 flex flex-col justify-evenly items-center">
          <div className="group-hover:text-onyx">{icon}</div>
          {text && <Text size={TextVariants.large}>{text}</Text>}
        </div>
      )}
      {size === "medium" && (
        <div className="h-48 w-48 p-2 flex flex-col justify-evenly items-center">
          <div className="group-hover:text-onyx">{icon}</div>
          {text && <Text size={TextVariants.large}>{text}</Text>}
        </div>
      )}
      {size === "large" && (
        <div className={`h-64 w-64 relative flex flex-col`}>
          <div
            className="h-full p-2 flex flex-col justify-evenly items-center"
            onClick={onClick}
          >
            <div className="group-hover:text-onyx">{icon}</div>
            {text && <Text size={TextVariants.large}>{text}</Text>}
          </div>
          <div className="absolute bottom-0 w-full">
            <Dropdown options={options} value={value} onChange={onChange} />
          </div>
        </div>
      )}
    </div>
  );
}
