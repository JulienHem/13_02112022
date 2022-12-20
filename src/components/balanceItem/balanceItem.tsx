import Button from "../button/button";

import './balanceItem.scss'
import Balance from "../../models/balance";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

interface IProps {
    balance: Balance,

}

export default function BalanceItem({balance} : IProps) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleCLick = () => {

        navigate(`/profile/transaction/${balance.transactionId}`);
        return
    }


    return (
        <div className='balance-item'>
            <div className="balance-item-start">
                <div className="title">{balance?.title}</div>
                <div className="amount">{balance?.amount}</div>
                <div className="subtitle">{balance?.subTitle}</div>
            </div>
            <Button label={"View transactions"} handleClick={handleCLick} color={'primary'} size={'m'} />

        </div>
    )
}
