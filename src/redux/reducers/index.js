import { combineReducers } from 'redux';
import { createStore } from 'redux';
import cartReducer from './cart';

const allReducers = combineReducers({
    cart: cartReducer
});

export const store = createStore( allReducers )

