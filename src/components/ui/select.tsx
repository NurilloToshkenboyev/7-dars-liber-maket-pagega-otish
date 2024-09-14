import React, { FC, ChangeEvent } from 'react';

interface SelectProps {
  options: { value: string; label: string }[];
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
  className:string

}

export const Select: FC<SelectProps> = ({ options, onChange, value,  className }) => {
  return (
    <select value={value} onChange={onChange} className={className}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
