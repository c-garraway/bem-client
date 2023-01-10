import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
    return {
        isLoggedIn: false,
        currentUser: [/* {
            email: 'guest@email.com',
            firstName: 'Guest',
            lastName: 'User',
            companyName: 'Whole Home Decor Corporation',
            entityDataIndex: 0
        } */],

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
        setIsLoggedIn: (state) => {
            state.isLoggedIn = true;
        }
    }
});

export const {resetUserData, setCurrentUser, setIsLoggedIn} = userDataSlice.actions;
export const selectCurrentUser = (state) => state.userData.currentUser;
export const selectIsLoggedIn = (state) => state.userData.isLoggedIn;
export default userDataSlice.reducer;