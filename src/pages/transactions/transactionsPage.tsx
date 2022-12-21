import Table from "../../components/table/table";
import TransactionItem from "../../components/transactionItem/transactionItem";
import useLogged from "../../customHooks/useCheckUser";
import {RootState} from "../../redux";
import {connect} from "react-redux";
import AccountTransaction from "../../models/accountTransaction";
import './transactionPage.scss'

interface IStateProps {
    transaction: AccountTransaction | null;
}

function TransactionsPage({transaction} : IStateProps) {

    useLogged();

    console.log(transaction)

    return (
        <div className="transaction-page">
            <Table>
                {
                    transaction?.items.map((item) => {
                        return (
                            <TransactionItem key={`transaction-item-${item.id}`} date={item.date} description={item.description} amount={item.amount} balance={item.balance} type={item.type} category={item.category} />
                        )
                    })
                }
            </Table>
        </div>
    )
}

function mapStateToProps( state : RootState )
{
    return {
        transaction: state.account.selectedTransaction
    }
}

export default connect(mapStateToProps)( TransactionsPage )

