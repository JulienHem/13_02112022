import Button from "../button/button";

import './balanceItem.scss'

interface IProps {
    title: string,
    amount: string,
    subTitle: string,
}

export default function BalanceItem({title, amount, subTitle} : IProps) {

    const handleCLick = () => {
        return
    }


    return (
        <div className='balance-item'>
            <div className="balance-item-start">
                <div className="title">{title}</div>
                <div className="amount">{amount}</div>
                <div className="subtitle">{subTitle}</div>
            </div>
            <Button label={"View transactions"} handleClick={handleCLick} color={'blue'} />

        </div>
    )
}