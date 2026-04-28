import React, { useRef, useEffect, useContext } from "react";
import { ThemeContext } from "./ThemeContext";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleClear = () => {
    setSearchTerm("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="flex justify-center items-center gap-3 w-full max-w-lg mx-auto mb-10 relative">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <span className="text-[#C3B1E1]">🔍</span>
        </div>
        <input
          ref={inputRef}
          type="text"
          placeholder="მოძებნეთ კერძი (მაგ: ხაჭაპური)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`w-full pl-12 pr-4 py-3 rounded-full border-2 focus:outline-none focus:ring-4 transition-all shadow-sm ${theme === 'light'
              ? 'bg-white border-[#EADDF8] focus:border-[#4A0E4E] focus:ring-[#C3B1E1]/30 text-gray-700'
              : 'bg-[#2a2a2a] border-gray-700 focus:border-[#C3B1E1] focus:ring-purple-900/40 text-white placeholder-gray-400'
            }`}
        />
      </div>

      {searchTerm.length > 0 && (
        <button
          onClick={handleClear}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-full transition-colors duration-200 font-bold shadow-md absolute right-0 flex items-center justify-center"
          title="გასუფთავება"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchBar;