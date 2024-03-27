import React from "react";
import { classNames } from "../utils";

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  return (
    <input
      {...props}
      className={classNames(
        "block w-full rounded-xl focus:outline-none outline-zinc-400 border-0 py-2 px-3 bg-secondary text-white font-light placeholder:text-white/70",
        props.className || ""
      )}
    />
  );
};

export default Input;
