import AccountItem from "../accountItem/accountItem";
import {RootState} from "../../redux";
import {connect} from "react-redux";
import Account from "../../models/account";
import {useEffect} from "react";

interface IStateProps {
    accounts: Account[] | null;
}

function AccountList({accounts} : IStateProps) {

    useEffect(() => {
        if(accounts) {
            console.log('#########', accounts)
        }
    }, [])

    return (
        <div>
            {
                <>
                    <AccountItem account={accounts && accounts[0]} />
                    <AccountItem account={accounts && accounts[1]} />
                    <AccountItem account={accounts && accounts[2]} />
                </>

            }
        </div>
    )
}

function mapStateToProps( state : RootState )
{
    return {
        accounts: state.account.selectedAccounts
    }
}

export default connect(mapStateToProps)( AccountList )


