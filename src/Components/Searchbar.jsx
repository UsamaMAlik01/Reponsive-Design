import React from "react";
import { Search, X } from "lucide-react";

function SearchBar({ value, onChange, onClear }) {
  return (
    <div className="relative w-full">
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="text-[#979797] w-5 h-5 lg:h-[18px] lg:w-[18px]" />
      </div>

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search..."
        className="w-full lg:h-[35px] lg:text-sm border-2 border-[#979797] lg:pl-8 pl-10 pr-10 py-2 rounded-lg bg-[#FFFFFF] text-[#979797] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-700 transition"
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
