import React from 'react';

export interface BadgeProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  text,
  variant = 'primary',
  className = ''
}) => {
  const baseStyles = "inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider";

  const variants = {
    primary: "bg-[#4A0E4E] text-white",
    secondary: "bg-[#C3B1E1] text-[#4A0E4E]",
    outline: "bg-transparent border border-[#4A0E4E] text-[#4A0E4E]"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  return (
    <span className={combinedClassName}>
      {text}
    </span>
  );
};

export default Badge;