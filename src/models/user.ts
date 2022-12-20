export class User {
    public id: string;
    public email: string;
    public firstName: string;
    public lastName: string;
    public createdAt: string;
    public updatedAt: string;

    constructor(data: any) {
        this.id = data.id;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.email = data.email;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }
}
