interface ChipProps {
    color?: 'primary' | 'accent' | 'warn';
    label: string;
    onDelete?: () => void;
}

export const Chip: React.FC<ChipProps> = ({ color = 'primary', label, onDelete }) => {
    return (
        <div className={`inline-flex items-center bg-${color}-100 text-${color}-600 rounded-full p-2`}>
            <span>{label}</span>
            {onDelete && <button className="ml-2" onClick={onDelete}>×</button>}
        </div>
    );
}
