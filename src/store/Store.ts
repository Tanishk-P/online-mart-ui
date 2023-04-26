import { applyMiddleware, legacy_createStore as createStore} from 'redux';
// import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import rootReducer from './RootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk)); 

export default store;