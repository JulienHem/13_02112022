type transactionItems = {
    id: number,
    date: string,
    description: string,
    amount: string,
    balance: string,
    type: string,
}

export default class Transaction{

    public accountId : number;
    public items : transactionItems[];

    constructor(data: any) {

        this.accountId = data.accountId;
        this.items = data.items;

    }
}
