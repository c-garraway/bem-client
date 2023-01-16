const BASE_URL = process.env.REACT_APP_BASE_URL

export const  getEntityCorporateJurisdictions = async (entityID) => {

        if(entityID){ 
            const response = await fetch(`${BASE_URL}/cj/${entityID}`) 
            const corporateJurisdictions = await response.json();
            return corporateJurisdictions;
        }
};

export const updateEntityCJ = async (cjToUpdate) => {
    const response = await fetch(`${BASE_URL}/cj`,
        {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "id": cjToUpdate.id,
                "entity": cjToUpdate.entity,
                "jurisdiction": cjToUpdate.jurisdiction,
                "status": cjToUpdate.status,
                "startDate": cjToUpdate.startDate,
                "endDate": cjToUpdate.endDate
              })
        }); 
        const corporateJurisdiction = await response.json();
        return corporateJurisdiction;

};

export const addEntityCJ = async (cjToAdd) => {
    const response = await fetch(`${BASE_URL}/cj`,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "entity": cjToAdd.entity,
                "jurisdiction": cjToAdd.jurisdiction,
                "status": cjToAdd.status,
                "startDate": cjToAdd.startDate,
                "endDate": cjToAdd.endDate
              })
        }); 
        const corporateJurisdiction = await response.json();
        return corporateJurisdiction;

};