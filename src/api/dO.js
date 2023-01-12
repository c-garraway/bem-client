const BASE_URL = 'http://localhost:10000'

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