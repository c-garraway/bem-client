const BASE_URL = process.env.REACT_APP_BASE_URL

export const  getUserEntities = async (userID) => {

        if(userID){ 
            const response = await fetch(`${BASE_URL}/entities/${userID}`,
            {
                method: 'GET',
                credentials: "include",
            }) 
            const entities = await response.json();
            return entities;
        }
};

export const updateUserEntity = async (entityToUpdate) => {
    const response = await fetch(`${BASE_URL}/entities/${entityToUpdate.userID}`,
        {
            method: 'PUT',
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "id": `${entityToUpdate.id}`,
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
    const response = await fetch(`${BASE_URL}/entities/${entityToAdd.userID}`,
        {
            method: 'POST',
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
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