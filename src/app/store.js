import { combineReducers, configureStore } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';
import entityReducer from '../features/entityData/entityDataSlice'
import userReducer from '../features/userData/userDataSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';


const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  userData: userReducer,
  entityData: entityReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  //devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

export const persistor = persistStore(store)

/* export const store = configureStore({
  reducer: {
    userData: userReducer,
    entityData: entityReducer,  },
}); */
