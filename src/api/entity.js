const BASE_URL = 'http://localhost:10000'

export const  getUserEntities = async (userID) => {

        if(userID){ 
            const response = await fetch(`${BASE_URL}/entities/${userID}`) 
            const entities = await response.json();
            return entities;
        }
};

export const updateUserEntity = async ({user}) => {
    const response = await fetch(`${BASE_URL}/entities`,
        {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "id": "user.id",
                "user_id": "user.user_id",
                "name": "user.name",
                "address": "user.address",
                "date_created": "user.date_created",
                "status": "user.status",
                "corp_id": "user.corp_id"
              })
        }) 
        const entity = await response.json()
        return entity

};

export const addUserEntity = async (user) => {
    const response = await fetch(`${BASE_URL}/entities`,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "user_id": `${user.user_id}`,
                "name": `${user.name}`,
                "address": `${user.address}`,
                "date_created": `${user.date_created}`,
                "status": `${user.status}`,
                "corp_id": `${user.corp_id}`
              })
        }) 
        const entity = await response.json()
        return entity

};