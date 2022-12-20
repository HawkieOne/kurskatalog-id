import React from "react";
import Text from "../Text";

interface ListItemProps {
  icon: React.ReactNode;
  text: string;
  title: string;
  onClick: () => void;
}

export default function ListItem({ icon, text, onClick , title}: ListItemProps) {
  return (
    <li
      className={`flex items-center py-1 px-3 active:bg-slate-300 space-x-4 cursor-pointer
      darkerBg`}
      onClick={onClick}
      title={title}
    >
      {icon}
      <Text>{text}</Text>
    </li>
  );
}
