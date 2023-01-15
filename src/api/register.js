const BASE_URL = 'https://bem-server.onrender.com'

export const  registerLocalUser = async (email, password, password2) => {
    
        const response = await fetch(`${BASE_URL}/users/register`,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "email": `${email}`,
                "password": `${password}`,
                "password2": `${password2}`,
            })
        }) 
        /* if(response === 'Unauthorized') {
            return 'Unauthorized';
        } */
        const user = await response.json()
        return user
};