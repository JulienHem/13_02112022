import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faPen} from "@fortawesome/free-solid-svg-icons";
import './transactionItem.scss';
import {useState} from "react";

interface IProps {
    date: string;
    description: string;
    amount: string;
    balance: string;
    type: string;
    category: string;
}

export default function TransactionItem({date, description, amount, balance, type, category}: IProps) {

    let [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div className={isOpen ? 'open table-line': 'table-line'}>
            <div className="table-line-content"
            >
                    <div onClick={() => setIsOpen(isOpen = !isOpen)}
                         style={{width: '10%'}}
                    >
                        <FontAwesomeIcon icon={faAngleDown}/>
                    </div>
                    <div style={{width: '15%'}}>{date}</div>
                    <div style={{width: '25%'}}>{description}</div>
                    <div style={{width: '20%'}}>{amount}</div>
                    <div style={{width: '20%'}}>{balance}</div>

            </div>
            <div className="table-more">
                <p>Transaction type: {type}</p>
                <p>Category: {category} <FontAwesomeIcon icon={faPen}/></p>
                <p>Notes: <FontAwesomeIcon icon={faPen}/></p>
            </div>

        </div>

    )
}
