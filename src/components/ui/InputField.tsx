"use client"; 

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
interface InputFieldProps {
  placeholder: string;
  type?: "text" | "email" | "password";
  className?: string;

  [x: string]: any;  
}


const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ type = "text", placeholder, className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

    return (
      <div className="w-full max-w-md relative">
        <input
          ref={ref}
          type={type === "password" && !showPassword ? "password" : "text"}
          placeholder={placeholder}
          className={`w-full p-4 mt-2 pr-12 bg-[#f8fafc] text-[#171717] border-2 border-[#e0e7ff] rounded-lg focus:outline-none ${className}`}
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-4 top-[60%] transform -translate-y-1/2 cursor-pointer text-[#9e9e9e] focus:outline-none"
          >
            {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
          </button>
        )}
      </div>
    );
  }
);

export default InputField;
