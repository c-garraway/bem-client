import { createSlice } from "@reduxjs/toolkit";



const initialState = () => {
    return {
        currentEntity: [0],
        currentDO: [0],
        currentBN: [0],
        currentBNF: [0],
        currentCF: [0],
        entities: [
            {
                name: 'Furniture Corp',
                address: '1234 Second Street, Mississauga, ON',
                dateCreated: 'Sep 1, 1999',
                status: 'ACTIVE',
                corpID: '455FE6',
                jurisdictions: [
                    {
                        jurisdiction: 'BC',
                        startDate: 'Sep 1, 1999',
                        endDate: null
                    },
                    {
                        jurisdiction: 'MB',
                        startDate: 'Sep 1, 1999',
                        endDate: null
                    },
                    {
                        jurisdiction: 'ON',
                        startDate: 'Sep 1, 1999',
                        endDate: null
                    },
                    {
                        jurisdiction: 'PQ',
                        startDate: 'Sep 1, 1999',
                        endDate: null
                    },
                ],
                corporateFilings: [
                    {                
                        name: 'Furniture Corp',
                        jurisdiction: 'BC',
                        dueDate: 'Sep 1, 2000',
                        subName: 'Jane Doe',
                        confirmation: 'S:/filings/furniturcorp2000bc.pdf'                
                    },
                    {                
                        name: 'Furniture Corp',
                        jurisdiction: 'MB',
                        dueDate: 'Sep 1, 2000',
                        subName: 'Jane Doe',
                        confirmation: 'S:/filings/furniturcorp2000mb.pdf'                
                    },
                    {                
                        name: 'Furniture Corp',
                        jurisdiction: 'ON',
                        dueDate: 'Sep 1, 2000',
                        subName: 'Jane Doe',
                        confirmation: 'S:/filings/furniturcorp2000on.pdf'                
                    },
                    {                
                        name: 'Furniture Corp',
                        jurisdiction: 'PQ',
                        dueDate: 'Sep 1, 2000',
                        subName: 'Jane Doe',
                        confirmation: 'S:/filings/furniturcorp2000pq.pdf'                
                    }
                ],
                dO: [
                    {
                        name: 'John Doe',
                        position: 'CEO',
                        status: 'ACTIVE',
                        startDate: 'Sep 1, 1999',
                        address: '123 First Lane, Toronto, ON, CA',
                        phone: '555-555-5555',
                        email: 'jdoe@email.ca',
                        endDate: null
                    },
                    {
                        name: 'James Smith',
                        position: 'CFO',
                        status: 'ACTIVE',
                        startDate: 'Sep 1, 1999',
                        address: '123 First Lane, Toronto, ON, CA',
                        phone: '555-555-5555',
                        email: 'jsmith@email.ca',
                        endDate: null
                    },
                    {
                        name: 'Jane Doe',
                        position: 'Corporate Secretary',
                        status: 'ACTIVE',
                        startDate: 'Sep 1, 1999',
                        address: '123 First Lane, Toronto, ON, CA',
                        phone: '555-555-5555',
                        email: 'janedoe@email.ca',
                        endDate: null
                    },
                    {
                        name: 'Jackie Snow',
                        position: 'Director',
                        status: 'ACTIVE',
                        startDate: 'Sep 1, 1999',
                        address: '123 First Lane, Toronto, ON, CA',
                        phone: '555-555-5555',
                        email: 'jsnow@email.ca',
                        endDate: null
                    },
                    {
                        name: 'Catherine White',
                        position: 'Director',
                        status: 'ACTIVE',
                        startDate: 'Sep 1, 1999',
                        address: '123 First Lane, Toronto, ON, CA',
                        phone: '555-555-5555',
                        email: 'cwhite@email.ca',
                        endDate: null
                    }
                ],
                businessNames: [
                    {
                        businessName: 'The Brick',
                        jurisdiction: 'ON',
                        address: '',
                        creationDate: 'Sep 1, 2000',
                        status: 'ACTIVE',
                        closeDate: null
                    },
                    {
                        businessName: 'The Brick',
                        jurisdiction: 'BC',
                        address: '',
                        creationDate: 'Sep 1, 2000',
                        status: 'ACTIVE',
                        closeDate: null
                    },
                    {
                        businessName: 'Ethan Allen',
                        jurisdiction: 'ON',
                        address: '',
                        creationDate: 'Sep 1, 2000',
                        status: 'ACTIVE',
                        closeDate: null
                    },
                    {
                        businessName: 'Ethan Allen',
                        jurisdiction: 'BC',
                        address: '',
                        creationDate: 'Sep 1, 2000',
                        status: 'ACTIVE',
                        closeDate: null
                    }
                ],
                businessNameFilings: [                    
                    {
                        businessName: 'The Brick',
                        jurisdiction: 'ON',
                        subName: 'Jane Doe',
                        dueDate: 'Sep 1, 2000',
                        confirmation: 'S:/filings/thebrick2001on.pdf'
                    },
                    {
                        businessName: 'Ethan Allen',
                        jurisdiction: 'ON',
                        subName: 'Jane Doe',
                        dueDate: 'Sep 1, 2000',
                        confirmation: 'S:/filings/thebrick2001on.pdf'
                    },             
                    {
                        businessName: 'The Brick',
                        jurisdiction: 'BC',
                        subName: 'Jane Doe',
                        dueDate: 'Sep 1, 2000',
                        confirmation: 'S:/filings/thebrick2001on.pdf'
                    },
                    {
                        businessName: 'Ethan Allen',
                        jurisdiction: 'BC',
                        subName: 'Jane Doe',
                        dueDate: 'Sep 1, 2000',
                        confirmation: 'S:/filings/thebrick2001on.pdf'
                    },
                ]       
                
            },
            {
                name: 'Furniture Corp 2',
                address: '234 Second Street, Mississauga, ON',
                dateCreated: 'Sep 1, 1999',
                status: 'ACTIVE',
                corpID: '455FE6',
                jurisdictions: [
                    {
                        jurisdiction: 'BC 2',
                        startDate: 'Sep 1, 1999',
                        endDate: null
                    },
                    {
                        jurisdiction: 'MB',
                        startDate: 'Sep 1, 1999',
                        endDate: null
                    },
                    {
                        jurisdiction: 'ON',
                        startDate: 'Sep 1, 1999',
                        endDate: null
                    },
                    {
                        jurisdiction: 'PQ',
                        startDate: 'Sep 1, 1999',
                        endDate: null
                    },
                ],
                corporateFilings: [
                    {                
                        name: 'Furniture Corp',
                        jurisdiction: 'BC 2',
                        dueDate: 'Sep 1, 2000',
                        subName: 'Jane Doe',
                        confirmation: 'S:/filings/furniturcorp2000bc.pdf'                
                    },
                    {                
                        name: 'Furniture Corp',
                        jurisdiction: 'MB',
                        dueDate: 'Sep 1, 2000',
                        subName: 'Jane Doe',
                        confirmation: 'S:/filings/furniturcorp2000mb.pdf'                
                    },
                    {                
                        name: 'Furniture Corp',
                        jurisdiction: 'ON',
                        dueDate: 'Sep 1, 2000',
                        subName: 'Jane Doe',
                        confirmation: 'S:/filings/furniturcorp2000on.pdf'                
                    },
                    {                
                        name: 'Furniture Corp',
                        jurisdiction: 'PQ',
                        dueDate: 'Sep 1, 2000',
                        subName: 'Jane Doe',
                        confirmation: 'S:/filings/furniturcorp2000pq.pdf'                
                    }
                ],
                dO: [
                    {
                        name: 'John Doe 2',
                        position: 'CEO',
                        address: '123 First Lane, Toronto, ON, CA',
                        email: 'jdoe@email.ca',
                        phone: '555-555-5555'
                    },
                    {
                        name: 'James Smith',
                        position: 'CFO',
                        address: '123 First Lane, Toronto, ON, CA',
                        email: 'jsmith@email.ca',
                        phone: '555-555-5555'
                    },
                    {
                        name: 'Jane Doe',
                        position: 'Corporate Secretary',
                        address: '123 First Lane, Toronto, ON, CA',
                        email: 'janedoe@email.ca',
                        phone: '555-555-5555'
                    },
                    {
                        name: 'Jackie Snow',
                        position: 'Director',
                        address: '123 First Lane, Toronto, ON, CA',
                        email: 'jsnow@email.ca',
                        phone: '555-555-5555'
                    },
                    {
                        name: 'Catherine White',
                        position: 'Director',
                        address: '123 First Lane, Toronto, ON, CA',
                        email: 'cwhite@email.ca',
                        phone: '555-555-5555'
                    }
                ],
                businessNames: [
                    {
                        businessName: 'The Brick 2',
                        jurisdiction: 'ON',
                        address: '',
                        creationDate: 'Sep 1, 2000',
                        status: 'ACTIVE',
                        closeDate: null
                    },
                    {
                        businessName: 'The Brick',
                        jurisdiction: 'BC',
                        address: '',
                        creationDate: 'Sep 1, 2000',
                        status: 'ACTIVE',
                        closeDate: null
                    },
                    {
                        businessName: 'Ethan Allen',
                        jurisdiction: 'ON',
                        address: '',
                        creationDate: 'Sep 1, 2000',
                        status: 'ACTIVE',
                        closeDate: null
                    },
                    {
                        businessName: 'Ethan Allen',
                        jurisdiction: 'BC',
                        address: '',
                        creationDate: 'Sep 1, 2000',
                        status: 'ACTIVE',
                        closeDate: null
                    }
                ],
                businessNameFilings: [                    
                    {
                        businessName: 'The Brick 2',
                        jurisdiction: 'ON',
                        subName: 'Jane Doe',
                        dueDate: 'Sep 1, 2000',
                        confirmation: 'S:/filings/thebrick2001on.pdf'
                    },
                    {
                        businessName: 'Ethan Allen',
                        jurisdiction: 'ON',
                        subName: 'Jane Doe',
                        dueDate: 'Sep 1, 2000',
                        confirmation: 'S:/filings/thebrick2001on.pdf'
                    },             
                    {
                        businessName: 'The Brick',
                        jurisdiction: 'BC',
                        subName: 'Jane Doe',
                        dueDate: 'Sep 1, 2000',
                        confirmation: 'S:/filings/thebrick2001on.pdf'
                    },
                    {
                        businessName: 'Ethan Allen',
                        jurisdiction: 'BC',
                        subName: 'Jane Doe',
                        dueDate: 'Sep 1, 2000',
                        confirmation: 'S:/filings/thebrick2001on.pdf'
                    },
                ]       
                
            },
            {
                name: 'Furniture Corp 3',
                address: '34 Second Street, Mississauga, ON',
                dateCreated: 'Sep 1, 1999',
                status: 'ACTIVE',
                corpID: '455FE6',
                jurisdictions: [
                    {
                        jurisdiction: 'BC 3',
                        startDate: 'Sep 1, 1999',
                        endDate: null
                    },
                    {
                        jurisdiction: 'MB',
                        startDate: 'Sep 1, 1999',
                        endDate: null
                    },
                    {
                        jurisdiction: 'ON',
                        startDate: 'Sep 1, 1999',
                        endDate: null
                    },
                    {
                        jurisdiction: 'PQ',
                        startDate: 'Sep 1, 1999',
                        endDate: null
                    },
                ],
                corporateFilings: [
                    {                
                        name: 'Furniture Corp',
                        jurisdiction: 'BC 3',
                        dueDate: 'Sep 1, 2000',
                        subName: 'Jane Doe',
                        confirmation: 'S:/filings/furniturcorp2000bc.pdf'                
                    },
                    {                
                        name: 'Furniture Corp',
                        jurisdiction: 'MB',
                        dueDate: 'Sep 1, 2000',
                        subName: 'Jane Doe',
                        confirmation: 'S:/filings/furniturcorp2000mb.pdf'                
                    },
                    {                
                        name: 'Furniture Corp',
                        jurisdiction: 'ON',
                        dueDate: 'Sep 1, 2000',
                        subName: 'Jane Doe',
                        confirmation: 'S:/filings/furniturcorp2000on.pdf'                
                    },
                    {                
                        name: 'Furniture Corp',
                        jurisdiction: 'PQ',
                        dueDate: 'Sep 1, 2000',
                        subName: 'Jane Doe',
                        confirmation: 'S:/filings/furniturcorp2000pq.pdf'                
                    }
                ],
                dO: [
                    {
                        name: 'John Doe  3',
                        position: 'CEO',
                        address: '123 First Lane, Toronto, ON, CA',
                        email: 'jdoe@email.ca',
                        phone: '555-555-5555'
                    },
                    {
                        name: 'James Smith',
                        position: 'CFO',
                        address: '123 First Lane, Toronto, ON, CA',
                        email: 'jsmith@email.ca',
                        phone: '555-555-5555'
                    },
                    {
                        name: 'Jane Doe',
                        position: 'Corporate Secretary',
                        address: '123 First Lane, Toronto, ON, CA',
                        email: 'janedoe@email.ca',
                        phone: '555-555-5555'
                    },
                    {
                        name: 'Jackie Snow',
                        position: 'Director',
                        address: '123 First Lane, Toronto, ON, CA',
                        email: 'jsnow@email.ca',
                        phone: '555-555-5555'
                    },
                    {
                        name: 'Catherine White',
                        position: 'Director',
                        address: '123 First Lane, Toronto, ON, CA',
                        email: 'cwhite@email.ca',
                        phone: '555-555-5555'
                    }
                ],
                businessNames: [
                    {
                        businessName: 'The Brick 3',
                        jurisdiction: 'ON',
                        address: '',
                        creationDate: 'Sep 1, 2000',
                        status: 'ACTIVE',
                        closeDate: null
                    },
                    {
                        businessName: 'The Brick',
                        jurisdiction: 'BC',
                        address: '',
                        creationDate: 'Sep 1, 2000',
                        status: 'ACTIVE',
                        closeDate: null
                    },
                    {
                        businessName: 'Ethan Allen',
                        jurisdiction: 'ON',
                        address: '',
                        creationDate: 'Sep 1, 2000',
                        status: 'ACTIVE',
                        closeDate: null
                    },
                    {
                        businessName: 'Ethan Allen',
                        jurisdiction: 'BC',
                        address: '',
                        creationDate: 'Sep 1, 2000',
                        status: 'ACTIVE',
                        closeDate: null
                    }
                ],
                businessNameFilings: [                    
                    {
                        businessName: 'The Brick 3',
                        jurisdiction: 'ON',
                        subName: 'Jane Doe',
                        dueDate: 'Sep 1, 2000',
                        confirmation: 'S:/filings/thebrick2001on.pdf'
                    },
                    {
                        businessName: 'Ethan Allen',
                        jurisdiction: 'ON',
                        subName: 'Jane Doe',
                        dueDate: 'Sep 1, 2000',
                        confirmation: 'S:/filings/thebrick2001on.pdf'
                    },             
                    {
                        businessName: 'The Brick',
                        jurisdiction: 'BC',
                        subName: 'Jane Doe',
                        dueDate: 'Sep 1, 2000',
                        confirmation: 'S:/filings/thebrick2001on.pdf'
                    },
                    {
                        businessName: 'Ethan Allen',
                        jurisdiction: 'BC',
                        subName: 'Jane Doe',
                        dueDate: 'Sep 1, 2000',
                        confirmation: 'S:/filings/thebrick2001on.pdf'
                    },
                ]       
                
            }
        ]
    }
}



const entityDataSlice = createSlice({
    name: 'entityData',
    initialState: initialState(),
    reducers: {
        resetEntityData: () => initialState(),
        addNewEntity: (state, action) => {
            state.entities.push(action.payload);
        },
        setCurrentEntity: (state, action) => {
            state.currentEntity = action.payload;
        },
        setCurrentDO: (state, action) => {
            state.currentDO = action.payload;
        },
        setCurrentBN: (state, action) => {
            state.currentBN = action.payload;
        },
        setCurrentBNF: (state, action) => {
            state.currentBNF = action.payload;
        },
        setCurrentCF: (state, action) => {
            state.currentCF = action.payload;
        },
        addNewDO: (state, action) => {
            state.entities[state.currentEntity].dO.push(action.payload)
        },
        addNewBN: (state, action) => {
            state.entities[state.currentEntity].businessNames.push(action.payload)
        },
        addNewBNF: (state, action) => {
            state.entities[state.currentEntity].businessNameFilings.push(action.payload)
        },
        addNewCF: (state, action) => {
            state.entities[state.currentEntity].corporateFilings.push(action.payload)
        },
        updateDO: (state, action) => {
            state.entities[state.currentEntity].dO[state.currentDO] = action.payload
        },
        updateBN: (state, action) => {
            state.entities[state.currentEntity].dO[state.currentBN] = action.payload
        },
        updateBNF: (state, action) => {
            state.entities[state.currentEntity].dO[state.currentBNF] = action.payload
        },
        updateCF: (state, action) => {
            state.entities[state.currentEntity].dO[state.currentCF] = action.payload
        }
    }
});

export const {resetEntityData, addNewEntity, addNewDO, setCurrentEntity, addNewBN, addNewBNF, addNewCF, setCurrentDO, updateDO, setCurrentBN, updateBN, setCurrentBNF, updateBNF, setCurrentCF, updateCF} = entityDataSlice.actions
export const selectEntityData = (state) => state.entityData.entities
export const selectCurrentEntity = (state) => state.entityData.currentEntity
export default entityDataSlice.reducer