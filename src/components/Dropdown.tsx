import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import Text from "./Text";

interface DropdownProps {
  options: string[];
  value: string;
  onChange: (option: string) => void;
}

export default function Dropdown({ options, value, onChange }: DropdownProps) {
  const [isOptionsExpanded, setIsOptionsExpanded] = useState(false);
  return (
    <div className="w-full relative">
      <div
        tabIndex={0}
        className="w-full bg-whiteBackground dark:bg-darkModeLight text-onyx dark:text-white flex justify-between cursor-pointer 
                  space-x-4 border border-darkGrey"
        onClick={() => setIsOptionsExpanded(!isOptionsExpanded)}
      >
        <div className="p-2 flex justify-center items-center">
          <Text>{value}</Text>
        </div>
        <div className="p-2 flex justify-center bg-darkGrey text-whiteBackground cursor-pointer">
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
          className={`absolute top-full menu w-full shadow cursor-pointer space-y-1 bg-whiteBackground dark:bg-darkModeLight text-onyx dark:text-white
            text-lightGreen rounded-b-lg z-50 border border-darkGrey border-t-0`}
        >
          {options.map((option, index) => (
            <li
              className="hover:text-whiteBackground hover:bg-darkGrey px-2"
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
