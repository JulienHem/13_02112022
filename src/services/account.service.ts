import {mockedTransactionsData} from "../mockedData/transactions";
import AccountTransaction from "../models/accountTransaction";
import {mockedAccountData} from "../mockedData/account";
import Account from "../models/account";

function getAccountsData() {
    const datas = mockedAccountData;
    return datas.map((data) => new Account(data));
}

function getAccountTransactions() {
    const data = mockedTransactionsData;
    return data.map((res) => new AccountTransaction(res));
}

export default {
    getAccountsData,
    getAccountTransactions
}

