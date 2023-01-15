const BASE_URL = 'https://bem-server.onrender.com'

export const  addUserProfile = async (email, firstName, lastName, companyName) => {
    
        const response = await fetch(`${BASE_URL}/users/addProfile`,
        {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "email": `${email}`,
                "firstName": `${firstName}`,
                "lastName": `${lastName}`,
                "companyName": `${companyName}`,
            })
        }) 
        /* if(response === 'Unauthorized') {
            return 'Unauthorized';
        } */
        const user = await response.json()
        return user
};