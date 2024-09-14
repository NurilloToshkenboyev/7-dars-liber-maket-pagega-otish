import React from 'react';

type ButtonProps = {
 
  type: "button" | "submit";
  onClick?: () => void;
   className?: string;
   children: string;
   startIcon?: JSX.Element;
  endIcon?: JSX.Element;
};

export const Button: React.FC<ButtonProps> = ({   type, onClick, children, className, startIcon, endIcon }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={ className}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
};
