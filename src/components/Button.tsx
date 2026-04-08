import React from 'react';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  onClick,
  className = '',
  disabled = false,
  type = 'button'
}) => {
  const baseStyles = "px-6 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#C3B1E1] focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-[#4A0E4E] text-white hover:bg-[#3A0B3D] shadow-md hover:shadow-lg",
    secondary: "bg-[#C3B1E1] text-[#4A0E4E] hover:bg-[#A391C1] shadow-sm hover:shadow-md",
    outline: "bg-transparent border-2 border-[#4A0E4E] text-[#4A0E4E] hover:bg-[#4A0E4E] hover:text-white"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  return (
    <button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;