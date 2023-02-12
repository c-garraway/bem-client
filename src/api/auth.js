const BASE_URL = process.env.REACT_APP_BASE_URL

//GOOGLE USER
export const  loginGoogleUser = async () => {
    window.open(`${BASE_URL}/auth`, "_self"); 
    
};

//LOCAL USER
export const  loginLocalUser = async (email, password) => {
    
    const response = await fetch(`${BASE_URL}/auth/login`,
        {
            method: 'POST',
            credentials: "include",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true
            },
            body: JSON.stringify({
                "email": `${email}`,
                "password": `${password}`
            })
        }
    ) 

    const user = await response.json()
    return user
};

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
        }
    )

    const user = await response.json()
    return user
};

//GLOBAL USER
export const getUser = async () => {
    const response = await fetch(`${BASE_URL}/auth/getUser`,
        {
            method: 'GET',
            credentials: "include",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true
            },
        }
    )
        
    const user = await response.json()
    return user
};

export const  addUserProfile = async (email, firstName, lastName, companyName) => {
    
    const response = await fetch(`${BASE_URL}/auth/addProfile`,
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
        }
    ) 

    const user = await response.json()
    return user
};

export const  logoutUser = async () => {
    
    const response = await fetch(`${BASE_URL}/auth/logout`,
        {
            method: 'POST',
            credentials: "include",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true
            },
        }
    ) 

    const user = await response.json()
    return user
};