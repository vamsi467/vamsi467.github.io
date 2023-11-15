import React from 'react';

interface BadgeProps {
    color?: 'primary' | 'accent' | 'warn';
    value: string | number;
    max?: number;  // for cases where you'd like to display "99+" if value exceeds max
}

export const Badge: React.FC<BadgeProps> = ({ color = 'primary', value, max }) => {
    let displayValue: string | number = value;

    if (max && typeof value === "number" && value > max) {
        displayValue = `${max}+`;
    }

    return (
        <span className={`inline-block text-xs px-2 py-1 rounded-full text-white bg-${color}`}>
            {displayValue}
        </span>
    );
}
