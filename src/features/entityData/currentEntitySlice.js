import { createSlice } from "@reduxjs/toolkit";



const initialState = () => {
    return [0]
}

const currentEntitySlice = createSlice({
    name: 'currentEntity',
    initialState: initialState(),
    reducers: {
        setCurrentEntity: (state, action) => {
            state[0] = action.payload;
        },
        resetCurrentEntity: () => initialState()
    }
});

export const {resetCurrentEntity, setCurrentEntity } = currentEntitySlice.actions
export const selectCurrentEntity = (state) => state.currentEntity
export default currentEntitySlice.reducer