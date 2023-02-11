const BASE_URL = process.env.REACT_APP_BASE_URL

export const  loginLocalUser = async (email, password) => {
    
    const response = await fetch(`${BASE_URL}/auth/login`,
    {
        method: 'POST',
        credentials: "include",
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
    const response = await fetch(`${BASE_URL}/auth/getUser`,
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