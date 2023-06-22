import { createStore } from "redux"
import { Reducer } from "./Reducer"
import ReducerTwo from "./ReducerTwo"
import { combineReducers } from "redux"
// import ReducerAddToCard from "./ReducerForAddtoCard"
import { persistStore , persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { FetchReducer } from "./FetchReducer"
import {FourthReducer} from  './Addreducer'
// import rootReducer from './reducers'
 

const rootReducer = combineReducers({
    Reducer,
  ReducerTwo,
  FetchReducer,
  FourthReducer,
})

const persistConfig = {
  key: 'root',
 storage
}
 
 const persistedReducer = persistReducer(persistConfig, rootReducer)
     
 
 export const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
 export const persistor = persistStore(store)
