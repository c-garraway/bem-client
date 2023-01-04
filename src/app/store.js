import { configureStore } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';
import entityReducer from '../features/entityData/entityDataSlice'
import userReducer from '../features/userData/userDataSlice'

export const store = configureStore({
  reducer: {
    userData: userReducer,
    entityData: entityReducer,  },
});
