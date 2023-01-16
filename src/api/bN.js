const BASE_URL = process.env.REACT_APP_BASE_URL

export const  getEntityBusinessNames = async (entityID) => {

        if(entityID){ 
            const response = await fetch(`${BASE_URL}/bn/${entityID}`) 
            const businessNames = await response.json();
            return businessNames;
        }
};

export const updateEntityBn = async (bnToUpdate) => {
    const response = await fetch(`${BASE_URL}/bn`,
        {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "id": bnToUpdate.id,
                "entity": bnToUpdate.entity,
                "businessName": bnToUpdate.businessName,
                "jurisdiction": bnToUpdate.jurisdiction,
                "address": bnToUpdate.address,
                "creationDate": bnToUpdate.creationDate,
                "status": bnToUpdate.status,
                "closeDate": bnToUpdate.closeDate
              })
        }); 
        const businessName = await response.json();
        return businessName;

};

export const addEntityBn = async (bnToAdd) => {
    const response = await fetch(`${BASE_URL}/bn`,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "entity": bnToAdd.entity,
                "businessName": bnToAdd.businessName,
                "jurisdiction": bnToAdd.jurisdiction,
                "address": bnToAdd.address,
                "creationDate": bnToAdd.creationDate,
                "status": bnToAdd.status,
                "closeDate": bnToAdd.closeDate
              })
        }); 
        const businessName = await response.json();
        return businessName;

};