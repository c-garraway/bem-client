const BASE_URL = 'https://bem-server.onrender.com';

export const  loginGoogleUser = async () => {
    window.open(`${BASE_URL}/google`, "_self"); 
    
};

export const getGoogleUser = async () => {
    const response = await fetch(`${BASE_URL}/google/getUser`,
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