const BASE_URL = 'http://localhost:10000'

export const  logoutUser = async () => {
    
        const response = await fetch(`${BASE_URL}/users/logout`,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            /* body: JSON.stringify({
                "email": `${email}`,
                "password": `${password}`
            }) */
        }) 
        const user = await response.json()
        return user
};