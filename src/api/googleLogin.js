const BASE_URL = 'http://localhost:10000';

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
        /* .then((response) => {
            if(response.status === 200) return response.json();
            throw new Error('Authentication Failed')
        }).then(resObject => {
            return resObject;
        }).catch((err) => {
            console.log(err);
        }) */

};