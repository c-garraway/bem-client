const BASE_URL = 'http://localhost:10000'

export const  logoutUser = async () => {
    
        const response = await fetch(`${BASE_URL}/users/logout`,
        {
            method: 'POST',
            credentials: "include",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true
            },
            /* body: JSON.stringify({
                "email": `${email}`,
                "password": `${password}`
            }) */
        }) 
        const user = await response.json()
        return user
};