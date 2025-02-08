import React from 'react';
import { FaSearch } from 'react-icons/fa';

type SearchInputProps = {
  placeholder: string;
  value: string;
  onChange: (inputText: string) => void;
};

function SearchBar({
  placeholder,
  value,
  onChange,
}: SearchInputProps): React.JSX.Element {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value);
  };

  return (
    <div className="relative w-full group">
      <FaSearch
        className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${value ? 'text-gray-500' : 'text-gray-300'} group-focus-within:text-black`}
      />

      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`w-full pl-10 pr-4 py-2 rounded focus:outline-none border border-gray-300 ${value ? 'bg-gray-50' : 'bg-gray-100'} focus:bg-white ${value ? 'text-gray-500' : 'text-gray-300'} group-focus-within:text-black`}
      />
    </div>
  );
}

export default SearchBar;
