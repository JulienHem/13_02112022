export default class Account {
    id: number;
    title: string;
    subTitle: string;
    amount: string;


    constructor(data: any) {
        this.id = data.id;
        this.amount = data.amount;
        this.title = data.title;
        this.subTitle = data.subTitle;
    }
}
