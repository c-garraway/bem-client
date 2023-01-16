const BASE_URL = process.env.REACT_APP_BASE_URL

export const  loginGoogleUser = async () => {
    window.open(`${BASE_URL}/google`, "_self"); 
    
};

export const getGoogleUser = async () => {
    const response = await fetch(`${BASE_URL}/google/success`,
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