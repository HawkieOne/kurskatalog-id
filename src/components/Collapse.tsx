import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface CollapseProps {
  title: string;
  content: React.ReactNode;
}

export default function Collapse({ title, content }: CollapseProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  console.log(isCollapsed);
  return (
    <div className="flex flex-col items-center space-y-4">
      <div
        className="w-full cursor-pointer self-start text-onyx flex justify-between items-center bg-slate-100 p-3"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {title}
        {!isCollapsed ? (
          <BsChevronDown />
        ) : (
          <BsChevronDown className="rotate-180" />
        )}
      </div>
      {isCollapsed && <div className="w-full p-3">{content}</div>}
    </div>
  );
}
