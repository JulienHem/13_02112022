import './button.scss'

interface IProps {
    label: string,
    handleClick: Function,
    color: string,
}

export default function Button( { label, handleClick, color, } : IProps) {

    const customClass = `${color}-btn`
    return (
        <div
            onClick={(e) => handleClick(e) }
            className={`btn ${customClass}`}>
            {label}
        </div>
    )
}