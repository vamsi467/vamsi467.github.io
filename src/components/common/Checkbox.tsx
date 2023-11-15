interface CheckboxProps {
    checked: boolean;
    color?: 'primary' | 'accent' | 'warn';
    onChange: (value: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked, color = 'primary', onChange }) => {
    return (
        <input 
            type="checkbox" 
            className={`form-checkbox text-${color} focus:border-${color} focus:ring-${color}`} 
            checked={checked} 
            onChange={e => onChange(e.target.checked)} 
        />
    );
}
