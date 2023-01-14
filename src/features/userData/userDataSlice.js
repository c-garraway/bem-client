import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
    return {
        isLoggedIn: false,
        currentUser: 'none',
        currentTab: 0

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
        },
        setCurrentTab: (state, action) => {
            state.currentTab = action.payload;
        }
    }
});

export const {resetUserData, setCurrentUser, setIsLoggedIn, setCurrentTab} = userDataSlice.actions;
export const selectCurrentUser = (state) => state.userData.currentUser;
export const selectIsLoggedIn = (state) => state.userData.isLoggedIn;
export const selectCurrentTab = (state) => state.userData.currentTab;
export default userDataSlice.reducer;