const BASE_URL = process.env.REACT_APP_BASE_URL

export const  registerLocalUser = async (email, password, password2) => {
    
        const response = await fetch(`${BASE_URL}/auth/register`,
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