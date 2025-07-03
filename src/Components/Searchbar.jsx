import React from "react";
import { Search, X } from "lucide-react";

function SearchBar({ value, onChange, onClear }) {
  return (
    <div className="relative w-full">
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-0 pl-3  flex items-center pointer-events-none">
        <Search className="text-[#979797] w-5 h-5  xl:h-[36px] xl:w-[36px] " />
      </div>

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search..."
        className=" w-full xl:h-[70px] xl:text-2xl border-2 border-[#979797] xl:pl-16 pl-10 pr-10 py-2 rounded-lg bg-[#FFFFFF] text-[#979797] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-700 transition"
      />

      {/* Clear Button (X) */}
      {value && (
        <button
          onClick={onClear}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-[#979797]"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
