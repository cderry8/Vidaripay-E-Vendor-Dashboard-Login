import { FC, useEffect, useState, useRef } from "react";
import { FiChevronDown } from "react-icons/fi";

interface DropdownProps {
  options: string[]; 
  selectedOption: string; 
  onSelect: (option: string) => void; 
}

const Dropdown: FC<DropdownProps> = ({ options, selectedOption, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-2 rounded-lg bg-white/30 backdrop-blur-md border border-gray-300 text-[#1e293b] shadow-sm transition"
      >
        <span>{selectedOption}</span>
        <FiChevronDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <ul className="absolute mt-1 w-full text-[#1e293b] bg-white/30 backdrop-blur-md border border-gray-300 rounded-lg shadow-lg z-10 overflow-hidden">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => { onSelect(option); setIsOpen(false); }}
              className={`px-4 py-2 cursor-pointer hover:bg-white/50 transition ${option === selectedOption ? "font-semibold text-[#41BC3F]" : "text-[#1e293b]"}`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
