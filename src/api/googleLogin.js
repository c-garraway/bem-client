const BASE_URL = 'http://localhost:10000';

export const  loginGoogleUser = async () => {
    window.open(`${BASE_URL}/google`, "_self");    
};

export const getGoogleUser = async (guser) => {
    const response = await fetch(`${BASE_URL}/google/getUser`,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "useroauthid": `${guser}`,
            })
        }) 
        const user = await response.json()
        return user

};