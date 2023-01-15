const BASE_URL = 'https://bem-server.onrender.com'

export const  getUserEntities = async (userID) => {

        if(userID){ 
            const response = await fetch(`${BASE_URL}/entities/${userID}`) 
            const entities = await response.json();
            return entities;
        }
};

export const updateUserEntity = async (entityToUpdate) => {
    const response = await fetch(`${BASE_URL}/entities`,
        {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "id": `${entityToUpdate.id}`,
                "userID": `${entityToUpdate.userID}`,
                "name": `${entityToUpdate.name}`,
                "address": `${entityToUpdate.address}`,
                "dateCreated": `${entityToUpdate.dateCreated}`,
                "status": `${entityToUpdate.status}`,
                "corpID": `${entityToUpdate.corpID}`
              })
        }) 
        const entity = await response.json()
        return entity

};

export const addUserEntity = async (entityToAdd) => {
    const response = await fetch(`${BASE_URL}/entities`,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "userID": `${entityToAdd.userID}`,
                "name": `${entityToAdd.name}`,
                "address": `${entityToAdd.address}`,
                "dateCreated": `${entityToAdd.dateCreated}`,
                "status": `${entityToAdd.status}`,
                "corpID": `${entityToAdd.corpID}`
              })
        }) 
        const entity = await response.json()
        return entity

};