import React from 'react';

interface ButtonProps {
    type: 'basic' | 'raised' | 'stroked' | 'flat' | 'icon' | 'fab';
    color: 'primary' | 'accent' | 'warn';
    onClick?: () => void;
    icon?: string; 
    children?: React.ReactNode 
}

export const Button: React.FC<ButtonProps> = ({ type, color, onClick, icon, children }) => {
    let baseClasses = 'py-2 px-4 rounded focus:outline-none focus:ring-2';

    let colorClasses;
    switch (color) {
        case 'primary':
            colorClasses = 'text-white bg-primary hover:bg-primary-dark';
            break;
        case 'accent':
            colorClasses = 'text-white bg-accent hover:bg-accent-dark';
            break;
        case 'warn':
            colorClasses = 'text-white bg-warn hover:bg-warn-dark';
            break;
    }

    switch (type) {
        case 'basic':
            return <button className={`${baseClasses} ${colorClasses}`} onClick={onClick}>{children}</button>;
        case 'raised':
            return <button className={`${baseClasses} ${colorClasses} shadow-md`} onClick={onClick}>{children}</button>;
        case 'stroked':
            return <button className={`${baseClasses} border-2 ${color}-border text-${color}`} onClick={onClick}>{children}</button>;
        case 'flat':
            return <button className={`text-${color} focus:ring-${color}`} onClick={onClick}>{children}</button>;
        case 'icon':
            return <button className={`text-${color} focus:ring-${color}`} onClick={onClick}><i className={`icon-${icon}`}></i></button>;
        case 'fab':
            return <button className={`rounded-full p-4 ${colorClasses} shadow-md`} onClick={onClick}><i className={`icon-${icon}`}></i></button>;
    }
}
