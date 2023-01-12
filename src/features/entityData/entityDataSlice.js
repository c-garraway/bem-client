import { createSlice } from "@reduxjs/toolkit";

/* const guestUserData = [{
    name: 'Furniture Corp 1',
    address: '1234 Second Street, Mississauga, ON',
    dateCreated: '1999-09-01',
    status: 'ACTIVE',
    corpID: '455FE6',
    corporateJurisdictions: [
        
        {
            jurisdiction: 'MB',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            endDate: null
        },
        {
            jurisdiction: 'ON',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            endDate: null
        },
        {
            jurisdiction: 'PQ',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            endDate: null
        },
        {
            jurisdiction: 'BC',
            status: 'INACTIVE',
            startDate: '1999-09-01',
            endDate: '2005-09-01'
        },
    ],
    corporateFilings: [
        {                
            name: 'Furniture Corp',
            jurisdiction: 'BC',
            dueDate: '2000-09-01',
            subName: 'Jane Doe',
            confirmation: 'S:/filings/furniturcorp2000bc.pdf'                
        },
        {                
            name: 'Furniture Corp',
            jurisdiction: 'MB',
            dueDate: '2000-09-01',
            subName: 'Jane Doe',
            confirmation: 'S:/filings/furniturcorp2000mb.pdf'                
        },
        {                
            name: 'Furniture Corp',
            jurisdiction: 'ON',
            dueDate: '2000-09-01',
            subName: 'Jane Doe',
            confirmation: 'S:/filings/furniturcorp2000on.pdf'                
        },
        {                
            name: 'Furniture Corp',
            jurisdiction: 'PQ',
            dueDate: '2000-09-01',
            subName: 'Jane Doe',
            confirmation: 'S:/filings/furniturcorp2000pq.pdf'                
        }
    ],
    dO: [
        {
            name: 'John Doe',
            position: 'CEO',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            address: '123 First Lane, Toronto, ON, CA',
            phone: '555-555-5555',
            email: 'jdoe@email.ca',
            endDate: null
        },
        {
            name: 'James Smith',
            position: 'CFO',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            address: '123 First Lane, Toronto, ON, CA',
            phone: '555-555-5555',
            email: 'jsmith@email.ca',
            endDate: null
        },
        {
            name: 'Jane Doe',
            position: 'Corporate Secretary',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            address: '123 First Lane, Toronto, ON, CA',
            phone: '555-555-5555',
            email: 'janedoe@email.ca',
            endDate: null
        },
        {
            name: 'John Snow',
            position: 'Director',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            address: '123 First Lane, Toronto, ON, CA',
            phone: '555-555-5555',
            email: 'jsnow@email.ca',
            endDate: null
        },
        {
            name: 'Catherine White',
            position: 'Director',
            status: 'ACTIVE',
            startDate: '1999-09-01',
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
            creationDate: '2000-09-01',
            status: 'ACTIVE',
            closeDate: null
        },
        {
            businessName: 'The Brick',
            jurisdiction: 'BC',
            address: '',
            creationDate: '2000-09-01',
            status: 'ACTIVE',
            closeDate: null
        },
        {
            businessName: 'Ethan Allen',
            jurisdiction: 'ON',
            address: '',
            creationDate: '2000-09-01',
            status: 'ACTIVE',
            closeDate: null
        },
        {
            businessName: 'Ethan Allen',
            jurisdiction: 'BC',
            address: '',
            creationDate: '2000-09-01',
            status: 'ACTIVE',
            closeDate: null
        }
    ],
    businessNameFilings: [                    
        {
            businessName: 'The Brick',
            jurisdiction: 'ON',
            subName: 'Jane Doe',
            dueDate: '2000-09-01',
            confirmation: 'S:/filings/thebrick2001on.pdf'
        },
        {
            businessName: 'Ethan Allen',
            jurisdiction: 'ON',
            subName: 'Jane Doe',
            dueDate: '2000-09-01',
            confirmation: 'S:/filings/thebrick2001on.pdf'
        },             
        {
            businessName: 'The Brick',
            jurisdiction: 'BC',
            subName: 'Jane Doe',
            dueDate: '2000-09-01',
            confirmation: 'S:/filings/thebrick2001on.pdf'
        },
        {
            businessName: 'Ethan Allen',
            jurisdiction: 'BC',
            subName: 'Jane Doe',
            dueDate: '2000-09-01',
            confirmation: 'S:/filings/thebrick2001on.pdf'
        },
    ]       
    
},
{
    name: 'Discount Furniture Corp',
    address: '234 Second Street, Mississauga, ON',
    dateCreated: '1999-09-01',
    status: 'ACTIVE',
    corpID: '455FE6',
    corporateJurisdictions: [
        {
            jurisdiction: 'BC 2',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            endDate: null
        },
        {
            jurisdiction: 'MB',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            endDate: null
        },
        {
            jurisdiction: 'ON',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            endDate: null
        },
        {
            jurisdiction: 'PQ',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            endDate: null
        },
    ],
    corporateFilings: [
        {                
            name: 'Furniture Corp',
            jurisdiction: 'BC 2',
            dueDate: '2000-09-01',
            subName: 'Jane Doe',
            confirmation: 'S:/filings/furniturcorp2000bc.pdf'                
        },
        {                
            name: 'Furniture Corp',
            jurisdiction: 'MB',
            dueDate: '2000-09-01',
            subName: 'Jane Doe',
            confirmation: 'S:/filings/furniturcorp2000mb.pdf'                
        },
        {                
            name: 'Furniture Corp',
            jurisdiction: 'ON',
            dueDate: '2000-09-01',
            subName: 'Jane Doe',
            confirmation: 'S:/filings/furniturcorp2000on.pdf'                
        },
        {                
            name: 'Furniture Corp',
            jurisdiction: 'PQ',
            dueDate: '2000-09-01',
            subName: 'Jane Doe',
            confirmation: 'S:/filings/furniturcorp2000pq.pdf'                
        }
    ],
    dO: [
        {
            name: 'John Doe 2',
            position: 'CEO',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            address: '123 First Lane, Toronto, ON, CA',
            phone: '555-555-5555',
            email: 'jdoe@email.ca',
            endDate: null
        },
        {
            name: 'James Smith',
            position: 'CFO',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            address: '123 First Lane, Toronto, ON, CA',
            phone: '555-555-5555',
            email: 'jsmith@email.ca',
            endDate: null
        },
        {
            name: 'Jane Doe',
            position: 'Corporate Secretary',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            address: '123 First Lane, Toronto, ON, CA',
            phone: '555-555-5555',
            email: 'janedoe@email.ca',
            endDate: null
        },
        {
            name: 'John Snow',
            position: 'Director',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            address: '123 First Lane, Toronto, ON, CA',
            phone: '555-555-5555',
            email: 'jsnow@email.ca',
            endDate: null
        },
        {
            name: 'Catherine White',
            position: 'Director',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            address: '123 First Lane, Toronto, ON, CA',
            phone: '555-555-5555',
            email: 'cwhite@email.ca',
            endDate: null
        }
    ],
    businessNames: [
        {
            businessName: 'The Brick 2',
            jurisdiction: 'ON',
            address: '',
            creationDate: '2000-09-01',
            status: 'ACTIVE',
            closeDate: null
        },
        {
            businessName: 'The Brick',
            jurisdiction: 'BC',
            address: '',
            creationDate: '2000-09-01',
            status: 'ACTIVE',
            closeDate: null
        },
        {
            businessName: 'Ethan Allen',
            jurisdiction: 'ON',
            address: '',
            creationDate: '2000-09-01',
            status: 'ACTIVE',
            closeDate: null
        },
        {
            businessName: 'Ethan Allen',
            jurisdiction: 'BC',
            address: '',
            creationDate: '2000-09-01',
            status: 'ACTIVE',
            closeDate: null
        }
    ],
    businessNameFilings: [                    
        {
            businessName: 'The Brick 2',
            jurisdiction: 'ON',
            subName: 'Jane Doe',
            dueDate: '2000-09-01',
            confirmation: 'S:/filings/thebrick2001on.pdf'
        },
        {
            businessName: 'Ethan Allen',
            jurisdiction: 'ON',
            subName: 'Jane Doe',
            dueDate: '2000-09-01',
            confirmation: 'S:/filings/thebrick2001on.pdf'
        },             
        {
            businessName: 'The Brick',
            jurisdiction: 'BC',
            subName: 'Jane Doe',
            dueDate: '2000-09-01',
            confirmation: 'S:/filings/thebrick2001on.pdf'
        },
        {
            businessName: 'Ethan Allen',
            jurisdiction: 'BC',
            subName: 'Jane Doe',
            dueDate: '2000-09-01',
            confirmation: 'S:/filings/thebrick2001on.pdf'
        },
    ]       
    
},
{
    name: 'Elite Furniture Corp',
    address: '34 Second Street, Mississauga, ON',
    dateCreated: '1999-09-01',
    status: 'ACTIVE',
    corpID: '455FE6',
    corporateJurisdictions: [
        {
            jurisdiction: 'BC 3',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            endDate: null
        },
        {
            jurisdiction: 'MB',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            endDate: null
        },
        {
            jurisdiction: 'ON',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            endDate: null
        },
        {
            jurisdiction: 'PQ',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            endDate: null
        },
    ],
    corporateFilings: [
        {                
            name: 'Furniture Corp',
            jurisdiction: 'BC 3',
            dueDate: '2000-09-01',
            subName: 'Jane Doe',
            confirmation: 'S:/filings/furniturcorp2000bc.pdf'                
        },
        {                
            name: 'Furniture Corp',
            jurisdiction: 'MB',
            dueDate: '2000-09-01',
            subName: 'Jane Doe',
            confirmation: 'S:/filings/furniturcorp2000mb.pdf'                
        },
        {                
            name: 'Furniture Corp',
            jurisdiction: 'ON',
            dueDate: '2000-09-01',
            subName: 'Jane Doe',
            confirmation: 'S:/filings/furniturcorp2000on.pdf'                
        },
        {                
            name: 'Furniture Corp',
            jurisdiction: 'PQ',
            dueDate: '2000-09-01',
            subName: 'Jane Doe',
            confirmation: 'S:/filings/furniturcorp2000pq.pdf'                
        }
    ],
    dO: [
        {
            name: 'John Doe 3',
            position: 'CEO',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            address: '123 First Lane, Toronto, ON, CA',
            phone: '555-555-5555',
            email: 'jdoe@email.ca',
            endDate: null
        },
        {
            name: 'James Smith',
            position: 'CFO',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            address: '123 First Lane, Toronto, ON, CA',
            phone: '555-555-5555',
            email: 'jsmith@email.ca',
            endDate: null
        },
        {
            name: 'Jane Doe',
            position: 'Corporate Secretary',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            address: '123 First Lane, Toronto, ON, CA',
            phone: '555-555-5555',
            email: 'janedoe@email.ca',
            endDate: null
        },
        {
            name: 'John Snow',
            position: 'Director',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            address: '123 First Lane, Toronto, ON, CA',
            phone: '555-555-5555',
            email: 'jsnow@email.ca',
            endDate: null
        },
        {
            name: 'Catherine White',
            position: 'Director',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            address: '123 First Lane, Toronto, ON, CA',
            phone: '555-555-5555',
            email: 'cwhite@email.ca',
            endDate: null
        }
    ],
    businessNames: [
        {
            businessName: 'The Brick 3',
            jurisdiction: 'ON',
            address: '',
            creationDate: '2000-09-01',
            status: 'ACTIVE',
            closeDate: null
        },
        {
            businessName: 'The Brick',
            jurisdiction: 'BC',
            address: '',
            creationDate: '2000-09-01',
            status: 'ACTIVE',
            closeDate: null
        },
        {
            businessName: 'Ethan Allen',
            jurisdiction: 'ON',
            address: '',
            creationDate: '2000-09-01',
            status: 'ACTIVE',
            closeDate: null
        },
        {
            businessName: 'Ethan Allen',
            jurisdiction: 'BC',
            address: '',
            creationDate: '2000-09-01',
            status: 'ACTIVE',
            closeDate: null
        }
    ],
    businessNameFilings: [                    
        {
            businessName: 'The Brick 3',
            jurisdiction: 'ON',
            subName: 'Jane Doe',
            dueDate: '2000-09-01',
            confirmation: 'S:/filings/thebrick2001on.pdf'
        },
        {
            businessName: 'Ethan Allen',
            jurisdiction: 'ON',
            subName: 'Jane Doe',
            dueDate: '2000-09-01',
            confirmation: 'S:/filings/thebrick2001on.pdf'
        },             
        {
            businessName: 'The Brick',
            jurisdiction: 'BC',
            subName: 'Jane Doe',
            dueDate: '2000-09-01',
            confirmation: 'S:/filings/thebrick2001on.pdf'
        },
        {
            businessName: 'Ethan Allen',
            jurisdiction: 'BC',
            subName: 'Jane Doe',
            dueDate: '2000-09-01',
            confirmation: 'S:/filings/thebrick2001on.pdf'
        },
    ]       
    
}
] */

