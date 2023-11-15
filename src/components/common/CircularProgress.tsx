import React from 'react';

interface CircularProgressBarProps {
  value: number; // 0 - 100
  color?: 'primary' | 'accent' | 'warn';
  diameter?: number; // in pixels
  label?: string;
}

export const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ value, color = 'primary', diameter = 100, label }) => {
  const radius = (diameter - 10) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg width={diameter} height={diameter} className="relative">
      <circle
        stroke="gray"
        fill="transparent"
        strokeWidth="5"
        r={radius}
        cx={diameter / 2}
        cy={diameter / 2}
      />
      <circle
        stroke={`bg-${color}`}
        fill="transparent"
        strokeWidth="5"
        strokeLinecap="round"
        r={radius}
        cx={diameter / 2}
        cy={diameter / 2}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={offset}
      />
      {label && <text x="50%" y="50%" dy=".3em" textAnchor="middle" className="absolute text-sm">{label}</text>}
    </svg>
  );
};
