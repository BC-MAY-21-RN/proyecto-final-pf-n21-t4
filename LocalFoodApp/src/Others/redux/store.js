import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import LocalFoodReducer from './reducers/reducers';

const rootReducer = combineReducers({ LocalFoodReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk))