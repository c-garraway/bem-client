const BASE_URL = process.env.REACT_APP_BASE_URL

export const  getEntityBusinessNameFilings = async (entityID) => {

        if(entityID){ 
            const response = await fetch(`${BASE_URL}/bnf/${entityID}`,
            {
                method: 'GET',
                credentials: "include",
            }) 
            const businessNameFilings = await response.json();
            return businessNameFilings;
        }
};

export const updateEntityBNF = async (bnfToUpdate) => {
    const response = await fetch(`${BASE_URL}/bnf`,
        {
            method: 'PUT',
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "id": bnfToUpdate.id,
                "entity": bnfToUpdate.entity,
                "businessName": bnfToUpdate.businessName,
                "jurisdiction": bnfToUpdate.jurisdiction,
                "subName": bnfToUpdate.subName,
                "dueDate": bnfToUpdate.dueDate,
                "confirmation": bnfToUpdate.confirmation
              })
        }); 
        const businessNameFiling = await response.json();
        return businessNameFiling;

};

export const addEntityBNF = async (bnfToAdd) => {
    const response = await fetch(`${BASE_URL}/bnf`,
        {
            method: 'POST',
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "entity": bnfToAdd.entity,
                "businessName": bnfToAdd.businessName,
                "jurisdiction": bnfToAdd.jurisdiction,
                "subName": bnfToAdd.subName,
                "dueDate": bnfToAdd.dueDate,
                "confirmation": bnfToAdd.confirmation
              })
        }); 
        const businessNameFiling = await response.json();
        return businessNameFiling;

};