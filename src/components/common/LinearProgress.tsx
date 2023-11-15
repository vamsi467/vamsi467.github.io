import React from 'react';

interface LinearProgressProps {
  value: number; // 0 - 100
  color?: 'primary' | 'accent' | 'warn';
  label?: string;
}

export const LinearProgressBar: React.FC<LinearProgressProps> = ({ value, color = 'primary', label }) => {
  return (
    <div className="relative w-full h-4 bg-gray-200 rounded">
      <div className={`absolute top-0 left-0 h-4 rounded bg-${color} transition-all`} style={{ width: `${value}%` }}></div>
      {label && <span className="absolute inset-0 flex items-center justify-center text-sm">{label}</span>}
    </div>
  );
};
