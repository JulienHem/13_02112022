import Button from "../button/button";

import './accountItem.scss'
import Account from "../../models/account";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {mockedTransactionsData} from "../../mockedData/transactions";
import {setAccountTransaction} from "../../redux/accounts/actions";
import AccountTransaction from "../../models/accountTransaction";

interface IProps {
    account: Account | null,
}

export default function AccountItem({account}: IProps) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleCLick = () => {
        if(account) {
            const transactionsArray = mockedTransactionsData;
            navigate(`/profile/transaction/${account.id}`);
            const transactionData = (transactionsArray.find((transaction) => transaction.accountId === account.id) as AccountTransaction);
            dispatch(setAccountTransaction(transactionData))
        }
    }

    return (
        <div className='balance-item'>
            <div className="balance-item-start">
                <div className="title">{account?.title}</div>
                <div className="amount">{account?.amount}</div>
                <div className="subtitle">{account?.subTitle}</div>
            </div>
            <Button label={"View accounts"} handleClick={handleCLick} color={'primary'} size={'m'}/>

        </div>
    )
}
