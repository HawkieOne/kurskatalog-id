import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import Text from "./Text";

interface DropdownProps {
  options: string[];
  value: string;
  onChange: (option: string) => void;
}

export default function Dropdown({
  options,
  value,
  onChange,
}: DropdownProps) {
  const [isOptionsExpanded, setIsOptionsExpanded] = useState(false);
  return (
    <div className="w-full relative">
      <div
        tabIndex={0}
        className="w-full bg-cream p-2 flex justify-between cursor-pointer space-x-4"
        onClick={() => setIsOptionsExpanded(!isOptionsExpanded)}
      >
        <Text>
          <span className="text-pink">{value}</span>
        </Text>
        <div className="flex justify-center text-pink cursor-pointer">
          {!isOptionsExpanded ? (
            <BsChevronDown size="1.5em" />
          ) : (
            <BsChevronDown size="1.5em" className="rotate-180" />
          )}
        </div>
      </div>
      {isOptionsExpanded && (
        <ul
          tabIndex={0}
          className={`absolute top-full menu w-full shadow cursor-pointer space-y-1 bg-cream text-onyx rounded-b-lg z-50`}
        >
          {options.map((option, index) => (
            <li
              className="hover:text-pink hover:bg-creamDark px-2"
              onClick={() => {
                onChange(option);
                setIsOptionsExpanded(false);
              }}
              key={index}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
