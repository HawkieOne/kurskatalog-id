import React, { ChangeEvent, useState } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

interface SearchProps {
  onSearch: (searchTerm: string) => void;
}

export default function Search({ onSearch }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const isInputEmpty = (input: string) => input.length === 0;
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.currentTarget.blur();
    }
    onSearch(searchTerm);
  };

  return (
    <div className="form-control">
      <div className="input-group relative">
        <div className="relative">
          <form id="search-form">
            <input
              type="text"
              placeholder="Sök…"
              value={searchTerm}
              className="input bg-cream text-onyx justify-self-end rounded-l-xl rounded-none focus:border-pink focus:border-opacity-50 focus:outline-none border border-creamDark"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSearchTerm(e.target.value)
              }
              onKeyDown={handleKeyDown}
            />
          </form>
          {!isInputEmpty(searchTerm) && (
            <div
              className="p-1 absolute top-1/2 -translate-y-1/2 right-3 flex flex-col justify-center cursor-pointer text-onyx hover:bg-onyx hover:text-white hover:rounded-full"
              onClick={() => {
                setSearchTerm("");
                onSearch("");
              }}
            >
              <AiOutlineClose />
            </div>
          )}
        </div>
        <button
          className="btn btn-square bg-creamDark border-none hover:bg-onyx text-onyx hover:text-white"
          onClick={() => onSearch(searchTerm)}
        >
          <AiOutlineSearch size="1.5em" />
        </button>
      </div>
    </div>
  );
}
