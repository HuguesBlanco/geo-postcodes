import React from 'react';

type SearchInputProps = {
  placeholder: string;
  onChange: (inputText: string) => void;
};

function SearchBar({
  placeholder,
  onChange,
}: SearchInputProps): React.JSX.Element {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value);
  };

  return (
    <input type="text" onChange={handleChange} placeholder={placeholder} />
  );
}

export default SearchBar;
