import { configureStore } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';
import entityReducer from '../features/entityData/entityDataSlice'
import currentEntityReducer from '../features/entityData/currentEntitySlice';

export const store = configureStore({
  reducer: {
    entityData: entityReducer,
    currentEntity: currentEntityReducer,
  },
});
