import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootreducers from "./components/redux/reducers/main.js";

//import { combineReducers } from "@reduxjs/toolkit";
import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig={
    key:"root",
    storage
}

const persistedReducer = persistReducer(persistConfig,rootreducers);
const middleware = [thunk];



const store = configureStore(  
{
    reducer:persistedReducer,
    middleware
}
);

const persistor=persistStore(store)
export default store;
export {persistor};