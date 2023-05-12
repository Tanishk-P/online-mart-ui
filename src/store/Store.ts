import { applyMiddleware, legacy_createStore as createStore} from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import ThunkMiddleware from 'redux-thunk';
import thunk from 'redux-thunk';
import rootReducer from './RootReducer';

const store = configureStore({ middleware: [ThunkMiddleware], reducer: rootReducer }) 

export default store;