
import React from 'react';

interface MarkLineProps {
  color: string;
}

export const MarkLine: React.FC<MarkLineProps> = ({ color }) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12 20C7.02944 20 3 15.9706 3 12C3 8.02944 7.02944 4 12 4C16.9706 4 21 8.02944 21 12C21 15.9706 16.9706 20 12 20ZM13 7V13.5858L15.7071 16.2929L14.2929 17.7071L11 14.4142L11 7H13Z"
      fill={color}
    />
  </svg>
);
