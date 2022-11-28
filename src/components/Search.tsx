import React, { ChangeEvent, useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";

interface SearchProps {
  onSearch: (searchTerm: string) => void;
}

export default function Search({ onSearch }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const isInputEmpty = (input: string) => input.length === 0;
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSearch(searchTerm)
    }
  }

  return (
    <div className="form-control">
      <div className="input-group relative">
        <div className='relative'>
          <form id="search-form">
            <input
              type="text"
              placeholder="Sök…"
              value={searchTerm}
              className="input input-bordered bg-cream text-onyx justify-self-end rounded-l-xl rounded-none focus:border-onyx focus:outline-none"
              onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </form>
          {!isInputEmpty(searchTerm) &&
            <div className='p-1 absolute top-1/2 -translate-y-1/2 right-3 flex flex-col justify-center cursor-pointer text-onyx hover:bg-onyx hover:text-white hover:rounded-full'
                onClick={() => setSearchTerm("")}>
              <AiOutlineClose />
            </div>}
        </div>
        <button className="btn btn-square bg-creamDark border-none hover:bg-onyx" onClick={() => onSearch(searchTerm)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
      </div>
    </div>
  )
}
