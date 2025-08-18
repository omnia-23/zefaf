import { useEffect, useRef, useState } from "react";

interface DropdownOption {
  label: string;
  value: string;
}

export const Dropdown = ({
  options,
  value,
  onChange,
  placeholder,
}: {
  options: DropdownOption[];
  value: string; // Changed from object to string
  onChange: (value: string) => void;
  placeholder: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedOption = options.find(option => option.value === value);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="w-full p-2 md:p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm md:text-base cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption?.label || placeholder}</span>
        <svg
          className="w-4 h-4 md:w-5 md:h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {options.map((option, index) => (
            <div
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer text-sm md:text-base"
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};