const BASE_URL = 'https://bem-server.onrender.com'

export const  getEntityDo = async (entityID) => {

        if(entityID){ 
            const response = await fetch(`${BASE_URL}/do/${entityID}`) 
            const dOs = await response.json();
            return dOs;
        }
};

export const updateEntityDo = async (doToUpdate) => {
    const response = await fetch(`${BASE_URL}/do`,
        {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "id": doToUpdate.id,
                "entity": doToUpdate.entity,
                "name": doToUpdate.name,
                "position": doToUpdate.position,
                "status": doToUpdate.status,
                "startDate": doToUpdate.startDate,
                "address": doToUpdate.address,
                "phone": doToUpdate.phone,
                "email": doToUpdate.email,
                "endDate": doToUpdate.endDate,
              })
        }); 
        const dO = await response.json();
        return dO;

};

export const addEntityDo = async (doToAdd) => {
    const response = await fetch(`${BASE_URL}/do`,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "entity": doToAdd.entity,
                "name": doToAdd.name,
                "position": doToAdd.position,
                "status": doToAdd.status,
                "startDate": doToAdd.startDate,
                "address": doToAdd.address,
                "phone": doToAdd.phone,
                "email": doToAdd.email,
                "endDate": doToAdd.endDate,
              })
        }); 
        const dO = await response.json();
        return dO;

};