
import React, { useState } from "react";

type Props = {
  type: string;
  name: string;
  handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  autoComplete: string;
  errors: string;
};

export default function FormInput({
  type,
  name,
  handler,
  value = "",
  autoComplete,
  errors,
}: Props): React.ReactNode {
  const [inputValue, setInputValue] = useState(value);
  const [error, setError] = useState(errors);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handler(event);
    setInputValue(event.target?.value);
    setError(errors);
  };
  return (
    <>
      <input
        type={type}
        id={name}
        className={`relative w-full px-4 py-2 border-b-2 border-b-black rounded pt-2 top-6 text-black
        `}
        value={inputValue}
        onChange={handleInputChange}
        autoComplete={autoComplete}
        required
        name={name}
      />
      <label
        htmlFor={name}
        className={`absolute transition-all duration-200 ease-in-out ${inputValue
          ? "top-1 left-5 text-xs text-black"
          : "top-[44px] left-7 -translate-y-1/2 text-gray-400"
          } `}
      >
        {name}
      </label>
      {error && <p className="absolute text-red-500 py-6">{error}</p>}
    </>
  );
}
