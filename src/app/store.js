import { configureStore } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';
import entityReducer from '../features/entityData/entityDataSlice'

export const store = configureStore({
  reducer: {
    entityData: entityReducer,
  },
});
