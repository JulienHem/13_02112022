import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import './transactionItem.scss';

interface IProps {
    date: string;
    description: string;
    amount: string;
    balance: string;
}

export default function TransactionItem({date, description, amount, balance} : IProps) {

    return(
        <tr>
            <td><FontAwesomeIcon icon={faAngleDown} /></td>
            <td>{date}</td>
            <td>{description}</td>
            <td>{amount}</td>
            <td>{balance}</td>
        </tr>
    )
}
