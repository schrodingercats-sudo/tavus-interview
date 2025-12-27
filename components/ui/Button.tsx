import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'win95' | 'brutalist';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-deep-black text-white px-6 py-2 rounded-sm hover:-translate-y-0.5 active:translate-y-0 shadow-none hover:shadow-hard-button border border-transparent",
    secondary: "bg-hot-pink text-deep-black border border-deep-black px-6 py-2 rounded-sm hover:shadow-hard-button hover:-translate-y-0.5",
    win95: "bg-gray-200 text-black border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black px-4 py-1 active:border-t-black active:border-l-black active:border-b-white active:border-r-white font-sans text-sm",
    brutalist: "bg-white text-black border-2 border-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};