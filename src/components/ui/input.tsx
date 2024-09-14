import React, { FC} from 'react';

interface InputProps {
  type: string;
  className: string
  placeholder?: string;
}

export const Input: FC<InputProps> = ({ type,placeholder, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
    />
  );
};
