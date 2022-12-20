import {mockedTransactionsData} from "../mockedData/transactions";
import Transaction from "../models/transaction";

async function getTransactions() {
    const data = mockedTransactionsData;
    return data.map((res) => new Transaction(res));
}

export default {
    getTransactions
}

