import React, { ChangeEvent, useState } from "react";
import { onSearch } from "../shared/functions";
import { Course } from "../shared/interfaces";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

interface SearchProps {
  allCourses: Course[];
  setSearchedCourses: React.Dispatch<React.SetStateAction<any>>;
}

export default function Search({
  allCourses,
  setSearchedCourses,
}: SearchProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const isInputEmpty = (input: string) => input.length === 0;
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.currentTarget.blur();
    }
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
              className="input bg-whiteBackground text-onyx justify-self-end rounded-l-xl rounded-none focus:border-lightSeaGreen 
                        focus:border-opacity-50 focus:outline-none border border-darkGrey dark:bg-darkModeLight dark:text-white"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setSearchedCourses(onSearch(e.target.value, allCourses));
                setSearchTerm(e.target.value);
              }}
              onKeyDown={handleKeyDown}
            />
          </form>
          {!isInputEmpty(searchTerm) && (
            <div
              className="p-1 absolute top-1/2 -translate-y-1/2 right-3 flex flex-col justify-center cursor-pointer text-onyx hover:bg-onyx hover:text-white hover:rounded-full"
              onClick={() => {
                setSearchTerm("");
                setSearchedCourses(allCourses);
              }}
            >
              <AiOutlineClose />
            </div>
          )}
        </div>
        <button
          className="btn btn-square bg-darkGrey border-none hover:bg-lightSeaGreen text-whiteBackground hover:text-darkGrey"
          onClick={() => setSearchedCourses(onSearch(searchTerm, allCourses))}
        >
          <AiOutlineSearch size="1.5em" />
        </button>
      </div>
    </div>
  );
}
