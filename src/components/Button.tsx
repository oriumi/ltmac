import React from "react";

interface PropsType {
  value: string;
  className?: string;
}

const Button = ({ value, className }: PropsType) => {
  return (
    <button
      className={`${className} w-3/5 mt-3 p-3 cursor-pointer border-none text-base rounded-md bg-sky-900 text-white px-3 py-5 box-border transition-all min-w-[8rem]  disabled:cursor-wait opacity-50`}
    >
      {value}
    </button>
  );
};

export default Button;
