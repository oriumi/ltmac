import React from "react";

interface PropsType {
  message: string;
}

const ErrorMessage = ({ message }: PropsType) => {
  return <p className="text-red-400 mt-1 pb-2 text-base">{message}</p>;
};

export default ErrorMessage;
