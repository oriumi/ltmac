import React from "react";

interface PropsType {
  label?: string;
  type: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  className?: string;
}

const Input = ({ label, type, name, className, ...inputProps }: PropsType) => {
  return (
    <>
      <label htmlFor={name} className="block mb-2 text-base">
        {label}
      </label>
      <input
        className={`${className} block border border-solid border-gray-400 p-3 mb-2 rounded-md bg-slate-100 transition-all focus:outline-none focus:border-gray-800 focus:bg-white focus:shadow-[0_0_0_3px_gray-800] hover:outline-none hover:border-gray-800 hover:bg-white hover:shadow-sm`}
        type={type}
        name={name}
        id={name}
        {...inputProps}
      />
    </>
  );
};

export default Input;
