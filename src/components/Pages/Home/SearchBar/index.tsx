import React from 'react';

type SearchBarProps = {
  handleSubmit: (event: any) => void;
};

export const SearchBar = ({ handleSubmit }: SearchBarProps) => {
  return (
    <div className="max-w-2xl mx-auto">
      <form
        className="flex items-stretch justify-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          autoFocus
          autoComplete="off"
          name="search"
          className="flex-1 px-4 py-2 border border-primary/50 text-secondary focus:outline-none"
          placeholder="Search God..."
        />
        <button className="flex items-center justify-center w-16 transition-all duration-300 bg-primary hover:bg-secondary lg:w-20">
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
          </svg>
        </button>
      </form>
    </div>
  );
};
