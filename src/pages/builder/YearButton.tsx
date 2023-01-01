import React from "react";

interface YearButtonProps {
  active?: boolean;
  number: number;
  onClick: () => void;
}

export default function YearButton({
  active,
  number,
  onClick,
}: YearButtonProps) {
  return (
    <button
      className={`tab tab-lg ${
        active ? "tab-active border-y border-darkGrey" : ""
      }`}
      onClick={onClick}
    >
      År {number + 1}
    </button>
  );
}
