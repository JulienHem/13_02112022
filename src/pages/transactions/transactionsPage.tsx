import Table from "../../components/table/table";
import TransactionItem from "../../components/transactionItem/transactionItem";
import {useEffect, useLayoutEffect, useState} from "react";
import UserService from "../../services/user.service";
import {useNavigate, useParams} from "react-router-dom";
import useLogged from "../../customHooks/useCheckUser";
import {RootState} from "../../redux";
import {connect} from "react-redux";
import Transaction from "../../models/transaction";
import {TransactionReducer} from "../../redux/transactions/reducer";

interface IStatePropss {
    transactions: Transaction[]
}

function TransactionsPage({transactions} : IStatePropss) {

    useLogged();

    const params = useParams();
    const [transaction, setTransaction] = useState<Transaction>();

    useEffect(() => {
            setTransaction(transactions.find((res) => res.balanceId === parseInt(params.transactionId as string)))
    }, [params.transactionId])


    return (
        <div>
            <Table>
            </Table>
        </div>
    )
}

function mapStateToProps( state : RootState )
{
    return {
        transactions: state.transactions.content
    }
}

export default connect(mapStateToProps)( TransactionsPage )

