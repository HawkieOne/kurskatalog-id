import React from "react";
import { Link } from "react-router-dom";
import { TextVariant } from "../shared/constants";
import Text from "./Text";

interface IconButtonProps {
  icon: React.ReactNode;
  text?: string;
  size: "small" | "medium" | "large";
  to: string;
}

export default function IconButton({ icon, text, size, to }: IconButtonProps) {
  return (
    <div className="bg-cream rounded-lg shadow-md group hover:outline hover:outline-pink">
      {size === "small" && (
        <div className="p-2">
          {icon}
          {text && <Text size={TextVariant.medium}>{text}</Text>}
        </div>
      )}
      {size === "medium" && (
        <div className="p-4">
          {icon}
          <Link to="/courses">{text}</Link>
        </div>
      )}
      {size === "large" && (
        <Link
          to={to}
          className="h-64 w-64 p-2 flex flex-col justify-evenly items-center"
        >
          <div className="text-pink group-hover:text-onyx">
            {icon}
          </div>
          {text && <Text size={TextVariant.large}>{text}</Text>}
        </Link>
      )}
    </div>
  );
}
