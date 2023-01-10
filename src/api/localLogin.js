const BASE_URL = 'http://localhost:10000'

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