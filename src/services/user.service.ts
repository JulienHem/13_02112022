import User from "../models/user";

const path = `http://localhost:3001`;

async function login(email: string, password: string) {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: email,
            password: password
        }),
    };
    try {
        const response = await fetch(`http://localhost:3001/user/login`, requestOptions);
        console.log(email, password);
        const data = await response.json();
        console.log(data);
        return new User(data);
    } catch (e) {
        console.log(e)
    }

}

export default {
    login,
}