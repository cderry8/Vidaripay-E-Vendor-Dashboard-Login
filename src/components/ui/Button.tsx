"use client"; 

import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  size?: 'small' | 'medium' | 'large'; 
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  icon,
  iconPosition = 'right',
  className,
  size = 'medium',
}) => {
  
  const sizeClasses = {
    small: 'py-2 px-8 text-sm', 
    medium: 'py-3 px-10 text-base', 
    large: 'py-4 px-12 text-lg', 
  };

  return (
    <button
      onClick={onClick}
      className={`bg-[#d6670e]  text-white rounded-lg flex items-center justify-center space-x-2 hover:bg-[#c85b0b] transition duration-300 ease-in-out ${sizeClasses[size]} ${className}`}
    >
      {icon && iconPosition === 'left' && <span className="mr-1">{icon}</span>}
      <span>{text}</span>
      {icon && iconPosition === 'right' && <span className="ml-1">{icon}</span>}
    </button>
  );
};

export default Button;
