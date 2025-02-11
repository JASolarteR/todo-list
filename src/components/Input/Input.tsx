import React from "react";
import "./style.css"

type InputComponentProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string
} & Omit<React.ComponentPropsWithoutRef<"input">, "className">

export const Input = ({ onChange, value, ...props }:InputComponentProps) => {
  return <input onChange={onChange} value={value} {...props} className="input-style" />;
};
