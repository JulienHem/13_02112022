import './button.scss'

interface IProps {
    label: string,
    handleClick: Function,
    color: 'primary' | 'secondary',
    size: 's' | 'm' | 'l',
}



export default function Button( { label, handleClick, color, size } : IProps) {

    const customSize = `size-${size}`;

    return (
        <div
            onClick={(e) => handleClick(e) }
            className={`btn ${color} ${customSize}`}>
            {label}
        </div>
    )
}
