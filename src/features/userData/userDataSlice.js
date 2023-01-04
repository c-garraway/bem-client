import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
    return {
        currentUser: [{
            email: 'guest@email.com',
            firstName: 'Guest',
            lastName: 'User',
            companyName: 'Whole Home Decor Corporation',
            entityDataIndex: 0
        }],

    }
}

const userDataSlice = createSlice({
    name: 'userData',
    initialState: initialState(),
    reducers: {
        resetUserData: () => initialState(),
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
    }
});

export const {resetUserData, setCurrentUser} = userDataSlice.actions;
export const selectCurrentUser = (state) => state.userData.currentUser;
export default userDataSlice.reducer;