const startData = [{
    name: '',
    address: '',
    dateCreated: '',
    status: '',
    corpID: '',
    corporateJurisdictions: [],
    corporateFilings: [],
    dO: [],
    businessNames: [],
    businessNameFilings: []       
    
}];

const initialState = () => {
    return {
        currentEntity: [0],
        currentDO: [0],
        currentBN: [0],
        currentBNF: [0],
        currentCF: [0],
        currentCJ: [0],
        entities: startData
    }
}

const entityDataSlice = createSlice({
    name: 'entityData',
    initialState: initialState(),
    reducers: {
        resetEntityData: () => initialState(),
        loadExistingEntities: (state, action) => {
            state.entities = action.payload;
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
        setCurrentCJ: (state, action) => {
            state.currentCJ = action.payload;
        },
        addNewEntity: (state, action) => {
            state.entities.push(
                action.payload/* ,
                corporateJurisdictions: [],
                corporateFilings: [],
                dO: [],
                businessNames: [],
                businessNameFilings: []  */
            );
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
        addNewCJ: (state, action) => {
            state.entities[state.currentEntity].corporateJurisdictions.push(action.payload)
        },
        updateEntity: (state, action) => {
            state.entities[state.currentEntity] = {
                id: action.payload.id,
                user_id: action.payload.user_id,
                name: action.payload.name,
                address: action.payload.address,
                dateCreated: action.payload.dateCreated,
                status: action.payload.status,
                corpID: action.payload.corpID,
                corporateJurisdictions: state.entities[state.currentEntity].corporateJurisdictions,  
                corporateFilings: state.entities[state.currentEntity].corporateFilings,    
                dO: state.entities[state.currentEntity].dO,    
                businessNames: state.entities[state.currentEntity].businessNames,    
                businessNameFilings: state.entities[state.currentEntity].businessNameFilings,
            }
        },
        updateDO: (state, action) => {
            state.entities[state.currentEntity].dO[state.currentDO] = action.payload
        },
        updateBN: (state, action) => {
            state.entities[state.currentEntity].businessNames[state.currentBN] = action.payload
        },
        updateBNF: (state, action) => {
            state.entities[state.currentEntity].businessNameFilings[state.currentBNF] = action.payload
        },
        updateCF: (state, action) => {
            state.entities[state.currentEntity].corporateFilings[state.currentCF] = action.payload
        },
        updateCJ: (state, action) => {
            state.entities[state.currentEntity].corporateJurisdictions[state.currentCJ] = action.payload
        }
    }
});

export const {resetEntityData, loadExistingEntities, addNewEntity, addNewDO, setCurrentEntity, addNewBN, addNewBNF, addNewCF, setCurrentDO, updateDO, setCurrentBN, updateBN, setCurrentBNF, updateBNF, setCurrentCF, updateEntity, updateCF, setCurrentCJ, addNewCJ, updateCJ } = entityDataSlice.actions
export const selectEntityData = (state) => state.entityData.entities
export const selectCurrentEntity = (state) => state.entityData.currentEntity
export default entityDataSlice.reducer
