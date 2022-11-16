export class User {
    public id: number;
    public email: string;
    public firstName: string;
    public lastName: string;

    constructor(data: any) {
        this.id = data.id;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.email = data.email;

    }
}