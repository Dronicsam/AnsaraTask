"use client";

import { useState, useEffect, InputHTMLAttributes } from "react";

type InputProps<T> = InputHTMLAttributes<T> & {
  widthProp?: number;
};

export const Input = <T extends HTMLInputElement>({
  widthProp,
  ...props
}: InputProps<T>) => {
  const [width, setWidth] = useState("full");
  useEffect(() => {
    if (typeof widthProp === "number") {
      setWidth(String(widthProp));
    }
  }, [widthProp]);
  return (
    <div className="group">
      <input
        className={`rounded-lg h-11 w-${width}  bg-white/10 placeholder-white px-3 hover:border-2 hover:border-white/20 focus:border-[#547CFB] focus:border-1 focus:outline-none`}
        {...props}
      />
    </div>
  );
};
