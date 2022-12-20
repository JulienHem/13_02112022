const path = `http://localhost:3001/api/v1/user`;

async function login(email: string, password: string) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: email,
            password: password
        }),
    };
    try {
        const response = await fetch(`${path}/login`, requestOptions);
        const loginData = await response.json();
        return loginData.body.token
    } catch (e) {
        console.log(e)
    }
}

async function getUserWithToken(token: string) {

    const myHeaders = new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    });
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
    };

    try {
        const response = await fetch(`${path}/profile`, requestOptions);
        return await response.json();
    } catch (e) {
        console.log(e)
    }
}
export default {
    login,
    getUserWithToken,
}
