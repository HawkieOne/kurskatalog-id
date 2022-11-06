import React from "react";
import { Link } from "react-router-dom";
import Text from "./Text";

interface IconButtonProps {
  icon: React.ReactNode;
  text?: string;
  size: "small" | "medium" | "large";
  to: string;
}

export default function IconButton({ icon, text, size, to }: IconButtonProps) {
  return (
    <div className="bg-white rounded-lg shadow-md">
      {size === "small" && (
        <div className="p-2">
          {icon}
          {text && <Text>{text}</Text>}
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
          className="h-48 w-48 p-2 flex flex-col justify-evenly items-center"
        >
          {icon}
          {text && <Text>{text}</Text>}
        </Link>
      )}
    </div>
  );
}
