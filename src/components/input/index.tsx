import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Input = ({ ...rest }: InputProps) => {
  return (
    <input
      type="text"
      className="mb-4 h-10 rounded-lg bg-slate-950 text-white p-4 border-[1px] border-gray-600 placeholder:text-slate-300"
      {...rest}
    />
  );
};

export const TextArea = ({ ...rest }: TextAreaProps) => {
  return <textarea {...rest} />;
};
