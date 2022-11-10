import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import Text from "./Text";

interface IconButtonDropdownProps {
  options: string[];
  value: string;
  onChange: (option: string) => void;
}

export default function Dropdown({
  options,
  value,
  onChange,
}: IconButtonDropdownProps) {
  const [isOptionsExpanded, setIsOptionsExpanded] = useState(false);
  return (
    <div className="w-full">
      <div
        tabIndex={0}
        className="w-full bg-cream p-2 flex justify-between cursor-pointer"
        onClick={() => setIsOptionsExpanded(!isOptionsExpanded)}
      >
        <Text>
          Mall: <span className="text-pink">{value}</span>
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
          className={`absolute top-full menu w-full shadow cursor-pointer space-y-1 bg-cream text-onyx rounded-b-lg`}
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
