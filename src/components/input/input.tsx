import './input.scss';

interface IProps {
    type: string,
    setValue: Function,
    value: string | number,
    error?: boolean,
    label: string,
    htmlTitle : string,
}

export default function Input({type, setValue, value, error, label, htmlTitle}: IProps) {

    return (
        <div className="input-wrapper">
            {htmlTitle && <label htmlFor={htmlTitle}>{label}</label>}
            <input
                id={htmlTitle}
                className={error ? 'input-item error' : 'input-item'}
                onChange={(e) => setValue(e.target.value)}
                value={value}
                type={type}
            />
        </div>

    )
}