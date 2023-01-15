const BASE_URL = 'https://bem-server.onrender.com'

export const  loginLocalUser = async (email, password) => {
    
    const response = await fetch(`${BASE_URL}/users/login`,
    {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "email": `${email}`,
            "password": `${password}`
        })
    }) 
    /* if(response === 'Unauthorized') {
        return 'Unauthorized';
    } */
    const user = await response.json()
    return user
};

export const getLocalUser = async () => {
    const response = await fetch(`${BASE_URL}/users/getUser`,
        {
            method: 'GET',
            credentials: "include",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true
            },
        })
        
        const user = await response.json()
        return user

};