import React, { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface CollapseProps {
  title: string;
  content: React.ReactNode;
  open: boolean;
  onOpen?: () => void;
}

export default function Collapse({
  title,
  content,
  open,
  onOpen,
}: CollapseProps) {
  const [isCollapsed, setIsCollapsed] = useState(open);

  useEffect(() => {
    if (isCollapsed && onOpen) {
      onOpen();
    }
  }, [isCollapsed, onOpen]);
  
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-full cursor-pointer self-start text-onyx flex justify-between items-center bg-ashGrey p-3"
        onClick={() => {
          setIsCollapsed(!isCollapsed);
        }}
      >
        {title}
        {!isCollapsed ? (
          <BsChevronDown />
        ) : (
          <BsChevronDown className="rotate-180" />
        )}
      </div>
      {isCollapsed && <div className="w-full">{content}</div>}
    </div>
  );
}
