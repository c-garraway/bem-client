const BASE_URL = process.env.REACT_APP_BASE_URL

export const  getEntityCorporateFilings = async (entityID) => {

        if(entityID){ 
            const response = await fetch(`${BASE_URL}/cf/${entityID}`,
            {
                method: 'GET',
                credentials: "include",
            }) 
            const corporateFilings = await response.json();
            return corporateFilings;
        }
};

export const updateEntityCF = async (cfToUpdate) => {
    const response = await fetch(`${BASE_URL}/cf`,
        {
            method: 'PUT',
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "id": cfToUpdate.id,
                "entity": cfToUpdate.entity,
                "jurisdiction": cfToUpdate.jurisdiction,
                "subName": cfToUpdate.subName,
                "dueDate": cfToUpdate.dueDate,
                "confirmation": cfToUpdate.confirmation
              })
        }); 
        const corporateFiling = await response.json();
        return corporateFiling;

};

export const addEntityCF = async (cfToAdd) => {
    const response = await fetch(`${BASE_URL}/cf`,
        {
            method: 'POST',
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "entity": cfToAdd.entity,
                "jurisdiction": cfToAdd.jurisdiction,
                "subName": cfToAdd.subName,
                "dueDate": cfToAdd.dueDate,
                "confirmation": cfToAdd.confirmation
              })
        }); 
        const corporateFiling = await response.json();
        return corporateFiling;

};